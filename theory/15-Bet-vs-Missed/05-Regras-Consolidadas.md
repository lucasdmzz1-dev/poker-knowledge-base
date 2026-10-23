# Regras Consolidadas – Bet vs Missed C-Bet

> Este documento reúne apenas as regras finais consolidadas durante o estudo do módulo.

---

# Filosofia Geral

Dividir o range em frequências (100%, 75%, 50% e 25%) em vez de apostar o melhor e dar check com o resto. As mãos mais fortes vão nos buckets mais altos, e o size sai do grupo de mãos que você aposta.

---

# Parte 1 — Por que a estratégia mudou

# Regra 1 — Pare de apostar sempre o melhor de cada grupo e dar check com o resto

A estratégia linear ganhava no flop, mas deixava buracos no turn e no river: poucas mãos para dar raise, pagar e apostar o river.

---

# Regra 2 — O agressor que deu check não está capado

Nenhum board se aposta 100% do range.

---

# Parte 2 — As frequências

# Regra 3 — As mãos mais fortes vão para os buckets mais altos

Em cada bucket entram mãos de valor e de bluff.

---

# Regra 4 — A pior trinca vai sempre em 100%

A exceção é o board ultraconectado high (AKT, QJT, QJ9, KJ9), em que não existe mão em 100%.

---

# Regra 5 — Os draws ficam nos buckets do meio

O draw com backdoor aposta, e o sem backdoor dá check.

---

# Regra 6 — Underpair só aposta quando ataca mãos melhores

2-2 a 4-4 sim, 7-7 a 9-9 não (0%).

---

# Parte 3 — Os sizes

# Regra 7 — Use só B25 e B50

B25 quando você quer thin value, e B50 quando não quer. O B70 deixa o range de call imprevisível.

---

# Regra 8 — O size acompanha o grupo de mãos, e não a sua mão

Quanto mais mãos de valor apostando, menor o size.

---

# Regra 9 — Um size único por board

O que varia entre as mãos é a frequência.

---

# Parte 4 — Os cinco tipos de flop

# Regra 10 — Classifique o board e use a tabela dele

Conectado high (B50), semi conectado (B50), seco (B25), monotone (B25) e dobrado (B25). As tabelas estão em `03-Solver.md`.

---

# Regra 11 — Dobrado seco ou carregado depende do thin value

Seco: 75% das melhores e 50% do restante. Carregado: 50% das melhores e 25% do restante.

---

# Regra 12 — Decida seco, semi conectado ou conectado pelo range do vilão

9-8-6 contra o HJ é semi conectado, 8-5-4 é seco, e 8-7-6 de CO contra BTN é conectado.

---

# Parte 5 — Como dividir o bucket na mesa

# Regra 13 — Use o naipe ou um randomizador, sempre com a mão inteira

A mão com o naipe do board tem mais equity, toma menos raise e realiza mais até o river.

---

# Regra 14 — Com flush draw no board, os pares com o naipe apostam

---

# Regra 15 — Ajuste no jogo short stack

Um pouco mais de check com a mão do naipe, e mais aposta com a sem naipe.

---

# Parte 6 — Ajustes

# Regra 16 — Contra EP e MP o range é outro

# Regra 17 — A proporcionalidade mantém as frequências

# Regra 18 — Mais deep: não reabra a ação de graça

---

# Parte 7 — Turn e river

# Regra 19 — A frequência é do flop, e o turn segue o que você já faz

# Regra 20 — No turn o range é mais polarizado, e o size sobe

Sem thin value, size alto ou check. Ás no turn sem thin value: pote. Dinâmico de carta alta querendo muitos TP: B70.

---

# Regra 21 — Flop polarizado: aposte o turn que completa o draw

---

# Regra 22 — O river tem dois sizes

Um médio (nunca menor que B70) e um muito alto. A mão do topo do check no turn sempre aposta o river.

---

# Resumo Operacional

## Antes de apostar o flop

Que tipo de board é? O range do vilão interage com ele? Dá para ter thin value? Em que bucket está a mão? Como sorteio a frequência?

---

## Regra de bolso

Mãos mais fortes nos buckets mais altos. Nenhum board se aposta 100%. Só B25 e B50. A pior trinca sempre em 100%.

---

# Regra Principal do Módulo

Pense em frequências: o bucket mais alto de cada board tem as mãos mais fortes, e o size sai do grupo de mãos que você aposta.
