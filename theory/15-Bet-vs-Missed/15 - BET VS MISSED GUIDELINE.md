---
tags:
  - modulo/15-bet-vs-missed
  - spot/srp
  - posicao/ip
  - street/flop
  - linha/bet-vs-missed
  - tipo/guideline
---

# Guideline — Bet vs Missed C-Bet

**Flashcards:** [[theory/15-Bet-vs-Missed/15 - BET VS MISSED FLASHCARDS|15 - BET VS MISSED FLASHCARDS]]

> **Módulo:** 15 – Bet vs Missed C-Bet (consolidado, v1.0)
>
> **Objetivo:** Saber o que apostar, em qual frequência e com qual size no flop quando o agressor pré-flop dá check fora de posição e você, em posição, decide. O foco é o flop. Turn e river seguem o que você já faz.

---

# Contexto

Spot:
O adversário abre pré-flop, você paga em posição, e ele dá check no flop (missed c-bet). Você age em posição: aposta ou dá check atrás.

Stacks:
A estratégia vale como um todo, e não é específica de um stack. A imagem do instrutor não fixa o stack, e os exemplos da aula usam de 50bb a 90bb.

Fonte:

- Aula (transcrição e SRT), com a revisão de mãos em replayer.
- Guideline em imagem do instrutor (segunda versão, por isso "Segunda barra" no cabeçalho), que traz o size e as frequências de cada tipo de flop.

---

# Como ler este guideline

Siglas e termos:

- **Bucket** é a faixa de frequência de aposta de uma mão: 100%, 75%, 50% ou 25% (e 0% em alguns casos).
- **Thin value** é valor fino. A transcrição escreve "team value".
- **TP** é top pair. **2P** na imagem do instrutor é segundo par, e **3P** é terceiro par. "2 pares" é dois pares. **UP** é under pair, **OP** é overpair, **TS** é top set (a top trinca).
- **ST** é sequência. **FD** é flush draw, **BDFD** e **BDSD** são backdoor de flush e de sequência. **OESD** é duas pontas. **GS** é gutshot (broca).
- **Bordo dobrado** é o board pareado.

Marcações:

- **[Aula]**: dito pelo instrutor.
- **[Imagem]**: está no guideline em imagem do instrutor.
- **[Inferência]**: conclusão a partir da aula, ainda não validada.
- **[Confirmado pelo coach]**: ponto em que a fala e a imagem não batiam, e o coach esclareceu.
- **[Confirmar]**: ponto que não ficou claro.

Cada regra tem o mesmo formato: **Faça** (o que fazer), **Por quê** (uma ou duas frases) e, quando existe, **Exemplo**.

---

# Em 30 segundos

1. **Pense a frequência de cada mão:** 100%, 75%, 50% ou 25%. As mãos mais fortes vão nas frequências mais altas, e as mais fracas nas mais baixas.
2. **Nenhum board se aposta 100%.** O agressor que deu check não está capado.
3. **Só dois sizes: B25 e B50.** B25 quando você quer thin value (muitas mãos apostando), B50 quando não quer.
4. **O size acompanha o grupo de mãos que você aposta,** e não a sua mão.
5. **Classifique o board:** conectado high, semi conectado, seco, monotone ou dobrado.
6. **A pior trinca vai sempre em 100%.** A exceção é o board ultraconectado high.
7. **Para sortear:** use o naipe do board (mais equity) ou um randomizador, sempre com a mão inteira (todos os combos).

---

# Parte 1 — Por que a estratégia mudou

## Regra 1 — Pare de apostar sempre o melhor de cada grupo e dar check com o resto

**Faça:** divida as mãos em frequências, em vez de apostar 100% das mãos fortes e dar check com todas as fracas.

**Por quê:** a estratégia antiga era linear e ganhava bem no flop, mas abria buracos nas ruas seguintes: **[Aula]**

- Sem mãos boas para dar raise no turn, o vilão realiza mais equity do que deveria e rouba EV.
- Poucas mãos naturais para pagar turn e river.
- Poucas mãos para apostar o river quando ele dá check.

**Ganho da nova estratégia:** contra o double check, você tem um range mais forte para apostar e extrai mais valor. Contra o delayed c-bet, você tem mãos mais claras (top pair com bom kicker, trincas e sequências). **[Aula]**

## Regra 2 — O agressor que deu check não está capado

**Faça:** não aposte 100% do range em nenhum board.

**Por quê:** fora de posição ele pode ter trinca, top pair e dois pares no check. Jogadores modernos não estão capados, então não dá para ir a extremos, e quando ele tem mão forte no range você não pode inventar com qualquer coisa. **[Aula]**

---

# Parte 2 — As frequências (range classes)

## Regra 3 — As mãos mais fortes vão para os buckets mais altos

**Faça:** distribua o range em 100%, 75%, 50% e 25%. Em cada bucket entram mãos de valor e de bluff.

**Por quê:** quando você coloca dinheiro com mais frequência, quer ter mãos melhores. Quando coloca com menos frequência, a aposta vem das mãos piores. Monstros muito fortes vão para os buckets de cima, e mãos médias para os de baixo. **[Aula]**

**Dica de estudo:** no bucket mais alto de cada board sempre estão as mãos mais fortes. **[Aula]**

## Regra 4 — A pior trinca vai sempre em 100%

**Faça:** aposte a pior trinca em todas as vezes.

**Exceção:** o board ultraconectado high (AKT, QJT, QJ9, KJ9). Nesses boards não existe mão em 100%. **[Aula]**

**Por quê:** nesses boards o range do vilão é muito mais robusto e tem mais equity. Se você aposta tudo, o seu range de check fica desprotegido: depois de check-check você nunca tem mão para dar raise, e depois de check-bet tem menos mãos para pagar. **[Aula]**

## Regra 5 — Os draws ficam nos buckets do meio

**Faça:** coloque os draws em 50%, com raras exceções. O draw com backdoor aposta, e o sem backdoor dá check.

**Por quê:** os draws tendem a ir para buckets médios e quase nunca para o extremo. **[Aula]**

## Regra 6 — Underpair só aposta quando ataca mãos melhores

**Faça:** com underpairs, aposte só os mais baixos (por exemplo 2-2 a 4-4) e deixe 0% os mais altos (7-7, 8-8 e 9-9).

**Por quê:** o underpair baixo faz foldar mãos melhores (os pares do board) e ainda vira bluff em rivers que conectam. Os underpairs altos não atacam nada, então não têm o que ganhar apostando. Quanto menos mãos você ataca, menos sentido tem apostar. **[Aula]**

---

# Parte 3 — Os sizes

## Regra 7 — Use só B25 e B50

**Faça:** B25 quando você quer thin value (muitas mãos apostando), e B50 quando não quer.

**Por quê:** os dois sizes extraem valor, reduzem o SPR e deixam o grupo de mãos que o vilão paga previsível. Com B70 a composição do range de call fica difícil de prever, e o jogador não consegue replicar o solver de forma confiável. Contra jogadores melhores, o instrutor sobe um pouco o B50, até perto de 60% do pote. **[Aula]**

## Regra 8 — O size acompanha o grupo de mãos, e não a sua mão

**Faça:** escolha o size pelo que o seu range pede: quanto mais mãos de valor você tem apostando, menor o size. Quanto menos, maior o size.

**Por quê:** num board em que você aposta pares baixos, médios e até bottom pair, está fazendo valor contra Ax high e Kx high, e o size menor extrai desses pares. Num board em que só o topo aposta, o size sobe. **[Aula]**

**Exemplo:** no A-K-2 o AJ aposta com B50, e não com um size baixo. **[Aula]**

## Regra 9 — Um size único por board, e a frequência é que muda

**Faça:** use um só size por board. O que varia entre as mãos é a frequência.

**Por quê:** o instrutor evita dividir sizes, porque a aplicação precisa ser a mesma em 99% das vezes. Os desvios ficam para cenários extremos. **[Aula]**

---

# Parte 4 — Os cinco tipos de flop

A tabela abaixo é o guideline em imagem do instrutor. **[Imagem]**

## Regra 10 — Classifique o board antes de escolher o bucket

**Faça:** identifique o tipo do board e use a tabela dele.

| Tipo de flop | Exemplo | Size |
|---|---|---|
| **Conectado high** | A♠ K♥ T♦ | B50 |
| **Semi conectado** | J♠ 9♥ 6♣ | B50 |
| **Seco** | Q♠ 5♥ 3♣ | B25 |
| **Monotone** | A♠ 9♠ 8♠ | B25 |
| **Dobrado** | K♠ K♥ 7♣ | B25 |

### Flop conectado high (AKT): B50

| Bucket | Mãos |
|---|---|
| **75%** | Sequência e flush draw nuts |
| **50%** | Trincas, dois pares, TP forte, duas pontas, BDFD + BDSD |
| **25%** | TP médio e fraco, segundo par, terceiro par, underpair, air, gutshot |

Frequência média de aposta: cerca de 30% a 35%. Aqui não existe mão em 100%. **[Aula]**

Dois pares e TP forte vão em 75% no semi conectado e em 50% no conectado high. **[Confirmado pelo coach]**

### Flop semi conectado (J96): B50

| Bucket | Mãos |
|---|---|
| **100%** | Pior trinca, top two pair e overpair |
| **75%** | Dois pares, TP forte, sequência |
| **50%** | TP médio, underpair, flush draw, duas pontas, gutshot, BDFD + BDSD |
| **25%** | TP fraco, segundo par, terceiro par, air |

### Flop seco (Q53): B25

| Bucket | Mãos |
|---|---|
| **100%** | Overpair e trincas (menos a top trinca) |
| **75%** | Dois pares, TP e a top trinca (TS) |
| **50%** | Todo o restante |

Frequência média de aposta em boards secos: de 55% a 65%. Não existe bucket de 25%: os pares médios entram em 50%. A top trinca vai em 75% porque bloqueia o valor que você sempre dá check. **[Aula]**

### Flop monotone (A98): B25

| Bucket | Mãos |
|---|---|
| **75%** | Trinca e BDSD |
| **50%** | Flush, dois pares, top pair, flush draw, duas pontas e gutshot |
| **25%** | Todo o restante |

### Flop dobrado (KK7): B25

| Tipo | Bucket | Mãos |
|---|---|---|
| **Seco** | 75% | Fulls e trincas |
| **Seco** | 50% | Todo o restante |
| **Carregado** | 50% | Mãos com mais equity |
| **Carregado** | 25% | Todo o restante |

## Regra 11 — Dobrado seco ou carregado depende do thin value

**Faça:** no board dobrado, pergunte se dá para ter thin value.

- **Seco (por exemplo J-3-3):** dá para ter muito thin value. Aposte 75% das melhores mãos e 50% de todo o restante.
- **Carregado (por exemplo J-J-9):** não dá. Aposte 50% das melhores e 25% do restante.

**Por quê:** o board dobrado seco é "a moda": o vilão paga muito Ax high e não folda, e os pares baixos (4-4, 5-5, 6-6, 7-7, são 6 combos cada) apostam com lucro. **[Aula]**

**Exemplo de slowplay:** no J-J-9, uma mão muito forte como a trinca (A-J) pode dar check para induzir a aposta do vilão no turn e dar raise. **[Aula]**

## Regra 12 — Decida seco, semi conectado ou conectado pelo range do vilão

**Faça:** classifique o board pela interação dele com o range do oponente, e não só pelas cartas.

**Exemplos:** **[Aula]**

- **9-8-6:** contra o HJ, vai para semi conectado, porque o vilão tem Q10, T-J e os suited.
- **8-7-6 deep:** semi conectado.
- **8-5-4:** trate como seco (muito menos draws).
- **8-7-6 CO contra BTN:** trate como conectado.
- **Board low conectado em que o vilão nunca tem a sequência:** nada muda para você.

**Por quê:** quanto maior a interação do range dele com o board, mais cautela. Se você acha que não dá para fazer valor com as mãos mais fracas, o board vai para o lado dos buckets baixos. **[Aula]**

---

# Parte 5 — Como dividir o bucket na mesa

## Regra 13 — Use o naipe ou um randomizador, sempre com a mão inteira

**Faça:** para chegar na frequência certa, use o naipe do board (mais equity) ou um randomizador.

**Exemplos:** **[Aula]**

- **75%:** com um randomizador, de 0 a 75 aposta, de 76 em diante dá check.
- **25%:** com Kx de damas, escolha um naipe (por exemplo o do flush draw) e aposte só esse naipe.
- **Par do board:** randomize todos os combos, e não só os de um naipe. Por exemplo, todos os 6-5, e não só o 6♠5♠.

**Por quê:** a mão com o naipe do board tem mais equity, toma menos raise e realiza mais até o river. Randomizar um combo só, em vez da mão inteira, não funciona. **[Aula]**

## Regra 14 — Com flush draw no board, os pares com o naipe apostam

**Faça:** no board seco com flush draw, aposte os pares que têm o backdoor (o naipe do flush draw) e dê check com os que não têm.

**Exemplo:** no Q-6-2 com flush draw, os pares 7-7 a J-J com o naipe apostam. **[Aula]**

## Regra 15 — Ajuste no jogo short stack

**Faça:** no jogo mais curto, dê um pouco mais de check com a mão que tem o naipe e aposte um pouco mais com a sem naipe.

**Por quê:** no short stack você não consegue apostar, pagar um check-raise e desenvolver o pós-flop, então quer realizar mais a equity dessas mãos. **[Aula]**

---

# Parte 6 — Ajustes por posição, stack e adversário

## Regra 16 — Contra EP e MP o range é outro

**Faça:** não trate o EP e o MP como o BB.

**Por quê:** o BB tem Ax offsuit baixos e muito mais combinações. Contra EP e MP o range não tem essas mãos, e o jogo muda. **[Aula]**

**Exemplo:** com 80bb de stack, num board Broadway e com turn Q, AJ contra EP ou MP é check, porque a mão não tem equity para ir três streets e o vilão não tem tantos combo draws quanto o BB. **[Aula]**

## Regra 17 — A proporcionalidade mantém as frequências

**Faça:** mantenha as frequências quando o range do vilão encolhe, e só mude se você achar que ele deixou de pagar as mãos que você ataca.

**Por quê:** se o vilão é mais tight (EP, ou um stack de 15bb), ele perde as mãos fracas e as fortes ao mesmo tempo, então o equilíbrio fica parecido. A frequência de 75% é das melhores mãos, e não do range. **[Aula]**

## Regra 18 — Mais deep: não reabra a ação de graça

**Faça:** se você der check com uma mão forte num stack mais deep, tenha cuidado, e aposte de forma mais polarizada.

**Por quê:** o check reabre a ação para o vilão blefar com as mãos dele (por exemplo T-T, K-x de ouros), e você não deve dar essa porta. **[Aula]**

---

# Parte 7 — Turn e river (o que não muda)

## Regra 19 — A frequência é do flop, e o turn segue o que você já faz

**Faça:** frequencie as mãos só no flop. No turn e no river continue com a lógica que você já usa. **[Aula]**

## Regra 20 — No turn o range é mais polarizado, e o size sobe

**Faça:** no turn aposte com sizes mais altos (dois terços ou pote), e escolha o size pelo grupo de mãos. **[Aula]**

| Situação no turn | Size |
|---|---|
| Turn blank (o range de valor é curto) | Geométrico. Com stack muito deep, em vez do geométrico cheio, overbet de 120% a 150% |
| Dinâmico de carta alta, quando você quer apostar muitos TP | B70 |
| Ás no turn e você não quer thin value | Pote |
| Não tem thin value | Size alto ou check, sem meio-termo |

**Por quê:** o size de thin value só existe quando você quer thin value. Se você não vai ter muitos pares apostando, o size é sempre alto. **[Aula]**

**Exemplo:** no turn 2 que não muda nada, AA aposta com o size alto, e não com um B40. **[Aula]**

## Regra 21 — Quando você aposta o flop de forma polarizada, aposte o turn que completa o draw

**Faça:** se você apostou o flop com a parte polarizada (underpair, draw), aposte também os turns que completam alguma coisa.

**Por quê:** a parte polarizada ataca mãos melhores e ainda pressiona pares quando o draw completa. **[Aula]**

## Regra 22 — O river tem dois sizes

**Faça:** no river use um size médio (nunca menor que B70) e um muito alto (150% do pote ou all-in, conforme o SPR). **[Aula]**

**Blefe:** use a parte suited do range para blefar em rivers que completam, e a parte off nunca. Prefira blefar quando tem blocker. **[Aula]**

**Regra do topo do check:** se a mão faz parte do topo do seu range de check no turn, ela sempre aposta o river. **[Aula]**

---

# Parte 8 — Como aplicar na mesa

## Antes de apostar o flop, responda

1. **Que tipo de board é?** Conectado high, semi conectado, seco, monotone ou dobrado (seco ou carregado).
2. **Quanto o range do vilão interage com ele?** Posição, stack e profundidade.
3. **Dá para ter thin value?** Muitas mãos apostando: B25. Poucas: B50.
4. **Em que bucket está a minha mão?** 100%, 75%, 50% ou 25%.
5. **Como sorteio a frequência?** Naipe do board ou randomizador, com a mão inteira.

## Erros mais comuns

- Apostar 100% do range, ou 100% de uma mão que deveria ser 75%.
- Apostar o segundo par em 100%. Ele vai em 50% ou 25%.
- Usar um size baixo com uma mão forte "para o vilão pagar mais".
- Apostar underpair alto (7-7, 8-8 e 9-9) sem atacar nada.
- Apostar B40 no turn quando o range é polarizado.
- Randomizar um combo só, e não a mão inteira.
- Tratar o EP como o BB.

## Regras de bolso

1. Mãos mais fortes nos buckets mais altos.
2. Nenhum board se aposta 100%.
3. Só B25 e B50.
4. Thin value pede B25, e a falta dele pede B50.
5. A pior trinca vai sempre em 100% (menos no ultraconectado high).
6. Segundo e terceiro par ficam em 25% (e 50% nos boards secos).
7. Draw no meio: o com backdoor aposta, o sem dá check.
8. Naipe do board ou randomizador, sempre com a mão inteira.
9. Turn e river não se frequenciam: seguem o que você já faz.

---

# Cruzamento com o KB

| Ponto deste módulo | Onde se liga |
|---|---|
| O outro lado do check atrás | Módulo 14 (Probe Turn): depois de check-check no flop, o BB faz o probe no turn **[Inferência]** |
| Mudança de estratégia no multiway | Módulo 10 (Multiway): o instrutor diz que esta aula implica diretamente o multiway, que usava o método best of best |
| Sizes e linhas no turn e no river | Módulos 02, 03 e 04 (C-Bet IP, Second Barrel IP e Third Barrel) **[Inferência]** |
| Frequências em c-bet fora de posição | Módulo 05 (C-Bet OOP): o instrutor diz que ele já faz esse split e pouco muda |
| Frequências em blind war | Aula futura de blind war (a ser incluída) |

---

# Pendências e decisões

As pendências abertas estão em `06-Pendencias.md` e as decisões da construção do módulo estão em `09-Decisoes.md`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/15-Bet-vs-Missed/README|theory/15-Bet-vs-Missed]]

**Mesma pasta:** [[theory/15-Bet-vs-Missed/02-VideoAulas|02-VideoAulas]] · [[theory/15-Bet-vs-Missed/03-Solver|03-Solver]] · [[theory/15-Bet-vs-Missed/04-Exercicios|04-Exercicios]] · [[theory/15-Bet-vs-Missed/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/15-Bet-vs-Missed/06-Pendencias|06-Pendencias]] · [[theory/15-Bet-vs-Missed/07-Changelog|07-Changelog]] · [[theory/15-Bet-vs-Missed/08-Referencias|08-Referencias]] · [[theory/15-Bet-vs-Missed/09-Decisoes|09-Decisoes]]

**Módulos citados no texto:** [[theory/02-CBet-IP-40bb/README|02-CBet-IP-40bb]] · [[theory/05-CBet-OOP-40bb/README|05-CBet-OOP-40bb]] · [[theory/10-MULTIWAY-POT/README|10-MULTIWAY-POT]]

**Outros módulos:**

- [[theory/14-Probe-Turn/14 - PROBE TURN GUIDELINE|14-Probe-Turn · 01-Guideline]]
- [[theory/14-Probe-Turn/README|14-Probe-Turn · README]]

<!-- graphify-links:end -->
