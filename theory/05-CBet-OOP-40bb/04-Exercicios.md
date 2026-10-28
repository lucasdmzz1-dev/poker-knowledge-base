# Exercícios — C-Bet OOP

## Módulo — SRP OOP C-Bet Flop

---

# Contexto

Stack:
40bb

Spot:
SRP

Posição:
OOP

---

# Objetivo dos Exercícios

Aplicar:

- Escolha de size.
- Escolha de split.
- Construção de bet.
- Construção de check.
- Seleção de mãos.

---

# Exercício 01 — Identificação de Estratégia

Pergunta:

Dado um board, devemos utilizar:

- Range.
- Split Range.
- Split 25%.
- Check Range.

---

# Regra extraída

Antes de escolher uma mão:

Identificar a estratégia geral do board.

---

# Exercício 02 — Top Pair

Pergunta:

Todo Top Pair aposta?

Resposta:

Não.

---

# Correção

Top Pairs são divididos conforme:

- Textura.
- Naipe.
- Necessidade de proteção.

---

# Exercício 03 — Second Pair

Pergunta:

Todo Second Pair fica no check?

Resposta:

Não.

---

# Correção

Second Pairs fortes podem entrar no bet.

Second Pairs médios protegem o check.

---

# Exercício 04 — Draws

Pergunta:

Todo draw aposta?

Resposta:

Não.

---

# Correção

A decisão depende de:

- Capacidade de continuar.
- Realização de equity.
- Blockers.

---

# Exercício 05 — Trincas

Pergunta:

Mão muito forte sempre aposta?

Resposta:

Não.

---

# Correção

Parte das mãos fortes permanece no check para proteger o range.

---

# Exercício 06 — Board Low

Pergunta:

Qual diferença entre Low conectado e Low desconectado?

---

# Correção

Low conectado:

- Mais interação.
- Size menor.

Low desconectado:

- Mais valor de proteção.
- Size maior.

---

# Exercício 07 — Escolha de Bluff

Pergunta:

Qual draw escolher para apostar?

---

# Correção

Preferir mãos com:

- Blockers.
- Backdoors.
- Melhor capacidade de pressionar.

---

# Conclusão

Os exercícios mostram que C-Bet OOP é uma construção de range, não uma decisão isolada de mão.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/05-CBet-OOP-40bb/README|README]] · [[theory/05-CBet-OOP-40bb/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/05-CBet-OOP-40bb/02-VideoAulas|02-VideoAulas]]

<!-- graphify-links:end -->
