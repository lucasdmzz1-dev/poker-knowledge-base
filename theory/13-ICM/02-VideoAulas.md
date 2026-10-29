---
tags:
  - modulo/13-icm
  - tema/icm
  - street/preflop
  - tema/reta-final
  - tipo/videoaulas
---

# VideoAulas — ICM e Risk Premium

## Módulo 13 — ICM e Risk Premium

---

# Contexto

Formato:
Aula em duas partes: teoria (cerca de 1h18) e prática (de 1h23 até o fim, com exemplos montados no solver).

Fase:
Do início do torneio até a mesa final, com foco de 30% do field left em diante.

Fonte:

- Aula (vídeo e transcrição).
- Anotações do instrutor (Bloco de Notas) e telas do GTO Wizard em modo ICM.

---

# Objetivo da Aula

Dar uma base para entender o ICM pela sua unidade de medida, o risk premium (RP), e mostrar como ele muda as decisões de open, defesa e blind war conforme o stack, a fase e o pagamento do torneio.

---

# A Ideia Central

O ICM não é um assunto à parte do jogo. É o custo de cair do torneio, e ele aparece como um extra de equity que você precisa ter para uma jogada valer a pena. O instrutor compara o RP a uma unidade de medida, como o grama para o peso.

Dois pontos mudam a forma de pensar:

- **O RP vale em todas as streets.** Por isso os ranges de pré-flop ficam tão curtos quando o RP sobe: pagar o extra no flop, no turn e no river torna quase impossível realizar equity.
- **O RP é de um jogador contra outro.** O mesmo spot tem RPs diferentes para cada par de jogadores, porque depende de quem cobre quem.

---

# Os Três Fatores

## Stacks

Além do próprio stack, o instrutor manda olhar os que mais podem entrar na mão, na ordem BB, BTN e SB. Quem te cobre pode te eliminar, e você dificilmente o elimina. O stack também se mede em relação à mesa e à média, não só em bb.

## Fase do torneio

O ICM pesa a partir de cerca de 30% do field left e cresce até a bolha, onde atinge o pico. Depois da bolha o RP cai bastante, até em torno de 5% do field left, e depois sobe de novo até a mesa final, com pequenas quedas a cada pay jump. O instrutor compara com um eletrocardiograma. Depois da bolha é o momento de acumular fichas, e quem fica apertado demais nessa hora superestima o ICM.

## Estrutura de pagamento

Vanilla tem RP maior que PKO. Estruturas com muita diferença entre o 9º e o 1º (nas anotações: o 1º pagando 20 vezes o 9º) têm ICM menor, e quando o 1º paga só 10 vezes o 9º o ICM é bem maior. O tamanho dos pay jumps também conta: num evento de pay jumps grandes o RP sobe, e num torneio de buy-in baixo, com saltos pequenos, quase não pesa. O RP só fica negativo quando existe recompensa por eliminação, como o bounty.

---

# A Escala de Referência

O instrutor usa três níveis de RP para ter uma noção rápida:

- **5%:** o padrão. Quem treina em 10% field left já considera algo próximo.
- **10%:** risco e recompensa desfavoráveis. Exige dominar o adversário.
- **15%:** muito ruim. Você pode cair e beneficiar um short stack. Exige esmagar o adversário.

---

# Os Três Tipos de Stack

## Big stack: o predador

Tem o menor RP dos três, é difícil de eliminar e consegue pressionar os outros. Pressão não é só 3bet e shove: é jogar mais mãos, pagar em posição, dar check-raise e liderar. Os erros comuns são o confronto desnecessário com outro big stack, subestimar o próprio RP e não explorar a vantagem. O instrutor acrescenta um quarto: ser o capitão da mesa quando não há pressão a favor, porque nesse caso os outros apenas jogam mais mãos contra você.

## Mid stack: a vítima

Tem o maior RP dos três. Sofre pressão dupla, do big stack e do short stack, e vive o dilema entre sobreviver e acumular. Joga menos mãos, mas com agressividade (3bet e shove), porque pagar torna difícil realizar equity. O erro comum são os calls marginais contra big stacks.

## Short stack: o desesperado

Tem RP moderado, entre o big e o mid. Precisa dobrar rápido para sobreviver, com uma estratégia limitada de push ou fold. Isso não autoriza jogar com EV negativo. E o quão short você é depende da distribuição da mesa, e não só do número de bb.

---

# A Aplicação Prática

O instrutor fecha a teoria com quatro passos:

1. Identifique o seu tipo de stack.
2. Avalie a fase do torneio.
3. Ajuste as decisões pelo risk premium.
4. Explore ou proteja-se conforme a sua posição na hierarquia.

---

# A Parte Prática no Solver

Os exemplos usam um torneio de 1k jogadores que paga 150. Com 250 restantes são 25% do field left, e com 160 são 16%, perto da bolha. O instrutor compara o mesmo spot nas duas fases e mostra o painel Bubble factor do GTO Wizard, que dá o RP de cada posição contra cada outra.

## LJ cobrindo todos

O LJ abre 26,4% com 25% left e 40,1% com 16% left. O RP dele contra os outros fica baixo, e o dos outros contra ele fica entre 13% e 16,5%. Quem cobre todos expande, e a expansão vem de suited baixos e gappers e dos offsuit na linha do 9 e do 8.

## HJ coberto por todos

O HJ abre 24,4% com 25% left e cerca de 14,8% com 16% left. Esse é o pior ponto para abrir: o instrutor cita que o BTN, que cobre o HJ, passa a jogar mais, e que o BTN com stack menor, coberto pelo BB, joga menos.

## Quem é coberto e enfrenta um open

O BTN com 26bb contra o open do LJ paga só 4,4% com 25% left, e com 16% left o call some: ele joga 3bet, shove ou fold. O instrutor mostra que quem cobre (o BTN de 125bb contra o HJ) joga mais VPIP, de 20,8% para 23,5%, e que o aumento vem do call.

## BB contra o big stack

Contra o CO de 64bb, o BB com 21bb defende 62,5% com 25% left e 39,4% com 16% left, com mais shove e quase sem raise pequeno. O CO, em contrapartida, abre de 35,8% para 48,5%.

## CO coberto com 34bb

O CO é coberto por todos que podem entrar. Com 25% left o range é muito curto, e com 16% left o call some e o range vira 3bet ou fold.

## Blind war

Com o SB cobrindo o BB, o limp quase desaparece com 16% left (de 44,4% para 2,1%) e o range vira raise e shove. Com o SB coberto pelo BB, o raise some (de 12,7% para 0,1%), o fold dobra e o range protege o call. Com um SB curto (10 a 14bb) contra um BB que o cobre, não existe limp: é shove, raise ou fold.

---

# Fechamento da Aula

O instrutor volta à ideia de que a teoria é a base, e que é preciso entendê-la antes de desviar contra um adversário específico. Ele avisa que há ainda assuntos para outras aulas, como o PKO e o short stack na bolha.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/13-ICM/README|theory/13-ICM]]

**Mesma pasta:** [[theory/13-ICM/01-Guideline|01-Guideline]] · [[theory/13-ICM/03-Solver|03-Solver]] · [[theory/13-ICM/04-Exercicios|04-Exercicios]] · [[theory/13-ICM/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/13-ICM/06-Pendencias|06-Pendencias]] · [[theory/13-ICM/07-Changelog|07-Changelog]] · [[theory/13-ICM/08-Referencias|08-Referencias]] · [[theory/13-ICM/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
