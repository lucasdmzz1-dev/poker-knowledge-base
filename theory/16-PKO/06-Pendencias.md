# Pendências – PKO

> Módulo 16 — Poker Knowledge Base

---

# Objetivo

Registrar pontos que precisam de complemento futuro.

---

# 1. Stack curto (hero ou opener com 25bb ou menos)

A regra de raise e all-in no lugar de call (Regra 15) segue sem teste: na v3 nenhuma mão com hero de 25bb ou menos e premium ou par médio apareceu. O shove com blockers foi testado e errou (2 em 2).

---

# 2. Bolha e late game

As árvores lidas vão de ~13% a 95% do field. Não há dados de bolha de verdade (no último nível antes do ITM), mesa final ou heads-up. A busca por % no site é exata (10%, 8% etc. não retornaram, mas 13% existe).

---

# 3. Outras posições e outros spots

Só BTN contra um open. Faltam CO, SB e BB contra open, contra 3bet, squeeze e multiway.

---

# 4. Amostra maior e mais variada

52 árvores e 70 mãos são pouco. Faltam árvores de bounties de 3× a 5× o inicial, campos de 100 e mais de 1k jogadores, e mais mãos por regra, com teste em mãos que não foram usadas para ajustá-la.

---

# 5. Prever o tamanho do range

Entre árvores os fatores explicam só ~25% do call. Falta descobrir o que mais move o range (por exemplo, a distribuição dos bounties dos jogadores atrás e o tamanho do pote) ou aceitar que é preciso ler a árvore.

---

# 6. Pontos do usuário a confirmar

- Os valores "−3%" e "−11%" da régua do Help Value foram lidos como 3% e 11%.
- Pagar o range inteiro contra o open para incentivar o BB a jogar (nota do usuário) não foi medido.
- O bounty do hero em risco: o usuário disse que não entra no dead money; entrou só como sinal de aperto (T).

---

# 7. Registro automático das mãos

Hoje o registro vai ao arquivo `pko-maos-jogadas.csv` ao fim de cada sessão. Falta a gravação mão a mão no navegador.

---

# 8. Nós largos (Early, stacks parecidos)

Na v3, 5 folds de Kx e Qx suited baixos deviam ser call (field alto, hero e opener com stacks parecidos). Testar não apertar nesses nós.

---

# 9. Premium contra opener fundo ou curto

QQ contra opener de 214bb pede raise; AA contra opener de 14bb pede call. Confirmar com mais mãos.

---

# 10. Atualizações futuras

Quando houver novas mãos ou árvores, atualizar:

- Guideline.
- Regras Consolidadas.
- `regras-vivas-pko-btn.md` e `pko-maos-jogadas.csv`.
- Changelog.

---

# 11. Regra 15: o shove com blocker aparece proibido e recomendado

Conflito registrado na leitura completa da teoria (MAIN CHAT TEORIA, 28/10/2026).

- Na Regra 15 do Guideline, o item **Não usar** diz: shove com blockers (A5o a A2o) contra opener curto e coberto não vale (errou 2 em 2 na v3: A5o e A3o).
- Logo abaixo, a lista diz: **Blockers (A2o) contra opener curto e coberto: all-in.** O Exercício 28 (A2o, hero 141bb, CO 24bb) segue essa linha, com a resposta do solver da v2.
- O `regras-vivas-pko-btn.md` (seção 8, item 1) manda tirar o shove de blocker na v3.1.

Os dados não são contraditórios entre si (1 árvore pediu all-in, 2 pediram fold e call), mas o texto da regra é. Decidir se o item do A2o sai da lista ou se ganha uma condição (por exemplo, hero muito fundo cobrindo), e ajustar o Exercício 28.

---

# 12. Versão e números desatualizados entre os arquivos

Conflito registrado na leitura completa da teoria (MAIN CHAT TEORIA, 28/10/2026).

- **Versão:** README e Changelog dizem v1.2. O cabeçalho do Guideline diz "versão 1.0", e o `09-Decisoes.md` diz "Estado Atual (v1.0)".
- **Mãos:** README, Regra 14 e Limites (primeiro item) falam em 170 mãos (v1, v2 e v3). Os Limites (último item: "70 mãos" e "84% em 70 mãos"), o `02-VideoAulas.md` (Fonte 3), a Decisão 4 e o item 4 desta lista ainda falam em 70 mãos.
- **Nós e árvores:** Guideline, README e `pko-conhecimento.md` dizem 203 nós. O `theory/CLAUDE.md`, o `retomada-pko.md` e o `pko-arvores-dicionario.md` dizem 208 nós. A tabela de efeitos do `03-Solver.md` fala em 50 árvores (contra 52 no resto).
- **Fase:** os Limites dizem Early e Mid "de ~13% a 95%", mas a árvore #3697 (13%) é bolha.

Atualizar os arquivos para a v1.2 e explicar a diferença de 203 para 208 nós (provavelmente nós duplicados ou os 2 excluídos sem RP).

---

# 13. Ordem de prioridade das fontes

Conflito registrado na leitura completa da teoria (MAIN CHAT TEORIA, 28/10/2026).

O `08-Referencias.md` usa: esclarecimentos do autor do KB, notas do usuário, árvores do Trainer, testes no Trainer. A ordem geral do `theory/CLAUDE.md` é: correção do instrutor, solver, videoaula, guideline, exercícios. **Resolvida (28/10/2026):** o autor do KB decidiu seguir a ordem geral, com o autor do KB em 1º. Ver `08-Referencias.md` e `09-Decisoes.md`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/16-PKO/README|theory/16-PKO]]

**Mesma pasta:** [[theory/16-PKO/01-Guideline|01-Guideline]] · [[theory/16-PKO/02-VideoAulas|02-VideoAulas]] · [[theory/16-PKO/03-Solver|03-Solver]] · [[theory/16-PKO/04-Exercicios|04-Exercicios]] · [[theory/16-PKO/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/16-PKO/07-Changelog|07-Changelog]] · [[theory/16-PKO/08-Referencias|08-Referencias]] · [[theory/16-PKO/09-Decisoes|09-Decisoes]] · [[theory/16-PKO/CLAUDE|CLAUDE]]

<!-- graphify-links:end -->
