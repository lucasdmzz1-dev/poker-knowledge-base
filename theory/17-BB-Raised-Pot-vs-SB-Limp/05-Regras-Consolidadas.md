# Regras Consolidadas — BB Raised Pot vs SB

> Módulo 17. Regras numeradas. Fonte: aula de 31/10/2026 e tabelas do coach, salvo quando indicado. Prioridade neste módulo: fala da aula, IMG2, IMG1, TXT.

---

# Regra 1 — O size acompanha o thin value

Thin value é uma escala: B25 é o máximo, B40 o intermediário e B70 o mínimo. Quanto menos thin value o board dá, maior o size e menor a frequência de aposta. Regra de bolso: com thin value, B25; sem thin value, B70; o que sobrar, B40.

---

# Regra 2 — Triple broadway e low conectado: B70

Não há faixa intermediária. O range de BB é polarizado e não permite frequência alta nesses boards.

---

# Regra 3 — Sequência e low desconectado: B40

Board com sequência e low desconectado ficam em B40. Exceção: triple broadway e low conectado ficam em B70, mesmo com sequência.

---

# Regra 4 — High card: depende de quantas cartas o SB defende

Duas cartas abaixo do 8: B25. Duas de valor 8 ou mais: B40. O 8-4-2 é B40 por exceção explícita da aula, e o T-7-4 também é B40 (ver `06-Pendencias.md`, itens 11 e 12).

---

# Regra 5 — Flush draw pode simplificar a divisão

Mãos com carta do naipe apostam mais, e mãos sem a carta dão check. Simplificação da aula, não regra exata. Sem flush draw, um RNG de 0 a 50 serve.

---

# Regra 6 — Divisão no B70

Overpair e top pair forte: 75%. Dois pares, top pairs e melhores draws: 50%. O restante: 25%. Underpairs: 0%. Second pair entra em 25%.

---

# Regra 7 — Top set em frequência baixa

No B70, o top set vai no menor bucket possível, porque bloqueia as mãos que pagam. Os outros sets ficam em 50% ou 75%, conforme o spot. Em board favorável, com size menor, o top set pode subir.

---

# Regra 8 — Monotone: B25, split em três buckets

Buckets de 25%, 50% e 75%, frequência geral de cerca de 50%. Second pair em 25%, de preferência com carta do naipe. O mesmo split vale para qualquer monotone. (Corrige a versão 1.0, que dava B70 ou B40.)

---

# Regra 9 — Dobrado

Dobrado seco: B25, range. Dobrado conectado: B25, com split de 50% geral e 75% para trinca, full e quadra. (Corrige a versão 1.0, que dava B40 para o dobrado conectado.)

---

# Regra 10 — Turn segue a lógica do flop

O size do turn depende de quantos top pairs você quer apostar. Ver Regras 14 e 15.

---

# Regra 11 — Semi-conectado com flush draw: B70

Q-8-7, J-7-6 e K-9-8, todos com flush draw. Muita mudança de nuts.

---

# Regra 12 — Dois broadways sem sequência: B40

K-J-4. O 4 não é defendido, então há mais thin value que no triple broadway.

---

# Regra 13 — A high

Seco: B25, range (100%). Carregado (por exemplo A-Q-3 com flush draw): B25, split. A-Q-9 seria B40 em teoria, mas usa-se B25.

---

# Regra 14 — Turn depois de flop em check-check

O size do turn é sempre alto. B70 no mínimo quando você quer apostar todos os top pairs, e B100 ou mais quando quer apostar só top pair com bom kicker.

---

# Regra 15 — Turn depois de flop apostado

Blank: geométrico. Carta que conecta: tende a B70. Flush com carta alta: tende a B40. Flush com carta baixa: tende a B70. Certeza média a baixa.

---

# Regra 16 — Execução com RNG

Bucket de 75% aposta de 0 a 75 e dá check de 76 em diante. A mesma lógica vale para 50% e 25%.

---

# Regra 17 — Tabelas de split B25 e B40

B25: 100% OP e sets (menos top set); 75% dois pares, top set, TP e bons draws; 50% all. B40: 75% OP, sets, dois pares, TP forte e FDs; 50% TPs e melhores draws; 25% all; 0% underpair.

---

# Regra 18 — Stacks

Para 40bb deep. Por ora vale a mesma estratégia em outros stacks; ajustes pontuais para 20bb ou menos virão em aula futura.

---

# Regra 19 — Pré-flop opcional

Splitar as offs de borda baixa em 50/50, ou colocar em 100% o lixo de 2x a 4x. A frequência agregada fica igual.

---

# Regra 20 — Quanto mais conecta, pior

T-7-4 é B40, T-7-5 "piora um pouco" e T-8-5 com flush draw é B70.

---

# Regra principal do módulo

Ao escolher o size, pergunte primeiro quanto thin value o board dá para este range de SB. O resto segue dessa resposta.

---

# Notas

- As Regras 4, 15 e 20 têm pontos abertos em `06-Pendencias.md`.
