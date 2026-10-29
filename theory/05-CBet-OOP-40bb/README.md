---
tags:
  - modulo/05-cbet-oop-40bb
  - spot/srp
  - posicao/oop
  - street/flop
  - street/turn
  - linha/cbet
  - linha/second-barrel
  - stack/40bb
  - tipo/modulo
---

# C-Bet OOP

## Módulo — SRP OOP C-Bet Flop

---

# Contexto do Módulo

Stack:
40bb

Spot:
SRP (Single Raised Pot)

Posição:
OOP

Relação de posições:

- EP vs BTN
- CO vs BTN

Street:
Flop (C-Bet) e Turn (Second Barrel — só range de valor)

Fonte:

- Videoaulas
- Guideline
- Gyazos (Solver)
- Exercícios
- Correções

---

# Objetivo

Construir uma estratégia completa de C-Bet fora de posição.

O objetivo não é apenas saber quando apostar.

O objetivo é entender:

- Construção do range de bet.
- Construção do range de check.
- Quando utilizar splits.
- Como proteger o range de check.
- Como escolher mãos dentro dos splits.
- Como adaptar a estratégia conforme posição e textura.

---

# Conceito Central

C-Bet OOP não é simplesmente apostar mãos fortes.

A estratégia é baseada em equilíbrio entre:

- Valor apostando.
- Proteção do check.
- Realização de equity.
- Construção de ranges que continuam jogáveis.

---

# Diferença Fundamental

Quando jogamos OOP:

Não podemos deixar o range de check fraco.

Portanto:

Nem todas as mãos fortes apostam.

Algumas mãos fortes permanecem no check para proteger a estratégia.

---

# Estrutura do Módulo

## 1. Contexto

Definição do spot:

40bb  
SRP  
OOP  
EP vs BTN / CO vs BTN

---

## 2. Construção dos Splits

Entender:

- Split Range.
- Split 25%.

---

## 3. Estratégia por textura

Boards:

- A High seco.
- A High conectado.
- BBX.
- KQ High.
- JT High.
- High com sequência.
- Low com sequência.
- Low sem sequência.
- Monotone.

---

## 4. Construção das mãos

Categorias:

- Top Pair.
- Second Pair.
- Trincas.
- Draws.
- Backdoors.
- Blockers.

---

## 5. Second Barrel OOP (Turn)

Spot: C-Bet no flop pago.

Estratégia de valor por textura de turn:

- Blank.
- Dinâmico, high card seco.
- High card carregado.
- Dinâmico, flush.

Detalhes em `01-Guideline.md`, seção Second Barrel OOP.

Bluffs, semi-bluffs e check no turn ainda pendentes.

---

# Resultado Esperado

Ao finalizar o módulo o jogador deve conseguir:

- Identificar o tipo de board.
- Escolher o size correto.
- Saber quando usar split.
- Construir bet e check.
- Entender quais mãos entram em cada parte.
- Escolher size e range de valor do Second Barrel conforme a textura do turn.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/README|theory]]

**Nesta pasta:**

- [[theory/05-CBet-OOP-40bb/05 - CBET OOP 40BB GUIDELINE|01-Guideline]]
- [[theory/05-CBet-OOP-40bb/02-VideoAulas|02-VideoAulas]]
- [[theory/05-CBet-OOP-40bb/03-Solver|03-Solver]]
- [[theory/05-CBet-OOP-40bb/04-Exercicios|04-Exercicios]]
- [[theory/05-CBet-OOP-40bb/05-Regras-Consolidadas|05-Regras-Consolidadas]]
- [[theory/05-CBet-OOP-40bb/06-Pendencias|06-Pendencias]]
- [[theory/05-CBet-OOP-40bb/07-Changelog|07-Changelog]]
- [[theory/05-CBet-OOP-40bb/08-Referencias|08-Referencias]]
- [[theory/05-CBet-OOP-40bb/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
