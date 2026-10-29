# Retomada do estudo de PKO (resumo para uma conversa nova)

Atualizado em 27 e 28/10/2026. Leia este arquivo primeiro, depois `regras-vivas-pko-btn.md`.

## O que existe
- **Módulo 16 (PKO):** `theory/16-PKO/` (v1.2), 10 arquivos, 39 exercícios.
- **Arquivos de trabalho:** `theory/tools/pko/` — `regras-vivas-pko-btn.md` (regra atual v3, placar, erros, ideias para a v3.1), `pko-maos-jogadas.csv` (170 mãos, 42 colunas), `pko-maos-dicionario.md`, `pko-conhecimento.md` (notas do usuário e resultados das árvores), `pko-solver-playbook.md`, `pko-arvores-dicionario.md`. Dados das árvores: `theory/tools/pko/dados/pko-arvores-btn.json` (208 nós, 52 árvores).
- **Painéis e planilhas anteriores** (fora do repositório): painel de evolução e painel de call open contra o solver, com os links publicados.

## Resultados principais
- Um bom call open do BTN em PKO Early e Mid é de ~18% a 19% (faixa de 15% a 22%), com 3bet de ~9%. O HUD do usuário mostra ~10% de call open no BTN: o gap é de uns 8 pontos.
- A ordem de entrada das mãos generaliza (F1 de 0,95 em árvores novas). O tamanho do range de um node entre árvores explica só ~25%.
- Regra v3 no Trainer (100 mãos): 79 perfect, 7 near-perfect, 1 inaccuracy, 3 mistakes, 10 blunders. Precisão de 86%, EV perdido de 0,73bb.
- Mãos para focar no BTN (grade já gerada): QJo, Q8s, K6s, K5s, T8s, 87s (agora); JTo, A9o, K3s, J7s, KTo, Q7s, 86s, 75s, 64s, K4s (depois); Ax e Kx offsuit baixos só em nodes wide.

## Preferências do usuário
Explicações em português, com os termos de poker em inglês (node, range width, flat, 3-bet, bubble, ITM, risk premium...). Respostas diretas e curtas.

## Pendências
1. Stack curto (hero com 25bb ou menos): nenhuma mão apareceu; testar raise e all-in nos premium e pares médios.
2. Shove com blockers: descartado (errou 2 em 2).
3. Hipóteses da v3.1 (seção 8 das regras vivas): não apertar Kx e Qx suited baixos em nodes wide; premium raise contra opener fundo e call contra opener muito curto.
4. Confirmar a `config_trainer` da sessão 3 e os valores "−3%" e "−11%" da régua de Help Value (lidos como 3% e 11%).
5. Completar o cenário das 65 mãos antigas com o "Exportar Estatísticas" do Trainer.
7. **"Média" do cabeçalho: do torneio ou da mesa?** Nas 52 árvores de `dados/pko-arvores-btn.json`, a "Média" fica a menos de 1bb da média dos stacks sentados (#2247: 70,5 contra 69,6); o mesmo nas árvores de RFI. Pode ser a média da mesa, ou o solver monta a mesa com a média do torneio (aí a fórmula do stack inicial em bb segue certa). Teste: média do field em bb = SI ÷ (BB em fichas × % restante); comparar com a "Média" numa árvore que mostre SI e o blind em fichas. Só se o teste falhar, rever stack inicial em bb, Help Value, dead money e o sinal de bounty alto da regra.
6. `graphifyy`: não foi instalado (o ambiente do chat não tinha rede). Instalar no terminal do usuário: `uv tool install graphifyy` e `graphify install --project`.

## Notas técnicas (Chrome conectado)
- O Chrome só controla abas do grupo da sessão; abra o site em uma aba nova (`https://4bet-trainer.netlify.app/`).
- Os dados ficam no `localStorage` do site: `claude_pko_v2` (árvores), `claude_pko_hands_s2` e `claude_pko_hands_s3` (mãos). Se o usuário limpar os dados do site, valem os arquivos do repositório.
- Saída do JavaScript limitada a ~1000 caracteres. Para ler volumes maiores, escreva o texto dentro do elemento `main` e use `get_page_text`.
- Clicar em uma mão do histórico exige clique real (coordenadas), não `.click()` por script.
- "View Solver Solution" abre a árvore em uma aba nova (`/tree/ID`). Na busca do Solver, `#ID` abre a árvore; a busca por % do field é exata.
- Não há credenciais nem uso da API interna do site (ela exige login).
