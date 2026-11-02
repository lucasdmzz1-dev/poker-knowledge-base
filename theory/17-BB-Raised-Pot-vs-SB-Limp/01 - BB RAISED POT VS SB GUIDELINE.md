# Guideline — BB Raised Pot vs SB

> **Módulo:** 17 — BB Raised Pot vs SB

**Fontes e prioridade neste módulo:** fala da aula, depois IMG2 (tabela dos splits), depois IMG1 (guideline por board), depois TXT. Marcas usadas: [aula], [IMG2], [IMG1], [TXT] e [inferência].

---

# Contexto

Stack: 40bb deep.
Spot: blind war. SB faz limp, BB faz raise de 3.5bb, SB paga.
Posições: Hero é o BB, em posição no flop.
Street: flop, com resumo do turn.
Relações: módulos 02, 05, 11, 14 e 15 (ver Referências cruzadas) e 12 e 13 (pré-flop).

---

# Premissas da aula

- O range de BB no pré-flop é polarizado: topo e lixo, pouca mão média. Sem cobertura linear, o BB não consegue apostar range em size médio, como um range de EP contra o BB, mesmo com mais nuts em alguns boards.
- O limp-call do SB defende pouco offsuit baixo: 7-3, 7-5, 8-6, T-6 e 9-6 não são defendidos. A parte offsuit começa em 8x, então carta de valor 8 ou mais no board significa que o SB acerta par.
- Perguntar sempre qual é o range do SB: quanto menos ele acerta o board, mais o BB pode apostar mãos finas em frequência alta.

---

# Regra base: thin value define o size

Thin value é uma escala. B25 é o máximo, B40 o intermediário e B70 o mínimo.

| Board | Size | Estratégia |
|---|---|---|
| Temos thin value | B25 | Range ou split B25 |
| Intermediário (o que sobrar) | B40 | Split B40 |
| Não temos thin value | B70 | Split B70 |

Quanto maior o size, menor a frequência de aposta e maior a necessidade de split.

---

# Tabelas de split [IMG2] / [TXT]

"All" significa o restante do range.

## Split B25 (board em que temos thin value)

| Bucket | Mãos |
|---|---|
| 100% | OP e sets (menos o top set) |
| 75% | 2 pares, top set, TP, bons draws |
| 50% | All |

## Split B40

| Bucket | Mãos |
|---|---|
| 75% | OP, sets, 2 pares, TP forte, FDs |
| 50% | TPs e melhores draws |
| 25% | All |
| 0% | Underpair |

## Split B70 (board em que não temos thin value)

| Bucket | Mãos |
|---|---|
| 75% | OP e TP forte |
| 50% | 2 pares, TPs e melhores draws |
| 25% | All |
| 0% | Underpair |

Detalhes da fala sobre o B70 [aula]:

- O top set vai no menor bucket possível, porque bloqueia os calls. Os outros sets ficam em 50% ou 75%, dependendo do spot.
- Second pair entra no bucket de 25%, sem refinar por kicker nesta fase.
- Em board favorável, com size menor que B70, o top set pode subir de bucket.

---

# Utilização do size por tipo de board [IMG2]

| Tipo de board | Size | Estratégia |
|---|---|---|
| Monotone | B25 | Split próprio de monotone (ver abaixo) |
| Dobrado seco | B25 | Range (100%) |
| A high seco | B25 | Range (100%) |
| Dobrado conectado | B25 | Split próprio de dobrado conectado (ver abaixo) |
| A high conectado | B25 | Split conforme a tabela B25 |
| Com seguida | B40 | Split B40 |
| Low desconectado | B40 | Split B40 |
| Low conectado | B70 | Split B70 |

A fala trata o monotone e o dobrado conectado como exceções com split próprio. A nota do IMG2 para o monotone diz que ele segue a lógica dos boards com thin value.

---

# Critérios por board [aula], com os boards da atividade conferidos no vídeo

| Board | Size | Frequência geral | Observações |
|---|---|---|---|
| K♠ T♠ Q♥ (triple broadway) | B70 | 25 a 33% | AK e KJ em 75%, K2 e J3 em 50%, mãos ruins como 6-3 e 9-3 em 25%. Sem faixa intermediária |
| 4♣ J♦ K♣ (K-J-4, 2 broadways) | B40 | maior que o K-T-Q | Há mais thin value, porque o 4 não é defendido |
| T♦ J♠ 8♣ (J-T-8) | B40 | n/a | Sequência: o SB tem sequências offsuit |
| J♦ Q♣ 8♣ (Q-J-8 com FD) | B40 | n/a | Flush draws de clubs em 50%. Certeza média na resposta do coach |
| Q-8-7 com FD, J-7-6 com FD, K-9-8 | B70 | n/a | Semi-conectado com flush draw: muita mudança de nuts. Exemplos falados |
| 4♣ 2♣ 8♦ (8-4-2) | B40 | n/a | As overcards mudam os nuts, e os pares do board perdem valor |
| 5♣ 7♥ 9♦ (9-7-5) | B70 | n/a | Low conectado sem thin value. Melhores draws em 50% |
| 4♥ Q♣ 9♣ (Q-9-4) | B40 | n/a | Duas cartas de valor 8 ou mais, então o SB acerta mais pares |
| Q-8-4 | B40 | n/a | Mesmo critério do Q-9-4 |
| T-7-4 com FD | B40 | n/a | O SB tem pouco 7 e pouco 4 |
| T-7-5 | sem size dito | n/a | "Piora um pouco" ao conectar |
| T-8-5 com FD | B70 | n/a | Conecta mais e fica dinâmico |
| 3♥ 6♥ Q♣ (Q-6-3 com FD) | B25 | 66 a 75% | Quase range. O bucket de 25% vira 100%. Tabela B25 |
| T-4-2, J-4-2 | B25 | n/a | High card com duas cartas baixas |
| A-K-2 e outros A high secos | B25 | 100% | Range |
| A-Q-3 com FD, A-9-8, A-T-9, A-J-T | B25 | n/a | A high carregado: split B25. A-Q-9 seria B40 em teoria, mas usa-se B25 |
| Dobrado seco | B25 | 100% | Range |
| Dobrado conectado (ex.: T-T-9) | B25 | ~50% | Trinca, full e quadra em 75%, o restante em 50% |
| Monotone | B25 | ~50% | Buckets de 25%, 50% e 75% (ver abaixo) |

Regras de leitura da aula:

- Duas cartas de valor menor que 8: B25. Duas de valor 8 ou mais: B40 [aula].
- Sequência pesa mais que broadway: B40. Exceções em B70: triple broadway e low conectado (9-7-5).
- Quanto mais o board conecta, pior para apostar mãos finas: T-7-4 B40, T-7-5 "piora", T-8-5 B70.
- O 8-4-2 é B40, apesar de ter duas cartas menores que 8 (exceção da fala; ver `06-Pendencias.md`).

---

# Monotone [aula]

B25, com buckets de 25%, 50% e 75% e frequência geral em torno de 50%. As mãos mais fortes vão nos buckets altos. Second pair vai no bucket de 25%, de preferência com carta do naipe. O mesmo split vale para qualquer monotone, inclusive o 7-8-9. O motivo de dar check é não tomar check-raise de mãos off com carta do naipe.

---

# Dobrado conectado [aula]

Frequência alta, mas com check desenvolvido, porque você toma mais check-raise e realiza menos equity. O split é: trinca, full e quadra em 75%, e todo o restante em 50%.

---

# Execução [aula]

- RNG: o bucket de 75% aposta de 0 a 75 e dá check de 76 em diante. A mesma lógica vale para 50% e 25%.
- Com flush draw no board, a mão com carta do naipe aposta mais e a sem carta dá check. Isso é uma simplificação.
- Sem flush draw, um split de 0 a 50 com RNG funciona.
- Pré-flop (opcional): splitar as offs de borda baixa em 50/50, ou colocar em 100% o lixo de 2x a 4x. A frequência agregada fica igual, mas 100% deixa parte descoberta.

---

# Turn [aula]

- Flop em check-check: o size do turn é sempre alto. B70 no mínimo quando você quer apostar todos os top pairs, e B100 ou mais quando quer apostar só top pair com bom kicker.
- Flop apostado: blank é geométrico. Carta que conecta com o board tende a B70. Flush com carta alta tende a B40, e flush com carta baixa a B70. A leitura desse trecho tem certeza média a baixa.
- Quanto mais top pairs você quer apostar, menor o size.

---

# Guideline por board [IMG1] — a confirmar

Dez boards com size, frequência geral e buckets. Os naipes de alguns boards divergiram entre leituras (ver `06-Pendencias.md`). Os buckets contradizem o IMG2 em vários pontos (ver `06-Pendencias.md`), então esta tabela não substitui as acima.

| # | Tipo | Board (valores) | Size | Freq. | Buckets (lidos) |
|---|---|---|---|---|---|
| 1 | Broadway | K-Q-8 | B70 | 25% | 75%: 2P, OPs, melhores TPs. 50%: TPs, melhores draws. 25%: trinca, piores TP, SP, piores draws, AIRs com BDFD e BDST |
| 2 | Semi-conectado | J-9-6 | B70 | 33% | Mesmos do #1 |
| 3 | Conectado | J-9-7 | B40 | 45% | 75%: seguida, 2P, OPs, melhores TPs. 50%: trinca, TPs, melhores draws. 25%: SP, piores draws, airs com BDFD e BDST |
| 4 | Low card | 7-5-2 | B40 | 66% | 100%: 2 pares e OPs. 75%: trinca, TPs e AIR. 50%: second pair, third pair, draws |
| 5 | High card (2 acima de 8x) | Q-8-3 | B40 | 50% | 75%: 2P, OPs, melhores TPs. 50%: trinca, TP, melhores draws. 25%: SP, third pair, piores draws, airs com BDFD e BDST |
| 6 | High card (2 abaixo de 8x) | Q-6-3 | B25 | 66% | Mesmos do #4 |
| 7 | A high | A-8-2 | B25 | 100% | Range |
| 8 | Dobrado seco | 8-8-3 | B25 | 100% | Range |
| 9 | Dobrado conectado | 9-9-8 | B25 | 55% | 75%: quadra, full, trinca. 50%: OP, SP, draws, airs |
| 10 | Monotone | K-9-4 | B25 | 50% | 75%: trinca, 2P, OP. 50%: flush, TP, AIR. 25%: SP, TP, A-K high |

Regras gerais do IMG1:

- Com thin value, size baixo: B25 quando o adversário tem menos pares (2 cartas abaixo de 8x) e B40 quando tem mais pares (2 cartas acima de 8x).
- Board com 2 broadways ou semi-conectado usa size "alto" (o termo é ambíguo; ver `06-Pendencias.md`).
- Dobrado sem conectividade: range B25.

---

# Referências cruzadas

- Módulo 11 (Value Bet Masterclass): sizing de valor (Regras 2 e 4).
- Módulo 15 (Bet vs Missed): mesmo método de buckets, RNG e thin value, com escala B25 e B50.
- Módulo 05: conceitos de split, com sentido de "25%" diferente do bucket deste módulo.
- Módulo 02: boards low em split e monotone e dobrado em B25.
- Módulo 14: B40 com sentido diferente.
- Módulos 12 e 13: pré-flop e blind war (ver `06-Pendencias.md`).

---

# Resumo da aula (formato Discord)

Texto pronto para postar, dividido em duas mensagens de até 2000 caracteres. Os títulos em negrito usam `**`.

## Mensagem 1

**BB raised pot vs SB limp (40bb deep)**

**Spot**
O SB faz limp, o BB (você) faz raise de 3.5bb e o SB paga. Você está em posição no flop.

**Ideia central**
Quase ninguém estuda esse pote, e a maioria aposta range em size baixo. O range de BB é polarizado: topo e lixo, pouca mão média. Isso impede de apostar range em size médio, como um range de EP faz contra o BB.
O limp-call do SB defende pouco offsuit baixo (7-3, 7-5, 8-6, T-6 e 9-6 não entram). A parte offsuit começa em 8x, então carta de valor 8 ou mais no board significa que o SB acerta par.

**Thin value define o size**
Thin value é uma escala: B25 é o máximo, B40 o intermediário e B70 o mínimo. Quanto menos thin value o board permite, maior o size e menor a frequência.
- Com thin value: B25
- Sem thin value: B70
- O que sobrar: B40

**Como dividir o range (split)**
Com size alto, as mãos fortes apostam mais e as fracas menos. Execução com RNG: no bucket de 75%, de 0 a 75 aposta e de 76 em diante dá check.
- B70: 75% overpair e top pair forte; 50% dois pares, top pairs e melhores draws; 25% o resto; 0% underpair
- B40: 75% overpair, sets, dois pares, top pair forte e FDs; 50% top pairs e melhores draws; 25% o resto; 0% underpair
- B25: 100% overpair e sets (menos o top set); 75% dois pares, top pair e bons draws; 50% o resto
- Top set: no B70 vai no menor bucket possível, porque bloqueia quem paga

## Mensagem 2

**Size por tipo de board**
- K-T-Q (triple broadway): B70
- K-J-4 (dois broadways): B40
- J-T-8 (sequência): B40, porque o SB tem sequências offsuit
- 9-7-5 (low conectado): B70
- 8-4-2 (low desconectado): B40
- Semi-conectado com flush draw (Q-8-7, J-7-6, K-9-8): B70
- High card: duas cartas abaixo do 8, B25 (Q-6-3, a 66–75%); duas de valor 8 ou mais, B40 (Q-9-4)
- A high: seco é range B25; carregado é split B25
- Dobrado seco: range B25
- Dobrado conectado: split, com trinca, full e quadra em 75% e o resto em 50%
- Monotone: B25, buckets 25/50/75, frequência geral de cerca de 50%

**Flush draw e execução**
Com flush draw no board, a mão com carta do naipe aposta mais e a sem carta dá check. Sem flush draw, um RNG de 0 a 50 serve. No pré-flop, randomizar é opcional.

**Turn**
- Flop em check-check: o size do turn é sempre alto. B70 se for apostar todos os top pairs, B100 ou mais se for só top pair com bom kicker
- Flop apostado: blank é geométrico, e carta que conecta tende a B70

**Stacks**
Por ora a mesma estratégia vale para outros stacks. O coach vai trazer ajustes pontuais para 20bb ou menos numa aula futura.
