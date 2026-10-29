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
  - tipo/regras
---

# 05-REGRAS-CONSOLIDADAS.md

# 3BET POT — REGRAS CONSOLIDADAS


# OBJETIVO

Registrar todo o conhecimento final extraído do módulo 3BET POT.

Este arquivo representa as conclusões estratégicas consolidadas após análise de:

- Guideline;
- Videoaulas;
- Transcrições;
- Solver;
- Exercícios;
- Correções.


---

# PRINCÍPIO FUNDAMENTAL DO MÓDULO


A primeira decisão em qualquer spot de 3BET POT é identificar:


1. Posição

2. Stack

3. Board

4. Size

5. Split


Nunca analisar uma situação sem essa classificação.


---

# SEPARAÇÃO DAS ESTRATÉGIAS


## 3BET POT OOP


Possui uma estratégia própria baseada em:

- Menor realização de equity;
- Necessidade de proteção;
- Construção de ranges de aposta e defesa.


---

## 3BET POT IP


Possui uma estratégia própria baseada em:

- Posição;
- Melhor realização de equity;
- Maior controle de pote.


---

# REGRA ABSOLUTA




Nunca transportar uma linha de Short Stack para Deep Stack.


---

# FLOP — OOP SHORT STACK


## BOARD SECO

Estratégia:

B25


---

## BOARD CONECTADO

Estratégia:

B40


Split:


Valor:

- TP+


Blefe:

- FD
- 2 pontas


Check Call:

- Trincas;
- Qualquer par;
- Qualquer draw;
- Valor de showdown.


Check Raise:

- Overpairs;
- TPTK;
- Combo Draw.



---

## BOARD COM SEQUÊNCIA

Estratégia:

ALL-IN


Split:


Valor:

- Primeiros overpairs ao board;
- TP.


Blefe:

- FD;
- 2 pontas.


Check Call:

- Trincas;
- Sequências;
- Par;
- Brocas + redraw.


Check Raise:

- Overpairs;
- Combo Draw.



---

# FLOP — OOP DEEP STACK


## BOARD SECO

Estratégia:

B25-B40


---

## BOARD Tx / Jx / 98xs

Estratégia:

B70


Split:


Valor:

- Primeiros overpairs ao board;
- TP.


Blefe:

- FD;
- 2 pontas;
- Brocas;
- BDFD + BDST.


Check Call:

- Trincas;
- Qualquer par;
- Qualquer draw;
- Valor de showdown.


Check Raise:

- Overpairs;
- Combo Draw.



---

## BOARD COM SEQUÊNCIA

Estratégia:

B40


Split:


Valor:

- Todos os overpairs;
- Bottom set;
- Melhores TP;
- TP que conectem com board.


Blefe:

- FD;
- 2 pontas;
- Brocas;
- BDFD + BDST.


Check Call:

- Top set;
- Sequência com FD;
- Qualquer par;
- Draws diretos;
- SD value + FD;
- SD value + BDFD;
- Combo Draw.


Check Raise:

- Sequência;
- Trincas restantes;
- Combo Draw.



---

# TURN — 3BET POT


A estrutura de TURN é geral para o módulo.


## BLANK

B100 (GEO)


## HIGH CARD

B40


## FLUSH

B40


## CONECTA

B70



---

# CONSTRUÇÃO DE BLEFES


Blefe não deve ser construído apenas com blockers.


Priorizar:


- Flush Draw;
- Backdoor Flush Draw;
- Backdoor Straight Draw;
- Draws diretos;
- Mãos com potencial de evolução.


Evitar:


- Mãos sem equidade;
- Blockers sem futuro.



---

# GUIDELINE X SOLVER


## GUIDELINE


Responsável por:

- Estratégia base;
- Simplificação;
- Tomada de decisão prática.


---

## SOLVER


Responsável por:

- Frequências;
- Misturas;
- Ajustes;
- Exceções.


O solver complementa o guideline.


---

# ERROS PRINCIPAIS


## Misturar IP e OOP


Correção:

Sempre identificar a posição antes da análise.



---

## Misturar Short e Deep


Correção:

Sempre identificar o SPR antes da estratégia.



---

## Transformar qualquer blocker em blefe


Correção:

Avaliar equidade e potencial futuro.



---

# CONCLUSÃO FINAL


A análise de 3BET POT deve seguir:


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


A estratégia correta nasce da árvore correta.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/08-3BET-POT/README|theory/08-3BET-POT]]

**Mesma pasta:** [[theory/08-3BET-POT/01-Guideline|01-Guideline]] · [[theory/08-3BET-POT/02-VideoAulas|02-VideoAulas]] · [[theory/08-3BET-POT/03-Solver|03-Solver]] · [[theory/08-3BET-POT/04-Exercicios|04-Exercicios]] · [[theory/08-3BET-POT/06-Pendencias|06-Pendencias]] · [[theory/08-3BET-POT/07-Changelog|07-Changelog]] · [[theory/08-3BET-POT/08-Referencias|08-Referencias]] · [[theory/08-3BET-POT/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
