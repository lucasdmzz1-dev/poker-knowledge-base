---
tags:
  - modulo/02-cbet-ip-40bb
  - spot/srp
  - posicao/ip
  - street/flop
  - linha/cbet
  - stack/40bb
  - tipo/solver
---

# Solver – C-Bet IP 40bb

> Este documento registra apenas as conclusões obtidas através do Solver.

---

# Filosofia

O Solver adapta o sizing conforme:

- Textura do board.
- Posição de abertura.
- Vantagem de range.
- Vantagem de nuts.

O objetivo não é utilizar um único sizing para todos os boards.

---

# Estratégia EP / HJ

| Board | Size | Estratégia |
|--------|------|------------|
| A High | B25 | Range |
| Broadway | B40 | Range |
| Conectado | B40 | Range |
| Low | B70 | Split |
| Monotone | B25 | Range |
| Dobrado | B25 | Range |

---

# Estratégia CO / BU

| Board | Size | Estratégia |
|--------|------|------------|
| A High | B25 | Range |
| Broadway | B25 | Range |
| Conectado | B25 | Range |
| Low | B70 | Split |
| Monotone | B25 | Range |
| Dobrado | B25 | Range |

---

# Board Low

É o único board que utiliza estratégia Split.

A divisão ocorre entre:

- Valor.
- Bluff.
- Check.

---

# Construção do Range

O Solver prioriza:

- Agrupar mãos semelhantes.
- Simplificar frequências.
- Manter alto EV.
- Facilitar execução prática.

---

# Under 15bb

Nos boards Low:

- B70 → B40.
- Todos os Top Pairs apostam.
- Slowplay com Trincas.
- Slowplay com Sequências.
- Draws sem capacidade de Bet/Fold migram para Check.

---

# Objetivo

Maximizar EV utilizando diferentes sizings conforme a textura do board, mantendo uma estratégia simples e consistente.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/02-CBet-IP-40bb/README|theory/02-CBet-IP-40bb]]

**Mesma pasta:** [[theory/02-CBet-IP-40bb/02 - CBET IP 40BB GUIDELINE|01-Guideline]] · [[theory/02-CBet-IP-40bb/02-VideoAulas|02-VideoAulas]] · [[theory/02-CBet-IP-40bb/04-Exercicios|04-Exercicios]] · [[theory/02-CBet-IP-40bb/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/02-CBet-IP-40bb/06-Pendencias|06-Pendencias]] · [[theory/02-CBet-IP-40bb/07-Changelog|07-Changelog]] · [[theory/02-CBet-IP-40bb/08-Referencias|08-Referencias]] · [[theory/02-CBet-IP-40bb/09-Decisoes|09-Decisoes]]

**Outros módulos:**

- [[theory/01-CBet-IP-Short-Stack/03-Solver|01-CBet-IP-Short-Stack · 03-Solver]]

<!-- graphify-links:end -->
