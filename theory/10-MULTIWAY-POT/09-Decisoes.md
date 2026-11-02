---
tags:
  - modulo/10-multiway-pot
  - spot/multiway
  - street/flop
  - street/turn
  - stack/40bb
  - tipo/decisoes
---

# Decisões – Multiway Pot

> Módulo 10 — Poker Knowledge Base

---

# Decisão 1 — Organizar por perspectiva (OOP / IP / BB), não por board

Diferente de outros módulos (organizados por textura), o Multiway Pot foi estruturado primeiro por posição/papel na mão, porque é essa variável que mais muda a estratégia. A divisão por textura de board acontece dentro de cada situação.

---

# Decisão 2 — Tratar "capado vs não capado" como conceito central

Toda regra do módulo (Check-Raise, Probe Turn, Lead) deriva dessa pergunta. Decidiu-se destacar isso explicitamente no Conceito Central do README em vez de deixar implícito, porque é o que conecta as três situações.

---

# Decisão 3 — Documentar o motivo da estratégia antiga estar errada

Diferente de módulos que só documentam o "o que fazer", este módulo mantém uma seção de diagnóstico do erro anterior (C-Bet quase-range, Bet-vs-Missed como range, overfold generalizado). Decisão: manter esse histórico, porque explica o porquê da mudança e ajuda a não regredir para o padrão antigo.

---

# Decisão 4 — Registrar o Lead do Small Blind como pendência, não como regra ativa

O instrutor mencionou a possibilidade mas decidiu não implementar ainda, por baixa frequência e diferença de EV pequena. Decisão: documentar em Pendências, não em Regras Consolidadas, para não passar a impressão de que já é parte da estratégia validada.

---

# Decisão 5 — Não presumir dados para efetivos não estudados

O estudo cobriu majoritariamente 40bb. Decisão: não extrapolar para 15-20bb por enquanto — registrado explicitamente como limitação em vez de tentar inferir a regra.

---

# Decisão 6 — Construção da KB

Toda nova informação (quando a divisão fina de combos chegar) deve passar por:

1. Atualização do Guideline.
2. Atualização das Regras Consolidadas.
3. Registro no Changelog.

---

# Decisão 7 — Ordem de prioridade das fontes

Em 28/10/2026, o autor do KB decidiu padronizar a ordem de prioridade das fontes na ordem geral do `theory/CLAUDE.md`: esclarecimento do autor do KB, correção do instrutor, solver, videoaula, guideline, exercícios. O encaixe das fontes deste módulo está em `08-Referencias.md`. Antes o solver vinha acima da correção do instrutor, e o MDA acima do guideline. O MDA passa a ser dado de apoio, não fonte de regra.

---

# Estado Atual

Módulo estruturado com:

- README.
- Guideline.
- VideoAulas.
- Regras Consolidadas.
- Pendências.
- Changelog.
- Referências.
- Decisões.

Pendente: Solver detalhado e Exercícios (ver 06-Pendencias.md).

---

# Próximos Passos

- Incorporar a divisão fina de combos quando disponibilizada.
- Adicionar resoluções de solver por textura específica.
- Criar exercícios práticos a partir de mãos reais.
- Expandir para River e efetivos menores.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/10-MULTIWAY-POT/README|theory/10-MULTIWAY-POT]]

**Mesma pasta:** [[theory/10-MULTIWAY-POT/10 - MULTIWAY POT GUIDELINE|01-Guideline]] · [[theory/10-MULTIWAY-POT/02-VideoAulas|02-VideoAulas]] · [[theory/10-MULTIWAY-POT/03-Solver|03-Solver]] · [[theory/10-MULTIWAY-POT/04-Exercicios|04-Exercicios]] · [[theory/10-MULTIWAY-POT/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/10-MULTIWAY-POT/06-Pendencias|06-Pendencias]] · [[theory/10-MULTIWAY-POT/07-Changelog|07-Changelog]] · [[theory/10-MULTIWAY-POT/08-Referencias|08-Referencias]]

<!-- graphify-links:end -->
