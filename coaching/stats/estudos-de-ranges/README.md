---
tags:
  - tema/stats
  - tema/ranges
---

# Estudos de ranges

Ranges lidos no solver do 4BET Trainer. As pastas seguem a mesma ordem dos filtros do Trainer: primeiro o spot (ação, posição, stack do hero), depois o formato e a fase. Assim, abrir `rfi/btn/20bb/` mostra tudo o que existe de BTN com 20bb, e as subpastas separam Vanilla e PKO e cada fase.

## Organização

    <acao>/<posicao>/<stack>bb/<formato>/<fase>/
      README.md            leituras e conclusões daquela combinação
      arvores/<id>.md      uma ficha por árvore
      dados/arvores.json   um registro por árvore, no padrão do dicionário

| Nível | Valores | Equivale ao filtro do Trainer |
|---|---|---|
| `acao` | `rfi` (abertura); depois `vs-open`, `vs-3bet`... | spot da árvore |
| `posicao` | `utg`, `utg1`, `mp`, `lj`, `hj`, `co`, `btn`, `sb`, `bb` | posição do hero |
| `stack` | `15bb`, `20bb`, `25bb`... (faixa da busca, por exemplo "BTN 20") | busca por posição + stack |
| `formato` | `vanilla`; `pko` (fator 50%); outro fator vira `pko70`, `pko75` | tipo de torneio e fator progressivo |
| `fase` | `early`, `mid`, `bubble`, `late` (o filtro de fase usado) | fase |

Cada nível acima da fase tem um README curto que lista o que existe dentro, como um menu.

Vanilla e PKO nunca se misturam: Vanilla não tem bounty; PKO grava o bounty de cada assento, o KOI e o fator progressivo.

## Índice geral (o "painel de filtros")
- [indice.md](indice.md): todas as árvores numa tabela, com link para cada ficha.
- `indice.csv`: a mesma tabela para abrir numa planilha e filtrar por ação, posição, stack, formato, fase, % restante, stacks de SB e BB, tamanho da mesa etc.
- Os dois são gerados por `gerar-indice.py` (rodar `python gerar-indice.py` nesta pasta depois de gravar árvores). Não editar à mão.

## Padrão e coleta
- [dicionario-arvores-rfi.md](dicionario-arvores-rfi.md): campos de cada árvore (identificação do spot, stacks de todos os assentos, RP, totais, classes e grade).
- [playbook-coleta-rfi.md](playbook-coleta-rfi.md): como ler uma árvore no 4BET Trainer, regra de mesa, script da grade e checklist.

## O que já existe
- [RFI · BTN · 15bb](rfi/btn/15bb/README.md): Vanilla Early (5 árvores).
- [RFI · BTN · 20bb](rfi/btn/20bb/README.md): Vanilla Early (2 árvores) e Mid (5 árvores).

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[README|Início]]

**Nesta pasta:**

- [[coaching/stats/estudos-de-ranges/dicionario-arvores-rfi|dicionario-arvores-rfi]]
- [[coaching/stats/estudos-de-ranges/playbook-coleta-rfi|playbook-coleta-rfi]]
- [[coaching/stats/estudos-de-ranges/vanilla/rfi/btn/15bb/README|vanilla/rfi/btn/15bb]]

<!-- graphify-links:end -->
