---
tags:
  - tema/pko
  - tipo/ferramenta
---

# Regras vivas: BTN contra 1 open em PKO (4BET Trainer)

Versão atual: **v3** (27/10/2026, testada em 100 mãos; ver seção 8 para o que mudar na v3.1). Este arquivo é a memória de trabalho do Claude para esse estudo. Atualize-o ao fim de cada sessão.

## 0. Como retomar numa conversa nova
1. Ler este arquivo, `pko-conhecimento.md` (definições e resultados das árvores), `pko-solver-playbook.md` (como navegar no site e ler as grades) e `pko-maos-jogadas.csv` (mãos já jogadas).
2. Conectar o Chrome (extensão Claude in Chrome) e abrir https://4bet-trainer.netlify.app/. Os dados das árvores estão no navegador do usuário (`claude_pko_v2`); as mãos jogadas estão em `claude_pko_hands_s2`.
3. Antes de jogar, dizer ao usuário a versão da regra que será testada. Depois de cada rodada, anexar as mãos ao CSV e atualizar o placar na seção 4.

## 1. Escopo da regra
- Hero no BTN, diante de **um único open** (UTG1 a CO), PKO 50%. Early e Mid do Trainer (field restante de ~15% a 95%). Nenhum outro spot foi testado (blinds, contra 3bet e squeeze não valem).
- Ações do Trainer: FOLD, CALL, RAISE x e ALL IN.

## 2. Regra de decisão (v2)
**Passo 1: a mão.**
- Núcleo: pares 66 ou mais, todos os Ax suited, KQs, KJs, KTs, K9s, QJs, QTs, Q9s, JTs, J9s, T9s, T8s, 98s, 97s, 87s, 86s, 76s, 75s, 65s, 64s, 54s, AKo, AQo, AJo, ATo, KQo, KJo, QJo.
- Nota: a implementação v2 trata 86s, 75s e 64s como núcleo; nas árvores elas entram no meio da fila (ver abaixo). Isso pode explicar parte dos "QUASE" em 86s.
- Marginais: todo o resto (pares 22 a 55, Kx suited de K8s para baixo, Qx e Jx suited fracos, offsuit de KTo para baixo).
- Ordem de entrada quando o range alarga (medida nas árvores): núcleo primeiro; depois K4s, K3s, Q7s, J7s, KTo, QTo, JTo, T7s, A9o, 86s, 75s, 64s; só nos ranges mais largos: K2s, Q6s a Q2s, J6s a J4s, T6s, T9o, J9o, Q9o, K9o, 96s, 95s, 85s, 74s, 53s, 43s, A8o a A4o.

**Passo 2: o quanto o range do nó é largo** (continua = call + 3bet), pelas árvores: apertado 13% a 22%, médio 23% a 30%, largo 31% a 49%.
Soma de sinais de aperto `T` (0 a 4), lendo o cabeçalho do Trainer:
- hero com 35bb ou menos **e** opener com pelo menos 1,3× o stack do hero;
- bounty do hero alto para o stack dele: (bounty do hero ÷ KOi) ÷ (stack do hero ÷ stack inicial em bb) ≥ 1,6 (KOi = menor bounty da mesa; stack inicial em bb = média × % restante);
- bolha ou perto dela: jogadores restantes ÷ posições pagas ≤ 2;
- stack do hero ÷ média do field ≤ 0,6.
Alargam o range: opener mais fundo, opener em posição mais tardia (+1,1 ponto por posição), cobrir o opener, mais bounty do opener em relação ao stack dele (Help Value), RP baixo contra o opener.

**Passo 3: a ação.**
- Núcleo: call (raise nos premium, como AA, KK, AKo, e às vezes QQ, JJ, TT contra opener fundo).
- Marginal com `T` ≥ 2: fold. Com `T` = 1: pagar só se a árvore parecida paga com folga. Com `T` = 0: seguir a árvore parecida.
- Suited gappers (T8s, 97s, 86s, 75s, 64s, K9s, Q9s, J9s) com `T` ≥ 2: reduzir o call pela metade (na prática, fold).

## 3. Pendências da regra
- **Stack curto (v3 testou só em parte):** a regra pede raise nos premium (AQs, AKs, AKo, AQo, QQ, JJ, TT) e all-in nos pares 66 a 99 quando o hero tem 25bb ou menos, mas **nenhuma mão dessas apareceu** nas 100 mãos da v3. Segue sem teste. Os erros da v2 que motivaram: AQs, A2o e 66.
- **Shove com blockers (A5o a A2o contra opener curto e coberto): descartado.** Testado em 2 mãos na v3 e errou nas duas.
- Offsuit marginal em nó largo (hero ~50bb contra LJ de ~90bb): pagar (Q7o foi call correto).
- Mais pares premium (QQ, JJ, TT): quando o raise é só um pouco melhor que o call, o Trainer dá QUASE PERFEITO nos dois.

## 4. Placar por versão
| Versão | Mãos | PERFEITO | QUASE | IMPRECISO | BLUNDER |
|---|---|---|---|---|---|
| v1: ordem de entrada pelas árvores, sem aperto | 20 | 13 | 2 | 1 | 4 (um por falha técnica) |
| v2: v1 + aperto marginal (`T`) | 50 | 40 | 4 | 2 | 4 |
| v3: v2 + raise e all-in com stack curto + shove de blocker | 100 | 79 | 7 | 1 | 13 (3 ERRO e 10 BLUNDER) |

Observação: os "BLUNDER" do Trainer são, em geral, de 0,01 a 0,02bb de EV; os que custam mais são os de all-in e raise com stack curto.

v3 em números (100 mãos): precisão (perfeito + quase) de 86%, EV perdido de 0,73bb. Marginais: 59 mãos, 81%. Núcleo: 41 mãos, 93%. T = 0: 62 mãos, 84%; T = 1: 25 mãos, 84%; T de 2 ou mais: 12 mãos, 100%. Hero com 25bb ou menos: 5 mãos, 80%. Opener com 26bb ou menos: 15 mãos, 73%. Field restante de 50% ou mais: 38 mãos, 87%; abaixo de 30%: 26 mãos, 81%. Field de até 150 jogadores: 12 mãos, 92%. A v3 não melhorou a precisão da v2 (88%), mas o EV perdido por mão caiu (0,73bb em 100 mãos contra 0,80bb em 70).

## 5. Erros e causa
- v1, Q8s, K3s, 33, J8s (call, certo fold): range do nó apertado (13% a 22%) por hero curto ou coberto, bounty alto do hero e pressão de ICM. Eu usava árvores mais largas como referência.
- v1, K7s: falha técnica (o opener não foi detectado). Corrigido com a leitura das fichas na mesa.
- v2, T8s e J7s (call, certo fold) e 86s (call, certo fold, só QUASE): hero curto contra opener fundo.
- v2, A2o, AQs, 66: faltava a lógica de all-in e raise com stack curto.
- v2, Q7o (fold, certo call): a regra apertou onde o nó era largo.
- v3, **5 folds que deviam ser call** (K5s CO 37bb com hero de 28bb a 18% do field, K2s CO 38bb com hero de 48bb a 81%, Q8s CO 46bb com hero de 46bb a 84%, Q3s contra UTG1 de 82bb com hero de 47bb a 52%, K4s HJ 40bb com hero de 42bb a 62%): Kx e Qx suited baixos em nós largos (field alto e stacks parecidos). EV de 0,02 a 0,17bb.
- v3, **4 calls que deviam ser fold** (KTo contra LJ de 78bb em field de 92 jogadores, Q5s duas vezes, 96s a 80% do field): marginais em nós mais apertados do que eu previ. EV de −0,01 a −0,02bb.
- v3, **ações trocadas:** QQ contra MP de 214bb (raise 1,09 contra call 1,07); AA contra HJ de 14bb (call 4,12 contra raise 4,11); AJo com 20bb (all-in 0,84 contra call 0,75); A5o e A3o contra CO de 15 a 16bb (shove errado nos dois: −0,14 e −0,01).
- v3, QUASE PERFEITO: J9s e 97s (fold), 88 (all-in), J8s e A6s (raise), 22 (call) e AQo (raise 4,5).

## 6. Como não me enganar
- Cada rodada é guardada separada (campo `sessao` no CSV). Uma regra só vale se acertar mais nas mãos que **não** usei para ajustá-la.
- Com 50 mãos, diferenças de 4 a 6 pontos podem ser sorte. Repetir antes de confiar.
- As árvores usadas para estimar a largura vêm de 52 árvores; faltam bolha, bounties de 3× a 5× o inicial e stacks curtos. Isso pode mudar com mais coleta.

## 8. O que mudar na v3.1 (hipóteses a testar, não regras)
1. Tirar o shove de blocker (A5o a A2o): errou 2 em 2.
2. Não apertar as marginais Kx e Qx suited (K2s a K5s, Q3s a Q8s) quando o field restante é de 50% ou mais **e** o hero tem pelo menos 0,9× o stack do opener: nesses nós o solver paga. Testar com mais mãos.
3. Premium (AA, KK, QQ): raise contra opener fundo (QQ contra 214bb: raise); contra opener muito curto (AA contra 14bb): call. Testar.
4. Suited broadways e Ax suited (A6s, J8s, AQo) podem dar raise contra LJ e MP quando o hero está mais fundo: testar antes de adotar.
5. Stack curto do hero (25bb ou menos): ainda sem teste (nenhuma mão apareceu).
6. Registrar sempre a `config_trainer` (a da sessão 3 não foi confirmada).

## 7. Formato do registro por mão
Ver `pko-maos-dicionario.md` (colunas, como achar um cenário e o que já está preenchido). O arquivo `pko-maos-jogadas.csv` tem 42 colunas e 170 mãos (sessões 1 e 2 parciais, sessão 3 completa): identificação, configuração do Trainer, torneio, mesa, RP, nó do solver, mão, previsão e resultado.
- Configuração dos testes até aqui: **Facing RFI, RNG OFF, Close Decisions** (modo de decisões próximas: muitas mãos marginais). O placar não é comparável com o de um modo comum.
- Sessões 1 e 2 juntas, segundo o Trainer: 70 mãos, precisão de 84%, 53 PERFEITO, 6 QUASE, 3 IMPRECISO, 0 ERRO e 8 BLUNDER, −0,80bb de EV perdido.
- Cópia das 50 mãos da v2 no navegador: `claude_pko_hands_s2`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/README|theory]]

**Mesma pasta:** [[theory/tools/pko/pko-arvores-dicionario|pko-arvores-dicionario]] · [[theory/tools/pko/pko-conhecimento|pko-conhecimento]] · [[theory/tools/pko/pko-maos-dicionario|pko-maos-dicionario]] · [[theory/tools/pko/pko-solver-playbook|pko-solver-playbook]] · [[theory/tools/pko/retomada-pko|retomada-pko]]

<!-- graphify-links:end -->
