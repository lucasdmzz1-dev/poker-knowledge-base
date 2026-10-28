# CLAUDE.md — Poker Knowledge Base

Este repositório é uma base de conhecimento de poker (torneios, ChipEV, foco em 20-40bb, formato Bounty/KO). Todo o conteúdo é em português. O dono estuda com aulas de um coach, solver (GTOWizard, Preflop Academy) e revisão das próprias mãos. Seu trabalho aqui é organizar e refinar esse conhecimento sem perder nada do que já foi validado.

## Regras gerais

1. **Nunca substitua conteúdo existente.** Novo conteúdo entra dentro dos módulos, em seções novas ou ampliando as existentes. Antes de editar, leia o módulo inteiro.
2. **Se o novo material contradiz algo que já existe, não sobrescreva.** Aponte o conflito na resposta e registre em `06-Pendencias.md`.
3. **Não invente.** Frequências, ranges e regras só entram se vierem de uma fonte do dono (aula, guideline, solver, correção do coach). Inferências suas devem estar marcadas como "inferência" e ficar separadas das regras. Dúvidas viram itens em `06-Pendencias.md`.
4. **Não copie transcrições.** Aulas chegam como transcrição (.txt e .srt). Leia tudo, extraia os princípios e escreva com suas próprias palavras. Nada de trechos longos literais.
5. **Não adicione conhecimento externo.** O módulo só contém o que veio das fontes dele (ver `08-Referencias.md`).
6. **Trabalhe numa branch e abra um pull request.** O dono revisa o diff antes do merge.
7. **Responda em português.**

## Estrutura do repositório

- `theory/NN-Nome-do-Modulo/` — um módulo por tema, numerado.
- `theory/_TEMPLATE/` — modelo de módulo.
- `docs/00-Architecture/` — arquitetura do KB (KB-000 a KB-003). Leia antes de mudar estrutura, IDs ou nomes.

Módulos existentes (confira a pasta `theory/` para o estado atual):

- 01 C-Bet IP Short Stack (20bb)
- 02 C-Bet IP 40bb
- 03 Second Barrel IP
- 04 Third Barrel e Vs Third Barrel
- 05 C-Bet OOP 40bb (inclui Second Barrel OOP)
- 06 XR Short
- 07 XR Deep
- 08 3Bet Pot
- 09 Bet-Check-Bet
- 10 Multiway Pot
- 11 Value Bet Masterclass (transversal: princípios de sizing e valor que se aplicam por cima dos outros módulos)
- 12 Reta Final (pré-flop e pós-flop da reta final: 3bet, shove vs open, flat, squeeze, 3-handed)
- 13 ICM e Risk Premium (complemento do 12: o RP por trás das decisões e os ajustes por quem cobre quem)
- 14 Probe Turn (BB fora de posição no turn depois de check-check no flop, BTN vs BB 40bb)
- 15 Bet vs Missed C-Bet (flop em posição quando o agressor dá check: frequências 100/75/50/25, sizes B25 e B50 e cinco tipos de flop)
- 16 PKO (BTN contra 1 open em PKO 50%: bounty, Help Value, stacks, cobertura, fase e ordem de entrada das mãos)

Ainda não existem módulos próprios de pré-flop para o torneio em geral (RFI/open jam, 3bet, squeeze). O módulo 12 cobre esses spots só na reta final. Quando os módulos gerais forem criados, a fonte primária será solver (Preflop Academy, GTOWizard), não aula.

## Padrão de um módulo (10 arquivos)

| Arquivo | Função | Convenção |
|---|---|---|
| `README.md` | Visão geral | Contexto, objetivo, conceito central, estrutura, resultado esperado, status |
| `01-Guideline.md` | Estratégia oficial | Por textura de board ou por posição; cada bloco com size, estratégia e justificativa |
| `02-VideoAulas.md` | Conteúdo das aulas | Explicação conceitual em prosa, com o "por quê" |
| `03-Solver.md` | Validação por solver | Por board: valor, bluff, call, com combos reais de exemplo |
| `04-Exercicios.md` | Prática | Contexto, objetivo, exercícios com Pergunta e Correção |
| `05-Regras-Consolidadas.md` | Destilação final | Regras numeradas ("Regra N"), resumo operacional e regra principal do módulo |
| `06-Pendencias.md` | O que falta | Itens numerados |
| `07-Changelog.md` | Histórico | Versão, fonte, o que foi adicionado |
| `08-Referencias.md` | Fontes | Lista de fontes e ordem de prioridade |
| `09-Decisoes.md` | Meta-decisões | Decisões numeradas sobre como o módulo foi estruturado |

Ordem de prioridade em caso de conflito entre fontes: correção do instrutor, solver, videoaula, guideline, exercícios.

## Estilo dos arquivos

- Título `# Assunto — Nome do Módulo`, seguido de `> Módulo NN — ...` quando o arquivo já usa esse formato.
- Separador `---` entre seções.
- Bloco de **Contexto** (Stack, Spot, Posição, Relações, Street, Fonte) no topo dos arquivos principais.
- Sempre mostrar um board de exemplo antes da estratégia daquela textura.
- Regras como "Regra N", numeradas em sequência, nunca frases soltas. Ao adicionar regras, continue a numeração existente do arquivo.
- Mantenha o tom e a formatação do arquivo que está editando.

## Como processar uma aula nova

O dono fornece transcrição (.txt), legenda (.srt) e, às vezes, guideline. Procedimento:

1. Leia o módulo de destino inteiro e os módulos vizinhos relacionados.
2. Leia a transcrição e o guideline.
3. Cruze o material novo com o que já existe: o que é novo, o que reforça, o que contradiz.
4. Atualize os arquivos afetados: Guideline, VideoAulas, Regras Consolidadas, Pendências, Referências e, se houver decisão estrutural, Decisões.
5. Registre uma nova versão no `07-Changelog.md` com a fonte e o que foi adicionado.
6. Se o tema é transversal ou toca outro módulo, adicione referência cruzada em vez de duplicar conteúdo (por exemplo, sizing de valor aponta para o módulo 11).
7. Na resposta, resuma o que mudou e liste conflitos e dúvidas.

Se só há guideline, sem aula, deixe `02-VideoAulas.md` intacto e registre a falta em `06-Pendencias.md`.

## Exercícios e exemplos

Os erros mais comuns ao montar exemplos de mão, que já foram apontados pelo dono:

- **Conferir carta a carta antes de escrever.** Se a mão é "duas pontas", "flush draw" ou "sequência feita", confirme com o board completo. Exemplo de erro: 76 em 9-8-5 é sequência feita, não draw.
- **Especificar sempre o board completo e os naipes.** "Blocker" e "backdoor" dependem do board exato. Se o enunciado diz "dois naipes de espadas no board", o board precisa ter duas espadas.
- **Nunca confundir métricas de HUD.** VPIP e PFR vêm nessa ordem. Antes de usar um número, confirme a notação (WWSF, AP, Pfa) e qual stat ele representa.
- Exercício segue o padrão: contexto, pergunta, correção e a regra extraída, referenciando as Regras Consolidadas.

## Dados de stats e leaks

Tabelas de HUD (LeakScope, Preflop Academy) e acompanhamentos semanais do dono não fazem parte dos módulos de teoria. Se forem versionados, ficam fora de `theory/` (por exemplo numa pasta `coaching/`) e nunca alteram regras sozinhos. Só uma correção do coach ou do solver muda uma regra.

Nesse repositório esses arquivos ficam em `coaching/stats/`. Antes de trabalhar com stats, HUD, leaks ou evolução, ler `coaching/stats/retomada-stats.md` (resumo, fonte dos dados, resultados principais e lista de arquivos). O painel de evolução, a planilha de call open contra o solver e os JSONs ficam na mesma pasta.

## Módulos que devem ser lidos juntos

- **Reta final = módulos 12 e 13.** O módulo 13 (ICM e Risk Premium) é complemento do módulo 12 (Reta Final). Sempre que a tarefa envolver reta final, leia e considere os dois: o 12 diz o que fazer em cada spot, e o 13 explica o risk premium por trás e como ajustar conforme quem cobre quem. Ao criar ou alterar conteúdo de um deles, verifique se o outro precisa de atualização ou de referência cruzada.
- **Todos os módulos tratam de como jogar.** Fora os pares complementares acima, os módulos não dependem uns dos outros, mas se relacionam. Ao analisar uma situação, considere todos os módulos que se aplicam (por exemplo, o probe turn, o módulo 14, conversa com os módulos 05, 06, 07, 10 e 11).

## Estudo PKO (BTN contra um open) em andamento
Módulo: `theory/16-PKO/`. Arquivos de trabalho em `theory/tools/pko/`. Antes de trabalhar nisso, ler: `theory/tools/pko/retomada-pko.md` (resumo e pendências), `theory/tools/pko/regras-vivas-pko-btn.md` (regra atual, placar por versão e erros), `theory/tools/pko/pko-conhecimento.md` (definições de PKO e resultados das árvores), `theory/tools/pko/pko-solver-playbook.md` (como ler o 4BET Trainer pelo Chrome), `theory/tools/pko/pko-maos-dicionario.md` (colunas do registro) e `theory/tools/pko/pko-maos-jogadas.csv` (mãos já jogadas), `theory/tools/pko/pko-arvores-dicionario.md` e `theory/tools/pko/dados/pko-arvores-btn.json` (nós das árvores do solver: 208 nós, 52 árvores). Ao fim de cada sessão, atualizar o placar e anexar as mãos ao CSV. Não tratar a regra como definitiva: ela foi testada só em BTN contra um open.
