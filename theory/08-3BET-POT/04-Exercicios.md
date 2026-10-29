---
tags:
  - modulo/08-3bet-pot
  - spot/3bp
  - posicao/ip
  - posicao/oop
  - street/flop
  - street/turn
  - stack/short
  - stack/deep
  - tipo/exercicios
---

# 04-EXERCICIOS.md

# 3BET POT — EXERCÍCIOS


# OBJETIVO

Criar uma base prática de exercícios para dominar a tomada de decisão em potes 3betados.

Os exercícios devem treinar:

- Identificação da posição;
- Identificação do stack;
- Classificação do board;
- Escolha do size;
- Construção do range;
- Aplicação dos splits;
- Comparação entre guideline e solver.


---

# REGRAS DOS EXERCÍCIOS


Antes de responder qualquer spot, seguir a ordem:


1. Identificar a posição

- OOP
- IP


2. Identificar o stack

- Short Stack
- Deep Stack


3. Classificar o board


4. Definir a estratégia


5. Definir o size


6. Definir o split


7. Justificar a escolha


---

# SEPARAÇÃO OBRIGATÓRIA


Nunca misturar:


3BET POT OOP

≠

3BET POT IP


SHORT STACK

≠

DEEP STACK


Cada exercício deve pertencer a uma árvore específica.


---

# MODELO DE EXERCÍCIO


## SPOT


Posição:


Stack:


Street:


Board:


Ação pré-flop:



---

## PERGUNTA


Qual a estratégia correta?


Qual size utilizar?


Existe split?


Como construir o range?


---

## RESPOSTA


Classificação do board:


Estratégia:


Size:


Split:


Mãos principais:


---

## CORREÇÃO


Guideline:


Solver:


Diferença encontrada:


---

## APRENDIZADO


Regra consolidada:


Erro evitado:


Aplicação futura:



---


# 01 — 3BET POT OOP SHORT STACK


# FLOP


## BOARD SECO


Exercícios:


- Identificar quando utilizar B25.
- Avaliar quando existe estratégia de range bet.
- Separar mãos que apostam e mãos que realizam via check.



---

## BOARD CONECTADO


Exercícios:


- Identificar quando utilizar B40.
- Separar valor, blefe, check call e check raise.


Pontos de análise:


Valor:

- TP+


Blefe:

- FD
- 2 pontas


Check Call:

- Trincas
- Qualquer par
- Qualquer draw
- Valor de showdown


Check Raise:

- Overpairs
- TPTK
- Combo Draw



---

## BOARD COM SEQUÊNCIA


Exercícios:


- Identificar quando utilizar All-in.
- Trabalhar o split de stack.


Pontos de análise:


Valor:

- Primeiros overpairs ao board
- TP


Blefe:

- FD
- 2 pontas


Check Call:

- Trincas
- Sequências
- Par
- Brocas + redraw


Check Raise:

- Overpairs
- Combo Draw



---


# TURN — OOP SHORT STACK


Exercícios:


## BLANK

Estratégia:

B100 (GEO)


## HIGH CARD

Estratégia:

B40


## FLUSH

Estratégia:

B40


## CONECTA

Estratégia:

B70



---


# 02 — 3BET POT OOP DEEP STACK


# FLOP


## BOARD SECO


Exercícios:


- Avaliar escolha entre B25 e B40.
- Identificar necessidade de proteção e construção.


---

## BOARD Tx / Jx / 98xs


Exercícios:


- Identificar spots de B70.
- Trabalhar construção de range.


Split:


Valor:

- Primeiros overpairs ao board
- TP


Blefe:

- FD
- 2 pontas
- Brocas
- BDFD + BDST


Check Call:

- Trincas
- Qualquer par
- Qualquer draw
- Valor de showdown


Check Raise:

- Overpairs
- Combo Draw



---

## BOARD COM SEQUÊNCIA


Exercícios:


- Identificar diferença para Short Stack.
- Trabalhar B40.


Split:


Valor:

- Todos os overpairs
- Bottom set
- Melhores TP
- TP que conectem com board


Blefe:

- FD
- 2 pontas
- Brocas
- BDFD + BDST


Check Call:

- Top set
- Sequência com FD
- Qualquer par
- Draws diretos
- SD value + FD
- SD value + BDFD
- Combo Draw


Check Raise:

- Sequência
- Trincas restantes
- Combo Draw



---


# TURN — OOP DEEP STACK


Exercícios:


## BLANK

B100 (GEO)


## HIGH CARD

B40


## FLUSH

B40


## CONECTA

B70



---


# 03 — 3BET POT IP SHORT STACK


# FLOP


## B25


Exercícios:


- Identificar spots de range bet.
- Avaliar vantagem de range.


---

## B40


Exercícios:


- Identificar quando existe split.
- Separar mãos que apostam e mãos que controlam.


---

## B70


Exercícios:


- Identificar boards específicos.
- Avaliar necessidade de size maior.


Principalmente:

- Boards low;
- Boards dinâmicos.



---


# TURN — IP SHORT STACK


Exercícios:


Aplicar a estrutura geral de TURN:


Blank:

B100 (GEO)


High Card:

B40


Flush:

B40


Conecta:

B70



---


# 04 — 3BET POT IP DEEP STACK


# FLOP


Exercícios:


- Avaliar diferenças para Short Stack.
- Trabalhar construção de range com SPR maior.
- Identificar importância de cobertura de board.


---


# TURN — IP DEEP STACK


Aplicar:


Blank:

B100 (GEO)


High Card:

B40


Flush:

B40


Conecta:

B70



---


# BANCO DE CORREÇÕES


Registrar:


## Spot:


## Erro:


## Motivo do erro:


## Correção:


## Nova regra criada:



---


# EXERCÍCIOS CONSOLIDADOS


Os exercícios que gerarem aprendizados importantes devem ser transferidos para:


05-Regras-Consolidadas.md


e:


09-Decisoes.md



# OBJETIVO FINAL


Ser capaz de analisar qualquer spot de 3BET POT seguindo:


Posição

↓

Stack

↓

Board

↓

Size

↓

Split

↓

Frequência Solver

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/08-3BET-POT/README|theory/08-3BET-POT]]

**Mesma pasta:** [[theory/08-3BET-POT/01-Guideline|01-Guideline]] · [[theory/08-3BET-POT/02-VideoAulas|02-VideoAulas]] · [[theory/08-3BET-POT/03-Solver|03-Solver]] · [[theory/08-3BET-POT/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/08-3BET-POT/06-Pendencias|06-Pendencias]] · [[theory/08-3BET-POT/07-Changelog|07-Changelog]] · [[theory/08-3BET-POT/08-Referencias|08-Referencias]] · [[theory/08-3BET-POT/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
