# Exercícios — ICM e Risk Premium

## Módulo 13 — ICM e Risk Premium

---

# Contexto

Fase:
Do início do torneio até a mesa final.

Convenções dos exercícios:

- São exercícios de conceito. Não usam mãos específicas, e os stacks citados são ilustrativos.
- "Mais ICM" compara fases: a de 16% do field left contra a de 25%.
- A posição da alternativa correta varia entre os exercícios.

---

# Objetivo dos Exercícios

Os exercícios têm como objetivo fixar:

- O que é o RP e como ele funciona (em toda street, de um jogador contra outro).
- Os fatores que o definem: stacks, fase do torneio e estrutura de pagamento.
- O papel de cada tipo de stack: big stack, mid stack e short stack.
- A aplicação na mesa: open, defesa, blind war e leitura do painel Bubble factor.

---

# Fundamentos do RP

---

## Exercício 01

**Pergunta**

O que o risk premium (RP) mede?

**Alternativas**

a) A diferença entre o seu stack e a média da mesa
b) O equity extra exigido por causa do risco de cair
c) O prêmio extra pago a quem elimina o oponente
d) A margem mínima de lucro do seu ChipEV

**Correção**

Resposta: b) O equity extra exigido por causa do risco de cair

O RP mede o equity extra exigido por causa do risco de cair. A alternativa do prêmio extra a quem elimina descreve o bounty, que é outra coisa e até pode tornar o RP negativo.

**Regra:** Regra 1

---

## Exercício 02

**Pergunta**

Por que o RP encolhe tanto os ranges de pré-flop?

**Alternativas**

a) Porque o RP só pesa nas decisões com all-in
b) Porque os blinds ficam caros demais para pagar
c) Porque as mãos perdem equity só no pré-flop
d) Porque o extra de equity é cobrado em cada street

**Correção**

Resposta: d) Porque o extra de equity é cobrado em cada street

O RP vale em toda street: o extra de equity é cobrado no pré-flop, no flop, no turn e no river, então realizar equity até o fim fica muito difícil e o range inicial encolhe.

**Regra:** Regra 2

---

## Exercício 03

**Pergunta**

O RP de um mesmo spot é:

**Alternativas**

a) O mesmo para todos os jogadores da mão
b) Diferente para cada par de jogadores envolvidos
c) Definido só pela posição do agressor
d) Definido só pela fase do torneio

**Correção**

Resposta: b) Diferente para cada par de jogadores envolvidos

O RP é de um jogador contra outro. O mesmo spot tem RPs diferentes para cada par de jogadores, porque depende de quem cobre quem.

**Regra:** Regra 3

---

## Exercício 04

**Pergunta**

Quais fatores definem o RP?

**Alternativas**

a) Stacks, fase do torneio e estrutura de pagamento
b) Stacks, posição na mesa e tipo de adversário
c) Fase do torneio, buy-in e número de mesas
d) Posição, pagamento e frequência de blefe

**Correção**

Resposta: a) Stacks, fase do torneio e estrutura de pagamento

Os três fatores são stacks, fase do torneio e estrutura de pagamento. Posição e tipo de adversário entram na decisão, mas não são os fatores do RP.

**Regra:** Regra 4

---

## Exercício 05

**Pergunta**

Além do seu stack, quais você olha antes de abrir, em ordem?

**Alternativas**

a) SB, depois BB, depois BTN
b) BTN, depois SB, depois BB
c) BB, depois BTN, depois SB
d) Do menor para o maior stack

**Correção**

Resposta: c) BB, depois BTN, depois SB

Além do seu stack, olhe os que mais podem entrar na mão, nesta ordem: BB, BTN e SB.

**Regra:** Regra 5

---

## Exercício 06

**Pergunta**

Você cobre o BB, mas o BTN cobre você. Seu RP tende a ser maior contra:

**Alternativas**

a) O BB, porque você o cobre
b) O BTN, porque ele cobre você
c) Os dois, por igual
d) Nenhum dos dois

**Correção**

Resposta: b) O BTN, porque ele cobre você

Quem te cobre pode te eliminar, e você dificilmente o elimina. Por isso o seu RP é maior contra quem cobre você, e menor contra quem você cobre.

**Regra:** Regras 5 e 6

---

## Exercício 07

**Pergunta**

Você tem 30bb. Em qual mesa está mais perto de ser big stack?

**Alternativas**

a) Média de 50bb e três stacks maiores que o seu
b) Média de 35bb e dois stacks maiores que o seu
c) Média de 30bb e todos com o mesmo stack
d) Média de 20bb e nenhum stack maior que o seu

**Correção**

Resposta: d) Média de 20bb e nenhum stack maior que o seu

Classifique-se pelo stack relativo à mesa e à média, e não só pelo número de bb. Com 30bb, a mesa de média baixa e sem ninguém maior é a que mais se aproxima de big stack.

**Regra:** Regra 7

---

# Fase do torneio e pagamento

---

## Exercício 08

**Pergunta**

Em qual momento o RP costuma atingir o pico?

**Alternativas**

a) Quando restam 30% do field
b) Na bolha, antes do dinheiro
c) Logo depois da bolha estourar
d) Quando restam cerca de 5% do field

**Correção**

Resposta: b) Na bolha, antes do dinheiro

O ICM pesa a partir de ~30% do field left e atinge o pico na bolha. Depois dela cai muito, e só volta a subir até a mesa final.

**Regra:** Regra 8

---

## Exercício 09

**Pergunta**

Logo depois que a bolha estoura, o que acontece com o RP?

**Alternativas**

a) Cai bastante, e é hora de acumular fichas
b) Sobe, e é hora de jogar com mais cautela
c) Cai, mas o ideal é manter o jogo apertado
d) Fica igual, e o plano da bolha continua

**Correção**

Resposta: a) Cai bastante, e é hora de acumular fichas

Depois que a bolha estoura o ICM cai muito, e esse é o principal momento de fazer fichas. Quem continua apertado nessa hora superestima o RP.

**Regra:** Regra 8

---

## Exercício 10

**Pergunta**

Em relação ao vanilla, o RP do PKO tende a ser:

**Alternativas**

a) Maior, porque há mais fichas em jogo
b) Igual, porque o pagamento é o mesmo
c) Maior, porque o bounty aumenta o risco
d) Menor, porque eliminar alguém tem recompensa

**Correção**

Resposta: d) Menor, porque eliminar alguém tem recompensa

Vanilla tem RP maior que PKO em praticamente todos os cenários, porque no PKO eliminar alguém paga um bounty.

**Regra:** Regra 10

---

## Exercício 11

**Pergunta**

Se o 1º lugar paga muito mais que o 9º, o ICM tende a ser:

**Alternativas**

a) Menor, porque arriscar mais compensa
b) Maior, porque o 9º lugar paga pouco
c) Igual, porque só os pay jumps contam
d) Maior, mas só durante a bolha

**Correção**

Resposta: a) Menor, porque arriscar mais compensa

Quando o 1º paga muito mais que o 9º (top heavy), o ICM é menor, porque é preciso se arriscar mais para chegar ao topo. Nas anotações do instrutor: 20 vezes dá ICM bem menor, 10 vezes dá ICM bem maior.

**Regra:** Regra 10

---

## Exercício 12

**Pergunta**

Quando o RP pode ficar negativo?

**Alternativas**

a) Quando você é o maior stack da mesa
b) Quando a bolha está muito próxima
c) Quando você cobre alguém com bounty
d) Quando o pay jump seguinte é enorme

**Correção**

Resposta: c) Quando você cobre alguém com bounty

No vanilla o RP nunca é negativo. Só fica negativo quando há recompensa por eliminar o oponente, como o bounty, e você o cobre.

**Regra:** Regra 11

---

## Exercício 13

**Pergunta**

Um RP de 10% pede, em geral, uma mão que:

**Alternativas**

a) Seja só melhor que a média do range
b) Domine bem o range do adversário
c) Esmague o range do adversário
d) Tenha apenas equity de draw

**Correção**

Resposta: b) Domine bem o range do adversário

Com 10% o risco e a recompensa são desfavoráveis e você precisa dominar o oponente. Esmagar o oponente é a exigência dos 15%.

**Regra:** Regra 12

---

# Os três tipos de stack

---

## Exercício 14

**Pergunta**

Qual destas é uma forma de o big stack pressionar?

**Alternativas**

a) Jogar mais VPIP, com calls em posição
b) Dar shove apenas com mãos fortes
c) Evitar pots contra stacks médios
d) Apertar o range perto da bolha

**Correção**

Resposta: a) Jogar mais VPIP, com calls em posição

O big stack pressiona jogando mais mãos: mais VPIP, calls em posição, check-raise e leads, além do 3bet. Pressionar não é só 3betar ou dar shove.

**Regra:** Regra 13

---

## Exercício 15

**Pergunta**

Qual destas NÃO é um erro típico do big stack?

**Alternativas**

a) Confrontar outro big stack à toa
b) Subestimar o próprio risk premium
c) Explorar a vantagem de cobrir os outros
d) Ser o capitão da mesa sem pressão a favor

**Correção**

Resposta: c) Explorar a vantagem de cobrir os outros

Explorar a vantagem de cobrir é o que o big stack deve fazer. Os erros são confrontar outro big stack, subestimar o próprio RP, não explorar a vantagem e ser capitão da mesa sem pressão a favor.

**Regra:** Regra 14

---

## Exercício 16

**Pergunta**

O que torna o mid stack "a vítima"?

**Alternativas**

a) O menor RP e pressão só do big stack
b) RP moderado e pressão dos dois lados
c) O maior RP e pressão só do big stack
d) O maior RP e pressão dos dois lados

**Correção**

Resposta: d) O maior RP e pressão dos dois lados

O mid stack tem o maior RP dos três tipos e sofre pressão dos dois lados: do big stack, por cima, e do short stack, porque perder fichas para ele o deixa vulnerável.

**Regra:** Regra 15

---

## Exercício 17

**Pergunta**

Contra um big stack, o mid stack deve evitar principalmente:

**Alternativas**

a) 3bet com bons blockers
b) Calls marginais
c) Shove vs open
d) Folds em spots ruins

**Correção**

Resposta: b) Calls marginais

O mid stack joga menos mãos, mas com agressividade, porque pagar torna difícil realizar equity. Os calls marginais contra big stacks são o erro comum.

**Regra:** Regra 15

---

## Exercício 18

**Pergunta**

Sobre o short stack, qual afirmação está correta?

**Alternativas**

a) Tem o maior RP dos três tipos de stack
b) Deve foldar até o big stack cair
c) Precisa se mexer, mas sem rasgar EV
d) Pode chover qualquer mão para sobreviver

**Correção**

Resposta: c) Precisa se mexer, mas sem rasgar EV

O short stack tem RP moderado e precisa se mexer, numa estratégia de push ou fold. Isso não autoriza chovar mão ruim, porque jogar com EV negativo é um erro.

**Regra:** Regra 16

---

## Exercício 19

**Pergunta**

Com RP alto, qual linha recolhe o dead money sem depender do pós-flop?

**Alternativas**

a) Shove vs open
b) Flat para flutuar o flop
c) Limp com mãos médias
d) Check-raise de flop

**Correção**

Resposta: a) Shove vs open

Com RP alto não dá para flutuar flop nem pagar cbet como no ChipEV. O shove vs open recolhe o dead money no pré-flop e realiza o equity num spot que não depende do pós-flop.

**Regra:** Regra 17

---

# Aplicação na mesa

---

## Exercício 20

**Pergunta**

Um big stack amplia muito o range, mas não há bolha, pay jump nem mesa final por perto. O que tende a acontecer?

**Alternativas**

a) Os outros foldam mais e ele acumula fichas
b) O RP dele sobe e ele precisa apertar
c) Nada muda, porque o RP dele continua baixo
d) Os outros jogam mais VPIP e ele só distribui fichas

**Correção**

Resposta: d) Os outros jogam mais VPIP e ele só distribui fichas

Sem bolha, pay jump ou mesa final por perto, os outros não foldam mais. Eles jogam mais VPIP contra você, e a expansão só distribui fichas. A pressão precisa estar a favor para a expansão render.

**Regra:** Regras 14 e 18

---

## Exercício 21

**Pergunta**

Coberto e enfrentando um open, qual conjunto de ações é o mais coerente?

**Alternativas**

a) Call, 3bet ou fold
b) 3bet, shove ou fold
c) Call ou fold, só
d) Limp, call ou shove

**Correção**

Resposta: b) 3bet, shove ou fold

Coberto e enfrentando um open, a estratégia é 3bet, shove ou fold, sem call. O RP aparece em cada street, e pagar torna quase impossível realizar equity.

**Regra:** Regra 24

---

## Exercício 22

**Pergunta**

Frente ao open de um big stack que cobre o BB, com mais ICM, o BB tende a:

**Alternativas**

a) Defender menos, com mais 3bet e shove
b) Defender mais, pelo preço bom do call
c) Defender menos, com mais calls
d) Defender igual, só pagando mais

**Correção**

Resposta: a) Defender menos, com mais 3bet e shove

O preço de pagar é bom, mas a pressão do adversário e a dificuldade de realizar equity fora de posição tiram o incentivo. Como o range dele é mais largo, o fold equity do 3bet e do shove aumenta.

**Regra:** Regra 26

---

## Exercício 23

**Pergunta**

No blind war, com o SB cobrindo o BB e pressão máxima, qual ação NÃO faz parte da estratégia?

**Alternativas**

a) Raise
b) Shove
c) Limp
d) Fold

**Correção**

Resposta: c) Limp

Com o SB cobrindo o BB e pressão máxima, o range vira raise, shove ou fold. O limp quase desaparece.

**Regra:** Regra 28

---

## Exercício 24

**Pergunta**

Com o SB coberto pelo BB, ao passar de 25% para 16% do field left, o que acontece?

**Alternativas**

a) O raise aumenta e o fold some
b) O raise e o fold aumentam
c) O raise e o fold ficam iguais
d) O raise some e o fold aumenta

**Correção**

Resposta: d) O raise some e o fold aumenta

Quando o SB é coberto pelo BB, o raise some e o range protege o call, com mais fold nas mãos fracas.

**Regra:** Regra 29

---

## Exercício 25

**Pergunta**

Para saber o quão short você está na bolha, o que importa?

**Alternativas**

a) Só a média de stacks do torneio
b) A distribuição dos stacks, e não só a média
c) Só a quantidade de bb que você tem
d) A posição que você ocupa na mesa

**Correção**

Resposta: b) A distribuição dos stacks, e não só a média

Compare o seu stack com a distribuição da mesa, e não só com a média ou com o número de bb. O mesmo stack pode ter RP bem diferente conforme quantos jogadores estão mais curtos.

**Regra:** Regra 31

---

## Exercício 26

**Pergunta**

Qual destes NÃO é um dos quatro passos de aplicação prática do instrutor?

**Alternativas**

a) Identificar o seu tipo de stack
b) Avaliar a fase do torneio
c) Calcular o ICM exato de cada mão
d) Explorar ou proteger-se pela hierarquia

**Correção**

Resposta: c) Calcular o ICM exato de cada mão

Os quatro passos do instrutor, nas anotações: identifique o tipo de stack, avalie a fase, ajuste as decisões pelo RP e explore ou proteja-se conforme a hierarquia. Calcular o ICM exato de cada mão não está entre eles.

**Regra:** Parte 4 (anotações do instrutor)

---

## Exercício 27

**Pergunta**

No painel Bubble factor, uma célula vermelha na linha do CO e na coluna do LJ indica:

**Alternativas**

a) RP alto do CO contra o LJ
b) RP alto do LJ contra o CO
c) RP baixo do CO contra o LJ
d) Stack curto do LJ

**Correção**

Resposta: a) RP alto do CO contra o LJ

No painel Bubble factor do GTO Wizard, a linha é a posição que decide, a coluna é o adversário, e o vermelho indica RP alto. Uma célula vermelha na linha do CO e na coluna do LJ é o RP alto do CO contra o LJ.

**Regra:** Painel Bubble factor (Parte 3)

---

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/13-ICM/README|README]] · [[theory/13-ICM/01-Guideline|01-Guideline]]

<!-- graphify-links:end -->
