# Exercícios – Third Barrel

> Módulo 04

---

# Objetivo

Registrar os exercícios realizados durante a aula prática de Third Barrel e Vs Third Barrel.

O foco dos exercícios é criar padrões de decisão para execução no jogo.

---

# Exercício 01 — Construção do Range no Turn e River

## Spot

Board com C-Bet Flop, call do vilão e decisão no Turn/River.

---

## Conceito trabalhado

Antes de decidir o River, devemos entender a construção realizada no Turn.

A pergunta principal:

"Minha mão pertence à parte Linear ou Polar do meu range?"

---

# Exercício 02 — Range Polar

## Conceito

Mãos que atacam o Turn de forma polarizada possuem como principal característica representar draws fortes.

---

## Regra

A parte Polar:

- Continua blefando quando completa draws.
- Abandona quando o River não completa os draws representados.

---

## Exemplo

Pares baixos utilizados como bluff no Turn.

Exemplo:

55, 66, 77.

Essas mãos podem atacar o Turn porque conseguem fazer mãos melhores foldarem.

Porém:

- Em Rivers que completam draws → continuam blefando.
- Em Rivers Blank → normalmente abandonam.

Motivo:

Sem completar o draw, essas mãos não representam valor suficiente.

---

# Exercício 03 — Range Linear

## Conceito

A parte Linear possui mãos com blockers importantes.

---

## Regra

A parte Linear:

- Continua atacando Turn.
- Continua blefando Rivers Blank.

---

## Motivo

Essas mãos possuem características que permitem pressionar o range de bluff catcher adversário.

---

# Exercício 04 — Blockers

## Conceito

O melhor bluff não é apenas aquele que bloqueia valor.

Também precisamos considerar:

Quais mãos queremos fazer foldar?

---

## Regra

Bons blefes:

- Bloqueiam mãos fortes.
- Desbloqueiam folds naturais.

---

## Erro comum

Utilizar uma mão que bloqueia justamente as mãos que queremos que o adversário abandone.

---

# Exercício 05 — Thin Value no River

## Conceito

O River exige cuidado com o range de valor.

Quando muitas cartas completam:

- O range adversário fica mais forte.
- O range de Value Bet precisa diminuir.

---

## Regra

Quanto mais conectado o board:

Mais seletivo deve ser o Value Bet.

---

# Exercício 06 — Escolha de Sizing

## Conceito

O sizing deve cumprir uma função.

---

## Bluff

Quando estamos blefando:

Queremos gerar Fold Equity.

Por isso:

- Sizings pequenos permitem muitos calls.
- Sizings maiores pressionam mais o range adversário.

---

## Value

Quando temos mãos fortes:

Queremos extrair o máximo possível.

---

# Exercício 07 — Defesa Contra Third Barrel

## Processo

A defesa segue uma ordem:

1. Identificar o sizing.
2. Calcular a frequência necessária de defesa.
3. Construir o range de Bluff Catchers.
4. Escolher mãos por blockers.

---

# Flop

Versus C-Bet:

Continuamos com todos os pares.

---

# Turn Blank

Continuamos com:

- Second Pair ou melhor.

---

# Turn Dinâmico

Quando o board conecta:

Precisamos de mais equidade.

Continuamos com:

- Top Pair.
- Pares com redraw.

---

# River

A defesa depende do preço.

---

## Versus B70

Continuamos:

- Todos os Top Pairs.

---

## Versus Pot+

Continuamos:

- Melhores Top Pairs.
- Top Pairs que desbloqueiam blefes.

---

# MDF

Tabela utilizada:

| Bet | MDF |
|---|---|
| 2x Pot | 34% |
| 1.5x | 40% |
| Pot | 50% |
| 75% | 57% |
| 66% | 60% |
| 50% | 67% |
| 33% | 75% |
| 25% | 80% |

---

# Conclusão dos Exercícios

O padrão construído pela aula:

## Para atacar

Perguntar:

- Minha mão é Linear ou Polar?
- Completei o draw?
- Tenho blockers?
- Estou desbloqueando folds?

---

## Para defender

Perguntar:

- Qual o sizing?
- Qual o preço?
- Minha mão bloqueia valor?
- Minha mão desbloqueia blefes?

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/04-Third-Barrel-e-vs-Third-Barrel/README|README]] · [[theory/04-Third-Barrel-e-vs-Third-Barrel/01-Guideline|01-Guideline]] · [[theory/04-Third-Barrel-e-vs-Third-Barrel/02-VideoAulas|02-VideoAulas]] · [[theory/04-Third-Barrel-e-vs-Third-Barrel/05-Regras-Consolidadas|05-Regras-Consolidadas]]

<!-- graphify-links:end -->
