# 3BET POT — SOLVER


# OBJETIVO

Consolidar as análises realizadas no solver para validar:

- Frequências;
- Escolha de size;
- Mistura entre bet e check;
- Composição dos ranges;
- Diferenças entre guideline e estratégia ótima.


---

# METODOLOGIA DE ANÁLISE


Todo spot analisado deve seguir a ordem:


1. Posição

- OOP
- IP


2. Stack

- Short Stack
- Deep Stack


3. Board


4. Estratégia encontrada


5. Frequência


6. Composição das mãos


7. Conclusão estratégica


---

# GUIDELINE X SOLVER


## GUIDELINE


Representa:

- Estratégia simplificada;
- Árvore prática;
- Regras para tomada de decisão.


O guideline define:

- Família do board;
- Size principal;
- Estrutura inicial do range.


---

## SOLVER


Representa:

- Frequências reais;
- Mistura de estratégias;
- Ajustes específicos;
- Exceções.


O solver não substitui o guideline.

Ele complementa a compreensão da estratégia.


---

# ORGANIZAÇÃO DOS ESTUDOS


# 01 — 3BET POT OOP


## SHORT STACK


### FLOP


Registrar:

- Board;
- Estratégia principal;
- Frequência de bet;
- Frequência de check;
- Size utilizado;
- Composição dos ranges.


### TURN


Registrar:

- Carta do turn;
- Mudança de dinâmica;
- Size;
- Continuação ou abandono.


---

## DEEP STACK


### FLOP


Registrar:

- Board;
- Size escolhido;
- Frequência;
- Construção do range.


### TURN


Registrar:

- Evolução da estratégia;
- Mudanças de frequência;
- Linhas futuras.


---

# 02 — 3BET POT IP


## SHORT STACK


Registrar:


- Boards analisados;
- Frequência de B25;
- Frequência de B40;
- Frequência de B70;
- Composição dos splits.


---

## DEEP STACK


Registrar:


- Boards analisados;
- Estratégias de size;
- Frequências;
- Diferenças em relação ao Short Stack.


---

# PADRÃO DE REGISTRO DE SPOT


## SPOT


Posição:

Stack:

Board:

Ação pré-flop:


---

## SOLVER


Estratégias disponíveis:


Frequências:


Size:


Hands principais:


---

## ANÁLISE


Por que o solver escolhe essa estratégia?


Quais mãos entram?


Quais mãos ficam fora?


Existe diferença para o guideline?


---

## CONCLUSÃO


Regra consolidada:


Erro evitado:


Aplicação futura:


---

# PONTOS IMPORTANTES


## Nunca analisar solver sem contexto


Sempre identificar:

- posição;
- stack;
- board;
- street.


---

## Nunca transportar frequência de uma árvore para outra


Exemplo:


3BET POT OOP

não define

3BET POT IP


SHORT STACK

não define

DEEP STACK


---

# BANCO DE PADRÕES


Adicionar conforme estudo:


## Boards secos


Spots:


## Boards conectados


Spots:


## Boards com sequência


Spots:


## Boards low


Spots:


## Turns


Blank:

High Card:

Flush:

Conecta:

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/08-3BET-POT/README|README]] · [[theory/08-3BET-POT/01-Guideline|01-Guideline]]

<!-- graphify-links:end -->
