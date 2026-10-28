# RFI BTN 15bb

Situação: BTN com 15bb, todos os jogadores à frente foldaram. Lê-se a frequência de fold, raise 2bb e all-in do BTN.

## Filtros do solver (fixos nesta situação)

- Tipo de torneio: Vanilla
- Fase: Early (filtro atual; Mid ainda não lida)
- Stacks: Asymmetric
- Reta final: nenhuma marcada
- Tamanho do field: 20 a 79808 (faixa completa)
- Players left: 2 a 18948 (faixa completa)
- % players left: 0% a 100%
- Avg stack da mesa: 4 a 310 bb (faixa completa)
- Busca: "BTN 15" (aceita stacks de ±1 a ±4 bb)

## Como ler cada árvore

1. Abrir a árvore pela lista.
2. Clicar só no rótulo "BTN" do card no cabeçalho, nunca em fold, raise ou all-in (isso leva para a ação do SB).
3. Ler fold, raise 2bb e all-in na faixa "BTN RANGE".
4. Voltar à lista pelo botão HHs (não o de compartilhar).

## Leituras

| Árvore | BTN (bb) | Restantes | Média mesa (bb) | Fold | Raise 2bb | All-in | Arquivo |
|---|---|---|---|---|---|---|---|
| #4772 | 14,4 | 157 (100%) | 54,8 | 59,9% | 19,9% | 20,3% | arvores/4772.md |
| #3336 | 15,9 | 116 (60%) | 36,3 | 60,6% | 26,3% | 13,1% | arvores/3336.md |
| #10057 | 14,0 | 409 (76%) | 33,0 | 63,0% | 11,7% | 25,2% | arvores/10057.md |
| #3411 | 16,3 | 306 (81%) | 53,2 | 62,6% | 19,2% | 18,3% | arvores/3411.md |
| #7211 | 16,3 | 124 (52%) | 49,3 | 59,4% | 30,0% | 10,7% | arvores/7211.md |

Média das 5 árvores: open total de 38,9% (de 37,0% a 40,6%), raise 2bb de 21,4% e all-in de 17,5%. O open total varia pouco; o que muda é a divisão entre raise e all-in (de 12/25 a 30/11). Com 5 árvores e sem os stacks dos outros assentos, ainda não dá para dizer o que move essa divisão.

Dados para análise: `dados/arvores.json` (campos em `../../../dicionario-arvores-rfi.md`).

## Próximos passos
1. **Completar as 5 árvores já lidas** (reabrir pelo `#id`), seguindo `../../../playbook-coleta-rfi.md`:
   - stacks de UTG, UTG1, MP, LJ, HJ, CO, SB e BB;
   - SI, ante e pote antes do BTN;
   - RP do BTN contra SB e BB (e deles contra o BTN);
   - classes de mão (raise e all-in) e, se der, a grade de 169;
   - na primeira árvore, registrar a cor do all-in na grade.
2. **Ampliar a amostra** para ~15 a 20 árvores na mesma busca, sem repetir árvore, variando a média da mesa e os stacks de SB e BB.
3. **#4287** (BTN 17bb): fora da faixa de 14 a 16,3bb; ler só se a amostra ficar curta.
4. **Depois desta situação:** Mid (mesmo stack) e BTN com 20bb e 25bb, para comparar com o HUD (RFI do BTN com 15–25bb: 33%; open jam: 5,5%).

Perguntas que a coleta deve responder:
- O all-in sobe quando SB e BB são curtos (menos fold equity no raise) ou quando cobrem o BTN?
- A média da mesa e a fase mudam o open total ou só a divisão entre raise e all-in?
- Quais classes de mão trocam de raise para all-in?
