---
tags:
  - modulo/15-bet-vs-missed
  - spot/srp
  - posicao/ip
  - street/flop
  - linha/bet-vs-missed
  - tipo/solver
---

# Solver — Bet vs Missed C-Bet

## Módulo 15 — Bet vs Missed C-Bet

---

# Contexto

A aula não mostra solver. O que existe é o guideline em imagem do instrutor (segunda versão), que traz o size e os buckets de cada tipo de flop. Este arquivo transcreve esse guideline.

Fonte:
Guideline em imagem do instrutor ("Bet vs Missed CBet", segunda versão).

Notação da imagem:

- **ST** é sequência, **FD** é flush draw, **OESD** é duas pontas e **GS** é gutshot.
- **BDFD + BDSD** é backdoor de flush e de sequência.
- **OP** é overpair, **UP** é under pair e **TS** é top set (top trinca).
- **TP** é top pair. **T2P** é top two pair. **2P** e **3P** são segundo e terceiro par. "2 pares" é dois pares.

---

# Flop conectado high (AKT): B50

Exemplo: A♠ K♥ T♦.

| Bucket | Mãos |
|---|---|
| **75%** | ST e FD nuts |
| **50%** | Sets, 2 pares, TP forte, OESD, BDFD + BDSD |
| **25%** | TP médio e fraco, 2P, 3P, UP, air, GS |

---

# Flop semi conectado (J96): B50

Exemplo: J♠ 9♥ 6♣.

| Bucket | Mãos |
|---|---|
| **100%** | Pior set, T2P e OP |
| **75%** | 2 pares, TP forte, ST |
| **50%** | TP médio, UP, FD, OESD, GS, BDFD + BDSD |
| **25%** | TP fraco, 2P, 3P, air |

---

# Flop seco (Q53): B25

Exemplo: Q♠ 5♥ 3♣.

| Bucket | Mãos |
|---|---|
| **100%** | OP e sets |
| **75%** | 2 pares, TPs e TS |
| **50%** | Todo o restante |

---

# Flop monotone (A98): B25

Exemplo: A♠ 9♠ 8♠.

| Bucket | Mãos |
|---|---|
| **75%** | Set, BDSD |
| **50%** | Flush, 2 pares, top pair, FD, OESD e GS |
| **25%** | Todo o restante |

---

# Flop dobrado (KK7): B25

Exemplo: K♠ K♥ 7♣.

| Tipo | Bucket | Mãos |
|---|---|---|
| **Seco** | 75% | Fulls e trincas |
| **Seco** | 50% | Todo o restante |
| **Carregado** | 50% | Mãos com mais equity |
| **Carregado** | 25% | Todo o restante |

---

# Padrões

- **O bucket mais alto de cada board tem as mãos mais fortes.**
- **Os boards em que se pode ter thin value usam B25:** seco, monotone e dobrado. Os outros usam B50.
- **Conectado high, monotone e dobrado não têm bucket de 100%.**
- **Os buckets baixos (25%) concentram as mãos fracas e os blefes:** underpair baixo, terceiro par, air e gutshot.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/15-Bet-vs-Missed/README|theory/15-Bet-vs-Missed]]

**Mesma pasta:** [[theory/15-Bet-vs-Missed/01-Guideline|01-Guideline]] · [[theory/15-Bet-vs-Missed/02-VideoAulas|02-VideoAulas]] · [[theory/15-Bet-vs-Missed/04-Exercicios|04-Exercicios]] · [[theory/15-Bet-vs-Missed/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/15-Bet-vs-Missed/06-Pendencias|06-Pendencias]] · [[theory/15-Bet-vs-Missed/07-Changelog|07-Changelog]] · [[theory/15-Bet-vs-Missed/08-Referencias|08-Referencias]] · [[theory/15-Bet-vs-Missed/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
