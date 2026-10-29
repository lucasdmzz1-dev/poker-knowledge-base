# Dicionário dos dados das árvores (`dados/pko-arvores-btn.json`)

Origem: 4BET Trainer, aba Solver (HRC Library), lido pelo Chrome em 27/10/2026. Filtros: tipo Bounty, fator progressivo 50%. Cada registro é um **nó**: uma árvore com o BTN diante de um open de uma posição.

Cobertura: 208 nós, 52 árvores únicas, 41 nós com a grade de 169 mãos. Field restante de ~15% a 95%. Não há árvores de bolha de verdade, mesa final ou heads-up.

## Campos de cada registro
| Campo | O que é |
|---|---|
| `id` | ID da árvore (por exemplo `#8525`). Digite no Solver para reabrir. |
| `term` | Termo de busca usado para achar a árvore (só serve para rastrear a amostragem). |
| `pct`, `left`, `paid` | % do field restante, jogadores restantes e posições pagas. |
| `media` | Stack médio do field, em bb. |
| `si`, `koi` | Stack inicial (fichas) e bounty inicial ($). |
| `seats` | Mapa posição → `[stack em bb, bounty em $]` de todos os assentos sentados. |
| `tavg` | Stack médio dos assentos sentados (só nos nós coletados depois do teste inicial). |
| `op` | Posição do opener. |
| `sz` | Tamanho do open (bb). |
| `rp` | `[RP do hero contra o opener, RP do opener contra o hero]`, em %. |
| `pot` | Pote após o open (bb). |
| `hs` | Stack do BTN no cabeçalho do range (bb). |
| `f`, `c` | Fold e call (%) do range do BTN. O 3bet (incluindo all-in) = 100 − f − c. |
| `cl` | Para 10 classes de mão, `[3bet%, call%]`: `Pa` (AA a TT), `Pm` (99 a 66), `Pb` (55 a 22), `As` (Ax suited), `Ks`, `QJs` (Qx e Jx suited), `Sc` (suited conectados e gappers), `Ao` (Ax offsuit), `Bo` (broadways offsuit), `Oo` (outros offsuit). Ponderado por combos. |
| `grid` | (só em alguns nós) 169 células em ordem de linha: AA, AKs, AQs, ..., A2s, AKo, KK, KQs, ... Cada célula é `r-c` em passos de 5% (`r` = raise, `c` = call; fold = 20 − r − c). |

## Cuidados
- **Duplicatas:** algumas árvores aparecem em mais de um nó (um por opener). A chave única é `id` + `op`.
- **All-in não entra na grade:** em nós com o hero curto (~25bb ou menos), parte das mãos é all-in e na grade parece fold. Para a largura do nó use `f` e `c`, que vêm do resumo do site. Foram descartadas 10 grades que não batiam com `f` e `c` (diferença acima de 3 pontos).
- **KOI:** no cabeçalho da árvore. Quando não vem, use o menor bounty da mesa.
- **Nós com problema:** o #8954 (opener HJ) e o #7144 (opener CO) saíram sem RP e foram excluídos das análises.
- **Etiqueta de fase:** o campo `term` não é fase. A fase vem de `pct`, `left` e `paid`.
- **Coleta antiga (`claude_pko_btn`):** tinha etiqueta de fase inválida e árvores repetidas. Não é incluída.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/README|theory]]

**Mesma pasta:** [[theory/tools/pko/pko-conhecimento|pko-conhecimento]] · [[theory/tools/pko/pko-maos-dicionario|pko-maos-dicionario]] · [[theory/tools/pko/pko-solver-playbook|pko-solver-playbook]] · [[theory/tools/pko/regras-vivas-pko-btn|regras-vivas-pko-btn]] · [[theory/tools/pko/retomada-pko|retomada-pko]]

<!-- graphify-links:end -->
