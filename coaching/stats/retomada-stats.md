# Retomada do estudo de stats (painel de evolução e call open contra o solver)

Atualizado em 28/10/2026. Leia este arquivo primeiro quando o assunto for stats, HUD, leaks ou evolução.

## O que é
Acompanhamento das stats reais do jogador (prints do Hand2Note, semana a semana) comparadas com o solver, para achar leaks e medir a evolução. Foco atual: o que fazer no pré-flop quando enfrenta um open (fold, call e 3-bet).

## Fonte dos dados
- Stats reais: prints do Hand2Note (fold, raise e call), todas as semanas juntas.
- Solver de referência: GTO Wizard, ChipEV, 40bb, contra o opener à direita, ponderado pelas mãos que o jogador recebeu.
- Spots: HJ contra LJ (2.037 mãos), CO contra HJ (2.624), BTN contra CO (2.893), SB contra BTN (2.939).

## Resultados principais (call open contra o solver, 40bb)
- Em HJ, CO e BTN a quantidade de 3-bets está na medida do solver. O que foge é o fold no BTN e no SB, a escolha de quais mãos pagar ou 3-betar, e os pares pequenos.
- HJ: 3-bet 7,6% contra 7,7%, mas paga 7,0% contra 5,0% do solver. Excessos: 33, 22 e 44 (o solver folda) e AJo (o solver 3-beta em 74%).
- CO: fold, call e 3-bet a menos de 1,5 ponto do solver; as escolhas estão trocadas (AJo pago, AQo 3-betado).
- BTN: 3-bet igual (9,8% contra 9,7%); fold 80,0% contra 76,3% e call 10,2% contra 13,9%. Foldadas demais: A9o, QJo, KTo, Q8s, T8s, 87s.
- SB: 3-bet 11,1% contra 16,9% do solver; fold 77,1% contra 71,8%. Paga AJo e KQo onde o solver 3-beta; folda KTo, JTo, A8o, QTo, A9o.
- Pares pequenos invertidos: cedo paga onde o solver folda (33 no HJ, 22 no CO); tarde folda onde o solver paga sempre (33 no BTN, 22 no SB).

## O que fazer primeiro
1. BTN: parar de foldar A9o, KTo, QJo, Q8s, T8s e 87s.
2. SB: 3-betar AJo e KQo em vez de pagar, e jogar KTo, JTo, QTo, A8o e A9o.
3. HJ e CO: não pagar 22 e 33.
4. BTN: pagar mais AQo e ATo, em vez de 3-betar.

Limite de leitura: contra opens mais cedo o range do solver é mais curto, então parte dos folds pode estar certa. Mãos com poucas ocorrências ficam em cinza no mapa.

## Arquivos (pasta `coaching/stats/`)
- `painel-evolucao-com-prints.html`: painel de evolução atual (stats semanais, com os prints). Os dados digitados ficam no `localStorage` do navegador; use o botão "Exportar resumo" para guardar uma cópia.
- `painel-evolucao.html` e `painel-evolucao-s2-backup.html`: versões anteriores do painel.
- `call-opens-vs-solver.xlsx`: planilha com as abas Resumo, CallOpen_vs_Base, Padroes, Maos_por_spot, Folds_lidos, Folds_total, Erros_comuns, Mais_foldadas e Checklist_folds.
- `cheat-btn-vs-co.html`: cola do BTN contra open do CO.
- `leak-tracker.html`: plano de correção de leaks.
- `dados/`: `positions.json` (totais por posição), `hands.json` (mão a mão), `errors.json` (tipos de erro), `toplist.json` (mãos que mais pesam) e `takeaways.json` (conclusões).

## Relação com o PKO
O estudo de PKO (`retomada-pko.md`) usa essas mesmas stats do HUD como ponto de partida: o call open do BTN em ~10% contra ~18% a 19% estimado para um bom call open em PKO (gap de uns 8 pontos).
