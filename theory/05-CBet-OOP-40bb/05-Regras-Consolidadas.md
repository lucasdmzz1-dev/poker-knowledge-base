# Regras Consolidadas — C-Bet OOP

## Módulo — SRP OOP C-Bet Flop

---

# Contexto

Stack:
40bb

Spot:
SRP

Posição:
OOP

Relações:

- EP vs BTN
- CO vs BTN

Street:

Flop

---

# Regra 1 — C-Bet OOP é construção de range

A decisão não é:

"Minha mão é boa?"

A decisão é:

"Como essa mão se encaixa na construção do meu range de bet e check?"

---

# Regra 2 — O range de check precisa ser protegido

Não podemos construir:

Bet = mãos fortes

Check = mãos fracas

O range de check precisa conter:

- Valor.
- Showdown value.
- Mãos capazes de continuar.
- Mãos fortes para proteção.

---

# Regra 3 — EP vs BTN e CO vs BTN são estratégias diferentes

Não utilizar a mesma estratégia para os dois spots.

Motivo:

A composição dos ranges é diferente.

---

# Regra 4 — Escolher primeiro a estratégia do board

Antes de escolher uma mão:

Identificar:

- Range.
- Split Range.
- Split 25%.
- Check Range.

A mão individual vem depois.

---

# Regra 5 — Split Range

Utilizar quando queremos dividir uma grande parte do range.

Construção:

## Top Pairs

Metade dos Top Pairs.

Usar com os naipes do board.

---

## Second Pairs

Metade dos Second Pairs.

Usar com os naipes do board.

---

## Draws

Preferência:

- 2 pontas sem naipe do board.
- Brocas com naipe do board.

---

## Backdoors

Entram:

- BDFD.
- BDST.

---

# Regra 6 — Split 25%

Utilizado quando queremos uma frequência menor de aposta.

---

## Top Pair

Entram:

- Parte off com naipe do Flush Draw.
- Parte suited com BDFD.

Board rainbow:

- Usar mãos sem naipe do board.

---

## Draws

Preferência:

- 2 pontas com naipe do board.
- Brocas com naipe do board.

---

# Regra 7 — Top Pair não é automático

Top Pair pode:

- Apostar.
- Checar.

Critérios:

- Kicker.
- Naipe.
- Textura.
- Necessidade de proteção.

---

# Regra 8 — Second Pair possui divisão

Second Pair pode entrar no:

Bet:

Quando possui:

- Melhor kicker.
- Melhor interação.
- Valor/proteção.

Check:

Quando:

- Quer realizar equity.
- Não quer enfrentar agressão.

---

# Regra 9 — Mãos muito fortes também podem checar

Trincas e mãos fortes podem permanecer no check.

Objetivo:

- Proteger o range de check.
- Evitar que o adversário ataque todo check.

---

# Regra 10 — Nem todo draw aposta

A decisão depende de:

- Equity.
- Capacidade de continuar.
- Blockers.
- Realização de equity.

---

# Regra 11 — Low conectado e Low desconectado possuem estratégias diferentes

## Low conectado

Board muda mais.

Utilizamos size menor.

---

## Low desconectado

Valor precisa de proteção.

Utilizamos size maior.

---

# Regra 12 — Monotone CO vs BTN

Estratégia:

Check Range.

---

# Regra 13 — Size faz parte da estratégia

Não é apenas quantidade de apostas.

O size escolhido representa:

- Construção do range.
- Textura do board.
- Objetivo da aposta.

---

# Regra principal do módulo

C-Bet OOP é construir dois ranges funcionais:

Range de Bet:

- Extrai valor.
- Protege mãos.
- Pressiona.

Range de Check:

- Possui força.
- Realiza equity.
- Protege contra exploração.
