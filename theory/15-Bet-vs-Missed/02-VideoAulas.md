---
tags:
  - modulo/15-bet-vs-missed
  - spot/srp
  - posicao/ip
  - street/flop
  - linha/bet-vs-missed
  - tipo/videoaulas
---

# VideoAulas — Bet vs Missed C-Bet

## Módulo 15 — Bet vs Missed C-Bet

---

# Contexto

Formato:
Aula de cerca de 2 horas, dividida em duas partes. A primeira hora é a teoria e a revisão de mãos do flop, e a segunda traz o guideline em imagem e as mãos de turn e river. A tela mostra o replayer à esquerda e as anotações do instrutor à direita.

Spot:
O adversário abre pré-flop, o instrutor (e o aluno) paga em posição, e o flop termina com check do agressor (missed c-bet). A decisão é do jogador em posição.

Stacks:
A estratégia vale como um todo, e não é específica de um stack. Os exemplos usam de 50bb a 90bb (a aula cita 80bb e 90bb).

Fonte:

- Aula (transcrição e SRT).
- Guideline em imagem do instrutor (segunda versão).

---

# Objetivo da Aula

Melhorar uma estratégia antiga, que já dava lucro, mas deixava buracos nas ruas seguintes. A ideia é dividir o range em frequências (100%, 75%, 50% e 25%) em vez de apostar sempre os melhores e dar check com os piores, e usar dois sizes (B25 e B50).

---

# Por Que Mudar

O instrutor mede a estratégia antiga e diz que ela ganhava bem, mas que dá para ganhar mais. O problema era ser linear demais: apostar o melhor de cada grupo e não apostar os outros.

Isso gerava quatro deficiências nas ruas seguintes:

- Sem mãos boas para dar raise no turn, o vilão realizava mais equity do que devia e roubava EV.
- Poucas mãos naturais para pagar turn e river.
- Poucas mãos para apostar o river depois do check do vilão.
- Mãos fortes sempre apostando, o que deixava o range de check capado.

Com a nova estratégia, contra o double check você tem um range mais forte para apostar, e contra o delayed c-bet tem mãos mais claras (top pair, trincas e sequências).

O instrutor conta que, há um tempo, o exploit de apostar o flop em 100% dava cerca de 30% a mais de realização que a teoria. Os jogadores melhoraram, depois o foco passou a ser o topo ganhar mais, e agora, com os adversários atacando melhor as outras linhas, é preciso jogar de forma mais balanceada.

---

# A Nova Lógica: Frequências

A aula passa a pensar o poker em quatro buckets: 100%, 75%, 50% e 25% (e às vezes 0%).

Duas regras guiam tudo:

- Se você coloca dinheiro no pote com frequência alta, quer mãos melhores. Se coloca com frequência baixa, a aposta vem das mãos piores.
- Em cada bucket entram mãos de valor e de bluff. Em vez de pensar "valor, blefe e check", pense "100%, 75%, 50% e 25%".

O trabalho do jogador é aprender a classificar o board e colocar as mãos mais fortes e com mais equity nos buckets altos, e as mais fracas nos baixos.

O instrutor dá regras fixas:

- **Nenhum board se aposta 100%.** O agressor não está capado.
- **A pior trinca sempre vai em 100%,** mesmo que o solver mostre outra coisa para um board específico. A exceção é o board ultraconectado high.
- **Os draws ficam em buckets médios.**
- **Underpair só aposta se ataca:** 2-2 a 4-4 sim, 7-7 a 9-9 não.

---

# Os Sizes

Só dois sizes:

- **B25:** quando você quer thin value, ou seja, muitas mãos apostando.
- **B50:** quando você não quer thin value.

O instrutor explica por que não usa B70: o grupo de mãos que paga um B70 é difícil de prever, e o jogador não consegue replicar o solver. Contra jogadores muito bons ele sobe até perto de 60% do pote, mas a composição do range quase não muda de B50 para B60.

A regra do size é sempre a mesma: **o size acompanha o grupo de mãos que você aposta, e não a mão que você tem.** Um erro comum é "o vilão paga mais se eu apostar pouco com a mão forte".

---

# Os Cinco Tipos de Flop

Cada tipo tem um size e buckets próprios. O instrutor mostra a tabela no guideline em imagem.

- **Conectado high** (por exemplo AKT): B50. Não existe mão em 100%. A frequência média de aposta fica em 30% a 35%. Dois pares e TP forte vão em 50% aqui, e em 75% no semi conectado (confirmado pelo coach).
- **Semi conectado** (por exemplo J96): B50. A pior trinca, o top two pair e o overpair vão em 100%.
- **Seco** (por exemplo Q53): B25. Muito thin value, então não existe bucket de 25%. A frequência média é de 55% a 65%. A top trinca vai em 75%, porque bloqueia o valor que você sempre dá check.
- **Monotone** (por exemplo A98): B25. Três buckets (75%, 50% e 25%). Aqui o valor não vem do raise no turn, então a ideia é apostar os melhores flushes e dar check com os piores, que induz blefes.
- **Dobrado** (por exemplo KK7): B25. No seco (J-3-3) aposta-se 75% das melhores e 50% do restante, e no carregado (J-J-9) 50% das melhores e 25% do restante.

A classificação depende do range do vilão. O 9-8-6 contra o HJ é semi conectado, o 8-7-6 deep também, o 8-5-4 é como um seco, e o 8-7-6 de CO contra BTN é um board conectado.

---

# Como Dividir na Prática

O instrutor mostra duas ferramentas:

- **O naipe do board:** a mão com o naipe do flush draw tem mais equity, aposta mais e toma menos raise. Ele usa isso para chegar na frequência quando a mão tem vários combos.
- **O randomizador:** de 0 a 75 aposta, de 76 em diante dá check. Em pares do board, randomize todos os combos, e não só um naipe.

Ele avisa que não é preciso ficar sorteando em todo spot: cada um monta o seu sistema.

No jogo short stack ele joga um pouco diferente: dá mais check com a mão que tem o naipe e aposta mais com a que não tem, porque quer realizar mais equity.

---

# A Revisão de Mãos do Flop

O instrutor mostra mãos de alunos e comenta cada uma.

- **AJ no A-K-2:** a mão vai em 75%, com B50. A mão original apostou sempre e com um size baixo. O board é robusto, então os pares piores não pagam.
- **A-5-3 e boards secos (9-4-2, T-3-2, Q-6-4):** muito thin value, size B25, segundo par em 50%.
- **Boards com três cartas Broadway:** os piores. O 4-4 é excelente bluff, com 25% e B50. O 7-7, o 8-8 e o 9-9 ficam em 0%.
- **Último par do board:** 25%, com o naipe (por exemplo o 6♠5♠ de espadas).
- **Gutshot ou draw com mais equity:** 50%, preferindo o naipe.
- **Top pairs:** os mais fortes em 75%, os médios em 50% e os fracos em 25%.
- **Segundo par e terceiro par:** 25% (50% em boards secos).
- **8-8 em board low:** segundo par em 50%, só os com o naipe. Todos os alunos apostavam 100%.
- **Valet 7 num seco:** um dos piores Js, então dá check mais vezes.
- **Monotone:** apostar os melhores flushes, e dar check com os piores e com as mãos que bloqueiam o que o vilão paga (por exemplo o A-J do naipe).
- **A-J no J-J-9 (trinca):** dar check, induzir o turn e dar raise.

O instrutor reforça que o ganho de dar check com mãos como o 8-8 é que você não folda em nenhum turn, e chega ao river com mãos naturais.

---

# Turn e River

Depois do guideline, a segunda parte da aula revisa mãos de turn e river. Os pontos:

- **No turn não se frequencia.** A frequência é do flop. No turn você segue o que já faz.
- **O turn é mais polarizado, e o size sobe.** Dois terços ou pote, conforme o grupo de mãos. No turn blank o range de valor é curto, e o instrutor usa o geométrico. Com stack muito deep, em vez do geométrico cheio, ele faz overbet de 120% a 150%.
- **Sem thin value, size alto ou check.** Por exemplo, AA no turn 2 aposta com um size alto, e um B40 não ataca nada.
- **Dinâmico de carta alta, querendo muitos TP:** B70. Se for um Ás e você não quer thin value, pote.
- **Quando o flop foi polarizado, aposte os turns que completam o draw,** para atacar os pares que antes pagaram.
- **Se o EP ou o MP abriu, o range é outro.** Com 80bb, num board Broadway e turn Q, AJ é check, porque a mão não tem equity para três streets.
- **River com dois sizes:** um médio (nunca menor que B70) e um muito alto (150% ou all-in). Blefe só com a parte suited do range, que bloqueia o valor.
- **A mão que está no topo do seu range de check no turn sempre aposta o river.**

---

# Fechamento

O instrutor lembra que a mudança é pequena: o jogador já faz boa parte disso. A ideia é refinar, por exemplo apostar o AJ no A-K-2 em 75%, em vez de 100%, e o 9-8 em 25%, em vez de 50%.

Para treinar, ele sugere filtrar no Hand2Note as mãos de bet vs missed e rever as próprias mãos, porque ver as próprias mãos é "um tapa na cara". A aula é o começo de uma série: o mesmo método de frequências vai valer para a aula de blind war (na semana seguinte) e para o c-bet em posição (no futuro). O instrutor diz também que a aula implica diretamente o multiway, que usava o best of best method, e que o c-bet fora de posição já usa esse split.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/15-Bet-vs-Missed/README|theory/15-Bet-vs-Missed]]

**Mesma pasta:** [[theory/15-Bet-vs-Missed/01-Guideline|01-Guideline]] · [[theory/15-Bet-vs-Missed/03-Solver|03-Solver]] · [[theory/15-Bet-vs-Missed/04-Exercicios|04-Exercicios]] · [[theory/15-Bet-vs-Missed/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/15-Bet-vs-Missed/06-Pendencias|06-Pendencias]] · [[theory/15-Bet-vs-Missed/07-Changelog|07-Changelog]] · [[theory/15-Bet-vs-Missed/08-Referencias|08-Referencias]] · [[theory/15-Bet-vs-Missed/09-Decisoes|09-Decisoes]]

**Outros módulos:**

- [[theory/14-Probe-Turn/01-Guideline|14-Probe-Turn · 01-Guideline]]

<!-- graphify-links:end -->
