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

// Setembro de 2026 (HUD, 46k mãos). Valores lidos do print mensal.
const BLOCOS: Bloco[] = [
  {
    secao: PRE,
    bloco: "Geral",
    linhas: [
      ["VPIP", 26, U, "26-29"],
      ["PFR", 17, U, "20-23"],
      ["Assimetria de stack (bias, pp)", 2.3],
      ["Mãos com 0 a 25bb (%)", 27],
      ["Stack mediano (bb)", 42],
      ["Mãos com 60bb ou mais (%)", 29],
    ],
  },
  {
    secao: PRE,
    bloco: "RFI",
    linhas: [
      ["Steal CO", 33, 0.9, "40-45", U, 29],
      ["Steal BTN", 48, 0.9, "60-65", U, 43],
      ["RFI EP", 18, 0.9, "20", U, 16],
      ["RFI MP", 20, 2.4, "23", U, 19],
      ["RFI LJ", 21, 0.8, "27", U, 20],
      ["RFI HJ", 27, 1.1, "30", U, 25],
    ],
  },
  {
    secao: PRE,
    bloco: "3bet",
    linhas: [
      ["3bet geral", 9.4, 3.7, "11-14", U, 5.6],
      ["Fold to 3bet", 50, U, "48-55", U, 49],
      ["3bet HJ", 7.7, 2.9, "7.5", U, 5.8],
      ["3bet CO", 8.7, 3.7, "10-11", U, 6],
      ["3bet BU", 9.9, 3.5, "11-13", U, 7],
      ["3bet BU vs CO", 14, 3.3, "15-17", U, 11],
      ["3bet SB", 13, 2.8, "10-12", U, 6.4],
      ["3bet SB vs Steal", 16, 3, "15-20", U, 8.2],
      ["3bet BB", 11, 4.2, "10-12", U, 5],
      ["3bet BB vs Steal", 11, 4.2, "15-20", U, 5.4],
    ],
  },
  {
    secao: PRE,
    bloco: "Call open (18bb ou mais)",
    linhas: [
      ["Call open geral", 18, 0.4],
      ["Call open HJ", 8.2, -1.4, "7-8"],
      ["Call open CO", 10, 0.5, "10-11"],
      ["Call open BU", 14, 0.5, "13-15"],
      ["Call open SB", 13, 0.6, "10-13"],
      ["Call open BB", 59, 0.3, "50-55"],
      ["Call open BB (18bb ou menos)", 54, 0.5, "55-60"],
    ],
  },
  {
    secao: PRE,
    bloco: "4bet",
    linhas: [
      ["4bet", 17, 5.5],
      ["Fold to 4bet", 35],
      ["4bet fold", null],
      ["4bet call", null],
      ["4bet raise (5bet)", null],
    ],
  },
  {
    secao: PRE,
    bloco: "Squeeze",
    linhas: [
      ["Squeeze", 8, 4.6],
      ["Sqz fold", 42],
      ["Sqz call", 55, 11],
      ["Sqz raise", 10, 11, U, 10],
    ],
  },

  {
    secao: OR,
    bloco: "C-bet em posição",
    linhas: [
      ["C-bet IP", 87, 4.1, "80-100"],
      ["2nd barrel IP", 58, 8.6, "58-62"],
      ["3rd barrel IP", 52, 25, "54-56"],
      ["Delayed c-bet IP OR", 59, U, "60"],
      ["B/X/B", 46, 8.1, "36-38"],
      ["B/X/C", 33, 4.1],
      ["B/X/F", 58],
      ["B/X/R", 8.4, 4.1],
    ],
  },
  {
    secao: OR,
    bloco: "C-bet fora de posição",
    linhas: [
      ["C-bet OOP (OR)", 25, 3.3],
      ["2nd barrel OOP", 32, 12, "56-60"],
      ["3rd barrel OOP", 33, 38, "54-56", 6],
      ["X/F (OR OOP)", 24, U, "35-40"],
      ["X/C (OR OOP)", 59, 0.5, "35-40"],
      ["X/R (OR OOP)", 17, 1.5, "16.5"],
      ["XC/X/B", null],
      ["B/X/B OOP", 40, 12, U, 10],
      ["B/X/XC", 33, 19, U, 3],
      ["B/X/XR", 0, U, U, 2],
      ["Delayed c-bet OOP", 62, 5.6],
      ["Brr de river após o delay", 39, 13],
    ],
  },

  {
    secao: BET3,
    bloco: "C-bet em posição (3beter)",
    linhas: [
      ["C-bet IP (3beter)", 95, 14],
      ["2nd barrel IP", 45, 17],
      ["3rd barrel IP", 71, 16, U, 7],
      ["B/X/B", 48, 22],
      ["B/X/C", 43, 33, U, 14],
      ["B/X/F", 29, U, U, 14],
      ["B/X/R", 33, 27, U, 12],
    ],
  },
  {
    secao: BET3,
    bloco: "C-bet fora de posição (3beter)",
    linhas: [
      ["C-bet OOP (3beter)", 91, 14],
      ["2nd barrel OOP", 42, 32],
      ["3rd barrel OOP", 80, 42, U, 5],
      ["X/F (3beter OOP)", 0, U, U, 3],
      ["X/C (3beter OOP)", 67, 30, U, 3],
      ["X/R (3beter OOP)", 50, -5.2, U, 2],
      ["B/X/B", 50, 31, U, 10],
      ["B/X/XC ou XR", 33, -35, U, 3],
      ["B/X/XF", 67, U, U, 3],
      ["Delayed c-bet", 25, 25, U, 4],
    ],
  },

  {
    secao: CALLER,
    bloco: "Caller em posição",
    linhas: [
      ["Fold F", 29, U, "30-32"],
      ["Call F", 68, 2.5],
      ["Raise de flop IP", 3.1, -5, "10-15"],
      ["Call 2nd T", 72, 4.3],
      ["Raise 2nd T", 2.9, -7.4],
      ["Call ou raise vs 3rd R", 64, 9.1, U, 14],
      ["Flop bet vs miss", 46, 5.2],
      ["Brr T após B vs M F", 50, 8.9],
      ["Turn bet vs miss", 42, 11],
      ["Brr R após B vs M T", 50, 26, U, 4],
    ],
  },
  {
    secao: CALLER,
    bloco: "Caller fora de posição",
    linhas: [
      ["Fold F", 50, U, "48-50"],
      ["X/C F", 35, 1.1],
      ["X/R (BB)", 15, 4.7, "15-20"],
      ["X/C - X/C", 48, 3.8],
      ["X/C - X/R", 6.6, 6.3],
      ["Call ou raise vs 3rd R", 43, 11],
      ["Lead F (BB) 8hi a 10bb", 4.5, 9.1],
      ["X/C - Lead Turn (BB)", 4.4, 3],
      ["Prob Turn (BB)", 35, 3.4],
    ],
  },

  {
    secao: POT3,
    bloco: "Caller em posição",
    linhas: [
      ["Fold F", 38],
      ["Call F", 52, 8.7],
      ["Raise de flop IP", 10, 8.4],
      ["Call 2nd T", 57, 17],
      ["Raise 2nd T", 0, U, U, 12],
      ["Call ou raise vs 3rd R", 67, 10, U, 6],
      ["Flop bet vs miss", 21, 11],
      ["Brr T após B vs M F", 99, -11, U, 1],
      ["Turn bet vs miss", 28, 20],
      ["Brr R após B vs M T", 99, 8, U, 2],
    ],
  },
  {
    secao: POT3,
    bloco: "Caller fora de posição",
    linhas: [
      ["Fold F", 42],
      ["X/C F", 44, 9.5],
      ["X/R", 15, 19],
      ["X/C - X/C", 46, 9.4],
      ["X/C - X/R", 16, 36],
      ["Call ou raise vs 3rd R", 17, -21, U, 6],
      ["Lead flop", 0.7, -1.7],
      ["X/C - Lead Turn", 2, -8],
      ["Prob Turn", 48, 14],
    ],
  },

  {
    secao: BW,
    bloco: "SB play (pré-flop)",
    linhas: [
      ["Limp", 34, 1],
      ["Limp fold", 52],
      ["Limp call", 46, 1.8],
      ["Limp raise", 2.1, -2.6],
      ["Raise", 43, 1.5],
      ["Raise fold", 55],
      ["Raise call", 29, 6.3],
      ["Raise 4bet", 40, 9],
    ],
  },
  {
    secao: BW,
    bloco: "BB play (pré-flop)",
    linhas: [
      ["X vs limp", 56, 1.3],
      ["Raise vs limp", 44, 2.9],
      ["Fold vs raise", 43],
      ["Call vs raise", 44, 2.2],
      ["3bet vs raise", 19, 4.5],
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
      ["Walk", 23],
      ["C-bet de flop", 70],
      ["?/F flop", 45],
      ["?/C flop", 49],
      ["?/R flop", 7.2],
    ],
  },

  {
    secao: FTR,
    bloco: "Flop",
    linhas: [
      ["C-bet IP overall (HU pot)", 89, U, "85-92"],
      ["C-bet OOP OR", 25],
      ["Fold to X/R IP overall", 28, U, "35-40"],
      ["Fold to c-bet IP SRP", 29, U, "25-30"],
      ["Fold to c-bet OOP SRP", 50, U, "43-46"],
      ["X/R (BB) NAI", 13],
    ],
  },
  {
    secao: FTR,
    bloco: "Turn",
    linhas: [
      ["Turn c-bet IP overall", 53, U, "60"],
      ["Turn c-bet OOP overall", 38, U, "65"],
      ["Fold T vs 2nd barrel IP overall", 32, U, "40-45"],
      ["Fold T vs 2nd barrel OOP overall", 47, U, "45-50"],
      ["X/R T qualquer ação F (BB)", 5.8, U, "10"],
      ["Delayed c-bet OOP OR", 62, U, "70"],
      ["Delayed c-bet IP OR", 59, U, "60"],
    ],
  },
  {
    secao: FTR,
    bloco: "River",
    linhas: [
      ["3rd barrel IP overall", 54, U, "55"],
      ["3rd barrel OOP overall", 58, U, "60"],
      ["3rd bluff overall", 16],
      ["Fold R IP overall", 40, U, "50"],
      ["Fold R OOP overall", 60, U, "55"],
    ],
  },

  {
    secao: MW,
    bloco: "Multiway",
    linhas: [
      ["X", 53],
      ["C-bet", 47],
      ["C-bet OR vs 1 IP e 1 OOP+", 44],
      ["C-bet OR vs blinds", 77],
      ["C-bet OR OOP vs 2+", 7.3],
      ["Bet vs missed IP overall", 41],
      ["Bet vs miss OOP vs 1+", 17],
      ["Lead (SB/BB)", null],
      ["Prob (SB/BB)", null],
    ],
  },
  {
    secao: MW,
    bloco: "Análise geral e combatividade",
    linhas: [
      ["Win rate EV (bb/100)", 3.5],
      ["Win rate (bb/100)", 3.2],
      ["WWSF", 44, U, "50"],
      ["?/?/F-XF", 60, U, "48-58"],
      ["?/?/B", 47, U, "47"],
      ["C, XC", 39],
      ["XC/X/B", 45, U, "55"],
      ["B/X/B (combatividade)", 42, U, "45"],
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

function valoresDe(): Record<string, ValorStat> {
  const out: Record<string, ValorStat> = {}
  for (const b of BLOCOS)
    for (const [nome, v, ap, , n, nai] of b.linhas) {
      const x: ValorStat = { v }
      if (ap !== undefined) x.ap = ap
      if (nai !== undefined) x.nai = nai
      if (n !== undefined) x.n = n
      out[`${b.secao}|${b.bloco}|${nome}`] = x
    }
  return out
}

export const HUD_INICIAL: MesHud[] = [{ mes: "2026-09", valores: valoresDe() }]

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
