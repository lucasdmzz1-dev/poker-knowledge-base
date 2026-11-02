import type { ModuloTeoria } from "@/data/teoria/tipos"

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
        "Em pote a três, o range de quem aposta não está capado: ele ainda carrega overpairs, trincas e dois pares. A frequência média de c-bet do field é de cerca de 35%.",
        "Fora de posição, nunca é range bet: use o split de c-bet OOP.",
        "Não overfolde: foldar top pair, second pair e mãos sem overcard contra qualquer agressão gera EV negativo.",
        "Contra check do agressor pré-flop, o BB não dá check-raise: o range de check dele não está capado.",
        "Quando o BB lidera o turn (lead), o size é B25. Só existe lead no multiway.",
        "Se o flop foi check-check-check, não existe probe turn do BB.",
      ],
    },
    {
      tipo: "abas",
      titulo: "O que fazer em cada situação",
      intro: "Escolha a sua posição no pote a três.",
      abas: [
        {
          id: "oop",
          nome: "Você é o EP (OOP)",
          criterio:
            "O EP abre, o BTN paga e o BB paga. No flop, use o split de c-bet OOP, nunca range bet.",
          blocos: [
            {
              grupo: "Flop: o BTN aposta e o BB paga",
              acoes: [
                {
                  nome: "Board seco",
                  cor: "vermelho",
                  texto:
                    "Check-raise com tudo que vai continuar: qualquer par do board ou blockers com BDFD + BDST viram check-raise ou fold, sem check-call no meio.",
                },
                {
                  nome: "Board carregado",
                  cor: "vermelho",
                  texto:
                    "Check-raise com os melhores top pairs e os super draws. O resto que quer realizar equity (TP fracos, second pair + BDFD, bons draws) vai de call.",
                },
              ],
            },
            {
              grupo: "Turn",
              acoes: [
                {
                  nome: "Dinâmico",
                  cor: "verde",
                  texto: "B40, com os melhores second pairs ou melhor.",
                },
                {
                  nome: "Blank",
                  cor: "verde",
                  texto:
                    "B100, só com os 3 melhores top pairs ou melhor. Aqui o EP ainda tem a maioria das mãos fortes, então o objetivo é extrair.",
                },
                {
                  nome: "Blefe",
                  cor: "vermelho",
                  texto:
                    "Equity direta (broca, duas pontas, flush draw) com blockers que incluam pelo menos uma overcard ao top pair.",
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
              grupo: "Flop: o EP aposta",
              acoes: [
                {
                  nome: "Continua",
                  cor: "verde",
                  texto:
                    "Qualquer par do board, pocket pairs e overcard sobre o second pair ou o terceiro par. Sem overcard sobre nenhum par, a mão é marginal.",
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
              grupo: "Flop: check-raise do EP",
              acoes: [
                {
                  nome: "Não overfolde",
                  cor: "verde",
                  texto:
                    "Mãos com backdoor pagam, pares do board pagam, K-J e Q-x com backdoor pagam. Só folda o que não tem redraw para o nuts nem equity direta.",
                },
              ],
            },
            {
              grupo: "Turn",
              acoes: [
                {
                  nome: "Dinâmico",
                  cor: "verde",
                  texto: "B70, com os melhores top pairs ou melhor.",
                },
                {
                  nome: "Blank",
                  cor: "verde",
                  texto:
                    "B70, com mãos que ganham do second pair: os top pairs mais fracos que deram check no flop e os melhores second pairs.",
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
              grupo: "Flop",
              acoes: [
                {
                  nome: "EP dá check",
                  cor: "branco",
                  texto:
                    "Sem check-raise: o range de check do EP ainda tem overpairs, trincas e dois pares.",
                },
                {
                  nome: "EP aposta e o IP paga",
                  cor: "vermelho",
                  texto:
                    "O check-raise volta a existir, e você joga como se fosse heads-up contra o agressor.",
                },
                {
                  nome: "Board seco",
                  cor: "verde",
                  texto: "Nunca folde par do board nem equity direta.",
                },
                {
                  nome: "Board carregado",
                  cor: "branco",
                  texto:
                    "Third pair ou draws que não vão para o nuts precisam de BDFD para continuar.",
                },
              ],
            },
            {
              grupo: "Turn: lead depois do bet-vs-missed",
              acoes: [
                {
                  nome: "Blank",
                  cor: "verde",
                  texto:
                    "Lead em B25: os melhores top pairs, alguns dois pares, equilibrando com a trinca, e o second pair sem overcard.",
                },
                {
                  nome: "Dinâmico",
                  cor: "verde",
                  texto:
                    "Lead em B25: os melhores top pairs e qualquer par que conecte com o board.",
                },
              ],
            },
            {
              grupo: "Turn: o agressor aposta",
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto:
                    "Com os melhores top pairs ou melhor e os combo draws.",
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
        "Nunca range bet OOP no multiway: use o split.",
        "Não overfolde contra agressão: o range de quem aposta não está capado.",
        "O BB não dá check-raise contra o check do agressor pré-flop.",
        "O lead do BB no turn existe só no multiway, em B25.",
        "Check-check-check no flop: sem probe turn.",
        "Turn blank como agressor OOP: B100 com os melhores top pairs. Dinâmico: B40.",
      ],
    },
  ],
}

export default m10
