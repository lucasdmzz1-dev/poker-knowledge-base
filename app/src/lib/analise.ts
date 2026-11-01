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
  tipo?: "mes" | "semana"
  valores: Record<string, number | null>
}

export interface Painel {
  metricas: string[]
  metas: Record<string, string>
  semanas: Semana[]
}

export const CHAVES = { leaks: "pkb:leaks", painel: "pkb:painel" }

// Stats mensais de setembro de 2026 (HUD LuqqDamz, 46k mãos), de coaching/stats/mensal-2026-09.md.
// Foram lidas dos prints: confira os decimais contra a tela antes de citar um número exato.
export const FONTE_PAINEL =
  "Setembro de 2026: snapshot do HUD (46k mãos), lido dos prints. Confira os decimais contra a tela."

const SETEMBRO: Record<string, number> = {
  VPIP: 26,
  PFR: 17,
  "3bet": 9.4,
  "Fold vs 3bet": 50,
  Squeeze: 8,
  "Steal CO": 33,
  "Steal BTN": 48,
  WTSD: 28,
  W$SD: 51,
  WWSF: 44,
  "C-bet flop IP": 87,
  "C-bet flop OOP": 25,
  "C-bet turn IP": 53,
  "C-bet turn OOP": 38,
  "Fold vs X/R IP": 28,
  "Fold no turn vs 2nd barrel IP": 32,
  "Fold no turn vs 2nd barrel OOP": 47,
  "Delayed c-bet OOP": 62,
  "Delayed c-bet IP": 59,
  "X/C OR OOP": 59,
  "X/R turn BB": 5.8,
  "Fold no river IP": 40,
  "Fold no river OOP": 60,
  "Raise no flop IP": 3.1,
}

const METAS: Record<string, string> = {
  "3bet": "11 a 14",
  "Fold vs 3bet": "48 a 55",
  "Steal CO": "40 a 45",
  "Steal BTN": "60 a 65",
  WWSF: "48 a 51",
  "C-bet flop IP": "80 a 100",
  "C-bet turn IP": "60",
  "C-bet turn OOP": "65",
  "Fold vs X/R IP": "35 a 40",
  "Fold no turn vs 2nd barrel IP": "40 a 45",
  "Fold no turn vs 2nd barrel OOP": "45 a 50",
  "Delayed c-bet OOP": "70",
  "Delayed c-bet IP": "60",
  "X/C OR OOP": "35 a 40",
  "X/R turn BB": "10",
  "Fold no river IP": "50",
  "Fold no river OOP": "55 ou menos",
  "Raise no flop IP": "10 a 15",
}

export const PAINEL_INICIAL: Painel = {
  metricas: Object.keys(SETEMBRO),
  metas: METAS,
  semanas: [
    {
      id: "mes-2026-09",
      rotulo: "Setembro de 2026",
      tipo: "mes",
      valores: SETEMBRO,
    },
  ],
}

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
  const bruto = readJSON<unknown>(
    CHAVES.painel,
    null,
    (v) => ehObj(v) && Array.isArray(v.metricas) && Array.isArray(v.semanas)
  )
  if (!ehObj(bruto)) return PAINEL_INICIAL
  const metricas = (bruto.metricas as unknown[]).filter(
    (m): m is string => typeof m === "string"
  )
  const semanas = (bruto.semanas as unknown[]).filter(
    (x): x is Semana =>
      ehObj(x) &&
      typeof x.id === "string" &&
      typeof x.rotulo === "string" &&
      ehObj(x.valores)
  )
  const metas = ehObj(bruto.metas)
    ? (bruto.metas as Record<string, string>)
    : METAS
  return { metricas, metas, semanas }
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
