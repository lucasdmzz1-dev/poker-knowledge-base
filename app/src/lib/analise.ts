import { readJSON } from "@/lib/storage"

export type Fase = "preflop" | "posflop"

export interface Leak {
  id: string
  mes: string // "2026-09"
  fase: Fase
  spot: string
  stat: string
  real: number
  solver: number // o valor de referência (solver, meta do HUD ou 0)
  contra?: string // "Solver" (padrão) ou "Referência"
  unidade?: "%" | "bb"
  fazer: string
  fonte?: string
  secao?: string // divisão da teoria; sem isso, vale a inferida por secaoDoLeak
}

export const CHAVES = { leaks: "pkb:leaks" }

// Quem chega começa sem leaks: eles vêm das stats do HUD ou do "Adicionar leak".
export const LEAKS_INICIAIS: Leak[] = []

// Pontos críticos de um mês, quando você quiser registrar (mês "2026-09" -> lista).
export const PONTOS_CRITICOS: Record<string, string[]> = {}

function ehObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null
}

export function lerLeaks(): Leak[] {
  const bruto = readJSON<unknown>(CHAVES.leaks, null, Array.isArray)
  if (!Array.isArray(bruto)) return LEAKS_INICIAIS
  return bruto
    .filter(
      (l): l is Leak =>
        ehObj(l) &&
        typeof l.id === "string" &&
        typeof l.mes === "string" &&
        typeof l.spot === "string" &&
        typeof l.stat === "string" &&
        typeof l.real === "number" &&
        typeof l.solver === "number" &&
        typeof l.fazer === "string"
    )
    .map((l) => ({ ...l, fase: l.fase === "posflop" ? "posflop" : "preflop" }))
}

const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
]

// Em minúsculas, para caber no meio da frase. Use capitalizar() no início de um rótulo.

export function rotuloMes(mes: string): string {
  const [a, m] = mes.split("-")
  const nome = MESES[Number(m) - 1]
  return nome ? `${nome} de ${a}` : mes
}

export function capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

// Divisões da teoria, as mesmas do HUD.
export const SECOES_LEAK = [
  "Pré-flop",
  "SRP como agressor",
  "SRP como 3beter",
  "SRP como caller",
  "3bet pot",
  "Blind war",
  "Flop, turn e river",
  "Multiway e combatividade",
]

// Palpite pela estatística; dá para trocar a divisão de cada leak na lista.
export function secaoDoLeak(l: Leak): string {
  if (l.secao && SECOES_LEAK.includes(l.secao)) return l.secao
  const t = `${l.spot} ${l.stat}`.toLowerCase()
  if (l.fase === "preflop") {
    if (/3-?bet/.test(t)) return "SRP como 3beter"
    if (/flat/.test(t)) return "SRP como caller"
    if (/^(sb|bb)/.test(l.spot.toLowerCase())) return "Blind war"
    return "Pré-flop"
  }
  if (/3bet pot/.test(t)) return "3bet pot"
  if (/multiway/.test(t)) return "Multiway e combatividade"
  if (/c-bet|delayed|vs check-raise/.test(t)) return "SRP como agressor"
  if (/raise de flop|2nd barrel|x\/r/.test(t)) return "SRP como caller"
  return "Flop, turn e river"
}

export function desvio(l: Leak): number {
  return Math.round((l.real - l.solver) * 10) / 10
}

export function fmt(n: number): string {
  return n.toFixed(1).replace(".", ",")
}

export function novoId(): string {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`
}
