# Regras vivas: BTN contra 1 open em PKO (4BET Trainer)

Versão atual: **v2** (27/10/2026). Este arquivo é a memória de trabalho do Claude para esse estudo. Atualize-o ao fim de cada sessão.

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

## 3. Pendências da regra (ainda não testadas)
- **Stack curto:** hero com 25bb ou menos, ou opener com 25bb ou menos coberto pelo hero: trocar "pagar" por raise ou all-in. Premium (AQs, AKs, QQ e acima) raise; blockers (como A2o) shove contra opener curto e coberto; 66 a 99 shove contra CO. (Erros que motivaram: AQs, A2o, 66.)
- Offsuit marginal em nó largo (hero ~50bb contra LJ de ~90bb): pagar (Q7o foi call correto).
- Mais pares premium (QQ, JJ, TT): quando o raise é só um pouco melhor que o call, o Trainer dá QUASE PERFEITO nos dois.

## 4. Placar por versão
| Versão | Mãos | PERFEITO | QUASE | IMPRECISO | BLUNDER |
|---|---|---|---|---|---|
| v1: ordem de entrada pelas árvores, sem aperto | 20 | 13 | 2 | 1 | 4 (um por falha técnica) |
| v2: v1 + aperto marginal (`T`) | 50 | 40 | 4 | 2 | 4 |

Observação: os "BLUNDER" do Trainer são, em geral, de 0,01 a 0,02bb de EV; os que custam mais são os de all-in e raise com stack curto.

## 5. Erros e causa
- v1, Q8s, K3s, 33, J8s (call, certo fold): range do nó apertado (13% a 22%) por hero curto ou coberto, bounty alto do hero e pressão de ICM. Eu usava árvores mais largas como referência.
- v1, K7s: falha técnica (o opener não foi detectado). Corrigido com a leitura das fichas na mesa.
- v2, T8s e J7s (call, certo fold) e 86s (call, certo fold, só QUASE): hero curto contra opener fundo.
- v2, A2o, AQs, 66: faltava a lógica de all-in e raise com stack curto.
- v2, Q7o (fold, certo call): a regra apertou onde o nó era largo.

## 6. Como não me enganar
- Cada rodada é guardada separada (campo `sessao` no CSV). Uma regra só vale se acertar mais nas mãos que **não** usei para ajustá-la.
- Com 50 mãos, diferenças de 4 a 6 pontos podem ser sorte. Repetir antes de confiar.
- As árvores usadas para estimar a largura vêm de 52 árvores; faltam bolha, bounties de 3× a 5× o inicial e stacks curtos. Isso pode mudar com mais coleta.

## 7. Formato do registro por mão
Ver `pko-maos-dicionario.md` (colunas, como achar um cenário e o que já está preenchido). O arquivo `pko-maos-jogadas.csv` tem 41 colunas: identificação, configuração do Trainer, torneio, mesa, RP, nó do solver, mão, previsão e resultado.
- Configuração dos testes até aqui: **Facing RFI, RNG OFF, Close Decisions** (modo de decisões próximas: muitas mãos marginais). O placar não é comparável com o de um modo comum.
- Sessões 1 e 2 juntas, segundo o Trainer: 70 mãos, precisão de 84%, 53 PERFEITO, 6 QUASE, 3 IMPRECISO, 0 ERRO e 8 BLUNDER, −0,80bb de EV perdido.
- Cópia das 50 mãos da v2 no navegador: `claude_pko_hands_s2`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/16-PKO/README|README]] · [[theory/16-PKO/01-Guideline|01-Guideline]] · [[theory/16-PKO/08-Referencias|08-Referencias]] · [[theory/16-PKO/06-Pendencias|06-Pendencias]] · [[theory/16-PKO/07-Changelog|07-Changelog]]

<!-- graphify-links:end -->
