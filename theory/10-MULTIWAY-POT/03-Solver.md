# Solver — Multiway Pot

## Módulo 10 — Multiway Pot

---

# Status

Pendente de preenchimento detalhado.

A ferramenta usada para validar este módulo foi o GTOWizard, na função 3-way recém-lançada. Diferente dos softwares multiway anteriores (que davam respostas inconsistentes dependendo da quantidade de mãos simuladas), essa função permite consultar diretamente a solução da biblioteca por efetivo de stack e ação pré-flop.

---

# O que já foi validado por solver (resumo — ver 01-Guideline.md para detalhe)

- Frequência de C-Bet OOP: split, não range.
- Frequência de Bet-vs-Missed: split, não range.
- Ausência de Check-Raise do BB contra agressor que ainda não apostou.
- Ausência de Probe Turn quando o flop foi check-check-check (frequência próxima de zero em praticamente todas as texturas testadas, incluindo boards pareados e boards que pareiam no turn).
- Existência do Lead no Turn do BB, com B25 como único size identificado (nenhuma interação de B70 encontrada).
- Possibilidade de Lead do Small Blind em boards low conectados, com frequência baixa.

---

# Pendente

- Frequências exatas por textura específica (A-high, Broadway, Low, Monotone, Pareado).
- Distribuição completa de combos por bucket.
- Validação em efetivos de 20bb e abaixo.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/10-MULTIWAY-POT/README|theory/10-MULTIWAY-POT]]

**Mesma pasta:** [[theory/10-MULTIWAY-POT/01-Guideline|01-Guideline]] · [[theory/10-MULTIWAY-POT/02-VideoAulas|02-VideoAulas]] · [[theory/10-MULTIWAY-POT/04-Exercicios|04-Exercicios]] · [[theory/10-MULTIWAY-POT/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/10-MULTIWAY-POT/06-Pendencias|06-Pendencias]] · [[theory/10-MULTIWAY-POT/07-Changelog|07-Changelog]] · [[theory/10-MULTIWAY-POT/08-Referencias|08-Referencias]] · [[theory/10-MULTIWAY-POT/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
