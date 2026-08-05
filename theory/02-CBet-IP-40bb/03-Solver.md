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
