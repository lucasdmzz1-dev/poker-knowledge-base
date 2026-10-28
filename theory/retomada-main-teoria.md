# Retomada do MAIN CHAT TEORIA

Atualizado em 28/10/2026. Leia este arquivo e o `theory/MAPA-PRE-POS.md` no início de cada sessão do MAIN CHAT TEORIA, **em vez de reler a teoria inteira**. Atualize-o no fim de cada sessão.

---

## 1. Papel deste chat

Coordenar a teoria: dono do `theory/CLAUDE.md`, `theory/README.md`, `theory/MAPA-PRE-POS.md`, `theory/_TEMPLATE/` e deste arquivo. Cria módulos novos, resolve conflitos entre PRÉ e PÓS e decide a ordem de fontes. Conteúdo de módulo é dos chats PRÉ (12, 13, 16) e PÓS (01 a 11, 14, 15). Stats, HUD e leaks são do chat STATS.

---

## 2. Estado dos módulos (leitura completa de 28/10/2026)

| Mód. | Lado | Estado | O que falta |
|---|---|---|---|
| 01 C-Bet IP 20bb | PÓS | Conteúdo ok, arquivos bagunçados | Limpeza: Guideline tem cópia do VideoAulas (linha 174); Exercícios e Regras têm duas versões coladas; resto `oaicite` no Solver |
| 02 C-Bet IP 40bb | PÓS | Tabelas por posição | Exercícios sem exercícios; Decisões vazio |
| 03 Second Barrel IP | PÓS | Completo | `README.md` vazio |
| 04 Third Barrel | PÓS | Completo (MDF) | Restos `oaicite` no README e Referências; ligar ao 11 (sizing por bloqueio de valor) |
| 05 C-Bet OOP 40bb | PÓS | Flop completo; turn só valor | Bluffs, semi-bluffs e check do turn |
| 06 XR Short | PÓS | Completo ("Lei NN" no lugar de "Regra N") | — |
| 07 XR Deep | PÓS | Completo | `06-Pendencias.md` vazio |
| 08 3Bet Pot | PÓS (ponte) | OOP ok; IP quase vazio | Parte IP |
| 09 Bet-Check-Bet | PÓS | Guideline + 6 exercícios | Solver; pendência do 88 no river que dobra |
| 10 Multiway | PÓS (ponte) | Guideline bom | Solver, exercícios; revisar à luz do 15 |
| 11 Value Bet | PÓS | 13 regras | Solver, exercícios, links com 01-10 |
| 12 Reta Final | PRÉ | 31 regras, 50 exercícios | Mapas de defesa/squeeze; 80bb ou 84bb; link para o 13 |
| 13 ICM | PRÉ | 31 regras, 27 exercícios | Telas pendentes; aula de short stack na bolha |
| 14 Probe Turn | PÓS | Finalizado | Sequência com naipe do board; referência quebrada ao 05 |
| 15 Bet vs Missed | PÓS | Finalizado | Pior trinca 100% contra tabelas monotone/dobrado |
| 16 PKO | PRÉ | v1.2, regra v3 (170 mãos) | Stack curto; Regra 15 contraditória; números desatualizados |

---

## 3. Decisões tomadas neste chat

- **28/10/2026 — Divisão em chats:** MAIN CHAT TEORIA, PRÉ-FLOP e PÓS-FLOP (`MAPA-PRE-POS.md`).
- **28/10/2026 — Ordem de prioridade das fontes (todos os módulos):** autor do KB, correção do instrutor, solver, videoaula, guideline, exercícios. Dados de field (MDA, stats) não são fonte de regra. Exceções dentro da mesma aula: 14 (anotações > fala), 15 (imagem > fala, pela correção do coach), 13 (fala > anotações; frame do solver > fala).

---

## 4. PRs

- **#2** (mapa PRÉ/PÓS, retomada, economia de contexto), **#3** (pendências, ordem de fontes) e **#4** (retomada) mergeados no `main` em 28/10/2026.
- **Limpeza** (branch `theory/main-limpeza`): apagou `theory/16-PKO/CLAUDE.md` e `theory/16-PKO/tools/` (conferido com `diff`: as 70 mãos do CSV antigo estão no atual de 170, o JSON das árvores é idêntico, regras e dicionário antigos foram substituídos); `theory/CLAUDE_1.md` já não existia. Reescreveu o `theory/README.md` em português (16 módulos, lado e status, e "Como colar uma aula nova") e preencheu o `_TEMPLATE/` com o esqueleto dos 10 arquivos. PR aberto, aguardando revisão.

---

## 5. Próximos passos (em ordem)

1. Revisar e mergear o PR da limpeza.
2. Rodar `/graphify --update` (semântico) no `main`. Na sessão de 28/10 a instalação (`uv tool install graphifyy`) foi bloqueada pela permissão do ambiente: liberar antes ou rodar localmente.
3. Próxima aula: colar no chat do lado do módulo (PRÉ ou PÓS), seguindo "Como colar uma aula nova" no `theory/README.md`. Módulo novo: o MAIN copia o `_TEMPLATE/`.
4. Passar aos chats PRÉ e PÓS os itens de cada lado (seção 2 e os `06-Pendencias.md`), quando o Lucas pedir.

---

## 6. Como economizar contexto

- **Não reler a teoria inteira.** A leitura completa custa ~400k tokens. Use este arquivo e o mapa como ponto de partida.
- **Pergunta sobre conteúdo:** `graphify query "..."` primeiro; depois leia só os trechos apontados.
- **Um módulo por vez**, e só os arquivos que vão ser editados.
- **Varredura ampla** (muitos arquivos): usar um subagente, que lê fora do contexto e devolve só a conclusão.
- **Sessões curtas:** ao fechar um bloco de trabalho, atualizar este arquivo, commitar e começar uma sessão nova.

---

## 7. Mensagem inicial para uma sessão nova do MAIN CHAT TEORIA

```
MAIN CHAT TEORIA do Poker Knowledge Base. Sou Lucas; respostas diretas, em português, com termos de poker em inglês.
Leia só `theory/CLAUDE.md`, `theory/MAPA-PRE-POS.md` e `theory/retomada-main-teoria.md`. Não releia os módulos inteiros: use `graphify query` e leia só o que for preciso.
Hoje quero: [tarefa].
```
