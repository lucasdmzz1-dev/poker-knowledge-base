# Graph Report - poker-knowledge-base  (2026-10-28)

## Corpus Check
- 197 files · ~135,814 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 2 file(s) not represented in the graph (top: .csv 2)

## Summary
- 947 nodes · 1805 edges · 35 communities (31 shown, 4 thin omitted)
- Extraction: 79% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 370 edges (avg confidence: 0.87)
- Token cost: 1,209,177 input · 0 output

## Community Hubs (Navigation)
- Probe Turn
- Reta Final
- ICM e Risk Premium
- Ferramentas PKO (dados)
- Third Barrel e C-Bet IP 40bb
- Bet Check Bet e Value Bet
- PKO BTN vs Open
- Second Barrel IP
- C-Bet OOP 40bb
- Bet vs Missed (regras)
- XR Short Stack
- Multiway Pot
- Value Bet (regras)
- ICM pendências
- Bet vs Missed (meta)
- C-Bet IP Short (boards)
- Modelo de domínio KB
- 3BET Pot
- Bet Check Bet (texturas)
- Arquitetura KB
- C-Bet IP pendências
- C-Bet IP Short (conceitos)
- Third Barrel decisões
- XR Deep Stack
- Índice de módulos
- Gestão de mudanças KB
- XR Deep boards conectados
- XR Deep boards secos
- Blefes com equidade
- Naipes em monotone
- Turn após XR / 3BET
- Deep vs Short Stack
- Second Barrel IP README
- PKO posição do opener
- PKO blinds curtos

## God Nodes (most connected - your core abstractions)
1. `Guideline — Probe Turn` - 41 edges
2. `Guideline — Reta Final` - 39 edges
3. `Guideline — ICM e Risk Premium` - 36 edges
4. `Guideline — Bet vs Missed C-Bet` - 30 edges
5. `Probe Turn: guia visual (infografia)` - 29 edges
6. `Regras Consolidadas – Bet vs Missed C-Bet` - 24 edges
7. `Exercícios — ICM e Risk Premium (27 questões)` - 23 edges
8. `Exercícios — Probe Turn` - 22 edges
9. `Exercícios — Reta Final (50 questões)` - 21 edges
10. `Exercícios — Bet vs Missed C-Bet` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Decisão 7 — Construção da KB (Exercício → Correção → Regra Consolidada → Changelog)` --semantically_similar_to--> `Workflow Study → Discussion → Exercises → Validation → Knowledge Base → Trainer → Leak Finder → Poker App`  [INFERRED] [semantically similar]
  theory/01-CBet-IP-Short-Stack/09-Decisoes.md → docs/00-Architecture/KB-000-Architecture.md
- `Decisão 7 — Construção da KB (Exercício → Correção → Regra Consolidada → Changelog)` --semantically_similar_to--> `Change Management`  [INFERRED] [semantically similar]
  theory/01-CBet-IP-Short-Stack/09-Decisoes.md → docs/00-Architecture/KB-001-Project-Architecture.md
- `Decisão 1 — Manter foco Short Stack (20bbs)` --semantically_similar_to--> `Module Scope and Exclusions`  [INFERRED] [semantically similar]
  theory/01-CBet-IP-Short-Stack/09-Decisoes.md → docs/00-Architecture/KB-003-Module-Template.md
- `Simplificação do Solver (agrupar mãos em regras fixas)` --semantically_similar_to--> `Operational Simplifications`  [INFERRED] [semantically similar]
  theory/01-CBet-IP-Short-Stack/03-Solver.md → docs/00-Architecture/KB-003-Module-Template.md
- `Pending Validations` --semantically_similar_to--> `Pendências – C-Bet IP Short Stack`  [INFERRED] [semantically similar]
  docs/00-Architecture/KB-003-Module-Template.md → theory/01-CBet-IP-Short-Stack/06-Pendencias.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Camadas que consomem a Knowledge Base via Decision Engine** — docs_00_architecture_kb_001_project_architecture_decision_engine, docs_00_architecture_kb_001_project_architecture_trainer, docs_00_architecture_kb_001_project_architecture_leak_finder, docs_00_architecture_kb_001_project_architecture_hand_analyzer, docs_00_architecture_kb_001_project_architecture_study_planner, docs_00_architecture_kb_001_project_architecture_poker_app [EXTRACTED 1.00]
- **Construção do Check Behind no Short Stack** — theory_01_cbet_ip_short_stack_01_guideline_range_de_check_behind, theory_01_cbet_ip_short_stack_01_guideline_realizacao_de_equidade, theory_01_cbet_ip_short_stack_01_guideline_frequencia_de_check_raise, theory_01_cbet_ip_short_stack_02_videoaulas_filosofia_do_check, theory_01_cbet_ip_short_stack_05_regras_consolidadas_regra_8_trincas_no_check, theory_01_cbet_ip_short_stack_05_regras_consolidadas_regra_9_nao_apostar_draws_sem_plano [INFERRED 0.85]
- **Estratégia Split em Boards Low 40bb (Valor / Bluff / Check)** — theory_02_cbet_ip_40bb_01_guideline_estrategia_split_boards_low, theory_02_cbet_ip_40bb_01_guideline_range_de_bet_por_valor, theory_02_cbet_ip_40bb_01_guideline_range_de_bet_bluff, theory_02_cbet_ip_40bb_01_guideline_range_de_check, theory_02_cbet_ip_40bb_01_guideline_b70 [EXTRACTED 1.00]
- **Classificação dos Turns no Second Barrel** — theory_03_second_barrel_ip_01_guideline_turn_blank, theory_03_second_barrel_ip_01_guideline_turn_conectado, theory_03_second_barrel_ip_01_guideline_turn_high_card, theory_03_second_barrel_ip_02_videoaulas_flush_high_card, theory_03_second_barrel_ip_02_videoaulas_flush_low_card [EXTRACTED 1.00]
- **Fluxo defensivo Vs Third Barrel** — theory_04_third_barrel_e_vs_third_barrel_01_guideline_vs_third_barrel, theory_04_third_barrel_e_vs_third_barrel_01_guideline_mdf, theory_04_third_barrel_e_vs_third_barrel_02_videoaulas_turn_seco_x_turn_dinamico, theory_04_third_barrel_e_vs_third_barrel_05_regras_consolidadas_processo_de_ranking_dos_bluff_catchers, theory_04_third_barrel_e_vs_third_barrel_04_exercicios_processo_de_defesa [INFERRED 0.85]
- **Hierarquia de fontes da Poker Knowledge Base** — theory_02_cbet_ip_40bb_08_referencias_fontes_oficiais, theory_03_second_barrel_ip_08_referencias_criterio_de_prioridade_das_fontes, theory_04_third_barrel_e_vs_third_barrel_08_referencias_criterio_de_conflito [INFERRED 0.85]
- **Construção de Bet e Check no C-Bet OOP** — theory_05_cbet_oop_40bb_01_guideline_cbet_oop, theory_05_cbet_oop_40bb_01_guideline_split_range, theory_05_cbet_oop_40bb_01_guideline_split_25, theory_05_cbet_oop_40bb_01_guideline_protecao_range_de_check, theory_05_cbet_oop_40bb_05_regras_consolidadas_dois_ranges_funcionais [EXTRACTED 1.00]
- **Proteção vs Extração define tipo de XR** — theory_06_xr_short_01_guideline_xr_pequeno_board_seco, theory_06_xr_short_01_guideline_xr_shove_board_dinamico, theory_06_xr_short_01_guideline_spr_baixo_nao_define_shove, theory_06_xr_short_09_decisoes_board_define_objetivo [EXTRACTED 1.00]
- **Third Barrel IP, Vs Third Barrel e MDF como processo único** — theory_04_third_barrel_e_vs_third_barrel_readme_third_barrel_ip, theory_04_third_barrel_e_vs_third_barrel_readme_vs_third_barrel, theory_04_third_barrel_e_vs_third_barrel_readme_mdf, theory_04_third_barrel_e_vs_third_barrel_09_decisoes_modulo_unico [EXTRACTED 1.00]
- **Texturas de Board no XR Deep (solver)** — theory_07_xr_deep_03_solver_board_k83, theory_07_xr_deep_03_solver_board_t97, theory_07_xr_deep_03_solver_board_a64, theory_07_xr_deep_03_solver_board_963, theory_07_xr_deep_03_solver_board_883, theory_07_xr_deep_03_solver_board_a73_monotone, theory_07_xr_deep_03_solver_board_kq9, theory_07_xr_deep_03_solver_board_532, theory_07_xr_deep_03_solver_board_k72, theory_07_xr_deep_03_solver_board_aa5, theory_07_xr_deep_03_solver_board_t85_fd [EXTRACTED 1.00]
- **Dinâmicas de River no Bet Check Bet** — theory_09_bet_check_bet_01_guideline_river_blank, theory_09_bet_check_bet_01_guideline_dinamico_ax, theory_09_bet_check_bet_01_guideline_dinamico_flush, theory_09_bet_check_bet_01_guideline_dinamico_high_card, theory_09_bet_check_bet_01_guideline_dinamico_sequencia, theory_09_bet_check_bet_01_guideline_dinamico_dobra [EXTRACTED 1.00]
- **Árvore de Flop 3BET POT OOP (Short/Deep)** — theory_08_3bet_pot_01_guideline_oop_short_board_seco_b25, theory_08_3bet_pot_01_guideline_oop_short_conectado_b40, theory_08_3bet_pot_01_guideline_oop_short_sequencia_allin, theory_08_3bet_pot_01_guideline_oop_deep_board_seco, theory_08_3bet_pot_01_guideline_oop_deep_tx_jx_98xs_b70, theory_08_3bet_pot_01_guideline_oop_deep_sequencia_b40 [EXTRACTED 1.00]
- **Classificação do river no Bet Check Bet (6 dinâmicas)** — theory_09_bet_check_bet_readme_blank, theory_09_bet_check_bet_readme_dinamico_high_card, theory_09_bet_check_bet_readme_dinamico_ax, theory_09_bet_check_bet_readme_dinamico_flush, theory_09_bet_check_bet_readme_dinamico_dobra, theory_09_bet_check_bet_readme_dinamico_sequencia [EXTRACTED 1.00]
- **Três perspectivas do Multiway (OOP / IP / BB)** — theory_10_multiway_pot_01_guideline_situacao_1_hero_oop, theory_10_multiway_pot_01_guideline_situacao_2_hero_ip, theory_10_multiway_pot_01_guideline_situacao_3_hero_bb, theory_10_multiway_pot_09_decisoes_decisao_1_organizar_por_perspectiva [EXTRACTED 1.00]
- **Sizing de valor no river por textura (blank vs esquisito vs muda nuts)** — theory_11_value_bet_masterclass_01_guideline_regra_3_board_esquisito_size_menor, theory_11_value_bet_masterclass_01_guideline_regra_4_blank_real_size_alto, theory_11_value_bet_masterclass_01_guideline_regra_5_dois_sizes_b70_overbet, theory_11_value_bet_masterclass_01_guideline_regra_6_river_blank_vs_muda_nuts, theory_11_value_bet_masterclass_01_guideline_regra_2_sizing_composicao_range [INFERRED 0.85]
- **Hierarquia dos três tipos de stack no ICM (predador, vítima, desesperado)** — theory_13_icm_01_guideline_big_stack_predador, theory_13_icm_01_guideline_mid_stack_vitima, theory_13_icm_01_guideline_short_stack_precisa_se_mexer, theory_13_icm_01_guideline_regra_7_stack_relativo [EXTRACTED 1.00]
- **Dez spots práticos do solver ICM comparando 25% e 16% field left** — theory_13_icm_03_solver_spot_lj_65bb_cobre_todos, theory_13_icm_03_solver_spot_hj_21bb_coberto, theory_13_icm_03_solver_spot_btn_26bb_vs_lj, theory_13_icm_03_solver_spot_btn_125bb_vs_hj, theory_13_icm_03_solver_spot_co_64bb_abre, theory_13_icm_03_solver_spot_bb_21bb_vs_co, theory_13_icm_03_solver_spot_co_34bb_vs_hj, theory_13_icm_03_solver_spot_bw_sb_cobrindo_bb, theory_13_icm_03_solver_spot_bw_sb_coberto_bb, theory_13_icm_03_solver_spot_bw_sb_curto_10bb [EXTRACTED 1.00]
- **Sizing de river por textura: blank vs board que esquisitou (B70 vs Overbet)** — theory_11_value_bet_masterclass_05_regras_consolidadas_regra_3_board_completa_draw_size_menor, theory_11_value_bet_masterclass_05_regras_consolidadas_regra_4_board_blank_size_alto, theory_11_value_bet_masterclass_05_regras_consolidadas_regra_5_carta_alta_nao_e_blank, theory_11_value_bet_masterclass_05_regras_consolidadas_regra_6_dois_sizes_river, theory_11_value_bet_masterclass_05_regras_consolidadas_regra_7_river_blank_vs_muda_nuts [INFERRED 0.85]
- **Sistema de sizes do probe turn (B70/B100/B40, nunca B25)** — theory_14_probe_turn_01_guideline_size_nasce_do_grupo, theory_14_probe_turn_01_guideline_b70, theory_14_probe_turn_01_guideline_b100, theory_14_probe_turn_01_guideline_b40, theory_14_probe_turn_01_guideline_b25_range_inteiro [EXTRACTED 1.00]
- **Cinco tipos de flop do bet vs missed** — theory_15_bet_vs_missed_01_guideline_cinco_tipos_flop, theory_15_bet_vs_missed_01_guideline_flop_conectado_high, theory_15_bet_vs_missed_01_guideline_flop_semi_conectado, theory_15_bet_vs_missed_01_guideline_flop_seco, theory_15_bet_vs_missed_01_guideline_flop_monotone, theory_15_bet_vs_missed_01_guideline_flop_dobrado [EXTRACTED 1.00]
- **Princípio transversal: o size sai do grupo de mãos** — theory_14_probe_turn_01_guideline_size_nasce_do_grupo, theory_15_bet_vs_missed_01_guideline_size_acompanha_grupo, theory_14_probe_turn_05_regras_consolidadas_regra_principal, theory_15_bet_vs_missed_05_regras_consolidadas_regra_principal [INFERRED 0.85]
- **Fatores que alargam ou apertam o range do BTN em PKO** — theory_16_pko_01_guideline_stack_do_opener, theory_16_pko_01_guideline_cobertura, theory_16_pko_01_guideline_stack_relativo_a_media, theory_16_pko_01_guideline_posicao_do_opener, theory_16_pko_01_guideline_fase_e_tamanho_do_field, theory_16_pko_01_guideline_risk_premium, theory_16_pko_01_guideline_help_value [EXTRACTED 1.00]
- **Passo a passo de decisão na mesa (PKO)** — theory_16_pko_01_guideline_dead_money_do_bounty, theory_16_pko_01_guideline_largura_do_no, theory_16_pko_01_guideline_sinais_de_aperto_t, theory_16_pko_01_guideline_ordem_de_entrada_das_maos, theory_16_pko_01_guideline_fold_call_e_raise [EXTRACTED 1.00]
- **Estratégia de frequências do Bet vs Missed C-Bet** — theory_15_bet_vs_missed_readme_buckets_de_frequencia, theory_15_bet_vs_missed_readme_sizes_b25_e_b50, theory_15_bet_vs_missed_readme_cinco_tipos_de_flop, theory_15_bet_vs_missed_readme_divisao_por_naipe_ou_randomizador [EXTRACTED 1.00]
- **Probe turn: escolha de size por textura do turn** — theory_14_probe_turn_11_guia_visual_turn_blank_conectado, theory_14_probe_turn_11_guia_visual_turn_blank_seco, theory_14_probe_turn_11_guia_visual_turn_carta_alta, theory_14_probe_turn_11_guia_visual_turn_flush_carta_baixa, theory_14_probe_turn_11_guia_visual_turn_flush_carta_alta, theory_14_probe_turn_11_guia_visual_turn_sequencia_completa, theory_14_probe_turn_11_guia_visual_turn_pareia_board [EXTRACTED 1.00]
- **Fatores que ampliam o range do BTN em PKO** — theory_tools_pko_pko_conhecimento_help_value, theory_tools_pko_pko_conhecimento_cobertura, theory_tools_pko_pko_conhecimento_risk_premium, theory_tools_pko_pko_conhecimento_dead_money_bounty, theory_tools_pko_regras_vivas_pko_btn_largura_no [INFERRED 0.85]
- **Fluxo de estudo PKO: coleta, registro e regra** — theory_tools_pko_pko_solver_playbook_playbook, theory_tools_pko_pko_arvores_dicionario_dicionario_arvores, theory_tools_pko_pko_maos_dicionario_dicionario_maos, theory_tools_pko_pko_conhecimento_notas_pko, theory_tools_pko_regras_vivas_pko_btn_regras_vivas [EXTRACTED 1.00]

## Communities (35 total, 4 thin omitted)

### Community 0 - "Probe Turn"
Cohesion: 0.06
Nodes (87): Regra 18 — A construção não muda, quem muda é a frequência, B100 / geométrico (trinca e TP muito forte; board seco), Regra 9 — Não aposte B25 com o range inteiro, B40 (vilão dá raise ou thin value), B70 (TP e SP; board conectado), Blank (turn que não muda o nuts), Regra 10 — Bluff é sempre equity direta, Regra 4 — Board atípico: assuma o range de check atrás (+79 more)

### Community 1 - "Reta Final"
Cohesion: 0.06
Nodes (24): Referências — Value Bet Masterclass, Cenário 10% field left, Click (4bet pequeno, só a diferença), Guideline — Reta Final, Meiuca (mãos médias), Resteal (shove em cima de shove), Risk premium (RP) na reta final, Shove vs open (+16 more)

### Community 2 - "ICM e Risk Premium"
Cohesion: 0.08
Nodes (25): Guideline — ICM e Risk Premium, ICM, Painel Bubble factor (GTO Wizard modo ICM), Quatro passos do instrutor (tipo de stack, fase, RP, hierarquia), Risk premium (RP) — o equity extra que você precisa, Vanilla vs PKO (RP maior no vanilla), Curva do ICM comparada a um eletrocardiograma, VideoAulas — ICM e Risk Premium (+17 more)

### Community 3 - "Ferramentas PKO (dados)"
Cohesion: 0.06
Nodes (58): All-in não entra na grade, Campo cl: 10 classes de mão (Pa, Pm, Pb, As, Ks, QJs, Sc, Ao, Bo, Oo), Campo grid: 169 células r-c em passos de 5%, Campo rp: Risk Premium hero vs opener, Coleta antiga claude_pko_btn (descartada), Dicionário dos dados das árvores (pko-arvores-btn.json), 4BET Trainer — aba Solver (HRC Library), Nó (árvore + opener; chave única id + op) (+50 more)

### Community 4 - "Third Barrel e C-Bet IP 40bb"
Cohesion: 0.07
Nodes (30): Changelog – C-Bet IP 40bb, Versão 1.0 (05/08/2026) – C-Bet IP 40bb, Referências – C-Bet IP 40bb, Decisões Consolidadas – C-Bet IP 40bb, Módulo 02 — C-Bet IP 40bb, Stack Geometry / Sizing Geométrico, Classificação de Boards (A High, BBX, Conectados, Low, Monotone, Dobrados), Pendências – C-Bet IP + Second Barrel (+22 more)

### Community 5 - "Bet Check Bet e Value Bet"
Cohesion: 0.06
Nodes (33): Solver BCB: validar frequência, sizes e composição dos ranges, Alvo do Bluff (qual parte do range adversário fazer foldar), Blockers dependem do alvo do bluff, Exercício 01 — A♣9♠ em T-7-3-3-Q (High Card, CHECK), Exercício 02 — K♠3♠ com Ás no river (Dinâmico Ax, CHECK), Exercício 03 — J♣T♣ em 9♦5♦T♣K♠4♦ (Dinâmico Flush, BET B70), Exercício 04 — K♦9♦ em Q-2-5-6-T (Blank, BET B70 BLUFF), Exercício 05 — 8♥8♣ em 6♣A♠K♠2♦A♦ (Dobra, BET B70 VALUE) (+25 more)

### Community 6 - "PKO BTN vs Open"
Cohesion: 0.07
Nodes (45): Cobertura do opener e dos blinds (Regra 5), Dead money do bounty (Regra 1), Fase e tamanho do field (Regra 8), Fold, call e raise (Regra 14), Guideline — PKO: BTN contra 1 open, Help Value (Regra 3), Largura do nó: apertado, médio, largo (Regra 12), Ordem de entrada das mãos (Regra 11) (+37 more)

### Community 7 - "Second Barrel IP"
Cohesion: 0.09
Nodes (23): Guideline – C-Bet IP + Second Barrel, Turn Blank, Turn Conectado, Turn High Card, B70, VideoAulas – C-Bet IP + Second Barrel, Flush High Card (B40), Flush Low Card (B70) (+15 more)

### Community 8 - "C-Bet OOP 40bb"
Cohesion: 0.09
Nodes (40): C-Bet OOP (SRP 40bb Flop), CO vs BTN, Guideline — C-Bet OOP, EP vs BTN, Estratégia por Textura do Flop (C-Bet OOP), Módulo 10 — Multiway, Módulo 11 — Value Bet, Monotone CO vs BTN — Check Range (+32 more)

### Community 9 - "Bet vs Missed (regras)"
Cohesion: 0.12
Nodes (43): Escolha de frequência do XR pelo naipe do board/randomizador, Regra 2 — O agressor que deu check não está capado (nenhum board 100%), Regra 15 — Ajuste no jogo short stack, Bet vs missed c-bet (IP após check do agressor no flop), Buckets de frequência (100/75/50/25%), Regra 10 — Os cinco tipos de flop, Regra 12 — Classifique o board pela interação com o range do vilão, Regra 18 — Mais deep: não reabra a ação de graça (+35 more)

### Community 10 - "XR Short Stack"
Cohesion: 0.17
Nodes (36): Regra 1 — C-Bet OOP é Construção de Range, Blockers na Parte Off (Broca com Carta de Paus), Brocas Divididas por BDFD, BTN vs BB, Guideline — XR Short Stack, EP vs BB, Melhores Flush Draws no Call, OESD em Q95: JT XR/C, 108 Call (+28 more)

### Community 11 - "Multiway Pot"
Cohesion: 0.10
Nodes (25): Estratégia antiga baseada em exploits (C-Bet quase-range OOP, Bet-vs-Missed range, overfold), Frequência média de C-Bet do field multiway ≈ 35%, Guideline Multiway Pot, Lead no Turn do BB (B25, exclusivo do multiway), Lead do Small Blind em boards low conectados (estudo futuro), Situação 1 — Hero OOP (agressor pré-flop), Situação 2 — Hero IP (paga o EP, BB também paga), Situação 3 — Hero BB (+17 more)

### Community 12 - "Value Bet (regras)"
Cohesion: 0.10
Nodes (13): Miss Value, Regras Consolidadas – Value Bet Masterclass, Pendência: aula específica sobre Check-Raise ofensivo, Pendência: exercícios formais do módulo 11, Pendência: linkar com módulo 04 (Third Barrel) — Sizing conforme Bloqueio de Valor, Pendências – Value Bet Masterclass, Changelog — Value Bet Masterclass (v1.0), Decisões – Value Bet Masterclass (+5 more)

### Community 13 - "ICM pendências"
Cohesion: 0.10
Nodes (31): ChipEV do LJ e coluna do 8, 9 e 10 — a confirmar, Pendências – ICM e Risk Premium, 27 exercícios de conceito (ICM), Módulo 12 (Reta Final), PKO e bounty (RP negativo) — pendente, Short stack na bolha — pendente, Changelog — ICM e Risk Premium, Referências — ICM e Risk Premium (+23 more)

### Community 14 - "Bet vs Missed (meta)"
Cohesion: 0.08
Nodes (20): Aulas futuras: blind war e c-bet em posição, Método best of best (multiway), Pendências – Bet vs Missed C-Bet, Changelog — Bet vs Missed C-Bet, Guideline em imagem do instrutor (segunda versão), Referências — Bet vs Missed C-Bet, Decisões – Bet vs Missed C-Bet, Glossário (thin value, TS top set, 2P, 3P) (+12 more)

### Community 15 - "C-Bet IP Short (boards)"
Cohesion: 0.14
Nodes (23): Module Standard, B25 (sizing padrão Short Stack), Board A High (A84r) – C-Bet 100%, Board Broadway / BBX (KT6r) – C-Bet ~84%, Board High Card Conectado (J84s) – C-Bet ~52% Split, Board Low (985r) – C-Bet ~55% Split, Frequência de Check Raise do adversário, Guideline – C-Bet IP Short Stack (+15 more)

### Community 16 - "Modelo de domínio KB"
Cohesion: 0.11
Nodes (21): Decision Engine, Hand Analyzer, Strategy Profiles (GTO / Simplified Human / Population Exploit), Board Category, Concept, Example, Exercise, Hand Analysis (+13 more)

### Community 17 - "3BET Pot"
Cohesion: 0.14
Nodes (14): 3BET POT, Boards Low (3BET POT), IP Deep Stack (3BET POT), IP Short: B25 Range Bet / B40 Split / B70 Boards Low, OOP Deep: Board Seco B25-B40, OOP Deep: Board com Sequência B40, OOP Short: Board Seco B25 (range bet), OOP Short: Board Conectado Split B40 (+6 more)

### Community 18 - "Bet Check Bet (texturas)"
Cohesion: 0.16
Nodes (15): B100 Polarizado com Blockers, Bet Check Bet, Dinâmico Ax (B70), Dinâmico Dobra de Carta (B70 / B100), Dinâmico Flush (B70 / B100), Dinâmico High Card (B70 / B100), Dinâmico Sequência (B70 / B100), Range Capado (+7 more)

### Community 19 - "Arquitetura KB"
Cohesion: 0.15
Nodes (13): KB-000 — Poker Knowledge Base Architecture, Confidence Levels (High / Medium / Low), Leak Finder, Poker App, Study Planner, Trainer, Ideal Statistic Range, Leak Definition (+5 more)

### Community 20 - "C-Bet IP pendências"
Cohesion: 0.22
Nodes (16): Pending Validations, Integração com Pós-Flop (Second Barrel, Turn Check Raise), Pendências – C-Bet IP Short Stack, Ajustes para Short Stack (<15bb) em Boards Low, B70, Estratégia CO / BU (quase tudo B25), Estratégia EP / HJ (B40 em Broadway e Conectado), Estratégia Split para Boards Low (B70) (+8 more)

### Community 21 - "C-Bet IP Short (conceitos)"
Cohesion: 0.20
Nodes (10): B40 (maior sizing Short Stack), Realização de Equidade, VideoAulas – C-Bet IP Short Stack, Solver – C-Bet IP Short Stack, SPR baixo, Changelog – C-Bet IP Short Stack (v1.0–1.2), Guideline C-Bet IP 20bbs (fonte principal), Gyazos / Solver (A84r, KT6r, J84s, 985r) (+2 more)

### Community 22 - "Third Barrel decisões"
Cohesion: 0.19
Nodes (12): Blockers Devem Considerar Folds, Defesa Baseada no Sizing, Decisões – Third Barrel, Separação entre Range Polar e Range Linear, Regras de Defesa Simplificadas, Bluff Catchers, Third Barrel — Módulo 04 (README), MDF (Minimum Defense Frequency) (+4 more)

### Community 23 - "XR Deep Stack"
Cohesion: 0.17
Nodes (10): SPR e Construção de Pote, XR Deep Stack, XR por Valor (EP 1-2 / BU 3-4 melhores Top Pairs), Boards Pareados (XR Deep), Board 8♠8♦3♣, Board A♠A♦5♣, Spot Solver: Hero BB vs BTN C-Bet, Fontes do Módulo XR Deep (+2 more)

### Community 24 - "Índice de módulos"
Cohesion: 0.13
Nodes (15): Decision Engine, Documentation Order (ordem de migração), Structural Board Classification (MODULE_FUNDAMENTALS_BOARD_STRUCTURE), C-Bet Flop IP (MODULE_SRP_IP_CBET_FLOP), Second Barrel IP (MODULE_SRP_IP_SECOND_BARREL), Third Barrel IP (MODULE_SRP_IP_THIRD_BARREL), C-Bet Flop OOP (MODULE_SRP_OOP_CBET_FLOP), Second Barrel OOP (MODULE_SRP_OOP_SECOND_BARREL) (+7 more)

### Community 25 - "Gestão de mudanças KB"
Cohesion: 0.16
Nodes (5): KB-001 — Project Architecture, Rule Lifecycle (Active / Simplified / Experimental / Pending Validation / Deprecated / Archived), Change Record, KB-002 — Domain Model, Rule Version

### Community 26 - "XR Deep boards conectados"
Cohesion: 0.20
Nodes (9): Boards Conectados (XR Deep), Board 5♠3♦2♣, Board 9♠6♦3♣, Board K♠Q♦9♣, Board T♦8♦5♣, Board T♠9♠7♦, Exercício J8o em T♠9♠7♦, Exercício K9 em T♦8♦5♣ (+1 more)

### Community 27 - "XR Deep boards secos"
Cohesion: 0.25
Nodes (8): Top Pair no XR Deep, Boards Secos (XR Deep), Showdown Value e Escolha entre XR e XC, Board A♠6♦4♣, Board K♣7♦2♠, Board K♠8♦3♣, Exercício A5s x 96s em K♣7♦2♠, Exercício Q5o em A♠6♦4♣

### Community 28 - "Blefes com equidade"
Cohesion: 0.29
Nodes (7): XR Bluff com Equidade, BDFD + BDSTR8, Construção de Blefes com Equidade (3BET POT), OOP Deep: Board Tx/Jx/98xs B70, Posição Altera o Objetivo da Aposta, Banco de Correções (3BET POT), Erros Principais 3BET POT

### Community 29 - "Naipes em monotone"
Cohesion: 0.40
Nodes (4): Importância dos Naipes, Board A♠7♠3♠, Exercício 64o x 64s em A♠7♠3♠, Suited x Offsuit

### Community 30 - "Turn após XR / 3BET"
Cohesion: 0.50
Nodes (3): Turns após XR Flop (Blank B70+ / Dinâmico B40), Turn 3BET POT (Blank B100 GEO / High Card B40 / Flush B40 / Conecta B70), Banco de Padrões (3BET POT)

## Ambiguous Edges - Review These
- `Solver – C-Bet IP Short Stack` → `Changelog – C-Bet IP Short Stack (v1.0–1.2)`  [AMBIGUOUS]
  theory/01-CBet-IP-Short-Stack/07-Changelog.md · relation: conceptually_related_to
- `Solver – C-Bet IP Short Stack` → `Decisão 3 — Não criar Solver separado`  [AMBIGUOUS]
  theory/01-CBet-IP-Short-Stack/09-Decisoes.md · relation: conceptually_related_to
- `Decisão 01 — Blank utiliza apenas B70` → `Regra 4 — Board Blank de verdade permite size mais alto`  [AMBIGUOUS]
  theory/09-BET-CHECK-BET/09-Decisoes.md · relation: conceptually_related_to
- `Regra 3 — Board esquisito (completa flush/sequência) pede size menor` → `Regra 6 — River blank vs river que muda o nuts`  [AMBIGUOUS]
  theory/11-Value-Bet-Masterclass/01-Guideline.md · relation: conceptually_related_to
- `Regra 4 — Board Blank de verdade permite size mais alto` → `Regra 6 — River blank vs river que muda o nuts`  [AMBIGUOUS]
  theory/11-Value-Bet-Masterclass/01-Guideline.md · relation: conceptually_related_to

## Knowledge Gaps
- **108 isolated node(s):** `Confidence Levels (High / Medium / Low)`, `Strategy Profiles (GTO / Simplified Human / Population Exploit)`, `Board Category`, `Example`, `Mistake Category` (+103 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 152 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Guideline — ICM e Risk Premium` connect `ICM e Risk Premium` to `Reta Final`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Guideline — Probe Turn` (e.g. with `Módulo 05 (C-Bet OOP 40bb)` and `Módulos 03 e 09 (Second Barrel IP e Bet-Check-Bet)`) actually correct?**
  _`Guideline — Probe Turn` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Confidence Levels (High / Medium / Low)`, `Strategy Profiles (GTO / Simplified Human / Population Exploit)`, `Board Category` to the rest of the system?**
  _108 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Probe Turn` be split into smaller, more focused modules?**
  _Cohesion score 0.05934242181234964 - nodes in this community are weakly interconnected._
- **Why does `Guideline — Reta Final` connect `Reta Final` to `ICM e Risk Premium`, `Value Bet (regras)`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._

### Low-confidence Hints
_AMBIGUOUS edges — the extractor was unsure. Verify before acting on these._

- **What is the exact relationship between `Solver – C-Bet IP Short Stack` and `Changelog – C-Bet IP Short Stack (v1.0–1.2)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Solver – C-Bet IP Short Stack` and `Decisão 3 — Não criar Solver separado`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._