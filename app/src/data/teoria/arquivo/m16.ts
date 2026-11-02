import type { ModuloTeoria } from "@/data/teoria/tipos"

const m16: ModuloTeoria = {
  slug: "pko-btn-contra-open",
  tema: "BTN contra 1 open",
  nome: "PKO: BTN contra 1 open",
  spot: "PKO 50% · você no BTN · um jogador abre (UTG1 a CO), todos foldam e os blinds ainda não agiram · de 10bb a 170bb",
  tags: ["Pré-flop", "PKO 50%", "BTN", "Bounty"],
  secoes: [
    {
      tipo: "lista",
      titulo: "Em 30 segundos",
      itens: [
        "O bounty vira dinheiro morto: (KO do opener ÷ KOI) × SI × valor da fase. Quanto maior em relação ao stack do opener, mais o range alarga.",
        "A ordem de entrada das mãos é estável: pares, Ax suited, suited broadways e offsuit broadways entram primeiro.",
        "Alargam o range: opener mais fundo, opener em posição tardia, cobrir o opener, Help Value alto e RP baixo.",
        "Apertam: hero curto contra opener fundo, bounty alto do hero para o stack dele, bolha e hero abaixo da média.",
        "No nó apertado as marginais foldam. No largo, entram até gappers e Ax offsuit.",
        "Stack curto (25bb ou menos): raise ou all-in no lugar de call. Ainda por testar.",
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Como o bounty entra",
      intro:
        "KOI é o bounty inicial, SI é o stack inicial em fichas e KO é o bounty atual de um jogador.",
      itens: [
        {
          titulo: "Dead money",
          texto:
            "(KO do opener ÷ KOI) × SI × valor do KO inicial na fase. Só entra o que você pode ganhar ao eliminar o opener. Exemplo: 30% do field, média de 70,5bb, SI de 25K: com o CO em 3× o KOI, o dead money é cerca de 20bb.",
        },
        {
          titulo: "Help Value",
          texto:
            "(KO do opener ÷ KOI) ÷ (stack do opener ÷ SI). É quanto menos de equity você precisa por causa do bounty. Nas árvores, a mediana é 0,8. Cada +1,0 de Help Value soma cerca de 3 pontos ao call.",
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Valor do KO inicial por fase",
      intro:
        "PKO 50%: o valor do KO inicial dividido pelo SI, conforme o field restante.",
      colunas: 3,
      itens: [
        { titulo: "100% do field", texto: "0,25." },
        { titulo: "70%", texto: "0,27." },
        { titulo: "50%", texto: "0,29." },
        { titulo: "40%", texto: "0,30." },
        { titulo: "30%", texto: "0,314." },
        { titulo: "20%", texto: "0,334." },
        { titulo: "15%", texto: "0,346." },
        { titulo: "10%", texto: "0,36." },
        { titulo: "5%", texto: "0,39." },
        { titulo: "3%", texto: "0,40." },
        { titulo: "1%", texto: "0,434." },
        { titulo: "Mesa final", texto: "0,46 a 0,47. No heads-up, 0,50." },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Help Value e equity necessária",
      colunas: 3,
      itens: [
        { titulo: "Help Value 0,5", texto: "Reduz a equity necessária em 3%." },
        { titulo: "Help Value 1", texto: "Reduz em 5,4%." },
        { titulo: "Help Value 1,5", texto: "Reduz em 7,4%." },
        { titulo: "Help Value 2", texto: "Reduz em 9,3%." },
        { titulo: "Help Value 2,5", texto: "Reduz em 11%." },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "O que alarga ou aperta o range",
      colunas: 2,
      itens: [
        {
          titulo: "Stack do opener",
          texto:
            "Contra um opener mais fundo, alargue o call. Dobrar o stack dele soma cerca de 4 pontos ao call e 5 ao range que continua.",
        },
        {
          titulo: "Cobertura",
          texto:
            "Cobrir o opener dá acesso ao bounty dele: cerca de +2 pontos ao call. Cobrir SB e BB também importa.",
        },
        {
          titulo: "Stack relativo",
          texto:
            "Olhe o stack contra a média do torneio e da mesa: 50bb com média de 90bb é curto, e com média de 25bb é fundo.",
        },
        {
          titulo: "Posição do opener",
          texto:
            "Contra uma posição mais tardia, o range que continua cresce cerca de 1 ponto, e o 3bet também.",
        },
        {
          titulo: "Fase e field",
          texto:
            "As maiores ampliações vêm no early e no mid (até cerca de 16% do field). Na bolha o PKO joga mais apertado. Na mesa final o RP fica perto da metade do de um torneio convencional.",
        },
        {
          titulo: "Risk premium",
          texto:
            "Cada ponto a mais de RP do hero contra o opener tira cerca de 0,5 ponto do range que continua. Acima de +1, aperte. Perto da bolha (RP +6,7) o range cai a cerca de 20%.",
        },
      ],
    },
    {
      tipo: "abas",
      titulo: "A ordem de entrada das mãos",
      intro:
        "Pense no range como uma fila: a mão entra quando o nó é largo o bastante.",
      abas: [
        {
          id: "nucleo",
          nome: "Núcleo",
          criterio: "Entra já nos nós apertados.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Pares e Ax",
                  cor: "verde",
                  texto: "Todos os pares, AKo e todos os Ax suited.",
                },
                {
                  nome: "Suited",
                  cor: "verde",
                  texto:
                    "KQs, KJs, KTs, K9s, QJs, QTs, Q9s, JTs, J9s, K5s a K8s, Q8s, J8s, T9s, T8s, 98s, 97s, 87s, 76s, 65s e 54s.",
                },
                {
                  nome: "Offsuit",
                  cor: "verde",
                  texto: "AQo, AJo, ATo, KQo, KJo e QJo.",
                },
              ],
            },
          ],
          nota: "Com hero curto, parte do núcleo (pares 22 a 55 e Kx suited baixos) sai da fila antes.",
        },
        {
          id: "meio",
          nome: "Entram no meio",
          criterio: "Entram quando o nó é médio.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Mãos",
                  cor: "branco",
                  texto:
                    "K4s, K3s, Q7s, J7s, KTo, QTo, JTo, T7s, A9o, 86s, 75s e 64s.",
                },
              ],
            },
          ],
        },
        {
          id: "largo",
          nome: "Só nos mais largos",
          criterio: "Só entram nos ranges mais largos.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Mãos",
                  cor: "vermelho",
                  texto:
                    "K2s, Q6s a Q2s, J6s a J4s, T6s, T9o, J9o, Q9o, K9o, 96s, 95s, 85s, 74s, 53s, 43s e Ax offsuit de A8o a A4o.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "cartoes",
      titulo: "Largura do nó",
      intro: "Classifique o range total que continua (call mais 3bet) do BTN.",
      colunas: 3,
      itens: [
        {
          etiqueta: { texto: "13% a 22%", cor: "verde" },
          titulo: "Apertado",
          texto: "Hero curto, bolha e RP alto.",
        },
        {
          etiqueta: { texto: "23% a 30%", cor: "vermelho" },
          titulo: "Médio",
          texto: "A maioria das árvores.",
        },
        {
          etiqueta: { texto: "31% a 49%", cor: "claro" },
          titulo: "Largo",
          texto: "Hero fundo, early e opener fundo.",
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Sinais de aperto (T)",
      intro: "Some 1 ponto para cada sinal, de 0 a 4.",
      itens: [
        "Hero com 35bb ou menos e opener com pelo menos 1,3× o stack do hero.",
        "Bounty do hero alto para o stack dele: (bounty do hero ÷ KOI) ÷ (stack do hero ÷ SI em bb) de 1,6 ou mais.",
        "Perto da bolha: jogadores restantes ÷ posições pagas de 2 ou menos.",
        "Stack do hero ÷ média do field de 0,6 ou menos.",
      ],
    },
    {
      tipo: "abas",
      titulo: "Fold, call ou raise",
      abas: [
        {
          id: "nucleo",
          nome: "Núcleo e premium",
          criterio: "O núcleo paga. As mãos premium sobem.",
          blocos: [
            {
              acoes: [
                { nome: "Call", cor: "branco", texto: "O núcleo." },
                {
                  nome: "Raise",
                  cor: "vermelho",
                  texto:
                    "AA, KK e AKo. Às vezes QQ, JJ e TT contra opener fundo.",
                },
              ],
            },
          ],
        },
        {
          id: "marginal",
          nome: "Marginais",
          criterio: "Dependem dos sinais de aperto (T).",
          blocos: [
            {
              acoes: [
                {
                  nome: "T de 2 ou mais",
                  cor: "branco",
                  texto:
                    "Fold. Os suited gappers (T8s, 97s, 86s, 75s, 64s, K9s, Q9s, J9s) são fold na prática.",
                },
                {
                  nome: "T igual a 1",
                  cor: "branco",
                  texto: "Pague só se a árvore parecida paga com folga.",
                },
                { nome: "T igual a 0", cor: "branco", texto: "Siga o nó." },
              ],
            },
          ],
        },
        {
          id: "largo",
          nome: "Nó largo",
          criterio: "Hero fundo e early.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Call",
                  cor: "branco",
                  texto:
                    "Pague as marginais e até offsuit gappers: Q7o foi call certo contra LJ de 92bb com hero de 52bb.",
                },
              ],
            },
          ],
        },
        {
          id: "curto",
          nome: "Stack curto",
          criterio:
            "Hero com 25bb ou menos. Ainda por testar: nenhuma mão assim apareceu nos testes.",
          blocos: [
            {
              acoes: [
                {
                  nome: "Raise ou all-in",
                  cor: "vermelho",
                  texto:
                    "Premium (AQs, AKs, QQ e acima) em raise. Blockers (A2o) contra opener curto e coberto, e 66 a 99 contra CO com hero curto, em all-in.",
                },
                {
                  nome: "Não usar",
                  cor: "branco",
                  texto:
                    "O shove com blockers A5o a A2o contra opener curto e coberto: testado em duas mãos e errou nas duas.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      tipo: "lista",
      titulo: "Passo a passo na mesa",
      itens: [
        "Leia o cabeçalho: % do field, jogadores restantes, posições pagas, média e SI.",
        "Veja os stacks e os bounties do opener, do hero, do SB e do BB. KOI é o menor bounty da mesa.",
        "Calcule o dead money e o Help Value do opener, e a distância da bolha.",
        "Classifique o nó (apertado, médio ou largo) e some o T.",
        "Ache a mão na ordem de entrada.",
        "Decida: o núcleo paga, a marginal só se o nó for largo e o T for baixo, e com stack curto pense em raise ou all-in.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Limites",
      itens: [
        "A regra foi testada só no BTN contra um open, no early e no mid (de cerca de 13% a 95% do field). Não vale para outras posições, contra 3bet, squeeze, mesa final nem bolha de verdade.",
        "Entre árvores, os fatores explicam só cerca de 25% do call. O confiável é a ordem de entrada e o sentido dos efeitos, e não os números exatos.",
        "Os testes foram no modo Close Decisions, com muitas mãos marginais. O placar (84% de precisão e −0,80bb de EV perdido em 70 mãos) não é comparável com o de um modo comum.",
        "A amostra tem 52 árvores, 203 nós e 70 mãos: diferenças de poucos pontos podem ser sorte.",
      ],
    },
    {
      tipo: "lista",
      titulo: "Regras de bolso",
      itens: [
        "Dead money do bounty = (KO do opener ÷ KOI) × SI × valor da fase.",
        "Opener fundo, posição tardia e cobertura alargam o call. Hero curto, bolha e RP alto apertam.",
        "O núcleo paga e as premium sobem.",
        "Marginal só em nó largo e com T baixo.",
        "Suited gappers com T de 2 ou mais: fold.",
        "Stack curto: raise ou all-in, mas ainda por testar.",
      ],
    },
  ],
}

export default m16
