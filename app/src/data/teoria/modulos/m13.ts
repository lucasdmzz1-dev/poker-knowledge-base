import type { AbaT, ModuloTeoria } from "@/data/teoria/tipos"

function numeros(
  id: string,
  nome: string,
  criterio: string,
  linhas: [string, string][],
  nota?: string
): AbaT {
  return {
    id,
    nome,
    criterio,
    blocos: [
      {
        acoes: linhas.map(([nome, texto]) => ({
          nome,
          cor: "branco" as const,
          texto,
        })),
      },
    ],
    nota,
  }
}

const m13: ModuloTeoria = {
  slug: "icm",
  tema: "Introdução ao ICM",
  nome: "ICM e Risk Premium",
  spot: "Do início do torneio até a mesa final, com ênfase de 30% do field até a FT · 11bb a 120bb",
  tags: ["Pré-flop", "ICM", "Risk premium", "Vanilla e PKO"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "RP (risk premium) é o equity extra que você precisa por causa do risco de cair. Vale em toda street, não só no pré-flop.",
        "Três fatores definem o RP: os stacks (o seu e o de quem cobre você), a fase do torneio e a estrutura de pagamento.",
        "Big stack joga mais mãos. Mid stack joga menos, com agressividade. Short stack precisa se mexer.",
        "Antes de abrir, olhe o BB, o BTN e o SB. Quanto mais gente cobre você, menos você abre.",
        "Coberto, não dá flat: é 3bet, shove ou fold. Cobrindo, jogue mais mãos, e não só 3bet.",
        "Só expanda quando algo joga a seu favor (bolha, pay jump, mesa final). Sem pressão, o big stack que expande só distribui fichas.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Os três fatores do RP",
      colunas: 3,
      itens: [
        {
          titulo: "Stacks",
          texto:
            "O seu stack frente à média e frente a quem pode entrar na mão (BB, BTN, SB). Coberto, o RP é alto. Cobrindo, é baixo.",
        },
        {
          titulo: "Fase",
          texto:
            "Pesa a partir de cerca de 30% do field, tem pico na bolha, cai depois e sobe de novo até a FT.",
        },
        {
          titulo: "Pagamento",
          texto:
            "O vanilla tem RP maior que o PKO. Estrutura top heavy reduz o RP. Pay jump pequeno quase não pesa.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "A curva do ICM no torneio",
      colunas: 3,
      itens: [
        {
          titulo: "Início até cerca de 30% do field",
          texto: "O ICM existe, mas muda pouco.",
        },
        {
          titulo: "De 30% à bolha",
          texto: "O RP cresce gradativamente.",
        },
        { titulo: "Bolha", texto: "O pico do RP." },
        {
          titulo: "Depois da bolha, até 5% do field",
          texto:
            "Cai muito. É o principal momento de fazer fichas: quem continua apertado superestima o RP.",
        },
        {
          titulo: "De 5% até a FT",
          texto:
            "Sobe de novo, com pequenas quedas a cada pay jump. Use as quedas para arriscar mais se for big stack, e a subida perto de um pay jump para apertar.",
        },
        {
          titulo: "Torneio pequeno",
          texto:
            "A bolha vem mais rápida: com 150 jogadores pagando 20, cair 4 ou 5 já leva a 5% do field.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "A escala 5, 10 e 15",
      intro: "Localize o spot na escala. Se não sabe qual é, comece pelo 10.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "5%", cor: "claro" },
          titulo: "Padrão",
          texto:
            "Mãos normais. Quem treina em 10% do field já considera algo próximo.",
        },
        {
          etiqueta: { texto: "10%", cor: "vermelho" },
          titulo: "Risco e recompensa desfavoráveis",
          texto: "Você precisa dominar bem o adversário.",
        },
        {
          etiqueta: { texto: "15%", cor: "verde" },
          titulo: "Muito ruim",
          texto:
            "Você pode cair e beneficiar outro short stack. Precisa esmagar o adversário.",
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "Os três tipos de stack",
      intro:
        "Classifique-se pelo stack relativo à mesa e à média, e não só pelo número de bb.",
      abas: [
        {
          id: "big",
          nome: "Big stack",
          criterio:
            "É o predador: menor RP e poder de pressão. Pressione jogando mais mãos, e não só com 3bet ou shove.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Faça",
                  cor: "verde",
                  texto:
                    "Mais VPIP e mais calls em posição, check-raise e leads desde o flop, range de call mais largo e mais 3bet só com mãos que fazem sentido.",
                },
                {
                  nome: "Cuidado",
                  cor: "vermelho",
                  texto:
                    "3betar mão especulativa sem blocker, como 5-6s, não aumenta o fold equity, e os stacks de cerca de 20bb respondem com shove.",
                },
              ],
            },
          ],
          nota: "Quatro erros do big stack: confrontar outro big stack, subestimar o próprio RP, não explorar a vantagem e ser o capitão da mesa sem pressão a favor.",
        },
        {
          id: "mid",
          nome: "Mid stack",
          criterio:
            "É a vítima: o maior RP dos três, pressionado por cima pelo big stack e por baixo pelo short stack.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Faça",
                  cor: "verde",
                  texto:
                    "Jogue menos mãos, com mais agressividade (3bet e shove). Evite calls marginais contra big stacks.",
                },
                {
                  nome: "Por quê",
                  cor: "branco",
                  texto:
                    "É difícil realizar equity pagando, e recolher o pré-flop já é um ótimo resultado. Exemplo: com 20bb no CO e o SB com 13bb, perder esses 13bb deixa você muito vulnerável.",
                },
              ],
            },
          ],
        },
        {
          id: "short",
          nome: "Short stack",
          criterio:
            "Precisa se mexer. O RP é moderado, entre o do big e o do mid, e ele pode expandir um pouco mais que o mid stack.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Faça",
                  cor: "verde",
                  texto:
                    "Joga push ou fold e acumula fichas sem rasgar EV. Com cerca de 20bb, mais mãos de carta alta (KTs, ATs, A9s) e não 65s ou 98s.",
                },
                {
                  nome: "Cuidado",
                  cor: "vermelho",
                  texto:
                    "Chover mão ruim para sobreviver rasga EV. O shove vs open é a principal arma do short e do mid stack.",
                },
              ],
            },
          ],
          nota: "Na bolha, compare o seu stack com a distribuição, e não só com a média: com 11bb você pode ter RP muito alto sendo o 130º de 160, e não estar desesperado sendo o 155º de 160 com 150 pagos.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Antes de abrir, olhe BB, BTN e SB",
      intro: "A ordem de quem pode entrar na mão é BB, BTN e SB.",
      itens: [
        {
          titulo: "Cobre BB, BTN e SB",
          texto: "Predador: expanda.",
        },
        { titulo: "Cobre o BB", texto: "Mais suave." },
        { titulo: "É coberto pelo BB", texto: "Cuidado." },
        {
          titulo: "É coberto pelo BB e pelo BTN",
          texto: "Cuidado redobrado.",
        },
        {
          titulo: "É coberto pelo BB, BTN e SB",
          texto: "O pior caso: reduza bastante.",
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "Os números do solver",
      intro:
        "GTO Wizard em modo ICM, mesa de 8 jogadores. Cenário de um torneio de 1k jogadores que paga 15%: 25% do field são cerca de 250 restantes, e 16% são cerca de 160.",
      abas: [
        numeros(
          "lj",
          "LJ cobrindo todos",
          "LJ com 65bb, média de 35bb. Expanda: com 16% do field o RP do LJ contra os outros fica entre +2% e +5%, e o deles contra o LJ é alto (+13% a +16%).",
          [
            ["25% do field", "O LJ abre 26,4% (ChipEV fica perto de 24%)."],
            ["16% do field", "O LJ abre 40,1%."],
          ]
        ),
        numeros(
          "hj",
          "HJ coberto por todos",
          "HJ com 21bb, média de 50bb. Todos os stacks que podem entrar na mão cobrem o HJ: é o pior ponto para abrir.",
          [
            ["25% do field", "O HJ abre 24,4%."],
            ["16% do field", "O HJ abre 14,8%."],
          ]
        ),
        numeros(
          "btn125",
          "BTN com 125bb contra o HJ",
          "Quem cobre você joga mais contra você, mesmo enfrentando um range mais curto: o aumento vem do call, e o raise não muda.",
          [
            [
              "25% do field",
              "Call 11,2%, raise 9,6%, fold 79,2%. VPIP de cerca de 20,8%.",
            ],
            [
              "16% do field",
              "Call 13,9%, raise 9,6%, fold 76,5%. VPIP de cerca de 23,5%.",
            ],
          ],
          "Exceção: se o BTN cobre o HJ mas é coberto pelo BB (por exemplo, BTN com 40bb), ele joga menos contra o HJ."
        ),
        numeros(
          "btn26",
          "BTN com 26bb contra o LJ",
          "Coberto e enfrentando um open: sem flat. 3bet, shove ou fold.",
          [
            ["25% do field", "Call 4,2%, 3bet 9,8%, shove 0%, fold 86%."],
            ["16% do field", "Call 0,2%, 3bet 8,2%, shove 2,5%, fold 89,1%."],
          ],
          "Pares e AQ ou melhor vão de 3bet/call. AJo, A9s e mãos de borda com bons blockers vão de 3bet, shove ou fold. Pares baixos com menos de cerca de 30bb não pagam."
        ),
        numeros(
          "bb21",
          "BB com 21bb contra o CO",
          "O CO com 64bb abre 35,8% com 25% do field e 48,5% com 16%. O BB, coberto, cai o VPIP e joga agressivo.",
          [
            [
              "25% do field",
              "Shove 9%, raise 7,8%, call 45,7%, fold 37,5%. VPIP de 62,5%.",
            ],
            [
              "16% do field",
              "Shove 15,6%, raise 2,8%, call 21%, fold 60,6%. VPIP de 39,4%.",
            ],
          ]
        ),
        numeros(
          "sbcobre",
          "SB cobrindo o BB",
          "SB com 45,5bb e BB com 21bb. Com 25% do field, mais raise e menos limp. Com 16%, pressão máxima: raise, shove ou fold, sem limp.",
          [
            [
              "25% do field",
              "Shove 12,6%, raise 25,3%, limp 44,4%, fold 17,6%.",
            ],
            ["16% do field", "Shove 27,5%, raise 63,7%, limp 2,1%, fold 6,6%."],
          ],
          "Construção com 16% do field: parte média em shove, topo induzindo, borda em raise ou fold, e nada de limp."
        ),
        numeros(
          "sbcoberto",
          "SB coberto pelo BB",
          "SB com 36,5bb e BB com 68bb. O BB tem o poder e o dever de pressão, então proteja o range jogando de call, inclusive com parte do topo.",
          [
            ["25% do field", "Call 71,2%, raise 12,7%, fold 16,1%."],
            ["16% do field", "Call 69,2%, raise 0,1%, fold 30,8%."],
          ]
        ),
        numeros(
          "sbcurto",
          "SB curto (10 a 14bb)",
          "Contra um BB que cobre: raise, shove ou fold, sem range de limp.",
          [
            [
              "16% do field, 10,5bb",
              "Shove 31,4%, raise de 2,5bb 9%, limp 0%, fold 59,5%.",
            ],
          ]
        ),
      ],
    },
    {
      tipo: "lista",
      titulo: "Estrutura de pagamento",
      itens: [
        "O vanilla tem RP maior que o PKO em praticamente todos os cenários. No bounty (PKO, mystery, total KO), o RP contra quem você cobre fica muito baixo ou negativo.",
        "Com a estrutura top heavy (muita diferença do 9º para o 1º), o RP é menor, porque é preciso se arriscar mais para chegar ao topo.",
        "Referência por site: ACR, de 12 a 15 vezes do 9º ao 1º. GG, cerca de 10 vezes. PS, um meio-termo.",
        "Pay jump pequeno quase não pesa. Em evento especial, como o Main Event da WSOP, os pay jumps são violentos e o RP sobe.",
        "Com 40 jogadores restantes num vanilla de cerca de 2000, o RP máximo fica entre 8% e 12%.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Erros mais comuns",
      itens: [
        "Ficar jogando contra outro big stack.",
        "Subestimar o próprio RP, mesmo sendo o maior da mão.",
        "Não explorar a vantagem quando você cobre.",
        "Ser o capitão da mesa sem pressão a favor.",
        "Dar call marginal contra big stack sendo mid stack.",
        "Dar flat quando coberto, em vez de 3bet, shove ou fold.",
        "Dar limp no momento de pressão máxima do blind war.",
        "Superestimar o ICM depois da bolha e ficar apertado demais.",
        "Chover mão ruim para sobreviver, rasgando EV.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "RP é o equity extra. Quem te cobre, te pressiona.",
        "Olhe BB, BTN e SB antes de abrir.",
        "Cobrindo, jogue mais mãos. Coberto, aperte e agrida.",
        "Coberto, nada de flat: 3bet, shove ou fold.",
        "Mid stack: menos mãos, mais agressividade. Short stack: se mexa, sem rasgar EV.",
        "Shove vs open é a principal arma de quem é coberto.",
        "Pressão só existe perto de pay jump, bolha ou FT.",
        "Depois da bolha, faça fichas: o ICM cai.",
        "Vanilla pesa mais que PKO. Pay jump pequeno pesa pouco.",
        "Entenda a teoria e só depois desvie, conforme o adversário.",
      ],
    },
  ],
  fonte:
    "theory/13-ICM (guideline e aula). Pareia com o módulo 12 (Reta Final). Os números são os do GTO Wizard mostrados na aula, e dois deles (RP do SB cobrindo o BB) estão só na fala",
}

export default m13
