---
tags:
  - modulo/10-multiway-pot
  - spot/multiway
  - street/flop
  - street/turn
  - stack/40bb
  - tipo/regras
---

# Regras Consolidadas – Multiway Pot

> Este documento reúne apenas as regras finais consolidadas durante o estudo do módulo.

---

# Filosofia Geral

O range de defesa multiway é desenhado pra aguentar dois adversários, não um. Por isso ele naturalmente resiste mais do que um range de Hupot equivalente. A frequência média de C-Bet do field multiway (35%) confirma que esses ranges raramente estão capados.

A pergunta central antes de qualquer decisão: **o range do adversário está capado ou não?** Se ele ainda não apostou, provavelmente não está.

---

# Regra 1 — Nunca C-Bet perto de range estando OOP

Fora de posição, contra dois pagadores potenciais, usar sempre o Split C-Bet OOP (mãos com backdoor, draws diretos, pares do naipe do board). Apostar perto de range aqui é o erro mais custoso identificado no módulo.

---

# Regra 2 — Bet-vs-Missed não é aposta de range

Vale tanto pro agressor original (OOP) quanto pra quem ataca depois de um check estando IP. Segue a mesma lógica de equity mínima do heads-up: backdoors apostam, duas pontas sem backdoor geralmente não.

---

# Regra 3 — Não existe overfold generalizado

Contra C-Bet e contra Check-Raise multiway: qualquer par do board continua, mãos com backdoor continuam, pocket pairs continuam. Só folda o que realmente não tem equity direta nem redraw pro nuts. Quanto mais carregado o board, mais equity é necessária pra continuar (o range do agressor também fica mais forte).

---

# Regra 4 — Vs Bet + Call (agressor OOP), boards secos = puro XR/Fold

Quando o Hero (OOP, agressor) recebe Bet do IP + Call do BB, em boards secos não existe linha de check-call — tudo que quer continuar vira Check-Raise ou Fold. Motivo: manter linha passiva splita a equity com dois adversários ao mesmo tempo, o que é mais caro que decidir entre pressionar ou desistir.

---

# Regra 5 — Vs Bet + Call (agressor OOP), boards carregados = XR seletivo + Call de realização

Em boards com draws relevantes, o XR fica restrito aos melhores Top Pairs e Super Draws. O resto que ainda quer realizar equity (TP fracos, Second Pair + BDFD, bons draws não-premium) vai de call.

---

# Regra 6 — Sizing do agressor no turn depende de quão "cheio" o range está

Turn blank → B100 (size máximo), apenas com os 3 melhores Top Pairs ou melhor — o agressor ainda carrega a maioria das mãos fortes.
Turn dinâmico → B40, incluindo os melhores Second Pairs ou melhor — o range se filtrou um pouco mais, permitindo apostar mais combos com sizing menor.

---

# Regra 7 — Vs C-Bet e vs Check-Raise (perspectiva IP), pague igual Hupot

Não overfolde. Qualquer par do board continua, backdoors continuam, pocket pairs continuam (tendem a ficar entre break-even e negativo isolados, mas ainda corretos pela frequência mínima). Sem nenhuma overcard sobre nenhum par do board, a mão é mais marginal.

---

# Regra 8 — Não existe Check-Raise quando o agressor ainda "tem que falar"

Regra mais importante do módulo. Se o agressor pré-flop deu check no flop, ele ainda carrega o range inteiro (overpairs, trincas, dois pares) — não está capado. O Check-Raise só volta a existir normalmente depois que o agressor já apostou.

---

# Regra 9 — Não existe Probe Turn quando todos deram check no flop

Se ninguém apostou o flop, ninguém capou o range. Atacar o turn nessa situação não gera fold equity suficiente — confirmado por frequências de probe próximas de zero em praticamente todas as texturas testadas no solver, incluindo boards pareados.

---

# Regra 10 — O Lead no Turn (exclusivo do multiway)

Só existe quando: (1) o agressor pré-flop deu check no flop, e (2) o próprio Hero (BB) também não tomou nenhuma aposta que o tivesse capado (ou seja, ele pagou um Bet-vs-Missed do IP). Nessa janela, nem o agressor nem o BB estão capados, e o BB pode liderar o turn.

Size único observado: B25 (blank ou dinâmico).

Range de Lead:

- Melhores Top Pairs.
- Alguns Dois Pares, equilibrando com a Trinca.
- Second Pair sem overcard (função de blefe/blocking bet — gera fold barato e rouba equity).

---

# Regra 11 — Boards secos nunca abandonam par ou equity direta (perspectiva BB)

Em boards carregados, o Third Pair ou draws que não vão pro nuts precisam de BDFD pra continuar — sem isso a equity não é suficiente.

---

# Regra 12 — Small Blind não lidera (por enquanto)

Existe alguma possibilidade de Lead do SB em boards low conectados (987, 876, 765, 654, 432), mas com frequência baixa e diferença de EV pequena contra check. Não faz parte da estratégia ativa — registrado como estudo futuro.

---

# Resumo Operacional

## Agressor (OOP)

Split C-Bet, nunca range. Vs Bet+Call: XR/Fold puro em seco, XR seletivo + call em carregado. Turn blank B100 (top 3 TP+), turn dinâmico B40 (SP+).

## IP

Split Bet-vs-Missed (B25 padrão). Vs C-Bet/XR: pague igual Hupot, não overfolde. Turn B70 nos dois casos (dinâmico TP+, blank ganha do SP).

## Big Blind

Sem XR contra agressor que não falou ainda. Sem Probe quando todos checaram. Lead B25 quando ninguém capou o range até o turn. Nunca abandone par/equity direta em board seco.

---

# Objetivo Final

Substituir o exploit genérico por uma estratégia fundamentada: entender quando o adversário está capado (e só aí pressionar) e quando não está (e por isso não vale a pena atacar nem overfoldar).

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/10-MULTIWAY-POT/README|theory/10-MULTIWAY-POT]]

**Mesma pasta:** [[theory/10-MULTIWAY-POT/01-Guideline|01-Guideline]] · [[theory/10-MULTIWAY-POT/02-VideoAulas|02-VideoAulas]] · [[theory/10-MULTIWAY-POT/03-Solver|03-Solver]] · [[theory/10-MULTIWAY-POT/04-Exercicios|04-Exercicios]] · [[theory/10-MULTIWAY-POT/06-Pendencias|06-Pendencias]] · [[theory/10-MULTIWAY-POT/07-Changelog|07-Changelog]] · [[theory/10-MULTIWAY-POT/08-Referencias|08-Referencias]] · [[theory/10-MULTIWAY-POT/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
