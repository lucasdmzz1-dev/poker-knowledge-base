import type { ModuloTeoria } from "@/data/teoria/tipos"

const m04: ModuloTeoria = {
  slug: "third-barrel",
  tema: "3rd Barrel e vs 3rd Barrel",
  nome: "Third Barrel e vs Third Barrel",
  spot: "Pote single raised · river · o ataque do agressor e a defesa de quem paga",
  tags: ["River", "Ataque e defesa", "MDF"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "O river não é analisado sozinho: a decisão é consequência do que você construiu no flop e, principalmente, no turn.",
        "A decisão de apostar ou desistir não vem só da força da mão, mas da composição do range e da história da mão.",
        "Turn atacado com construção polar: no river você só continua blefando quando os draws completam.",
        "Turn atacado com construção linear: você continua blefando nos rivers blank.",
        "Defendendo, o MDF é a referência para o range: contra aposta de pote, 50%.",
        "Ataque e defesa se estudam juntos.",
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
              acoes: [
                {
                  nome: "Bluff",
                  cor: "verde",
                  texto: "Só quando os draws completam.",
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
              acoes: [
                {
                  nome: "Bluff",
                  cor: "verde",
                  texto: "Nos rivers blank.",
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
      intro: "A defesa é construída street por street.",
      abas: [
        {
          id: "flop",
          nome: "Flop",
          criterio: "Contra c-bet de cerca de 30% do pote.",
          blocos: [
            {
              acoes: [
                { nome: "Continua", cor: "verde", texto: "Todos os pares." },
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
              acoes: [
                {
                  nome: "Continua",
                  cor: "verde",
                  texto: "Second pair ou melhor.",
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
              acoes: [
                {
                  nome: "Continua",
                  cor: "verde",
                  texto:
                    "Top pair, e second pair ou third pair com redraw relevante.",
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
              acoes: [
                { nome: "Defende", cor: "verde", texto: "Todos os top pairs." },
              ],
            },
          ],
        },
        {
          id: "riverpote",
          nome: "River contra pote ou mais",
          criterio:
            "Com aposta grande, a defesa fica mais restrita: você protege o range sem pagar com mãos que ajudam o blefe dele.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Defende",
                  cor: "verde",
                  texto:
                    "Os top pairs que não bloqueiam os blefes naturais do adversário.",
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
        "O river é consequência da estratégia do turn.",
        "Range polar blefa só quando os draws completam. Range linear blefa nos rivers blank.",
        "Defesa no flop: todos os pares. Turn blank: second pair ou melhor. Turn dinâmico: top pair e pares com redraw.",
        "River contra B70: todos os top pairs. Contra pote ou mais: só os que não bloqueiam os blefes.",
        "O MDF é a referência para o range defensivo, e a defesa muda com o tamanho da aposta.",
        "Ataque e defesa se estudam em conjunto.",
      ],
    },
  ],
  fonte:
    "theory/04-Third-Barrel-e-vs-Third-Barrel (guideline). A guideline não traz boards nem mãos de exemplo",
}

export default m04
