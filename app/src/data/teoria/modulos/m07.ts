import type { ModuloTeoria } from "@/data/teoria/tipos"

const m07: ModuloTeoria = {
  slug: "xr-deep-stack",
  tema: "Check-Raise Deep Stack",
  nome: "Check-Raise Deep Stack",
  spot: "Pote single raised · você no BB, fora de posição · deep stack · contra EP e contra BTN",
  tags: ["Flop e turn", "Fora de posição", "Deep stack", "Check-raise"],
  videos: [{ id: "wF-CmrRLvR8" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "Check-raise com mais equity: no deep stack ele é construído com mãos que continuam contra ação, realizam equity e jogam potes grandes.",
        "A pergunta certa: não é se a mão é forte. É se ela tem equity suficiente e qual linha extrai mais EV.",
        "Sem slowplay com mãos fortes: use o check-raise para construir pote, diminuir o SPR e pressionar.",
        "Valor: contra EP, os 1 ou 2 melhores top pairs ou melhor. Contra BTN, os 3 ou 4 melhores.",
        "Board carregado: quanto mais carregado, menos top pairs vão para o check-raise.",
        "Bluffs: vêm de mãos com equity, draws, backdoors e capacidade de melhorar.",
        "Turn depois do check-raise: blank em B70 ou mais, dinâmico em B40.",
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
          titulo: "Contra BTN",
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
        "O top pair não entra automaticamente. Guarde algumas mãos para o XC e para o calldown. Considere:",
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
      colunas: 3,
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
    },
    {
      tipo: "abas",
      titulo: "Exemplos da aula",
      intro: "Os boards e as mãos analisadas nos exercícios da aula.",
      abas: [
        {
          id: "t97",
          nome: "T-9-7",
          criterio:
            "Quando o board entrega equity, os offsuit conectados ganham valor e os draws reais podem dar check-raise. A mão não depende de backdoors.",
          blocos: [
            {
              cartas: ["Ts", "9s", "7d"],
              rotulo: "T-9-7 com dois de espadas",
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "J8 off: check-raise forte.",
                  maos: [{ nome: "J8 off", cartas: ["Jh", "8c"] }],
                },
              ],
            },
          ],
        },
        {
          id: "a64",
          nome: "A-6-4",
          criterio:
            "Overcard com broca, sem BDFD e sem backdoor straight draw, não tem estrutura suficiente.",
          blocos: [
            {
              cartas: ["As", "6d", "4c"],
              rotulo: "A-6-4 rainbow",
              acoes: [
                {
                  nome: "Fold",
                  cor: "vermelho",
                  texto: "Q5 off: fold.",
                  maos: [{ nome: "Q5 off", cartas: ["Qh", "5s"] }],
                },
              ],
            },
          ],
        },
        {
          id: "a73",
          nome: "A-7-3 monotone",
          criterio:
            "O naipe muda a função da mão. A mesma 64 vira check-raise ou check-call.",
          blocos: [
            {
              cartas: ["As", "7s", "3s"],
              rotulo: "A-7-3 de espadas",
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto:
                    "64 off: broca, baixa realização de equity, precisa pressionar.",
                  maos: [{ nome: "64 off", cartas: ["6h", "4d"] }],
                },
                {
                  nome: "Check-call",
                  cor: "branco",
                  texto: "64 de espadas: valor já feito, prefere realizar.",
                  maos: [{ nome: "64 de espadas", cartas: ["6s", "4s"] }],
                },
              ],
            },
          ],
        },
        {
          id: "k72",
          nome: "K-7-2",
          criterio:
            "Showdown value importa. Equity futura sozinha não define o check-raise.",
          blocos: [
            {
              cartas: ["Kc", "7d", "2s"],
              rotulo: "K-7-2 rainbow",
              acoes: [
                {
                  nome: "Check-call",
                  cor: "branco",
                  texto: "A5 suited: mais check-call, pelo showdown value.",
                  maos: [{ nome: "A5 suited", cartas: ["Ah", "5h"] }],
                },
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "96 suited: o melhor candidato a check-raise.",
                  maos: [{ nome: "96 suited", cartas: ["9d", "6d"] }],
                },
              ],
            },
          ],
        },
        {
          id: "kq9",
          nome: "K-Q-9",
          criterio:
            "A carta-chave do range de bluff é o J. Os principais candidatos da aula: JT, T8 e AJ.",
          blocos: [
            {
              cartas: ["Ks", "Qd", "9c"],
              rotulo: "K-Q-9 rainbow",
              acoes: [
                {
                  nome: "Check-raise bluff",
                  cor: "amarelo",
                  texto: "Mãos que pegam sequência com o J.",
                  maos: [
                    { nome: "T8", cartas: ["Th", "8h"] },
                    { nome: "AJ", cartas: ["Ah", "Jh"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "532",
          nome: "5-3-2",
          criterio:
            "Draws fortes entram para extrair valor. Não são tratados como bluffs.",
          blocos: [
            {
              cartas: ["5s", "3d", "2c"],
              rotulo: "5-3-2 rainbow",
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "64: check-raise puro.",
                  maos: [{ nome: "64", cartas: ["6h", "4h"] }],
                },
              ],
            },
          ],
        },
        {
          id: "t85",
          nome: "T-8-5",
          criterio:
            "Em board com flush draw, o naipe do flush draw é fundamental.",
          blocos: [
            {
              cartas: ["Td", "8d", "5c"],
              rotulo: "T-8-5 com dois de ouros",
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "K9 com o K de ouros: candidato.",
                  maos: [{ nome: "K♦9", cartas: ["Kd", "9c"] }],
                },
                {
                  nome: "Fold",
                  cor: "vermelho",
                  texto: "K9 sem ouros: não tem estrutura.",
                  maos: [{ nome: "K9 sem ♦", cartas: ["Kh", "9c"] }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "Depois do check-raise no flop",
      intro: "O mesmo flop, com um turn blank e um turn dinâmico:",
      abas: [
        {
          id: "blank",
          nome: "Turn blank",
          criterio: "O turn não muda as interações do board.",
          blocos: [
            {
              cartas: ["Js", "8s", "4d"],
              turn: "2c",
              rotulo: "J-8-4, turn 2",
              etiqueta: { texto: "B70+", cor: "verde" },
              acoes: [
                {
                  nome: "Bet",
                  cor: "verde",
                  texto: "B70 ou mais.",
                  maos: [
                    { nome: "Bom top pair", cartas: ["Ah", "Jh"] },
                    { nome: "Trinca", cartas: ["8c", "8h"] },
                  ],
                },
              ],
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
              cartas: ["Js", "8s", "4d"],
              turn: "Qs",
              rotulo: "J-8-4, turn Q de espadas",
              etiqueta: { texto: "B40", cor: "vermelho" },
              acoes: [{ nome: "Bet", cor: "verde", texto: "B40." }],
            },
          ],
        },
        {
          id: "cbet",
          nome: "C-bet depois do XR",
          criterio: "O range de c-bet depois do check-raise no flop.",
          blocos: [
            {
              cartas: ["Js", "8s", "4d"],
              turn: "2c",
              rotulo: "J-8-4, turn 2",
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto: "Bons top pairs e mãos melhores.",
                  maos: [
                    { nome: "Bom top pair", cartas: ["Ah", "Jh"] },
                    { nome: "Trinca", cartas: ["8c", "8h"] },
                  ],
                },
                {
                  nome: "Bet de bluff",
                  cor: "amarelo",
                  texto: "Duas pontas e flush draws.",
                  maos: [
                    { nome: "Duas pontas", cartas: ["Th", "9h"] },
                    { nome: "Flush draw", cartas: ["As", "5s"] },
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
        "A pergunta: a mão tem equity suficiente, e qual linha extrai mais EV?",
        "Função da mão: separe as que querem realizar equity, as que querem pressionar e as que querem construir pote.",
        "Deep stack: sem slowplay com mãos fortes.",
        "Valor: 1 ou 2 melhores top pairs contra EP, 3 ou 4 contra BTN.",
        "Bluff com equity: duas pontas, brocas com estrutura, flush draws e combo draws.",
        "Naipe: muda a função da mão, principalmente em board com flush draw.",
        "Turn depois do XR: blank em B70 ou mais, dinâmico em B40.",
      ],
    },
  ],
}

export default m07
