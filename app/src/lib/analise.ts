import { readJSON } from "@/lib/storage"

export interface Leak {
  id: string
  mes: string // "2026-10"
  spot: string
  stat: string
  real: number
  solver: number
  fazer: string
  fonte?: string
}

export interface Semana {
  id: string
  rotulo: string
  valores: Record<string, number | null>
}

export interface Painel {
  metricas: string[]
  semanas: Semana[]
}

export const CHAVES = { leaks: "pkb:leaks", painel: "pkb:painel" }

export const METRICAS_PADRAO = [
  "VPIP",
  "PFR",
  "3bet",
  "Fold vs 3bet",
  "C-bet flop",
  "Fold vs c-bet",
  "WTSD",
  "W$SD",
]

const FONTE = "Painel de evolução, 28/10/2026 (call open contra o solver, 40bb)"

// Resultados que já estavam no KB (coaching/stats/retomada-stats.md).
export const LEAKS_INICIAIS: Leak[] = [
  {
    id: "seed-btn-fold",
    mes: "2026-10",
    spot: "BTN contra CO",
    stat: "Fold",
    real: 80.0,
    solver: 76.3,
    fazer: "Parar de foldar A9o, KTo, QJo, Q8s, T8s e 87s.",
    fonte: FONTE,
  },
  {
    id: "seed-sb-3bet",
    mes: "2026-10",
    spot: "SB contra BTN",
    stat: "3-bet",
    real: 11.1,
    solver: 16.9,
    fazer:
      "3-betar AJo e KQo em vez de pagar, e jogar KTo, JTo, QTo, A8o e A9o.",
    fonte: FONTE,
  },
  {
    id: "seed-btn-call",
    mes: "2026-10",
    spot: "BTN contra CO",
    stat: "Call",
    real: 10.2,
    solver: 13.9,
    fazer: "Pagar mais AQo e ATo, em vez de 3-betar.",
    fonte: FONTE,
  },
  {
    id: "seed-hj-call",
    mes: "2026-10",
    spot: "HJ contra LJ",
    stat: "Call",
    real: 7.0,
    solver: 5.0,
    fazer: "Não pagar 22, 33 e 44 (o solver folda), e 3-betar o AJo.",
    fonte: FONTE,
  },
]

function ehObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null
}

export function lerLeaks(): Leak[] {
  const bruto = readJSON<unknown>(CHAVES.leaks, null, Array.isArray)
  if (!Array.isArray(bruto)) return LEAKS_INICIAIS
  return bruto.filter(
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
}

export function lerPainel(): Painel {
  const vazio: Painel = { metricas: METRICAS_PADRAO, semanas: [] }
  const bruto = readJSON<unknown>(
    CHAVES.painel,
    vazio,
    (v) => ehObj(v) && Array.isArray(v.metricas) && Array.isArray(v.semanas)
  )
  if (!ehObj(bruto)) return vazio
  const metricas = (bruto.metricas as unknown[]).filter(
    (m): m is string => typeof m === "string"
  )
  const semanas = (bruto.semanas as unknown[]).filter(
    (s): s is Semana =>
      ehObj(s) &&
      typeof s.id === "string" &&
      typeof s.rotulo === "string" &&
      ehObj(s.valores)
  )
  return { metricas, semanas }
}

const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

export function rotuloMes(mes: string): string {
  const [a, m] = mes.split("-")
  const nome = MESES[Number(m) - 1]
  return nome ? `${nome} de ${a}` : mes
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
