# Flashcards — C-Bet OOP 40bb

#flashcards/05-cbet-oop-40bb

Fonte: [[theory/05-CBet-OOP-40bb/05-Regras-Consolidadas|Regras Consolidadas]] · [[theory/05-CBet-OOP-40bb/README|Módulo]]

SRP 40bb, Hero OOP no flop decidindo c-bet. Qual é a pergunta certa a fazer sobre a mão?
?
Não "minha mão é boa?", e sim "como essa mão se encaixa na construção do meu range de bet e check?".
(Regra 1)

SRP 40bb OOP no flop: por que não montar bet = mãos fortes e check = mãos fracas? O que o range de check precisa conter?
?
O range de check precisa ser protegido. Deve conter valor, showdown value, mãos capazes de continuar e mãos fortes para proteção.
(Regra 2)

C-bet OOP 40bb: EP vs BTN e CO vs BTN podem usar a mesma estratégia? Por quê?
?
Não. São estratégias diferentes porque a composição dos ranges é diferente.
(Regra 3)

C-bet OOP 40bb: antes de decidir a mão individual, quais opções de estratégia do board você identifica?
?
Primeiro a estratégia do board: Range, Split Range, Split 25% ou Check Range. A mão individual vem depois.
(Regra 4)

C-bet OOP 40bb: quando se usa Split Range?
?
Quando queremos dividir uma grande parte do range.
(Regra 5)

Split Range (c-bet OOP 40bb): como entram os top pairs e os second pairs no bet?
?
Metade dos top pairs e metade dos second pairs, usando as mãos com os naipes do board.
(Regra 5)

Split Range (c-bet OOP 40bb): quais draws têm preferência no bet, e quais backdoors entram?
?
Draws: 2 pontas sem naipe do board e brocas com naipe do board.
Backdoors: BDFD e BDST.
(Regra 5)

C-bet OOP 40bb: quando se usa Split 25%?
?
Quando queremos uma frequência menor de aposta.
(Regra 6)

Split 25% (c-bet OOP 40bb): quais top pairs entram no bet? E em board rainbow?
?
Parte dos off com naipe do flush draw e parte dos suited com BDFD.
Em board rainbow: usar mãos sem naipe do board.
(Regra 6)

Split 25% (c-bet OOP 40bb): quais draws têm preferência no bet?
?
2 pontas com naipe do board e brocas com naipe do board.
(Regra 6)

C-bet OOP 40bb: top pair aposta sempre? Quais critérios decidem?
?
Não, top pair pode apostar ou checar.
Critérios: kicker, naipe, textura e necessidade de proteção.
(Regra 7)

C-bet OOP 40bb: quando um second pair vai para o bet e quando vai para o check?
?
Bet: quando tem melhor kicker, melhor interação ou valor/proteção.
Check: quando quer realizar equity e não quer enfrentar agressão.
(Regra 8)

C-bet OOP 40bb: trincas e mãos muito fortes podem checar? Com que objetivo?
?
Sim. Para proteger o range de check e evitar que o adversário ataque todo check.
(Regra 9)

C-bet OOP 40bb: de que depende a decisão de apostar ou não um draw?
?
Equity, capacidade de continuar, blockers e realização de equity. Nem todo draw aposta.
(Regra 10)

C-bet OOP 40bb: em board low conectado, size maior ou menor? Por quê?
?
Size menor, porque o board muda mais.
(Regra 11)

C-bet OOP 40bb: em board low desconectado, size maior ou menor? Por quê?
?
Size maior, porque o valor precisa de proteção.
(Regra 11)

SRP 40bb, CO vs BTN, Hero OOP em flop monotone: qual a estratégia de c-bet?
?
Check Range.
(Regra 12)

C-bet OOP 40bb: além da quantidade de apostas, o que o size escolhido representa?
?
A construção do range, a textura do board e o objetivo da aposta.
(Regra 13)

C-bet OOP 40bb: quais as funções do range de bet e do range de check?
?
Bet: extrai valor, protege mãos e pressiona.
Check: possui força, realiza equity e protege contra exploração.
(seção: Regra principal do módulo)

SRP 40bb OOP, board K♦4♥2♥. Como dividir os Nut Flush Draws: devem ser tratados como um grupo único?
?
Não. A divisão é pela força do Ax: Ax forte = XC, Ax médio = BET, Ax baixo = XR.
(seção: Correção do Instrutor — Divisão dos Nut Flush Draws)

SRP 40bb OOP, K♦4♥2♥, NFD forte (AK, AQ, AJ, AT de copas): qual linha e por quê?
?
Check Call. Têm valor de showdown mais robusto, hot cards e bloqueiam boa parte dos flush draws do vilão.
(seção: Correção do Instrutor — NFD Fortes)

SRP 40bb OOP, K♦4♥2♥, Hero com A♥7♥ (NFD médio, A9-A6): qual linha e por quê?
?
Bet. Protege contra outs de Ax no turn, gera fold equity no flop e no turn e aproveita a vulnerabilidade do range adversário.
(seção: Correção do Instrutor — NFD Médios)

SRP 40bb OOP, K♦4♥2♥, NFD baixo (A5-A2 de copas): qual linha e por quê?
?
Check Raise. Têm menor valor de showdown, mantêm mais flush draws no range adversário e conseguem coolerá-los quando acertam; funcionam melhor como agressão.
(seção: Correção do Instrutor — NFD Baixos)

C-bet OOP 40bb: qual a alternativa à divisão dos NFDs por grupos, e por que a divisão é preferida?
?
Alternativa: randomizar todos os NFDs com frequência média de ~33%.
A divisão é mais prática: cada grupo cumpre uma função, facilita a execução humana e mantém a frequência próxima do solver.
(seção: Observação — Divisão dos Nut Flush Draws)
