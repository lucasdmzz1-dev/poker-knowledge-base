# Dicionário do registro de mãos do PKO (`pko-maos-jogadas.csv`)

Cada linha é **uma decisão** do hero no BTN diante de um open. O objetivo é poder reconstruir o cenário, filtrar por ele e achar a árvore exata do solver, mesmo com milhares de mãos.

## Como achar um cenário
- **Pelo `arvore_id`:** é o ID que aparece no cabeçalho do Trainer (por exemplo `ID 4773`) e no endereço da solução (`/tree/23`). No Solver, digite `#23` na busca para abrir a mesma árvore.
- **Por filtro:** use `pct_field`, `pagos`, `media_bb`, `hero_bb` e `opener_bb` (ou as derivadas abaixo) para achar mãos em cenários parecidos.

## Colunas
| Grupo | Coluna | O que é |
|---|---|---|
| Identificação | `sessao`, `versao_regra` | Rodada de teste e versão da regra usada (v1, v2...). |
| Configuração | `config_trainer` | Cenário, RNG e dificuldade do Trainer (hoje: Facing RFI, RNG OFF, Close Decisions = decisões próximas, com muitas mãos marginais). |
| Torneio | `arvore_id`, `pct_field`, `restantes`, `pagos`, `media_bb`, `si_fichas`, `koi` | ID da árvore, % do field restante, jogadores restantes, posições pagas, stack médio em bb, stack inicial em fichas, bounty inicial. |
| Mesa | `hero_pos`, `opener`, `hero_bb`, `hero_ko`, `opener_bb`, `opener_ko`, `sb_bb`, `sb_ko`, `bb_bb`, `bb_ko`, `open_bb`, `pote_bb` | Posições, stacks (bb) e bounties ($) de hero, opener, SB e BB, tamanho do open e pote. |
| Risk Premium | `rp_hero_vs_op`, `rp_op_vs_hero` | RP (%) do hero contra o opener e do opener contra o hero. |
| Nó (solver) | `no_fold_pct`, `no_call_pct`, `no_3bet_pct` | Range do BTN naquele nó: fold, call e 3bet (inclui all-in). A largura do nó é 100 − fold. |
| Mão | `mao` | Mão do hero (suited termina em `s`, offsuit em `o`). |
| Previsão | `T`, `prev_f`, `prev_c`, `prev_r` | Sinais de aperto e a previsão de fold, call e raise (%) da regra, antes de agir. |
| Decisão e resultado | `minha_acao`, `veredito`, `acao_certa`, `ev_minha`, `ev_certa`, `freq_solver_f`, `freq_solver_c`, `freq_solver_r` | Ação tomada, veredito do Trainer, ação certa, EVs e a frequência do solver para a mão. |
| Observação | `obs` | O que ficou faltando ou algo fora do padrão. |

## Derivadas (calculadas na análise, não gravadas)
- Stack inicial em bb = `media_bb` × `pct_field` ÷ 100.
- Múltiplo do bounty = `opener_ko` ÷ `koi` (ou `hero_ko` ÷ `koi`). KOI = o menor bounty da mesa, se não vier no cabeçalho.
- Help Value do opener = múltiplo do bounty ÷ (`opener_bb` ÷ stack inicial em bb).
- Dead money = múltiplo do bounty × valor da fase (tabela) × stack inicial em bb.
- Cobertura = `hero_bb` ≥ `opener_bb` (e o mesmo para SB e BB). Distância da bolha = `restantes` ÷ `pagos`.

## O que está preenchido hoje
- As 70 mãos das sessões 1 e 2 (v1 e v2) têm mão, opener, stacks de hero e opener, previsão, ação, veredito e ação certa.
- Só as 5 mãos cujo erro foi aberto no solver (Q8s #23, K3s #102, 33 #7459, J8s #3697 e K7s #8587) têm o cenário completo.
- As demais têm o cenário "n/d". Dá para completar com o botão **Exportar Estatísticas** do Trainer (fim da sessão), que o usuário pode enviar.
- Sessões 1 e 2 juntas, segundo o Trainer: 70 mãos, precisão de 84%, 53 PERFEITO, 6 QUASE PERFEITO, 3 IMPRECISO, 0 ERRO e 8 BLUNDER, com −0,80bb de EV perdido.

## Como gravar daqui para frente
Antes de cada ação, ler e gravar o cabeçalho (ID, % restante, restantes, pagos, média, SI), todos os assentos (stack e bounty), o open e o pote. Depois da ação, ler o veredito, a ação certa e o EV. Se o erro for relevante, abrir a solução do solver para gravar o RP e o range do nó. Sempre registrar a `config_trainer`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/16-PKO/README|theory/16-PKO]]

**Relacionadas no mesmo módulo:** [[theory/16-PKO/08-Referencias|08-Referencias]] · [[theory/16-PKO/02-VideoAulas|02-VideoAulas]] · [[theory/16-PKO/06-Pendencias|06-Pendencias]] · [[theory/16-PKO/07-Changelog|07-Changelog]] · [[theory/16-PKO/09-Decisoes|09-Decisoes]]

<!-- graphify-links:end -->
