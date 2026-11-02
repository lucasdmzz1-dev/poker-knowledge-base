import { lerLeaks } from "@/lib/analise"
import { lerHud } from "@/lib/hud"
import { CHAVES_NUVEM, enviarTudo } from "@/lib/sync"
import { nuvemAtiva } from "@/lib/nuvem"

// Os dados da Análise ficam no navegador. O backup leva tudo isso para um arquivo.
// A chave da API e os prints (imagens) não entram. As chaves são as mesmas que
// sobem para a conta de cada jogador.
export const CHAVES_BACKUP = CHAVES_NUVEM

interface Arquivo {
  app: "poker-kb"
  versao: 1
  exportadoEm: string
  dados: Record<string, unknown>
}

export function montarBackup(): Arquivo {
  const dados: Record<string, unknown> = {}
  for (const k of CHAVES_BACKUP) {
    try {
      const bruto = localStorage.getItem(k)
      if (bruto) dados[k] = JSON.parse(bruto)
    } catch {
      /* chave ilegível: fica de fora */
    }
  }
  return {
    app: "poker-kb",
    versao: 1,
    exportadoEm: new Date().toISOString(),
    dados,
  }
}

export function baixarBackup(): void {
  const blob = new Blob([JSON.stringify(montarBackup(), null, 1)], {
    type: "application/json",
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `poker-kb-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// Devolve quantas chaves foram restauradas, ou lança um erro com o motivo.
export async function restaurarBackup(arquivo: File): Promise<number> {
  let bruto: unknown
  try {
    bruto = JSON.parse(await arquivo.text())
  } catch {
    throw new Error("Esse arquivo não é um backup válido.")
  }
  const o = bruto as Partial<Arquivo> | null
  if (
    !o ||
    o.app !== "poker-kb" ||
    typeof o.dados !== "object" ||
    o.dados === null
  )
    throw new Error("Esse arquivo não é um backup do Poker KB.")
  let n = 0
  for (const k of CHAVES_BACKUP) {
    const v = (o.dados as Record<string, unknown>)[k]
    if (typeof v !== "object" || v === null) continue
    try {
      localStorage.setItem(k, JSON.stringify(v))
      n++
    } catch {
      throw new Error("O navegador não deixou guardar os dados.")
    }
  }
  if (n === 0) throw new Error("O backup está vazio.")
  if (nuvemAtiva) await enviarTudo().catch(() => {})
  return n
}

// Para o cartão de primeiros passos: nada preenchido ainda.
export function analiseVazia(): boolean {
  const semStats = lerHud().every((m) =>
    Object.values(m.valores).every((v) => typeof v?.v !== "number")
  )
  return semStats && lerLeaks().length === 0
}
