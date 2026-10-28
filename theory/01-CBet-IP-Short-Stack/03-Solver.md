# Solver – C-Bet IP Short Stack

> Este documento registra apenas as conclusões obtidas através do Solver utilizadas na construção da estratégia.

---

# Filosofia

O Solver não busca maximizar apenas a frequência de C-Bet.

O objetivo é maximizar o EV do range como um todo.

Por isso, diversas mãos são deslocadas entre Bet e Check para melhorar a realização de equidade e proteger ambos os ranges.

---

# Frequências

As frequências do Solver servem como referência.

Não devem ser reproduzidas combo a combo durante o jogo.

Na prática, os combos são agrupados em regras simples de execução.

---

# Sizings

O módulo utiliza apenas dois sizings.

## B25

Sizing padrão.

Utilizado na maior parte dos boards.

---

## B40

Utilizado quando o board favorece muito nosso range de valor.

Objetivos:

- Extrair mais valor.
- Diminuir o SPR.
- Facilitar jogar por stacks posteriormente.

O ganho de EV entre B25 e B40 costuma ser pequeno, porém o B40 apresenta vantagens práticas na execução da estratégia. 

---

# Simplificação

O Solver trabalha diversas frequências mistas.

Na prática isso é inviável.

A estratégia adotada é:

- Agrupar mãos semelhantes.
- Criar regras fixas.
- Manter cobertura próxima da teoria.

Essa simplificação mantém praticamente todo o EV da estratégia original. :contentReference[oaicite:1]{index=1}

---

# Construção do Range

A distribuição entre Bet e Check não é feita por frequência individual.

Ela é feita por grupos de mãos.

Exemplos:

- Parte média → Check.
- Draws fortes → Bet.
- Draws médios → Check.
- Parte off adequada → Bet.

---

# Realização de Equidade

O Solver prioriza Check quando:

- a mão possui bom valor de showdown;
- deseja realizar equidade;
- não suporta jogar Bet/Call.

Por outro lado, mãos capazes de continuar contra agressão preferem apostar. 

---

# SPR

O baixo SPR do jogo Short Stack influencia diretamente a estratégia.

Por isso:

- não utilizamos sizings muito grandes;
- priorizamos linhas que facilitem jogar por stacks posteriormente;
- valorizamos a realização de equidade.

---

# Objetivo da Simplificação

Não copiar o Solver.

E sim construir uma estratégia:

- simples;
- consistente;
- fácil de executar;
- com mínima perda de EV.

Essa é a filosofia utilizada durante todo o módulo.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/01-CBet-IP-Short-Stack/README|theory/01-CBet-IP-Short-Stack]]

**Relacionadas no mesmo módulo:** [[theory/01-CBet-IP-Short-Stack/01-Guideline|01-Guideline]] · [[theory/01-CBet-IP-Short-Stack/02-VideoAulas|02-VideoAulas]]

**Outros módulos:**

- [[docs/00-Architecture/KB-003-Module-Template|00-Architecture/KB-003-Module-Template]]
- [[theory/02-CBet-IP-40bb/03-Solver|02-CBet-IP-40bb · 03-Solver]]

<!-- graphify-links:end -->
