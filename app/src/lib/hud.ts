import { rotuloMes, type Leak } from "@/lib/analise"
import { readJSON } from "@/lib/storage"

// As stats gerais que você recebe todo mês no HUD (HUNTER). Cada stat tem o valor,
// o AP (lucro médio), o NAI quando existe, a meta e o tamanho da amostra quando é pequeno.

export interface StatDef {
  id: string
  secao: string
  bloco: string
  nome: string
  meta?: string
}

export interface ValorStat {
  v: number | null
  ap?: number | null
  nai?: number | null
  n?: number
}

export interface MesHud {
  mes: string // "2026-09"
  valores: Record<string, ValorStat>
}

export const CHAVE_HUD = "pkb:hud"
export const CHAVE_FIXADAS = "pkb:hud-fixadas"
export const CHAVE_TOL = "pkb:hud-tol"
export const TOLERANCIA_PADRAO = 2

type L = [
  nome: string,
  v: number | null,
  ap?: number | null,
  meta?: string,
  n?: number,
  nai?: number | null,
]
const U = undefined

interface Bloco {
  secao: string
  bloco: string
  linhas: L[]
}

const PRE = "Pré-flop"
const OR = "SRP como agressor"
const BET3 = "SRP como 3beter"
const CALLER = "SRP como caller"
const POT3 = "3bet pot"
const BW = "Blind war"
const FTR = "Flop, turn e river"
const MW = "Multiway e combatividade"

export const SECOES = [PRE, OR, BET3, CALLER, POT3, BW, FTR, MW]

// Definição das stats e das metas do HUD. Os valores de cada jogador entram pelos prints ou por "Editar valores".
const BLOCOS: Bloco[] = [
  {
    secao: PRE,
    bloco: "Geral",
    linhas: [
      ["VPIP", null, U, "26-29"],
      ["PFR", null, U, "20-23"],
      ["Assimetria de stack (bias, pp)", null],
      ["Mãos com 0 a 25bb (%)", null],
      ["Stack mediano (bb)", null],
      ["Mãos com 60bb ou mais (%)", null],
    ],
  },
  {
    secao: PRE,
    bloco: "RFI",
    linhas: [
      ["Steal CO", null, U, "40-45"],
      ["Steal BTN", null, U, "60-65"],
      ["RFI EP", null, U, "20"],
      ["RFI MP", null, U, "23"],
      ["RFI LJ", null, U, "27"],
      ["RFI HJ", null, U, "30"],
    ],
  },
  {
    secao: PRE,
    bloco: "3bet",
    linhas: [
      ["3bet geral", null, U, "11-14"],
      ["Fold to 3bet", null, U, "48-55"],
      ["3bet HJ", null, U, "7.5"],
      ["3bet CO", null, U, "10-11"],
      ["3bet BU", null, U, "11-13"],
      ["3bet BU vs CO", null, U, "15-17"],
      ["3bet SB", null, U, "10-12"],
      ["3bet SB vs Steal", null, U, "15-20"],
      ["3bet BB", null, U, "10-12"],
      ["3bet BB vs Steal", null, U, "15-20"],
    ],
  },
  {
    secao: PRE,
    bloco: "Call open (18bb ou mais)",
    linhas: [
      ["Call open geral", null],
      ["Call open HJ", null, U, "7-8"],
      ["Call open CO", null, U, "10-11"],
      ["Call open BU", null, U, "13-15"],
      ["Call open SB", null, U, "10-13"],
      ["Call open BB", null, U, "50-55"],
      ["Call open BB (18bb ou menos)", null, U, "55-60"],
    ],
  },
  {
    secao: PRE,
    bloco: "4bet",
    linhas: [
      ["4bet", null],
      ["Fold to 4bet", null],
      ["4bet fold", null],
      ["4bet call", null],
      ["4bet raise (5bet)", null],
    ],
  },
  {
    secao: PRE,
    bloco: "Squeeze",
    linhas: [
      ["Squeeze", null],
      ["Sqz fold", null],
      ["Sqz call", null],
      ["Sqz raise", null],
    ],
  },

  {
    secao: OR,
    bloco: "C-bet em posição",
    linhas: [
      ["C-bet IP", null, U, "80-100"],
      ["2nd barrel IP", null, U, "58-62"],
      ["3rd barrel IP", null, U, "54-56"],
      ["Delayed c-bet IP OR", null, U, "60"],
      ["B/X/B", null, U, "36-38"],
      ["B/X/C", null],
      ["B/X/F", null],
      ["B/X/R", null],
    ],
  },
  {
    secao: OR,
    bloco: "C-bet fora de posição",
    linhas: [
      ["C-bet OOP (OR)", null],
      ["2nd barrel OOP", null, U, "56-60"],
      ["3rd barrel OOP", null, U, "54-56"],
      ["X/F (OR OOP)", null, U, "35-40"],
      ["X/C (OR OOP)", null, U, "35-40"],
      ["X/R (OR OOP)", null, U, "16.5"],
      ["XC/X/B", null],
      ["B/X/B OOP", null],
      ["B/X/XC", null],
      ["B/X/XR", null],
      ["Delayed c-bet OOP", null],
      ["Brr de river após o delay", null],
    ],
  },

  {
    secao: BET3,
    bloco: "C-bet em posição (3beter)",
    linhas: [
      ["C-bet IP (3beter)", null],
      ["2nd barrel IP", null],
      ["3rd barrel IP", null],
      ["B/X/B", null],
      ["B/X/C", null],
      ["B/X/F", null],
      ["B/X/R", null],
    ],
  },
  {
    secao: BET3,
    bloco: "C-bet fora de posição (3beter)",
    linhas: [
      ["C-bet OOP (3beter)", null],
      ["2nd barrel OOP", null],
      ["3rd barrel OOP", null],
      ["X/F (3beter OOP)", null],
      ["X/C (3beter OOP)", null],
      ["X/R (3beter OOP)", null],
      ["B/X/B", null],
      ["B/X/XC ou XR", null],
      ["B/X/XF", null],
      ["Delayed c-bet", null],
    ],
  },

  {
    secao: CALLER,
    bloco: "Caller em posição",
    linhas: [
      ["Fold F", null, U, "30-32"],
      ["Call F", null],
      ["Raise de flop IP", null, U, "10-15"],
      ["Call 2nd T", null],
      ["Raise 2nd T", null],
      ["Call ou raise vs 3rd R", null],
      ["Flop bet vs miss", null],
      ["Brr T após B vs M F", null],
      ["Turn bet vs miss", null],
      ["Brr R após B vs M T", null],
    ],
  },
  {
    secao: CALLER,
    bloco: "Caller fora de posição",
    linhas: [
      ["Fold F", null, U, "48-50"],
      ["X/C F", null],
      ["X/R (BB)", null, U, "15-20"],
      ["X/C - X/C", null],
      ["X/C - X/R", null],
      ["Call ou raise vs 3rd R", null],
      ["Lead F (BB) 8hi a 10bb", null],
      ["X/C - Lead Turn (BB)", null],
      ["Prob Turn (BB)", null],
    ],
  },

  {
    secao: POT3,
    bloco: "Caller em posição",
    linhas: [
      ["Fold F", null],
      ["Call F", null],
      ["Raise de flop IP", null],
      ["Call 2nd T", null],
      ["Raise 2nd T", null],
      ["Call ou raise vs 3rd R", null],
      ["Flop bet vs miss", null],
      ["Brr T após B vs M F", null],
      ["Turn bet vs miss", null],
      ["Brr R após B vs M T", null],
    ],
  },
  {
    secao: POT3,
    bloco: "Caller fora de posição",
    linhas: [
      ["Fold F", null],
      ["X/C F", null],
      ["X/R", null],
      ["X/C - X/C", null],
      ["X/C - X/R", null],
      ["Call ou raise vs 3rd R", null],
      ["Lead flop", null],
      ["X/C - Lead Turn", null],
      ["Prob Turn", null],
    ],
  },

  {
    secao: BW,
    bloco: "SB play (pré-flop)",
    linhas: [
      ["Limp", null],
      ["Limp fold", null],
      ["Limp call", null],
      ["Limp raise", null],
      ["Raise", null],
      ["Raise fold", null],
      ["Raise call", null],
      ["Raise 4bet", null],
    ],
  },
  {
    secao: BW,
    bloco: "BB play (pré-flop)",
    linhas: [
      ["X vs limp", null],
      ["Raise vs limp", null],
      ["Fold vs raise", null],
      ["Call vs raise", null],
      ["3bet vs raise", null],
    ],
  },
  {
    secao: BW,
    bloco: "C-bet no blind war",
    linhas: [
      ["C-bet OOP (SB)", null],
      ["C-bet IP como raiser", null],
      ["C-bet IP como 3beter", null],
    ],
  },
  {
    secao: BW,
    bloco: "Extras",
    linhas: [
      ["Walk", null],
      ["C-bet de flop", null],
      ["?/F flop", null],
      ["?/C flop", null],
      ["?/R flop", null],
    ],
  },

  {
    secao: FTR,
    bloco: "Flop",
    linhas: [
      ["C-bet IP overall (HU pot)", null, U, "85-92"],
      ["C-bet OOP OR", null],
      ["Fold to X/R IP overall", null, U, "35-40"],
      ["Fold to c-bet IP SRP", null, U, "25-30"],
      ["Fold to c-bet OOP SRP", null, U, "43-46"],
      ["X/R (BB) NAI", null],
    ],
  },
  {
    secao: FTR,
    bloco: "Turn",
    linhas: [
      ["Turn c-bet IP overall", null, U, "60"],
      ["Turn c-bet OOP overall", null, U, "65"],
      ["Fold T vs 2nd barrel IP overall", null, U, "40-45"],
      ["Fold T vs 2nd barrel OOP overall", null, U, "45-50"],
      ["X/R T qualquer ação F (BB)", null, U, "10"],
      ["Delayed c-bet OOP OR", null, U, "70"],
      ["Delayed c-bet IP OR", null, U, "60"],
    ],
  },
  {
    secao: FTR,
    bloco: "River",
    linhas: [
      ["3rd barrel IP overall", null, U, "55"],
      ["3rd barrel OOP overall", null, U, "60"],
      ["3rd bluff overall", null],
      ["Fold R IP overall", null, U, "50"],
      ["Fold R OOP overall", null, U, "55"],
    ],
  },

  {
    secao: MW,
    bloco: "Multiway",
    linhas: [
      ["X", null],
      ["C-bet", null],
      ["C-bet OR vs 1 IP e 1 OOP+", null],
      ["C-bet OR vs blinds", null],
      ["C-bet OR OOP vs 2+", null],
      ["Bet vs missed IP overall", null],
      ["Bet vs miss OOP vs 1+", null],
      ["Lead (SB/BB)", null],
      ["Prob (SB/BB)", null],
    ],
  },
  {
    secao: MW,
    bloco: "Análise geral e combatividade",
    linhas: [
      ["Win rate EV (bb/100)", null],
      ["Win rate (bb/100)", null],
      ["WWSF", null, U, "50"],
      ["?/?/F-XF", null, U, "48-58"],
      ["?/?/B", null, U, "47"],
      ["C, XC", null],
      ["XC/X/B", null, U, "55"],
      ["B/X/B (combatividade)", null, U, "45"],
    ],
  },
]

export const LEGENDA_COMBATIVIDADE = [
  "WWSF abaixo de 43: não briga pelo pote (nit, overfolds). 44 a 47: overfolds e underbluffs. 48 a 51: ideal. 52 a 54: atenção, overpagando ou overblefando. Acima de 55: overbluff e/ou overpaga.",
  "?/?/F-XF abaixo de 48: paga muito. 53 a 58: ok. Acima de 60: folda muito.",
  "?/?/B abaixo de 45: nit. 47 a 50: agressivo. Acima de 51: detox.",
  "WWSF acima de 52 não é um grande problema se você está convertendo isso em dinheiro (EV/bb).",
]

// Nome de exibição: padroniza a caixa e troca as letras soltas (F, T, R) pela rua.
// O id continua com o nome original, para não perder os valores já salvos.
const NOMES: Record<string, string> = {
  "Call 2nd T": "Call 2nd barrel turn",
  "Raise 2nd T": "Raise 2nd barrel turn",
  "Call ou raise vs 3rd R": "Call ou raise vs 3rd barrel river",
  "Flop bet vs miss": "Bet vs miss no flop",
  "Turn bet vs miss": "Bet vs miss no turn",
  "Brr T após B vs M F": "Barrel de turn após bet vs miss no flop",
  "Brr R após B vs M T": "Barrel de river após bet vs miss no turn",
  "Brr de river após o delay": "Barrel de river após o delay",
  "Prob Turn (BB)": "Probe turn (BB)",
  "Prob Turn": "Probe turn",
  "X/C - Lead Turn (BB)": "X/C - lead turn (BB)",
  "X/C - Lead Turn": "X/C - lead turn",
}

export function nomeStat(nome: string): string {
  return (
    NOMES[nome] ??
    nome
      .replace(/^Fold to /, "Fold vs ")
      .replace(/\bBU\b/g, "BTN")
      .replace(/\bSqz\b/, "Squeeze")
      .replace(/\boverall\b/g, "geral")
      .replace(/(?<![\w/])F(?![\w/])/g, "flop")
      .replace(/(?<![\w/])T(?![\w/])/g, "turn")
      .replace(/(?<![\w/])R(?![\w/])/g, "river")
  )
}

export const STATS: StatDef[] = BLOCOS.flatMap((b) =>
  b.linhas.map((l) => ({
    id: `${b.secao}|${b.bloco}|${l[0]}`,
    secao: b.secao,
    bloco: b.bloco,
    nome: nomeStat(l[0]),
    meta: l[3],
  }))
)

// Quem chega começa com o mês atual vazio.
export const HUD_INICIAL: MesHud[] = [
  { mes: new Date().toISOString().slice(0, 7), valores: {} },
]

function ehObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null
}

export function lerHud(): MesHud[] {
  const bruto = readJSON<unknown>(CHAVE_HUD, null, Array.isArray)
  if (!Array.isArray(bruto)) return HUD_INICIAL
  const meses = bruto.filter(
    (m): m is MesHud =>
      ehObj(m) && typeof m.mes === "string" && ehObj(m.valores)
  )
  return meses.length ? meses : HUD_INICIAL
}

export function lerFixadas(): string[] {
  const bruto = readJSON<unknown>(CHAVE_FIXADAS, [], Array.isArray)
  return (bruto as unknown[]).filter((x): x is string => typeof x === "string")
}

export function lerTol(): Record<string, number> {
  const bruto = readJSON<unknown>(CHAVE_TOL, {}, ehObj)
  const out: Record<string, number> = {}
  for (const [k, v] of Object.entries(bruto as Record<string, unknown>))
    if (typeof v === "number" && v >= 0) out[k] = v
  return out
}

export type NivelStat = "alvo" | "perto" | "longe"

// Verde no alvo, amarelo até a tolerância da stat, vermelho além dela.
export function nivelStat(
  v: number | null | undefined,
  meta: string | undefined,
  tol = TOLERANCIA_PADRAO
): NivelStat | null {
  if (typeof v !== "number") return null
  const d = distanciaMeta(v, meta)
  if (d === null) return null
  return d === 0 ? "alvo" : d <= tol ? "perto" : "longe"
}

export const COR_NIVEL: Record<NivelStat, string> = {
  alvo: "text-primary",
  perto: "text-[#fcc419]",
  longe: "text-destructive",
}

// "26-29" vira faixa; um número só vira o alvo exato.
export function parseMeta(meta?: string): { lo: number; hi: number } | null {
  if (!meta) return null
  const m = meta
    .replace(",", ".")
    .match(/^(-?\d+(?:\.\d+)?)(?:\s*[-~]\s*(-?\d+(?:\.\d+)?))?$/)
  if (!m) return null
  const lo = Number(m[1])
  return { lo, hi: m[2] === undefined ? lo : Number(m[2]) }
}

export function distanciaMeta(v: number, meta?: string): number | null {
  const f = parseMeta(meta)
  if (!f) return null
  if (v < f.lo) return f.lo - v
  if (v > f.hi) return v - f.hi
  return 0
}

export function ehPequena(v: ValorStat | undefined): boolean {
  return v?.n !== undefined && v.n < 20
}

// Cria um leak para cada stat do mês fora da meta. Por padrão só as vermelhas
// (além da tolerância); com `incluirPerto`, as amarelas também. Stats sem meta
// numérica ou com amostra pequena ficam de fora.
export function leaksDasStats(
  mes: MesHud,
  incluirPerto = false,
  tolerancias: Record<string, number> = lerTol()
): Leak[] {
  const out: Leak[] = []
  for (const st of STATS) {
    const val = mes.valores[st.id]
    const f = parseMeta(st.meta)
    if (!f || typeof val?.v !== "number" || ehPequena(val)) continue
    const nivel = nivelStat(val.v, st.meta, tolerancias[st.id])
    if (nivel === "alvo" || nivel === null) continue
    if (nivel === "perto" && !incluirPerto) continue
    const antes = (val.v as number) < f.lo
    out.push({
      id: `hud:${mes.mes}:${st.id}`,
      mes: mes.mes,
      fase:
        st.secao === "Pré-flop" || /pré-flop/i.test(st.bloco)
          ? "preflop"
          : "posflop",
      spot: st.bloco,
      stat: st.nome,
      real: val.v,
      solver: antes ? f.lo : f.hi,
      contra: "Referência",
      fazer: `A meta do HUD é ${st.meta}.`,
      fonte: `HUD de ${rotuloMes(mes.mes)}, contra a meta do próprio HUD`,
      secao: st.secao,
    })
  }
  return out
}
