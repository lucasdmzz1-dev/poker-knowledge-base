# Teoria — Poker Knowledge Base

**Atualizado em:** 28/10/2026

Teoria de torneio (ChipEV, foco em 20-40bb, formato Bounty/KO), um módulo por tema. As regras de trabalho estão em `theory/CLAUDE.md`, e a divisão entre os chats PRÉ e PÓS está em `theory/MAPA-PRE-POS.md`.

---

# Módulos

| Mód. | Pasta | Lado | Status |
|---|---|---|---|
| 01 | `01-CBet-IP-Short-Stack/` (C-Bet IP 20bb) | PÓS | Conteúdo ok; arquivos precisam de limpeza (duplicatas e restos `oaicite`) |
| 02 | `02-CBet-IP-40bb/` | PÓS | Tabelas por posição; faltam exercícios e decisões |
| 03 | `03-Second-Barrel-IP/` | PÓS | Completo; `README.md` vazio |
| 04 | `04-Third-Barrel-e-vs-Third-Barrel/` | PÓS | Completo (MDF); restos `oaicite`; ligar ao 11 |
| 05 | `05-CBet-OOP-40bb/` (inclui Second Barrel OOP) | PÓS | Flop completo; turn só com valor |
| 06 | `06-XR-SHORT/` | PÓS | Completo (usa "Lei NN") |
| 07 | `07-XR-DEEP/` | PÓS | Completo; pendências vazias |
| 08 | `08-3BET-POT/` | PÓS (ponte) | OOP ok; parte IP quase vazia |
| 09 | `09-BET-CHECK-BET/` | PÓS | Guideline e 6 exercícios; falta solver |
| 10 | `10-MULTIWAY-POT/` | PÓS (ponte) | Guideline bom; faltam solver e exercícios |
| 11 | `11-Value-Bet-Masterclass/` | PÓS (transversal) | 13 regras; faltam solver, exercícios e links com 01-10 |
| 12 | `12-RETA-FINAL/` | PRÉ | 31 regras, 50 exercícios; lido junto com o 13 |
| 13 | `13-ICM/` (ICM e Risk Premium) | PRÉ | 31 regras, 27 exercícios; telas pendentes |
| 14 | `14-Probe-Turn/` | PÓS | Finalizado |
| 15 | `15-Bet-vs-Missed/` | PÓS | Finalizado |
| 16 | `16-PKO/` | PRÉ | v1.2, regra v3 (170 mãos); arquivos de trabalho em `tools/pko/` |

O detalhe do que falta em cada módulo está no `06-Pendencias.md` dele e em `theory/retomada-main-teoria.md`.

---

# Outras pastas

- `_TEMPLATE/` — esqueleto de módulo (10 arquivos). Copie para criar um módulo novo.
- `tools/pko/` — estudo PKO em andamento (regra viva, mãos jogadas, árvores do solver).

---

# Padrão de módulo

`README.md`, `01-Guideline.md`, `02-VideoAulas.md`, `03-Solver.md`, `04-Exercicios.md`, `05-Regras-Consolidadas.md`, `06-Pendencias.md`, `07-Changelog.md`, `08-Referencias.md` e `09-Decisoes.md`. Função e convenções de cada um em `theory/CLAUDE.md`.

---

# Como colar uma aula nova

1. Abra o chat do lado do módulo (PRÉ ou PÓS) com a mensagem inicial de `theory/MAPA-PRE-POS.md`.
2. Diga o módulo de destino (ou peça um módulo novo ao MAIN CHAT TEORIA, que copia o `_TEMPLATE/`).
3. Cole a transcrição (.txt), a legenda (.srt) e, se houver, o guideline e as telas.
4. O chat segue "Como processar uma aula nova" do `theory/CLAUDE.md`, trabalha numa branch `theory/pre-...` ou `theory/pos-...` e abre um PR para revisão.
