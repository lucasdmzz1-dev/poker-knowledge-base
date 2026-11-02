---
tags:
  - modulo/10-multiway-pot
  - spot/multiway
  - street/flop
  - street/turn
  - stack/40bb
  - tipo/changelog
---

# Changelog — Multiway Pot

---

# Versão 1.0

## Criação do módulo

Fonte: guideline do instrutor + videoaula prática + transcrição.

Contexto definido:

- Stack: 40bb (base).
- Spot: 3-way — EP abre, BTN paga, BB paga.
- Motivador: liberação da função 3-way no GTOWizard + análise de MDA do field.

---

## Conteúdos adicionados

- Diagnóstico dos três erros da estratégia antiga (C-Bet quase-range OOP, Bet-vs-Missed tratado como range, overfold generalizado).
- Dado de referência: frequência média de C-Bet do field multiway ≈ 35%.
- Situação 1 (Hero OOP/agressor): Split C-Bet, reação a Bet+Call por textura, sizing de turn (B40 dinâmico / B100 blank).
- Situação 2 (Hero IP): Split Bet-vs-Missed, reação a C-Bet e Check-Raise, sizing de turn (B70).
- Situação 3 (Hero BB): ausência de Check-Raise contra agressor que não falou, ausência de Probe Turn quando todos checaram, e o conceito de Lead no Turn (B25) como situação exclusiva do multiway.
- Tabela de sizing de referência rápida.
- Nota sobre Lead do Small Blind (identificado, não implementado).

---

## Estrutura KB aplicada

Criados:

- README.
- Guideline.
- VideoAulas.
- Regras Consolidadas.
- Pendências.

Pendentes (ver 06-Pendencias.md):

- Solver detalhado.
- Exercícios.
- Referências formalizadas.
- Decisões estruturais.

---

# Versão 1.1

Ordem de prioridade das fontes padronizada na ordem geral do `theory/CLAUDE.md` (decisão do autor do KB, 28/10/2026). `08-Referencias.md` e `09-Decisoes.md` atualizados, e a pendência correspondente resolvida. Nenhuma regra de estratégia mudou.

---

# Próximas Atualizações

Adicionar:

- Divisão fina de combos por categoria (próxima etapa anunciada pelo instrutor).
- Resoluções em efetivos menores (20bb, 15bb).
- Cobertura de River.
- Exercícios práticos.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/10-MULTIWAY-POT/README|theory/10-MULTIWAY-POT]]

**Mesma pasta:** [[theory/10-MULTIWAY-POT/10 - MULTIWAY POT GUIDELINE|01-Guideline]] · [[theory/10-MULTIWAY-POT/02-VideoAulas|02-VideoAulas]] · [[theory/10-MULTIWAY-POT/03-Solver|03-Solver]] · [[theory/10-MULTIWAY-POT/04-Exercicios|04-Exercicios]] · [[theory/10-MULTIWAY-POT/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/10-MULTIWAY-POT/06-Pendencias|06-Pendencias]] · [[theory/10-MULTIWAY-POT/08-Referencias|08-Referencias]] · [[theory/10-MULTIWAY-POT/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
