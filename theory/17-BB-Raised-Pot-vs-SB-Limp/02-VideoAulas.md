# VideoAulas — BB Raised Pot vs SB

> Módulo 17. Resumo em prosa da aula de 31/10/2026 (coach Iago, ao vivo), escrito com as próprias palavras. Timestamps do vídeo. A transcrição fica fora do repositório (ver `09-Decisoes.md`).

---

# Por que este spot

O coach diz que poucos jogadores estudam este pote, embora ele apareça muito, e que há uma oportunidade de ficar à frente, como foi com o overbet no turn e com o B40 em outros módulos. Ele também afirma que a base vai mudar um pouco e que o início pode ser mais difícil, mas que a estratégia fica natural com a prática.

---

# O range do BB e o range do SB

O range de BB no pré-flop é polarizado: tem topo e lixo e pouca mão média. Isso impede o BB de apostar range em size médio, como faz um range de EP contra o BB, mesmo com mais nuts em alguns boards.

O limp-call do SB defende pouco offsuit baixo (7-3, 7-5, 8-6, T-6 e 9-6 não entram). Por isso, quando o board tem carta de valor 8 ou mais, o SB acerta par. Cada offsuit tem 12 combos contra 4 da suited, e o coach diz que isso pesa quando as pessoas põem tudo em 100%.

No vídeo, o range de limp-call do SB e o range do BB aparecem no GTO Wizard (40bb). As offsuit de 7x para baixo aparecem com frequência zero, e as de 8x com frequência baixa.

---

# Thin value define o size

Thin value é uma escala: B25 é o máximo, B40 o intermediário e B70 o mínimo. Quanto menos thin value o board permite, maior o size e menor a frequência de aposta (algo entre 25% e 33% no exemplo do K-T-Q). Com size alto, o range precisa ser dividido. A regra de bolso do coach é: com thin value, B25; sem thin value, B70; o que sobrar, B40.

---

# A atividade inicial (07:45 a 14:45)

O coach mostra 8 mãos e pede frequência e size no chat. A maioria responde "range B25". As respostas do coach vêm depois, na explicação (ver `04-Exercicios.md`). O objetivo é cada aluno ver onde joga diferente da estratégia.

---

# Divisão do range

Com size alto, as mãos mais fortes apostam em frequência alta e as mais fracas em frequência baixa. O coach pede para pensar em equidade: quanto mais equity, mais alto o bucket. A execução é com um randomizador: o bucket de 75% aposta de 0 a 75 e dá check de 76 em diante.

No B70: overpair e top pair forte em 75%; dois pares, top pairs e melhores draws em 50%; o restante em 25%; underpairs em 0%. Second pair entra sempre em 25%. O top set vai na menor frequência possível, porque bloqueia as mãos que pagam. Os outros sets ficam em 50% ou 75%, conforme o spot.

---

# Exceções por board

- **Triple broadway (K-T-Q):** B70, sem faixa intermediária.
- **2 broadways (K-J-4):** B40, porque o 4 não é defendido e há mais thin value.
- **Sequência (J-T-8):** B40, porque o SB tem sequências offsuit. A sequência pesa mais que o triple broadway, que continua B70.
- **Low conectado (9-7-5):** B70. **Low desconectado (8-4-2):** B40.
- **Semi-conectado com flush draw (Q-8-7, J-7-6, K-9-8):** B70.
- **High card:** duas cartas abaixo do 8, B25; duas de valor 8 ou mais, B40. Quanto mais conecta, pior: T-7-4 é B40, T-7-5 "piora um pouco" e T-8-5 com flush draw é B70.
- **Q-6-3:** B25, frequência de 66 a 75%, quase range. O bucket de 25% vira 100%.
- **A high:** seco é range B25; carregado é split B25.

---

# Flush draw e execução

Com flush draw no board, a mão com carta do naipe aposta mais e a sem carta dá check. Isso simplifica o split. Sem flush draw, um RNG de 0 a 50 serve.

---

# Monotone e dobrado

- **Monotone:** B25, com buckets de 25%, 50% e 75% e frequência geral de cerca de 50%. O motivo de desenvolver check é não tomar check-raise de mão off com carta do naipe e não perder a equity de mãos médias. O mesmo split vale para qualquer monotone.
- **Dobrado seco:** B25, range.
- **Dobrado conectado:** frequência alta, mas com check desenvolvido, porque você toma mais check-raise. O split é de 50% geral e 75% para trinca, full e quadra.

---

# Turn

- **Flop em check-check:** o size do turn é sempre alto. B70 se for apostar todos os top pairs; B100 ou mais se for só top pair com bom kicker. No exemplo final (flop 4♣ 2♣ 8♦ em check, turn K♠), o coach diz que o size devia ser B70.
- **Flop apostado:** blank é geométrico, carta que conecta tende a B70, flush com carta alta tende a B40 e flush com carta baixa a B70. A leitura desse trecho tem certeza média a baixa.

---

# Pré-flop (opcional)

Randomizar o pré-flop não é obrigatório. Dá para splitar as offs de borda baixa em 50/50, ou colocar em 100% o lixo de "2x a 4x". A frequência agregada fica igual, mas 100% deixa parte descoberta.

---

# Stacks

Um aluno perguntou se a estratégia vale para 60bb ou 20bb. O coach disse que por ora vale a mesma, e que depois trará ajustes pontuais para 20bb ou menos. Não deu números para 60bb (~1:12:29).

---

# O que o vídeo mostrou na tela

- A tabela dos splits e a utilização do size por tipo de board (uma imagem só) ficaram na tela de ~63:20 a 74:20, e a aula termina no replayer.
- O guideline de 10 boards aparece em 54:05, 58:30 (para o dobrado conectado), ~65:10 e ~72:00. Em 54:03 o coach fala em "primeiro esboço" por tipo de board, que ele trocou pelo sistema B25/B40/B70 por ser mais simples. Não está claro se esse esboço é essa imagem.

---

# Pontos que a aula não fechou

Ver `06-Pendencias.md`.
