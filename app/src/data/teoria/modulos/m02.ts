import type { ModuloTeoria } from "@/data/teoria/tipos"

const m02: ModuloTeoria = {
  slug: "cbet-ip-40bb",
  tema: "C-Bet IP e 2nd Barrel",
  nome: "C-Bet IP 40bb",
  spot: "Pote single raised · você em posição, como agressor · cerca de 40bb efetivos",
  tags: ["Flop", "Em posição", "40bb", "Sizes B25, B40 e B70"],
  videos: [{ id: "4ZjyOgd-5Tg" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "O size muda: com a textura do board e com a posição de abertura.",
        "De EP e HJ: A high em B25, broadway e conectado em B40, low em B70 com split, monotone e dobrado em B25.",
        "De CO e BTN: tudo em B25 como range bet, menos o low, que é B70 com split.",
        "Board low: é o único em que você divide o range entre bet por valor, bet de bluff e check.",
        "No turn: blank em size geométrico, carta que conecta em B70, flush que completa em carta alta em B40 e em carta baixa em B70.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Abrindo de EP ou HJ",
      intro:
        "Size e estratégia de cada tipo de board, com um board de exemplo.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "A high",
          texto: "Range bet.",
          cartas: ["Ad", "7c", "2h"],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Broadway",
          texto: "Range bet.",
          cartas: ["Ks", "Jd", "5c"],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Conectado",
          texto: "Range bet.",
          cartas: ["Th", "9c", "7d"],
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Low",
          texto: "Split.",
          cartas: ["8c", "4d", "2h"],
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Monotone",
          texto: "Range bet.",
          cartas: ["Ks", "8s", "3s"],
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Dobrado",
          texto: "Range bet.",
          cartas: ["8s", "8d", "3c"],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Abrindo de CO ou BTN",
      intro: "Em posição tardia o size baixo vale para quase tudo.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "A high",
          texto: "Range bet.",
          cartas: ["Ad", "7c", "2h"],
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Broadway",
          texto: "Range bet.",
          cartas: ["Ks", "Jd", "5c"],
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Conectado",
          texto: "Range bet.",
          cartas: ["Th", "9c", "7d"],
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Low",
          texto: "Split.",
          cartas: ["8c", "4d", "2h"],
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Monotone",
          texto: "Range bet.",
          cartas: ["Ks", "8s", "3s"],
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Dobrado",
          texto: "Range bet.",
          cartas: ["8s", "8d", "3c"],
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
              cartas: ["8c", "4d", "2h"],
              rotulo: "8-4-2 rainbow",
              etiqueta: { texto: "B70", cor: "verde" },
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Todos os top pairs ou melhores e second pair com bom kicker.",
                  maos: [
                    { nome: "Top pair", cartas: ["Ah", "8s"] },
                    { nome: "Overpair", cartas: ["9h", "9c"] },
                    { nome: "Second pair, bom kicker", cartas: ["As", "4s"] },
                  ],
                },
                {
                  nome: "Bet de bluff",
                  cor: "verde",
                  texto:
                    "Draws diretos com flush draw ou backdoor flush draw, draws diretos da parte off com o naipe do flush draw e mãos da borda do range que não se importam em jogar bet/fold.",
                  maos: [
                    { nome: "Dupla broca + BDFD", cartas: ["6h", "5h"] },
                    { nome: "Broca + BDFD", cartas: ["Ad", "3d"] },
                  ],
                },
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Valor médio, draws fracos e mãos que querem realizar equity, como overcards com backdoor flush draw.",
                  maos: [
                    { nome: "Valor médio", cartas: ["7c", "7s"] },
                    { nome: "Broca fraca", cartas: ["7d", "6d"] },
                    { nome: "Overcards + BDFD", cartas: ["Kh", "Qh"] },
                  ],
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
              cartas: ["8s", "7s", "5d"],
              rotulo: "8-7-5 com dois de espadas",
              etiqueta: { texto: "B70", cor: "verde" },
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Os melhores top pairs, os top pairs que conectam com o board e second pair que conecta com o board.",
                  maos: [
                    { nome: "Melhor top pair", cartas: ["Ah", "8h"] },
                    { nome: "Top pair que conecta", cartas: ["9s", "8c"] },
                    { nome: "Second pair que conecta", cartas: ["7h", "6h"] },
                  ],
                },
                {
                  nome: "Bet de bluff",
                  cor: "verde",
                  texto:
                    "Draws diretos com flush draw ou backdoor flush draw, draws diretos da parte off com o naipe do flush draw e mãos da borda do range que não se importam em jogar bet/fold.",
                  maos: [
                    { nome: "Broca + flush draw", cartas: ["As", "4s"] },
                    { nome: "Duas pontas off com ♠", cartas: ["Ts", "9d"] },
                  ],
                },
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Valor médio, draws fracos e mãos que querem realizar equity, como overcards com backdoor flush draw.",
                  maos: [
                    { nome: "Valor médio", cartas: ["Ac", "5c"] },
                    { nome: "Broca fraca", cartas: ["Jh", "Th"] },
                    { nome: "Overcards + BDFD", cartas: ["Kd", "Qd"] },
                  ],
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
        "Size menor: use B40 no lugar do B70.",
        "Valor: aposte todos os top pairs.",
        "Slowplay: dê slowplay com trincas e com sequências.",
        "Draws que não querem jogar bet/fold: não aposte, como duas pontas fracas ou brocas com backdoor flush draw.",
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
          cartas: ["Ks", "8d", "3c"],
          turn: "2h",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Turn que conecta",
          texto: "Bet de 70% do pote, ampliando o thin value.",
          cartas: ["Js", "9d", "4c"],
          turn: "Th",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Flush completa em carta alta",
          texto: "Bet de 40% do pote, ampliando o thin value.",
          cartas: ["Ks", "8s", "3d"],
          turn: "Qs",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Flush completa em carta baixa",
          texto: "Bet de 70% do pote.",
          cartas: ["Ks", "8s", "3d"],
          turn: "5s",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Size: sai da textura do board e da posição de abertura.",
        "De CO e BTN: B25 como range bet em quase todos os boards.",
        "De EP e HJ: B40 em broadway e conectado.",
        "Board low: B70 com split, em qualquer posição.",
        "Menos de 15bb no low: B40, todos os top pairs e slowplay com trincas e sequências.",
        "Turn: carta que conecta em B70, flush em carta alta em B40, flush em carta baixa em B70.",
      ],
    },
  ],
}

export default m02
