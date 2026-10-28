# Exercícios — Bet vs Missed C-Bet

## Módulo 15 — Bet vs Missed C-Bet

---

# Contexto

Spot:
O adversário abre pré-flop, você paga em posição, e ele dá check no flop (missed c-bet). A decisão é sua, em posição. A estratégia vale como um todo, e não é específica de um stack.

Convenções dos exercícios:

- Os exercícios com board especificam os naipes. Os boards seguem os exemplos do guideline em imagem (A♠ K♥ T♦, J♠ 9♥ 6♣, Q♠ 5♥ 3♣, A♠ 9♠ 8♠ e K♠ K♥ 7♣). Os naipes dos outros boards são ilustrativos.
- Os exercícios são de conceito e de leitura de situação.
- A posição da alternativa correta varia entre os exercícios.
- A referência de cada correção é a regra do guideline.

---

# Objetivo dos Exercícios

Fixar:

- A lógica dos buckets de frequência (100%, 75%, 50% e 25%).
- Os sizes (B25 e B50) e o motivo de cada um.
- A classificação do board (conectado high, semi conectado, seco, monotone e dobrado).
- Como dividir as mãos na mesa e como ajustar por posição e stack.
- O que muda no turn e no river.

---

# A nova estratégia e os buckets

---

## Exercício 01

**Pergunta**

Qual era o problema da estratégia antiga de bet vs missed?

**Alternativas**

a) Apostava pouco o flop, e o lucro caía
b) Era linear e deixava buracos nas ruas seguintes
c) Usava sizes altos demais em todo board
d) Dava check com todas as mãos fortes

**Correção**

Resposta: b) Era linear e deixava buracos nas ruas seguintes

A estratégia antiga apostava sempre o melhor de cada grupo. Ela ganhava no flop, mas deixava poucas mãos para dar raise no turn, pagar turn e river e apostar o river.

**Regra:** Regra 1

---

## Exercício 02

**Pergunta**

O que o vilão ganha quando você não tem mãos boas para dar raise no turn?

**Alternativas**

a) Realiza mais equity do que deveria e rouba EV
b) Passa a foldar mais no river sem motivo
c) Deixa de apostar o turn por medo do raise
d) Paga menos no flop e perde valor

**Correção**

Resposta: a) Realiza mais equity do que deveria e rouba EV

Sem mãos fortes para o raise, o vilão realiza mais equity do que deveria, e isso rouba EV de você.

**Regra:** Regra 1

---

## Exercício 03

**Pergunta**

Qual é a lógica por trás dos buckets de frequência?

**Alternativas**

a) Mãos de valor em 100% e todo o blefe em 25%
b) Todas as mãos do mesmo tipo na mesma frequência
c) Mãos mais fortes em frequências maiores, mais fracas em menores
d) Mãos fortes em 50%, para proteger o range de check

**Correção**

Resposta: c) Mãos mais fortes em frequências maiores, mais fracas em menores

Quando você coloca dinheiro com frequência alta, quer ter mãos melhores. Com frequência baixa, a aposta vem das mãos piores. Em cada bucket entram mãos de valor e de bluff.

**Regra:** Regra 3

---

## Exercício 04

**Pergunta**

Em quantos boards se aposta 100% do range?

**Alternativas**

a) Em boards secos, porque há muito thin value
b) Em boards conectados, para pressionar o vilão
c) Em boards monotone, por causa do flush
d) Em nenhum, porque o agressor que deu check não está capado

**Correção**

Resposta: d) Em nenhum, porque o agressor que deu check não está capado

Fora de posição o vilão pode ter trinca, top pair e dois pares no check. Jogadores modernos não estão capados, então nenhum board se aposta 100%.

**Regra:** Regra 2

---

## Exercício 05

**Pergunta**

Em qual bucket vai a pior trinca?

**Alternativas**

a) 75%, para proteger o range de check
b) 50%, para induzir a aposta do vilão
c) 100%, em qualquer board sem exceção
d) 100%, menos no board ultraconectado high

**Correção**

Resposta: d) 100%, menos no board ultraconectado high

A pior trinca vai sempre em 100%. A exceção é o board ultraconectado high (AKT, QJT, QJ9, KJ9), onde não existe mão em 100%.

**Regra:** Regra 4

---

## Exercício 06

**Pergunta**

Em qual destes flops existe bucket de 100%?

**Alternativas**

a) A♠ K♥ T♦
b) A♠ 9♠ 8♠
c) Q♠ 5♥ 3♣
d) K♠ K♥ 7♣

**Correção**

Resposta: c) Q♠ 5♥ 3♣

No seco, overpairs e trincas vão em 100%. O conectado high, o monotone e o dobrado não têm bucket de 100%.

**Regra:** Regra 10

---

## Exercício 07

**Pergunta**

Onde ficam os draws, em geral?

**Alternativas**

a) Nos buckets do meio, em 50%
b) No bucket de 100%, pela equity que têm
c) No bucket de 25%, como bluff puro
d) Sempre no check, para realizar equity

**Correção**

Resposta: a) Nos buckets do meio, em 50%

Os draws tendem a ficar em buckets médios e quase nunca vão para o extremo. O draw com backdoor aposta, e o sem backdoor dá check.

**Regra:** Regra 5

---

# Os sizes e o grupo de mãos

---

## Exercício 08

**Pergunta**

No flop K♠ Q♥ J♦ (três cartas Broadway), qual underpair é o melhor candidato a bluff?

**Alternativas**

a) 9-9
b) 4-4
c) 8-8
d) 7-7

**Correção**

Resposta: b) 4-4

O underpair baixo faz foldar pares melhores e ainda vira bluff em rivers que conectam. O 7-7, o 8-8 e o 9-9 não atacam nada e ficam em 0%.

**Regra:** Regra 6

---

## Exercício 09

**Pergunta**

Quais sizes a estratégia usa no bet vs missed?

**Alternativas**

a) B33 e B70
b) B50 e B75
c) B25 e B50
d) B40 e B100

**Correção**

Resposta: c) B25 e B50

Só dois sizes: B25 (thin value) e B50 (sem thin value).

**Regra:** Regra 7

---

## Exercício 10

**Pergunta**

Quando se usa o B25?

**Alternativas**

a) Quando o board é conectado e high
b) Quando você só tem mãos muito fortes
c) Quando o vilão paga pouco no flop
d) Quando você quer thin value, com muitas mãos apostando

**Correção**

Resposta: d) Quando você quer thin value, com muitas mãos apostando

Quanto mais mãos de valor você aposta, menor o size. Com muitas mãos apostando (inclusive pares baixos), o B25 extrai de Ax high e Kx high.

**Regra:** Regras 7 e 8

---

## Exercício 11

**Pergunta**

Por que o instrutor não usa o B70?

**Alternativas**

a) É difícil prever quem paga, e o jogador não replica o solver
b) O B70 extrai menos valor que o B50
c) O B70 é pequeno demais para o flop
d) O B70 só funciona fora de posição

**Correção**

Resposta: a) É difícil prever quem paga, e o jogador não replica o solver

Com B70 a composição do range de call fica imprevisível. O B50 extrai mais valor que sizes menores, reduz o SPR e deixa o grupo que paga previsível.

**Regra:** Regra 7

---

## Exercício 12

**Pergunta**

O que define o size no flop?

**Alternativas**

a) A mão que você tem
b) O grupo de mãos que você aposta
c) O stack do vilão
d) A posição do agressor

**Correção**

Resposta: b) O grupo de mãos que você aposta

O size acompanha o grupo de mãos que o range pede, e não a mão que você tem. Um bluff ruim não pede size baixo, e uma mão forte não pede size baixo para o vilão pagar mais.

**Regra:** Regra 8

---

## Exercício 13

**Pergunta**

No flop A♠ K♥ 2♣, qual é o size e o bucket do AJ?

**Alternativas**

a) B25, em 100%
b) B25, em 50%
c) B50, em 75%
d) B50, em 100%

**Correção**

Resposta: c) B50, em 75%

O board é robusto: os pares piores não pagam, então não há thin value e o size é B50. O AJ vai em 75%, e não em 100% como era antes.

**Regra:** Regra 8

---

# Os tipos de flop

---

## Exercício 14

**Pergunta**

No flop A♠ 5♥ 3♣, qual é o size?

**Alternativas**

a) B25
b) B50
c) B70
d) Check com o range todo

**Correção**

Resposta: a) B25

Num Ace-high baixo os pares baixos tomam call de pares piores, então há muito thin value e o size é B25.

**Regra:** Regra 8

---

## Exercício 15

**Pergunta**

Que tipo de flop é J♠ 9♥ 6♣?

**Alternativas**

a) Conectado high
b) Semi conectado
c) Seco
d) Dobrado

**Correção**

Resposta: b) Semi conectado

É o exemplo do guideline para o flop semi conectado, com size B50. A pior trinca, o top two pair e o overpair vão em 100%.

**Regra:** Regra 10

---

## Exercício 16

**Pergunta**

Contra o HJ, como tratar o flop 9♠ 8♥ 6♣?

**Alternativas**

a) Seco, porque as cartas são baixas
b) Conectado high, porque tem sequência
c) Semi conectado, porque o range dele interage com o board
d) Semi conectado só contra o BB

**Correção**

Resposta: c) Semi conectado, porque o range dele interage com o board

O HJ tem Q-T, T-J e os suited que interagem com o 9-8-6. Quanto maior a interação do range dele, mais cautela.

**Regra:** Regra 12

---

## Exercício 17

**Pergunta**

Como tratar o flop 8♠ 5♥ 4♣?

**Alternativas**

a) Como seco, porque tem muito menos draws
b) Como semi conectado, por causa do 6
c) Como conectado, por causa do 8 e do 4
d) Como semi conectado, por causa do 9

**Correção**

Resposta: a) Como seco, porque tem muito menos draws

O 8-5-4 tem muito menos draws e menos interação, então dá para fazer valor com mais mãos e tratá-lo como seco. O 8-7-5, por causa dos noves, pede mais cautela.

**Regra:** Regra 12

---

## Exercício 18

**Pergunta**

Qual tipo de board é 8♠ 7♥ 6♣ no CO contra o BTN?

**Alternativas**

a) Seco
b) Semi conectado
c) Dobrado seco
d) Conectado

**Correção**

Resposta: d) Conectado

CO contra BTN é um confronto com muita interação, então o 8-7-6 é tratado como board conectado.

**Regra:** Regra 12

---

## Exercício 19

**Pergunta**

No flop J♠ 3♥ 3♣ (dobrado seco), quais são os buckets?

**Alternativas**

a) 50% das melhores e 25% do restante
b) 75% das melhores e 50% do restante
c) 100% das melhores e 50% do restante
d) 75% de todas as mãos

**Correção**

Resposta: b) 75% das melhores e 50% do restante

No dobrado seco dá para ter muito thin value, e o vilão paga muito Ax high. No carregado (J-J-9) são 50% das melhores e 25% do restante.

**Regra:** Regra 11

---

## Exercício 20

**Pergunta**

No flop monotone A♠ 9♠ 8♠, em que bucket vai o flush?

**Alternativas**

a) 100%
b) 75%
c) 50%
d) 25%

**Correção**

Resposta: c) 50%

No monotone a trinca e o BDSD vão em 75%. O flush vai em 50% com dois pares, top pair e draws, e o resto em 25%. Os melhores flushes apostam e os piores dão check.

**Regra:** Regra 10

---

## Exercício 21

**Pergunta**

Qual é a frequência média de aposta no flop conectado high (AKT)?

**Alternativas**

a) De 30% a 35%
b) De 55% a 65%
c) De 75% a 85%
d) De 45% a 55%

**Correção**

Resposta: a) De 30% a 35%

O conectado high é o pior board para o jogador em posição: a frequência média fica em 30% a 35%. Em boards secos ela sobe para 55% a 65%.

**Regra:** Regra 10

---

# Como dividir na mesa

---

## Exercício 22

**Pergunta**

Ao randomizar o par do board com um randomizador, o que você deve sortear?

**Alternativas**

a) Todos os combos da mão (por exemplo todos os 6-5)
b) Só o combo do naipe do flush draw
c) Só os combos offsuit da mão
d) Apenas o combo com o melhor kicker

**Correção**

Resposta: a) Todos os combos da mão (por exemplo todos os 6-5)

Randomizar um combo só obriga a randomizar tudo, a qualquer momento. O correto é randomizar a mão inteira.

**Regra:** Regra 13

---

## Exercício 23

**Pergunta**

Com flush draw no board, quais pares apostam?

**Alternativas**

a) Os que não têm o naipe
b) Os que têm o naipe do flush draw
c) Só os pares mais altos
d) Todos, em 100%

**Correção**

Resposta: b) Os que têm o naipe do flush draw

O par com o backdoor (o naipe do flush draw) já bate o bucket de 50% e aposta. Os sem o naipe dão check.

**Regra:** Regra 14

---

## Exercício 24

**Pergunta**

Por que preferir o naipe do board ao escolher quem aposta?

**Alternativas**

a) Os combos do naipe são os mais raros
b) O naipe elimina os blefes do vilão
c) Mais equity, menos raise e mais realização até o river
d) O naipe facilita o check-raise no flop

**Correção**

Resposta: c) Mais equity, menos raise e mais realização até o river

A mão com o naipe do board tem mais equity, toma menos raise e realiza mais até o river.

**Regra:** Regra 13

---

## Exercício 25

**Pergunta**

No jogo short stack, como ajustar a escolha entre as mãos com e sem o naipe?

**Alternativas**

a) Mais check com a mão do naipe, mais aposta com a sem naipe
b) Mais aposta com a do naipe, mais check com a sem naipe
c) Apostar todas as mãos com naipe
d) Dar check com todas as mãos do bucket

**Correção**

Resposta: a) Mais check com a mão do naipe, mais aposta com a sem naipe

No short stack você não consegue apostar, pagar um check-raise e desenvolver o pós-flop, então quer realizar mais a equity das mãos com o naipe.

**Regra:** Regra 15

---

# Ajustes por posição e stack

---

## Exercício 26

**Pergunta**

O que muda contra EP ou MP em relação ao BB?

**Alternativas**

a) Nada: o range é o mesmo do BB
b) O range perde Ax offsuit baixos e muitos combos, e o jogo muda
c) O vilão passa a ter mais mãos fracas
d) O vilão passa a ter menos mãos fortes

**Correção**

Resposta: b) O range perde Ax offsuit baixos e muitos combos, e o jogo muda

O BB tem Ax offsuit baixos e muito mais combinações. Contra EP e MP o range não tem essas mãos, e o jogo muda.

**Regra:** Regra 16

---

## Exercício 27

**Pergunta**

Se o range do vilão é mais tight (por exemplo EP), o que fazer com as frequências?

**Alternativas**

a) Subir todas as frequências para 100%
b) Reduzir todas as frequências pela metade
c) Mantê-las, porque o range encolhe de forma proporcional
d) Apostar só a pior trinca e dar check no resto

**Correção**

Resposta: c) Mantê-las, porque o range encolhe de forma proporcional

O vilão perde mãos fracas e fortes ao mesmo tempo, então o equilíbrio fica parecido. A frequência de 75% é das melhores mãos, e não do range.

**Regra:** Regra 17

---

## Exercício 28

**Pergunta**

Num stack mais deep, com uma mão forte no check, o que cuidar?

**Alternativas**

a) Não reabrir a ação de graça, deixando o vilão blefar
b) Dar check sempre, para induzir o vilão
c) Reduzir o size para B25 e apostar tudo
d) Apostar todo o range, sem frequências

**Correção**

Resposta: a) Não reabrir a ação de graça, deixando o vilão blefar

O check reabre a ação, e o vilão pode blefar com as mãos dele. Num stack mais deep, aposte de forma mais polarizada.

**Regra:** Regra 18

---

# Turn e river

---

## Exercício 29

**Pergunta**

Em que street se frequencia as mãos?

**Alternativas**

a) Nas três streets, do mesmo jeito
b) No turn e no river, mas não no flop
c) Só no river, com os buckets de 25%
d) No flop. No turn e no river segue o que você já faz

**Correção**

Resposta: d) No flop. No turn e no river segue o que você já faz

A frequência é do flop. No turn e no river você continua com a lógica que já usa.

**Regra:** Regra 19

---

## Exercício 30

**Pergunta**

No turn, sem thin value (poucos pares apostando), qual é a linha?

**Alternativas**

a) B25 com o range inteiro
b) Size alto ou check, sem meio-termo
c) B40 com todos os top pairs
d) Geométrico em todo turn

**Correção**

Resposta: b) Size alto ou check, sem meio-termo

O size de thin value só existe quando você quer thin value. Se você não vai ter muitos pares apostando, o size é sempre alto.

**Regra:** Regra 20

---

## Exercício 31

**Pergunta**

Ás no turn e você não quer thin value. Qual size?

**Alternativas**

a) B25
b) B50
c) Pote
d) B70

**Correção**

Resposta: c) Pote

O vilão tem muito Ás melhor que o seu, então você não quer thin value e usa o size mais alto.

**Regra:** Regra 20

---

## Exercício 32

**Pergunta**

Turn dinâmico de carta alta e você quer apostar muitos top pairs. Qual size?

**Alternativas**

a) Pote
b) Overbet de 150%
c) B25
d) B70

**Correção**

Resposta: d) B70

Quando há mudança de nuts e você quer apostar muitos top pairs, o size é mais baixo, B70. Quando não há mudança de nuts, o range de valor é mais restrito e o size sobe.

**Regra:** Regra 20

---

## Exercício 33

**Pergunta**

Como é o river na estratégia?

**Alternativas**

a) Um só size, de B33
b) Três sizes, do B25 ao all-in
c) Só check, sem apostar
d) Um size médio (nunca menor que B70) e um muito alto

**Correção**

Resposta: d) Um size médio (nunca menor que B70) e um muito alto

No river use um size médio (nunca menor que B70) e um muito alto (150% do pote ou all-in, conforme o SPR).

**Regra:** Regra 22

---

## Exercício 34

**Pergunta**

Uma mão do topo do seu range de check no turn. O que ela faz no river?

**Alternativas**

a) Aposta sempre
b) Dá check de novo
c) Aposta só com o naipe do board
d) Aposta pouco, com B25

**Correção**

Resposta: a) Aposta sempre

Se a mão faz parte do topo do seu range de check no turn, ela sempre aposta o river.

**Regra:** Regra 22

---

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/15-Bet-vs-Missed/README|theory/15-Bet-vs-Missed]]

**Relacionadas no mesmo módulo:** [[theory/15-Bet-vs-Missed/01-Guideline|01-Guideline]]

<!-- graphify-links:end -->
