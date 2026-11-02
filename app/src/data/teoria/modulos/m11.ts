import type { ModuloTeoria } from "@/data/teoria/tipos"

const m11: ModuloTeoria = {
  slug: "value-bet-masterclass",
  tema: "Value Bet Masterclass",
  nome: "Value Bet Masterclass",
  spot: "Tema transversal · extrair valor com as mãos boas · principalmente no river",
  tags: ["Transversal", "River", "Value bet"],
  videos: [{ id: "gFmlK5jre9s" }],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "O maior leak é o miss value: chegar ao river com uma mão que ganha na maioria das vezes e não apostar, ou apostar um size que deixa dinheiro na mesa.",
        "Board que conecta: o range de valor migra para mãos com muita equity real.",
        "Size acompanha o range de valor: largo e com mãos finas, size baixo. Estreito e concentrado no topo, size alto.",
        "Board que completa flush ou sequência: pede size menor, e não maior.",
        "Board realmente blank: pede o size mais alto.",
        "Dois sizes padrão do river em posição: B70 e overbet.",
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
            "Quando o turn ou o river conecta, o range de valor precisa migrar para mãos com muita equity real, e não só para mãos boas. Na aula, num turn que conecta, K-10 e K-J ficam melhores que K-Q e A-K.",
          blocos: [
            {
              cartas: ["Ks", "9d", "4c"],
              turn: "Th",
              rotulo: "K-9-4, turn T que conecta (board ilustrativo)",
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto:
                    "As mãos com equity real no turn que conecta: K-10 virou dois pares e K-J ganhou duas pontas.",
                  maos: [
                    { nome: "K-10: dois pares", cartas: ["Kh", "Tc"] },
                    {
                      nome: "K-J: top pair + duas pontas",
                      cartas: ["Kd", "Jd"],
                    },
                  ],
                },
                {
                  nome: "Menos valor",
                  cor: "branco",
                  texto:
                    "Mãos boas, mas que não melhoraram com o turn que conecta.",
                  maos: [
                    { nome: "A-K", cartas: ["Ah", "Kc"] },
                    { nome: "K-Q", cartas: ["Kc", "Qh"] },
                  ],
                },
              ],
            },
          ],
          nota: "Board seco, sem conectar: o range de valor pode ser bem mais largo, com pares únicos e mãos finas.",
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
              cartas: ["Ks", "9s", "4d", "2c", "7s"],
              rotulo: "O flush de espadas completa no river",
              acoes: [
                {
                  nome: "Padrão B70",
                  cor: "verde",
                  texto: "B70, o size médio, para as mãos boas.",
                  maos: [
                    { nome: "Top pair", cartas: ["Kh", "Qd"] },
                    { nome: "Dois pares", cartas: ["Kc", "9c"] },
                  ],
                },
                {
                  nome: "Overbet",
                  cor: "verde",
                  texto:
                    "Só para as mãos que batem o topo absoluto do range, como o próprio flush.",
                  maos: [{ nome: "Nut flush", cartas: ["As", "5s"] }],
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
              cartas: ["Ks", "8d", "3c", "5h", "2s"],
              rotulo: "River 2: blank de verdade",
              acoes: [
                {
                  nome: "Bet por valor",
                  cor: "verde",
                  texto: "O size mais alto possível.",
                  maos: [
                    { nome: "Dois pares", cartas: ["Kh", "8h"] },
                    { nome: "Trinca", cartas: ["3h", "3d"] },
                  ],
                },
              ],
            },
          ],
          nota: "Carta alta no board não é blank automático. A régua é se a carta muda a composição das mãos com que o vilão chega jogando.",
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
          maos: [{ nome: "Top pair", cartas: ["Kh", "Qd"] }],
        },
        {
          etiqueta: { texto: "130-150%+", cor: "verde" },
          titulo: "Overbet",
          texto:
            "O board mudou o nuts a favor das suas melhores mãos, ou o seu range de valor já é estreito e forte, como depois de três streets de aposta.",
          maos: [{ nome: "Nuts", cartas: ["As", "5s"] }],
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
          cartas: ["Ks", "8d", "3c", "5h"],
          turn: "2s",
        },
        {
          titulo: "River que completa um draw perigoso",
          texto:
            "O vilão só chega com bluffcatchers que sobreviveram ao medo daquela carta, então o que chega é mais forte. O overbet não perde valor, porque esse bluffcatcher paga de qualquer jeito.",
          cartas: ["Ks", "9s", "4d", "2c"],
          turn: "7s",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Outras regras da aula",
      itens: [
        "Régua do pior valor: a cada street de agressão o range do vilão fica mais filtrado, então o corte do pior X que você aposta sobe uma casa. Se o pior valete apostado no turn foi J-9, no river blank passa a ser J-10.",
        "Corte pela posição: de EP o vilão chega com valete mais forte, então o corte de valor é uma casa mais conservador que de BTN.",
        "Unblocking: se a sua mão não bloqueia as mãos que continuam pagando, apostar é o padrão automático. Checar pede um motivo forte, como SPR muito baixo.",
        "Bluffs com equity futura: backdoors que se desenvolveram, overcards sobre pares do board e blockers combinados com chance de melhorar.",
        "Bluff em board que completa draw: o ideal bloqueia o valor (as combinações do nuts) e desbloqueia os folds naturais do vilão.",
        "Check-raise de flop do adversário: é polarizado, então dá para fazer mais slowplay com monstros. A agressão dele no turn é equity real, então não faça slowplay: negue a equity com pressão.",
        "Seu check-raise de flop: também é uma arma ofensiva. Extrai mais das mãos intermediárias do vilão (K-x, dois pares) que ele escaparia mais fácil se você só pagasse.",
        "Bounty: em torneio com bounty, o miss value custa também a chance de realizar o bounty do adversário.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Size: acompanha a largura do range de valor.",
        "Board que conecta: valor com equity real. Board esquisito: range restrito e size contido.",
        "Blank de verdade: o size mais alto. Blank em força relativa: B70.",
        "Pior valor: o corte sobe uma casa a cada street de agressão.",
        "Mão que desbloqueia o call do vilão: apostar é o padrão.",
        "Bluff: com equity futura, bloqueando o valor e desbloqueando os folds.",
        "Bounty: nunca deixe passar o value bet.",
      ],
    },
  ],
}

export default m11
