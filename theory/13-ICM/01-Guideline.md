---
tags:
  - modulo/13-icm
  - tema/icm
  - street/preflop
  - tema/reta-final
  - tipo/guideline
---

# Guideline — ICM e Risk Premium

> **Módulo:** 13 – ICM e Risk Premium (consolidado, v1.0)
>
> **Objetivo:** Entender o ICM pela unidade que o mede, o risk premium (RP), e saber adaptar open, defesa e blind war conforme quem cobre quem e a fase do torneio.

---

# Contexto

Fase:
Do início do torneio até a mesa final, com ênfase de 30% do field left até a FT.

Formato:
Vanilla e PKO. O PKO é tratado só nos pontos em que a aula o cita.

Stacks:
De 11bb a 120bb nos exemplos.

Fonte:

- Aula em duas partes: teoria (cerca de 1h18) e prática, com exemplos montados em solver (a partir de 1h23).
- Transcrição e frames do vídeo (a parte prática foi conferida na tela do solver).
- Ferramenta dos exemplos: GTO Wizard em modo ICM, mesa de 8 jogadores. O painel **Bubble factor** mostra o RP de cada posição contra cada outra.

---

# Como ler este guideline

Marcações:

- **[Aula]**: dito pelo instrutor.
- **[Inferência]**: conclusão a partir da aula, ainda não validada.
- **[Aula, confirmado no frame]**: número lido na tela do solver.
- **[Confirmar no frame]**: número que está aqui só pelo que o instrutor disse em voz, porque o frame não mostrou ou não ficou legível.

Cada regra tem o mesmo formato: **Faça** (o que fazer), **Por quê** (uma ou duas frases) e, quando existe, **Exemplo**.

---

# Em 30 segundos

1. **RP é o equity extra que você precisa.** Vale em toda street, não só no pré-flop.
2. **Três fatores definem o RP:** os stacks (o seu e o de quem cobre você), a fase do torneio e a estrutura de pagamento.
3. **Big stack joga mais mãos. Mid stack joga menos, com agressividade. Short stack precisa se mexer.**
4. **Antes de abrir, olhe o BB, o BTN e o SB.** Quem te cobre? Quanto mais gente te cobre, menos você abre.
5. **Coberto, não dá flat: é 3bet, shove ou fold.** Cobrindo, jogue mais mãos, e não só 3bet.
6. **Só expanda quando algo joga a seu favor** (bolha, pay jump, mesa final). Sem pressão, o big stack que expande só distribui fichas.

---

# Parte 1 — Teoria

## Regra 1 — Risk premium é o extra de equity que você precisa

**Faça:** antes de decidir, pergunte quanto de equity a mais essa jogada exige por causa do risco de cair.

**Por quê:** o RP é a unidade de medida do ICM, do mesmo jeito que o grama mede peso. É a quantidade extra de equity que o jogador precisa ter para um spot ser lucrativo. **[Aula]**

## Regra 2 — O RP vale em todas as streets

**Faça:** trate o equity extra como um custo que você paga no pré-flop, no flop, no turn e no river.

**Por quê:** por isso os ranges pré-flop ficam tão curtos quando o RP sobe. Você precisa realizar equity até o river, e pagar o extra em cada street torna isso muito difícil. **[Aula]**

**Pós-flop:** boa parte dos jogadores já acerta de forma natural, porque o range que chega ao flop já é curto. A aula manda focar primeiro no pré-flop. **[Aula]**

## Regra 3 — O RP é de um jogador contra outro

**Faça:** pense no seu RP contra cada adversário, e não no spot como um todo. Pense também no RP dele contra você.

**Por quê:** o mesmo spot tem RPs diferentes para cada par de jogadores, porque depende de quem cobre quem. **[Aula]**

## Regra 4 — Três fatores definem o RP

| Fator | O que olhar | Efeito |
|---|---|---|
| Stacks | Seu stack frente à média e frente aos que podem entrar na mão (BB, BTN, SB) | Coberto: RP alto. Cobrindo: RP baixo |
| Fase | Porcentagem do field left | Pesa a partir de ~30%, pico na bolha, cai depois, sobe de novo até a FT |
| Pagamento | Vanilla ou PKO, razão entre o 9º e o 1º, tamanho dos pay jumps | Vanilla tem RP maior que PKO. Pay jump pequeno quase não pesa |

**[Aula]**

## Regra 5 — Olhe quem cobre quem

**Faça:** além do seu stack, olhe o stack dos jogadores que mais podem entrar na mão, nesta ordem: **BB, BTN e SB**.

**Por quê:** o stack efetivo define sua vulnerabilidade de eliminação e sua capacidade de eliminar o outro. Quem te cobre pode te tirar do torneio, e você dificilmente o tira. **[Aula]**

**Exemplo:** você tem 30bb no HJ, o BTN tem 15bb e o BB tem 50bb. O BB cobre você e pressiona seu stack, então é um spot ruim para ampliar open, flat ou VPIP. **[Aula]**

## Regra 6 — Quem te cobre pode te eliminar, então aperte o range

**Faça:** numa FT, se você vai colidir com um big stack, aperte o range. O RP daquela mão é alto.

**Por quê:** a ideia de que o BB fora de posição está sempre em desvantagem deixa de valer no ICM. O risco de cair quando você colide com quem te cobre já é um desastre. **[Aula]**

## Regra 7 — O stack relativo define o seu tipo

**Faça:** classifique-se pelo stack **relativo à mesa e à média**, e não só pelo número de bb.

**Exemplos:** **[Aula]**

- 30bb com média de 20bb: você está mais perto de big stack.
- 30bb com média de 50bb: você está mais perto de mid ou short.
- 30bb com média de 20bb, mas com 50bb no BB, 60bb no BTN e 45bb no CO: você não é big stack para essa mesa.
- Mesa toda com stacks parecidos (média de 20bb, todos com 35bb): todo mundo é mid stack, e um pressiona o outro.

## Regra 8 — Conheça a curva do ICM ao longo do torneio

| Momento | O que acontece com o RP |
|---|---|
| Do início até ~30% do field left | O ICM existe, mas muda pouco. O modelo é parecido |
| De ~30% à bolha | Cresce gradativamente |
| Bolha | Pico |
| Depois da bolha, até ~5% do field left | Cai muito, parecido com o cenário de ~25% |
| De ~5% até a FT | Sobe de novo, com pequenas quedas a cada pay jump |

**[Aula]**

**Faça:** use as quedas após cada pay jump para se arriscar mais se você é big stack, e use a subida que se aproxima de um pay jump para apertar.

**Por quê:** aproximar da FT é como aproximar da bolha: 5% do field left, 4 mesas, 3 mesas e FT lembram 25%, 20%, 18% e 16%. **[Aula]**

**Cuidado:** depois que a bolha estoura é o principal momento de fazer fichas. Quem estuda ICM e continua apertado nesse momento superestima o RP. **[Aula]**

## Regra 9 — Em torneios pequenos a bolha vem mais rápida

**Faça:** em torneio com poucos jogadores, considere que um ou dois eliminados já mudam bastante a porcentagem do field left.

**Exemplo:** num torneio de 150 jogadores que paga 20, a queda de 4 ou 5 jogadores já leva a um cenário de 5% left, e as fases de mesa final passam mais rápido. **[Aula]**

## Regra 10 — A estrutura de pagamento muda o RP

**Faça:** olhe a estrutura antes de aplicar um RP de referência.

- **Vanilla** tem RP maior que PKO, em praticamente todos os cenários. **[Aula]**
- **Estrutura top heavy** (muita diferença do 9º para o 1º) reduz o RP, porque é preciso se arriscar mais para chegar ao topo. **[Aula]**
- **Referência por site:** ACR, de 12 a 15 vezes do 9º ao 1º. GG, cerca de 10 vezes. PS, um meio-termo. **[Aula]**
- **Anotação do instrutor (na tela):** quando o 1º paga 20 vezes o 9º, o ICM é bem menor. Quando paga 10 vezes, é bem maior. **[Aula]**
- **Tamanho do pay jump:** num evento especial (como o Main Event da WSOP) os pay jumps são violentos e o RP sobe. Num torneio comum de US$ 54 em que o salto é de US$ 54 para US$ 62, o pay jump quase não pesa. **[Aula]**

## Regra 11 — O RP só é negativo com recompensa por eliminação

**Faça:** no vanilla, nunca espere RP negativo. No bounty (PKO, mystery, total KO), o RP contra quem você cobre fica muito baixo ou negativo.

**Exemplo:** você cobre um jogador com 20 stacks iniciais. Se ele tem 3 ou 4 bounties, seu RP contra ele fica entre 0 e 3. Se ele tem 5 a 8 bounties, o RP fica negativo, e você tem muito mais incentivo para jogar contra ele. **[Aula]**

## Regra 12 — Use a escala 5, 10 e 15

| RP | Situação | O que exige da mão |
|---|---|---|
| 5% | Padrão. Quem treina em 10% field left já considera algo próximo | Mãos normais |
| 10% | Risco e recompensa desfavoráveis | Dominar bem o adversário |
| 15% | Muito ruim. Você pode cair e beneficiar outro short stack | Esmagar o adversário |

**[Aula]**

**Faça:** localize o spot na escala. Se não sabe se é 5, 10 ou 15, comece pelo 10.

**Referência:** com 40 jogadores restantes num vanilla de ~2000, o RP máximo ficaria entre 8% e 12%. Num PKO equivalente, um aluno encontrou até 5%. **[Aula]**

---

# Parte 2 — Os três tipos de stack

## Regra 13 — Big stack é o predador: menor RP e poder de pressão

**Faça:** pressione jogando mais mãos. Pressão não é só 3bet ou shove.

**Por quê:** o big stack tem sempre o menor RP dos três tipos, é difícil de eliminar e consegue realizar mais equity que os outros. Os outros stacks precisam de equity extra para jogar contra ele. **[Aula]**

**Como pressionar:** **[Aula]**

- Mais VPIP, com mais calls em posição.
- Check-raise e leads desde o flop.
- Ampliar o range de call, para ver mais flops e bater mais.
- Mais 3bet, mas só com mãos que fazem sentido.

**Cuidado:** 3betar mão especulativa sem blocker, como 5-6s, não aumenta o fold equity, e os stacks de ~20bb respondem com shove. Você está usando a vantagem de forma errada. **[Aula]**

## Regra 14 — Os quatro erros do big stack

1. **Confronto contra outro big stack.** Entre dois big stacks, quem rasga o ICM perde, e os outros da mesa ganham. Respeite o outro. **[Aula]**
2. **Subestimar o próprio RP.** Mesmo sendo o maior da mão, quem tem 40bb no BB contra um CO de 30bb ainda tem um RP razoável ou alto. **[Aula]**
3. **Não explorar a vantagem.** A vantagem existe quando você cobre, então use-a. **[Aula]**
4. **Ser o capitão da mesa sem pressão.** Se não há pay jump, bolha ou FT por perto, os outros não vão foldar mais. Eles jogam VPIP maior, e sua expansão só distribui fichas. **[Aula]**

## Regra 15 — Mid stack é a vítima: maior RP e pressão dupla

**Faça:** jogue menos mãos, mas com mais agressividade (3bet e shove). Evite calls marginais contra big stacks.

**Por quê:** o mid stack tem o maior RP dos três tipos. Ele é pressionado por cima pelo big stack e também pelo short stack: se perde fichas para o short stack, fica vulnerável à eliminação depois. **[Aula]**

**Exemplo:** você tem 20bb no CO e o SB tem 13bb. Perder esses 13bb deixaria você muito vulnerável depois. **[Aula]**

**Por quê agressivo:** é difícil realizar equity pagando. Recolher o pré-flop já é um resultado muito bom, e a saída é um range mais curto jogado de forma agressiva. **[Aula]**

## Regra 16 — Short stack precisa se mexer

**Faça:** jogue a estratégia de push ou fold e acumule fichas sem rasgar EV. O short stack pode expandir um pouco mais que o mid stack.

**Por quê:** o RP do short stack é moderado, entre o big e o mid. Ele já está vulnerável e precisa dobrar para sobreviver. **[Aula]**

**Cuidado:** não é "vou chover mão ruim para sobreviver". Jogar com EV negativo é um erro. **[Aula]**

**Shallow:** com ~20bb efetivos, jogue mais mãos de carta alta (KTs, ATs, A9s) que conseguem fazer top pair, e não 65s ou 98s, que não realizam a equity. Quanto mais fundo o stack, mais outros tipos de mão entram. **[Aula]**

## Regra 17 — O shove vs open é a principal arma do short e do mid stack

**Faça:** com RP alto, não flutue flops nem pague cbet como no ChipEV. Recolha o dead money no pré-flop, com shove ou 3bet.

**Exemplo:** no BB com 20bb contra um open do BTN, no ChipEV o KTs dá flat. Com RP alto, ele vai de shove, e o K9 e, eventualmente, o KJ também. Você quer recolher o dead money e realizar o equity num spot que não depende do pós-flop. **[Aula]**

**Por quê:** com fold equity grande, o shove vs open continua muito agressivo, e muitas vezes é mais importante que o open raise. Nos sites com reta final mais rasa (GG e ACR), saber achar esses shoves é uma das partes mais importantes do jogo. **[Aula]**

## Regra 18 — Só expanda gradualmente, e só quando há pressão a favor

**Faça:** amplie o range aos poucos, conforme a pressão evolui, e reduza quando ela cai.

**Exemplo ilustrativo:** abrir 35% com 25% left, 38% com 20% left, 43% com 18% left, 48% com 17% left e 55% na bolha. Ao estourar a bolha, a pressão cai e o range volta para cerca de 33% a 35%. **[Aula, exemplo ilustrativo]**

---

# Parte 3 — Adaptações na prática

Cenário base dos exemplos: torneio de 1k jogadores que paga 15% (150). 25% do field left são cerca de 250 restantes, e 16% são cerca de 160 (perto da bolha). **[Aula]**

**Como achar o RP no solver:** no GTO Wizard abra o painel **Bubble factor**. A linha é a posição que decide e a coluna é o adversário. Cada célula mostra o RP (por exemplo +16,1%) e, embaixo, o bubble factor (por exemplo 1,95). Vermelho é RP alto, amarelo é RP baixo.

## Regra 19 — Conheça a referência antes de adaptar

**Faça:** saiba o range de ChipEV e o de 10% field left de cada posição. Sem referência você não tem como adaptar nada.

**Exemplo:** no LJ, a aula usa o ChipEV como a coluna do 8 suited, o 10% field left como a coluna do 9 e um ICM desfavorável como a coluna do 10. **[Aula, Confirmar no frame]**

## Regra 20 — Antes de abrir, olhe BB, BTN e SB

| Seu stack em relação aos três | O que fazer no open |
|---|---|
| Cobre BB, BTN e SB | Predador: expanda |
| Cobre o BB | Mais suave |
| É coberto pelo BB | Cuidado |
| É coberto pelo BB e pelo BTN | Cuidado redobrado |
| É coberto pelo BB, BTN e SB | Pior caso: reduza bastante |

**[Aula]**

## Regra 21 — LJ cobrindo todos: expanda

**Faça:** com 25% left, abra perto do ChipEV com uma pequena expansão. Com 16% left, expanda muito.

**Números** (LJ com 65bb; UTG 34, UTG1 41, HJ 45, CO 21, BTN 26, SB 17,5 e BB 29; média de 35bb): o LJ abre **26,4%** com 25% left e **40,1%** com 16% left. **[Aula, confirmado no frame]** O ChipEV fica em torno de 24%. **[Aula, Confirmar no frame]**

**Por quê:** com 16% left o RP do LJ contra os outros fica entre cerca de +2% e +5%. O RP deles contra o LJ é alto: HJ +13,1%, CO +16,1%, BTN +15,3%, SB +16,5% e BB +14,8%. **[Aula, confirmado no frame]**

## Regra 22 — HJ coberto por todos: reduza

**Faça:** com 25% left, saia da coluna do 7 suited e de parte do JTo. Com 16% left, o range cai para cerca de 14,8%.

**Cenário** (HJ com 21bb, média de 50bb; UTG 29, UTG1 13, LJ 61, CO 45, BTN 125, SB 36,5 e BB 68): o HJ abre **24,4%** com 25% left. Com 16% left abre **14,8%**. **[Aula, confirmado no frame]**

**Por quê:** todos os stacks que podem entrar na mão cobrem o HJ. É o pior ponto possível para abrir. **[Aula]**

## Regra 23 — Quem cobre você joga mais contra você

**Faça:** espere o BTN jogar mais VPIP contra o seu open quando ele cobre você, mesmo enfrentando um range mais curto.

**Exemplo** (BTN com 125bb contra o open do HJ): **[Aula, confirmado no frame]**

| BTN contra o HJ | 25% left | 16% left |
|---|---|---|
| Call | 11,2% | 13,9% |
| Raise (4,5bb a 7bb) | 9,6% | 9,6% |
| Fold | 79,2% | 76,5% |
| VPIP | ~20,8% | ~23,5% |

O aumento vem do call, e o raise não muda. Isso acontece enquanto o BTN enfrenta um range de HJ mais curto (cerca de 14,6% em vez de 24,4%). **[Aula]**

**Por quê:** ele não é vulnerável à eliminação, e só de ver o flop, o turn e o river já pressiona você. O range de 3bet dele continua polarizado (borda e topo), e as mãos especulativas preferem pagar a 3betar. **[Aula]**

**Exceção:** se o BTN cobre o HJ, mas é coberto pelo BB (por exemplo, BTN com 40bb), ele joga menos contra o HJ, porque os outros stacks que podem entrar também o pressionam. Com 45bb, joga ainda menos. **[Aula]**

## Regra 24 — Coberto e enfrentando um open: sem flat

**Faça:** se você é coberto e enfrenta um open, jogue 3bet, shove ou fold, sem call.

**Exemplo** (BTN com 26bb contra o open do LJ de 65bb): **[Aula, confirmado no frame]**

| BTN com 26bb | 25% left | 16% left |
|---|---|---|
| Call | 4,2% | 0,2% |
| Raise (3bet) | 9,8% | 8,2% |
| Shove | 0% | 2,5% |
| Fold | 86% | 89,1% |

Os números estão confirmados no frame (o instrutor fala em 4,4% de call com 25% left). O call de 25% left é o mais intuitivo possível: sem conectores suited, sem Kx e Ax fracos. **[Aula]**

**Por quê:** o RP aparece no pré-flop, no flop, no turn e no river. Precisando de 15% a mais em cada street, realizar equity pagando fica quase impossível. **[Aula]**

**Quais mãos:** **[Aula]**

- **Pares e AQ ou melhor:** 3bet/call.
- **AJo, A9s e mãos de borda com bons blockers:** 3bet/shove ou fold, dependendo do range de 4bet do adversário. O AJo costuma ser indiferente.
- **Mão forte clara:** pode induzir. Mão off, exceto AK, quase nunca induz em frequência alta.
- **Pares baixos com menos de ~30bb:** não pague, porque mesmo achando um overpair você não consegue atolar.

**Dica de desvio:** em torneio fácil, com adversário passivo, o desvio é para mãos que dominam o range dele (KQs, KJs, KTs). Mas o range de call fica capado, e os blinds atacam. **[Aula]**

## Regra 25 — Coberto, jogar agressivo reduz a variância

**Faça:** prefira o 3bet ou o shove ao flat com mãos como AT, KT e pares pequenos.

**Por quê:** quando você dá flat, vai por baixo na maioria das vezes e sangra o stack. Para o modelo isso é desastroso. **[Aula]**

## Regra 26 — BB contra o open de quem te cobre: caia o VPIP e jogue agressivo

**Faça:** contra o open de um big stack que cobre você, defenda menos e com mais 3bet e shove.

**Números** (CO com 64bb abre, e o BB tem 21bb; média de 40bb; na transcrição o CO aparece como "ToF"): o CO abre **35,8%** com 25% left e **48,5%** com 16% left. O BB reage assim: **[Aula, confirmado no frame]**

| BB com 21bb contra o open do CO | 25% left | 16% left |
|---|---|---|
| Shove | 9% | 15,6% |
| Raise (7,5bb e 6,5bb) | 7,8% | 2,8% |
| Call | 45,7% | 21% |
| Fold | 37,5% | 60,6% |
| VPIP | 62,5% | 39,4% |

**Por quê:** o preço de pagar é bom (só um blind a mais), mas a pressão do adversário e a dificuldade de realizar equity fora de posição tiram o incentivo. Como você enfrenta um range mais largo, o fold equity do 3bet e do shove aumenta. **[Aula]**

## Regra 27 — Desvie conforme o tipo de adversário, mas só depois de entender a teoria

**Faça:** use a teoria como base e desvie quando você tem informação.

**Exemplos:** **[Aula]**

- **Adversário muito tight cobrindo você:** corte ainda mais o range.
- **Adversário maníaco cobrindo você:** não passe de 25% para 35% a 40% só por isso.
- **Fish passivo:** você realiza mais equity, mas isso não cria incentivo para ampliar o call.
- **Fish agressivo:** também não há muito incentivo.
- **Jogador rasgando o ICM:** é ruim para ele e para quem joga contra ele, e bom para os outros. Jogue mais perto do ICM e ajuste ao desvio dele.
- **Dois jogadores rasgando o ICM (por exemplo na bolha de um live):** vá mais seguro, porque a bomba deles vai explodir.

## Regra 28 — Blind war: SB cobrindo o BB

**Faça:** com 25% left, o SB tem mais raise (gera fold equity) e menos limp. Com 16% left, pressão máxima: raise, shove ou fold, sem limp.

**Números** (SB com 45,5bb e BB com 21bb, que dá 22 efetivos com o blind; média de 40bb): **[Aula, confirmado no frame]**

| SB cobrindo o BB | 25% left | 16% left |
|---|---|---|
| Shove | 12,6% | 27,5% |
| Raise (3bb e 2,5bb) | 25,3% | 63,7% |
| Limp (call) | 44,4% | 2,1% |
| Fold | 17,6% | 6,6% |

**Por quê:** o RP do BB contra você sobe de ~6,6% para ~16%, e ele precisa cortar o range. Esses dois números estão só na fala, porque a matriz desse spot não ficou legível no vídeo. **[Aula, Confirmar no frame]**

**Construção do range com 16% left:** **[Aula]**

- **Parte média:** shove.
- **Topo:** induz.
- **Borda:** raise ou fold.
- **Não limpe no momento de pressão máxima.**

**Nota:** várias mãos têm EV parecido entre raise e shove. O importante é pressionar. **[Aula]**

## Regra 29 — Blind war: SB coberto pelo BB

**Faça:** com 25% left, jogue mais call e menos raise. Com 16% left, use um range de call e dê mais fold.

**Números** (SB com 36,5bb e BB com 68bb, que dá 69 efetivos com o blind; média de 50bb): **[Aula, confirmado no frame]**

| SB coberto pelo BB | 25% left | 16% left |
|---|---|---|
| Call | 71,2% | 69,2% |
| Raise (3bb e 3,5bb) | 12,7% | 0,1% |
| Fold | 16,1% | 30,8% |

O raise some e o fold dobra.

**Por quê:** o BB tem o poder e o dever de pressão, então proteja o range jogando de call, inclusive com parte do topo, para não ficar capado. **[Aula]**

## Regra 30 — SB curto (10 a 14bb) coberto: raise ou shove, sem limp

**Faça:** com 10 a 14bb no SB, contra um BB que te cobre, jogue raise, shove ou fold. Sem range de limp.

**Número** (SB com 10,5bb, 16% left, média de 20bb): shove 31,4%, raise de 2,5bb 9%, call (limp) 0% e fold 59,5%. **[Aula, confirmado no frame]**

**Por quê:** o RP é alto contra o BB. Com RP um pouco maior você mantém a mesma estratégia, só com menos mãos. **[Aula]**

**Exemplo:** SB com 11bb, BB com 25bb e média do torneio de 20bb. O RP do BB contra você não é muito alto, então ele paga com mais honestidade, e você precisa de um range de shove mais forte e mais curto. **[Aula]**

## Regra 31 — Short stack na bolha depende de quão short você é

**Faça:** compare o seu stack com a distribuição, e não só com a média.

**Exemplo:** com 11bb você pode ter RP muito alto se for o 130º de 160 (há muita gente mais curta), mas não é desesperado se estiver no 155º de 160 e só 150 forem pagos. **[Aula]**

**Nota:** o instrutor vai preparar uma aula específica sobre o short stack na bolha. **[Aula]**

---

# Parte 4 — Como aplicar na mesa

## Antes de agir, responda

1. **Que stack eu sou nesta mão?** Relativo à mesa e à média.
2. **Quem pode entrar e quem me cobre?** BB, BTN e SB, nessa ordem.
3. **Em que fase estou?** Antes de 30%, perto da bolha, depois da bolha, perto de um pay jump ou na FT.
4. **Que estrutura é essa?** Vanilla ou PKO, razão do 9º para o 1º, tamanho do próximo pay jump.
5. **O que joga a meu favor?** Se a resposta for "nada", não expanda.

**Resumo do instrutor (anotações na tela):** 1) identifique o seu tipo de stack; 2) avalie a fase do torneio; 3) ajuste as decisões pelo risk premium; 4) explore ou proteja-se conforme a sua posição na hierarquia. **[Aula]**

## Erros mais comuns

- Ficar jogando contra outro big stack.
- Subestimar o próprio RP, mesmo sendo o maior da mão.
- Não explorar a vantagem quando você cobre.
- Ser o capitão da mesa sem pressão a favor.
- Dar call marginal contra big stack sendo mid stack.
- Dar flat quando coberto, em vez de 3bet, shove ou fold.
- Dar limp no momento de pressão máxima do blind war.
- Superestimar o ICM depois da bolha e ficar apertado demais.
- Chover mão ruim "para sobreviver", rasgando EV.
- Não conhecer a referência de ChipEV e 10% field left.

## Regras de bolso

1. RP é o equity extra. Quem te cobre, te pressiona.
2. Olhe BB, BTN e SB antes de abrir.
3. Cobrindo, jogue mais mãos. Coberto, aperte e agrida.
4. Coberto, nada de flat: 3bet, shove ou fold.
5. Mid stack: menos mãos, mais agressividade. Short stack: se mexa, sem rasgar EV.
6. Shove vs open é a principal arma de quem é coberto.
7. Pressão só existe perto de pay jump, bolha ou FT.
8. Depois da bolha, faça fichas. O ICM cai.
9. Vanilla pesa mais que PKO. Pay jump pequeno pesa pouco.
10. Entenda a teoria e só depois desvie, conforme o adversário.

---

# Cruzamento com o KB

| Ponto deste módulo | Onde se liga |
|---|---|
| RP e stack ditando o plano | Módulo 12 (Reta Final): é o porquê das Regras 17 a 22 daquele módulo |
| BB com 25bb sem flat | Módulo 12, Regra 18: efeito do RP |
| Posição inicial com pouco flat | Módulo 12, Regra 19: quem te cobre |
| EP contra EP evita shove com 18 a 20bb | Módulo 12, Regra 20: colidir com quem está à esquerda |
| Stacks muito curtos atrás permitem mais shove | Módulo 12, Regra 22: o RP contra eles cai |
| Big stack predador, open shove contra dois curtos | Módulo 12, Regra 27 (3-handed) |
| Referência de ChipEV e 10% field left | Mapas de RFI do BTN e do CO (módulo 12, `03-Solver.md`) |
| RP também no pós-flop | Módulo 11 (Value Bet) e módulos 05, 06 e 07: com RP alto, menos calls e mais recolher no pré-flop **[Inferência]** |
| Equity extra em cada street | Módulo 08 (3Bet Pot) **[Inferência]** |
| Explorar equity contra quem você cobre | Módulo 10 (Multiway): a aula cita o 3-way **[Aula]** |

---

# Pendências e decisões

As pendências abertas estão em `06-Pendencias.md` e as decisões da construção do módulo estão em `09-Decisoes.md`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/13-ICM/README|theory/13-ICM]]

**Mesma pasta:** [[theory/13-ICM/02-VideoAulas|02-VideoAulas]] · [[theory/13-ICM/03-Solver|03-Solver]] · [[theory/13-ICM/04-Exercicios|04-Exercicios]] · [[theory/13-ICM/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/13-ICM/06-Pendencias|06-Pendencias]] · [[theory/13-ICM/07-Changelog|07-Changelog]] · [[theory/13-ICM/08-Referencias|08-Referencias]] · [[theory/13-ICM/09-Decisoes|09-Decisoes]]

**Módulos citados no texto:** [[theory/05-CBet-OOP-40bb/README|05-CBet-OOP-40bb]] · [[theory/08-3BET-POT/README|08-3BET-POT]] · [[theory/10-MULTIWAY-POT/README|10-MULTIWAY-POT]] · [[theory/11-Value-Bet-Masterclass/README|11-Value-Bet-Masterclass]] · [[theory/12-RETA-FINAL/README|12-RETA-FINAL]]

**Outros módulos:**

- [[theory/12-RETA-FINAL/01-Guideline|12-RETA-FINAL · 01-Guideline]]
- [[theory/12-RETA-FINAL/03-Solver|12-RETA-FINAL · 03-Solver]]

<!-- graphify-links:end -->
