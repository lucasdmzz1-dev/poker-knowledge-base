---
tags:
  - modulo/12-reta-final
  - tema/reta-final
  - street/preflop
  - tema/icm
  - tipo/guideline
---

# Guideline — Reta Final

> **Módulo:** 12 – Reta Final (consolidado, v1.0)
>
> **Objetivo:** Padronizar como jogar spots de reta final, principalmente no pré-flop: quando 3betar, quando dar flat, quando dar shove contra open e quando foldar, e como o stack e o risco de cair mudam cada decisão.

---

# Contexto

Fase:
Reta final, geralmente quando restam cerca de 10% do field (cenário 10% field left do solver), de poucas mesas até a mesa final, incluindo 3-handed.

Stacks principais:
15bb a 40bb. Os extremos discutidos foram 80bb contra dois stacks de 20bb (3-handed).

Posições:
SB, BB, CO, BTN, EP e MP.

Fonte:

- Aula (transcrição).
- Simulações do GTO Wizard mostradas na aula. Elas não foram capturadas: este guideline usa só o que o instrutor descreveu em voz.

---

# Como ler este guideline

Marcações usadas:

- **[Aula]**: dito pelo instrutor.
- **[Inferência]**: conclusão a partir da aula, ainda não validada.
- **[Confirmar]**: ponto em que a transcrição está ambígua e ainda precisa de confirmação.
- **[Confirmado]**: esclarecido pelo autor do KB depois do primeiro rascunho.

A transcrição tem muitos erros de reconhecimento de voz. Os termos foram normalizados assim:

| Na transcrição | Normalizei como |
|---|---|
| tribet, tribetar | 3bet |
| forbet | 4bet |
| flet, fletar | flat (call) |
| chove, chovar, show | shove (all-in) |
| restil, re-steal | na transcrição, aparece para o shove contra open de posição tardia. Neste módulo chamo de **shove vs open**. O **resteal** propriamente dito é o shove em cima de outro shove, e a aula não tem nenhum spot assim **[Confirmado]** |
| click, clicar | 4bet pequeno, só a diferença da aposta **[Confirmado]** |
| qual | call |
| RP, ERP | risk premium: o extra de equity que você precisa ter (ou não) por causa do risco de cair **[Confirmado]** |
| borda | mão limite do range |
| meiuca | mãos médias **[Confirmado]** |

---

# Filosofia do módulo

1. **Enxergar o spot não basta, é preciso ter a mão certa para executar.** Pegar qualquer mão para "aproveitar a oportunidade" transforma um bom spot em ruim. O blocker aumenta a chance de o adversário reagir como você quer. **[Aula]**
2. **O jogador comum chega na reta com a mesma chave do middle game.** Ele cria a oportunidade, mas não a realiza. A reta pede um padrão diferente. **[Aula]**
3. **O stack define o plano.** Stack grande: joga mais mãos, dá mais flat, induz mais. Stack médio ou curto: fecha, mas quando entra, entra para o ataque. **[Aula]**
4. **O risco de cair limita a exposição.** É o risk premium (RP): quanto mais curto, mais equity extra você precisa para entrar, e menos pode se expor a calls e a stacks que te cobrem. **[Aula]**
5. **Estrutura clara vale mais que leitura de dinâmica.** O adversário já abre mãos que dão raise-fold quase sempre, independente do momento. Adapte só com amostra real. **[Aula]**

---

# Parte 1 — 3bet contra open

## Regra 1 — Mão especulativa joga agressiva, não passiva

Em reta final, mãos especulativas tendem a ir de 3bet em vez de flat, principalmente fora de posição. Exemplo da aula: A6s no SB contra open de LJ com 40bb. **[Aula]**

Motivos:

- A parte off do range do opener abre e dá fold ao 3bet (A9o, A8o, ATo, KTo, KJo e parecidos).
- Coletar as fichas pré-flop reduz a variância, em vez de jogar fora de posição, dominado e sangrando o stack aos poucos.
- Os blockers diminuem a frequência de call e de 4bet do adversário.

## Regra 2 — Quais mãos 3betam e quais ainda pagam

- **3bet:** todos os Ax suited baixos (A2s a A6s no exemplo) e Ax offsuit bloqueadores (ATo, AJo). **[Aula]**
- **Mais call:** Ax suited que dominam o range do opener (ATs, AJs, A9s), mãos que flopam bem e Kx suited que dominam o range de open. **[Aula]**
- **Shove:** A6s não é forte o bastante para shove contra posição inicial. Shove só vale contra range largo, quando você tem equity contra o range de call. **[Aula]**

## Regra 3 — A borda do range 3beta sempre

A mão que você definiu como borda do range de reação entra no 3bet puro. Se a borda do offsuit é AJo, 3beta AJo puro. Se é KJo, 3beta KJo e mixa KQo. **[Aula]**

## Regra 4 — Mão forte aposta, mão fraca vira bluff-catcher

Isso vale pós-flop e é um dos pilares da aula. Uma mão com 75% a 85% de equity ou mais deve apostar, normalmente com size alto. Bluff-catcher vem de mãos mais fracas. Não deixe de apostar mão forte. **[Aula]**

## Regra 5 — Limite de 15bb: só shove ou fold

Com 15bb ou menos, o 3bet que não é all-in some quase por completo. O adversário passa a pagar mais (o preço que ele recebe é melhor), então o range que 3beta pequeno perde sentido. **[Aula]**

Acima de 15bb, o 3bet sem all-in continua existindo.

## Regra 6 — Size do 3bet depende de o seu range ter flat ou não

- **Range com incentivo de flat:** o 3bet fica polarizado (topo e borda) e o size sobe, para gerar fold equity. Exemplo: cerca de 6bb contra LJ com 40bb, fora de posição. **[Aula]**
- **Range sem incentivo de flat (linear):** o size cai, porque você não se importa de ser pago. Exemplo: 5bb, ou 5,5bb quando o SB só 3beta ou folda. **[Aula]**
- **EP contra EP:** diminuir o size e usar mais 3bet sem all-in. **[Aula]**
- Os sizes citados na aula: 5, 6, 6,5, 7 e 7,5bb. Não é preciso regular de décimos. **[Aula]**

## Regra 7 — Contra posição restrita (EP, MP) em 25-30bb, mais 3bet e menos shove

Quanto mais restrito o range do opener, mais a estratégia vira 3bet sem all-in. Contra BTN, que abre muito e dá fold a muita mão, o shove vs open tem mais sentido. **[Aula]**

Pares no SB contra open de LJ (exemplo da mão 1, 40bb):

- **TT (a transcrição cita também o JJ):** vai de 3bet/call, sem hesitar. **[Confirmado]**
- **99 e 88:** são mais vulneráveis, então têm mais argumentos para shove. A escolha final varia com a média dos stacks, o perfil do adversário e outros fatores. **[Confirmado]**

---

# Parte 2 — Shove vs open de posição tardia

## Regra 8 — O shove vs open é a principal arma da reta final

O instrutor chamou esse shove (na transcrição, "re-steal") de principal ferramenta da fase, porque você costuma estar com stack menor que o do exemplo e cada pote pré-flop vale muito. Não pode deixar a oportunidade passar. **[Aula]**

Por quê funciona:

- O BTN abre e dá fold com muita mão, e a proporção de raise-fold é muito maior que a de raise-call.
- O shove vs open costuma ganhar mais de 60% das vezes, e quando toma call você ainda está bem de equity.
- Há cerca de 4,5bb de dinheiro morto para coletar.

## Regra 9 — Mãos que dão shove vs open contra BTN ou CO

- Todos os pares.
- Todos os Ax offsuit. O A2o deve ser shove puro, e dar flat com ele é jogar passivo demais. **[Aula]**
- Kx offsuit polarizados (K5o, K6o, K7o).
- Parte da coluna do 8 suited (J8s, Q8s, T8s).
- Mais Ax suited.
- T-J offsuit, dependendo do spot. **[Aula]**

Os Ax suited são mãos que, no BB, podem dividir entre flat e shove. A maioria das pessoas só dá shove. **[Aula]**

Motivo de o offsuit preferir shove: ele joga mal pós-flop, e você já recolhe o dinheiro morto sem enfrentar a posição.

## Regra 10 — Treinar pela lógica do range do adversário

Método do instrutor para fixar: pegar o range de open do adversário, ver o que ele folda ao shove, e voltar ao seu range para entender por que cada mão vai. Se o spot não está claro, fazer mais drill. **[Aula]**

## Regra 11 — O field dá raise-fold mais do que o solver

Em torno de 35bb o opener já poderia incluir alguns open shoves (por exemplo Ax suited), mas a maior parte do field não faz isso. A frequência de raise-fold dele aumenta ainda mais. Na prática, o shove vs open deveria ser ainda maior. **[Aula, interpretação]**

---

# Parte 3 — Quando você abriu e leva 3bet

## Regra 12 — O range de 3bet do BB na reta é curto e polarizado

Na bolha da FT, o range com que o adversário 3beta e paga o 4bet (3bet/call) é curto: pares altos e broadways fortes. O 3bet dele também leva bluffs de Kx offsuit. Por isso ele pode estar desbalanceado para bluff. **[Confirmado]**

## Regra 13 — 4bet pequeno com borda e bons blockers

Com a borda do range de defesa e bons blockers (ATo, KJo, A9o se achar que ele induz mais), o instrutor usa um 4bet pequeno, só pela diferença da aposta, e foldaria ao shove. O adversário polarizado não tem como reagir de volta. **[Aula, Confirmado]**

- Mãos suited com equity vão para cima (shove), porque pagam bem se forem chamadas.
- O A5o fica fora: é fold, e o 4bet pequeno vai de A10o, KJo e A9o.

## Regra 14 — Pares contra 3bet polarizado

- **Pares médios (99 a 77):** call. Quem faz shove só enfrenta o topo dele, e o call mantém no jogo toda a parte fácil (os bluffs de Kx). **[Aula]**
- **Pares baixos (44, 33):** bons para shove, porque realizam muito mal pós-flop. Também podem foldar. **[Aula]**
- **Pares altos:** o par que entra no shove é o que está um par acima do pior par com que o adversário paga. Se ele paga com 99, o TT entra. Para dar shove com TT é preciso assumir que ele paga com 99. **[Aula, Confirmado]**

## Regra 15 — Contra 3bet linear-polar, mais pares e broadway suited

Se o adversário é menos polar (exemplo: 3bet do SB, que inclui T-J off, K-T off, K-J off), você pode dar shove com mais pares e mais broadway suited, porque rouba equity de mãos que realizariam bem. **[Aula]**

---

# Parte 4 — Pagar 3bet e o mito da reta final

## Regra 16 — "Não se paga 3bet em reta final" é um mito

- **Fora de posição:** reaja de forma mais agressiva, e pague só com mão forte (primeira linha de valor).
- **Em posição:** pode pagar sim, porque realiza muita equity. T-Q off e K-Q off são fortes o bastante para pagar. O adversário em geral enfrenta um range polarizado e checa muito o turn.
- Quanto mais curto você está e quanto pior a posição, mais agressiva deve ser a resposta. **[Aula]**

---

# Parte 5 — Stack e risco de cair

## Regra 17 — Stack grande: mais mãos, mais flat

No exemplo com 60bb, no BTN contra open de MP, a mão QTs (QT de paus) vai de flat, e não de 3bet, porque você sofre menos do pós-flop dominado. Com stack muito maior que o dos adversários, pode induzir mais. **[Aula, Confirmado]**

## Regra 18 — Stack médio ou curto (cerca de 25-30bb): 3bet ou fold

No BB com ~25bb (mão 903), contra open de range curto: **[Confirmado]**

- **Não dá flat:** A8o, T9o, K9o e qualquer Ax offsuit baixo. Vão de 3bet ou fold.
- **Flat:** A10o (eventualmente A9o) e suited conectores como 64s e 75s.
- **A5o, A4o e semelhantes:** lixo, vão para 3bet ou fold.
- O limite de 25 a 30bb depende da distribuição dos stacks na mesa. **[Aula]**

## Regra 19 — Fora de posição inicial com RP alto, quase nenhum flat

EP, MP e posições iniciais da mesa com stack confortável ainda assim têm pouco flat, porque o risco de cair e a pressão atrás são grandes. O size do adversário piora o preço e reforça isso. **[Aula]**

## Regra 20 — EP contra EP: evitar shove com 18-20bb

Em reta, EP contra EP ou contra início de MP, não desenvolva shove com 18-20bb. Colidir com os jogadores à esquerda (AA, KK, AK) é péssimo. A faixa recomendada é 3bet sem all-in. Com 15 a 16bb dá para shove direto. **[Aula]**

## Regra 21 — Shove vs open por posição em FT

- Do MP com 20bb: sem range de shove vs open.
- A partir do CO, eventualmente HJ: range de shove vs open.
- Com 15 a 17bb nas outras posições, e 20bb ou mais nas posições finais, porque há menos jogadores atrás e menos risco de overcall. **[Aula]**

## Regra 22 — Stacks muito curtos atrás permitem mais shove

Se os jogadores atrás têm stacks muito curtos (por exemplo vários com ~10bb), você pode dar mais shove. O motivo para não dar shove era colidir com stacks que te cobrem, e esse risco cai. **[Aula]**

---

# Parte 6 — Squeeze

## Regra 23 — O squeeze é a borda do range de call, com blockers

As mãos que menos se beneficiam do flat (A8o, A7o e K9o dominados) vão para o squeeze, para compensar a falta de agressividade do range de call. **[Aula]**

## Regra 24 — Flat inesperado é oportunidade

Quando alguém com ~20bb dá flat do SB, sem justificativa, é dinheiro morto. Acenda a luz: é spot raro para coletar fichas. Priorize Ax offsuit e K9o. **[Aula]**

---

# Parte 7 — Abrir e blind war

## Regra 25 — Open BW (blind war)

No SB contra um BB de 40bb, mesmo cobrindo ele, estamos investindo mais fichas para jogar fora de posição. Por isso queremos dar raise mais com mãos que tenham jogabilidade. Quando o BB tem stack mais curto, aí sim conseguimos de fato pressioná-lo. **[Confirmado]**

## Regra 26 — 3-handed em duas perspectivas (BTN 46bb, SB 26bb, BB 55bb)

- **BTN:** quanto menos ante tem, menos mãos jogamos. Range de open de 33%. **[Confirmado]**
- **SB:** não temos incentivo de ter flat. É 5,5bb ou shove. Se você consegue dar shove com bastante frequência, o range de 3bet e o range de shove convivem. Quando já não consegue dar shove tanto, o range de flat reaparece. **[Confirmado]**

---

# Parte 8 — 3-handed e diferença de stacks

## Regra 27 — 3-handed: stack maior contra SB e BB curtos

**Ex.: 84bb contra 20bb e 20bb**

- Open shove, não open raise. Se você dá raise, abre a porta para o adversário.
- Não deixe os adversários reagirem com alta frequência.

**Ex.: 40bb contra 20bb e 20bb**

- Elimine a borda do range, abra um pouco menos, dê mais shove com mãos médias (a "meiuca") e vá mais para raise-fold.

**Ex.: 20bb contra 20bb e 20bb**

- Risco grande. Abra menos mãos, dê menos shove. Mãos precisas.

**Stack menor que os adversários**

- Quando todos têm mais fichas que você, algo tem que ser a seu favor: você pode induzir mais mãos do que eles, como A10 suited indo de 3bet/call em vez de shove, e pares que não induziria com stacks iguais.

**[Confirmado]**

---

# Parte 9 — Pós-flop em reta final

## Regra 28 — Sizes de pós-flop: não inventar

Mantenha a estrutura de sizes que você já usa. No exemplo J84 o size era B40, ou B25 sem problema. Em reta os adversários tendem a afundar mais, mas não há motivo para adaptar sizes em que você não tem prática. **[Aula]**

## Regra 29 — Mão forte não faz slowplay por hot card

Mesmo quando uma carta alta é boa para o blefe do adversário, as mãos de valor continuam apostando. O ganho vem da parte média do range, que passa a poder pagar com mais frequência. **[Aula]**

## Regra 30 — Mão forte aposta, mão fraca paga

Reforço da Regra 4: mão forte penaliza o adversário, mão fraca é bluff-catcher.

---

# Parte 10 — Leitura e adaptação

## Regra 31 — Poucos dados, estratégia padrão

Em FT você joga poucas mãos contra cada pessoa. Na primeira vez, assuma que o que o adversário faz é a estratégia dele. Adapte só com showdowns. **[Aula]**

---

# Resumo operacional

| Spot | Resposta |
|---|---|
| SB, 40bb, A6s vs open de LJ | 3bet puro, size ~6bb, sem shove |
| Ax suited dominante (ATs-AJs) | Mais call |
| Ax offsuit bloqueador (ATo, AJo) | 3bet |
| SB, 40bb, pares vs open de LJ | TT de 3bet/call. 99 e 88 com mais argumentos para shove |
| 15bb ou menos | Shove ou fold, sem 3bet pequeno |
| BB vs BTN, A2o | Shove, nunca flat |
| BB ~25bb, A8o, T9o, K9o | 3bet ou fold, sem flat |
| BB ~25bb, A10o (eventualmente A9o), 64s e 75s | Flat |
| CO abre e leva 3bet polar | 99-77 call, 44-33 shove ou fold, par um acima do pior par que ele paga entra no shove (paga com 99, o TT entra), A5o fold, 4bet pequeno com ATo/KJo |
| Contra 3bet do SB (linear-polar) | Mais pares e broadway suited em shove |
| EP vs EP, 18-20bb | 3bet sem all-in, sem shove |
| Flat de SB com 20bb | Squeeze com Ax e K9o |
| 3-handed, 80bb vs 20bb e 20bb | Open shove, sem raise |

---

# Cruzamento com o KB

- **Módulo 11 (Value Bet):** a Regra 4 (mão forte aposta, mão fraca vira bluff-catcher) conversa com os princípios de valor.
- **Mapa de RFI por stack e fase (10% do field restante):** como a reta final é geralmente o cenário 10% field left, os mapas de BTN e CO levantados (25, 20 e 15bb) são a referência de abertura desta fase. **[Confirmado]** Eles mostram que o range de open encolhe, o que combina com "abrir menos mãos e dar mais ataque quando entra". **[Inferência]**
- **Squeeze e 3bet pré-flop:** ainda não existem módulos próprios. Os padrões do BB contra open e flat levantados antes se conectam com a Regra 23.
- **Módulo 08 (3Bet Pot):** cobre o pós-flop depois do 3bet. A parte pós-flop de reta só cita sizes e mão forte, sem conflito.

---

# Pendências e decisões

As pendências abertas estão em `06-Pendencias.md` e as decisões e esclarecimentos da construção do módulo estão em `09-Decisoes.md`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/12-RETA-FINAL/README|theory/12-RETA-FINAL]]

**Mesma pasta:** [[theory/12-RETA-FINAL/02-VideoAulas|02-VideoAulas]] · [[theory/12-RETA-FINAL/03-Solver|03-Solver]] · [[theory/12-RETA-FINAL/04-Exercicios|04-Exercicios]] · [[theory/12-RETA-FINAL/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/12-RETA-FINAL/06-Pendencias|06-Pendencias]] · [[theory/12-RETA-FINAL/07-Changelog|07-Changelog]] · [[theory/12-RETA-FINAL/08-Referencias|08-Referencias]] · [[theory/12-RETA-FINAL/09-Decisoes|09-Decisoes]]

**Módulos citados no texto:** [[theory/01-CBet-IP-Short-Stack/README|01-CBet-IP-Short-Stack]] · [[theory/08-3BET-POT/README|08-3BET-POT]]

**Outros módulos:**

- [[theory/13-ICM/01-Guideline|13-ICM · 01-Guideline]]
- [[theory/11-Value-Bet-Masterclass/05-Regras-Consolidadas|11-Value-Bet-Masterclass · 05-Regras-Consolidadas]]
- [[theory/11-Value-Bet-Masterclass/README|11-Value-Bet-Masterclass · README]]

<!-- graphify-links:end -->
