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

const HUD = "HUD de 46k mãos (setembro), contra a referência do próprio HUD"
const SOLVER = "Painel de evolução, call open contra o solver (40bb)"

function ref(
  id: string,
  fase: Fase,
  spot: string,
  stat: string,
  real: number,
  referencia: number,
  fazer = "",
  extra: Partial<Leak> = {}
): Leak {
  return {
    id,
    mes: "2026-09",
    fase,
    spot,
    stat,
    real,
    solver: referencia,
    contra: "Referência",
    fazer,
    fonte: HUD,
    ...extra,
  }
}

// Setembro de 2026. Fonte: coaching/stats/mensal-2026-09.md e o painel de evolução.
// Onde há faixa de referência, usei o limite mais próximo do seu valor. Os de outubro entram depois.
export const LEAKS_INICIAIS: Leak[] = [
  // Pré-flop: abertura (RFI) e steal abaixo da referência
  ref(
    "rfi-btn-15",
    "preflop",
    "BTN · 15–25bb",
    "RFI",
    33,
    45,
    "Folda marginais que deveriam abrir: Kxo, 8xo, Jxs, 5xs."
  ),
  ref(
    "steal-btn",
    "preflop",
    "BTN",
    "Steal",
    48,
    60,
    "A meta do HUD é 60 a 65%."
  ),
  ref(
    "rfi-co-15",
    "preflop",
    "CO · 15–25bb",
    "RFI",
    21,
    30,
    "Abre 21% contra 30% de referência. Mesma raiz do BTN."
  ),
  ref(
    "steal-co",
    "preflop",
    "CO",
    "Steal",
    33,
    40,
    "A meta do HUD é 40 a 45%."
  ),
  ref(
    "rfi-lj-15",
    "preflop",
    "LJ · 15–25bb",
    "RFI",
    17,
    23,
    "Abre 17% contra 23% de referência."
  ),
  ref(
    "rfi-hj-15",
    "preflop",
    "HJ · 15–25bb",
    "RFI",
    21,
    26,
    "Abre 21% contra 26% de referência."
  ),
  ref(
    "rfi-co-10",
    "preflop",
    "CO · 10–15bb",
    "RFI",
    4.2,
    9,
    "Só 4% de open normal e 16% de jam (referência 9% e 20%)."
  ),
  ref(
    "jam-btn-15",
    "preflop",
    "BTN · 15–25bb",
    "Open jam",
    5.5,
    10,
    "Jam de menos em posição tardia: 5,5% contra 10%."
  ),
  ref("jam-btn-10", "preflop", "BTN · 10–15bb", "Open jam", 21, 25),
  ref("rfi-mp-15", "preflop", "MP · 15–25bb", "RFI", 16, 20),
  ref("rfi-hj-10", "preflop", "HJ · 10–15bb", "RFI", 6.3, 10),
  ref(
    "3bet-geral",
    "preflop",
    "Geral",
    "3bet",
    9.4,
    11,
    "Abaixo da meta, concentrado no BB vs steal."
  ),
  // Pré-flop: flats que perdem dinheiro (AP, em bb)
  ref(
    "flat-hj-25",
    "preflop",
    "HJ · 25–45bb",
    "Flat (AP)",
    -1.9,
    0,
    "O flat do HJ perde dinheiro. Os excessos são 33, 22 e 44.",
    { unidade: "bb" }
  ),
  ref("flat-hj-45", "preflop", "HJ · 45bb ou mais", "Flat (AP)", -1.5, 0, "", {
    unidade: "bb",
  }),
  ref("flat-sb-25", "preflop", "SB · 25–45bb", "Flat (AP)", -1.0, 0, "", {
    unidade: "bb",
  }),
  // Pré-flop: call open contra o solver
  {
    id: "sol-sb-3bet",
    mes: "2026-09",
    fase: "preflop",
    spot: "SB contra BTN",
    stat: "3-bet",
    real: 11.1,
    solver: 16.9,
    fazer:
      "3-betar AJo e KQo em vez de pagar, e jogar KTo, JTo, QTo, A8o e A9o.",
    fonte: SOLVER,
  },
  {
    id: "sol-btn-fold",
    mes: "2026-09",
    fase: "preflop",
    spot: "BTN contra CO",
    stat: "Fold",
    real: 80.0,
    solver: 76.3,
    fazer: "Parar de foldar A9o, KTo, QJo, Q8s, T8s e 87s.",
    fonte: SOLVER,
  },
  {
    id: "sol-btn-call",
    mes: "2026-09",
    fase: "preflop",
    spot: "BTN contra CO",
    stat: "Call",
    real: 10.2,
    solver: 13.9,
    fazer: "Pagar mais AQo e ATo, em vez de 3-betar.",
    fonte: SOLVER,
  },
  {
    id: "sol-hj-call",
    mes: "2026-09",
    fase: "preflop",
    spot: "HJ contra LJ",
    stat: "Call",
    real: 7.0,
    solver: 5.0,
    fazer: "Não pagar 22, 33 e 44 (o solver folda), e 3-betar o AJo.",
    fonte: SOLVER,
  },

  // Pós-flop
  ref(
    "turn-oop",
    "posflop",
    "Turn c-bet fora de posição",
    "Freq.",
    38,
    65,
    "Desiste do turn fora de posição. Maior desvio do mês. Ver módulo 05."
  ),
  ref(
    "xc-oop",
    "posflop",
    "X/C após o check fora de posição",
    "Freq.",
    59,
    40,
    "Paga demais após o check e folda de menos (X/F 24 contra 35–40)."
  ),
  ref(
    "river-ip",
    "posflop",
    "Fold no river em posição",
    "Freq.",
    40,
    50,
    "Paga demais com bluff-catchers fracos. Ver módulo 04."
  ),
  ref(
    "2nd-ip",
    "posflop",
    "Fold no turn vs 2nd barrel em posição",
    "Freq.",
    32,
    40,
    "Continua demais contra o segundo barrel. Ver módulo 04."
  ),
  ref(
    "delayed-oop",
    "posflop",
    "Delayed c-bet fora de posição",
    "Freq.",
    62,
    70,
    "Usa o delayed, mas abaixo do ideal."
  ),
  ref(
    "turn-ip",
    "posflop",
    "Turn c-bet em posição",
    "Freq.",
    53,
    60,
    "Poucos barrels também em posição."
  ),
  ref(
    "xr-ip",
    "posflop",
    "Fold vs check-raise em posição",
    "Freq.",
    28,
    35,
    "Paga check-raise com mãos marginais."
  ),
  ref(
    "raise-flop-ip",
    "posflop",
    "Raise de flop em posição",
    "Freq.",
    3.1,
    10,
    "Quase não sobe e as subidas perdem dinheiro (−5 por spot)."
  ),
  ref(
    "river-oop",
    "posflop",
    "Fold no river fora de posição",
    "Freq.",
    60,
    55,
    "Folda demais fora de posição."
  ),
  ref(
    "wwsf",
    "posflop",
    "Geral",
    "WWSF",
    44,
    48,
    "Abaixo da faixa ideal (48 a 51). Entender onde as fichas não são realizadas."
  ),
  ref(
    "xr-turn-bb",
    "posflop",
    "X/R de turn no BB",
    "Freq.",
    5.8,
    10,
    "Pouco check-raise no turn."
  ),
]

// Pontos críticos que o próprio arquivo do mês destaca.
export const PONTOS_CRITICOS: Record<string, string[]> = {
  "2026-09": [
    "Pós-flop fora de posição: turn c-bet, 2nd barrel e river.",
    "RFI do BTN (33 contra 45) e jam de abertura do BTN (5,5 contra 10).",
    "Flats perdedores de HJ e SB entre 25bb e 45bb ou mais.",
    "WWSF em 44, abaixo da faixa ideal.",
  ],
}

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
