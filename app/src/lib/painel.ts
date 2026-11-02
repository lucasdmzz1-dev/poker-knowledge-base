import { readJSON } from "@/lib/storage"

export type Escopo = "semana" | "mes"
export type Grupo = "Pré-flop" | "Pós-flop e resultado"

export interface Metrica {
  id: string
  escopo: Escopo
  grupo: Grupo
  nome: string
  lo: number
  hi: number
  nota: string
  meta?: string // meta do período atual, no texto do painel antigo
  fonte?: string
}

export interface Periodo {
  id: string
  data: string // "26/10" na semana, "09/2026" no mês
  maos: number | null
  fechado: boolean
  valores: Record<string, number | null>
}

export interface DadosPainel {
  semana: Periodo[]
  mes: Periodo[]
}

export const CHAVE_PAINEL = "pkb:painel2"

const I = Infinity
const PRE: Grupo = "Pré-flop"
const POS: Grupo = "Pós-flop e resultado"

// [grupo, nome, valores por período, mínimo do alvo, máximo do alvo, nota, meta do período atual, fonte]
type Linha = [
  Grupo,
  string,
  (number | null)[],
  number,
  number,
  string,
  string?,
  string?,
]

// Semanas que você acompanha toda semana (painel de evolução, coaching/stats).
const SEMANAIS: Linha[] = [
  [
    PRE,
    "Call open — HJ",
    [9, 7.7, 7.7, 4.5],
    8,
    9,
    "Caiu de 7,7 para 4,5 na S4 (meta S4: 8). Revisar broadways off antes de foldar.",
    "S3 8 · S4 8 · S5 8–9 · S6 8–9",
  ],
  [
    PRE,
    "Call open — CO",
    [11, 9.8, 9.5, 8.3],
    12,
    15,
    "Caiu para 8,3 na S4 (meta S4: 11). Bordas: coluna do 8, Kxs, KJo. Em bounty, ampliar como range de BTN.",
    "S3 10,5 · S4 11 · S5 12 · S6 12+",
  ],
  [
    PRE,
    "Call open — BTN",
    [12, 13, 7.4, 8.6],
    16,
    19,
    "Voltou de 7,4 para 8,6 na S4, mas a meta é 15. A9o vs late position e KTo vs CO também entram no range de 3bet.",
    "S3 14 · S4 15 · S5 16 · S6 16+",
  ],
  [
    PRE,
    "Call open — SB",
    [12, 12, 12, 11],
    13,
    16,
    "Broadways off em SB: pensar duas vezes antes de foldar.",
    "S3 12,5 · S4 13 · S5 13 · S6 13–14",
  ],
  [
    PRE,
    "Open raise — LJ",
    [22, 24, 23, 24],
    26,
    I,
    "Ignorados: 87s, 76s, 65s. Abrir KTo, QTo e 55 na maioria das vezes.",
    "S3 25 · S4 25,5 · S5 26 · S6 26+",
  ],
  [
    PRE,
    "Open raise — CO (20bb+)",
    [42, 36, 42, 40],
    40,
    I,
    "Geral caiu 36→32. Lembrar: 9xo, K2s+, coluna do 6s, A5o+, suited até 54s.",
    "S3 38 · S4 39 · S5 40 · S6 40+",
  ],
  [
    PRE,
    "Open raise — BTN (20bb+)",
    [52, 53, 55, 56],
    55,
    60,
    "Abrir todos Jxs e a coluna do 5s; só foldar lixo suited com 2s. Bordas: Kxo, linha do 8xo.",
    "S3 54 · S4 55 · S5 56 · S6 57",
  ],
  [
    PRE,
    "Squeeze — geral",
    [7.3, 11, 11, 9],
    10,
    I,
    "BTN 5,9→13 · BB 6,6→10. Squeeze como 1ª opção, call depois.",
    "Manter 10–12 em todas as semanas",
  ],
  [
    PRE,
    "Fold vs 3bet — BTN",
    [63, 67, 69, 48],
    -I,
    58,
    "Caiu de 69 para 48 na S4, abaixo da faixa (≤ 58). Confirmar nas próximas semanas se é amostra. A9-A8, broadways off e suited contraintuitivas em PKO.",
    "S3 64 · S4 62 · S5 60 · S6 58–60",
  ],
  [
    PRE,
    "PFR (geral)",
    [null, 17, 19, 19],
    20,
    23,
    "Abaixo da meta do HUD. Reflexo do open curto nos stacks de 10–25bb.",
    undefined,
    "HUD 46k",
  ],
  [
    PRE,
    "3bet (geral)",
    [null, 9.4, 9.9, 9.5],
    11,
    14,
    "Abaixo da meta, concentrado no BB vs steal.",
    undefined,
    "HUD 46k",
  ],
  [
    POS,
    "Check-raise — do BB",
    [23, 17, null, null],
    23,
    I,
    "Caiu. Gutshots no efetivo maior: menos XF com mãos que podem entrar no XR.",
    "S3 19 · S4 21 · S5 22 · S6 23",
  ],
  [
    POS,
    "Check-raise — geral",
    [21, 19, null, null],
    18,
    I,
    "Dentro do alvo. Manter a frequência.",
    "Manter 18–21 em todas as semanas",
  ],
  [
    POS,
    "BB check-fold no flop (BB play)",
    [52, 50, null, null],
    43,
    46,
    "Melhorou, mas ainda acima da faixa. Menos XF em shallow; não foldar sem plano em sizes baixos.",
    "S3 49 · S4 48 · S5 47 · S6 46",
  ],
  [
    POS,
    "WWSF",
    [42, 45, null, null],
    50,
    I,
    "Antes da S1 estava em 46. Subindo de novo; meta 50. Entender onde as fichas não são realizadas.",
    "S3 46 · S4 47 · S5 48 · S6 49",
  ],
]

// Análises que só fazem sentido com amostra grande (HUD mensal). Base: HUD de 46 mil mãos.
const MENSAIS: Linha[] = [
  [
    PRE,
    "RFI BTN · 15–25bb",
    [33],
    45,
    I,
    "Maior desvio do pré-flop, em 16% das suas mãos. Folda marginais que deveriam abrir: Kxo, 8xo, Jxs, 5xs.",
    "40+",
  ],
  [
    PRE,
    "RFI CO · 15–25bb",
    [21],
    30,
    I,
    "Abre 21% contra 30% de referência. Mesma raiz do BTN.",
  ],
  [PRE, "RFI HJ · 15–25bb", [21], 26, I, "Abre 21% contra 26% de referência."],
  [PRE, "RFI LJ · 15–25bb", [17], 23, I, "Abre 17% contra 23% de referência."],
  [
    PRE,
    "RFI CO · 10–15bb",
    [4.2],
    9,
    I,
    "Só 4% de open normal e 16% de jam (referência 9% e 20%).",
  ],
  [
    PRE,
    "Open jam BTN · 15–25bb",
    [5.5],
    10,
    I,
    "Jam de menos em posição tardia: 5,5% contra 10%.",
  ],
  [
    PRE,
    "3bet do BB vs steal",
    [11],
    15,
    20,
    "Em 15–25bb o 3bet é raro (1–4%), mas lucrativo: há espaço pra ampliar.",
  ],
  [
    POS,
    "Turn cbet — fora de posição",
    [38],
    65,
    I,
    "Desiste do turn fora de posição. Maior desvio do mês. Ver módulo 05.",
    "50+",
  ],
  [
    POS,
    "2nd barrel — fora de posição",
    [32],
    56,
    60,
    "Draws e mãos com blocker viram check em vez de barrel. Ver módulo 05 (Second Barrel OOP).",
    "42+",
  ],
  [
    POS,
    "X/C após o check — fora de posição",
    [59],
    35,
    40,
    "Paga demais após o check e folda de menos (X/F 24 contra 35–40).",
    "50 ou menos",
  ],
  [
    POS,
    "Delayed cbet — fora de posição",
    [62],
    70,
    I,
    "Usa o delayed, mas abaixo do ideal.",
  ],
  [
    POS,
    "Turn cbet — em posição",
    [53],
    60,
    I,
    "Poucos barrels também em posição.",
  ],
  [
    POS,
    "Raise de flop — em posição",
    [3.1],
    10,
    15,
    "Quase não sobe e as subidas perdem dinheiro (−5 por spot).",
    "6+",
  ],
  [
    POS,
    "Fold vs check-raise — em posição",
    [28],
    35,
    40,
    "Paga check-raise com mãos marginais.",
  ],
  [
    POS,
    "Fold turn vs 2nd barrel — em posição",
    [32],
    40,
    45,
    "Continua demais contra o segundo barrel. Ver módulo 04.",
  ],
  [
    POS,
    "Fold no river — em posição",
    [40],
    50,
    I,
    "Paga demais com bluff-catchers fracos. Ver módulo 04 (Vs Third Barrel).",
  ],
  [
    POS,
    "Fold no river — fora de posição",
    [60],
    -I,
    55,
    "Folda demais fora de posição.",
  ],
  [
    POS,
    "X/R de turn — BB",
    [5.8],
    10,
    I,
    "Pouco check-raise no turn (qualquer ação F).",
  ],
]

function metricas(escopo: Escopo, linhas: Linha[]): Metrica[] {
  return linhas.map(([grupo, nome, , lo, hi, nota, meta, fonte]) => ({
    id: `${escopo}:${nome}`,
    escopo,
    grupo,
    nome,
    lo,
    hi,
    nota,
    meta,
    fonte,
  }))
}

export const METRICAS: Metrica[] = [
  ...metricas("semana", SEMANAIS),
  ...metricas("mes", MENSAIS),
]

function periodos(
  escopo: Escopo,
  linhas: Linha[],
  datas: [string, number | null][],
  abertoDesde: number
): Periodo[] {
  return datas.map(([data, maos], i) => ({
    id: `${escopo}-${i + 1}`,
    data,
    maos,
    fechado: i < abertoDesde,
    valores: Object.fromEntries(
      linhas.map((l) => [`${escopo}:${l[1]}`, l[2][i] ?? null])
    ),
  }))
}

export const PAINEL_INICIAL: DadosPainel = {
  // S1 a S3 fechadas e a S4 (26/10) ainda aberta, como no painel antigo.
  semana: periodos(
    "semana",
    SEMANAIS,
    [
      ["06/10", 8700],
      ["12/10", 12000],
      ["19/10", 13000],
      ["26/10", 14000],
    ],
    3
  ),
  // M1 é a base de setembro (HUD de 46k mãos). Outubro ainda vai ser preenchido.
  mes: [
    ...periodos("mes", MENSAIS, [["09/2026", 46000]], 1),
    { id: "mes-2", data: "10/2026", maos: null, fechado: false, valores: {} },
  ],
}

function ehObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null
}

function periodosValidos(v: unknown): Periodo[] | null {
  if (!Array.isArray(v)) return null
  return v.filter(
    (p): p is Periodo =>
      ehObj(p) &&
      typeof p.id === "string" &&
      typeof p.data === "string" &&
      typeof p.fechado === "boolean" &&
      ehObj(p.valores)
  )
}

export function lerPainel(): DadosPainel {
  const bruto = readJSON<unknown>(CHAVE_PAINEL, null, ehObj)
  if (!ehObj(bruto)) return PAINEL_INICIAL
  const semana = periodosValidos(bruto.semana)
  const mes = periodosValidos(bruto.mes)
  if (!semana || !mes) return PAINEL_INICIAL
  return { semana, mes }
}

// Distância até a faixa-alvo: 0 dentro do alvo.
export function distancia(v: number, m: Metrica): number {
  if (v < m.lo) return m.lo - v
  if (v > m.hi) return v - m.hi
  return 0
}

export type Estado = "alvo" | "perto" | "longe"

export function estado(v: number, m: Metrica): Estado {
  const d = distancia(v, m)
  return d === 0 ? "alvo" : d <= 2 ? "perto" : "longe"
}

export const ROTULO_ESTADO: Record<Estado, string> = {
  alvo: "No alvo",
  perto: "Perto",
  longe: "Longe",
}

export function faixa(m: Metrica): string {
  const n = (x: number) => String(x).replace(".", ",")
  if (m.lo === -Infinity) return `até ${n(m.hi)}`
  if (m.hi === Infinity) return `${n(m.lo)} ou mais`
  return `${n(m.lo)} a ${n(m.hi)}`
}

export type Tendencia = {
  delta: number
  sentido: "melhorou" | "piorou" | "igual"
}

// Compara dois valores pelo quanto cada um está longe do alvo.
export function comparar(antes: number, agora: number, m: Metrica): Tendencia {
  const delta = Math.round((agora - antes) * 10) / 10
  const d = distancia(agora, m) - distancia(antes, m)
  const sentido = d < -0.05 ? "melhorou" : d > 0.05 ? "piorou" : "igual"
  return { delta, sentido }
}

export function proximaData(escopo: Escopo, data: string): string {
  const dois = (n: number) => String(n).padStart(2, "0")
  if (escopo === "semana") {
    const m = /^(\d{1,2})\/(\d{1,2})/.exec(data)
    if (!m) return ""
    const d = new Date(
      new Date().getFullYear(),
      Number(m[2]) - 1,
      Number(m[1]) + 7
    )
    return `${dois(d.getDate())}/${dois(d.getMonth() + 1)}`
  }
  const m = /^(\d{1,2})\/(\d{4})$/.exec(data)
  if (!m) return ""
  const d = new Date(Number(m[2]), Number(m[1]), 1)
  return `${dois(d.getMonth() + 1)}/${d.getFullYear()}`
}

export function limiteAmostra(escopo: Escopo): number {
  return escopo === "semana" ? 5000 : 20000
}
