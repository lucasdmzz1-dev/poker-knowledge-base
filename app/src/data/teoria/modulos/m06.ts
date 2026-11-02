import type { ModuloTeoria } from "@/data/teoria/tipos"

const m06: ModuloTeoria = {
  slug: "xr-short-stack",
  tema: "Check-Raise Short Stack",
  nome: "Check-Raise Short Stack",
  spot: "Pote single raised · você no BB, fora de posição · 20bb · contra EP e contra BTN",
  tags: ["Flop", "Fora de posição", "20bb", "Check-raise"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "Short stack é realização de equity. Toda decisão de check-raise vem da pergunta: essa mão quer realizar equity? Se sim, normalmente é call.",
        "O range de check-raise é polar: valor com mãos que querem jogar por stack, e bluff com mãos sem showdown, blockers e mãos descartáveis.",
        "Guarde para o call os piores top pairs, o TP com FD, o TP com BDFD e o TP com redraw, as brocas com BDFD e os draws fortes.",
        "Board seco: check-raise pequeno, porque você quer extrair e não expulsar o vilão.",
        "Board dinâmico: desenvolva o check-raise shove, porque você precisa proteger equity.",
        "SPR pequeno não significa shove: vá de shove se precisa proteger a mão, e continue extraindo se não precisa.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "O range de check-raise",
      intro: "O range é polar.",
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
      colunas: 3,
    },
    {
      tipo: "cartoes",
      titulo: "Seco ou dinâmico",
      itens: [
        {
          titulo: "Board seco",
          texto:
            "Check-raise pequeno. Você não quer expulsar o vilão, quer extrair.",
        },
        {
          titulo: "Board dinâmico",
          texto:
            "Desenvolva o check-raise shove. Você precisa proteger a sua equity.",
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
              acoes: [
                {
                  nome: "Check-raise",
                  cor: "vermelho",
                  texto: "A maior parte dos top pairs.",
                },
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Os piores top pairs, o TP com FD e o TP com BDFD.",
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
                  nome: "XR/C",
                  cor: "vermelho",
                  maos: [{ nome: "J-T", cartas: ["Jc", "Td"] }],
                },
                {
                  nome: "Call",
                  cor: "branco",
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
        "A pergunta é sempre: essa mão quer realizar equity? Se quer, call.",
        "Range polar: valor que joga por stack e bluff sem showdown, com blockers.",
        "Board seco, check-raise pequeno. Board dinâmico, check-raise shove.",
        "SPR baixo não é shove automático: shove só para proteger a mão.",
        "Top pair é a principal mão de stack-off, mas guarde os piores e os com FD ou BDFD para o call.",
        "Dois pares: slowplay em board seco, e em board com sequência a sequência assume o slowplay.",
        "Contra BTN, mais check-raise e menos top pair no call.",
      ],
    },
  ],
  fonte:
    "theory/06-XR-SHORT (guideline). O board Q-9-5 é o da guideline, com naipes ilustrativos. As outras mãos ficam só em texto, porque a fonte não traz exemplos",
}

export default m06
