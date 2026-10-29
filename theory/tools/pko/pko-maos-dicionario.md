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
| Torneio | `arvore_id`, `pct_field`, `restantes`, `campo_n0`, `pagos`, `media_bb`, `si_fichas`, `koi` | ID da árvore, % do field restante, jogadores restantes, tamanho do field (jogadores no início), posições pagas, stack médio em bb, stack inicial em fichas, bounty inicial. |
| Mesa | `hero_pos`, `opener`, `hero_bb`, `hero_ko`, `opener_bb`, `opener_ko`, `sb_bb`, `sb_ko`, `bb_bb`, `bb_ko`, `open_bb`, `pote_bb` | Posições, stacks (bb) e bounties ($) de hero, opener, SB e BB, tamanho do open e pote. |
| Risk Premium | `rp_hero_vs_op`, `rp_op_vs_hero` | RP (%) do hero contra o opener e do opener contra o hero. |
| Nó (solver) | `no_fold_pct`, `no_call_pct`, `no_3bet_pct` | Range do BTN naquele nó: fold, call e 3bet (inclui all-in). A largura do nó é 100 − fold. |
| Mão | `mao` | Mão do hero (suited termina em `s`, offsuit em `o`). |
| Previsão | `T`, `prev_f`, `prev_c`, `prev_r` | Sinais de aperto e a previsão de fold, call e raise (%) da regra, antes de agir. |
| Decisão e resultado | `minha_acao`, `veredito`, `acao_certa`, `ev_minha`, `ev_certa`, `freq_solver_f`, `freq_solver_c`, `freq_solver_r` | Ação tomada, veredito do Trainer, ação certa, EVs e a frequência (%) do solver para a mão. `freq_solver_r` soma raise e all-in. |
| Observação | `obs` | O que ficou faltando ou algo fora do padrão. |

## Derivadas (calculadas na análise, não gravadas)
- Stack inicial em bb = `media_bb` × `pct_field` ÷ 100.
- Múltiplo do bounty = `opener_ko` ÷ `koi` (ou `hero_ko` ÷ `koi`). KOI = o menor bounty da mesa, se não vier no cabeçalho.
- Help Value do opener = múltiplo do bounty ÷ (`opener_bb` ÷ stack inicial em bb).
- Dead money = múltiplo do bounty × valor da fase (tabela) × stack inicial em bb.
- Cobertura = `hero_bb` ≥ `opener_bb` (e o mesmo para SB e BB). Distância da bolha = `restantes` ÷ `pagos`.

## O que está preenchido hoje (170 mãos, 42 colunas)
- **Sessões 1 e 2 (70 mãos, v1 e v2):** mão, opener, stacks de hero e opener, previsão, ação, veredito e ação certa. Só 5 mãos têm o cenário completo (Q8s #23, K3s #102, 33 #7459, J8s #3697 e K7s #8587). As demais têm o cenário "n/d".
- **Sessão 3 (100 mãos, v3):** cenário completo, gravado mão a mão antes de agir: ID da árvore, % do field, restantes, tamanho do field, pagos, média, SI, KOI, stacks e bounties de hero, opener, SB e BB, open, pote, previsão, ação, veredito, EVs e frequências do solver. Não gravados: `rp_*` e `no_*` (exigiriam abrir a solução do solver de cada mão).
- Em 4 mãos da sessão 3 o % do field e os jogadores restantes vieram vazios; em 4 o stack inicial (SI) e em 10 o KOI. São campos que o cabeçalho do Trainer nem sempre mostra. Uma mão (72s, árvore #8587) teve o opener lido errado, e foi corrigida na planilha (era HJ, raise de 2,3bb).
- Sessões 1 e 2 juntas, segundo o Trainer: 70 mãos, precisão de 84%, 53 PERFEITO, 6 QUASE PERFEITO, 3 IMPRECISO, 0 ERRO e 8 BLUNDER, com −0,80bb de EV perdido. Sessão 3 (conta própria): 100 mãos, 79 PERFEITO, 7 QUASE, 1 IMPRECISO, 3 ERRO e 10 BLUNDER, com −0,73bb de EV perdido.
- O `config_trainer` da sessão 3 não foi confirmado.

## Como gravar daqui para frente
Antes de cada ação, ler e gravar o cabeçalho (ID, % restante, restantes, pagos, média, SI, KOI), todos os assentos (stack e bounty), o open e o pote. Depois da ação, ler o veredito, a ação certa, os EVs e as frequências do solver (painel "Mão anterior"). Se o erro for relevante, abrir a solução do solver para gravar o RP e o range do nó. Sempre registrar a `config_trainer`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/README|theory]]

**Mesma pasta:** [[theory/tools/pko/pko-arvores-dicionario|pko-arvores-dicionario]] · [[theory/tools/pko/pko-conhecimento|pko-conhecimento]] · [[theory/tools/pko/pko-solver-playbook|pko-solver-playbook]] · [[theory/tools/pko/regras-vivas-pko-btn|regras-vivas-pko-btn]] · [[theory/tools/pko/retomada-pko|retomada-pko]]

<!-- graphify-links:end -->
