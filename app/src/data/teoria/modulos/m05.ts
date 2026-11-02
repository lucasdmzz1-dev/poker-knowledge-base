import type { ModuloTeoria } from "@/data/teoria/tipos"

const m05: ModuloTeoria = {
  slug: "cbet-oop",
  tema: ["C-Bet OOP", "2nd Barrel OOP"],
  nome: "C-Bet OOP",
  spot: "Pote single raised · você fora de posição, como agressor · 40bb · EP e CO contra o BTN",
  tags: [
    "Flop e turn",
    "Fora de posição",
    "40bb",
    "Sizes B25, B40, B70 e B100",
  ],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "C-bet fora de posição não é só frequência de aposta: é construir um range de bet e um range de check, os dois funcionais.",
        "O range de check não pode ficar fraco: ele precisa ter força, realizar equity e proteger contra exploração.",
        "Existem dois tipos de split: split range e split 25%.",
        "Não existe regra de que o top pair sempre aposta: depende da textura, do naipe e da necessidade de proteção do check.",
        "Nem toda trinca aposta, e nem todo draw: parte das melhores trincas fica no check.",
        "Os bluffs consideram quem você quer fazer foldar e quais cartas reduzem as continuações do adversário.",
        "No turn, o size acompanha a largura do range de valor: B100 no blank, B40 nos turns dinâmicos.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Os dois tipos de split",
      intro: "Nos dois casos, a ideia é distribuir mãos entre bet e check.",
      itens: [
        {
          titulo: "Split range",
          textos: [
            "Divide uma grande parte do range entre bet e check. Não significa apostar pouco.",
            "Top pairs: metade, usando os naipes do board.",
            "Second pairs: metade, usando os naipes do board.",
            "Draws: duas pontas sem o naipe do board e brocas com o naipe do board.",
            "Backdoors: mãos com BDFD e BDST.",
          ],
        },
        {
          titulo: "Split 25%",
          textos: [
            "Só uma parte menor do range aposta.",
            "Top pairs: 25% deles, com a parte off que tem o naipe do flush draw e a parte suited com BDFD. Em board rainbow, mãos sem o naipe do board.",
            "Draws: duas pontas e brocas com o naipe do board. Use o primeiro naipe do board para o check-raise.",
            "Backdoors: uma overcard com BDFD e BDST.",
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Estratégia e size por textura",
      intro:
        "Cada cartão mostra o que fazer abrindo de EP e de CO contra o BTN.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "A high seco",
          textos: ["EP vs BTN: split range.", "CO vs BTN: split range."],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "A high conectado",
          textos: ["EP vs BTN: split range.", "CO vs BTN: split 25%."],
        },
        {
          etiqueta: { texto: "B25 / B40", cor: "claro" },
          titulo: "BBX",
          textos: [
            "EP vs BTN: range, em B25.",
            "CO vs BTN: split 25%, em B40.",
          ],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "K-Q high",
          textos: ["EP vs BTN: split range.", "CO vs BTN: split 25%."],
        },
        {
          etiqueta: { texto: "B40 / B70", cor: "vermelho" },
          titulo: "J-T high",
          textos: [
            "EP vs BTN: split range, em B40.",
            "CO vs BTN: split 25%, em B70.",
          ],
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "High com sequência",
          textos: ["EP vs BTN: split range.", "CO vs BTN: split 25%."],
        },
        {
          etiqueta: { texto: "B70 / B40", cor: "verde" },
          titulo: "Low com sequência",
          textos: [
            "EP vs BTN: split range, em B70.",
            "CO vs BTN: split range, em B40.",
          ],
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Low sem sequência",
          textos: ["EP vs BTN: split range.", "CO vs BTN: split range."],
        },
        {
          etiqueta: { texto: "B25", cor: "claro" },
          titulo: "Monotone",
          textos: [
            "EP vs BTN: aleatório, em B25.",
            "CO vs BTN: range de check.",
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Como construir cada categoria de mão",
      itens: [
        {
          titulo: "Top pair",
          texto:
            "Depende da textura, do naipe, da necessidade de proteção e da construção do range de check.",
        },
        {
          titulo: "Second pair",
          texto:
            "Também se divide, pelo kicker, pela interação com o board e pela capacidade de continuar.",
        },
        {
          titulo: "Trincas",
          texto:
            "Aposte parte delas e mantenha parte das melhores no check, para proteger o range de check.",
        },
        {
          titulo: "Draws",
          texto:
            "Depende da capacidade de continuar, da realização de equity e dos blockers.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Second barrel fora de posição",
      intro:
        "Guideline do instrutor, ainda sem aula. Cobre só o range de valor: bluffs, semi-bluffs e a composição do check no turn ainda não estão definidos.",
      itens: [
        {
          etiqueta: { texto: "B100", cor: "verde" },
          titulo: "Turn blank",
          texto: "Os 2 ou 3 melhores top pairs ou melhor.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Dinâmico, high card seco",
          texto:
            "Todos os top pairs (deixe 1 ou 2 dos piores no check-call) e os 2 melhores second pairs ou melhor.",
        },
        {
          etiqueta: { texto: "B70", cor: "verde" },
          titulo: "Dinâmico, high card seco, sem value de second pair",
          texto: "Todos os top pairs ou melhor.",
        },
        {
          etiqueta: { texto: "B100", cor: "verde" },
          titulo: "High card carregado",
          texto: "Os 1 ou 2 melhores top pairs ou melhor.",
        },
        {
          etiqueta: { texto: "B40", cor: "vermelho" },
          titulo: "Dinâmico, flush",
          texto: "Os 2 melhores top pairs ou melhor.",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "C-bet fora de posição é construir dois ranges funcionais, e não maximizar apostas.",
        "O range de bet extrai valor, pressiona e protege mãos.",
        "O range de check tem força, realiza equity e protege contra exploração.",
        "Split range: metade dos top pairs e dos second pairs, com os naipes do board.",
        "Split 25%: só uma parte menor aposta, com os naipes do flush draw.",
        "Turn blank: B100 com os melhores top pairs. Turn dinâmico: B40.",
      ],
    },
  ],
  fonte:
    "theory/05-CBet-OOP-40bb (guideline). A guideline não traz boards nem mãos de exemplo",
}

export default m05
