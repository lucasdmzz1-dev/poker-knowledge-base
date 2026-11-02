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
        "Não analise o second barrel sem considerar a c-bet do flop: o range do turn nasce da construção do flop.",
        "Quem pagou a c-bet chega ao turn com mais mãos conectadas e mais equity, mas você mantém mais mãos fortes e mais nuts.",
        "Com vantagem de nuts, a estratégia é mais polarizada. Quando o board conecta o range do vilão, ela é mais linear.",
        "Turn blank: polarize, com size alto, valor forte e bluffs selecionados.",
        "Turn que conecta: mais equity, mais frequência e size médio, para combater equity com equity.",
        "Turn de carta alta: expanda o valor com size médio, para apostar novos top pairs e os melhores second pairs.",
        "Top pairs fracos precisam existir no check, para capturar bluffs no river.",
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
              etiqueta: { texto: "Size alto", cor: "verde" },
              acoes: [
                {
                  nome: "Estratégia",
                  cor: "verde",
                  texto:
                    "Mais polarizada, com menor frequência e size maior. Valor forte e bluffs selecionados.",
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
              etiqueta: { texto: "Size médio", cor: "vermelho" },
              acoes: [
                {
                  nome: "Estratégia",
                  cor: "verde",
                  texto:
                    "Mais linear, com mais mãos com equity e mais frequência.",
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
              etiqueta: { texto: "Size médio", cor: "vermelho" },
              acoes: [
                {
                  nome: "Estratégia",
                  cor: "verde",
                  texto: "Expanda o valor.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Os grupos de turn",
      intro: "Cada grupo tem estratégia, size e construção de range próprios:",
      itens: [
        "Turn blank.",
        "Turn de carta alta.",
        "Turn conectado.",
        "Flush completando em carta alta.",
        "Flush completando em carta baixa.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras do módulo",
      itens: [
        "Não analise o second barrel sem considerar a c-bet inicial.",
        "Turn blank: polarização, size alto, valor forte e bluffs selecionados.",
        "Turn conectado: mais equity, mais frequência, size médio.",
        "Top pairs fracos precisam existir no check, para capturar bluffs no river.",
        "Em posição não há incentivo para sizes pequenos sem motivo: o IP realiza equity dando check.",
        "Uma textura, uma estratégia, um size principal.",
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
