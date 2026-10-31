# Guideline — Blind War BB vs SB

> **Módulo:** 17 — Blind War BB vs SB

---

# Objetivo

Definir o size e a frequência de aposta do BB no flop, por textura de board, e como dividir o range quando o size é alto.

---

# Regra base: size pelo thin value

| Thin value do board | Size | Estratégia |
|---|---|---|
| Muito thin value | B25 | Range bet |
| Intermediário | B40 | Split quando há mudança de nuts |
| Pouco ou nenhum thin value | B70 | Split |

A regra base cobre boards sem exceção. As exceções estão na seção seguinte.

---

# Exceções por textura

Ordem da aula. Quando um board se encaixa em mais de uma, a aula indica que a sequência (ou o flush draw) pesa mais.

| Textura | Size | Estratégia | Observação |
|---|---|---|---|
| Triple broadway (K-Q-T) | B70 | Split | Sem faixa intermediária |
| Low conectado (9-7-5) | B70 | Split | Sem thin value |
| Low desconectado (8-4-2) | B40 | Split | Mais mudança de nuts com overcards |
| Board com sequência | B40 | Split | Exceção: low conectado e triple broadway ficam em B70 |
| Ás-high seco | B25 | Range | Sem split |
| Ás-high com draw | B25 | Split | Quando a vantagem ainda é do BB |
| High card com duas cartas abaixo do 8 (ex.: Q-6-3) | B25 | Range ou split | Vilão defende menos pares |
| High card com duas cartas acima do 8 (ex.: K-J-4) | B40 | Split | Vilão defende mais pares |
| Semi conectado com flush draw (ex.: Q-8-7 de naipe) | B70 | Split | Muita mudança de nuts |
| Monotone | B70 ou B40 | Split 25/50/75 | Frequência média em torno de 50% |
| Dobrado seco | B25 | Range | Ver `06-Pendencias.md` |
| Dobrado conectado | B40 | Split: 50% geral, 75% nas mais fortes | Trincas, full e quadra em 75% |

Valores de carta são os da transcrição, que marcou alguns nomes de forma imprecisa. Confirmar todos os exemplos antes de usar (ver `06-Pendencias.md`).

---

# Divisão do range no B70

| Bucket | Frequência | Mãos |
|---|---|---|
| Alto | 75% | Overpair, top pair forte |
| Médio | 50% | Two pair, top pair com draw melhor, duas pontas de equidade média |
| Baixo | 25% | Second pair, mãos fracas com algum draw |
| Nenhum | 0% | Underpairs |

Regras de detalhe:

- Top trinca: frequência o mais baixa possível, porque bloqueia as mãos que pagam o size alto.
- Em board favorável, quando o size cai, a top trinca pode subir de frequência.
- Second pair entra no bucket de 25% por padrão.

---

# Flush draw no board

Quando o board tem flush draw, a divisão pode ser simplificada: mãos com carta do naipe apostam mais, e mãos sem a carta apostam menos. A aula diz que isso é uma forma de simplificar, não uma regra exata.

---

# Monotone

Frequência média em torno de 50%, com buckets de 75%, 50% e 25%. As mãos mais fortes vão para o bucket alto, e as mais fracas, para o baixo. Second pair fica em 25% com carta do naipe ou sem ela.

---

# Turn

Mesma lógica do flop. A aula resume assim:

- Carta que não muda o board (blank): segue o mesmo raciocínio do flop.
- Carta que conecta o board: tende a size mais alto.
- Flush com high card: tende a size médio.
- Flush com low card: tende a size alto, com range mais restrito.

Quanto mais top pairs você quer apostar, menor o size.

---

# Notas

- Esta guideline só descreve o que a aula trouxe. Frequências exatas por mão dependem do solver, que ainda não foi validado (ver `03-Solver.md`).
- Os exemplos de board são indicativos até a confirmação das cartas.
