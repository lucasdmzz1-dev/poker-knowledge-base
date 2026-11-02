// Ranges de abertura e de defesa usados para sortear a mão do herói na Prática.
// Fonte: Poker Academy (Charts), ChipEV, Regular, com ante, lidos em 02/11/2026.
// O site é de 9 jogadores: o "EP" do módulo 05 é o EP2 do site (UTG+1).
// Cada entrada é "mão:frequência": R é raise (ou all-in), C é call.

export const RFI_40: Record<"EP2" | "HJ" | "CO" | "BTN", string> = {
  // 40bb, raise 2.3x. EP2 abre 17,4%, HJ 28,6%, CO 36,8% e BTN 50,6%.
  EP2: "AA:R100 AKs:R100 AQs:R100 AJs:R100 ATs:R100 A9s:R100 A8s:R100 A7s:R100 A6s:R100 A5s:R100 A4s:R100 A3s:R100 AKo:R100 KK:R100 KQs:R100 KJs:R100 KTs:R100 K9s:R100 K8s:R100 AQo:R100 KQo:R100 QQ:R100 QJs:R100 QTs:R100 Q9s:R100 AJo:R100 KJo:R86 QJo:R17 JJ:R100 JTs:R100 J9s:R100 ATo:R100 KTo:R31.7 TT:R100 T9s:R100 T8s:R100 99:R100 98s:R52.5 88:R100 87s:R35 77:R100 76s:R43 66:R100 65s:R28 55:R30.7 54s:R26.7",
  HJ: "AA:R100 AKs:R100 AQs:R100 AJs:R100 ATs:R100 A9s:R100 A8s:R100 A7s:R100 A6s:R100 A5s:R100 A4s:R100 A3s:R100 A2s:R100 AKo:R100 KK:R100 KQs:R100 KJs:R100 KTs:R100 K9s:R100 K8s:R100 K7s:R100 K6s:R100 K5s:R100 K4s:R100 AQo:R100 KQo:R100 QQ:R100 QJs:R100 QTs:R100 Q9s:R100 Q8s:R100 Q7s:R100 Q6s:R93 AJo:R100 KJo:R100 QJo:R100 JJ:R100 JTs:R100 J9s:R100 J8s:R100 J7s:R45 ATo:R100 KTo:R100 QTo:R100 JTo:R100 TT:R100 T9s:R100 T8s:R100 T7s:R100 A9o:R100 K9o:R19 T9o:R37 99:R100 98s:R100 97s:R100 96s:R2 A8o:R100 88:R100 87s:R100 86s:R100 A7o:R7 77:R100 76s:R100 66:R100 65s:R100 55:R100 54s:R88 44:R100",
  CO: "AA:R100 AKs:R100 AQs:R100 AJs:R100 ATs:R100 A9s:R100 A8s:R100 A7s:R100 A6s:R100 A5s:R100 A4s:R100 A3s:R100 A2s:R100 AKo:R100 KK:R100 KQs:R100 KJs:R100 KTs:R100 K9s:R100 K8s:R100 K7s:R100 K6s:R100 K5s:R100 K4s:R100 K3s:R100 K2s:R70 AQo:R100 KQo:R100 QQ:R100 QJs:R100 QTs:R100 Q9s:R100 Q8s:R100 Q7s:R100 Q6s:R100 Q5s:R100 Q4s:R99 AJo:R100 KJo:R100 QJo:R100 JJ:R100 JTs:R100 J9s:R100 J8s:R100 J7s:R100 J6s:R91 ATo:R100 KTo:R100 QTo:R100 JTo:R100 TT:R100 T9s:R100 T8s:R100 T7s:R100 T6s:R100 A9o:R100 K9o:R100 Q9o:R100 J9o:R53 T9o:R100 99:R100 98s:R100 97s:R100 96s:R100 A8o:R100 K8o:R2 88:R100 87s:R100 86s:R100 85s:R35 A7o:R100 77:R100 76s:R100 75s:R68 A6o:R86 66:R100 65s:R100 A5o:R100 55:R100 54s:R100 44:R100 33:R100",
  BTN: "AA:R100 AKs:R100 AQs:R100 AJs:R100 ATs:R100 A9s:R100 A8s:R100 A7s:R100 A6s:R100 A5s:R100 A4s:R100 A3s:R100 A2s:R100 AKo:R100 KK:R100 KQs:R100 KJs:R100 KTs:R100 K9s:R100 K8s:R100 K7s:R100 K6s:R100 K5s:R100 K4s:R100 K3s:R100 K2s:R100 AQo:R100 KQo:R100 QQ:R100 QJs:R100 QTs:R100 Q9s:R100 Q8s:R100 Q7s:R100 Q6s:R100 Q5s:R100 Q4s:R100 Q3s:R100 Q2s:R100 AJo:R100 KJo:R100 QJo:R100 JJ:R100 JTs:R100 J9s:R100 J8s:R100 J7s:R100 J6s:R100 J5s:R100 J4s:R100 J3s:R100 ATo:R100 KTo:R100 QTo:R100 JTo:R100 TT:R100 T9s:R100 T8s:R100 T7s:R100 T6s:R100 T5s:R100 T4s:R100 A9o:R100 K9o:R100 Q9o:R100 J9o:R100 T9o:R100 99:R100 98s:R100 97s:R100 96s:R100 95s:R100 A8o:R100 K8o:R100 Q8o:R100 J8o:R100 T8o:R100 98o:R100 88:R100 87s:R100 86s:R100 85s:R100 A7o:R100 K7o:R100 87o:R30 77:R100 76s:R100 75s:R100 74s:R39 A6o:R100 K6o:R100 66:R100 65s:R100 64s:R100 A5o:R100 55:R100 54s:R100 53s:R89 A4o:R100 44:R100 A3o:R100 33:R100 A2o:R100 22:R100",
}

// BTN com 20bb (raise 2x ou all-in, as duas contam como abrir): 41,5%.
export const RFI_BTN_20 =
  "AA:R100 AKs:R100 AQs:R100 AJs:R100 ATs:R100 A9s:R100 A8s:R100 A7s:R100 A6s:R100 A5s:R100 A4s:R100 A3s:R100 A2s:R100 AKo:R100 KK:R100 KQs:R100 KJs:R100 KTs:R100 K9s:R100 K8s:R100 K7s:R100 K6s:R100 K5s:R100 K4s:R100 K3s:R100 AQo:R100 KQo:R100 QQ:R100 QJs:R100 QTs:R100 Q9s:R100 Q8s:R100 Q7s:R100 Q6s:R100 Q5s:R100 Q4s:R100 AJo:R100 KJo:R100 QJo:R100 JJ:R100 JTs:R100 J9s:R100 J8s:R100 J7s:R100 J6s:R100 J5s:R100 ATo:R100 KTo:R100 QTo:R100 JTo:R100 TT:R100 T9s:R100 T8s:R100 T7s:R100 T6s:R100 A9o:R100 K9o:R100 Q9o:R100 J9o:R100 T9o:R100 99:R100 98s:R100 97s:R100 96s:R47 A8o:R100 K8o:R100 Q8o:R47 J8o:R27 T8o:R43 88:R100 87s:R100 86s:R100 A7o:R100 77:R100 76s:R100 75s:R72 A6o:R100 66:R100 65s:R94 A5o:R100 55:R100 A4o:R100 44:R100 A3o:R100 33:R100 A2o:R50 22:R100"

// BTN contra o open (40bb): o que ele paga e o que ele 3beta (R, raise 3x).
export const BTN_CONTRA_OPEN: Record<"CO" | "HJ", string> = {
  CO: "AA:R100 AKs:R100 AQs:C3/R97 AJs:C100 ATs:C100 A9s:C100 A8s:C100 A7s:C100 A6s:C77/R23 A5s:C100 A4s:C73/R27 A3s:C43/R57 A2s:C34/R66 AKo:R100 KK:R100 KQs:C100 KJs:C83/R17 KTs:C100 K9s:C100 K8s:C74/R26 K7s:C37/R63 K6s:C45/R36 K5s:R39 AQo:C78/R22 KQo:C64/R36 QQ:R100 QJs:C100 QTs:C100 Q9s:C58/R42 Q8s:C16/R84 AJo:C56/R44 KJo:C78/R22 QJo:C53/R48 JJ:C14/R86 JTs:C100 J9s:C90/R10 J8s:C35/R65 ATo:C63/R37 KTo:C60/R40 QTo:C30/R28 JTo:C2/R17 TT:C4/R96 T9s:C100 T8s:C79/R21 T7s:R11 A9o:C25/R75 99:C52/R48 98s:C98/R2 97s:R32 A8o:R41 88:C78/R22 87s:C80/R20 86s:C23 77:C64/R36 76s:C92/R8 66:C100 65s:C21 55:C100 54s:C32/R6 44:C100 33:C100 22:C100",
  HJ: "AA:R100 AKs:R100 AQs:R100 AJs:C100 ATs:C100 A9s:C100 A8s:C81/R19 A7s:C66/R34 A6s:C43/R57 A5s:C79/R21 A4s:C87/R13 A3s:C81/R19 A2s:C25/R75 AKo:R100 KK:R100 KQs:C100 KJs:C100 KTs:C100 K9s:C61/R39 K8s:C56/R44 K7s:C21/R27 K6s:C1/R15 K5s:R21 AQo:C87/R13 KQo:C74/R26 QQ:R100 QJs:C100 QTs:C100 Q9s:C56/R44 Q8s:C20/R80 AJo:C45/R55 KJo:C84/R16 QJo:C18/R35 JJ:C10/R90 JTs:C100 J9s:C85/R15 J8s:C1/R46 ATo:C57/R43 KTo:R39 QTo:R14 TT:C14/R86 T9s:C71/R29 T8s:C60/R40 A9o:R58 99:C60/R40 98s:C93/R7 97s:C14/R12 88:C66/R34 87s:C69/R31 77:C83/R17 76s:C83/R17 66:C100 65s:C33/R12 55:C100 54s:C8/R20 44:C100 33:C100 22:C100",
}

// BB contra o open do BTN (40bb): só o call.
export const BB_CONTRA_BTN =
  "A9s:C100 A8s:C100 A7s:C100 A6s:C100 A5s:C100 A4s:C100 A3s:C100 A2s:C100 KJs:C83 KTs:C100 K9s:C100 K8s:C100 K7s:C28 K6s:C100 K5s:C100 K4s:C100 K3s:C100 K2s:C100 KQo:C38 QJs:C100 QTs:C100 Q9s:C100 Q8s:C100 Q7s:C100 Q6s:C100 Q5s:C100 Q4s:C100 Q3s:C100 Q2s:C100 KJo:C67 QJo:C76 JTs:C100 J9s:C100 J8s:C100 J7s:C100 J6s:C100 J5s:C100 J4s:C100 J3s:C100 J2s:C100 ATo:C18 KTo:C95 QTo:C100 JTo:C100 T9s:C100 T8s:C100 T7s:C100 T6s:C100 T5s:C100 T4s:C100 T3s:C100 T2s:C100 A9o:C54 K9o:C100 Q9o:C97 J9o:C89 T9o:C95 98s:C100 97s:C100 96s:C100 95s:C100 94s:C100 93s:C100 92s:C100 A8o:C91 K8o:C100 Q8o:C80 J8o:C84 T8o:C85 98o:C90 87s:C100 86s:C100 85s:C100 84s:C100 83s:C100 82s:C100 A7o:C70 K7o:C70 Q7o:C94 J7o:C62 T7o:C81 97o:C86 87o:C100 76s:C100 75s:C100 74s:C100 73s:C100 72s:C100 A6o:C89 K6o:C58 Q6o:C80 J6o:C100 T6o:C75 96o:C92 86o:C93 76o:C100 65s:C100 64s:C100 63s:C100 62s:C100 A5o:C55 K5o:C76 Q5o:C84 J5o:C95 75o:C100 65o:C100 54s:C100 53s:C100 52s:C100 A4o:C86 K4o:C84 Q4o:C92 J4o:C45 64o:C100 54o:C100 43s:C100 42s:C100 A3o:C82 K3o:C80 Q3o:C77 53o:C100 43o:C60 32s:C100 A2o:C65 K2o:C100 Q2o:C73 22:C21"

export type PosRange = "EP2" | "HJ" | "CO" | "BTN" | "BTN20"

// A mão ("AhKd") como classe do range ("AKo").
const ORDEM_RANKS = "AKQJT98765432"
export function classeDaMao(m: readonly string[]): string {
  const [a, b] = m
  const [r1, r2] = [a[0], b[0]].sort(
    (x, y) => ORDEM_RANKS.indexOf(x) - ORDEM_RANKS.indexOf(y)
  )
  if (r1 === r2) return r1 + r2
  return r1 + r2 + (a[1] === b[1] ? "s" : "o")
}

// "AQs:C3/R97" vira { AQs: { C: 3, R: 97 } }.
function lerTabela(texto: string): Map<string, Record<string, number>> {
  const mapa = new Map<string, Record<string, number>>()
  for (const item of texto.split(" ")) {
    const [mao, resto] = item.split(":")
    const acoes: Record<string, number> = {}
    for (const parte of resto.split("/"))
      acoes[parte[0]] = parseFloat(parte.slice(1))
    mapa.set(mao, acoes)
  }
  return mapa
}

const TABELAS = new Map<string, Map<string, Record<string, number>>>()
function tabela(texto: string) {
  let t = TABELAS.get(texto)
  if (!t) {
    t = lerTabela(texto)
    TABELAS.set(texto, t)
  }
  return t
}

const TEXTO_RFI: Record<PosRange, string> = {
  EP2: RFI_40.EP2,
  HJ: RFI_40.HJ,
  CO: RFI_40.CO,
  BTN: RFI_40.BTN,
  BTN20: RFI_BTN_20,
}

// A posição abre a mão em pelo menos `min`% das vezes?
export function abre(pos: PosRange, m: readonly string[], min = 0.01): boolean {
  return (tabela(TEXTO_RFI[pos]).get(classeDaMao(m))?.R ?? 0) >= min
}

// O BTN paga o open (call de pelo menos `min`%)?
export function btnPaga(
  contra: "CO" | "HJ",
  m: readonly string[],
  min = 0.01
): boolean {
  return (tabela(BTN_CONTRA_OPEN[contra]).get(classeDaMao(m))?.C ?? 0) >= min
}

// O BB paga o open do BTN?
export function bbPaga(m: readonly string[], min = 0.01): boolean {
  return (tabela(BB_CONTRA_BTN).get(classeDaMao(m))?.C ?? 0) >= min
}

// As classes ("AQs", "77") que o BTN paga tanto contra o CO quanto contra o HJ.
export function classesQueOBTNPaga(): string[] {
  const co = tabela(BTN_CONTRA_OPEN.CO)
  const hj = tabela(BTN_CONTRA_OPEN.HJ)
  return [...co.keys()].filter(
    (k) => (co.get(k)?.C ?? 0) > 0 && (hj.get(k)?.C ?? 0) > 0
  )
}

// BB contra o limp do SB (40bb): o que o BB aumenta (raise 3,5x, 44,1% das mãos).
export const BB_RAISE_CONTRA_LIMP =
  "AA:R100 AKs:R100 AQs:R100 AJs:R100 ATs:R100 A9s:R100 A8s:R100 A7s:R100 A6s:R100 A5s:R100 A4s:R5 A3s:R78 A2s:R92 AKo:R100 KK:R100 KQs:R100 KJs:R100 KTs:R100 K9s:R1 K7s:R53 AQo:R100 KQo:R100 QQ:R100 QJs:R100 QTs:R9 Q9s:R37 Q8s:R71 Q7s:R47 Q6s:R23 Q2s:R15 AJo:R100 KJo:R77 QJo:R53 JJ:R100 JTs:R100 J8s:R8 J7s:R2 ATo:R100 KTo:R45 QTo:R35 JTo:R13 TT:R100 A9o:R100 K9o:R55 Q9o:R19 J9o:R39 T9o:R21 99:R100 92s:R12 A8o:R94 K8o:R75 Q8o:R9 J8o:R24 T8o:R35 98o:R6 88:R100 87s:R55 83s:R1 82s:R99 A7o:R54 K7o:R10 Q7o:R9 J7o:R58 T7o:R69 97o:R61 87o:R9 77:R100 76s:R100 75s:R57 73s:R100 72s:R100 A6o:R8 Q6o:R1 J6o:R23 T6o:R54 96o:R69 86o:R49 76o:R14 66:R100 65s:R100 64s:R100 63s:R81 62s:R100 Q5o:R25 J5o:R34 T5o:R46 95o:R50 85o:R54 75o:R41 65o:R39 55:R100 54s:R100 53s:R99 52s:R100 K4o:R8 Q4o:R55 J4o:R45 T4o:R76 94o:R66 84o:R86 74o:R32 64o:R10 54o:R2 44:R5 43s:R6 42s:R84 K3o:R38 Q3o:R69 J3o:R62 T3o:R55 93o:R62 83o:R67 73o:R28 63o:R34 53o:R17 43o:R14 32s:R8 K2o:R33 Q2o:R66 J2o:R68 T2o:R56 92o:R50 82o:R26 72o:R54 62o:R55 52o:R20 42o:R10 32o:R86"

// O BB aumenta a mão contra o limp do SB (qualquer frequência)?
export function bbRaisa(m: readonly string[]): boolean {
  return (tabela(BB_RAISE_CONTRA_LIMP).get(classeDaMao(m))?.R ?? 0) > 0
}

export function classesQueOBBRaisa(): string[] {
  return [...tabela(BB_RAISE_CONTRA_LIMP).keys()]
}
