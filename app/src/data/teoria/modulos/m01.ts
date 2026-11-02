import type { ModuloTeoria } from "@/data/teoria/tipos"

const m01: ModuloTeoria = {
  slug: "cbet-ip-short-stack",
  tema: "C-Bet IP Short Stack",
  nome: "C-Bet IP Short Stack",
  spot: "Pote single raised · você em posição, como agressor · cerca de 20bb efetivos",
  tags: ["Flop", "Em posição", "20bb", "Sizes B25 e B40"],
  videos: [{ id: "0AXc1R64PXU" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "Três pilares: vantagem de equity, vantagem de nuts e realização de equity.",
        "Vantagem de range e frequência: quanto maior a sua vantagem de range e menor a frequência de check-raise do adversário, maior a frequência de c-bet.",
        "Boards em que você toma mais check-raise: monte um range de check behind para realizar equity.",
        "Board A high: c-bet em 100% do range.",
        "Board broadway: c-bet em cerca de 84%.",
        "High card conectado e low: c-bet em cerca de 52% e 55%, com split entre bet e check.",
        "Só dois sizes: B25 como padrão e B40 como o maior. O SPR baixo não pede mais que isso.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "A pergunta certa no short stack",
      intro:
        "Não é se a mão é boa. É se ela quer jogar um pote maior ou quer realizar equity.",
      colunas: 3,
      itens: [
        {
          titulo: "Vantagem de equity",
          texto:
            "Quanto mais equity o seu range tem no board, mais ele aposta.",
        },
        {
          titulo: "Vantagem de nuts",
          texto: "Mais nuts no seu range sustentam a aposta e o size maior.",
        },
        {
          titulo: "Realização de equity",
          texto:
            "No short stack, apostar e não conseguir continuar contra raise perde muito EV. Mãos que querem realizar equity preferem o check.",
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "O que fazer em cada tipo de board",
      abas: [
        {
          id: "ahigh",
          nome: "A high",
          criterio:
            "Grande vantagem de equity e de nuts, com alta realização de equity. A estratégia é bet range.",
          blocos: [
            {
              cartas: ["Ad", "8c", "4s"],
              rotulo: "A-8-4 rainbow",
              etiqueta: { texto: "C-bet 100%", cor: "claro" },
              acoes: [
                {
                  nome: "Bet",
                  cor: "verde",
                  texto: "O range inteiro, em B25.",
                  maos: [
                    { nome: "Top pair", cartas: ["As", "Kh"] },
                    { nome: "Par abaixo", cartas: ["6s", "6h"] },
                    { nome: "Overcards", cartas: ["Kc", "Qc"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "broadway",
          nome: "Broadway",
          criterio:
            "Vantagem de equity e de nuts, com alta realização de equity. C-bet em frequência muito alta.",
          blocos: [
            {
              cartas: ["Ks", "Td", "6c"],
              rotulo: "K-T-6 rainbow",
              etiqueta: { texto: "C-bet cerca de 84%", cor: "claro" },
              acoes: [
                {
                  nome: "Bet",
                  cor: "verde",
                  texto: "Frequência muito alta do range, em B25.",
                  maos: [
                    { nome: "Top pair", cartas: ["Kh", "Qd"] },
                    { nome: "Duas pontas", cartas: ["Qc", "Jc"] },
                    { nome: "Ás alto", cartas: ["Ad", "5d"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "highcard",
          nome: "High card conectado",
          criterio:
            "Aqui o check behind começa a entrar no range. A estratégia é split.",
          blocos: [
            {
              cartas: ["Js", "8d", "4s"],
              rotulo: "J-8-4 com dois de espadas",
              etiqueta: { texto: "C-bet cerca de 52%", cor: "claro" },
              acoes: [
                {
                  nome: "Bet",
                  cor: "verde",
                  texto:
                    "Draws da parte off do range, mãos que bloqueiam o flush draw e mãos confortáveis em jogar bet/fold.",
                  maos: [
                    { nome: "Duas pontas off", cartas: ["Td", "9c"] },
                    { nome: "Bloqueia o FD", cartas: ["As", "Qd"] },
                    { nome: "Bet/fold", cartas: ["Kh", "Qc"] },
                  ],
                },
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Parte média do range, second pair, third pair, draws que querem realizar equity, high cards com backdoor flush draw, algumas trincas (trap) e, como opção, alguns top pairs mais fracos.",
                  maos: [
                    { nome: "Second pair", cartas: ["Ac", "8c"] },
                    { nome: "Third pair", cartas: ["Ah", "4h"] },
                    { nome: "Flush draw fraco", cartas: ["7s", "6s"] },
                    { nome: "High card + BDFD", cartas: ["Kd", "Qd"] },
                    { nome: "Trinca (trap)", cartas: ["4d", "4c"] },
                    { nome: "Top pair fraco", cartas: ["Jc", "9c"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "low",
          nome: "Low",
          criterio:
            "Estrutura parecida com a dos boards high card. O board interage mais com o range do adversário, então você não aposta o range todo.",
          blocos: [
            {
              cartas: ["9s", "8d", "5c"],
              rotulo: "9-8-5 rainbow",
              etiqueta: { texto: "C-bet cerca de 55%", cor: "claro" },
              acoes: [
                {
                  nome: "Bet",
                  cor: "verde",
                  texto:
                    "Draws da parte off do range e mãos confortáveis em jogar bet/fold.",
                  maos: [
                    { nome: "Duas pontas off", cartas: ["Jd", "Tc"] },
                    { nome: "Bet/fold", cartas: ["Ah", "Kc"] },
                  ],
                },
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Parte média do range, second pair, third pair, draws que querem realizar equity, high cards com backdoor flush draw, algumas trincas (trap) e, como opção, alguns top pairs mais fracos.",
                  maos: [
                    { nome: "Second pair", cartas: ["Ad", "8h"] },
                    { nome: "Third pair", cartas: ["Ac", "5h"] },
                    { nome: "Duas pontas suited", cartas: ["Th", "7h"] },
                    { nome: "High card + BDFD", cartas: ["Kd", "Qd"] },
                    { nome: "Trinca (trap)", cartas: ["9h", "9c"] },
                    { nome: "Top pair fraco", cartas: ["Qc", "9c"] },
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
      titulo: "Como montar o range de check",
      intro:
        "Nos boards em que você toma mais check-raise, o range de check é feito destes grupos. Exemplo no J-8-4 com dois de espadas:",
      board: {
        cartas: ["Js", "8d", "4s"],
        rotulo: "J-8-4 com dois de espadas",
      },
      itens: [
        {
          texto: "Trincas: exceto em boards extremamente carregados.",
          maos: [{ nome: "Trinca", cartas: ["4d", "4c"] }],
        },
        {
          texto: "Pares abaixo do top pair: second pair e third pair.",
          maos: [
            { nome: "Second pair", cartas: ["Ac", "8c"] },
            { nome: "Third pair", cartas: ["Ah", "4h"] },
          ],
        },
        {
          texto: "Flush draws fracos: o flush draw que não é o nuts.",
          maos: [{ nome: "Flush draw fraco", cartas: ["7s", "6s"] }],
        },
        {
          texto: "Duas pontas sem overcard: draw que quer realizar equity.",
          maos: [{ nome: "Duas pontas", cartas: ["Th", "9h"] }],
        },
        {
          texto: "Brocas: draws de quatro outs.",
          maos: [{ nome: "Broca", cartas: ["Qh", "Th"] }],
        },
        {
          texto:
            "High cards com backdoor flush draw: realizam equity com o check.",
          maos: [{ nome: "High card + BDFD", cartas: ["Kd", "Qd"] }],
        },
        {
          texto: "Piores top pairs: entram no check como opção.",
          maos: [{ nome: "Top pair fraco", cartas: ["Jc", "9c"] }],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Sizes",
      intro: "Não se trabalha com muitos tamanhos no short stack.",
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Size padrão",
          texto:
            "Para o bet range e para os boards em que você tem vantagem ampla.",
          cartas: ["Ad", "8c", "4s"],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "O maior size",
          texto:
            "Para as estratégias de split e mãos selecionadas. Sizes maiores não entram por causa do SPR baixo.",
          cartas: ["Js", "8d", "4s"],
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Short stack: realizar equity é a prioridade.",
        "Mais check-raise do adversário: mais check behind no seu range.",
        "Draws da parte off: podem apostar, porque bloqueiam parte da reação do adversário.",
        "Mãos que querem realizar equity: preferem controlar o pote com o check.",
        "O check não é fraqueza: realiza equity, protege mãos médias e evita situações ruins contra raise.",
        "Por tipo de board: A high, range bet. Broadway, cerca de 84%. High card e low, split.",
        "Sizes: só B25 e B40.",
      ],
    },
  ],
}

export default m01
