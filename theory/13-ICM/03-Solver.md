# Solver — ICM e Risk Premium

## Módulo 13 — ICM e Risk Premium

---

# Contexto

Ferramenta:
GTO Wizard em modo ICM (MTT General ICM), mesa de 8 jogadores, comparando 25% e 16% do field left. O painel Bubble factor mostra o RP de cada posição contra cada outra.

Fonte:
Frames do vídeo da aula. Os grids foram lidos pela cor de cada célula, e os totais batem com os números mostrados na tela (diferença de até 1 ponto). A versão visual, com os grids lado a lado, está no arquivo `03-Solver-Ranges.html` (abra num navegador).

Convenção:
"Entra" é uma mão que era fold e passa a jogar. "Sai" é o contrário. "Muda de ação" é uma mão que joga nas duas fases com ação diferente.

---

# RP medido (16% left, LJ com 65bb)

| Posição | RP contra o LJ | RP do LJ contra a posição |
|---|---|---|
| UTG | +14,2% | |
| UTG1 | +13,5% | |
| HJ | +13,1% | +4,9% |
| CO | +16,1% | de +2% a +5% |
| BTN | +15,3% | de +2% a +5% |
| SB | +16,5% | de +2% a +5% |
| BB | +14,8% | de +2% a +5% |

No CO coberto de 34bb com 16% left, o RP contra os outros fica em +15,4% a +15,5%.

---

# 1. LJ abre (LJ com 65bb, cobre todos)

Stacks: UTG 34, UTG1 41, HJ 45, CO 21, BTN 26, SB 17,5, BB 29. Média de 35bb.

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Open raise | 26,4% | 40,1% | +13,7 |

**Entram com 16% left (27 mãos):**

- Suited: K3s, K2s, Q7s a Q3s, J7s a J5s, T7s, T6s, 97s, 87s, 76s, 65s, 54s.
- Offsuit: K9o, Q9o, J9o, T9o, K8o, A6o, A4o, A3o, A2o.
- Par: 44.

O topo do range não muda. A ampliação vem dos suited baixos e conectores, dos offsuit nas linhas do 9 e do 8 e dos Ax offsuit baixos.

---

# 2. HJ abre (HJ com 21bb, coberto por todos)

Stacks (25% left): UTG 29, UTG1 13, LJ 61, CO 45, BTN 125, SB 36,5, BB 68. Média de 50bb. O HJ tem 21bb nos dois cenários.

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Open raise | 24,4% | 14,8% | −9,6 |

**Saem com 16% left (16 mãos):** A3s, A2s, K7s, K6s, Q8s, Q7s, J9s, J8s, T8s, 98s, QJo, KTo, QTo, A9o, A8o, 55.

O corte vem dos suited médios e baixos, dos offsuit broadway fracos e dos Ax offsuit médios.

---

# 3. BTN (26bb) contra o open do LJ

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Call | 4,2% | 0% | −4,2 |
| Raise (3bet de 5bb) | 9,8% | 8,4% | −1,4 |
| Shove | 0% | 2,4% | +2,4 |
| Fold | 86% | 89,1% | +3,1 |

**Muda de ação:**

- O range de call (AJs, ATs, A9s, KQs, KJs, KTs, QJs, 88, 77, 66) desaparece.
- ATs, KQs, KJs, QJs e AQo passam a shove.
- AJs, A9s, A8s e KTs passam a 3bet.
- 77 e 66 viram fold.

**Saem:** A7s, A6s, K6s, K5s, Q9s, QJo e ATo (os 3bets mais fracos).

---

# 4. BTN (125bb) contra o open do HJ

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Call | 11,1% | 13,6% | +2,5 |
| Raise | 9,9% | 9,9% | 0 |
| Fold | 79% | 76,4% | −2,6 |
| VPIP | ~21% | ~23,5% | +2,5 |

**O aumento vem do call:**

- Entram em call: 87s, 65s, 54s e 22 (que eram fold).
- Passam de 3bet para call: AQs, A4s, KJs, KTs, QTs, AJo, 88 e 77.
- Entram em 3bet: K7s, K3s, K2s, Q8s, Q3s, KJo, ATo e A3o.
- AA passa de call para 3bet.

---

# 5. CO abre (CO com 64bb, cobre quase todos)

Stacks: UTG 58, UTG1 16, LJ 28, HJ 34, BTN 52, SB 45,5, BB 21. Média de 40bb.

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Open raise | 35,8% | 48,5% | +12,7 |

**Entram com 16% left (28 mãos):**

- Suited: Q4s a Q2s, J6s a J3s, T6s, T5s, 96s, 95s, 86s, 85s, 75s, 65s, 64s, 54s, 53s.
- Offsuit: K8o, Q8o, T8o, 98o, K7o, K5o, A3o, A2o.
- Pares: 33 e 22.

---

# 6. BB (21bb) contra o open do CO (64bb)

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Shove | 9% | 15,6% | +6,6 |
| Raise (7,5bb e 6,5bb) | 7,8% | 2,8% | −5 |
| Call | 45,7% | 21% | −24,7 |
| Fold | 37,5% | 60,6% | +23,1 |
| VPIP | 62,5% | 39,4% | −23,1 |

**Muda de ação:**

- AQs, AKo, QQ, JJ e TT passam de 3bet para shove.
- QJs, QTs, JTo, AQo, A6s, A9o, A7o, A5o e A2o passam a shove.
- K6s, J9s e 44 passam de shove para call.

**Viram fold (42 mãos):** os suited e offsuit fracos que pagavam, como Q2s, J5s a J2s, T6s a T2s, 95s a 92s, 85s a 82s, 74s a 72s, 63s, 62s, 52s, 43s, 42s, 32s, K8o, K7o, K6o, K5o, K4o, Q9o, Q8o, J9o, J8o, T8o, 98o, 87o, 76o, 65o e 54o.

---

# 7. CO (34bb) contra o open do HJ

Stacks (25% left): UTG 26, UTG1 58, LJ 18, HJ 66, BTN 82, SB 41,5, BB 73. Média de 50bb.

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Call | 2,8% | 0% | −2,8 |
| Raise (3bet) | 9,9% | 7,8% | −2,1 |
| Fold | 87,3% | 92,2% | +4,9 |

**Muda de ação:** AJs, ATs, KQs e KJs passam de call para 3bet.

**Viram fold:** A9s, QJs, 88 (que pagavam) e A7s, A6s, A5s, A2s, K9s, QTs, 99 (que 3betavam).

---

# 8. Blind war: SB (45,5bb) cobrindo o BB (21bb)

Média de 40bb.

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Shove | 12,8% | 27,3% | +14,5 |
| Raise (3bb e 2,5bb) | 26,4% | 66% | +39,6 |
| Limp | 43,4% | 0% | −43,4 |
| Fold | 17,5% | 6,7% | −10,8 |

Os números de call e raise da tela são 44,4% e 25,3% com 25% left, e 2,1% e 63,7% com 16% left. A leitura dos grids dá valores até 2 pontos diferentes.

**Muda de ação:**

- O range de limp (84 mãos) vira raise ou shove. Os A2s a A7s, KJs a K6s, QJs a Q7s e os offsuit AQo, AJo, ATo passam de limp a raise.
- Os suited baixos (K4s a K2s, Q6s a Q2s, J9s a J2s (menos o J5s), T9s a T2s, 97s a 93s) e alguns offsuit (98o, 87o) passam a shove.
- Os offsuit lixo que eram fold (94o, 84o, 74o, 64o, 93o, 83o, 73o, 53o, 43o, T3o, 92o, T2o) passam a raise.

---

# 9. Blind war: SB (36,5bb) coberto pelo BB (68bb)

Média de 50bb.

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Limp | 73% | 69,3% | −3,7 |
| Raise (3bb e 3,5bb) | 11% | 0% | −11 |
| Fold | 16% | 30,7% | +14,7 |

Os números da tela são 71,2% de call e 12,7% de raise com 25% left, e 69,2% de call e 0,1% de raise com 16% left.

**Muda de ação:** AA, AKs, AJs, ATs, KQs e JTs passam de raise para limp (o topo também protege o range de call).

**Viram fold (21 mãos):** 83s, 82s, 72s, 62s, 32s, T6o, 96o, J5o, T5o, 95o, 85o, 75o, J4o, T4o, 64o, 54o, Q3o, J3o, T3o, Q2o e J2o.

---

# 10. Blind war: SB (10,5bb) contra o BB

Média de 20bb.

| | 25% left | 16% left | Mudança |
|---|---|---|---|
| Shove | 47,8% | 31,7% | −16,1 |
| Raise (2,5bb) | 14,4% | 8,6% | −5,8 |
| Limp | 0,1% | 0% | 0 |
| Fold | 37,7% | 59,7% | +22 |

**Muda de ação:**

- QJs, QTs, JTs, 99 e 88 passam de raise para shove.
- K4s a K2s, Q6s a Q4s, J5s, T6s, Q9o e K8o passam de shove para raise.

**Saem (viram fold, 40 mãos):** suited baixos (Q3s, Q2s, J6s, J4s a J2s, T5s a T2s, 96s a 94s, 86s, 85s, 84s, 76s, 75s, 65s, 64s, 54s, 53s) e offsuit (Q8o, J8o, T8o, 98o, K7o, Q7o, J7o, T7o, 97o, 87o, K6o, Q6o, K5o, Q5o, K4o, Q4o, K3o, K2o).

Nunca existe limp, nas duas fases.

---

# Padrões

- **Quem cobre expande por baixo.** LJ e CO acrescentam suited baixos e conectores, offsuit na linha do 9 e do 8, e Ax offsuit baixos.
- **Quem é coberto corta o meio.** O HJ perde suited médios, Ax offsuit médios e broadways fracos, mas mantém o topo.
- **O call é o primeiro a sumir quando o RP sobe.** Nos spots do BTN contra o LJ e do CO coberto o range de call vira 3bet, shove ou fold. No BB cai de 45,7% para 21%.
- **O topo muda de ação, e não sai.** AA, AK, QQ e JJ passam de raise a shove (BB contra CO) ou a limp (SB coberto).
- **O limp desaparece com SB cobrindo o BB e com SB curto.** Quando coberto pelo BB, o raise some e o range protege o call.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/13-ICM/README|theory/13-ICM]]

**Relacionadas no mesmo módulo:** [[theory/13-ICM/01-Guideline|01-Guideline]]

<!-- graphify-links:end -->
