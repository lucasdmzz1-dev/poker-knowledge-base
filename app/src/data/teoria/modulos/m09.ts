import type { CardCode } from "@/data/mod15"
import type { AbaT, AcaoT, MaoEx, ModuloTeoria } from "@/data/teoria/tipos"

interface SizeRiver {
  size: string
  cor: "claro" | "vermelho" | "verde"
  valor: string
  valorMaos?: MaoEx[]
  bluff: string
  bluffMaos?: MaoEx[]
  extra?: AcaoT[]
}

function river(
  id: string,
  nome: string,
  criterio: string,
  cartas: CardCode[],
  rotulo: string,
  sizes: SizeRiver[],
  regra?: string
): AbaT {
  return {
    id,
    nome,
    criterio,
    blocos: sizes.map((s, i) => ({
      cartas: i === 0 ? cartas : undefined,
      rotulo: i === 0 ? rotulo : undefined,
      grupo: sizes.length > 1 ? s.size : undefined,
      etiqueta: { texto: s.size, cor: s.cor },
      acoes: [
        {
          nome: "Bet por valor",
          cor: "verde" as const,
          texto: s.valor,
          maos: s.valorMaos,
        },
        {
          nome: "Bet de bluff",
          cor: "amarelo" as const,
          texto: s.bluff,
          maos: s.bluffMaos,
        },
        ...(s.extra ?? []),
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
        "A linha: bet no flop, check no turn e bet no river. Os dois ranges chegam ao river com limitações.",
        "BTN capado: chega sem os top pairs fortes e as mãos melhores, então o valor dele vai de second pair para cima.",
        "BB capado: quando dá check no river, também perde parte das mãos fortes que deveriam apostar.",
        "Alvo do bluff: qual mão eu quero fazer foldar, a minha mão bloqueia essa mão e ela tem função no range de bluff?",
        "Mão fraca não é motivo: nunca blefe só porque a mão é fraca.",
        "Sizes: blank tem um size só, B70. Os rivers dinâmicos têm mais divisão: B70 para as médias e B100 para a polarização.",
        "Valor relativo: não é a força absoluta da mão, é a força contra o range que chega ao river.",
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
        "Cada dinâmica tem sizes, range de valor e range de bluff próprios. As mãos marcadas como aula são dos exercícios.",
      abas: [
        river(
          "blank",
          "Blank",
          "O river não muda a distribuição. Só existe um size. O alvo do bluff é o Ax, então evite blefar com Ax.",
          ["Qs", "2c", "5h", "6d", "Tc"],
          "Q-2-5-6-T: river blank (aula)",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "O melhor terceiro par e second pair ou melhor.",
              valorMaos: [{ nome: "Second pair", cartas: ["Jh", "Th"] }],
              bluff: "Qx ou pior e mãos que atacam o Ax.",
              bluffMaos: [{ nome: "K9 de ouros (aula)", cartas: ["Kd", "9d"] }],
              extra: [
                {
                  nome: "Check",
                  cor: "branco",
                  texto:
                    "Ax não blefa: bloqueia exatamente o range que você quer fazer foldar.",
                  maos: [{ nome: "A9 (aula)", cartas: ["Ac", "9s"] }],
                },
              ],
            },
          ]
        ),
        river(
          "ax",
          "Dinâmico Ax",
          "Quando bate um ás no river, o Ax vira valor. O alvo do bluff muda para Kx e pares médios, e não o Ax. Não blefe automaticamente com Ax ou Kx.",
          ["6c", "As", "Ks", "2d", "Ad"],
          "6-A-K-2-A: o ás dobra no river (aula)",
          [
            {
              size: "B70",
              cor: "verde",
              valor:
                "Top pair ou melhor. Na aula, 88 aposta por valor: o valor é relativo ao range do adversário.",
              valorMaos: [{ nome: "88 (aula)", cartas: ["8h", "8c"] }],
              bluff:
                "Q high ou menor. Evite blefar com Ax e Kx, porque eles bloqueiam o range que você quer atacar.",
              bluffMaos: [{ nome: "Q high", cartas: ["Qh", "Jh"] }],
            },
          ]
        ),
        river(
          "flush",
          "Dinâmico flush",
          "Rivers dinâmicos permitem mais polarização, e as mãos mais fortes usam sizes maiores. Os bluffs de B100 precisam de blockers relevantes.",
          ["Ks", "9d", "4d", "2c", "7d"],
          "K-9-4-2-7: o flush de ouros completa (ilustrativo)",
          [
            {
              size: "B70",
              cor: "verde",
              valor:
                "Top pair que deu check no turn e os 5 melhores second pairs ou melhor.",
              valorMaos: [
                { nome: "Top pair", cartas: ["Kc", "Qc"] },
                { nome: "Second pair", cartas: ["Ah", "9c"] },
              ],
              bluff: "Qx ou pior.",
              bluffMaos: [{ nome: "Qx", cartas: ["Qc", "Jc"] }],
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Dois pares ou melhor que acertaram o river, e flushes.",
              valorMaos: [
                { nome: "Flush", cartas: ["Ad", "5d"] },
                { nome: "Dois pares", cartas: ["7c", "4c"] },
              ],
              bluff: "Bons blockers do flush e broadways com o naipe do board.",
              bluffMaos: [{ nome: "Broadway com ♦", cartas: ["Qd", "Js"] }],
            },
          ]
        ),
        river(
          "highcard",
          "Dinâmico high card",
          "Broadways usam o size maior e low cards usam o menor. Na aula, o T conta como broadway: a classificação segue a guideline, e não só a carta isolada.",
          ["5d", "Qc", "As", "7d", "Ks"],
          "5-Q-A-7-K: carta alta no river (aula)",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "Second pair.",
              valorMaos: [{ nome: "Second pair", cartas: ["Kh", "Th"] }],
              bluff: "Low cards.",
              bluffMaos: [{ nome: "Low cards", cartas: ["4h", "3h"] }],
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Top pair ou melhor.",
              valorMaos: [{ nome: "Top pair", cartas: ["Ah", "Jd"] }],
              bluff: "Broadways.",
              bluffMaos: [{ nome: "T6 de paus (aula)", cartas: ["Tc", "6c"] }],
            },
          ]
        ),
        river(
          "sequencia",
          "Dinâmico sequência",
          "Os blockers têm papel importante nos bluffs de size alto.",
          ["9s", "8d", "3c", "2h", "6c"],
          "9-8-3-2-6: a sequência completa (ilustrativo)",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "Top pair e second pair.",
              valorMaos: [
                { nome: "Top pair", cartas: ["Ah", "9h"] },
                { nome: "Second pair", cartas: ["Kc", "8c"] },
              ],
              bluff: "Qx ou pior.",
              bluffMaos: [{ nome: "Qx", cartas: ["Qh", "Jh"] }],
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Dois pares ou melhor.",
              valorMaos: [{ nome: "Dois pares", cartas: ["9h", "8h"] }],
              bluff: "Blockers da sequência.",
              bluffMaos: [{ nome: "Blocker do 7", cartas: ["Ac", "7c"] }],
            },
          ]
        ),
        river(
          "dobra",
          "Dinâmico dobra de carta",
          "Quando a carta dobra, o size maior fica polarizado: valor muito forte e bluffs com cartas altas.",
          ["Ks", "9d", "4c", "2h", "9c"],
          "K-9-4-2-9: o 9 dobra no river (ilustrativo)",
          [
            {
              size: "B70",
              cor: "verde",
              valor: "Top pair e second pair.",
              valorMaos: [
                { nome: "Top pair", cartas: ["Ah", "Kd"] },
                { nome: "Second pair", cartas: ["Ah", "4h"] },
              ],
              bluff: "Low cards.",
              bluffMaos: [{ nome: "Low cards", cartas: ["6h", "5h"] }],
            },
            {
              size: "B100",
              cor: "vermelho",
              valor: "Trincas ou melhor.",
              valorMaos: [{ nome: "Trinca", cartas: ["Th", "9h"] }],
              bluff: "Broadways.",
              bluffMaos: [{ nome: "Broadway", cartas: ["Qh", "Jh"] }],
            },
          ]
        ),
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Ranges capados: blefe nessas linhas.",
        "Alvo do bluff: defina antes de escolher a mão.",
        "Blocker depende do alvo: se quer fazer o Ax foldar, evite blefar com Ax. Se quer fazer o Kx foldar, evite blefar com Kx.",
        "Top pair e second pair: podem ser value bet, porque a força é relativa ao range que chega ao river.",
        "Rivers dinâmicos: têm mais divisão de sizes.",
        "B100 de bluff: exige broadways e blockers relevantes.",
        "B70: para mãos médias e para bluffs que atacam os folds naturais.",
        "Valor: não é a força absoluta da mão, é definido contra o range do adversário.",
      ],
    },
  ],
}

export default m09
