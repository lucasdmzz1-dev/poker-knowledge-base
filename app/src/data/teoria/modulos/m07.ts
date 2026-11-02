import type { ModuloTeoria } from "@/data/teoria/tipos"

const m07: ModuloTeoria = {
  slug: "xr-deep-stack",
  tema: "Check-Raise Deep Stack",
  nome: "Check-Raise Deep Stack",
  spot: "Pote single raised · você no BB, fora de posição · deep stack · contra EP e contra BU",
  tags: ["Flop e turn", "Fora de posição", "Deep stack", "Check-raise"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "No deep stack o check-raise é construído com mais equity: mãos que continuam contra ação, realizam equity e jogam potes grandes.",
        "A pergunta não é se a mão é forte, é se ela tem equity suficiente e qual linha extrai mais EV.",
        "Não faça slowplay com mãos fortes: use o check-raise para construir pote, diminuir o SPR e pressionar.",
        "Valor contra EP: os 1 ou 2 melhores top pairs ou melhor. Contra BU: os 3 ou 4 melhores.",
        "Quanto mais carregado o board, menos top pairs vão para o check-raise.",
        "Os bluffs vêm de mãos com equity, draws, backdoors e capacidade de melhorar.",
        "Depois do check-raise no flop, o turn blank é B70 ou mais, e o turn dinâmico é B40.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Check-raise por valor",
      colunas: 3,
      itens: [
        {
          titulo: "Contra EP",
          texto: "Os 1 ou 2 melhores top pairs ou melhor.",
        },
        {
          titulo: "Contra BU",
          texto: "Os 3 ou 4 melhores top pairs ou melhor.",
        },
        {
          titulo: "Textura do board",
          texto:
            "Quanto mais carregado, menos top pairs no check-raise: em board dinâmico existem mais turns que mudam a força relativa das mãos.",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Top pair no check-raise",
      intro:
        "O top pair não entra automaticamente. Considere o kicker, a textura do board, a capacidade de continuar e a necessidade de proteção. Guarde algumas mãos para o XC e para o calldown.",
      itens: [
        "Força do kicker.",
        "Textura do board.",
        "Capacidade de continuar.",
        "Necessidade de proteção.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Check-raise de bluff",
      intro:
        "Os bluffs vêm de mãos com equity, draws, backdoors e capacidade de melhorar.",
      itens: [
        {
          titulo: "Categorias principais",
          textos: [
            "Duas pontas.",
            "Brocas com estrutura.",
            "Flush draws, inclusive com cartas altas.",
            "Combo draws.",
          ],
        },
        {
          titulo: "Brocas e backdoors",
          textos: [
            "Brocas sem estrutura não são check-raise automático.",
            "As melhores têm backdoor flush draw, backdoor straight draw, overcards e possibilidade de evolução.",
          ],
        },
        {
          titulo: "Flush draws",
          textos: [
            "Precisam ter capacidade de continuar.",
            "Flush draw com carta alta, com equity adicional ou que consiga jogar por stacks.",
          ],
        },
      ],
      colunas: 3,
    },
    {
      tipo: "abas",
      titulo: "Depois do check-raise no flop",
      abas: [
        {
          id: "blank",
          nome: "Turn blank",
          criterio: "O turn não muda as interações do board.",
          blocos: [
            {
              etiqueta: { texto: "B70+", cor: "verde" },
              acoes: [{ nome: "Aposta", cor: "verde", texto: "B70 ou mais." }],
            },
          ],
        },
        {
          id: "dinamico",
          nome: "Turn dinâmico",
          criterio:
            "Cartas altas, flush completando, sequência completando e mudanças de nuts.",
          blocos: [
            {
              etiqueta: { texto: "B40", cor: "vermelho" },
              acoes: [{ nome: "Aposta", cor: "verde", texto: "B40." }],
            },
          ],
        },
        {
          id: "cbet",
          nome: "C-bet depois do XR",
          criterio: "O range de c-bet depois do check-raise no flop.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Valor",
                  cor: "verde",
                  texto: "Bons top pairs e mãos melhores.",
                },
                {
                  nome: "Bluff",
                  cor: "vermelho",
                  texto: "Duas pontas e flush draws.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Proteção e SPR",
      itens: [
        {
          titulo: "Proteção de range",
          texto:
            "Quando o board abre muita possibilidade de evolução, considere mãos que precisam proteger a equity. Boards extremamente conectados podem usar linhas mais agressivas.",
        },
        {
          titulo: "SPR e construção de pote",
          texto:
            "O check-raise com mãos muito fortes reduz o SPR, constrói pote e pressiona. SPR menor não significa shove: depende da necessidade de proteção e da função da mão.",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Pergunte se a mão tem equity suficiente e qual linha extrai mais EV.",
        "Separe as mãos que querem realizar equity, as que querem pressionar e as que querem construir pote.",
        "Sem slowplay com mãos fortes no deep stack.",
        "Valor: 1 ou 2 melhores top pairs contra EP, 3 ou 4 contra BU.",
        "Bluff com equity: duas pontas, brocas com estrutura, flush draws e combo draws.",
        "Turn depois do XR: blank em B70 ou mais, dinâmico em B40.",
      ],
    },
  ],
  fonte:
    "theory/07-XR-DEEP (guideline). A guideline não traz boards nem mãos de exemplo",
}

export default m07
