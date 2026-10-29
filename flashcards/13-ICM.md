---
tags:
  - tipo/flashcards
---

# Flashcards — ICM e Risk Premium

#flashcards/13-icm

Fonte: [[theory/13-ICM/05-Regras-Consolidadas|Regras Consolidadas]] · [[theory/13-ICM/README|Módulo]]

O que é o Risk Premium (RP) no ICM?
?
É o equity extra que um spot exige por causa do risco de cair; é a unidade de medida do ICM.
(Regra 1)

Em quais streets o RP é cobrado, e qual a consequência para o range de pré-flop?
?
Em todas: pré-flop, flop, turn e river. Por isso o range de pré-flop encolhe quando o RP sobe.
(Regra 2)

O RP de um spot é o mesmo para todos os jogadores da mesa?
?
Não. O RP é de um jogador contra outro: o mesmo spot tem RPs diferentes para cada par de jogadores. Pense no seu RP contra cada adversário.
(Regra 3)

Quais são os três fatores que definem o RP?
?
Os stacks (o seu e o de quem cobre você), a fase do torneio e a estrutura de pagamento.
(Regra 4)

Além do seu stack, quais stacks olhar antes de agir, e em que ordem?
?
BB, BTN e SB, nessa ordem. Quem te cobre pode te eliminar.
(Regra 5)

Ao colidir com um jogador que te cobre, como fica o RP da mão e o que fazer com o range?
?
O RP é alto: aperte o range.
(Regra 6)

Como classificar o seu tipo de stack: só pelo número de bb?
?
Não. Classifique-se pelo stack relativo à mesa e à média.
(Regra 7)

Descreva a curva do ICM ao longo do torneio.
?
Pesa a partir de ~30% do field left, atinge o pico na bolha, cai muito depois dela (até ~5%) e sobe de novo até a mesa final, com quedas a cada pay jump.
(Regra 8)

Pela curva do ICM, qual é o momento de fazer fichas?
?
Depois da bolha, quando o ICM cai muito.
(Regra 8)

Por que em torneios pequenos a bolha chega mais rápido?
?
Porque poucos eliminados já mudam bastante a porcentagem do field left.
(Regra 9)

Como a estrutura de pagamento muda o RP (vanilla vs PKO, 1º vs 9º, pay jump)?
?
Vanilla tem RP maior que PKO. Quanto mais o 1º paga em relação ao 9º, menor o ICM. Pay jump pequeno quase não pesa.
(Regra 10)

O RP pode ser negativo? Em que condição?
?
Só com recompensa por eliminação. No vanilla nunca é negativo; com bounty, cobrir quem o carrega pode deixar o RP muito baixo ou negativo.
(Regra 11)

O que significam RP de 5%, 10% e 15% na escala do módulo?
?
5% é o padrão, 10% exige dominar o adversário e 15% exige esmagá-lo.
(Regra 12)

Qual o papel do big stack em ICM e como ele pressiona?
?
É o predador, com o menor RP. Pressiona jogando mais mãos: mais VPIP, calls em posição, check-raise e leads, e não só 3bet e shove.
(Regra 13)

Quais são os quatro erros do big stack?
?
Confrontar outro big stack, subestimar o próprio RP, não explorar a vantagem e ser o capitão da mesa sem pressão a favor.
(Regra 14)

Qual stack tem o maior RP e como ele deve jogar?
?
O mid stack (a vítima): sofre pressão do big e do short stack. Joga menos mãos e com agressividade, sem calls marginais contra big stacks.
(Regra 15)

Como o short stack joga em ICM e que tipo de mão prefere com stack raso?
?
RP moderado, push ou fold, sem rasgar EV. Com stack raso, prefere mãos de carta alta.
(Regra 16)

Qual a principal arma do short e do mid stack e por quê?
?
O shove vs open: recolhe o dead money no pré-flop. Com RP alto não se flutua flop nem se paga cbet.
(Regra 17)

Como e quando expandir o range em ICM?
?
Aos poucos, conforme a pressão a favor (bolha, pay jump, mesa final). Sem pressão, a expansão só distribui fichas.
(Regra 18)

Que referências você precisa saber antes de adaptar o range por ICM?
?
O range de ChipEV e o de 10% field left de cada posição. Sem referência não há como adaptar.
(Regra 19)

Antes de abrir, como ajustar conforme quem você cobre entre BB, BTN e SB?
?
Cobre os três: expanda. Cobre o BB: mais suave. Coberto pelo BB: cuidado. Coberto por BB e BTN: cuidado redobrado. Coberto pelos três: reduza bastante.
(Regra 20)

LJ cobrindo todos: quanto abre com 25% left e com 16% left, e de onde vem a ampliação?
?
26,4% com 25% left e 40,1% com 16% left. A ampliação vem de suited baixos e conectores, offsuit nas linhas do 9 e do 8 e Ax offsuit baixos.
(Regra 21)

HJ coberto por todos: quanto abre com 25% left e com 16% left, e o que sai do range?
?
24,4% com 25% left e 14,8% com 16% left. Saem suited médios e baixos, Ax offsuit médios e broadways offsuit fracos.
(Regra 22)

BTN cobrindo o HJ: o VPIP sobe ou desce em relação ao padrão, e de qual ação vem a mudança?
?
Sobe de ~20,8% para ~23,5%, mesmo enfrentando um range menor; o aumento vem do call. Se o BTN é coberto pelo BB, joga menos.
(Regra 23)

Coberto e enfrentando um open: quais opções de ação existem?
?
3bet, shove ou fold, sem flat. Pares e AQ ou melhor vão de 3bet/call; mãos de borda com bons blockers de 3bet/shove ou fold.
(Regra 24)

Coberto e enfrentando um open com par baixo e menos de ~30bb: paga?
?
Não. Pares baixos com menos de ~30bb não pagam.
(Regra 24)

Coberto, por que preferir 3bet ou shove ao flat?
?
Jogar agressivo reduz a variância. Quando você dá flat, vai por baixo e sangra o stack.
(Regra 25)

BB enfrentando o open do big stack que o cobre: como mudam o VPIP e a forma de jogar?
?
O VPIP cai de 62,5% para 39,4%, com mais shove e quase sem raise pequeno. O CO, nesse cenário, abre de 35,8% para 48,5%.
(Regra 26)

Como desviar da teoria contra um tight que te cobre, um maníaco e quem rasga o ICM?
?
Tight cobrindo você: aperte mais. Maníaco: não expanda só por isso. Quem rasga o ICM: jogue mais perto do ICM e ajuste ao desvio. Só desvie depois de entender a teoria.
(Regra 27)

Blind war, SB cobrindo o BB: como jogar com 25% left e com 16% left?
?
25% left: mais raise e menos limp. 16% left: pressão máxima com raise, shove ou fold, sem limp; parte média shove, topo induz, borda raise ou fold.
(Regra 28)

Blind war, SB coberto pelo BB: o que acontece com raise, call e fold?
?
O raise some, o range protege o call (inclusive com parte do topo) e o fold das mãos fracas aumenta.
(Regra 29)

SB curto (10 a 14bb) coberto pelo BB: tem range de limp?
?
Não. Raise ou shove, sem limp; com RP maior, a mesma estratégia com menos mãos.
(Regra 30)

Short stack na bolha: com o que comparar o seu stack?
?
Com a distribuição de stacks, e não só com a média; depende de quão short você é.
(Regra 31)

Qual a pergunta principal do módulo antes de qualquer decisão em ICM?
?
Quem me cobre, e há pressão a favor? Quem cobre expande, quem é coberto aperta, e sem pressão ninguém precisa expandir.
(seção: Regra Principal do Módulo)
