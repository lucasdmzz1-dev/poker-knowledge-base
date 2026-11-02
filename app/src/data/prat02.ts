export type AcaoCbet40 = "Check" | "B25" | "B40" | "B70"
export type PosCbet40 = "HJ" | "CO" | "BTN"
export type BoardCbet40 =
  | "ahigh"
  | "broadway"
  | "conectado"
  | "monotone"
  | "dobrado"
  | "lowSeco"
  | "lowCarregado"

export const BOARD_CBET40: Record<
  BoardCbet40,
  { nome: string; board: string[]; estrategia: string }
> = {
  ahigh: {
    nome: "A HIGH",
    board: ["Ad", "8c", "4s"],
    estrategia: "Range bet em B25, de qualquer posição.",
  },
  broadway: {
    nome: "Broadway",
    board: ["Ks", "Td", "6c"],
    estrategia:
      "Range bet. Do HJ o size sobe para B40, e do CO e do BTN fica no B25.",
  },
  conectado: {
    nome: "Conectado",
    board: ["Jd", "Tc", "8s"],
    estrategia:
      "Range bet. Do HJ o size sobe para B40, e do CO e do BTN fica no B25.",
  },
  monotone: {
    nome: "Monotone",
    board: ["As", "9s", "8s"],
    estrategia: "Range bet em B25, de qualquer posição.",
  },
  dobrado: {
    nome: "Dobrado",
    board: ["Ks", "Kh", "7c"],
    estrategia: "Range bet em B25, de qualquer posição.",
  },
  lowSeco: {
    nome: "Low seco",
    board: ["9h", "4d", "2c"],
    estrategia:
      "Split em B70. Aposta quase todo top pair e o second pair com bom kicker, blefa com a borda do range e dá check com o valor médio.",
  },
  lowCarregado: {
    nome: "Low carregado",
    board: ["9s", "7d", "5c"],
    estrategia:
      "Split em B70. Aposta os melhores top pairs e as mãos que conectam, blefa com draw que tem backdoor e dá check com o valor médio.",
  },
}

export interface SituacaoCbet40 {
  id: string
  tipo: BoardCbet40
  pos: PosCbet40
  hero: [string, string]
  certa: AcaoCbet40
  classe: string
  porque: string
}

const range = (
  id: string,
  tipo: "ahigh" | "monotone" | "dobrado",
  pos: PosCbet40,
  hero: [string, string],
  classe: string
): SituacaoCbet40 => ({
  id,
  tipo,
  pos,
  hero,
  certa: "B25",
  classe,
  porque: "É range bet: a mão aposta junto com o range inteiro, em B25.",
})

const rangePos = (
  id: string,
  tipo: "broadway" | "conectado",
  pos: PosCbet40,
  hero: [string, string],
  classe: string
): SituacaoCbet40 => ({
  id,
  tipo,
  pos,
  hero,
  certa: pos === "HJ" ? "B40" : "B25",
  classe,
  porque:
    pos === "HJ"
      ? "Abrindo do HJ o range é mais forte, então o range bet sobe para B40."
      : "Abrindo do CO ou do BTN o range é largo, e o range bet fica no B25.",
})

// Cada mão vem do guideline do módulo 02 e da aula de second barrel IP (parte do flop).
// Nos boards de range bet o que muda é o size, por posição. Nos low o split é em B70.
export const situacoesCbet40: SituacaoCbet40[] = [
  range("a-hj", "ahigh", "HJ", ["Ah", "Kc"], "Top pair"),
  range("a-co", "ahigh", "CO", ["7h", "6h"], "Draw fraco"),
  range("a-btn", "ahigh", "BTN", ["Qc", "Jd"], "Duas overcards"),
  rangePos("b-hj", "broadway", "HJ", ["Kh", "Qd"], "Top pair"),
  rangePos("b-co", "broadway", "CO", ["Jh", "Qh"], "Duas pontas"),
  rangePos("b-btn", "broadway", "BTN", ["7c", "7d"], "Underpair"),
  rangePos("c-hj", "conectado", "HJ", ["Qh", "9h"], "Sequência"),
  rangePos("c-co", "conectado", "CO", ["Jh", "5d"], "Top pair"),
  rangePos("c-btn", "conectado", "BTN", ["Ac", "Qd"], "Duas overcards"),
  range("m-hj", "monotone", "HJ", ["Kh", "Qd"], "Mão sem espadas"),
  range("m-co", "monotone", "CO", ["Ks", "2d"], "Blocker do flush"),
  range("m-btn", "monotone", "BTN", ["Qh", "9d"], "Par de nove"),
  range("d-hj", "dobrado", "HJ", ["Ah", "Qd"], "Mão sem par"),
  range("d-co", "dobrado", "CO", ["9c", "9d"], "Underpair"),
  range("d-btn", "dobrado", "BTN", ["Th", "8h"], "Mão fraca"),

  // Low seco (9h 4d 2c)
  {
    id: "ls-tp",
    tipo: "lowSeco",
    pos: "CO",
    hero: ["Ac", "9c"],
    certa: "B70",
    classe: "Top pair",
    porque: "Em board seco quase todos os top pairs apostam, em B70.",
  },
  {
    id: "ls-op",
    tipo: "lowSeco",
    pos: "HJ",
    hero: ["Tc", "Td"],
    certa: "B70",
    classe: "Overpair",
    porque: "Overpair é valor e aposta B70.",
  },
  {
    id: "ls-sp",
    tipo: "lowSeco",
    pos: "BTN",
    hero: ["Ah", "4c"],
    certa: "B70",
    classe: "Second pair com bom kicker",
    porque: "No board seco o second pair com bom kicker aposta por valor.",
  },
  {
    id: "ls-borda",
    tipo: "lowSeco",
    pos: "BTN",
    hero: ["Kc", "Qh"],
    certa: "B70",
    classe: "Borda do range",
    porque:
      "Mão da borda do range, sem backdoor e confortável em bet/fold, aposta como bluff.",
  },
  {
    id: "ls-medio",
    tipo: "lowSeco",
    pos: "HJ",
    hero: ["7c", "7d"],
    certa: "Check",
    classe: "Valor médio",
    porque: "Par médio é valor médio e dá check.",
  },
  {
    id: "ls-bdfd",
    tipo: "lowSeco",
    pos: "CO",
    hero: ["Ad", "Kd"],
    certa: "Check",
    classe: "Overcards com backdoor flush draw",
    porque: "Overcards com backdoor querem realizar equity, então dão check.",
  },
  {
    id: "ls-bdfd2",
    tipo: "lowSeco",
    pos: "BTN",
    hero: ["Qd", "Jd"],
    certa: "Check",
    classe: "Overcards com backdoor flush draw",
    porque: "Overcards com backdoor dão check para ver o turn.",
  },

  // Low carregado (9s 7d 5c)
  {
    id: "lc-tt",
    tipo: "lowCarregado",
    pos: "HJ",
    hero: ["Tc", "Th"],
    certa: "B70",
    classe: "Overpair",
    porque:
      "O overpair perde valor a cada carta do turn e pede proteção, então aposta alto.",
  },
  {
    id: "lc-jj",
    tipo: "lowCarregado",
    pos: "CO",
    hero: ["Jh", "Jc"],
    certa: "B70",
    classe: "Overpair",
    porque: "Overpair aposta B70, para extrair antes que as cartas mudem.",
  },
  {
    id: "lc-a9",
    tipo: "lowCarregado",
    pos: "BTN",
    hero: ["Ah", "9c"],
    certa: "B70",
    classe: "Melhor top pair",
    porque: "Os melhores top pairs apostam B70.",
  },
  {
    id: "lc-k9",
    tipo: "lowCarregado",
    pos: "CO",
    hero: ["Kh", "9h"],
    certa: "B70",
    classe: "Top pair com bom kicker",
    porque: "O K9 bloqueia piores mãos que pagam e aposta B70.",
  },
  {
    id: "lc-98",
    tipo: "lowCarregado",
    pos: "BTN",
    hero: ["9c", "8h"],
    certa: "B70",
    classe: "Top pair que conecta",
    porque:
      "O 98 tem muita interação com o board e equity para continuar, então aposta.",
  },
  {
    id: "lc-set",
    tipo: "lowCarregado",
    pos: "HJ",
    hero: ["5h", "5d"],
    certa: "B70",
    classe: "Trinca baixa",
    porque: "As piores trincas apostam, e a melhor fica para o check.",
  },
  {
    id: "lc-as6s",
    tipo: "lowCarregado",
    pos: "CO",
    hero: ["As", "6s"],
    certa: "B70",
    classe: "Draw direto com backdoor flush draw",
    porque: "Draw direto com backdoor aposta como bluff, em B70.",
  },
  {
    id: "lc-jdtd",
    tipo: "lowCarregado",
    pos: "BTN",
    hero: ["Jd", "Td"],
    certa: "B70",
    classe: "Draw direto com backdoor flush draw",
    porque: "O valete com dez do naipe do board tem backdoor e aposta.",
  },
  {
    id: "lc-kq",
    tipo: "lowCarregado",
    pos: "HJ",
    hero: ["Kh", "Qc"],
    certa: "B70",
    classe: "Borda do range",
    porque:
      "Rei com dama off não se importa em bet/fold, então aposta como bluff.",
  },
  {
    id: "lc-topset",
    tipo: "lowCarregado",
    pos: "CO",
    hero: ["9c", "9d"],
    certa: "Check",
    classe: "Top set",
    porque: "A melhor trinca vai para o check, como trap.",
  },
  {
    id: "lc-q9",
    tipo: "lowCarregado",
    pos: "BTN",
    hero: ["Qh", "9d"],
    certa: "Check",
    classe: "Top pair intermediário",
    porque: "Dama com nove é a parte intermediária dos top pairs e dá check.",
  },
  {
    id: "lc-j9",
    tipo: "lowCarregado",
    pos: "HJ",
    hero: ["Jh", "9c"],
    certa: "Check",
    classe: "Top pair intermediário",
    porque: "Valete com nove é parte intermediária dos top pairs e dá check.",
  },
  {
    id: "lc-k7",
    tipo: "lowCarregado",
    pos: "CO",
    hero: ["Kd", "7h"],
    certa: "Check",
    classe: "Second pair",
    porque: "A maioria dos second pairs dá check, para realizar equity.",
  },
  {
    id: "lc-a5",
    tipo: "lowCarregado",
    pos: "BTN",
    hero: ["Ah", "5h"],
    certa: "Check",
    classe: "Third pair",
    porque: "O A5 dá check e fica protegido no range.",
  },
  {
    id: "lc-88",
    tipo: "lowCarregado",
    pos: "HJ",
    hero: ["8c", "8d"],
    certa: "Check",
    classe: "Underpair",
    porque: "Underpair tem valor de showdown e dá check.",
  },
  {
    id: "lc-44",
    tipo: "lowCarregado",
    pos: "CO",
    hero: ["4h", "4d"],
    certa: "Check",
    classe: "Underpair",
    porque: "O pocket pair baixo tem valor de showdown e dá check.",
  },
  {
    id: "lc-a6",
    tipo: "lowCarregado",
    pos: "BTN",
    hero: ["Ah", "6h"],
    certa: "Check",
    classe: "Draw direto sem backdoor",
    porque:
      "Draw direto sem backdoor flush draw dá check, para realizar equity.",
  },
  {
    id: "lc-jt",
    tipo: "lowCarregado",
    pos: "HJ",
    hero: ["Jh", "Th"],
    certa: "Check",
    classe: "Draw direto sem backdoor",
    porque: "Valete com dez sem backdoor nem naipe do board dá check.",
  },
  {
    id: "lc-kqs",
    tipo: "lowCarregado",
    pos: "CO",
    hero: ["Kc", "Qc"],
    certa: "Check",
    classe: "Overcards com backdoor flush draw",
    porque: "Rei com dama com backdoor quer realizar equity e dá check.",
  },
  {
    id: "lc-a2",
    tipo: "lowCarregado",
    pos: "BTN",
    hero: ["Ac", "2c"],
    certa: "Check",
    classe: "High card com backdoor flush draw",
    porque: "Ás com backdoor pega a free card e dá check.",
  },
]
