import type { ModuloTeoria } from "@/data/teoria/tipos"

const m03: ModuloTeoria = {
  slug: "second-barrel-ip",
  tema: "2nd Barrel IP",
  nome: "C-Bet IP + Second Barrel",
  spot: "Pote single raised · você em posição, como agressor · do flop ao turn, depois de receber call",
  tags: ["Flop e turn", "Em posição", "Second barrel"],
  videos: [{ id: "jYVMQnA24NM" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "C-bet e second barrel juntos: não analise o second barrel sem considerar a c-bet do flop. O range do turn nasce da construção do flop.",
        "Range de quem pagou: chega ao turn com mais mãos conectadas e mais equity, mas você mantém mais mãos fortes e mais nuts.",
        "Polarizado ou linear: com vantagem de nuts, a estratégia é mais polarizada. Quando o board conecta o range do vilão, ela é mais linear.",
        "Turn blank: polarize, com size alto, valor forte e bluffs selecionados.",
        "Turn que conecta: mais equity, mais frequência e size médio, para combater equity com equity.",
        "Turn de carta alta: expanda o valor com size médio, para apostar novos top pairs e os melhores second pairs.",
        "Top pairs fracos no check: precisam existir, para capturar bluffs no river.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "O que muda do flop para o turn",
      intro: "Depois do call, o range do vilão e o seu mudam de forma.",
      itens: [
        {
          titulo: "O vilão filtra o range",
          textos: [
            "Chega ao turn com mais mãos conectadas ao board.",
            "Aumenta a frequência de mãos com showdown e equity.",
          ],
        },
        {
          titulo: "Você mantém a vantagem de nuts",
          textos: [
            "Mais mãos fortes no range.",
            "Mais nuts em vários boards.",
            "Ter mais equity não significa ter a melhor estratégia.",
          ],
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "O que fazer em cada turn",
      abas: [
        {
          id: "blank",
          nome: "Turn blank",
          criterio:
            "O turn não altera as interações do board. O objetivo é extrair o máximo das mãos fortes.",
          blocos: [
            {
              cartas: ["Ks", "8d", "3c"],
              turn: "2h",
              rotulo: "K-8-3 rainbow, turn 2",
              etiqueta: { texto: "Size alto", cor: "verde" },
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "Estratégia mais polarizada, com menor frequência e size maior. Valor forte.",
                  maos: [
                    { nome: "Top pair top kicker", cartas: ["As", "Kd"] },
                    { nome: "Trinca", cartas: ["8s", "8h"] },
                  ],
                },
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Top pairs fracos precisam existir no check, para capturar bluffs no river.",
                  maos: [{ nome: "Top pair fraco", cartas: ["Kc", "9c"] }],
                },
              ],
            },
          ],
        },
        {
          id: "conectado",
          nome: "Turn conectado",
          criterio:
            "O turn melhora muitos draws do vilão. O objetivo é combater equity com equity.",
          blocos: [
            {
              cartas: ["Js", "9d", "4c"],
              turn: "Th",
              rotulo: "J-9-4 rainbow, turn T",
              etiqueta: { texto: "Size médio", cor: "vermelho" },
              acoes: [
                {
                  nome: "Bet",
                  cor: "verde",
                  texto:
                    "Estratégia mais linear, com mais mãos com equity e mais frequência.",
                  maos: [
                    { nome: "Sequência", cartas: ["Kh", "Qh"] },
                    { nome: "Top pair + duas pontas", cartas: ["Qs", "Jd"] },
                    { nome: "Top pair", cartas: ["Ad", "Jc"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "alta",
          nome: "Turn de carta alta",
          criterio:
            "Aparece uma carta alta, como o ás ou o rei. O objetivo é apostar novos top pairs e os melhores second pairs.",
          blocos: [
            {
              cartas: ["9s", "6d", "3c"],
              turn: "Ah",
              rotulo: "9-6-3 rainbow, turn A",
              etiqueta: { texto: "Size médio", cor: "vermelho" },
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto: "Expanda o valor.",
                  maos: [
                    { nome: "Novo top pair", cartas: ["As", "Qd"] },
                    { nome: "Melhor second pair", cartas: ["Th", "Tc"] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Os grupos de turn",
      intro:
        "Cada grupo tem estratégia, size e construção de range próprios. Um exemplo de cada:",
      colunas: 3,
      itens: [
        { titulo: "Turn blank", cartas: ["Ks", "8d", "3c"], turn: "2h" },
        {
          titulo: "Turn de carta alta",
          cartas: ["9s", "6d", "3c"],
          turn: "Ah",
        },
        { titulo: "Turn conectado", cartas: ["Js", "9d", "4c"], turn: "Th" },
        {
          titulo: "Flush completando em carta alta",
          cartas: ["Ks", "8s", "3d"],
          turn: "Qs",
        },
        {
          titulo: "Flush completando em carta baixa",
          cartas: ["Ks", "8s", "3d"],
          turn: "5s",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "C-bet inicial: não analise o second barrel sem considerar a c-bet.",
        "Turn blank: polarização, size alto, valor forte e bluffs selecionados.",
        "Turn conectado: mais equity, mais frequência, size médio.",
        "Top pairs fracos no check: precisam existir, para capturar bluffs no river.",
        "Sizes pequenos: em posição não há incentivo para usar sem motivo, porque o IP realiza equity dando check.",
        "Uma textura: uma estratégia e um size principal.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Ao dominar o módulo",
      itens: [
        "Escolher melhores c-bets.",
        "Entender quando continuar no turn.",
        "Escolher o size certo.",
        "Construir ranges de valor e de bluff.",
        "Evitar o overbarrel automático.",
        "Preparar melhor as decisões de river.",
      ],
    },
  ],
}

export default m03
