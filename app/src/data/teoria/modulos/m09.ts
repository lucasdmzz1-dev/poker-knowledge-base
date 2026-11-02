import type { AbaT, ModuloTeoria } from "@/data/teoria/tipos"

function river(
  id: string,
  nome: string,
  criterio: string,
  sizes: {
    size: string
    cor: "claro" | "vermelho" | "verde"
    valor: string
    bluff: string
  }[],
  regra?: string
): AbaT {
  return {
    id,
    nome,
    criterio,
    blocos: sizes.map((s) => ({
      etiqueta: { texto: s.size, cor: s.cor },
      acoes: [
        { nome: "Valor", cor: "verde" as const, texto: s.valor },
        { nome: "Bluff", cor: "vermelho" as const, texto: s.bluff },
      ],
    })),
    nota: regra,
  }
}

const m09: ModuloTeoria = {
  slug: "bet-check-bet",
  tema: "Bet Check Bet",
  nome: "Bet Check Bet",
  spot: "Pote single raised · river · bet no flop, check no turn e bet no river",
  tags: ["River", "Range capado", "Value e bluff"],
  videos: [{ id: "_3RgKL4j8RE" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "A linha é bet no flop, check no turn e bet no river: os dois ranges chegam ao river com limitações.",
        "O BTN chega capado de top pairs fortes e mãos melhores, então o valor dele vai de second pair para cima.",
        "O BB, quando dá check no river, também perde parte das mãos fortes que deveriam apostar.",
        "Pergunte sempre: qual mão eu quero fazer foldar, a minha mão bloqueia essa mão e ela tem função no range de bluff?",
        "Nunca blefe só porque a mão é fraca.",
        "Blank tem um size só, B70. Os rivers dinâmicos têm mais divisão de sizes: B70 para as médias e B100 para a polarização.",
        "Valor não é a força absoluta da mão: é a força contra o range que chega ao river.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Por que os ranges chegam capados",
      itens: [
        {
          titulo: "BTN",
          textos: [
            "Bet no flop e check no turn.",
            "Perde parte das mãos fortes que continuariam apostando o turn.",
            "Chega capado de top pairs fortes e mãos melhores.",
            "No river, o valor é de second pair ou melhor.",
          ],
        },
        {
          titulo: "BB",
          textos: [
            "Check no flop, call, check no turn e check no river.",
            "Muitas mãos fortes deveriam apostar o river: top pair, second pair e melhores.",
            "Quando dá check, o range perde parte das mãos fortes.",
          ],
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "O que fazer em cada river",
      intro:
        "Cada dinâmica tem sizes, range de valor e range de bluff próprios.",
      abas: [
        river(
          "blank",
          "Blank",
          "O river não muda a distribuição. Só existe um size. O alvo do bluff é o Ax, então evite blefar com Ax.",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "O melhor terceiro par e second pair ou melhor.",
              bluff: "Qx ou pior e mãos que atacam o Ax.",
            },
          ]
        ),
        river(
          "ax",
          "Dinâmico Ax",
          "Quando bate um ás no river, o Ax vira valor. O alvo do bluff muda: você quer atacar Kx e pares fracos, e não o Ax.",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "Top pair ou melhor.",
              bluff:
                "Q high ou menor. Evite blefar com Ax, porque ele bloqueia o range que você quer atacar.",
            },
          ]
        ),
        river(
          "flush",
          "Dinâmico flush",
          "Rivers dinâmicos permitem mais polarização, e as mãos mais fortes usam sizes maiores. Os bluffs de B100 precisam de blockers relevantes.",
          [
            {
              size: "B70",
              cor: "verde",
              valor:
                "Top pair que deu check no turn e os 5 melhores second pairs ou melhor.",
              bluff: "Qx ou pior.",
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Dois pares ou melhor que acertaram o river, e flushes.",
              bluff: "Bons blockers do flush e broadways com o naipe do board.",
            },
          ]
        ),
        river(
          "highcard",
          "Dinâmico high card",
          "Broadways usam o size maior e low cards usam o menor. Broadways representam mais valor e pressionam melhor o range capado.",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "Second pair.",
              bluff: "Low cards.",
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Top pair ou melhor.",
              bluff: "Broadways.",
            },
          ]
        ),
        river(
          "sequencia",
          "Dinâmico sequência",
          "Os blockers têm papel importante nos bluffs de size alto.",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "Top pair e second pair.",
              bluff: "Qx ou pior.",
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Dois pares ou melhor.",
              bluff: "Blockers da sequência.",
            },
          ]
        ),
        river(
          "dobra",
          "Dinâmico dobra de carta",
          "Quando a carta dobra, o size maior fica polarizado: valor muito forte e bluffs com cartas altas.",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "Top pair e second pair.",
              bluff: "Low cards.",
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Trincas ou melhor.",
              bluff: "Broadways.",
            },
          ]
        ),
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras do módulo",
      itens: [
        "Blefe em linhas de ranges capados.",
        "Defina o alvo do bluff antes de escolher a mão.",
        "Blocker depende do alvo: se quer fazer o Ax foldar, evite blefar com Ax. Se quer fazer o Kx foldar, evite blefar com Kx.",
        "Top pair e second pair podem ser value bet: a força é relativa ao range que chega ao river.",
        "Rivers dinâmicos têm mais divisão de sizes.",
        "B100 de bluff exige broadways e blockers relevantes.",
        "B70 é para mãos médias e para bluffs que atacam os folds naturais.",
        "Valor não é a força absoluta da mão: é definido contra o range do adversário.",
      ],
    },
  ],
}

export default m09
