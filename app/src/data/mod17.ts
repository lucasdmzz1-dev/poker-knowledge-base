import type { CardCode } from "@/data/mod15"

export type SizeBB = "B25" | "B40" | "B70"
export type SplitId = "b25" | "b40" | "b70"

export interface BucketBB {
  p: number
  maos: string
}

export interface SplitBB {
  id: SplitId
  size: SizeBB
  nome: string
  quando: string
  buckets: BucketBB[]
  nota: string
}

export interface BoardBB {
  cards: CardCode[]
  nome: string
  size: SizeBB
  nota: string
}

export const mod17 = {
  id: "17",
  slug: "bb-raise-pot-vs-sb",
  nome: "BB Raise Pot vs SB",
  spot: "Blind war · você no BB, em posição · SB dá limp, BB raise de 3,5bb e SB paga · 40bb",
  fonte:
    "theory/17-BB-Raised-Pot-vs-SB-Limp (guideline, tabela dos splits e aula)",

  em30: [
    "O range de BB neste pote é polarizado: topo e lixo, pouca mão média. Por isso não dá para apostar o range inteiro em size médio.",
    "O limp-call do SB defende pouco offsuit baixo. Carta de valor 8 ou mais no board significa que o SB acerta par.",
    "Thin value define o size: B25 quando o board tem thin value, B70 quando não tem, B40 no que sobrar.",
    "Quanto maior o size, menor a frequência de aposta e maior a necessidade de split.",
    "Duas cartas abaixo de 8 no board: B25. Duas de valor 8 ou mais: B40.",
    "Sequência pesa mais que broadway: B40. As exceções em B70 são o triple broadway e o low conectado.",
    "Dobrado seco e A high seco: range em B25.",
  ],

  premissas: [
    "O BB faz 3,5bb e fica em posição, mas o range dele é polarizado: sem cobertura linear, ele não consegue apostar range em size médio, como um range de EP contra o BB.",
    "O limp-call do SB não defende 7-3, 7-5, 8-6, T-6 e 9-6. A parte offsuit começa em 8x.",
    "Pergunte sempre qual é o range do SB: quanto menos ele acerta o board, mais o BB aposta mãos finas em frequência alta.",
  ],

  sizes: [
    {
      size: "B25",
      nome: "Temos thin value",
      nota: "O máximo de thin value. Range ou split B25.",
    },
    {
      size: "B40",
      nome: "Intermediário",
      nota: "O que sobrar. Split B40.",
    },
    {
      size: "B70",
      nome: "Não temos thin value",
      nota: "O mínimo de thin value. Split B70.",
    },
  ] as { size: SizeBB; nome: string; nota: string }[],

  splits: [
    {
      id: "b25",
      size: "B25",
      nome: "Split B25",
      quando: "Board em que temos thin value.",
      buckets: [
        { p: 100, maos: "Overpair e sets (menos o top set)" },
        { p: 75, maos: "Dois pares, top set, TP e bons draws" },
        { p: 50, maos: "Todo o restante" },
      ],
      nota: "Em board muito favorável, o bucket de 25% vira 100% e a mão vira range.",
    },
    {
      id: "b40",
      size: "B40",
      nome: "Split B40",
      quando: "Board intermediário, o que sobrar.",
      buckets: [
        { p: 75, maos: "Overpair, sets, dois pares, TP forte e flush draws" },
        { p: 50, maos: "TPs e melhores draws" },
        { p: 25, maos: "Todo o restante" },
        { p: 0, maos: "Underpair" },
      ],
      nota: "Quanto maior o size, menor a frequência e maior a necessidade de split.",
    },
    {
      id: "b70",
      size: "B70",
      nome: "Split B70",
      quando: "Board em que não temos thin value.",
      buckets: [
        { p: 75, maos: "Overpair e TP forte" },
        { p: 50, maos: "Dois pares, TPs e melhores draws" },
        { p: 25, maos: "Todo o restante" },
        { p: 0, maos: "Underpair" },
      ],
      nota: "O top set vai no menor bucket possível, porque bloqueia os calls. Os outros sets ficam em 50% ou 75%. Second pair entra em 25%.",
    },
  ] as SplitBB[],

  tiposDeBoard: [
    { nome: "Monotone", size: "B25", estrategia: "Split próprio de monotone" },
    { nome: "Dobrado seco", size: "B25", estrategia: "Range (100%)" },
    { nome: "A high seco", size: "B25", estrategia: "Range (100%)" },
    {
      nome: "Dobrado conectado",
      size: "B25",
      estrategia: "Split próprio de dobrado conectado",
    },
    { nome: "A high conectado", size: "B25", estrategia: "Split B25" },
    { nome: "Com sequência", size: "B40", estrategia: "Split B40" },
    { nome: "Low desconectado", size: "B40", estrategia: "Split B40" },
    { nome: "Low conectado", size: "B70", estrategia: "Split B70" },
  ] as { nome: string; size: SizeBB; estrategia: string }[],

  boards: [
    {
      cards: ["Ks", "Ts", "Qh"],
      nome: "Triple broadway",
      size: "B70",
      nota: "Frequência de 25% a 33%. AK e KJ em 75%, K2 e J3 em 50%, mãos ruins em 25%.",
    },
    {
      cards: ["4c", "Jd", "Kc"],
      nome: "K-J-4, dois broadways",
      size: "B40",
      nota: "Mais thin value que o K-T-Q, porque o 4 não é defendido.",
    },
    {
      cards: ["Td", "Js", "8c"],
      nome: "J-T-8, com sequência",
      size: "B40",
      nota: "O SB tem sequências offsuit.",
    },
    {
      cards: ["Jd", "Qc", "8c"],
      nome: "Q-J-8, com flush draw",
      size: "B40",
      nota: "Flush draws de clubs em 50%. Certeza média na resposta do coach.",
    },
    {
      cards: ["4c", "2c", "8d"],
      nome: "8-4-2, low desconectado",
      size: "B40",
      nota: "As overcards mudam os nuts, e os pares do board perdem valor.",
    },
    {
      cards: ["5c", "7h", "9d"],
      nome: "9-7-5, low conectado",
      size: "B70",
      nota: "Sem thin value. Melhores draws em 50%.",
    },
    {
      cards: ["4h", "Qc", "9c"],
      nome: "Q-9-4, duas cartas de valor",
      size: "B40",
      nota: "Duas cartas de valor 8 ou mais: o SB acerta mais pares.",
    },
    {
      cards: ["3h", "6h", "Qc"],
      nome: "Q-6-3, com flush draw",
      size: "B25",
      nota: "Frequência de 66% a 75%, quase range. O bucket de 25% vira 100%.",
    },
  ] as BoardBB[],

  especiais: [
    {
      nome: "Monotone",
      size: "B25" as SizeBB,
      textos: [
        "Buckets de 25%, 50% e 75%, com frequência geral perto de 50%.",
        "As mãos mais fortes vão nos buckets altos.",
        "Second pair vai em 25%, de preferência com carta do naipe.",
        "O mesmo split vale para qualquer monotone, inclusive o 7-8-9.",
        "O check evita tomar check-raise de mãos off com carta do naipe.",
      ],
    },
    {
      nome: "Dobrado conectado",
      size: "B25" as SizeBB,
      textos: [
        "Trinca, full e quadra em 75%, e todo o restante em 50%.",
        "A frequência é alta, mas com check desenvolvido.",
        "Você toma mais check-raise e realiza menos equity.",
      ],
    },
  ],

  turn: [
    "Flop em check-check: o size do turn é sempre alto. B70 no mínimo, para apostar todos os TP, e B100 ou mais para apostar só TP com bom kicker.",
    "Flop apostado: blank é geométrico, e carta que conecta com o board tende a B70.",
    "Quanto mais TP você quer apostar, menor o size.",
  ],

  pocket: [
    "Thin value define o size: B25 com thin value, B70 sem, B40 no meio.",
    "Quanto maior o size, menor a frequência e maior o split.",
    "Duas cartas abaixo de 8: B25. Duas de valor 8 ou mais: B40.",
    "Sequência pesa mais que broadway: B40.",
    "Triple broadway e low conectado: B70.",
    "A high seco e dobrado seco: range em B25.",
    "Monotone: B25, buckets 25/50/75, frequência perto de 50%.",
    "Dobrado conectado: trinca, full e quadra em 75%, o restante em 50%.",
    "No B70 o top set vai no menor bucket possível.",
    "Com flush draw no board, a mão com carta do naipe aposta mais e a sem carta dá check.",
    "Turn depois de check-check: size alto, B70 no mínimo.",
  ],
}

export const splitById = Object.fromEntries(
  mod17.splits.map((s) => [s.id, s])
) as Record<SplitId, SplitBB>
