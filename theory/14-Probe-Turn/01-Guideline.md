---
tags:
  - modulo/14-probe-turn
  - spot/srp
  - posicao/oop
  - street/turn
  - linha/probe
  - stack/40bb
  - tipo/guideline
---

# Guideline — Probe Turn

> **Módulo:** 14 – Probe Turn (consolidado, v1.1)
>
> **Objetivo:** Saber o que apostar, com que size e o que fazer quando o BTN dá check atrás no flop e você, no BB, decide no turn fora de posição.

---

# Contexto

Spot:
Pote single raised, BTN (abriu) contra BB (pagou), 40bb de stack. O flop terminou em check do BB e check atrás do BTN. No turn o BB age primeiro: é o probe turn.

Board base:
875 com flush draw (duas cartas do mesmo naipe no flop). Os outros boards e turns da aula derivam dele. Os boards são exemplos do tipo de board em que o BTN mais dá check atrás.

Posições:
BTN (IP) e BB (OOP).

Fonte:

- Aula (transcrição).
- Anotações do instrutor (Bloco de Notas na tela do vídeo), que trazem o size e os grupos de mãos de cada turn.

A aula não usa solver: é um resumo, e os sizes e os grupos de mãos vêm da fala e das anotações do instrutor.

---

# Como ler este guideline

Siglas e termos (confirmados na aula e nas anotações):

- **TP** é top pair. **SP** é second pair. **2P** é dois pares. Nas anotações “2P” também aparece como duas pontas (por exemplo, “combo draw 2P + FD”).
- **XC** é check-call. **XR** é check-raise.
- **ST8** é sequência feita (straight).
- **FD** é flush draw. **BDFD** é backdoor flush draw.
- **Duas pontas** é o open-ended: quatro cartas em sequência que fecham com carta dos dois lados. Exemplo: 65 num board 34, que fecha com o 7 ou com o 2 (8 outs).
- **Broca** é o gutshot: fecha com uma carta só, por dentro. Exemplo: 65 num board 32, que só fecha com o 4 (4 outs).
- **Thin value** é valor fino. A transcrição escreve "team value", e o instrutor se refere a apostar valor com mãos médias.
- **GU** é give-up.
- **Blank** é o turn que não muda o nuts nem completa flush ou sequência. No 8♠ 7♦ 5♠, o 2♣ é blank, mas o 2♠ completa o flush e muda a estratégia (seção 3.4).
- **Dinâmico high card** é o turn de carta alta num board dinâmico (por exemplo Q, J ou K no 875).

Marcações:

- **[Aula]**: dito pelo instrutor.
- **[Anotações]**: escrito pelo instrutor na tela.
- **[Inferência]**: conclusão a partir da aula, ainda não validada.
- **[Confirmar]**: pontos em que a fala e as anotações não batem, ou a fala não ficou clara.

Cada regra tem o mesmo formato: **Faça** (o que fazer), **Por quê** (uma ou duas frases) e, quando existe, **Exemplo**.

---

# Em 30 segundos

1. **Parta do range de check atrás do BTN.** É fraco: Ax, KQ e KJ, middle pair, third pair, alguns give-ups, brocas e mãos com backdoor de flush.
2. **O size nasce do grupo de mãos que você quer apostar.** B70 para TP e SP, B100 para trinca e TP muito forte, B40 quando o vilão dá raise ou quando você quer thin value.
3. **Board conectado pede B70, board seco pede B100.** Conectado tem mais equity no seu range, e seco tem um range de valor estreito.
4. **Bluff é sempre equity direta:** duas pontas, flush draw e brocas com equity extra.
5. **No check-call, nunca foldar TP, SP nem par com draw.**
6. **No check-raise, valor forte e combo draw.** Nada de bluff sem equity.
7. **Um size por situação.** Nada de B25 com o range inteiro.

---

# Parte 1 — O ponto de partida: o range de check atrás do BTN

## Regra 1 — Monte a estratégia em cima do range de check atrás do BTN

**Faça:** parta de que o BTN que deu check no flop tem um range de mãos médias e fracas.

**O range de check atrás:** **[Aula, Anotações]**

- **Ax**, que são as mãos que mais dão check atrás.
- **KQ e KJ** (Kx), em frequência um pouco menor que o Ax.
- **Middle pair** e **third pair**.
- **Brocas** e mãos com **backdoor de flush draw**.
- **Alguns give-ups.**

**Por quê:** o BTN já bateu o que tinha de mais forte no flop. O que sobra é mid value, e isso diz quem você ataca por valor (os pares médios) e quem você ataca por bluff (os give-ups). **[Aula]**

## Regra 2 — O BTN mais forte acrescenta mãos de topo

**Faça:** contra um BTN mais competente, conte com algumas mãos fortes no check atrás.

**Exemplo:** AA, KK, 88 e eventualmente 77. **[Aula]**

**Por quê:** o jogador forte protege o range de check atrás com mãos de topo, e dá raise no turn quando essas mãos entram. Nem todo mundo faz isso, e muita gente deixa de dar os raises que deveria. **[Aula]**

## Regra 3 — A construção se repete nos boards de maior frequência de check

**Faça:** use a mesma lógica em qualquer board em que o BTN dá check atrás com frequência, como o 875.

**Por quê:** a construção de check atrás é sempre a mesma coisa: pares médios, Ax e alguns give-ups. O instrutor escolhe os boards olhando nos reports quais têm a maior frequência de check. **[Aula]**

## Regra 4 — Board atípico: assuma o range de check atrás antes de apostar

**Faça:** num board em que o BTN não deveria dar check (por exemplo, um board de cartas altas), pergunte o que você acredita que ele tem no check atrás:

| Se você acredita que o BTN... | Faça |
|---|---|
| Não tem TP no check atrás | Aposte seus TP com frequência alta |
| Tem o range minimamente balanceado, com alguns TP | Aposte com frequência baixa, e quando apostar use size alto (referência de pote) com os melhores TP ou os melhores bluffs |
| Tem muitos traps e quase nenhum lixo | Jogue range de check, e dê double check |

**Por quê:** nesses boards não há como saber o range exato. Quanto menos TP você acha que ele tem, maior a frequência de bet. Quanto mais TP, mais o seu range deve ser de check. Pela experiência do instrutor, quem dá check num board desses quase nunca tem as mãos mais fortes do range, mas dificilmente tem o lixo total. O fold equity é baixo, então a frequência é baixa e o size alto. **[Aula]**

---

# Parte 2 — Como escolher o size

## Regra 5 — O size nasce do grupo de mãos que você quer apostar

**Faça:** antes de escolher o size, decida o grupo de mãos que você quer apostar. Ou, ao contrário, entenda o grupo a partir do size.

| Size | Para quê | Situação |
|---|---|---|
| **B100** (ou geométrico) | Trinca e TP muito forte | Range de valor estreito e pouca equity direta (board seco) |
| **B70** | TP e SP | Range largo, com muita equity direta (board conectado) |
| **B40** | Thin value com todos os TP | O vilão dá raise, ou o flush completa em carta baixa |
| **B70** | Só os melhores TP ou melhores | O flush completa em carta alta, ou a sequência completa |

**[Aula, Anotações]**

**Por quê:** é o resumo da aula inteira: quando você entende qual grupo de mãos aposta, o size sai sozinho. **[Aula]**

## Regra 6 — Board conectado pede B70, board seco pede B100

**Faça:** com o board conectado, aposte B70. Com o board seco, aposte B100 ou o geométrico.

**Por quê:** num board conectado (875) o seu range de bet tem muita equity direta: duas pontas, flush draws, brocas e dois pares. Se você aposta um size muito alto, o range de call dele pega mais equity, e você acaba se autovalorizando: teria que tirar o 7x do range de bet, e o 7x é uma mão que você quer apostar. No board seco (873) o seu 8x vira o absoluto, o vilão tem menos equity contra você e precisa defender até Ax, então o size alto funciona. **[Aula]**

**Exemplo:** no 875 com um 2 no turn, B70. No 873 com um 2 no turn, B100. **[Anotações]**

## Regra 7 — B40 só nas duas situações em que ele funciona

**Faça:** use o B40 só quando uma destas duas coisas é verdade:

1. O vilão coloca fichas no pote (ele dá raise). Típico do turn dinâmico de carta alta.
2. Você quer thin value (muitas mãos apostando), como quando o flush completa em carta baixa.

**Por quê:** o size baixo só serve para extrair de um range largo de mãos piores, ou quando o adversário coloca dinheiro. Se nenhuma das duas coisas acontece, o B40 vira um size ruim. No 875 com um 2 no turn, o B40 deixaria de extrair valor com parte do topo e o vilão não coloca dinheiro. **[Aula]**

## Regra 8 — Use um size único por situação

**Faça:** padronize um size por situação, em vez de dividir o range em vários sizes.

**Por quê:** os ranges de check atrás de hoje são melhores construídos, e vários sizes perdem efetividade. Dividir o range em B120, B100, B70 e B40 é impraticável, porque cada size exigiria um sorteio de frequências. O instrutor usa o recurso do GTO Wizard de cadastrar muitos sizes, para encontrar o size médio da estratégia, e depois adota esse size único. **[Aula]**

## Regra 9 — Não aposte B25 com o range inteiro

**Faça:** não use B25 com o range todo no turn, nem no 875 com o 9 (que completa a sequência).

**Por quê:** se você acha que o vilão folda bastante, B25 não faz ele foldar. Se ele paga com o range todo, o B25 não extrai nada. E com o range inteiro apostando, o river vira uma árvore que ninguém sabe jogar, incluindo você. Quem faz isso se coloca em pé de igualdade com um jogador mais fraco. **[Aula]**

**Exemplo do erro:** B25 no turn 9, e chegar a um river blank com várias mãos diferentes: o Kx do naipe do flush draw é a mão que mais quer blefar no river (desbloqueia os T e J que formam a maior parte do range dele). A 54 quer XC. **[Aula]**

---

# Parte 3 — Guideline por turn (base: 875 com flush draw)

Em todos os casos: BTN vs BB, 40bb, flop em check-check. **[Anotações]**

## 3.1 — Turn 2, blank (board conectado): B70

**Bet:** **[Anotações]**

- TP ou melhor.
- SP que cobram de piores: A7 e K7.
- SP que conectam com o board (por exemplo, 76 e 97).
- 7x com flush draw.
- 5x com o naipe do flush draw (por exemplo A5, K5 e 65 do naipe).
- Duas pontas, flush draws e brocas.

**XC:** 7x, third pair e qualquer par com redraw. **[Anotações]**

**XR:** sequências (quando você não tem o naipe do board), pontual 2P (dois pares) e combo draw (duas pontas + FD). **[Anotações]**

**Por quê:** o range de check atrás do BTN é condensado em pares médios, e o B70 ataca um número grande de mãos sem inflar o pote demais. **[Aula]**

## 3.2 — Turn 2 num board seco (873): B100

**Faça:** aposte as mãos de valor (o 8x, que é o absoluto) com B100 ou o geométrico.

**Por quê:** o vilão tem menos mãos fortes no check atrás (não precisa expletar como no 875), a sua equity direta é menor (para ter duas pontas você precisa do 65 ou do 96) e o range que paga é largo e com pouca equity, então um size alto é permitido. **[Aula, Anotações]**

## 3.3 — Turn Q (dinâmico high card): B40

**Bet:** Qx e 8x (menos os piores de cada um, que vão para o check-call), flush draws, duas pontas e brocas com mais equity. **[Anotações, Aula]**

**XC:** piores Qx, second pair e par com redraw. **[Anotações]**

**XR:** sequências e 2 pares. **[Anotações]**

**Por quê:** o vilão coloca dinheiro no pote com as mãos fortes (os pares de topo e as melhores Qx), e o seu topo não perde valor, porque o raise do vilão continua sendo sua deixa para colocar mais fichas. O B40 permite apostar um grupo grande (Qx e 8x), extraindo das mãos de check atrás, que são condensadas em third pair, second pair e Ax. O instrutor diz que o que toma de raise aqui "é brincadeira", e que as pessoas não estão acostumadas a esse tipo de linha. Por isso o XR para inflar o pote não é prioridade. **[Aula]**

**Quais Qx vão para o XC:** as três ou quatro piores Qx (Q2, Q3, Q4), as piores off-suit e os piores suited, e do mesmo jeito os piores 8x. Eles desbloqueiam as mãos que pagam (9 e 10). **[Aula]**

**Bluffs:** duas pontas e flush draws, e brocas só com equity extra. Um 4x é uma broca de lixo aqui, e um K9 ou A9 é uma broca com plano. **[Aula]**

## 3.4 — Turn que completa o flush em carta baixa (2 do naipe): B40

**Bet:** flushes com uma carta alta e uma baixa, TP, os 2 melhores SP, SP que conectam com o board, flush draws, duas pontas e brocas com mais equity. **[Anotações]**

**XC:** par com FD, flushes baixos, SP+ e par com draw. **[Anotações]**

**XR:** os melhores flushes (duas cartas altas do naipe) e combo draw. **[Anotações, Aula]**

**Por quê:** o nuts mudou, mas aqui você quer thin value, e o B40 permite apostar todos os TP. **[Aula]**

## 3.5 — Turn que completa o flush em carta alta (Q do naipe): B70

**Bet:** flushes com uma carta alta e uma baixa, os melhores TP, SP que conectam com o board, flush draws, duas pontas e brocas com mais equity. **[Anotações]**

**XC:** TP, SP, par com draw e os piores flushes. **[Anotações]**

**XR:** os melhores flushes (duas cartas altas) e combo draw. **[Anotações, Aula]**

**Por quê:** com a Q no naipe, o vilão tem muitos flushes e muita equity, e o seu 8x e as Qx fracas perdem o incentivo de apostar. Você não quer thin value aqui. Quer apostar só os melhores TP ou melhores. Como o grupo é mais restrito, o size sobe, até pote se quiser (e nesse caso apenas TP com o naipe do flush). **[Aula]**

## 3.6 — A divisão dos flushes (nos turns 3.4 e 3.5)

| Flush | Ação | Exemplo |
|---|---|---|
| Uma carta alta e uma baixa | Bet | J♠4♠ |
| Duas cartas altas | Check-raise | J♠10♠ |
| Duas cartas baixas | Check-call | 4♠3♠ |

**[Aula]**

**Por quê:** o flush de duas cartas altas não quer apostar, porque poucas mãos piores pagam. Mas quando o vilão se mostra disposto a apostar, você bloqueia as mãos dele, e então acelera. Os flushes baixos pagam menos mãos quando apostam e desbloqueiam as mãos que blefam contra você (high cards do naipe), então vão de check-call. **[Aula]**

## 3.7 — Turn 9, que completa a sequência (ST8): B70

**Bet:** sequências, os melhores 2P, TP que vão para o nuts (por exemplo, 9J e 9T). Por bluff: duas pontas, brocas e flush draws. **[Anotações, Aula]**

**XC:** TP, SP e par com draw. **[Anotações]**

**XR:** sequência nuts, sequência com redraw para as melhores e draw para o nuts. **[Anotações]**

**Por quê:** o vilão tem frequência de check atrás com 9T e 77, e talvez algum 8x fraco. Apostando B70 você extrai de pares piores e ainda mata quando ele tem mão boa. **[Aula]**

## 3.8 — Turns que pareiam o board

**Faça:** **[Anotações, Aula]**

| Board e turn | Size | O que apostar |
|---|---|---|
| 875, turn 8 | B70 | Todos os 8x e a maior parte dos 7x |
| 887, turn 2 | B70 | Os 8x e os 7x |
| 887, turn J | B100 | Só o 8. Não aposte os 7x nem o valete |

**Por quê:** no 887 com J, o vilão tem os melhores valetes e o seu 7x já não tem o que apostar. Você aposta o 8 ou nada, e com tão poucas mãos o size vai para o pote. **[Aula]**

---

# Parte 4 — Padrões que se repetem em todos os turns

## Regra 10 — Bluff é sempre equity direta

**Faça:** aposte por bluff com duas pontas, flush draws e as melhores brocas.

**Por quê:** fora de posição você precisa ter equity quando aposta, e não pode colocar fichas com mãos que retêm zero equity contra o range de call dele (em posição você teria linhas como o check-bet). Se o turn terminar em check-check, o river ainda existe para apostar a parte mais polarizada do seu range (por exemplo, T3 ou J4). **[Aula]**

## Regra 11 — A broca precisa de equity extra quando o board é ruim

**Faça:** aposte qualquer broca quando o board é favorável. Quando o board é esquisito, só aposte a broca que tem equity extra: um overpair com a broca, ou a broca com um flush draw.

**Exemplo:** num board como J97, depois de check-check, um turn 2 e a mão 83 (uma broca que retém quase nada de equity): vá de check-check e blefe no river. **[Aula]**

**Por quê:** quanto pior o board para você, mais a sua broca precisa de equity extra. Quando você aposta uma broca, ela precisa ter um plano claro quando é paga: acertar o river, e não só blefar. **[Aula]**

## Regra 12 — No check-call, nunca folde TP, SP nem par com draw

**Faça:** no seu range de check-call mantenha sempre TP, SP e par com draw. **[Aula]**

**Por quê:** é um padrão que se repete em todos os boards. Em cima dele o que muda é o size que o vilão aposta (Regra 13).

## Regra 13 — Quanto maior o size do vilão, mais equity você precisa para pagar

| Size do vilão | O que você paga |
|---|---|
| Pequeno (por exemplo B25) | Até os melhores Ax high, e eventualmente até um KQ |
| Tradicional (B33 ou B70) | Pares, equity direta e os melhores flush draws. O 5x e o 7x você não folda. O par mais baixo (2x) já começa a foldar em parte, e paga só com redraw (por exemplo 26, 29 ou 2x com flush draw) |
| Overbet | O 7x continua (bloqueia o valor dele). O 5x precisa de redraw |

**[Aula]**

**Por quê:** com um size maior o seu preço é pior, e o range que o vilão aposta é mais restrito. Quanto pior o seu par, mais equity você precisa para pagar, e ter equity é ter um redraw ou bloquear valor. Quando você bloqueia o valor dele, pode acompanhar pelo menos mais uma street. **[Aula]**

## Regra 14 — Num board que muda o nuts, o call exige mais equity

**Faça:** no 875 com Q (ou o flush completando), contra B70 ou B100, pague com TP, SP e par com redraw. Folde third pair sem redraw, como A5, K5 e 54.

**Por quê:** a mudança de nuts dá ao vilão mais equity, e o preço é pior. Quando ele aposta pote, o range dele é mais forte. **[Aula]**

## Regra 15 — XR: valor muito forte e combo draw

**Faça:** use o check-raise para criar um pote grande, só com mãos fortes ou com muita equity.

**Valor:** **[Aula]**

- **Sequências.** São mãos fortes que não bloqueiam o que o vilão paga.
- **Pontual 2P.** Escolha os 2P que desbloqueiam o par que paga. No 875 com 2 no turn, o vilão paga com 7x, então o XR é com 82, 52 e 85, deixando o 7x de fora.
- **Top pair com kicker** só em boards em que ele não muda tanto o nuts. Em board dinâmico é delicado.

**Bluff:** só **combo draw**: duas pontas com flush draw, ou broca com over e flush draw. **[Aula]**

**Por quê:** o XR por bluff precisa de muita equity, porque quando você toma call ainda precisa buscar o jogo. **[Aula]**

**Quando o XR é menos prioritário:** no turn dinâmico de carta alta com B40, o vilão já dá raise, e o pote cresce sem você fazer XR. **[Aula]**

**Como escolher a frequência:** cada jogador usa um jeito: o instrutor usa o naipe do board, outros usam um randomizador ou o feeling do momento. O importante é não deixar de fazer. **[Aula]**

## Regra 16 — As piores mãos de cada grupo vão para o check

**Faça:** separe as piores mãos do grupo de bet (as piores Qx off-suit e as piores suited, os piores 8x) e coloque no check-call.

**Por quê:** é o que acontece mais em frequência em teoria, e as piores mãos desbloqueiam as cartas que pagam (9 e 10). **[Aula]**

## Regra 17 — Seguidas e o naipe do board

**Faça:** com a sequência feita, use o naipe do board para decidir entre bet e XR. As anotações mandam fazer XR com a sequência quando você não tem o naipe do board. **[Anotações]**

**Por quê:** fora de posição a mão que você aposta precisa de equity, e a sequência sem o naipe quer inflar o pote. A explicação da fala sobre as sequências com o naipe não ficou clara. **[Confirmar]**

---

# Parte 5 — Adaptação ao adversário

## Regra 18 — A construção não muda muito, quem muda é a frequência

**Faça:** contra um adversário mais fraco, acredite que ele tem menos TP no check atrás e aposte mais. Contra um adversário bom, conte com TP no check atrás.

**Por quê:** a sua construção está ligada ao size, então ela muda pouco. Quanto mais forte o jogador, mais TP ele guarda: nos buy-ins mais altos (o instrutor cita US$ 250) boa parte já faz check atrás com TP, e nos mais baixos (US$ 70 e 100) boa parte não faz. **[Aula]**

---

# Parte 6 — Como aplicar na mesa

## Antes de agir, responda

1. **Que board é e que turn veio?** Conectado ou seco, blank, carta alta, flush ou sequência completando, board pareado.
2. **O que o BTN tem no check atrás?** Ax, Kx, pares médios, brocas.
3. **Qual grupo de mãos eu quero apostar?** TP e SP, só os melhores TP, ou só o 8.
4. **Então qual é o size?** B70, B100 ou B40 (Regra 5).
5. **O vilão coloca fichas no pote?** Se sim, B40. Se não, não use B40.
6. **O que vai para o check-call e para o XR?** TP, SP e par com draw no XC. Valor forte e combo draw no XR.

## Erros mais comuns

- Usar B25 com o range inteiro.
- Usar o B40 num board em que o vilão não dá raise.
- Apostar B100 num board conectado e acabar sem os 7x no range.
- Apostar todas as brocas, em qualquer board, com sizes diferentes.
- Apostar o 8x e as Qx fracas quando o flush completa em carta alta.
- Foldar TP, SP ou par com draw no check-call.
- Dar XR por bluff sem combo draw.

## Regras de bolso

1. Range de check atrás do BTN: Ax, Kx, pares médios, brocas e give-ups.
2. O size nasce do grupo de mãos que você aposta.
3. Conectado B70, seco B100.
4. B40 só se o vilão dá raise ou se você quer thin value.
5. Flush em carta baixa: B40. Flush em carta alta: B70, só os melhores TP.
6. Sequência completando: B70, nunca B25.
7. Bluff com equity direta. Broca só com equity extra.
8. XC: TP, SP e par com draw. Contra size grande, o par precisa de redraw.
9. XR: valor forte ou combo draw.
10. Um size por situação.

---

# Cruzamento com o KB

| Ponto deste módulo | Onde se liga |
|---|---|
| B40 no turn dinâmico de carta alta, com raise do vilão | Módulo 05 (C-Bet OOP 40bb), Regras 15 e 19 do second barrel OOP **[Inferência]** |
| Princípios de sizing e de valor | Módulo 11 (Value Bet Masterclass) |
| XR por valor e por bluff com combo draw | Módulos 06 e 07 (XR Short Stack e Deep Stack) **[Inferência]** |
| Probe turn em pote multiway | Módulo 10 (Multiway): este módulo cobre só pote heads-up |
| Check-back range do BTN | Módulo 03 e 09 (Second Barrel IP e Bet-Check-Bet), que mostram o outro lado dessa mão **[Inferência]** |

---

# Pendências e decisões

As pendências abertas estão em `06-Pendencias.md` e as decisões da construção do módulo estão em `09-Decisoes.md`. O guia de mesa, só com o que fazer, está em `10-Como-Jogar.md`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/14-Probe-Turn/README|theory/14-Probe-Turn]]

**Mesma pasta:** [[theory/14-Probe-Turn/02-VideoAulas|02-VideoAulas]] · [[theory/14-Probe-Turn/03-Solver|03-Solver]] · [[theory/14-Probe-Turn/04-Exercicios|04-Exercicios]] · [[theory/14-Probe-Turn/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/14-Probe-Turn/06-Pendencias|06-Pendencias]] · [[theory/14-Probe-Turn/07-Changelog|07-Changelog]] · [[theory/14-Probe-Turn/08-Referencias|08-Referencias]] · [[theory/14-Probe-Turn/09-Decisoes|09-Decisoes]] · [[theory/14-Probe-Turn/10-Como-Jogar|10-Como-Jogar]]

**Módulos citados no texto:** [[theory/03-Second-Barrel-IP/01-Guideline|03-Second-Barrel-IP]] · [[theory/05-CBet-OOP-40bb/README|05-CBet-OOP-40bb]] · [[theory/06-XR-SHORT/README|06-XR-SHORT]] · [[theory/10-MULTIWAY-POT/README|10-MULTIWAY-POT]] · [[theory/11-Value-Bet-Masterclass/README|11-Value-Bet-Masterclass]]

**Outros módulos:**

- [[theory/15-Bet-vs-Missed/01-Guideline|15-Bet-vs-Missed · 01-Guideline]]
- [[theory/15-Bet-vs-Missed/02-VideoAulas|15-Bet-vs-Missed · 02-VideoAulas]]

<!-- graphify-links:end -->
