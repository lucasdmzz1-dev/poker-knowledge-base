# VideoAulas — Multiway Pot

## Módulo 10 — Multiway Pot

---

# Contexto

Stack:
40bb

Spot:
EP abre, BTN paga, BB paga (3-way)

Fonte:

- Aula prática
- Transcrição
- GTOWizard (função 3-way, recém-liberada)
- MDA do field

---

# Objetivo da Aula

Introduzir uma reconstrução completa da estratégia multiway, motivada por duas coisas novas: a liberação da função 3-way no GTOWizard (antes as ferramentas disponíveis não eram confiáveis — respostas variavam dependendo de quantas mãos o solver simulado tinha jogado) e uma análise de MDA do field que revelou que a frequência média de C-Bet multiway gira em torno de 35%.

---

# Por que a Estratégia Antiga Falhava

A lógica antiga vinha de uma mentalidade de exploit extremo: assumir que o range de defesa multiway continuava fraco do mesmo jeito que num pote a dois, e reagir com agressão quase constante estando fora de posição, mais overfold generalizado quando na defensiva.

O problema estrutural: o range de defesa de cada jogador multiway não foi desenhado pra aguentar um adversário só — ele aguenta dois ao mesmo tempo. Isso faz com que, mesmo fora de posição, o adversário que paga tenha uma composição de range naturalmente mais resistente do que num Hupot equivalente. Apostar perto de range OOP nessas condições vira, na prática, estar "pulando na lança": o Hero acaba colocando fichas voluntariamente contra ranges que ainda cobrem o board de forma completa (trincas, overpairs, dois pares).

O segundo erro veio da instrução histórica de overfoldar contra qualquer agressão multiway — a lógica era "o cara não deveria estar apostando tanto". Só que overfoldar sistematicamente também é um erro custoso: gera um EV negativo retroativo na decisão pré-flop de defender aquela mão, porque o jogador some justamente nas streets em que deveria continuar.

O terceiro ponto, confirmado só depois pelo MDA: a frequência real de C-Bet do field multiway (35% em média) já está bem calibrada — não muito longe do que a teoria recomenda. Isso muda a mentalidade de "vou explorar o cara que está capado" para "o range dele provavelmente ainda está inteiro, então minha resposta correta é a estratégia base, não o exploit".

---

# A Lógica das Três Situações

A aula organiza a mudança em três perspectivas — jogar como agressor (OOP), jogar em posição (IP) e jogar do Big Blind — porque são elas que mais impactam o resultado prático.

## Perspectiva do Agressor (OOP)

A principal mudança é abandonar o C-Bet de alta frequência. A justificativa lógica: como os dois adversários não estão jogando um range desenhado pra um único oponente, o EP fora de posição não consegue se dar ao luxo de apostar quase-range — vai sofrer punição dos dois lados.

A resposta correta é o mesmo split já usado no C-Bet OOP: mãos com backdoor, draws diretos, pares do naipe do board. Quando a ação volta pro Hero depois de Bet (IP) + Call (BB), a estratégia vira extremamente agressiva em boards secos (Check-Raise ou Fold com tudo que quer continuar) — a razão de não manter uma linha passiva de call é evitar splitar a equity com dois adversários simultaneamente. Em boards mais carregados, com draws relevantes que se importam em realizar equity, mantém-se uma parcela de call.

No turn, a diferença de sizing entre blank (B100, apostando só com os 3 melhores Top Pairs ou melhor) e dinâmico (B40, incluindo os melhores Second Pairs ou melhor) reflete quanto o Hero ainda está "cheio" de mãos fortes — em blank, ele ainda carrega a maior parte do topo do range, então o objetivo é extrair o máximo; em dinâmico, o range de mãos boas se filtra menos, permitindo apostar mais combos com sizing menor.

## Perspectiva do IP

A mudança central é entender que Bet-vs-Missed contra um agressor que deu check não é aposta de range — segue a mesma lógica de equity mínima do heads-up (backdoors apostam, duas pontas sem backdoor geralmente não). O padrão de tamanho inicial recomendado é B25 (mais baixo que o B40 do agressor OOP), porque o objetivo aqui não é o mesmo de extrair valor máximo — é manter pressão eficiente contra um range que também não capou.

O ponto mais importante da perspectiva IP: parar de overfoldar contra C-Bet e Check-Raise do agressor original. A régua prática (segue igual a um Hupot) é: qualquer par do board continua, backdoors continuam, e só realmente se folda o que não tem nenhuma equity direta nem redraw pro nuts.

## Perspectiva do Big Blind

Essa é a perspectiva mais delicada e a que mais mudou na prática. Dois conceitos centrais:

**Não existe Check-Raise quando o agressor ainda "tem que falar".** Se o EP deu check no flop, ele ainda carrega o range inteiro (overpairs, trincas, dois pares) — pressionar esse range com Check-Raise não faz sentido porque ele simplesmente não está capado. O Check-Raise só volta a fazer sentido normalmente depois que o EP já apostou (aí sim, o Hero reage contra o agressor como se fosse Hupot).

**Não existe Probe Turn quando todo mundo deu check no flop.** Mesma lógica: se ninguém apostou, ninguém capou o range, então tentar forçar fold equity via aposta no turn não funciona — validado no solver com frequências de probe próximas de zero em praticamente todas as texturas testadas.

**O Lead no turn é a descoberta mais contraintuitiva da aula.** Ele só existe numa situação bem específica: o agressor pré-flop deu check no flop (não capou o range), o IP apostou, o BB pagou, e o próprio agressor também pagou — chegando ao turn sem ninguém ter capado o range. Nessa janela exata, o Big Blind pode liderar o turn com B25 (único size observado no estudo, tanto em blank quanto em dinâmico), incluindo o Second Pair sem overcard como parte do range — mão fraca demais pra continuar de check-call, mas com função de gerar fold barato e roubar equity.

---

# Filosofia Final

O fio condutor de toda a aula é: **capado ou não capado define a estratégia, não a posição isolada.**

- Se o adversário não apostou, ele provavelmente não está capado — não pressione com Check-Raise nem Probe.
- Se o adversário apostou e foi pago, aí sim ele fica mais próximo de capado — a estratégia volta a ser parecida com Hupot.
- A frequência real de aposta do field (35%) é a prova de que o range multiway raramente está tão fraco quanto a antiga estratégia assumia.

Esses três pilares — perspectiva do agressor, perspectiva do IP e perspectiva do Big Blind — resumem a reconstrução apresentada na aula. Divisão fina de combos e solver detalhado por textura ficam para uma próxima etapa do estudo.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/10-MULTIWAY-POT/README|theory/10-MULTIWAY-POT]]

**Relacionadas no mesmo módulo:** [[theory/10-MULTIWAY-POT/01-Guideline|01-Guideline]] · [[theory/10-MULTIWAY-POT/08-Referencias|08-Referencias]] · [[theory/10-MULTIWAY-POT/03-Solver|03-Solver]] · [[theory/10-MULTIWAY-POT/09-Decisoes|09-Decisoes]]

**Outros módulos:**

- [[theory/09-BET-CHECK-BET/README|09-BET-CHECK-BET · README]]

<!-- graphify-links:end -->
