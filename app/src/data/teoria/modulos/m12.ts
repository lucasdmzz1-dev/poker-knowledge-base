import type { AbaT, MaoEx, ModuloTeoria } from "@/data/teoria/tipos"

// Mãos pelo nome da fonte (A6s, ATo, TT...). Os naipes só marcam suited e
// offsuit; não vêm da fonte.
const suited = (nome: string, a: string, b: string): MaoEx => ({
  nome,
  cartas: [`${a}s`, `${b}s`],
})
const off = (nome: string, a: string, b: string): MaoEx => ({
  nome,
  cartas: [`${a}d`, `${b}c`],
})
const par = (nome: string, a: string): MaoEx => ({
  nome,
  cartas: [`${a}s`, `${a}h`],
})

const abas: AbaT[] = [
  {
    id: "3bet",
    nome: "3bet contra open",
    criterio:
      "SB com 40bb contra open de LJ. Mão especulativa joga agressiva, não passiva: a parte off do range do opener dá fold ao 3bet, e os blockers reduzem o call e o 4bet dele.",
    blocos: [
      {
        etiqueta: { texto: "~6bb", cor: "vermelho" },
        acoes: [
          {
            nome: "3bet",
            cor: "vermelho",
            maos: [
              suited("A6s (e A2s a A5s)", "A", "6"),
              off("ATo", "A", "T"),
              off("AJo", "A", "J"),
            ],
          },
          {
            nome: "Mais call",
            cor: "branco",
            maos: [
              suited("ATs", "A", "T"),
              suited("AJs", "A", "J"),
              suited("A9s", "A", "9"),
            ],
          },
          {
            nome: "Shove",
            cor: "verde",
            texto:
              "A6s não é forte o bastante para shove contra posição inicial. Shove só vale contra range largo, com equity contra o range de call.",
          },
        ],
      },
    ],
    nota: "A mão que é a borda do range de reação entra no 3bet puro: se a borda do offsuit é AJo, 3beta AJo puro. Contra open, com 15bb ou menos: shove ou fold, sem 3bet pequeno.",
  },
  {
    id: "pares",
    nome: "Pares no SB vs LJ",
    criterio:
      "SB com 40bb contra open de LJ. Contra posição restrita em 25 a 30bb, mais 3bet e menos shove.",
    blocos: [
      {
        acoes: [
          {
            nome: "3bet/call",
            cor: "vermelho",
            maos: [par("TT", "T")],
          },
          {
            nome: "Mais shove",
            cor: "verde",
            maos: [par("99", "9"), par("88", "8")],
          },
        ],
      },
    ],
    nota: "99 e 88 são mais vulneráveis, então têm mais argumentos para shove. A escolha final varia com a média dos stacks e o perfil do adversário.",
  },
  {
    id: "shove",
    nome: "Shove vs open de BTN ou CO",
    criterio:
      "O shove vs open é a principal arma da reta final: o BTN dá fold a muita mão, o shove costuma ganhar mais de 60% das vezes e há cerca de 4,5bb de dinheiro morto.",
    blocos: [
      {
        etiqueta: { texto: "All-in", cor: "verde" },
        acoes: [
          {
            nome: "Shove",
            cor: "verde",
            maos: [
              par("Todos os pares", "8"),
              off("Todos os Ax offsuit (A2o puro)", "A", "2"),
              off("Kx offsuit polarizados (K5o, K6o, K7o)", "K", "6"),
              suited("Coluna do 8 suited (J8s, Q8s, T8s)", "J", "8"),
              off("T-J offsuit, conforme o spot", "T", "J"),
            ],
          },
        ],
      },
    ],
    nota: "Os Ax suited no BB podem dividir entre flat e shove, e a maioria só dá shove. Dar flat com A2o é jogar passivo demais.",
  },
  {
    id: "4bet",
    nome: "Você abre e leva 3bet polar",
    criterio:
      "O range de 3bet do BB na reta é curto e polarizado: pares altos, broadways fortes e alguns bluffs de Kx offsuit.",
    blocos: [
      {
        acoes: [
          {
            nome: "4bet pequeno",
            cor: "vermelho",
            maos: [
              off("ATo", "A", "T"),
              off("KJo", "K", "J"),
              off("A9o", "A", "9"),
            ],
          },
          {
            nome: "Call",
            cor: "branco",
            maos: [par("99 a 77", "9")],
          },
          {
            nome: "Shove ou fold",
            cor: "verde",
            maos: [par("44 e 33", "4")],
          },
          {
            nome: "Fold",
            cor: "vermelho",
            maos: [off("A5o", "A", "5")],
          },
        ],
      },
    ],
    nota: "4bet pequeno é só a diferença da aposta, com a borda do range e bons blockers. O par que entra no shove é o que está um acima do pior par com que ele paga: se ele paga com 99, o TT entra.",
  },
  {
    id: "bb25",
    nome: "BB com cerca de 25bb",
    criterio:
      "Contra open de range curto. O limite de 25 a 30bb depende da distribuição dos stacks na mesa.",
    blocos: [
      {
        acoes: [
          {
            nome: "3bet ou fold",
            cor: "vermelho",
            maos: [
              off("A8o", "A", "8"),
              off("T9o", "T", "9"),
              off("K9o", "K", "9"),
              off("A5o e A4o (lixo)", "A", "5"),
            ],
          },
          {
            nome: "Flat",
            cor: "branco",
            maos: [
              off("A10o (e eventualmente A9o)", "A", "T"),
              suited("64s", "6", "4"),
              suited("75s", "7", "5"),
            ],
          },
        ],
      },
    ],
  },
]

const m12: ModuloTeoria = {
  slug: "reta-final",
  tema: "Reta Final",
  nome: "Reta Final",
  spot: "Reta final do torneio · cerca de 10% do field restante, até a mesa final e o 3-handed · 15bb a 40bb",
  tags: ["Pré-flop", "Reta final", "ICM", "15bb a 40bb"],
  videos: [{ id: "B3nBGrRGvtM" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "Enxergar o spot não basta: é preciso ter a mão certa para executar. O blocker aumenta a chance de o adversário reagir como você quer.",
        "Stack define o plano: stack grande joga mais mãos, dá mais flat e induz mais. Stack médio ou curto fecha, mas quando entra, entra para o ataque.",
        "Risco de cair: limita a exposição. Quanto mais curto, mais equity extra você precisa para entrar.",
        "Mão especulativa: joga agressiva, e não passiva. Mais 3bet, menos flat.",
        "Shove vs open de posição tardia: é a principal arma da reta final. Não deixe a oportunidade passar.",
        "Contra open, com 15bb ou menos: shove ou fold, sem 3bet pequeno.",
        "Pagar 3bet na reta final: dizer que não se paga é um mito. Em posição você pode pagar, e fora de posição reaja de forma mais agressiva.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "A filosofia do módulo",
      itens: [
        {
          titulo: "Ter a mão certa",
          texto:
            "Pegar qualquer mão para aproveitar a oportunidade transforma um bom spot em ruim.",
        },
        {
          titulo: "A reta pede outro padrão",
          texto:
            "O jogador comum chega com a mesma chave do middle game: cria a oportunidade, mas não a realiza.",
        },
        {
          titulo: "Stack define o plano",
          texto:
            "Grande: mais mãos, mais flat, mais indução. Médio ou curto: fecha, e quando entra, entra para o ataque.",
        },
        {
          titulo: "Risco de cair",
          texto:
            "É o risk premium (RP): o extra de equity que você precisa por causa do risco de cair.",
        },
        {
          titulo: "Estrutura clara",
          texto:
            "O adversário já abre mãos que dão raise-fold quase sempre. Adapte só com amostra real.",
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "O que fazer com cada mão",
      intro:
        "As mãos são as citadas na aula. Os naipes só marcam suited e offsuit.",
      abas,
    },
    {
      tipo: "cartoes",
      titulo: "Stack e risco de cair",
      colunas: 3,
      itens: [
        {
          titulo: "Stack grande",
          texto:
            "Com 60bb, no BTN contra open de MP, QTs vai de flat e não de 3bet: você sofre menos do pós-flop dominado.",
        },
        {
          titulo: "25 a 30bb",
          texto: "3bet ou fold. Sem flat com Ax offsuit baixo, T9o e K9o.",
        },
        {
          titulo: "Fora de posição inicial",
          texto:
            "EP e MP têm pouco flat, porque o risco de cair e a pressão atrás são grandes.",
        },
        {
          titulo: "EP contra EP",
          texto:
            "Com 18 a 20bb, sem shove: 3bet sem all-in. Com 15 a 16bb dá para shove direto.",
        },
        {
          titulo: "Shove vs open por posição",
          texto:
            "Do MP com 20bb, sem range. A partir do CO (e eventualmente HJ), há range. Mais shove com 15 a 17bb nas outras posições e 20bb ou mais nas finais.",
        },
        {
          titulo: "Stacks curtos atrás",
          texto:
            "Se vários jogadores atrás têm cerca de 10bb, você pode dar mais shove: o risco de colidir com stacks que te cobrem cai.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Sizes do 3bet",
      itens: [
        {
          titulo: "Range com flat",
          texto:
            "O 3bet fica polarizado (topo e borda) e o size sobe, para gerar fold equity. Exemplo: cerca de 6bb contra LJ com 40bb, fora de posição.",
        },
        {
          titulo: "Range sem flat",
          texto:
            "O range é linear, então o size cai: 5bb, ou 5,5bb quando o SB só 3beta ou folda. EP contra EP: size menor e mais 3bet sem all-in.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Squeeze e blind war",
      itens: [
        {
          titulo: "Squeeze",
          textos: [
            "É a borda do range de call, com blockers: A8o, A7o e K9o dominados vão para o squeeze.",
            "Flat inesperado de alguém com cerca de 20bb é dinheiro morto. Priorize Ax offsuit e K9o.",
          ],
        },
        {
          titulo: "Open no blind war",
          texto:
            "No SB contra um BB de 40bb, mesmo cobrindo, você investe mais fichas para jogar fora de posição: dê raise mais com mãos que têm jogabilidade. Contra BB curto, aí sim você pressiona.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "3-handed e diferença de stacks",
      colunas: 2,
      itens: [
        {
          titulo: "84bb contra 20bb e 20bb",
          texto:
            "Open shove, e não open raise: o raise abre a porta para o adversário.",
        },
        {
          titulo: "40bb contra 20bb e 20bb",
          texto:
            "Elimine a borda do range, abra um pouco menos, dê mais shove com mãos médias e vá mais para raise-fold.",
        },
        {
          titulo: "20bb contra 20bb e 20bb",
          texto:
            "Risco grande: abra menos mãos, dê menos shove, mãos precisas.",
        },
        {
          titulo: "BTN 46bb, SB 26bb, BB 55bb",
          textos: [
            "BTN: quanto menos ante, menos mãos. Range de open de 33%.",
            "SB: sem incentivo de flat. É 5,5bb ou shove.",
          ],
        },
        {
          titulo: "Stack menor que os adversários",
          texto:
            "Algo tem que ser a seu favor: induza mais mãos que eles, como A10 suited indo de 3bet/call em vez de shove.",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Pós-flop na reta final",
      itens: [
        "Estrutura de sizes: mantenha a que você já usa. No J-8-4 era B40, ou B25 sem problema. Não invente sizes em que você não tem prática.",
        "Sem slowplay por hot card: as mãos de valor continuam apostando, e o ganho vem da parte média do range, que passa a pagar mais.",
        "Mão com 75% a 85% de equity ou mais: deve apostar, com size alto. Mão fraca é bluff-catcher.",
        "Adversário na FT: você joga poucas mãos contra cada pessoa. Na primeira vez, assuma que o que ele faz é a estratégia dele, e adapte só com showdowns.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Mão especulativa: 3bet, não flat. A borda do 3bet entra pura.",
        "Contra open, com 15bb ou menos: shove ou fold, sem 3bet pequeno.",
        "Shove vs open de BTN ou CO: todos os pares, todos os Ax offsuit, Kx offsuit polarizados, parte da coluna do 8 suited.",
        "BB com 25bb: Ax offsuit baixo, T9o e K9o são 3bet ou fold.",
        "Contra 3bet polar: pares médios pagam, pares baixos shove ou fold, 4bet pequeno com a borda e blockers.",
        "EP contra EP com 18 a 20bb: 3bet sem all-in.",
        "3-handed com stack enorme contra dois curtos: open shove.",
        "Pós-flop: mão forte aposta, mão fraca vira bluff-catcher.",
      ],
    },
  ],
}

export default m12
