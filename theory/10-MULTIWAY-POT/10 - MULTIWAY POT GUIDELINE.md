---
tags:
  - modulo/10-multiway-pot
  - spot/multiway
  - street/flop
  - street/turn
  - stack/40bb
  - tipo/guideline
---

# Guideline — Multiway Pot

> **Módulo:** 10 – Multiway Pot
>
> **Objetivo:** Construir a estratégia correta de pote a 3 (EP / BTN / BB), substituindo a estratégia antiga baseada em exploits sem solver.

---

# Por que a estratégia antiga estava errada

A estratégia anterior foi construída em cima de exploits, sem uma ferramenta de solver 3-way confiável disponível na época. Isso levou a três erros estruturais:

1. **C-Bet em frequência quase de range estando OOP.** O range de defesa multiway não é desenhado pra um adversário só — o EP fora de posição não consegue apostar em frequência alta porque ambos os pagadores cobrem o board de forma natural.
2. **Bet-vs-Missed tratado como aposta de range.** Tanto para o agressor original quanto para quem ataca depois de um check.
3. **Overfold generalizado.** A instrução histórica era foldar top pair, second pair e mãos sem overcard direta contra qualquer agressão — isso gerava EV negativo real, confirmado depois por MDA do field.

Confirmação por dado: a frequência média de C-Bet do field multiway gira em torno de **35%**. Isso prova que o range de quem aposta **não está capado** — ele ainda carrega overpairs, trincas e dois pares em quantidade relevante, então não faz sentido continuar atacando esse range com alta frequência nem overfoldar contra ele.

---

# Situação 1 — Hero OOP (agressor pré-flop)

Contexto: EP (Hero) abre, BTN paga, BB paga.

## Flop

Estratégia: **Split C-Bet OOP** (o mesmo split já usado no módulo de C-Bet OOP) — nunca range bet.

### Vs BET (IP) + CALL (BB)

Ou seja: Hero dá check, BTN aposta, BB paga, ação volta pro Hero.

- **Boards secos:** joga de Check-Raise com tudo que for continuar — qualquer par do board ou blockers com BDFD+BDST viram XR ou fold, sem check-call no meio.
- **Boards mais carregados (com draws relevantes):** XR com os melhores Top Pairs e Super Draws; o resto que ainda quer realizar equity (TP fracos, Second Pair + BDFD, bons draws que não sejam premium) vai de call.

Motivo do corte mais seletivo em boards carregados: draws com muita saída (flush draw, sequência) não devem virar XR/Fold — a mão quer realizar equity, não jogar por stack.

Motivo de jogar puro XR/Fold em boards secos: com dois adversários na mão, manter uma linha passiva (check-call) faz o Hero splitar equity com os dois ao mesmo tempo — isso é mais caro que simplesmente definir entre pressionar (XR) ou desistir.

## Turn

- **Dinâmico:** B40, apostar com os melhores Second Pairs ou melhor (mesmo referencial já usado no CBet OOP 40bb).
- **Blank:** B100 (size máximo — pot/overbet conforme o SPR), apostar apenas com os 3 melhores Top Pairs ou melhor. Motivo: em turn blank o Hero ainda carrega a maioria das mãos fortes do board (não está capado), então o objetivo passa a ser maximizar extração, não proteger frequência.
- **Blefe:** referência é sempre equity direta (broca, duas pontas, flush draw) + blockers que contenham pelo menos uma overcard ao Top Pair — isso aumenta a frequência de fold do adversário e ainda preserva alguma equidade de showdown caso ele pague.

Regra de exceção por SPR: em stacks muito curtos após dois calls (SPR efetivo perto de 1), preferir call com mãos muito fortes em vez de XR — não vale a pena forçar a ação quando o pote já está quase comprometido.

---

# Situação 2 — Hero IP (paga o EP, BB também paga)

Contexto: EP abre, Hero (posição tipo BTN) paga, BB paga.

## Flop

Estratégia: **Split Bet-vs-Missed**, com a mesma lógica de equity mínima usada no heads-up (mãos com backdoor apostam; duas pontas sem backdoor geralmente não apostam). Size preferencial B25 como padrão inicial (mais baixo que o B40 do OOP).

### Vs C-Bet (quando o EP aposta)

Pagar igual seria contra um Hupot — não overfoldar. Regras práticas:

- Qualquer par do board continua.
- Pocket pairs continuam (tendem a ser break-even/negativo isolado, mas ainda corretos de defender pela frequência mínima).
- Overcard sobre o second pair ou terceiro par: normalmente não folda.
- Sem nenhuma overcard sobre nenhum par do board: mão mais marginal, tende a ficar entre break-even e negativo — usar como referência inicial até refinar.
- Quanto mais carregado o board, mais equity é necessária pra continuar, porque o range de aposta do agressor também fica mais forte nesses boards.

### Vs Check-Raise (do EP, depois do BB ter foldado o bet-vs-missed)

Mesma lógica de não overfoldar: mãos com backdoor pagam, pares do board pagam, Rei-Valete/Dama-X com backdoor pagam. Só folda o que realmente não tem redraw pro nuts nem equity direta contra o board.

## Turn

- **Dinâmico:** B70, apostar com os melhores Top Pairs ou melhor.
- **Blank:** B70, apostar com mãos que ganham do Second Pair — ou seja, os Top Pairs mais fracos que deram check no flop e os melhores Second Pairs passam a poder apostar, porque ainda batem a maior parte do range que continua (par do board mais fraco, pockets piores).

---

# Situação 3 — Hero BB

Contexto: EP abre, IP (BTN) paga, Hero (BB) paga.

## Flop

- **Não existe Check-Raise quando o agressor pré-flop (EP) dá check.** Regra mais importante do módulo: se o EP ainda não apostou, ele ainda carrega overpairs, trincas, dois pares — seu range de check não está capado. Não faz sentido pressionar quem ainda tem a mão inteira.
- Check-Raise volta a existir normalmente quando o EP **aposta** e o IP paga — nesse momento, sim, o Hero (BB) joga como se fosse Hupot contra o agressor.
- **Boards secos:** nunca foldar par do board nem equity direta.
- **Boards carregados:** Third Pair ou draws que não vão pro nuts precisam de BDFD (backdoor flush draw) pra continuar — sem isso, a equity não é suficiente porque o range de aposta do adversário também ficou mais forte.

## Turn — depois de Bet-vs-Missed (IP aposta, BB paga, EP também paga o flop)

Sequência: EP abre → OOP (EP) dá check no flop → IP aposta → BB paga → EP paga também → ação chega no BB no turn.

Aqui surge o **Lead** — situação exclusiva do multiway que não existe em heads-up, porque nem o EP nem o BB estão com o range capado (o EP não apostou o flop, o BB só pagou).

- **Turn blank:** Lead com B25 (size único observado no estudo — nenhuma situação de B70 encontrada). Apostar com os melhores Top Pairs, alguns Dois Pares, equilibrando com a Trinca, e também o Second Pair sem overcard (mão fraca demais pra check-call, mas com função de gerar fold e roubar equity a um preço baixo).
- **Turn dinâmico:** mesmo B25, apostando com os melhores Top Pairs e qualquer par que conecte com o board.

Justificativa do Lead: como nem o EP nem o BB capou o range, o Hero ainda tem Top Pair Top Kicker, Second Pair forte, Trinca, Dois Pares — ou seja, ainda joga com a mão "inteira". O Lead cobra de mãos que dariam check atrás (pares médios) e ainda induz raise de mãos piores. A condição para o Lead existir é dupla: (1) o agressor deu check no flop, e (2) o próprio Hero não tomou nenhuma aposta anterior que o tivesse capado.

## Turn — quando o agressor aposta (sem Probe/Lead no meio)

Não existe problema de Probe Turn aqui, porque a ação já é natural: Check-Raise com os melhores Top Pairs ou melhor e Combo Draws — igual à lógica padrão contra agressor que ainda "tem que falar".

## Quando NÃO existe Probe Turn (checou todo mundo no flop)

Se o flop foi Check-Check-Check (todos deram check), **não existe Probe Turn do Big Blind**. Motivo: o agressor pré-flop que deu check ainda carrega todas as mãos fortes (não capou range algum), então atacar esse range no turn não gera fold equity suficiente — o estudo com solver mostrou frequência de probe próxima de zero em praticamente todos os boards testados, incluindo pareados e boards que pareiam no turn.

Nessa situação o Hero apenas segue com o range natural: continua com todos os Top Pairs, Trincas, Dois Pares e Super Combo Draws (não perdeu nenhuma força por não ter apostado), e desenvolve Check-Raise contra o agressor com mãos que ganham de mãos piores (referência: melhor Top Pair ou melhor) e, por blefe, prioriza Super Combo Draws — não blefes sem par nem sem draw relevante.

---

# Sizing — Referência Rápida

| Situação | Size |
|---|---|
| C-Bet OOP (agressor) | B40 (às vezes B25) |
| Bet-vs-Missed IP | B25 (às vezes B40) |
| Turn dinâmico, agressor OOP | B40 |
| Turn blank, agressor OOP | B100 (máximo) |
| Turn dinâmico, IP (pós bet-vs-missed) | B70 |
| Turn blank, IP (pós bet-vs-missed) | B70 |
| Lead do BB (blank ou dinâmico) | B25 (único observado) |
| Check-Raise padrão (flop/turn) | ~B40, ajustar por SPR |

---

# Sobre Small Blind

O estudo identificou uma possibilidade de Lead do Small Blind em boards low conectados (ex: 987, 876, 765, 654, 432) — mas com frequência baixa e diferença de EV pequena contra apenas dar check. Não faz parte da estratégia ativa neste momento; fica registrado como estudo futuro.

---

# Limitações Conhecidas do Estudo Atual

- Testado majoritariamente a 40bb; ainda não testado a 15-20bb.
- Assume ranges pré-flop "padrão" (ChipEV) — cenários de ICM tendem a ter ranges pré-flop mais curtos, o que deve reduzir a frequência de aposta em geral, mas a lógica base deve se manter.
- Ainda não cobre situações com dois jogadores em posição contra o Hero, nem river.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/10-MULTIWAY-POT/README|theory/10-MULTIWAY-POT]]

**Mesma pasta:** [[theory/10-MULTIWAY-POT/02-VideoAulas|02-VideoAulas]] · [[theory/10-MULTIWAY-POT/03-Solver|03-Solver]] · [[theory/10-MULTIWAY-POT/04-Exercicios|04-Exercicios]] · [[theory/10-MULTIWAY-POT/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/10-MULTIWAY-POT/06-Pendencias|06-Pendencias]] · [[theory/10-MULTIWAY-POT/07-Changelog|07-Changelog]] · [[theory/10-MULTIWAY-POT/08-Referencias|08-Referencias]] · [[theory/10-MULTIWAY-POT/09-Decisoes|09-Decisoes]]

**Outros módulos:**

- [[theory/11-Value-Bet-Masterclass/02-VideoAulas|11-Value-Bet-Masterclass · 02-VideoAulas]]
- [[theory/11-Value-Bet-Masterclass/11 - VALUE BET GUIDELINE|11-Value-Bet-Masterclass · 01-Guideline]]

<!-- graphify-links:end -->
