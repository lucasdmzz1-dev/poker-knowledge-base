# Solver – C-Bet IP + Second Barrel

> Módulo de estudo Poker Knowledge Base

---

# Objetivo

Registrar os padrões estratégicos encontrados nas soluções de Solver relacionados à construção da C-Bet IP e continuação no Turn.

Este documento não tem como objetivo explicar a teoria.

A teoria pertence ao:

- Guideline.
- Videoaulas.

Aqui ficam:

- Padrões.
- Frequências.
- Simplificações.
- Tendências de solução.

---

# Estrutura Geral do Solver

A estratégia encontrada pode ser dividida em duas etapas:

1. Construção do range de C-Bet no Flop.
2. Evolução do range após receber call e chegar ao Turn.

---

# C-Bet IP

## Boards A High

Padrão:

- Alta frequência de C-Bet.
- Preferência por sizing pequeno.

Sizing principal:

B25.

---

## Boards BBX

O sizing depende da posição inicial.

### EP-HJ

Utilização:

B40.

### CO-BU

Utilização:

B25.

---

# Boards Conectados

## EP-HJ

Padrão:

B40.

Motivo estratégico:

A textura aumenta a necessidade de proteger o range e utilizar mãos com valor e equity.

---

## CO-BU

Padrão:

B25.

Motivo:

A posição mais agressiva permite maior frequência utilizando sizing menor.

---

# Boards Low

Padrão principal:

B70.

Estratégia:

Split.

---

# Construção do Split Low

O solver separa:

- Valor.
- Bluff.
- Check.

---

# Valor

## Board Low Seco

Continuam apostando:

- Todos os Top Pairs ou melhor.
- Second Pair com Top Kicker.

---

## Board Low Carregado

O range fica mais seletivo.

Continuam:

- Melhores Top Pairs.
- Top Pairs conectados ao board.
- Second Pair conectados ao board.

---

# Bluff

Principais candidatos:

- Flush Draws.
- Backdoor Flush Draws.
- Draws com possibilidade de evolução.
- Mãos da borda do range.

---

# Check

Entram:

- Valor médio.
- Draws fracos.
- Mãos que realizam equity.

Exemplo:

Overcard + Backdoor Flush Draw.

---

# Short Stack

O solver apresenta ajustes quando o stack é reduzido.

---

## Under 15bbs

Board Low:

Sizing:

B40.

---

## Top Pair

Apostar:

Todos os Top Pairs.

---

## Mãos Muito Fortes

Slowplay:

- Trincas.
- Sequências.

---

## Draws

Evitar apostar mãos que não possuem interesse em tomar Bet/Fold.

Exemplo:

- Duas pontas fracas.
- Broca com Backdoor Flush Draw.

---

# Second Barrel

A estratégia do Turn é dividida pela textura.

---

# Turn Blank

Padrão:

Estratégia polar.

Sizing:

Geométrico.

---

# Objetivo

Permitir:

Turn Bet + River Bet

atingirem tamanho suficiente para stackear.

---

# Turn Conectado

Padrão:

Estratégia mais linear.

Sizing:

B70.

---

# Característica

Adicionar:

- Mais mãos com equity.
- Mais thin value.
- Mais mãos conectadas.

---

# Flush High Card

Padrão:

B40.

---

# Característica

Aumentar frequência de thin value.

Permitir apostar:

- Novos Top Pairs.
- Mãos com valor marginal.

---

# Flush Low Card

Padrão:

B70.

---

# Característica

Manter pressão com range forte.

---

# Simplificações Extraídas

## Flop

A textura define:

- Frequência.
- Sizing.
- Construção do range.

---

## Turn

A carta determina:

- Polarização.
- Linearidade.
- Sizing.

---

# Tabela Solver

| Situação | Estratégia |
|---|---|
| A High | B25 |
| BBX EP-HJ | B40 |
| BBX CO-BU | B25 |
| Conectado EP-HJ | B40 |
| Conectado CO-BU | B25 |
| Low | B70 Split |
| Turn Blank | Geométrico |
| Turn Conectado | B70 |
| Flush High Card | B40 |
| Flush Low Card | B70 |

---

# Observação

Qualquer nova solução de Solver deve ser adicionada aqui antes de alterar as Regras Consolidadas.

Caso exista diferença entre Solver e correção do instrutor, o conflito deve ser registrado.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/03-Second-Barrel-IP/01-Guideline|theory/03-Second-Barrel-IP]]

**Relacionadas no mesmo módulo:** [[theory/03-Second-Barrel-IP/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/03-Second-Barrel-IP/02-VideoAulas|02-VideoAulas]] · [[theory/03-Second-Barrel-IP/04-Exercicios|04-Exercicios]] · [[theory/03-Second-Barrel-IP/08-Referencias|08-Referencias]]

<!-- graphify-links:end -->
