# Solver — C-Bet OOP

## Módulo — SRP OOP C-Bet Flop

---

# Contexto

Stack:
40bb

Spot:
SRP

Posição:
OOP

Vilão:
BTN

Relações:

- EP vs BTN
- CO vs BTN

Street:

Flop

---

# Observação

Os Gyazos presentes no material representam os outputs de Solver.

O Solver é utilizado para definir:

- Frequências de aposta.
- Estratégias Split.
- Sizes.
- Distribuição das mãos.

---

# Estratégia por Board

---

# A HIGH SECO

## EP vs BTN

Estratégia:

Split Range

Size:

B25

---

## CO vs BTN

Estratégia:

Split Range

Size:

B25

---

# A HIGH CONECTADO

## EP vs BTN

Estratégia:

Split Range

Size:

B40

---

## CO vs BTN

Estratégia:

Split 25%

Size:

B40

---

# BBX

## EP vs BTN

Estratégia:

Range

Size:

B25

---

## CO vs BTN

Estratégia:

Split 25%

Size:

B40

---

# K-Q HIGH

## EP vs BTN

Estratégia:

Split Range

Size:

B40

---

## CO vs BTN

Estratégia:

Split 25%

Size:

B40

---

# J-T HIGH

## EP vs BTN

Estratégia:

Split Range

Size:

B40

---

## CO vs BTN

Estratégia:

Split 25%

Size:

B70

---

# HIGH COM SEGUIDA

## EP vs BTN

Estratégia:

Split Range

Size:

B40

---

## CO vs BTN

Estratégia:

Split 25%

Size:

B40

---

# LOW COM SEGUIDA

## EP vs BTN

Estratégia:

Split Range

Size:

B70

---

## CO vs BTN

Estratégia:

Split Range

Size:

B40

---

# LOW SEM SEGUIDA

## EP vs BTN

Estratégia:

Split Range

Size:

B70

---

## CO vs BTN

Estratégia:

Split Range

Size:

B70

---

# MONOTONE

## EP vs BTN

Estratégia:

Aleatório

Size:

B25

---

## CO vs BTN

Estratégia:

Check Range

---

# Construção dos Splits

---

# Split Range

Composição:

## Top Pairs

Metade dos Top Pairs.

Critério:

Usar com os naipes do board.

---

## Second Pairs

Metade dos Second Pairs.

Critério:

Usar com os naipes do board.

---

## Draws

Entram:

- 2 pontas sem naipe do board.
- Brocas com naipe do board.

---

## Backdoors

Entram:

- BDFD.
- BDST.

---

# Split 25%

Composição:

---

## Top Pairs

25% dos Top Pairs.

Critérios:

- Parte off com o naipe do Flush Draw.
- Parte suited com BDFD.
- Board rainbow:
  - usar mãos sem o naipe do board.

---

## Draws

Entram:

- 2 pontas com naipe do board.
- Brocas com naipe do board.

Critério:

Utilizar o primeiro naipe do board para XR.

---

## Backdoors

Entram:

- Overcard + BDFD.
- BDST.

---

# Regras extraídas do Solver

1. O mesmo board pode possuir estratégia diferente entre EP vs BTN e CO vs BTN.

2. A posição de abertura altera o tamanho do split.

3. Boards conectados utilizam mais frequentemente sizes menores.

4. Boards Low desconectados permitem sizes maiores.

5. Monotone CO vs BTN possui estratégia de Check Range.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/05-CBet-OOP-40bb/README|theory/05-CBet-OOP-40bb]]

**Mesma pasta:** [[theory/05-CBet-OOP-40bb/01-Guideline|01-Guideline]] · [[theory/05-CBet-OOP-40bb/02-VideoAulas|02-VideoAulas]] · [[theory/05-CBet-OOP-40bb/04-Exercicios|04-Exercicios]] · [[theory/05-CBet-OOP-40bb/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/05-CBet-OOP-40bb/06-Pendencias|06-Pendencias]] · [[theory/05-CBet-OOP-40bb/07-Changelog|07-Changelog]] · [[theory/05-CBet-OOP-40bb/08-Referencias|08-Referencias]] · [[theory/05-CBet-OOP-40bb/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
