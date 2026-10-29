---
tags:
  - tipo/flashcards
---

# Flashcards — Multiway Pot

#flashcards/10-multiway-pot

Fonte: [[theory/10-MULTIWAY-POT/05-Regras-Consolidadas|Regras Consolidadas]] · [[theory/10-MULTIWAY-POT/README|Módulo]] · [[theory/10-MULTIWAY-POT/10 - MULTIWAY POT GUIDELINE|Guideline]]

Multiway: qual é a pergunta central antes de qualquer decisão, e qual a resposta provável se o adversário ainda não apostou?
?
"O range do adversário está capado ou não?" Se ele ainda não apostou, provavelmente não está.
(seção: Filosofia Geral)

Multiway: por que o range de defesa multiway resiste mais que um range de Hupot equivalente?
?
Porque é desenhado para aguentar dois adversários, não um. A frequência média de C-Bet do field multiway (35%) confirma que raramente está capado.
(seção: Filosofia Geral)

Multiway, Hero agressor OOP no flop contra dois pagadores potenciais: pode c-betar perto de range?
?
Não. Usar sempre o Split C-Bet OOP (mãos com backdoor, draws diretos, pares do naipe do board). Apostar perto de range é o erro mais custoso do módulo.
(Regra 1)

Multiway: o Bet-vs-Missed (agressor OOP ou quem ataca IP após check) é aposta de range? Qual a lógica?
?
Não. Segue a lógica de equity mínima do heads-up: backdoors apostam, duas pontas sem backdoor geralmente não.
(Regra 2)

Multiway, vs C-Bet ou vs Check-Raise: o que continua e o que folda?
?
Qualquer par do board, mãos com backdoor e pocket pairs continuam. Só folda o que não tem equity direta nem redraw pro nuts. Não existe overfold generalizado.
(Regra 3)

Multiway: como o grau de "carregamento" do board afeta a equity necessária para continuar?
?
Quanto mais carregado o board, mais equity é necessária, porque o range do agressor também fica mais forte.
(Regra 3)

Multiway, Hero agressor OOP dá check, recebe Bet do IP + Call do BB em board seco: quais linhas existem?
?
Puro XR/Fold, sem check-call. Linha passiva splita a equity com dois adversários ao mesmo tempo.
(Regra 4)

Multiway, Hero agressor OOP vs Bet do IP + Call do BB em board carregado: o que vai de XR e o que vai de call?
?
XR: melhores Top Pairs e Super Draws. Call de realização: TP fracos, Second Pair + BDFD, bons draws não-premium.
(Regra 5)

Multiway, agressor no turn com turn blank: qual size e qual range de valor?
?
B100 (size máximo), apenas com os 3 melhores Top Pairs ou melhor.
(Regra 6)

Multiway, agressor no turn com turn dinâmico: qual size e qual range de valor?
?
B40, incluindo os melhores Second Pairs ou melhor (range mais filtrado, mais combos com sizing menor).
(Regra 6)

Multiway, IP vs C-Bet ou vs Check-Raise: como deve defender?
?
Pague igual Hupot, sem overfold. Pares do board, backdoors e pocket pairs continuam. Sem overcard sobre nenhum par do board, a mão é mais marginal.
(Regra 7)

Multiway: pocket pairs isolados na defesa IP são lucrativos?
?
Tendem a ficar entre break-even e negativo isolados, mas ainda são corretos pela frequência mínima.
(Regra 7)

Multiway, BB: o agressor pré-flop deu check no flop. Existe Check-Raise contra ele?
?
Não. Ele ainda carrega o range inteiro (overpairs, trincas, dois pares). O XR só volta depois que o agressor já apostou. Regra mais importante do módulo.
(Regra 8)

Multiway: todos deram check no flop. Vale fazer Probe no turn?
?
Não. Ninguém capou o range, não há fold equity suficiente; probe próximo de zero no solver em quase todas as texturas, incluindo boards pareados.
(Regra 9)

Multiway, BB no turn: em que condições existe o Lead (exclusivo do multiway)?
?
(1) O agressor pré-flop deu check no flop e (2) o BB não tomou aposta que o capasse (pagou um Bet-vs-Missed do IP). Nem agressor nem BB estão capados.
(Regra 10)

Multiway, BB lidera o turn: qual o size e qual o range de Lead?
?
B25 (blank ou dinâmico). Melhores Top Pairs, alguns Dois Pares equilibrando com a Trinca, e Second Pair sem overcard (blefe/blocking bet).
(Regra 10)

Multiway, Lead de turn do BB: qual a função do Second Pair sem overcard?
?
Função de blefe/blocking bet: gera fold barato e rouba equity.
(Regra 10)

Multiway, perspectiva BB: em board seco, pode abandonar par ou equity direta?
?
Não, boards secos nunca abandonam par ou equity direta.
(Regra 11)

Multiway, perspectiva BB em board carregado: o que Third Pair ou draws que não vão pro nuts precisam para continuar?
?
BDFD. Sem isso a equity não é suficiente.
(Regra 11)

Multiway: o Small Blind lidera na estratégia ativa?
?
Não. Há alguma possibilidade em boards low conectados (987, 876, 765, 654, 432), mas com frequência baixa e EV pequeno vs check; fica como estudo futuro.
(Regra 12)

Multiway, IP: qual o size padrão do Bet-vs-Missed e o size do turn?
?
Bet-vs-Missed split com B25 padrão. Turn B70 nos dois casos (dinâmico TP+, blank ganha do SP).
(seção: Resumo Operacional — IP)

Multiway: qual o objetivo final do módulo em relação a pressionar ou overfoldar?
?
Entender quando o adversário está capado (só aí pressionar) e quando não está (não vale atacar nem overfoldar).
(seção: Objetivo Final)
