import type { ModuloTeoria } from "@/data/teoria/tipos"

const m11: ModuloTeoria = {
  slug: "value-bet-masterclass",
  tema: "Value Bet Masterclass",
  nome: "Value Bet Masterclass",
  spot: "Tema transversal · extrair valor com as mãos boas · principalmente no river",
  tags: ["Transversal", "River", "Value bet"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "O maior vazamento é o miss value: chegar ao river com uma mão que ganha na maioria das vezes e não apostar, ou apostar um size que deixa dinheiro na mesa.",
        "O range de valor acompanha a conectividade do board: quando o board conecta, ele migra para mãos com muita equity real.",
        "O size acompanha o range de valor: largo e com mãos finas, size baixo. Estreito e concentrado no topo, size alto.",
        "Board que completa flush ou sequência pede size menor, e não maior.",
        "Board realmente blank pede o size mais alto.",
        "Os dois sizes padrão do river em posição: B70 e overbet.",
        "Mão que não bloqueia o que o vilão paga: apostar é o padrão.",
      ],
    },
    {
      tipo: "abas",
      titulo: "Como escolher o size",
      abas: [
        {
          id: "conecta",
          nome: "Board que conecta",
          criterio:
            "O range de valor precisa migrar para mãos com muita equity real, e não só para mãos boas. Um K-10 ou K-J com equity para o board novo pode ser melhor que K-Q ou A-K.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Board seco",
                  cor: "verde",
                  texto:
                    "O range de valor pode ser bem mais largo, com pares únicos e mãos finas.",
                },
                {
                  nome: "Board que conecta",
                  cor: "vermelho",
                  texto:
                    "O valor vai para as mãos com equity real no board que mudou.",
                },
              ],
            },
          ],
        },
        {
          id: "largura",
          nome: "Largura do range",
          criterio: "O size acompanha a composição do range de valor.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Range largo",
                  cor: "verde",
                  texto:
                    "Com mãos finas, size baixo (B25-B40). Senão você força fold de mãos que deveriam continuar pagando.",
                },
                {
                  nome: "Range estreito",
                  cor: "vermelho",
                  texto:
                    "Poucas combinações, todas fortes: o size pode subir bastante, até overbet.",
                },
              ],
            },
          ],
        },
        {
          id: "esquisito",
          nome: "Board esquisito",
          criterio:
            "Quando o board completa flush ou sequência, o adversário já filtrou o range que teme aquela carta. Aumentar o size força fold de mãos boas (Q-x, J-x) que deveriam pagar.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Padrão",
                  cor: "verde",
                  texto: "B70, o size médio.",
                },
                {
                  nome: "Overbet",
                  cor: "vermelho",
                  texto:
                    "Só para as mãos que batem o topo absoluto do range, como a própria sequência ou o flush.",
                },
              ],
            },
          ],
          nota: "Quanto mais esquisito o board, mais restrito o range de valor de três streets (mãos que ganham de dois pares ou melhor) e mais contido o size.",
        },
        {
          id: "blank",
          nome: "Board blank",
          criterio:
            "Blank de verdade é a carta que não completa draw, não pareia e não dá equity nova ao vilão. Aí o top pair dele paga qualquer size, então o size ideal é o mais alto (overbet ou geométrico).",
          blocos: [
            {
              acoes: [
                {
                  nome: "Size",
                  cor: "verde",
                  texto: "O mais alto possível.",
                },
              ],
            },
          ],
          nota: "Cuidado: carta alta no board não é blank automático. A régua é se a carta muda a composição das mãos com que o vilão chega jogando.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Os dois sizes do river em posição",
      intro:
        "Mãos que cobram quase todo o range de call vão para o size alto. Mãos que cobram só parte (um par, um dois pares mediano) ficam no B70.",
      itens: [
        {
          etiqueta: { texto: "B70", cor: "claro" },
          titulo: "O size seguro",
          texto:
            "Range de valor com mãos boas mas não absolutas, e board blank em força relativa: o vilão ainda chega com muito K-x e bluffcatcher médio.",
        },
        {
          etiqueta: { texto: "130-150%+", cor: "verde" },
          titulo: "Overbet",
          texto:
            "O board mudou o nuts a favor das suas melhores mãos, ou o seu range de valor já é estreito e forte, como depois de três streets de aposta.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "River blank ou river que muda o nuts",
      itens: [
        {
          titulo: "River blank",
          texto:
            "O range de bluffcatcher do vilão continua largo e relativamente fraco, porque ele não teve motivo para desistir de K-x. Um size muito alto força fold desnecessário: use B70.",
        },
        {
          titulo: "River que completa um draw perigoso",
          texto:
            "O vilão só chega com bluffcatchers que sobreviveram ao medo daquela carta, então o que chega é mais forte. O overbet não perde valor, porque esse bluffcatcher paga de qualquer jeito.",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Outras regras da aula",
      itens: [
        "Régua do pior valor: a cada street de agressão o range do vilão fica mais filtrado, então o corte do pior X que você aposta sobe uma casa. Se o pior valete apostado no turn foi J-9, no river blank passa a ser J-10.",
        "O corte também depende da posição: de EP o vilão chega com valete mais forte, então o corte de valor é uma casa mais conservador que de BTN.",
        "Unblocking: se a sua mão não bloqueia as mãos que continuam pagando, apostar é o padrão automático. Checar pede um motivo forte, como SPR muito baixo.",
        "Bluffs vêm de mãos com equity futura real: backdoors que se desenvolveram, overcards sobre pares do board e blockers combinados com chance de melhorar.",
        "Em board que completa draw, o bluff ideal bloqueia o valor (as combinações do nuts) e desbloqueia os folds naturais do vilão.",
        "O check-raise de flop do adversário é polarizado, então dá para fazer mais slowplay com monstros. A agressão dele no turn é equity real, então não faça slowplay: negue a equity com pressão.",
        "O check-raise de flop também é uma arma ofensiva: extrai mais das mãos intermediárias do vilão (K-x, dois pares) que ele escaparia mais fácil se você só pagasse.",
        "Em torneio com bounty, o miss value custa também a chance de realizar o bounty do adversário.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "O size acompanha a largura do range de valor.",
        "Board que conecta: valor com equity real. Board esquisito: range restrito e size contido.",
        "Blank de verdade: o size mais alto. Blank em força relativa: B70.",
        "O corte do pior valor sobe uma casa a cada street de agressão.",
        "Mão que desbloqueia o call do vilão: apostar é o padrão.",
        "Bluff com equity futura, bloqueando o valor e desbloqueando os folds.",
        "Em bounty, nunca deixe passar o value bet.",
      ],
    },
  ],
  fonte:
    "theory/11-Value-Bet-Masterclass (guideline). A guideline não traz boards nem mãos de exemplo",
}

export default m11
