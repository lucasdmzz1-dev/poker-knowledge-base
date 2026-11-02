import type { AbaT, MaoEx, ModuloTeoria } from "@/data/teoria/tipos"
import type { CardCode } from "@/data/mod15"

interface Grupo {
  texto: string
  maos: MaoEx[]
}

function split(
  id: string,
  nome: string,
  criterio: string,
  etiqueta: string,
  cartas: CardCode[],
  rotulo: string,
  valor: Grupo,
  bluff: Grupo,
  checkCall: Grupo,
  checkRaise: Grupo
): AbaT {
  return {
    id,
    nome,
    criterio,
    blocos: [
      {
        cartas,
        rotulo,
        etiqueta: { texto: etiqueta, cor: "vermelho" },
        acoes: [
          { nome: "Bet por valor", cor: "verde", ...valor },
          { nome: "Bet de bluff", cor: "amarelo", ...bluff },
          { nome: "Check-call", cor: "branco", ...checkCall },
          { nome: "Check-raise", cor: "vermelho", ...checkRaise },
        ],
      },
    ],
  }
}

const m08: ModuloTeoria = {
  slug: "3bet-pot",
  tema: [
    "3Bet Pot IP",
    "3Bet Pot OOP no SB",
    "3Bet Pot OOP no BB Short",
    "3Bet Pot OOP no BB Deep",
  ],
  nome: "3Bet Pot",
  spot: "Pote 3betado · em posição e fora de posição · short stack e deep stack",
  tags: ["Flop e turn", "IP e OOP", "Short e deep"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "Cada árvore é uma estratégia: 3bet pot OOP é diferente de IP, e short stack é diferente de deep stack. Nunca copie uma árvore na outra.",
        "IP: ataque pares, realize melhor a equity e controle o pote com a posição.",
        "OOP: pressione pares e draws, proteja a equity e construa ranges de aposta e de defesa mais cuidadosos.",
        "Short e deep: short stack tem SPR baixo, menos streets e é mais simples de jogar por stack. Deep stack pede construção de range e mais valor para mãos suited e conectadas.",
        "Bluff não é só blocker: priorize mãos com equity, flush draw, backdoors e chance de evoluir.",
        "Guideline e solver: a guideline define a estratégia base, o size e a estrutura do range. O solver define frequência, mistura e ajustes.",
        "Ordem de análise: posição, stack, board, size, split e só depois a frequência do solver.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Posição e stack",
      colunas: 2,
      itens: [
        {
          titulo: "IP",
          textos: [
            "Atacar pares.",
            "Realizar melhor a equity.",
            "Controlar o pote pela posição.",
          ],
        },
        {
          titulo: "OOP",
          textos: [
            "Pressionar pares e draws.",
            "Proteger a equity.",
            "Ranges de aposta e de defesa mais cuidadosos.",
          ],
        },
        {
          titulo: "Short stack",
          textos: [
            "SPR baixo e menos streets.",
            "Mais simplificação.",
            "Mais fácil jogar por stack.",
          ],
        },
        {
          titulo: "Deep stack",
          textos: [
            "SPR alto.",
            "Mais necessidade de construir o range e cobrir o board.",
            "Mais valor para mãos suited e conectadas.",
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Size e estratégia por board (OOP)",
      intro: "Um board de exemplo para cada caso.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Short: board seco",
          texto: "Estratégia de range.",
          cartas: ["Ks", "7d", "2c"],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Short: board conectado",
          texto: "Split B40.",
          cartas: ["Qs", "Js", "6d"],
        },
        {
          etiqueta: { texto: "All-in", cor: "verde" },
          titulo: "Short: board com sequência",
          texto: "Split all-in.",
          cartas: ["8s", "7s", "6d"],
        },
        {
          etiqueta: { texto: "B25-B40", cor: "claro" },
          titulo: "Deep: board seco",
          texto: "B25 ou B40.",
          cartas: ["Ks", "7d", "2c"],
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Deep: Tx, Jx e 98x suited",
          texto: "Split B70.",
          cartas: ["Js", "9s", "4d"],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Deep: board com sequência",
          texto: "Split B40.",
          cartas: ["8s", "7s", "6d"],
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "Os splits OOP",
      intro: "O que fazer com cada grupo de mãos, em cada split.",
      abas: [
        split(
          "short-b40",
          "Short, conectado: B40",
          "Board conectado em short stack.",
          "B40",
          ["Qs", "Js", "6d"],
          "Q-J-6 com dois de espadas",
          {
            texto: "TP ou melhor.",
            maos: [
              { nome: "Top pair", cartas: ["Kh", "Qd"] },
              { nome: "Trinca", cartas: ["6h", "6c"] },
            ],
          },
          {
            texto: "Flush draws e duas pontas.",
            maos: [
              { nome: "Flush draw", cartas: ["As", "5s"] },
              { nome: "Duas pontas", cartas: ["Th", "9h"] },
            ],
          },
          {
            texto:
              "Trincas, qualquer par, qualquer draw e mãos com valor de showdown.",
            maos: [
              { nome: "Qualquer par", cartas: ["9h", "9c"] },
              { nome: "Draw", cartas: ["Kd", "Tc"] },
            ],
          },
          {
            texto: "Overpairs, TPTK e combo draw.",
            maos: [
              { nome: "Overpair", cartas: ["Kh", "Kc"] },
              { nome: "TPTK", cartas: ["Ad", "Qc"] },
              { nome: "Combo draw", cartas: ["Ks", "Ts"] },
            ],
          }
        ),
        split(
          "short-allin",
          "Short, sequência: all-in",
          "Board com sequência em short stack.",
          "All-in",
          ["8s", "7s", "6d"],
          "8-7-6 com dois de espadas",
          {
            texto: "Os primeiros overpairs ao board e TP.",
            maos: [
              { nome: "Primeiro overpair", cartas: ["9h", "9c"] },
              { nome: "Top pair", cartas: ["Ah", "8d"] },
            ],
          },
          {
            texto: "Flush draws e duas pontas.",
            maos: [
              { nome: "Flush draw", cartas: ["As", "2s"] },
              { nome: "Duas pontas", cartas: ["Ah", "9h"] },
            ],
          },
          {
            texto: "Trincas, sequências, pares e brocas com redraw.",
            maos: [
              { nome: "Sequência", cartas: ["Th", "9d"] },
              { nome: "Trinca", cartas: ["6h", "6c"] },
            ],
          },
          {
            texto: "Overpairs e combo draw.",
            maos: [
              { nome: "Overpair", cartas: ["Kh", "Kc"] },
              { nome: "Combo draw", cartas: ["Ks", "9s"] },
            ],
          }
        ),
        split(
          "deep-b70",
          "Deep, Tx/Jx/98x: B70",
          "Board Tx, Jx ou 98x suited em deep stack.",
          "B70",
          ["Js", "9s", "4d"],
          "J-9-4 com dois de espadas",
          {
            texto: "Os primeiros overpairs ao board e TP.",
            maos: [
              { nome: "Primeiro overpair", cartas: ["Qh", "Qc"] },
              { nome: "Top pair", cartas: ["Ah", "Jd"] },
            ],
          },
          {
            texto: "Flush draws, duas pontas, brocas e BDFD + BDST.",
            maos: [
              { nome: "Flush draw", cartas: ["As", "5s"] },
              { nome: "Duas pontas", cartas: ["Qh", "Th"] },
              { nome: "Broca + BDFD", cartas: ["Kd", "Qd"] },
            ],
          },
          {
            texto:
              "Trincas, qualquer par, qualquer draw e mãos com valor de showdown.",
            maos: [
              { nome: "Qualquer par", cartas: ["Th", "Tc"] },
              { nome: "Showdown value", cartas: ["Ah", "Kc"] },
            ],
          },
          {
            texto: "Overpairs e combo draw.",
            maos: [
              { nome: "Overpair", cartas: ["Ad", "Ac"] },
              { nome: "Combo draw", cartas: ["Ts", "8s"] },
            ],
          }
        ),
        split(
          "deep-b40",
          "Deep, sequência: B40",
          "Board com sequência em deep stack.",
          "B40",
          ["8s", "7s", "6d"],
          "8-7-6 com dois de espadas",
          {
            texto:
              "Todos os overpairs, bottom set, melhores TP e TP que conectam com o board.",
            maos: [
              { nome: "Overpair", cartas: ["Th", "Tc"] },
              { nome: "Bottom set", cartas: ["6h", "6c"] },
              { nome: "TP que conecta", cartas: ["9h", "8h"] },
            ],
          },
          {
            texto: "Flush draws, duas pontas, brocas e BDFD + BDST.",
            maos: [
              { nome: "Flush draw", cartas: ["As", "3s"] },
              { nome: "Duas pontas", cartas: ["Ah", "9c"] },
              { nome: "Broca + BDFD", cartas: ["Qd", "Td"] },
            ],
          },
          {
            texto:
              "Top set, sequência com FD, qualquer par, draws diretos, SD value + FD, SD value + BDFD e combo draw.",
            maos: [
              { nome: "Top set", cartas: ["8h", "8c"] },
              { nome: "Sequência + FD", cartas: ["Ts", "9s"] },
              { nome: "Qualquer par", cartas: ["Ah", "7h"] },
            ],
          },
          {
            texto: "Sequência, as trincas restantes e combo draw.",
            maos: [
              { nome: "Sequência", cartas: ["Th", "9d"] },
              { nome: "Trinca", cartas: ["7h", "7c"] },
              { nome: "Combo draw", cartas: ["Js", "9s"] },
            ],
          }
        ),
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Turn do 3bet pot",
      intro: "A estratégia de turn vale para o módulo todo.",
      colunas: 2,
      itens: [
        {
          etiqueta: { texto: "B100", cor: "verde" },
          titulo: "Turn blank",
          texto: "B100, no size geométrico.",
          cartas: ["Ks", "7d", "2c"],
          turn: "3h",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Carta alta",
          texto: "B40.",
          cartas: ["8s", "6d", "3c"],
          turn: "Ah",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Flush",
          texto: "B40.",
          cartas: ["Ks", "8s", "3d"],
          turn: "5s",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Turn que conecta",
          texto: "B70.",
          cartas: ["Js", "9d", "4c"],
          turn: "Th",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Flop IP",
      intro: "No deep stack, aplique o guideline específico de IP deep.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Short: B25",
          texto: "Range bet.",
          cartas: ["As", "7d", "2c"],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Short: B40",
          texto: "Split.",
          cartas: ["Qs", "Js", "6d"],
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Short: B70",
          texto:
            "Boards específicos, principalmente low e boards em que você precisa de mais pressão.",
          cartas: ["7s", "5d", "2c"],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Bluffs e boards low",
      colunas: 2,
      itens: [
        {
          titulo: "Construção de bluffs",
          textos: [
            "Bluff não é só blocker.",
            "Priorize equity, flush draw, BDFD, BDST e possibilidade de evoluir.",
            "Evite transformar mãos sem potencial em bluffs.",
          ],
        },
        {
          titulo: "Boards low",
          textos: [
            "Alteram a distribuição de vantagem.",
            "Pedem mais adaptação.",
            "Podem exigir splits diferentes.",
          ],
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Uma árvore por spot: nunca copie a estratégia de OOP para IP, de IP para OOP, de short para deep ou de deep para short.",
        "Ordem: posição, stack, board, size, split e frequência do solver.",
        "OOP short: B25 em seco, B40 em conectado, all-in com sequência.",
        "OOP deep: B25-B40 em seco, B70 em Tx/Jx/98x, B40 com sequência.",
        "Turn: blank em B100, carta alta em B40, flush em B40, carta que conecta em B70.",
        "Bluff com equity: com backdoors, e não só com blocker.",
      ],
    },
  ],
}

export default m08
