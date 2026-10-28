# Pendências – Multiway Pot

> Módulo 10 — Poker Knowledge Base

---

# Objetivo

Registrar pontos que precisam de complemento futuro.

---

# 1. Divisão fina de combos

O instrutor sinalizou explicitamente que essa primeira aula trouxe apenas a direção geral por categoria de mão. Falta:

- Divisão exata de quais combos específicos entram em cada bucket (ex: quais Second Pairs exatos compõem o Lead do BB).
- Refinamento por naipe/blocker dentro de cada categoria.

---

# 2. Efetivo de stack

O estudo cobriu majoritariamente 40bb (com alguma variação entre 30-60bb). Faltam:

- Resoluções a 20bb.
- Resoluções a 15bb e 10bb (SPR muito baixo).

---

# 3. Solver detalhado

Adicionar:

- Frequências exatas por textura de board (o GTOWizard 3-way é recente e ainda está sendo explorado).
- Tabela de frequência de C-Bet/Bet-vs-Missed por categoria de board (seco, carregado, monotone, pareado).

---

# 4. Situações ainda não cobertas

- River (o módulo cobriu apenas Flop e Turn).
- Multiway com dois jogadores em posição contra o Hero (só foi coberto o caso com um IP e um BB).
- Cenários de ICM — a lógica base deve se manter, mas ranges pré-flop mais curtos devem reduzir frequências de aposta. Ainda não quantificado.
- Lead do Small Blind em boards low conectados — identificado mas não implementado.

---

# 5. Exercícios

Adicionar exercícios completos com:

- Histórico da mão.
- Board.
- Ranges dos três jogadores envolvidos.
- Decisão tomada e correção do instrutor.
- Regra extraída.

---

# 6. Correções futuras

Quando o instrutor trouxer a divisão fina de combos (mencionada como próxima etapa do estudo), atualizar:

- Guideline.
- Regras Consolidadas.
- Changelog.

---

# 7. Ordem de prioridade das fontes

Conflito registrado na leitura completa da teoria (MAIN CHAT TEORIA, 28/10/2026).

O `08-Referencias.md` coloca o solver (GTOWizard 3-way) acima das correções do instrutor: solver, correções do instrutor, MDA do field, guideline, exercícios. A ordem geral do `theory/CLAUDE.md` é: correção do instrutor, solver, videoaula, guideline, exercícios. **Resolvida (28/10/2026):** o autor do KB decidiu seguir a ordem geral, com o autor do KB em 1º. Ver `08-Referencias.md` e `09-Decisoes.md`.
