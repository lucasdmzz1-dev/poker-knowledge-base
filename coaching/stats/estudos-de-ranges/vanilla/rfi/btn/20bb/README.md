---
tags:
  - tema/stats
  - tema/ranges
---

# RFI BTN 20bb (Vanilla)

Situação: abertura (RFI) do BTN com 20bb, sem bounty, lida no solver do 4BET Trainer (aba SOLVER). Early e Mid ficam nesta mesma pasta; a fase de cada árvore vai em `fase_filtro` e na linha "Spot" da ficha.

## Filtros usados
- Tipo: Vanilla
- Fase: Early (2 árvores) e Mid (5 árvores), rodadas uma de cada vez
- Stacks: Asymmetric
- Reta final: sem filtro (Mesa Final e SEMI FT desmarcados)
- Busca: "BTN 20", com margem de ±2 (BTN de 18 a 22 bb)

## Regras aplicadas
- Só mesas cheias, com 8 ou 9 assentos. Mesas de 5 ou 6 jogadores foram descartadas (ex.: #2412, #8419, #8420, #9776, #1060, #9627, #1810, #10017, #4185).
- BTN dentro de 18 a 22 bb. Descartadas por estarem fora da faixa: #4287 e #9779 (BTN 17), #3236 e #9775 (BTN 24), #2296 (BTN 23), #9777 (BTN 17).
- Só 2 árvores Early cumprem as regras (#5064 e #5579). Por isso a situação ficou com 2 Early e 5 Mid, em vez de 5 e 5. Decisão sua, registrada aqui.

## Teste da "Média"
Não foi possível. Nenhuma das 7 árvores mostrou SI nem o BB em fichas (cabeçalho, tooltip e HHs não trazem esses valores). Por isso o teste SI ÷ (BB em fichas × % restante) não foi feito, e os campos SI e ante ficam "pendente".

## Situação atual
7 árvores lidas, todas com mesa de 8 jogadores (UTG vazio), com stacks dos assentos registrados e a grade 169 conferida contra os totais (todas batem).

| Árvore | Fase | Field | Left | Média (bb) | BTN | SB | BB | Fold | Raise 2,2bb ou 2bb | All-in |
|---|---|---|---|---|---|---|---|---|---|---|
| #5064 | Early | 65% | 228 | 42,3 | 18,2 | 33,6 | 34,4 | 65,7% | 27,8% (3bb) | 6,5% |
| #5579 | Early | 70% | 54 | 45,8 | 18,2 | 46,6 | 49,9 | 58,7% | 33,9% | 7,4% |
| #10546 | Mid | 14% | 93 | 19,6 | 20,0 | 10,2 | 23,5 | 60,9% | 33,1% | 6,0% |
| #2387 | Mid | 22% | 76 | 20,8 | 19,9 | 20,4 | 8,8 | 62,2% | 28,7% (2,2bb) | 9,0% |
| #3659 | Mid | 25% | 1893 | 24,0 | 20,1 | 61,3 | 22,0 | 62,6% | 36,3% | 1,1% |
| #10192 | Mid | 33% | 408 | 23,4 | 20,1 | 16,2 | 29,8 | 62,1% | 35,9% | 2,0% |
| #3036 | Mid | 16% | 229 | 20,7 | 19,8 | 12,2 | 7,4 | 36,9% | 23,1% | 40,0% |

Em todas, o raise é de 2 bb, exceto #5064 (3 bb) e #2387 (2,2 bb). Pelas fichas, a média das 7 árvores é: open total de 41,5% (raise 31,3% e all-in 10,3%).

## Early contra Mid
- Early (2 árvores): open total médio de 37,8% (raise 30,9%, all-in 7,0%). Os dois têm BTN em 18,2 bb e SB e BB bem mais fundos que o normal.
- Mid (5 árvores): open total médio de 43,0%, mas isso é puxado por #3036 (63,1%). Sem ela, o Mid fica em 38,0% (raise 33,5%, all-in 4,5%).
- Diferença principal: o Early não tem árvore de jam alto. O all-in da Mid vai de 1,1% a 40%, e só #3036 passa de 9%.

## 20bb contra 15bb (Vanilla, Early)
- Open total: quase igual (41,5% em 20bb contra 38,9% em 15bb).
- Raise: sobe de 21,4% (15bb) para 31,3% (20bb). Com 20bb o BTN abre mais com raise e menos com jam.
- All-in: cai de 17,5% (15bb) para 10,3% (20bb). Com 20bb o jam é a exceção, e só #3036 (40%) puxa a média para cima.
- SB e BB também variam muito nos dois: o BTN depende dos blinds nas duas situações.

## Leituras
- A árvore #3036 (BB com 7,4 bb e SB com 12,2 bb) é a de maior jam: BTN folda 36,9%, abre 63,1% e joga all-in em 40%. Os blinds curtos forçam a ação.
- Em #3659 o SB tem 61,3 bb e o BTN quase não joga all-in (1,1%). Com SB profundo, o BTN abre por raise.
- RP do BTN contra SB e BB: vai de 0,8% a 8,9% contra SB, e de 0,8% a 8,6% contra BB, conforme a árvore.

## Pendências
- SI e ante não aparecem nas árvores: "pendente".
- Teste da Média não feito (sem SI em fichas).
- Pote: nas árvores o pote é lido com o BTN selecionado (2,46 a 2,54 bb). Em #5064 aparece 1 BB extra que não identifiquei.
- #3659 mostra 1893 jogadores restantes com 25% e 1050 pagos. Valor fora do padrão das outras árvores: conferir numa próxima leitura.
- Stack do BB no card e no anel da mesa pode diferir (ex.: #10546 BB 23,5 na matriz e 22,4 no anel). Gravado o valor da matriz, com nota em obs.

## Arquivos
- `arvores/<id>.md`: ficha de cada árvore (torneio, mesa, RP, range, classes e grade).
- `dados/arvores.json`: as 7 árvores no padrão de [dicionario-arvores-rfi.md](../../../../dicionario-arvores-rfi.md).

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[coaching/stats/estudos-de-ranges/README|coaching/stats/estudos-de-ranges]]

<!-- graphify-links:end -->
