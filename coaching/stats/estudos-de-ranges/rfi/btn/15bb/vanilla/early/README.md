---
tags:
  - tema/stats
  - tema/ranges
---

# RFI · BTN · 15bb · Vanilla · Early

Situação: abertura (RFI) do BTN com 15bb, sem bounty, lida no solver do 4BET Trainer (aba SOLVER).

## Filtros usados
- Tipo: Vanilla
- Fase: Early
- Stacks: Asymmetric
- Busca: "BTN 15" (aceita ±1 a ±4 bb; as árvores lidas trazem stacks de hero entre 14 e 16 bb)

Os filtros ficam fixos nesta situação. Vanilla não tem bounty, então nenhum campo de bounty é gravado.

## Situação atual
5 árvores lidas, todas com os stacks dos 9 assentos (UTG a BB) registrados e a grade 169 conferida contra os totais. Campos sem leitura (SI e ante) ficam "pendente" nas fichas, porque o cabeçalho não os mostra.

| Árvore | Field | Left | Média (bb) | Stack BTN | SB | BB | Fold | Raise 2bb | All-in |
|---|---|---|---|---|---|---|---|---|---|
| #4772 | 100% | 157 | 54,8 | 14,4 | 60,5 | 49,9 | 59,9% | 19,9% | 20,3% |
| #3336 | 60% | 116 | 36,3 | 15,9 | 21,4 | 26,6 | 60,6% | 26,3% | 13,1% |
| #10057 | 76% | 409 | 33,0 | 14,0 | 10,0 | 29,4 | 63,0% | 11,7% | 25,2% |
| #3411 | 81% | 306 | 53,2 | 16,2 | 80,3 | 15,4 | 62,6% | 19,2% | 18,3% |
| #7211 | 52% | 124 | 49,1 | 16,3 | 28,9 | 50,4 | 59,4% | 30,0% | 10,7% |

Média das 5: open total (raise + all-in) de 38,9%, raise 2bb de 21,4% e all-in de 17,5%. Variação do open total de 36,9% (#10057) a 40,7% (#7211).

## Leituras
- O stack do BTN varia pouco (14 a 16,3 bb), mas o do SB e do BB varia muito entre as árvores (SB de 10 a 80 bb; BB de 15 a 50 bb). Por isso o range do BTN deve ser lido junto com os stacks dos blinds, não só com o 15bb.
- O all-in é a ação que mais muda: 10,7% em #7211 e 25,2% em #10057. Nas árvores com SB e BB curtos o jam sobe.
- RP do BTN contra SB e BB fica entre 0,4 e 2,9%. A exceção é #3336, com RP mais alto (2,9% contra SB e BB).

## Pendências
- SI e ante não aparecem no cabeçalho das árvores: "pendente".
- #3336, #10057 e #3411 têm UTG, UTG1 ou MP sem jogador (menos de 9 assentos): gravados como null.
- Stack do BB no anel da mesa pode ser menor que no cabeçalho (ex.: #7211, 49,3 no anel e 50,4 no cabeçalho). Gravado o valor do cabeçalho e a nota em obs.
- Ampliar para 15 a 20 árvores só com novo pedido.
- **Regra de mesa (playbook):** só mesas de 8 ou 9 jogadores. #3336 (6 jogadores) e #10057 (7 jogadores) foram lidas antes dessa regra e ficam fora dela; estão marcadas "(fora)" no índice. Decidir se saem da análise ou se são trocadas por outras árvores.
- **Identificação do spot (padrão novo):** cada ficha ganhou a linha "Spot" e o bloco "Identificação do spot". Ainda faltam ler no site: fase mostrada na árvore, blinds e ante do nível, stack do hero em fichas e se o tamanho do field vem do cabeçalho. Jogadores na mesa, média da mesa, quem cobre o hero e efetivo contra os blinds foram calculados a partir dos stacks já lidos.
- **"Média" do cabeçalho, em aberto:** nas 5 árvores ela coincide com a média dos stacks sentados (até 0,2bb). Pode ser a média da mesa, ou o solver monta a mesa com a média do torneio. Teste: média do field em bb = SI ÷ (BB em fichas × % restante).
- **Cuidado com a leitura "SB e BB curtos, mais jam":** vale para #10057 (SB 10bb, jam 25,2%), mas #4772 tem SB 60,5bb e BB 49,9bb e mesmo assim 20,3% de jam (hero mais curto, 14,4bb, e 100% do field). Com 5 árvores, tratar como hipótese.

## Arquivos
- `arvores/<id>.md`: ficha de cada árvore (torneio, mesa, RP, range, classes e grade).
- `dados/arvores.json`: os 5 registros no padrão de [dicionario-arvores-rfi.md](../../../../../dicionario-arvores-rfi.md).

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[coaching/stats/estudos-de-ranges/README|coaching/stats/estudos-de-ranges]]

<!-- graphify-links:end -->
