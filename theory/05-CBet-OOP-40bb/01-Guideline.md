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
