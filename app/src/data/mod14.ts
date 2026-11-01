import type { CardCode } from "@/data/mod15"

export type SizeProbe = "B40" | "B70" | "B100"
export type TurnId =
  | "blank"
  | "seco"
  | "alta"
  | "flushBaixo"
  | "flushAlto"
  | "sequencia"
  | "pareia"

export interface Acao {
  nome: "Bet" | "Check-call" | "Check-raise"
  maos: string
}

export interface TurnProbe {
  id: TurnId
  nome: string
  size: SizeProbe
  flop: CardCode[]
  turn: CardCode
  criterio: string
  acoes: Acao[]
  nota: string
}

export const mod14 = {
  id: "14",
  slug: "probe-turn",
  nome: "Probe Turn",
  spot: "Pote single raised · você no BB, fora de posição · flop em check-check",
  fonte: "theory/14-Probe-Turn (guideline, regras e anotações do instrutor)",

  em30: [
    "Parta do range de check atrás do BTN: Ax, KQ e KJ, middle pair, third pair, alguns give-ups, brocas e backdoor de flush.",
    "O size nasce do grupo de mãos que você quer apostar: B70 para TP e SP, B100 para trinca e TP muito forte, B40 para thin value ou quando o vilão dá raise.",
    "Board conectado pede B70. Board seco pede B100.",
    "Bluff é sempre equity direta: duas pontas, flush draw e brocas com equity extra.",
    "No check-call, nunca folde TP, SP nem par com draw.",
    "No check-raise, valor forte e combo draw. Nada de bluff sem equity.",
    "Um size por situação. Nada de B25 com o range inteiro.",
  ],

  sizes: [
    {
      size: "B100",
      para: "Trinca e TP muito forte",
      quando: "Board seco: range de valor estreito e pouca equity direta.",
    },
    {
      size: "B70",
      para: "TP e SP",
      quando: "Board conectado: range largo, com muita equity direta.",
    },
    {
      size: "B70",
      para: "Só os melhores TP ou melhores",
      quando: "O flush completa em carta alta, ou a sequência completa.",
    },
    {
      size: "B40",
      para: "Thin value com todos os TP",
      quando: "O vilão dá raise, ou o flush completa em carta baixa.",
    },
  ] as { size: SizeProbe; para: string; quando: string }[],

  checkAtras: [
    "Ax: são as mãos que mais dão check atrás.",
    "KQ e KJ, em frequência um pouco menor que o Ax.",
    "Middle pair e third pair.",
    "Brocas e mãos com backdoor de flush draw.",
    "Alguns give-ups.",
  ],

  flushes: [
    { tipo: "Uma carta alta e uma baixa", acao: "Bet", ex: ["Js", "4s"] },
    { tipo: "Duas cartas altas", acao: "Check-raise", ex: ["Js", "Ts"] },
    { tipo: "Duas cartas baixas", acao: "Check-call", ex: ["4s", "3s"] },
  ] as { tipo: string; acao: string; ex: CardCode[] }[],

  turns: [
    {
      id: "blank",
      nome: "Turn 2, blank",
      size: "B70",
      flop: ["8s", "7d", "5s"],
      turn: "2c",
      criterio:
        "Board conectado e turn que não muda o nuts. O range de check atrás do BTN é condensado em pares médios, e o B70 ataca muitas mãos sem inflar o pote demais.",
      acoes: [
        {
          nome: "Bet",
          maos: "TP ou melhor, SP que cobram de piores (A7, K7) e que conectam (76, 97), 7x com flush draw, 5x do naipe, duas pontas, flush draws e brocas",
        },
        {
          nome: "Check-call",
          maos: "7x, third pair e qualquer par com redraw",
        },
        {
          nome: "Check-raise",
          maos: "Sequências (sem o naipe do board), dois pares pontuais e combo draw (duas pontas + FD)",
        },
      ],
      nota: "Aposte um size único. O B100 aqui faria você perder os 7x do range de bet.",
    },
    {
      id: "seco",
      nome: "Board seco (8-7-3)",
      size: "B100",
      flop: ["8s", "7d", "3c"],
      turn: "2h",
      criterio:
        "No board seco o seu 8x vira o absoluto. O vilão tem menos mãos fortes no check atrás e a sua equity direta é menor (para ter duas pontas você precisa do 65 ou do 96).",
      acoes: [
        {
          nome: "Bet",
          maos: "As mãos de valor, com o 8x como absoluto, em B100 ou no geométrico",
        },
      ],
      nota: "O range que paga é largo e com pouca equity, então o size alto é permitido.",
    },
    {
      id: "alta",
      nome: "Turn Q, dinâmico",
      size: "B40",
      flop: ["8s", "7d", "5s"],
      turn: "Qd",
      criterio:
        "O vilão coloca dinheiro no pote com as mãos fortes, e o seu topo não perde valor com o raise. O B40 aposta um grupo grande (Qx e 8x) e extrai das mãos de check atrás.",
      acoes: [
        {
          nome: "Bet",
          maos: "Qx e 8x (menos os piores de cada), flush draws, duas pontas e brocas com mais equity",
        },
        {
          nome: "Check-call",
          maos: "Os piores Qx (Q2, Q3, Q4), os piores 8x, second pair e par com redraw",
        },
        { nome: "Check-raise", maos: "Sequências e dois pares" },
      ],
      nota: "Os piores de cada grupo desbloqueiam as mãos que pagam (9 e 10). Um 4x é broca de lixo aqui, e K9 ou A9 é broca com plano.",
    },
    {
      id: "flushBaixo",
      nome: "Flush em carta baixa",
      size: "B40",
      flop: ["8s", "7d", "5s"],
      turn: "2s",
      criterio:
        "O nuts mudou, mas aqui você quer thin value, e o B40 permite apostar todos os TP.",
      acoes: [
        {
          nome: "Bet",
          maos: "Flushes com uma carta alta e uma baixa, TP, os 2 melhores SP, SP que conectam, flush draws, duas pontas e brocas com mais equity",
        },
        {
          nome: "Check-call",
          maos: "Par com FD, flushes baixos, SP+ e par com draw",
        },
        {
          nome: "Check-raise",
          maos: "Os melhores flushes (duas cartas altas) e combo draw",
        },
      ],
      nota: "Veja a divisão dos flushes mais abaixo.",
    },
    {
      id: "flushAlto",
      nome: "Flush em carta alta",
      size: "B70",
      flop: ["8s", "7d", "5s"],
      turn: "Qs",
      criterio:
        "O vilão tem muitos flushes e muita equity. O seu 8x e as Qx fracas perdem o incentivo de apostar, e você não quer thin value: só os melhores TP ou melhores.",
      acoes: [
        {
          nome: "Bet",
          maos: "Flushes com uma carta alta e uma baixa, os melhores TP, SP que conectam, flush draws, duas pontas e brocas com mais equity",
        },
        {
          nome: "Check-call",
          maos: "TP, SP, par com draw e os piores flushes",
        },
        {
          nome: "Check-raise",
          maos: "Os melhores flushes (duas cartas altas) e combo draw",
        },
      ],
      nota: "Como o grupo é mais restrito, o size sobe, até pote se quiser (e então só TP com o naipe do flush).",
    },
    {
      id: "sequencia",
      nome: "Turn 9, sequência",
      size: "B70",
      flop: ["8s", "7d", "5s"],
      turn: "9c",
      criterio:
        "O vilão tem check atrás com 9T e 77, e talvez algum 8x fraco. Com B70 você extrai de pares piores e ainda mata quando ele tem mão boa.",
      acoes: [
        {
          nome: "Bet",
          maos: "Sequências, os melhores dois pares, TP que vão para o nuts (9J, 9T), duas pontas, brocas e flush draws",
        },
        { nome: "Check-call", maos: "TP, SP e par com draw" },
        {
          nome: "Check-raise",
          maos: "Sequência nuts, sequência com redraw e draw para o nuts",
        },
      ],
      nota: "Nunca B25 aqui: ele não faz o vilão foldar, e com o range inteiro apostando o river vira uma árvore que ninguém sabe jogar.",
    },
    {
      id: "pareia",
      nome: "Turn que pareia",
      size: "B70",
      flop: ["8s", "7d", "5s"],
      turn: "8c",
      criterio:
        "No 875 com o turn 8, aposte todos os 8x e a maior parte dos 7x em B70.",
      acoes: [{ nome: "Bet", maos: "Todos os 8x e a maior parte dos 7x" }],
      nota: "No 887 com turn 2, B70 para os 8x e os 7x. No 887 com turn J, B100 só com o 8: o vilão tem os melhores valetes e o seu 7x já não tem o que apostar.",
    },
  ] as TurnProbe[],

  pocket: [
    "Range de check atrás do BTN: Ax, Kx, pares médios, brocas e give-ups.",
    "O size nasce do grupo de mãos que você aposta.",
    "Conectado B70, seco B100.",
    "B40 só se o vilão dá raise ou se você quer thin value.",
    "Flush em carta baixa: B40. Flush em carta alta: B70, só os melhores TP.",
    "Sequência completando: B70, nunca B25.",
    "Bluff com equity direta. Broca só com equity extra.",
    "Check-call: TP, SP e par com draw. Contra size grande, o par precisa de redraw.",
    "Check-raise: valor forte ou combo draw.",
    "Um size por situação.",
  ],

  erros: [
    "Usar B25 com o range inteiro.",
    "Usar o B40 num board em que o vilão não dá raise.",
    "Apostar B100 num board conectado e ficar sem os 7x no range.",
    "Apostar todas as brocas, em qualquer board.",
    "Apostar o 8x e as Qx fracas quando o flush completa em carta alta.",
    "Foldar TP, SP ou par com draw no check-call.",
    "Dar check-raise por bluff sem combo draw.",
  ],
}

export const turnById = Object.fromEntries(
  mod14.turns.map((t) => [t.id, t])
) as Record<TurnId, TurnProbe>
