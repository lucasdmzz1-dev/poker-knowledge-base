---
tags:
  - modulo/16-pko
  - tema/pko
  - street/preflop
  - posicao/ip
  - tema/icm
  - tipo/videoaulas
---

# VideoAulas — PKO

## Módulo 16 — PKO

---

# Contexto

Neste módulo **não há aula em vídeo**. Este arquivo registra as fontes do estudo e como cada uma foi usada.

---

# Fonte 1 — Notas do usuário (conhecimento de mesa)

O usuário informou, em texto:

- A tabela de valor do KO inicial por fase (PKO 50%), de 0,25 do SI com 100% do field até 0,50 no heads-up.
- O Help Value (bounty inicial ÷ stack inicial) e a redução de equity correspondente (3% a 11%). Os valores "−3%" e "−11%" do texto original foram lidos como 3% e 11%.
- A fórmula do dead money: (KO total ÷ KO inicial) × stack inicial × valor da fase.
- ICM: na mesa final do PKO o RP é cerca de metade do de um torneio convencional; na bolha joga-se mais apertado por haver menos fold equity.
- Como pensa o range: cobertura do opener e dos stacks à esquerda, stack relativo à média do torneio e da mesa, valor do bounty, posição do opener e fase.
- Que o objetivo é entender para onde o range corre, e não cravar ranges.

---

# Fonte 2 — Árvores do 4BET Trainer (aba Solver)

- 52 árvores de PKO 50% (de ~15% a 95% do field restante), com 203 nós de BTN contra um open, lidos pelo Chrome conectado.
- Para cada nó: cabeçalho (% do field, restantes, média, SI, KOI, posições pagas), stacks e bounties de todos os assentos, tamanho do open, RP e o range do BTN (fold, call, 3bet e 10 classes de mão).
- 30 grades de 169 mãos com leitura consistente (10 descartadas por all-in com hero curto).

Resultados em `03-Solver.md`.

---

# Fonte 3 — Mãos jogadas no Trainer

- 70 mãos (20 na v1 da regra e 50 na v2), todas BTN contra um open, comparadas com a ação do solver.
- Os erros foram abertos pela tela "View Solver Solution" para entender a causa.

Resultados em `04-Exercicios.md` e em `pko-maos-jogadas.csv`.

---

# Fonte 4 — Solver de referência (Vanilla)

Prints do GTO Wizard (ChipEV, 40bb, contra o open da posição à direita): HJ contra LJ, CO contra HJ, BTN contra CO e SB contra BTN. Usado como baseline.

---

# Como cada fonte foi usada

- As notas definem as variáveis e as hipóteses.
- As árvores medem a direção e o tamanho dos efeitos e a ordem de entrada das mãos.
- O Trainer testa se a regra funciona fora das árvores usadas para montá-la.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/16-PKO/README|theory/16-PKO]]

**Mesma pasta:** [[theory/16-PKO/16 - PKO GUIDELINE|01-Guideline]] · [[theory/16-PKO/03-Solver|03-Solver]] · [[theory/16-PKO/04-Exercicios|04-Exercicios]] · [[theory/16-PKO/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/16-PKO/06-Pendencias|06-Pendencias]] · [[theory/16-PKO/07-Changelog|07-Changelog]] · [[theory/16-PKO/08-Referencias|08-Referencias]] · [[theory/16-PKO/09-Decisoes|09-Decisoes]] · [[theory/16-PKO/CLAUDE|CLAUDE]]

<!-- graphify-links:end -->
