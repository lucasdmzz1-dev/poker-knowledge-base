import type { ModuloTeoria } from "@/data/teoria/tipos"

const m06: ModuloTeoria = {
  slug: "xr-short-stack",
  tema: "Check-Raise Short Stack",
  nome: "Check-Raise Short Stack",
  spot: "Pote single raised · você no BB, fora de posição · 20bb · contra EP e contra BTN",
  tags: ["Flop", "Fora de posição", "20bb", "Check-raise"],
  videos: [{ id: "wpL6lMyYjSo" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "Short stack é realização de equity: toda decisão de check-raise vem da pergunta se a mão quer realizar equity. Se quer, normalmente é call.",
        "Range de check-raise polar: valor com mãos que querem jogar por stack, e bluff com mãos sem showdown, blockers e mãos descartáveis.",
        "Guarde para o call: os piores top pairs, o TP com FD, o TP com BDFD e o TP com redraw, as brocas com BDFD e os draws fortes.",
        "Board seco: check-raise pequeno, porque você quer extrair e não expulsar o vilão.",
        "Board dinâmico: desenvolva o check-raise shove, porque você precisa proteger equity.",
        "SPR pequeno não é shove: vá de shove se precisa proteger a mão, e continue extraindo se não precisa.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "O range de check-raise",
      intro: "O range é polar.",
      colunas: 3,
      itens: [
        {
          titulo: "Valor",
          textos: [
            "Mãos que querem jogar por stack.",
            "Mãos que aceitam continuar contra ação.",
          ],
        },
        {
          titulo: "Bluff",
          textos: [
            "Mãos sem showdown suficiente.",
            "Mãos com blockers.",
            "Mãos descartáveis.",
          ],
        },
        {
          titulo: "Guarde para o call",
          textos: [
            "Os piores top pairs.",
            "TP com FD, com BDFD ou com redraw.",
            "Brocas com BDFD.",
            "Draws fortes.",
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Seco ou dinâmico",
      itens: [
        {
          titulo: "Board seco",
          texto:
            "Check-raise pequeno. Você não quer expulsar o vilão, quer extrair.",
          cartas: ["Ks", "Td", "4c"],
        },
        {
          titulo: "Board dinâmico",
          texto:
            "Desenvolva o check-raise shove. Você precisa proteger a sua equity.",
          cartas: ["9s", "7d", "5d"],
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "Exemplos da aula, board por board",
      intro:
        "Os boards dos exercícios da aula. Os grupos de mãos são os da correção, e as cartas mostram um exemplo de cada.",
      abas: [
        {
          id: "ahigh",
          nome: "A high",
          criterio:
            "Algumas texturas não pedem check-raise. Neste A high não existe range de check-raise.",
          blocos: [
            {
              cartas: ["Ac", "9d", "8h"],
              rotulo: "A-9-8 rainbow",
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Todos os pares e as brocas com overcard.",
                  maos: [
                    { nome: "Top pair", cartas: ["Ad", "5d"] },
                    { nome: "Second pair", cartas: ["Ts", "9s"] },
                    { nome: "Broca com over", cartas: ["Qh", "Th"] },
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
            "Os bluffs são escolhidos pela capacidade de remover respostas do adversário.",
          blocos: [
            {
              cartas: ["Ks", "Td", "4c"],
              rotulo: "K-T-4 rainbow",
              acoes: [
                {
                  nome: "Check-raise valor",
                  cor: "vermelho",
                  texto: "Todos os top pairs sem BDFD.",
                  maos: [
                    { nome: "Top pair sem BDFD", cartas: ["Kh", "Qc"] },
                    { nome: "Top pair sem BDFD", cartas: ["Kd", "8h"] },
                  ],
                },
                {
                  nome: "Check-raise bluff",
                  cor: "amarelo",
                  texto:
                    "Brocas sem BDFD, brocas off bloqueando o FD e bottom pair com saída para FD e sequência. Exemplos da aula: J4, Q4, J9 de copas, Q9 de copas.",
                  maos: [
                    { nome: "J9 de copas", cartas: ["Jh", "9h"] },
                    { nome: "Q9 de copas", cartas: ["Qh", "9h"] },
                    { nome: "J4", cartas: ["Jd", "4d"] },
                  ],
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Todos os dois pares, qualquer par e straight draws.",
                  maos: [
                    { nome: "Dois pares", cartas: ["Th", "4h"] },
                    { nome: "Qualquer par", cartas: ["Tc", "9c"] },
                    { nome: "Straight draw", cartas: ["Qd", "Jd"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "highcard",
          nome: "High card",
          criterio:
            "Board conectado: o valor fica com os melhores top pairs, os que conectam e os dois pares.",
          blocos: [
            {
              cartas: ["Js", "9d", "7c"],
              rotulo: "J-9-7 rainbow",
              acoes: [
                {
                  nome: "Check-raise valor",
                  cor: "vermelho",
                  texto:
                    "Melhores top pairs, top pairs conectados e dois pares.",
                  maos: [
                    { nome: "Melhor top pair", cartas: ["Ah", "Jh"] },
                    { nome: "Top pair conectado", cartas: ["Jh", "Th"] },
                    { nome: "Dois pares", cartas: ["9h", "7h"] },
                  ],
                },
                {
                  nome: "Check-raise bluff",
                  cor: "amarelo",
                  texto: "Brocas sem BDFD.",
                  maos: [
                    { nome: "Broca", cartas: ["Kh", "Tc"] },
                    { nome: "Broca", cartas: ["6h", "5c"] },
                  ],
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Sequência, qualquer par e draws.",
                  maos: [
                    { nome: "Sequência", cartas: ["Th", "8h"] },
                    { nome: "Qualquer par", cartas: ["Kc", "9c"] },
                    { nome: "Draw", cartas: ["Qd", "Td"] },
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
            "Board low e com flush draw: o valor começa em dois pares, e o bluff usa o blocker do flush draw.",
          blocos: [
            {
              cartas: ["9s", "7d", "5d"],
              rotulo: "9-7-5 com dois de ouros",
              acoes: [
                {
                  nome: "Check-raise valor",
                  cor: "vermelho",
                  texto:
                    "Dois pares ou melhor, os melhores 9x e os 9x conectados.",
                  maos: [
                    { nome: "Dois pares", cartas: ["9h", "7h"] },
                    { nome: "Melhor 9x", cartas: ["Ah", "9c"] },
                    { nome: "9x conectado", cartas: ["9h", "8h"] },
                  ],
                },
                {
                  nome: "Check-raise bluff",
                  cor: "amarelo",
                  texto: "Brocas com blocker do flush draw.",
                  maos: [{ nome: "Broca + J♦", cartas: ["Jd", "8c"] }],
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Todos os pares e as sequências.",
                  maos: [
                    { nome: "Sequência", cartas: ["8h", "6h"] },
                    { nome: "Bottom pair", cartas: ["Ac", "5c"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "dobrado",
          nome: "Dobrado",
          criterio:
            "No board dobrado, os pares viram valor e as trincas e full houses ficam no call.",
          blocos: [
            {
              cartas: ["6s", "6c", "2d"],
              rotulo: "6-6-2",
              acoes: [
                {
                  nome: "Check-raise valor",
                  cor: "vermelho",
                  texto: "Todos os pares.",
                  maos: [
                    { nome: "Par", cartas: ["8h", "8c"] },
                    { nome: "Par", cartas: ["5h", "5d"] },
                  ],
                },
                {
                  nome: "Check-raise bluff",
                  cor: "amarelo",
                  texto:
                    "Brocas e mãos com BDFD e BDST. Exemplos da aula: Q5, J4, T3.",
                  maos: [
                    { nome: "Q5", cartas: ["Qd", "5d"] },
                    { nome: "J4", cartas: ["Jd", "4d"] },
                    { nome: "T3", cartas: ["Tc", "3c"] },
                  ],
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto:
                    "Ax off com showdown, Ax suited, broadways suited, os melhores 6x, full houses e quadras.",
                  maos: [
                    { nome: "Ax off", cartas: ["Ah", "Kc"] },
                    { nome: "Broadway suited", cartas: ["Kh", "Qh"] },
                    { nome: "Melhor 6x", cartas: ["Ah", "6h"] },
                    { nome: "Full house", cartas: ["2s", "2h"] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "O que fazer com cada mão",
      abas: [
        {
          id: "tp",
          nome: "Top pair",
          criterio:
            "O top pair é a principal mão de stack-off, mas você guarda alguns para o call.",
          blocos: [
            {
              cartas: ["Ks", "Td", "4c"],
              rotulo: "K-T-4 rainbow",
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "A maior parte dos top pairs.",
                  maos: [{ nome: "Top pair", cartas: ["Kh", "Qc"] }],
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Os piores top pairs, o TP com FD e o TP com BDFD.",
                  maos: [
                    { nome: "TP com BDFD", cartas: ["Kc", "7c"] },
                    { nome: "Pior top pair", cartas: ["Kh", "5d"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "dp",
          nome: "Dois pares",
          criterio: "O que fazer depende do board.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Board seco",
                  cor: "branco",
                  texto: "Slowplay.",
                },
                {
                  nome: "Board com sequência",
                  cor: "branco",
                  texto: "A sequência assume o slowplay.",
                },
              ],
            },
          ],
        },
        {
          id: "oesd",
          nome: "Duas pontas",
          criterio:
            "Nem toda duas pontas é check-raise/call: precisa de equity suficiente.",
          blocos: [
            {
              cartas: ["Qs", "9h", "5d"],
              rotulo: "Q-9-5 (naipes ilustrativos)",
              acoes: [
                {
                  nome: "Check-raise/call",
                  cor: "vermelho",
                  texto: "Duas pontas com equity suficiente.",
                  maos: [{ nome: "J-T", cartas: ["Jc", "Td"] }],
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Duas pontas sem equity para o check-raise.",
                  maos: [{ nome: "T-8", cartas: ["Tc", "8d"] }],
                },
              ],
            },
          ],
        },
        {
          id: "fd",
          nome: "Flush draw",
          criterio: "Os melhores flush draws vão para o call.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Os melhores flush draws.",
                },
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "Os flush draws que aceitam o XR/C ou o XR/F.",
                },
              ],
            },
          ],
        },
        {
          id: "broca",
          nome: "Brocas e blockers",
          criterio:
            "A parte off busca bloquear a reação do vilão. Com um flush draw em paus, use a broca com uma carta de paus.",
          blocos: [
            {
              acoes: [
                { nome: "Call", cor: "branco", texto: "Brocas com BDFD." },
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "Brocas sem BDFD são candidatas ao XR.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Contra quem você joga",
      itens: [
        {
          titulo: "EP vs BB",
          textos: [
            "Range mais forte.",
            "Mais top pairs no call.",
            "Mais traps e mais realização de equity.",
          ],
        },
        {
          titulo: "BTN vs BB",
          textos: [
            "O BTN tem mais lixo, então você cobra mais.",
            "Menos top pairs no call: só os piores vão para o calldown.",
          ],
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Realizar equity: se a mão quer realizar equity, call.",
        "Range polar: valor que joga por stack e bluff sem showdown, com blockers.",
        "Size por board: board seco, check-raise pequeno. Board dinâmico, check-raise shove.",
        "SPR baixo: não é shove automático. Shove só para proteger a mão.",
        "Top pair: é a principal mão de stack-off, mas guarde os piores e os com FD ou BDFD para o call.",
        "Dois pares: slowplay em board seco. Em board com sequência, a sequência assume o slowplay.",
        "Contra BTN: mais check-raise e menos top pair no call.",
      ],
    },
  ],
}

export default m06
