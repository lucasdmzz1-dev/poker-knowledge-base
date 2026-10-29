---
tags:
  - tema/stats
  - tema/ranges
---

# RFI · BTN · 20bb

Abertura do BTN com ~20bb (busca "BTN 20", BTN de 18 a 22bb). Escolha o formato e a fase:

| Formato | Fase | Árvores | Pasta |
|---|---|---|---|
| Vanilla | Early | 2 | [vanilla/early](vanilla/early/README.md) |
| Vanilla | Mid | 5 | [vanilla/mid](vanilla/mid/README.md) |
| PKO | qualquer | 0 | ainda não lida |

Todas as árvores, com filtros: [índice geral](../../../indice.md).

Situação: abertura (RFI) do BTN com 20bb, sem bounty, lida no solver do 4BET Trainer (aba SOLVER). As árvores ficam separadas por formato e fase nas subpastas; este README guarda a análise que cruza as fases.

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
- `vanilla/early/` e `vanilla/mid/`: `arvores/<id>.md` (ficha de cada árvore) e `dados/arvores.json`, no padrão de [dicionario-arvores-rfi.md](../../../dicionario-arvores-rfi.md).

## Observações da revisão (29/10/2026)
- **Comparação 20bb contra 15bb:** a seção acima compara as 7 árvores de 20bb (Early e Mid juntos) com as 5 de 15bb (só Early). Comparando só Early com Early: 20bb tem open de 37,8% (raise 30,9%, all-in 7,0%; 2 árvores) contra 38,9% (raise 21,4%, all-in 17,5%) em 15bb. A conclusão se mantém: com 20bb o open total fica parecido e o jam vira raise.
- **Distância do ITM:** #3036 e #10546 estão as duas a restantes ÷ pagos = 1,09 (19 e 8 jogadores do ITM), praticamente na bolha, mesmo com o filtro Mid. O jam é bem diferente nas duas (40% contra 6%); na #3036 SB e BB são curtos (12,2 e 7,4bb) e o RP dos blinds contra o hero é alto (13,9% e 12,8%). Com só 2 árvores, não dá para separar o efeito da bolha do efeito dos blinds curtos.
- **"Média" do cabeçalho:** também aqui ela coincide com a média da mesa nas 7 árvores (calculada dos assentos).
