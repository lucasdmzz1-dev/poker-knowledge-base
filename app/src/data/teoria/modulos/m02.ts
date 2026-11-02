import type { ModuloTeoria } from "@/data/teoria/tipos"

const m02: ModuloTeoria = {
  slug: "cbet-ip-40bb",
  tema: "C-Bet IP e 2nd Barrel",
  nome: "C-Bet IP 40bb",
  spot: "Pote single raised · você em posição, como agressor · cerca de 40bb efetivos",
  tags: ["Flop", "Em posição", "40bb", "Sizes B25, B40 e B70"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "O size muda com a textura do board e com a posição de abertura.",
        "De EP e HJ: A high em B25, broadway e conectado em B40, low em B70 com split, monotone e dobrado em B25.",
        "De CO e BU: tudo em B25 como range bet, menos o low, que é B70 com split.",
        "Board low é o único em que você divide o range: bet por valor, bet de bluff e check.",
        "No turn: blank em size geométrico, carta que conecta em B70, flush completando em carta alta em B40 e em carta baixa em B70.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Abrindo de EP ou HJ",
      intro: "Size e estratégia de cada tipo de board.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "A high",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Broadway",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Conectado",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Low",
          texto: "Split.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Monotone",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Dobrado",
          texto: "Range bet.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Abrindo de CO ou BU",
      intro: "Em posição tardia o size baixo vale para quase tudo.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "A high",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Broadway",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Conectado",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Low",
          texto: "Split.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Monotone",
          texto: "Range bet.",
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Dobrado",
          texto: "Range bet.",
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "Split nos boards low",
      intro: "Em B70 você não aposta o range todo. Três grupos de mãos.",
      abas: [
        {
          id: "seco",
          nome: "Board seco",
          criterio:
            "Em board seco, o valor vem de quase todos os top pairs e de second pair com bom kicker.",
          blocos: [
            {
              etiqueta: { texto: "B70", cor: "verde" },
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Todos os top pairs ou melhores e second pair com bom kicker.",
                },
                {
                  nome: "Bet de bluff",
                  cor: "verde",
                  texto:
                    "Draws diretos com flush draw ou backdoor flush draw, draws diretos da parte off com o naipe do flush draw e mãos da borda do range que não se importam em jogar bet/fold.",
                },
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Valor médio, draws fracos e mãos que querem realizar equity (overcards com backdoor flush draw).",
                },
              ],
            },
          ],
        },
        {
          id: "carregado",
          nome: "Board carregado",
          criterio:
            "Em board carregado, o valor fica mais restrito: só as mãos que conectam com o board.",
          blocos: [
            {
              etiqueta: { texto: "B70", cor: "verde" },
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Os melhores top pairs, os top pairs que conectam com o board e second pair que conecta com o board.",
                },
                {
                  nome: "Bet de bluff",
                  cor: "verde",
                  texto:
                    "Draws diretos com flush draw ou backdoor flush draw, draws diretos da parte off com o naipe do flush draw e mãos da borda do range que não se importam em jogar bet/fold.",
                },
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Valor médio, draws fracos e mãos que querem realizar equity (overcards com backdoor flush draw).",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Ajustes para short stack (menos de 15bb)",
      intro: "Nos boards low:",
      itens: [
        "Use B40 no lugar do B70.",
        "Aposte todos os top pairs.",
        "Dê slowplay com trincas e com sequências.",
        "Não aposte draws que não querem jogar bet/fold, como duas pontas fracas ou brocas com backdoor flush draw.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Introdução ao second barrel",
      intro: "O size do turn depende da carta que cai.",
      itens: [
        {
          titulo: "Turn blank",
          texto: "Size geométrico.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Turn que conecta",
          texto: "Bet de 70% do pote, ampliando o thin value.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Flush completa em carta alta",
          texto: "Bet de 40% do pote, ampliando o thin value.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Flush completa em carta baixa",
          texto: "Bet de 70% do pote.",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "O size sai da textura do board e da posição de abertura.",
        "De CO e BU, B25 como range bet em quase todos os boards.",
        "De EP e HJ, B40 em broadway e conectado.",
        "Board low: B70 com split, em qualquer posição.",
        "Menos de 15bb no low: B40, todos os top pairs e slowplay com trincas e sequências.",
        "Turn que conecta: B70. Flush alto: B40. Flush baixo: B70.",
      ],
    },
  ],
  fonte:
    "theory/02-CBet-IP-40bb (guideline). A guideline não traz boards nem mãos de exemplo, então esta página usa só texto e etiquetas de size",
}

export default m02
