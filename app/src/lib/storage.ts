import type { Sessao, Ultimo } from "@/lib/poker"

export function readJSON<T>(
  key: string,
  fallback: T,
  valido?: (v: unknown) => boolean
): T {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    const v: unknown = JSON.parse(raw)
    return valido && !valido(v) ? fallback : (v as T)
  } catch {
    return fallback
  }
}

export function writeJSON(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // armazenamento indisponível: a página segue funcionando sem histórico
  }
}

export const KEYS = {
  sessions: "pkb:sessions",
  last: "pkb:last",
}

function ehObjeto(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null
}

export function ehUltimo(v: unknown): boolean {
  return ehObjeto(v) && typeof v.to === "string" && typeof v.label === "string"
}

function ehSessao(v: unknown): boolean {
  return (
    ehObjeto(v) &&
    typeof v.id === "number" &&
    typeof v.total === "number" &&
    typeof v.acertos === "number" &&
    typeof v.levar === "boolean" &&
    Array.isArray(v.itens) &&
    v.itens.every(
      (i) =>
        ehObjeto(i) && typeof i.tipo === "string" && typeof i.ok === "boolean"
    )
  )
}

export function lerUltimo(fallback: Ultimo): Ultimo {
  return readJSON<Ultimo>(KEYS.last, fallback, ehUltimo)
}

// Descarta sessões em formato desconhecido em vez de quebrar a tela.
export function lerSessoes(): Sessao[] {
  const bruto = readJSON<unknown[]>(KEYS.sessions, [], Array.isArray)
  return bruto.filter(ehSessao) as Sessao[]
}
