# Exercícios — PKO

## Módulo 16 — PKO

---

# Contexto

Spot:
BTN diante de um open, PKO 50%, Early e Mid.

Convenções dos exercícios:

- Os exercícios com mãos usam situações reais do Trainer (stacks em bb, e o bounty quando importa). O naipe só importa para saber se a mão é suited (por isso vem no nome: KTs, Q7o).
- Os exercícios com "Regra ainda pendente" têm a resposta do solver, mas a regra do módulo ainda não cobre o caso.
- A posição da alternativa correta varia entre os exercícios.
- A referência de cada correção é a regra do guideline.

---

# Objetivo dos Exercícios

Fixar:

- O dead money do bounty e o Help Value.
- O que alarga ou aperta o range do BTN.
- A ordem de entrada das mãos e a largura do nó.
- A decisão em situações reais do Trainer.

---

# Dead money e Help Value

---

## Exercício 01

**Pergunta**

Qual é o valor do KO inicial, em fração do stack inicial, quando restam 50% do field?

**Alternativas**

a) 0,25
b) 0,29
c) 0,33
d) 0,40

**Correção**

Resposta: b) 0,29

Na tabela, 100% do field vale 0,25, 50% vale 0,29 e 30% vale 0,314. O valor cresce conforme o field diminui.

**Regra:** Regra 2

---

## Exercício 02

**Pergunta**

Em qual fase o KO inicial vale mais em relação ao stack inicial?

**Alternativas**

a) Início do torneio, com 0,25 do SI
b) Bolha, com 0,36 do SI
c) Mesa final, com 0,30 do SI
d) Heads-up, com 0,50 do SI

**Correção**

Resposta: d) Heads-up, com 0,50 do SI

O valor sobe de 0,25 no início até 0,46 a 0,47 na mesa final e 0,50 no heads-up.

**Regra:** Regra 2

---

## Exercício 03

**Pergunta**

Qual é a fórmula do dead money do bounty do opener?

**Alternativas**

a) (KO do opener ÷ KOI) × SI × valor da fase
b) (KO do hero ÷ KOI) × SI × valor da fase
c) KOI ÷ KO do opener × SI × valor da fase
d) (KO do opener + KO do hero) × valor da fase

**Correção**

Resposta: a) (KO do opener ÷ KOI) × SI × valor da fase

Só entra o bounty que podemos ganhar: o do opener, em múltiplos do KOI, vezes o stack inicial e o valor da fase.

**Regra:** Regra 1

---

## Exercício 04

**Pergunta**

Opener com KO de 3× o inicial e stack de 1,5 SI. Qual é o Help Value e a redução de equity?

**Alternativas**

a) 1,0 e ~5,4%
b) 1,5 e ~7,4%
c) 2,0 e ~9,3%
d) 4,5 e ~11%

**Correção**

Resposta: c) 2,0 e ~9,3%

Help Value = 3 ÷ 1,5 = 2,0, que na régua dá ~9,3% a menos de equity.

**Regra:** Regra 3

---

## Exercício 05

**Pergunta**

O bounty do próprio hero entra no dead money?

**Alternativas**

a) Sim, soma ao do opener
b) Não, só entra o que se ganha ao eliminar o oponente
c) Sim, mas pela metade
d) Só quando o hero cobre o opener

**Correção**

Resposta: b) Não, só entra o que se ganha ao eliminar o oponente

O dead money é o que podemos ganhar. O bounty do hero em risco pesa em outro lugar: é um dos sinais de aperto (Regra 13).

**Regra:** Regra 1

---

## Exercício 06

**Pergunta**

O Help Value sobe de 0,5 para 2,0. A redução de equity necessária vai de...

**Alternativas**

a) 3% para 9,3%
b) 3% para 5,4%
c) 5,4% para 11%
d) 7,4% para 11%

**Correção**

Resposta: a) 3% para 9,3%

Na régua, 0,5 vale 3%, 1 vale 5,4%, 1,5 vale 7,4%, 2 vale 9,3% e 2,5 vale 11%.

**Regra:** Regra 3

---

# Fatores que movem o range

---

## Exercício 07

**Pergunta**

O stack do opener dobra, com as outras condições iguais. O que acontece com o call do BTN?

**Alternativas**

a) Cai ~4 pontos
b) Não muda
c) Sobe ~4 pontos
d) Sobe ~15 pontos

**Correção**

Resposta: c) Sobe ~4 pontos

Dentro de uma mesma árvore, dobrar o stack do opener soma ~3,8 pontos ao call e ~4,7 ao range que continua. O sentido é confiável, o número é aproximado.

**Regra:** Regra 4

---

## Exercício 08

**Pergunta**

Cobrir o opener muda o call do BTN em quanto?

**Alternativas**

a) Soma ~2 pontos
b) Soma ~10 pontos
c) Tira ~2 pontos
d) Não muda nada

**Correção**

Resposta: a) Soma ~2 pontos

Cobrir dá acesso ao bounty dele: +2,2 pontos ao call e +2,3 ao range que continua.

**Regra:** Regra 5

---

## Exercício 09

**Pergunta**

O RP do hero contra o opener sobe 1 ponto. O que acontece com o range que continua?

**Alternativas**

a) Sobe ~0,5 ponto
b) Cai ~0,5 ponto
c) Cai ~5 pontos
d) Não muda

**Correção**

Resposta: b) Cai ~0,5 ponto

Cada ponto de RP tira ~0,5 do range que continua. Perto da bolha (RP +6,7) o range chegou a ~20%.

**Regra:** Regra 9

---

## Exercício 10

**Pergunta**

Em que fases vêm as maiores ampliações de range no PKO?

**Alternativas**

a) Bolha
b) Late game
c) Mesa final
d) Early e Mid

**Correção**

Resposta: d) Early e Mid

Quando o dead money é maior em relação ao pote, o desconto é maior. Depois o valor em fichas e o incentivo caem, e o ICM pesa mais.

**Regra:** Regra 8

---

## Exercício 11

**Pergunta**

Na mesa final de um PKO, o RP em relação ao torneio convencional fica...

**Alternativas**

a) Igual, e o range não muda
b) Maior, e o range aperta
c) Em torno da metade, e o range de open e flat alarga
d) Em torno de zero, e vale all-in sempre

**Correção**

Resposta: c) Em torno da metade, e o range de open e flat alarga

O RP fica em torno da metade, então se abre e paga mais largo. Em compensação há menos fold equity ao pressionar com all-in.

**Regra:** Regra 8

---

## Exercício 12

**Pergunta**

Por que o PKO joga mais apertado na bolha, apesar do RP menor?

**Alternativas**

a) Há muito menos fold equity
b) O bounty deixa de valer
c) O RP é maior que no vanilla
d) Os stacks ficam todos fundos

**Correção**

Resposta: a) Há muito menos fold equity

Mesmo com RP menor, quem pressiona encontra menos fold, então os ranges de call, jam e re-steal são diferentes dos do vanilla.

**Regra:** Regra 8

---

## Exercício 13

**Pergunta**

Hero com 50bb. Em qual média do torneio esse stack é mais curto?

**Alternativas**

a) Média de 25bb
b) Média de 90bb
c) Média de 50bb
d) Não depende da média

**Correção**

Resposta: b) Média de 90bb

Com média de 90bb, 50bb é meio stack e o bounty do hero vale muito para os outros. Com média de 25bb, 50bb é um stack fundo.

**Regra:** Regra 6

---

# Ordem de entrada e largura do nó

---

## Exercício 14

**Pergunta**

Qual mão é núcleo e entra mesmo nos nós apertados?

**Alternativas**

a) K4s
b) T6s
c) K9s
d) A8o

**Correção**

Resposta: c) K9s

K9s está entre os Kx suited do núcleo (K5s a KQs). K4s entra no meio, e T6s e A8o só nos ranges mais largos.

**Regra:** Regra 11

---

## Exercício 15

**Pergunta**

Qual mão só entra nos ranges mais largos?

**Alternativas**

a) A5s
b) QJo
c) 66
d) A5o

**Correção**

Resposta: d) A5o

Os Ax offsuit de A8o a A4o só entram no último terço. A5s, QJo e 66 estão no núcleo.

**Regra:** Regra 11

---

## Exercício 16

**Pergunta**

Um nó tem o BTN continuando em 18%. Como classificar?

**Alternativas**

a) Apertado (13% a 22%)
b) Médio (23% a 30%)
c) Largo (31% a 49%)
d) Fora do padrão: refazer a leitura

**Correção**

Resposta: a) Apertado (13% a 22%)

Os nós medidos foram de 13% a 49%. Entre 13% e 22% é apertado: as marginais folda.

**Regra:** Regra 12

---

## Exercício 17

**Pergunta**

Hero com 28bb, opener com 60bb, média do field de 80bb, longe da bolha e bounty do hero igual ao KOI (Help do hero baixo). Quanto vale T?

**Alternativas**

a) 1
b) 2
c) 3
d) 4

**Correção**

Resposta: b) 2

Valem dois sinais: hero com 35bb ou menos e opener com pelo menos 1,3× o stack, e hero abaixo de 0,6 da média (28 ÷ 80 = 0,35). Bolha e bounty alto do hero não valem.

**Regra:** Regra 13

---

## Exercício 18

**Pergunta**

Com T de 2 ou mais, o que fazer com uma mão marginal?

**Alternativas**

a) Pagar sempre
b) 3betar como blefe
c) Pagar só se for suited
d) Foldar

**Correção**

Resposta: d) Foldar

Nos erros do Trainer, as marginais pagas em nós de 13% a 22% (Q8s, K3s, 33, J8s) eram folds.

**Regra:** Regra 14

---

## Exercício 19

**Pergunta**

O que os dados mostram sobre prever o tamanho do range em árvores novas?

**Alternativas**

a) Os fatores explicam mais de 80% do call
b) O 3bet se prevê melhor que o call
c) Só ~25% do call se explica; a ordem das mãos é que generaliza
d) Nada se prevê, nem a ordem das mãos

**Correção**

Resposta: c) Só ~25% do call se explica; a ordem das mãos é que generaliza

Entre árvores, os fatores explicam ~25% do call, e o 3bet não se prevê. A ordem de entrada das mãos acerta quais continuam com F1 de 0,95.

**Regra:** Limites

---

# Mãos reais do Trainer

---

## Exercício 20

**Pergunta**

Qual é a ação? KTs, hero com 25,6bb. O HJ abre com 67,1bb. 55% do field, média de 37bb.

**Alternativas**

a) Raise
b) Fold
c) Call
d) All-in

**Correção**

Resposta: c) Call

KTs é núcleo, e o nó não é apertado. O Trainer deu PERFEITO (EV 0,39).

**Regra:** Regra 14

---

## Exercício 21

**Pergunta**

Qual é a ação? Q8s, hero com 34,7bb. O CO abre com 38,7bb. 91% do field, média de 78bb.

**Alternativas**

a) All-in
b) Call
c) Fold
d) Raise

**Correção**

Resposta: c) Fold

O range do nó é de ~21%: hero curto contra a média. O Trainer deu fold (call EV −0,01). Eu paguei na v1.

**Regra:** Regra 13

---

## Exercício 22

**Pergunta**

Qual é a ação? K3s, hero com 54,8bb. O CO abre com 55,5bb e tem bounty de 3× o inicial. 30% do field.

**Alternativas**

a) Call
b) Raise
c) Fold
d) All-in

**Correção**

Resposta: c) Fold

Range de ~22%. K3s é marginal. O Trainer deu fold (call EV −0,02).

**Regra:** Regra 12

---

## Exercício 23

**Pergunta**

Qual é a ação? 33, hero com 24,4bb e bounty de 2× o inicial. O UTG1 abre com 61bb. 40% do field.

**Alternativas**

a) Raise
b) Fold
c) Call
d) All-in

**Correção**

Resposta: b) Fold

Hero curto, coberto e com bounty alto: o range é de ~13% (call só 7,5%). O Trainer deu fold.

**Regra:** Regra 13

---

## Exercício 24

**Pergunta**

Qual é a ação? J8s, hero com 21bb. O CO abre com 54bb. 13% do field, 213 jogadores para 192 pagos.

**Alternativas**

a) Call
b) Raise
c) Fold
d) All-in

**Correção**

Resposta: c) Fold

Bolha: RP +6,7 e range de ~20%. O Trainer deu fold (call EV −0,01).

**Regra:** Regra 9

---

## Exercício 25

**Pergunta**

Qual é a ação? K7s, hero com 96bb. O UTG1 abre com 157bb. 95% do field, bounties iguais.

**Alternativas**

a) Call
b) Raise
c) Fold
d) All-in

**Correção**

Resposta: a) Call

Early, hero fundo: o range é largo (call de 47%). O Trainer deu call (EV 0,15).

**Regra:** Regra 12

---

## Exercício 26

**Pergunta**

Qual é a ação? T8s, hero com 20,6bb. O CO abre com 99bb.

**Alternativas**

a) Fold
b) Call
c) Raise
d) All-in

**Correção**

Resposta: a) Fold

Hero curto contra um opener cinco vezes maior (T = 2): suited gapper foldada. O Trainer deu fold (call EV −0,01).

**Regra:** Regra 14

---

## Exercício 27

**Pergunta**

Qual é a ação? Q7o, hero com 51,7bb. O LJ abre com 92,5bb.

**Alternativas**

a) Call
b) Fold
c) Raise
d) All-in

**Correção**

Resposta: a) Call

Nó largo: até offsuit gappers pagam. O Trainer deu call. Foldar foi erro meu na v2.

**Regra:** Regra 14

---

## Exercício 28

**Pergunta**

Qual é a ação? A2o, hero com 141bb. O CO abre com 24bb.

**Alternativas**

a) Raise
b) Call
c) Fold
d) All-in

**Correção**

Resposta: d) All-in

Opener curto e coberto: o solver dá all-in com o blocker. Eu foldei na v2 (BLUNDER). Regra ainda pendente.

**Regra:** Regra 15

---

## Exercício 29

**Pergunta**

Qual é a ação? AQs, hero com 21,2bb. O LJ abre com 46,5bb.

**Alternativas**

a) Call
b) Fold
c) All-in
d) Raise

**Correção**

Resposta: d) Raise

Com stack curto, o premium dá raise (4,5bb), e não call. Paguei na v2 (BLUNDER). Regra ainda pendente.

**Regra:** Regra 15

---

## Exercício 30

**Pergunta**

Qual é a ação? J4s, hero com 89bb. O MP abre com 111,7bb.

**Alternativas**

a) All-in
b) Fold
c) Raise
d) Call

**Correção**

Resposta: b) Fold

Mão que só entra nos ranges mais largos. O Trainer deu fold.

**Regra:** Regra 11

---

## Exercício 31

**Pergunta**

Qual é a ação? 54s, hero com 92bb. O MP abre com 65bb.

**Alternativas**

a) Raise
b) Fold
c) All-in
d) Call

**Correção**

Resposta: d) Call

Hero fundo, cobrindo o opener: o suited connector paga. O Trainer deu PERFEITO.

**Regra:** Regra 11

---

## Exercício 32

**Pergunta**

Qual é a ação? KK, hero com 45,9bb. O LJ abre com 51,6bb.

**Alternativas**

a) Raise
b) Fold
c) Call
d) All-in

**Correção**

Resposta: a) Raise

Premium: raise. O Trainer deu PERFEITO (raise 6bb, EV 2,29).

**Regra:** Regra 14

---

## Exercício 33

**Pergunta**

Qual é a ação? 77, hero com 133bb. O LJ abre com 24,5bb.

**Alternativas**

a) Raise
b) Fold
c) Call
d) All-in

**Correção**

Resposta: c) Call

Par médio, hero fundo e cobrindo: call. O Trainer deu PERFEITO (EV 0,39).

**Regra:** Regra 11

---

## Exercício 34

**Pergunta**

Qual é a ação? 53s, hero com 35,8bb. O MP abre com 61,7bb.

**Alternativas**

a) Raise
b) Fold
c) Call
d) All-in

**Correção**

Resposta: b) Fold

Mão que só entra nos ranges largos, e o hero está abaixo do opener. O Trainer deu PERFEITO no fold.

**Regra:** Regra 11

---

## Exercício 35

**Pergunta**

Qual é a ação? 66, hero com 22,1bb. O CO abre com 66,7bb.

**Alternativas**

a) All-in
b) Raise
c) Fold
d) Call

**Correção**

Resposta: a) All-in

Par médio com stack curto: o solver prefere all-in ao call. Paguei na v2 (IMPRECISO). Regra ainda pendente.

**Regra:** Regra 15

---

## Exercício 36

**Pergunta**

Qual é a ação? A9s, hero com 33,9bb. O MP abre com 118,1bb.

**Alternativas**

a) Raise
b) Call
c) All-in
d) Fold

**Correção**

Resposta: b) Call

Ax suited é núcleo e o opener é fundo. O Trainer deu PERFEITO (EV 0,16).

**Regra:** Regra 11

---

## Exercício 37

**Pergunta**

Qual é a ação? 64s, hero com 31,2bb. O LJ abre com 63,8bb.

**Alternativas**

a) Fold
b) Raise
c) All-in
d) Call

**Correção**

Resposta: a) Fold

Suited gapper com hero curto: fold. O Trainer deu PERFEITO.

**Regra:** Regra 14

---

## Exercício 38

**Pergunta**

Qual é a ação? T7s, hero com 52,7bb. O LJ abre com 55bb.

**Alternativas**

a) Call
b) Raise
c) All-in
d) Fold

**Correção**

Resposta: d) Fold

Entra só no meio da fila, e o nó não é largo. O Trainer deu PERFEITO no fold.

**Regra:** Regra 11

---

## Exercício 39

**Pergunta**

Qual é a ação? JTs, hero com 27,2bb. O HJ abre com 18,4bb.

**Alternativas**

a) Raise
b) Call
c) All-in
d) Fold

**Correção**

Resposta: b) Call

Suited broadway, opener curto e coberto: call. O Trainer deu PERFEITO (EV 0,09).

**Regra:** Regra 14

---

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/16-PKO/README|README]] · [[theory/16-PKO/01-Guideline|01-Guideline]] · [[theory/16-PKO/02-VideoAulas|02-VideoAulas]] · [[theory/16-PKO/03-Solver|03-Solver]]

<!-- graphify-links:end -->
