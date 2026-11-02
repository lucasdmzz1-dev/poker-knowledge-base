import type { ModuloTeoria } from "@/data/teoria/tipos"

const m04: ModuloTeoria = {
  slug: "third-barrel",
  tema: "3rd Barrel e vs 3rd Barrel",
  nome: "Third Barrel e vs Third Barrel",
  spot: "Pote single raised · river · o ataque do agressor e a defesa de quem paga",
  tags: ["River", "Ataque e defesa", "MDF"],
  videos: [{ id: "2N_ifMb1kP0" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "River como consequência: a decisão vem do que você construiu no flop e, principalmente, no turn.",
        "Força da mão não basta: apostar ou desistir depende da composição do range e da história da mão.",
        "Turn atacado com construção polar: no river você só continua blefando quando os draws completam.",
        "Turn atacado com construção linear: você continua blefando nos rivers blank.",
        "Defesa pelo MDF: o MDF é a referência para o range. Contra aposta de pote, 50%.",
        "Ataque e defesa: se estudam juntos.",
      ],
    },
    {
      tipo: "abas",
      titulo: "Third barrel por bluff",
      intro:
        "Duas construções de bluff, conforme o jeito que o turn foi atacado.",
      abas: [
        {
          id: "polar",
          nome: "Parte polar",
          criterio:
            "O turn foi atacado com uma construção polarizada. O objetivo é representar naturalmente os draws que chegaram ao river.",
          blocos: [
            {
              cartas: ["Ks", "9s", "4d", "2c", "7s"],
              rotulo: "O flush completa no river",
              acoes: [
                {
                  nome: "Bet de bluff",
                  cor: "amarelo",
                  texto: "Só quando os draws completam, como neste river.",
                },
              ],
            },
          ],
        },
        {
          id: "linear",
          nome: "Parte linear",
          criterio:
            "O turn foi atacado com uma construção linear. O objetivo é continuar pressionando o range médio do adversário quando a carta do river não altera a distribuição de equity.",
          blocos: [
            {
              cartas: ["Ks", "9d", "4c", "2h", "3d"],
              rotulo: "River blank",
              acoes: [
                {
                  nome: "Bet de bluff",
                  cor: "amarelo",
                  texto: "Nos rivers blank, como este.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "Defesa contra o third barrel",
      intro:
        "A defesa é construída street por street. O mesmo board do flop ao river:",
      abas: [
        {
          id: "flop",
          nome: "Flop",
          criterio: "Contra c-bet de cerca de 30% do pote.",
          blocos: [
            {
              cartas: ["Qs", "8s", "3c"],
              rotulo: "Q-8-3 com dois de espadas",
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Todos os pares.",
                  maos: [
                    { nome: "Top pair", cartas: ["Qh", "Th"] },
                    { nome: "Second pair", cartas: ["8c", "7c"] },
                    { nome: "Third pair", cartas: ["Ad", "3d"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "turnblank",
          nome: "Turn blank",
          criterio: "O turn não muda a interação do board.",
          blocos: [
            {
              cartas: ["Qs", "8s", "3c"],
              turn: "2h",
              rotulo: "Turn 2: blank",
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Second pair ou melhor.",
                  maos: [
                    { nome: "Top pair", cartas: ["Qh", "Th"] },
                    { nome: "Second pair", cartas: ["8c", "7c"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "turndin",
          nome: "Turn dinâmico",
          criterio: "O turn conecta fortemente com o board.",
          blocos: [
            {
              cartas: ["Qs", "8s", "3c"],
              turn: "Td",
              rotulo: "Turn T: dinâmico",
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto:
                    "Top pair, e second pair ou third pair com redraw relevante.",
                  maos: [
                    { nome: "Top pair + duas pontas", cartas: ["Qh", "Jh"] },
                    { nome: "Second pair + broca", cartas: ["Tc", "9c"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "river70",
          nome: "River contra B70",
          criterio: "A defesa no river depende do tamanho da aposta.",
          blocos: [
            {
              cartas: ["Qs", "8s", "3c", "2h", "5d"],
              rotulo: "River 5: o flush draw não chegou",
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto: "Todos os top pairs.",
                  maos: [
                    { nome: "Top pair", cartas: ["Qh", "Th"] },
                    { nome: "Top pair fraco", cartas: ["Qd", "9d"] },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "riverpote",
          nome: "River contra pote ou mais",
          criterio:
            "Com aposta grande, a defesa fica mais restrita: você protege o range sem pagar com mãos que ajudam o blefe dele. Aqui os blefes naturais dele são os flush draws de espadas que não chegaram.",
          blocos: [
            {
              cartas: ["Qs", "8s", "3c", "2h", "5d"],
              rotulo: "River 5: o flush draw não chegou",
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto:
                    "Os top pairs que não bloqueiam os blefes naturais do adversário.",
                  maos: [{ nome: "Top pair sem ♠", cartas: ["Qh", "Jh"] }],
                },
                {
                  nome: "Cuidado",
                  cor: "vermelho",
                  texto:
                    "Top pair que bloqueia os blefes dele deixa menos blefes no range que você enfrenta.",
                  maos: [{ nome: "Top pair com A♠", cartas: ["As", "Qd"] }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "MDF: frequência mínima de defesa",
      intro:
        "Contra cada tamanho de aposta, a fatia mínima do range que você defende.",
      colunas: 3,
      itens: [
        { titulo: "2x pote", texto: "MDF de 34%." },
        { titulo: "1,5x pote", texto: "MDF de 40%." },
        { titulo: "Pote", texto: "MDF de 50%." },
        { titulo: "75% do pote", texto: "MDF de 57%." },
        { titulo: "66% do pote", texto: "MDF de 60%." },
        { titulo: "50% do pote", texto: "MDF de 67%." },
        { titulo: "33% do pote", texto: "MDF de 75%." },
        { titulo: "25% do pote", texto: "MDF de 80%." },
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "River: é consequência da estratégia do turn.",
        "Bluff no river: range polar blefa só quando os draws completam. Range linear blefa nos rivers blank.",
        "Defesa até o turn: no flop, todos os pares. Turn blank, second pair ou melhor. Turn dinâmico, top pair e pares com redraw.",
        "Defesa no river: contra B70, todos os top pairs. Contra pote ou mais, só os que não bloqueiam os blefes.",
        "MDF: é a referência para o range defensivo, e a defesa muda com o tamanho da aposta.",
        "Ataque e defesa: se estudam em conjunto.",
      ],
    },
  ],
}

export default m04
