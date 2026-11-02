import type { CardCode } from "@/data/mod15"
import type {
  AssentoT,
  HistoriaT,
  MesaT,
  ModuloTeoria,
} from "@/data/teoria/tipos"

// Mesa do pote a três: o EP (sentado no UTG1) abre, o BTN paga e o BB paga.
// O pote do flop é 6,5bb (2 + 2 + 2 + 0,5 do SB) e cada um fica com 38bb.
// A historia é o replay da mão até a vez do herói.
function mesa(
  board: CardCode[],
  historia: HistoriaT[],
  heroi: "EP" | "BTN" | "BB",
  legenda: string,
  stack = 38
): MesaT {
  const assentos: AssentoT[] = [
    { pos: "UTG1", nome: "EP", stack, heroi: heroi === "EP" },
    { pos: "BTN", stack, heroi: heroi === "BTN" },
    { pos: "BB", stack, heroi: heroi === "BB" },
  ]
  const pote = [...historia].reverse().find((h) => h.pote)?.pote ?? 6.5
  return { assentos, board, pote, legenda, historia }
}

// Pré-flop comum a todas as situações.
const PRE: HistoriaT[] = [
  { pos: "UTG1", acao: "Raise 2", pote: 3.5 },
  { pos: "BTN", acao: "Call", pote: 5.5 },
  { pos: "BB", acao: "Call", pote: 6.5 },
  { mostra: "flop" },
]

// Flop apostado pelo EP e pago pelos dois.
const FLOP_PAGO: HistoriaT[] = [
  { pos: "BB", acao: "Check" },
  { pos: "UTG1", acao: "Bet 1,6", pote: 8.1 },
  { pos: "BTN", acao: "Call", pote: 9.7 },
  { pos: "BB", acao: "Call", pote: 11.3 },
  { mostra: "turn" },
]

const SECO: CardCode[] = ["Ks", "7d", "2c"]
const CARREGADO: CardCode[] = ["Js", "Ts", "8d"]

const m10: ModuloTeoria = {
  slug: "multiway",
  tema: "Multiway",
  nome: "Multiway Pot",
  spot: "Pote a três · EP, BTN e BB · flop e turn · cerca de 40bb",
  tags: ["Flop e turn", "Pote a três", "40bb"],
  videos: [{ id: "cafsU12tjM4" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "Range de quem aposta não está capado: em pote a três ele ainda carrega overpairs, trincas e dois pares. A frequência média de c-bet do field é de cerca de 35%.",
        "Fora de posição: nunca é range bet. Use o split de c-bet OOP.",
        "Não overfolde: foldar top pair, second pair e mãos sem overcard contra qualquer agressão gera EV negativo.",
        "BB contra o check do agressor: não dá check-raise, porque o range de check do agressor pré-flop não está capado.",
        "Lead do BB no turn: o size é B25. Só existe lead no multiway.",
        "Flop check-check-check: não existe probe turn do BB.",
      ],
    },
    {
      tipo: "abas",
      titulo: "O que fazer em cada situação",
      intro:
        "Escolha a sua posição e a situação. A mão passa na mesa, ação por ação, como no replayer. Quando chega a sua vez, aparece o que fazer, com um exemplo de cada grupo de mãos.",
      abas: [
        {
          id: "oop",
          nome: "Você é o EP (OOP)",
          criterio:
            "O EP abre, o BTN paga e o BB paga. No flop, use o split de c-bet OOP, nunca range bet.",
          blocos: [
            {
              grupo: "Flop seco: você dá check, o BTN aposta e o BB paga",
              mesa: mesa(
                SECO,
                [
                  ...PRE,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Check" },
                  { pos: "BTN", acao: "Bet 1,6", pote: 8.1 },
                  { pos: "BB", acao: "Call", pote: 9.7 },
                ],
                "EP",
                "K-7-2 rainbow. O BTN apostou, o BB pagou e a ação voltou para você."
              ),
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  only: "Check-raise ou fold, sem check-call",
                  texto:
                    "Board seco: check-raise com tudo que vai continuar. Qualquer par do board ou blockers com BDFD + BDST viram check-raise.",
                  maos: [
                    { nome: "Par do board", cartas: ["7h", "6h"] },
                    { nome: "Blocker + BDFD + BDST", cartas: ["Ad", "5d"] },
                  ],
                },
              ],
            },
            {
              grupo: "Flop carregado: você dá check, o BTN aposta e o BB paga",
              mesa: mesa(
                CARREGADO,
                [
                  ...PRE,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Check" },
                  { pos: "BTN", acao: "Bet 1,6", pote: 8.1 },
                  { pos: "BB", acao: "Call", pote: 9.7 },
                ],
                "EP",
                "J-T-8 com dois de espadas. O BTN apostou, o BB pagou e a ação voltou para você."
              ),
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto:
                    "Board carregado: check-raise com os melhores top pairs e os super draws.",
                  maos: [
                    { nome: "Melhor top pair", cartas: ["Ah", "Jd"] },
                    { nome: "Super draw", cartas: ["As", "Qs"] },
                  ],
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto:
                    "O resto que quer realizar equity: TP fracos, second pair + BDFD e bons draws.",
                  maos: [
                    { nome: "Second pair + BDFD", cartas: ["Td", "9d"] },
                    { nome: "Bom draw", cartas: ["Kh", "Qh"] },
                  ],
                },
              ],
            },
            {
              grupo: "Turn blank: você apostou o flop e os dois pagaram",
              mesa: mesa(
                [...SECO, "3h"],
                [...PRE, ...FLOP_PAGO, { pos: "BB", acao: "Check" }],
                "EP",
                "K-7-2, turn 3: blank. O BB deu check e a ação está com você.",
                36.4
              ),
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Blank: B100, só com os 3 melhores top pairs ou melhor. Aqui o EP ainda tem a maioria das mãos fortes, então o objetivo é extrair.",
                  maos: [
                    { nome: "Top pair", cartas: ["Ah", "Kd"] },
                    { nome: "Trinca", cartas: ["7h", "7c"] },
                  ],
                },
              ],
            },
            {
              grupo: "Turn dinâmico: você apostou o flop e os dois pagaram",
              mesa: mesa(
                [...SECO, "8d"],
                [...PRE, ...FLOP_PAGO, { pos: "BB", acao: "Check" }],
                "EP",
                "K-7-2, turn 8 de ouros: dinâmico. O BB deu check e a ação está com você.",
                36.4
              ),
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Dinâmico: B40, com os melhores second pairs ou melhor.",
                  maos: [
                    { nome: "Top pair", cartas: ["Kh", "Qc"] },
                    { nome: "Second pair", cartas: ["Ac", "8c"] },
                  ],
                },
                {
                  nome: "Bet de bluff",
                  cor: "amarelo",
                  texto:
                    "Equity direta (broca, duas pontas, flush draw) com blockers que incluam pelo menos uma overcard ao top pair.",
                  maos: [{ nome: "Flush draw + A", cartas: ["Ad", "5d"] }],
                },
              ],
            },
          ],
          nota: "Exceção por SPR: com stacks muito curtos depois de dois calls (SPR perto de 1), prefira call com mãos muito fortes em vez de check-raise.",
        },
        {
          id: "ip",
          nome: "Você é o BTN (IP)",
          criterio:
            "O EP abre, você paga e o BB paga. No flop, use o split de bet-vs-missed, com B25 como padrão.",
          blocos: [
            {
              grupo: "EP aposta: o BB dá check e o EP aposta o flop",
              mesa: mesa(
                SECO,
                [
                  ...PRE,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Bet 1,6", pote: 8.1 },
                ],
                "BTN",
                "K-7-2 rainbow. O EP apostou e a ação está com você."
              ),
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto:
                    "Qualquer par do board, pocket pairs e overcard sobre o second pair ou o terceiro par. Sem overcard sobre nenhum par, a mão é marginal.",
                  maos: [
                    { nome: "Par do board", cartas: ["7h", "6h"] },
                    { nome: "Pocket pair", cartas: ["5h", "5c"] },
                    { nome: "Third pair + overcard", cartas: ["Ah", "2h"] },
                  ],
                },
                {
                  nome: "Board carregado",
                  cor: "branco",
                  texto:
                    "Quanto mais carregado, mais equity você precisa para continuar, porque o range de aposta do agressor também fica mais forte.",
                },
              ],
            },
            {
              grupo:
                "EP dá check-raise: você aposta o flop e o EP dá check-raise",
              mesa: mesa(
                CARREGADO,
                [
                  ...PRE,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Check" },
                  { pos: "BTN", acao: "Bet 1,6", pote: 8.1 },
                  { pos: "BB", acao: "Fold" },
                  { pos: "UTG1", acao: "Check-raise 5,8", pote: 13.9 },
                ],
                "BTN",
                "J-T-8 com dois de espadas. O EP deu check-raise e a ação voltou para você."
              ),
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto:
                    "Não overfolde: mãos com backdoor pagam, pares do board pagam, K-J e Q-x com backdoor pagam. Só folda o que não tem redraw para o nuts nem equity direta.",
                  maos: [
                    { nome: "K-J", cartas: ["Kh", "Jc"] },
                    { nome: "Par do board", cartas: ["8h", "7h"] },
                    { nome: "Q-x + backdoor", cartas: ["Qd", "5d"] },
                  ],
                },
              ],
            },
            {
              grupo: "Turn blank: o flop foi em check e o EP dá check de novo",
              mesa: mesa(
                [...SECO, "3h"],
                [
                  ...PRE,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Check" },
                  { pos: "BTN", acao: "Check" },
                  { mostra: "turn" },
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Check" },
                ],
                "BTN",
                "Flop K-7-2 em check, turn 3: blank. Os dois deram check e a ação está com você."
              ),
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Blank: B70, com mãos que ganham do second pair. Os top pairs mais fracos que deram check no flop e os melhores second pairs.",
                  maos: [
                    { nome: "Top pair fraco", cartas: ["Kc", "9c"] },
                    { nome: "Melhor second pair", cartas: ["Ah", "7h"] },
                  ],
                },
                {
                  nome: "Turn dinâmico",
                  cor: "verde",
                  texto: "B70, com os melhores top pairs ou melhor.",
                },
              ],
            },
          ],
        },
        {
          id: "bb",
          nome: "Você é o BB",
          criterio:
            "O EP abre, o BTN paga e você paga. A regra mais importante: não existe check-raise quando o agressor pré-flop dá check.",
          blocos: [
            {
              grupo: "Flop: você dá check, o EP dá check e o BTN aposta",
              mesa: mesa(
                SECO,
                [
                  ...PRE,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Check" },
                  { pos: "BTN", acao: "Bet 1,6", pote: 8.1 },
                ],
                "BB",
                "K-7-2 rainbow. O EP deu check, o BTN apostou e a ação voltou para você."
              ),
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  only: "Call ou fold, sem check-raise",
                  texto:
                    "O range de check do EP ainda tem overpairs, trincas e dois pares. Em board seco, nunca folde par do board nem equity direta.",
                  maos: [{ nome: "Par do board", cartas: ["7h", "5h"] }],
                },
                {
                  nome: "Board carregado",
                  cor: "branco",
                  texto:
                    "Third pair ou draws que não vão para o nuts precisam de BDFD para continuar.",
                },
                {
                  nome: "EP aposta e o BTN paga",
                  cor: "vermelho",
                  texto:
                    "O check-raise volta a existir, e você joga como se fosse heads-up contra o agressor.",
                },
              ],
            },
            {
              grupo: "Lead no turn: turn blank depois do bet-vs-missed",
              mesa: mesa(
                [...SECO, "3h"],
                [
                  ...PRE,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Check" },
                  { pos: "BTN", acao: "Bet 1,6", pote: 8.1 },
                  { pos: "BB", acao: "Call", pote: 9.7 },
                  { pos: "UTG1", acao: "Call", pote: 11.3 },
                  { mostra: "turn" },
                ],
                "BB",
                "No flop, o BTN apostou e você e o EP pagaram. Turn 3: blank, e você age primeiro.",
                36.4
              ),
              acoes: [
                {
                  nome: "Lead B25",
                  cor: "verde",
                  texto:
                    "Os melhores top pairs, alguns dois pares, equilibrando com a trinca, e o second pair sem overcard.",
                  maos: [
                    { nome: "Melhor top pair", cartas: ["Kh", "Qh"] },
                    { nome: "Dois pares", cartas: ["Kc", "7c"] },
                    { nome: "Second pair sem over", cartas: ["7h", "6h"] },
                  ],
                },
                {
                  nome: "Lead no dinâmico",
                  cor: "verde",
                  texto:
                    "Em turn dinâmico, lead em B25 com os melhores top pairs e qualquer par que conecte com o board.",
                },
              ],
            },
            {
              grupo: "Agressor aposta o turn: o EP aposta e o BTN paga",
              mesa: mesa(
                [...SECO, "3h"],
                [
                  ...PRE,
                  ...FLOP_PAGO,
                  { pos: "BB", acao: "Check" },
                  { pos: "UTG1", acao: "Bet 4,5", pote: 15.8 },
                  { pos: "BTN", acao: "Call", pote: 20.3 },
                ],
                "BB",
                "Turn 3: o EP apostou, o BTN pagou e a ação voltou para você.",
                36.4
              ),
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto:
                    "Com os melhores top pairs ou melhor e os combo draws.",
                  maos: [
                    { nome: "Melhor top pair", cartas: ["Kh", "Qh"] },
                    { nome: "Dois pares", cartas: ["Kc", "7c"] },
                  ],
                },
              ],
            },
          ],
          nota: "Se o flop foi check-check-check, não existe probe turn do BB: o agressor ainda carrega as mãos fortes, e o solver mostrou frequência de probe perto de zero. Continue com todo o range natural e dê check-raise com o melhor top pair ou melhor, e bluff com super combo draws.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Size de referência",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "C-bet OOP",
          texto: "Às vezes B25.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Bet-vs-missed IP",
          texto: "Às vezes B40.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Turn dinâmico, agressor OOP",
          texto: "B40.",
        },
        {
          etiqueta: { texto: "B100", cor: "verde" },
          titulo: "Turn blank, agressor OOP",
          texto: "O máximo.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Turn IP, depois do bet-vs-missed",
          texto: "Dinâmico ou blank.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Lead do BB",
          texto: "Blank ou dinâmico. O único size observado.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Por que a estratégia antiga estava errada",
      intro:
        "Ela foi construída em cima de exploits, sem um solver de três jogadores confiável.",
      colunas: 3,
      itens: [
        {
          titulo: "C-bet de range OOP",
          texto:
            "O EP fora de posição não consegue apostar em frequência alta, porque os dois pagadores cobrem o board.",
        },
        {
          titulo: "Bet-vs-missed de range",
          texto:
            "Tanto para o agressor original quanto para quem ataca depois de um check.",
        },
        {
          titulo: "Overfold",
          texto:
            "Foldar top pair, second pair e mãos sem overcard contra qualquer agressão dava EV negativo, confirmado pelo MDA do field.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Limites do estudo",
      itens: [
        {
          titulo: "Small blind",
          texto:
            "Existe um possível lead do SB em boards low conectados (987, 876, 765, 654, 432), mas com frequência baixa e EV parecido com dar check. Fica como estudo futuro.",
        },
        {
          titulo: "O que ainda falta",
          textos: [
            "Testado sobretudo a 40bb, ainda não a 15-20bb.",
            "Assume ranges pré-flop padrão (ChipEV).",
            "Não cobre dois jogadores em posição contra o hero, nem river.",
          ],
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "OOP no multiway: nunca range bet. Use o split.",
        "Contra agressão: não overfolde, porque o range de quem aposta não está capado.",
        "BB contra o check do agressor pré-flop: sem check-raise.",
        "Lead do BB no turn: existe só no multiway, em B25.",
        "Check-check-check no flop: sem probe turn.",
        "Turn como agressor OOP: blank em B100 com os melhores top pairs. Dinâmico em B40.",
      ],
    },
  ],
}

export default m10
