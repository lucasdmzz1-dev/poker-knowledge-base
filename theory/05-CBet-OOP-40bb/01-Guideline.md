# Guideline — C-Bet OOP

## Módulo — SRP OOP C-Bet Flop

---

# Contexto do Módulo

Stack:
40bb

Spot:
SRP

Posição:
OOP

Relações estudadas:

- EP vs BTN
- CO vs BTN

Street:
Flop

---

# Conceito Principal

C-Bet OOP não é baseado apenas em frequência de aposta.

A estratégia é construída através de:

- Range de bet.
- Range de check.
- Proteção do range de check.
- Realização de equity.
- Escolha das melhores mãos dentro de cada grupo.

O objetivo é evitar que o range de check fique fraco.

---

# Conceitos de Split

Existem dois principais tipos de construção:

---

# SPLIT RANGE

Estratégia onde dividimos uma grande parte do range entre:

- Bet.
- Check.

Não significa apostar pouco.

Significa distribuir mãos entre as duas ações.

---

## Construção do Split Range

### Top Pairs

Metade dos Top Pairs.

Critério:

- Usar com os naipes do board.

---

### Second Pairs

Metade dos Second Pairs.

Critério:

- Usar com os naipes do board.

---

### Draws

Entram:

- 2 pontas sem naipe do board.
- Brocas com naipe do board.

---

### Backdoors

Entram:

- Mãos com BDFD.
- Mãos com BDST.

---

# SPLIT 25%

Estratégia onde apenas uma parte menor do range aposta.

---

## Top Pairs

25% dos Top Pairs.

Critério:

- Parte off com o naipe do Flush Draw.
- Parte suited com BDFD.
- Em boards rainbow:
  - usar mãos sem o naipe do board.

---

## Draws

Entram:

- 2 pontas com naipe do board.
- Brocas com naipe do board.

Critério:

Usar o primeiro naipe do board para XR.

---

## Backdoors

Entram:

- Uma overcard + BDFD.
- BDST.

---

# Estratégia por Textura

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

# Construção por Categoria de Mão

---

# Top Pair

Não existe regra:

"Top Pair sempre aposta".

A escolha depende:

- Textura.
- Naipe.
- Necessidade de proteção.
- Construção do range de check.

---

# Second Pair

Também possui divisão.

Critérios:

- Kicker.
- Interação com board.
- Capacidade de continuar.

---

# Trincas

Nem toda trinca aposta.

A construção busca:

- Apostar parte das trincas.
- Manter parte das melhores trincas no check.

Objetivo:

Proteger o range de check.

---

# Draws

Nem todo draw aposta.

A decisão depende:

- Capacidade de continuar.
- Realização de equity.
- Blockers.

---

# Blockers

Os bluffs devem considerar:

- Quais mãos queremos fazer o vilão foldar.
- Quais cartas reduzem continuações adversárias.

---

# Regra Geral

C-Bet OOP não é maximizar apostas.

É construir dois ranges funcionais:

Range de Bet:

- Extrai valor.
- Pressiona.
- Protege mãos.

Range de Check:

- Possui força.
- Realiza equity.
- Protege contra exploração.


---

# Second Barrel OOP

Fonte: guideline do instrutor (ainda sem aula).

## Contexto

Stack:
40bb

Spot:
SRP, Hero agressor OOP, C-Bet no flop e pago.

Street:
Turn

---

## Estratégia por textura de turn

| Textura do turn | Size | Apostar |
|---|---|---|
| Blank | B100 | 2-3 melhores TP ou melhor |
| Dinâmico, high card seco | B40 | Todos os TP (deixar 1-2 piores no X/C) e os 2 melhores Second Pairs ou melhor |
| Dinâmico, high card seco, sem querer value de Second Pair | B70 | Todos os TP ou melhor |
| High card carregado | B100 | 1-2 melhores TP ou melhor |
| Dinâmico, flush | B40 | 2 melhores TP ou melhor |

---

## Leitura da lógica

Inferência a partir da tabela, não está escrita no guideline.

- O size acompanha a largura do range de valor. B40 inclui Second Pairs (range largo). B70 e B100 aparecem quando o range de valor é só TP ou melhor (range estreito).
- A mesma textura (dinâmico, high card seco) tem duas versões: B40 se queremos value de Second Pair, B70 se não queremos.
- Turn de flush é a exceção: o range é estreito (2 melhores TP), mas o size continua B40. Board que completa flush não pede size maior, porque o adversário passa a foldar mãos que deveriam continuar pagando (Regra 3 do módulo 11).
- Turn blank pede o size mais alto: sem mudança no que o vilão chega jogando, o top pair dele paga qualquer size (Regra 4 do módulo 11).

---

## Consistência com outros módulos

- Módulo 10, Multiway, situação 1: turn blank em B100 com os 3 melhores TP ou melhor, e dinâmico em B40 com Second Pairs fortes ou melhor. Os números batem.
- Módulo 11, Value Bet: a lógica de size por largura de range é a Regra 2.

---

## Em aberto

O guideline cobre só o range de valor. Bluffs, semi-bluffs e a composição do check no turn ainda não estão definidos (ver Pendências).

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/05-CBet-OOP-40bb/README|README]] · [[theory/05-CBet-OOP-40bb/02-VideoAulas|02-VideoAulas]] · [[theory/05-CBet-OOP-40bb/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/05-CBet-OOP-40bb/07-Changelog|07-Changelog]] · [[theory/05-CBet-OOP-40bb/03-Solver|03-Solver]]

**Módulos citados no texto:** [[theory/10-MULTIWAY-POT/README|10-MULTIWAY-POT]] · [[theory/11-Value-Bet-Masterclass/README|11-Value-Bet-Masterclass]]

**Outros módulos:**

- [[theory/06-XR-SHORT/09-Decisoes|06-XR-SHORT · 09-Decisoes]]
- [[theory/06-XR-SHORT/02-VideoAulas|06-XR-SHORT · 02-VideoAulas]]

<!-- graphify-links:end -->
