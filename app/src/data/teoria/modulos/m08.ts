import type { AbaT, ModuloTeoria } from "@/data/teoria/tipos"

function split(
  id: string,
  nome: string,
  criterio: string,
  etiqueta: string,
  valor: string,
  blefe: string,
  checkCall: string,
  checkRaise: string
): AbaT {
  return {
    id,
    nome,
    criterio,
    blocos: [
      {
        etiqueta: { texto: etiqueta, cor: "vermelho" },
        acoes: [
          { nome: "Valor", cor: "verde", texto: valor },
          { nome: "Blefe", cor: "verde", texto: blefe },
          { nome: "Check-call", cor: "branco", texto: checkCall },
          { nome: "Check-raise", cor: "vermelho", texto: checkRaise },
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
        "Short stack tem SPR baixo, menos streets e é mais simples de jogar por stack. Deep stack pede construção de range e mais valor para mãos suited e conectadas.",
        "Blefe não é só blocker: priorize mãos com equity, flush draw, backdoors e chance de evoluir.",
        "A guideline define a estratégia base, o size e a estrutura do range. O solver define frequência, mistura e ajustes.",
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
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Short: board seco",
          texto: "Estratégia de range.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Short: board conectado",
          texto: "Split B40.",
        },
        {
          etiqueta: { texto: "All-in", cor: "verde" },
          titulo: "Short: board com sequência",
          texto: "Split all-in.",
        },
        {
          etiqueta: { texto: "B25-B40", cor: "claro" },
          titulo: "Deep: board seco",
          texto: "B25 ou B40.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Deep: Tx, Jx e 98x suited",
          texto: "Split B70.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Deep: board com sequência",
          texto: "Split B40.",
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
          "TP ou melhor.",
          "Flush draws e duas pontas.",
          "Trincas, qualquer par, qualquer draw e mãos com valor de showdown.",
          "Overpairs, TPTK e combo draw."
        ),
        split(
          "short-allin",
          "Short, sequência: all-in",
          "Board com sequência em short stack.",
          "All-in",
          "Os primeiros overpairs ao board e TP.",
          "Flush draws e duas pontas.",
          "Trincas, sequências, pares e brocas com redraw.",
          "Overpairs e combo draw."
        ),
        split(
          "deep-b70",
          "Deep, Tx/Jx/98x: B70",
          "Board Tx, Jx ou 98x suited em deep stack.",
          "B70",
          "Os primeiros overpairs ao board e TP.",
          "Flush draws, duas pontas, brocas e BDFD + BDST.",
          "Trincas, qualquer par, qualquer draw e mãos com valor de showdown.",
          "Overpairs e combo draw."
        ),
        split(
          "deep-b40",
          "Deep, sequência: B40",
          "Board com sequência em deep stack.",
          "B40",
          "Todos os overpairs, bottom set, melhores TP e TP que conectam com o board.",
          "Flush draws, duas pontas, brocas e BDFD + BDST.",
          "Top set, sequência com FD, qualquer par, draws diretos, SD value + FD, SD value + BDFD e combo draw.",
          "Sequência, as trincas restantes e combo draw."
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
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Carta alta",
          texto: "B40.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Flush",
          texto: "B40.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Turn que conecta",
          texto: "B70.",
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
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Short: B40",
          texto: "Split.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Short: B70",
          texto:
            "Boards específicos, principalmente low e boards em que você precisa de mais pressão.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Blefes e boards low",
      colunas: 2,
      itens: [
        {
          titulo: "Construção de blefes",
          textos: [
            "Blefe não é só blocker.",
            "Priorize equity, flush draw, BDFD, BDST e possibilidade de evoluir.",
            "Evite transformar mãos sem potencial em blefes.",
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
        "Nunca copie uma estratégia de OOP para IP, de IP para OOP, de short para deep ou de deep para short.",
        "Ordem: posição, stack, board, size, split, frequência do solver.",
        "OOP short: B25 em seco, B40 em conectado, all-in com sequência.",
        "OOP deep: B25-B40 em seco, B70 em Tx/Jx/98x, B40 com sequência.",
        "Turn: blank B100, carta alta B40, flush B40, conecta B70.",
        "Blefe com equity e backdoors, não só com blocker.",
      ],
    },
  ],
}

export default m08
