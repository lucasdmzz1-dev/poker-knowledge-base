# Notas de PKO (fornecidas pelo usuário) e como entram no modelo

## 1. Valor do KO inicial por fase (PKO 50%), em fração do stack inicial (SI)
Tabela mais fina, que substitui a anterior (a anterior dava 26,7% a 75% e 29% a 50%, coerente com esta).

| % do field restante | KO inicial / SI |
|---|---|
| 100% | 0,25 |
| 70% | 0,27 |
| 50% | 0,29 |
| 40% | 0,30 |
| 30% | 0,314 |
| 20% | 0,334 |
| 15% | 0,346 |
| 10% | 0,36 |
| 7,5% | 0,37 |
| 5% | 0,39 |
| 3% | 0,40 |
| 2% | 0,416 |
| 1% | 0,434 |
| 0,5% | 0,446 |
| Mesa final | 0,46 a 0,47 |
| Heads-up | 0,50 |

Uso: converter o bounty do opener em fichas. Interpolar entre os pontos usando o % do field restante da árvore.

## 1b. Dead money do bounty (fórmula do usuário)
Dead money = (KO total ÷ KO inicial) × stack inicial × valor do KO inicial na fase (tabela da seção 1).

- KO total: o bounty atual do jogador cujo bounty está em jogo (normalmente o opener). KO inicial: "KOi" do cabeçalho da árvore.
- Resultado em fichas, ou em bb ao multiplicar pelo stack inicial em bb.
- Variável `deadKO` por registro. Comparar com o pote (blinds, antes e open) e com o stack do hero e do opener (razão `deadKO / stack`).

## 2. Help Value (aproximação de grind)
Help Value = bounties iniciais ÷ stacks iniciais (do oponente).

| Help Value | Redução de equity necessária |
|---|---|
| 0,5 | 3% (o texto original trazia "-3%", tratado como erro de digitação) |
| 1 | 5,4% |
| 1,5 | 7,4% |
| 2 | 9,3% |
| 2,5 | 11% (o texto original trazia "-11%", tratado como erro de digitação) |

Uso: variável `help` por registro = (bounty do opener ÷ KOi) ÷ (stack do opener ÷ stack inicial). Esperado: quanto maior, maior o call e o range.

## 3. ICM e PKO
- Mesa final: o Risk Premium é cerca de metade do de um torneio convencional. Open e flat com ranges mais largos. Menos FE ao dar all-in. Menos re-steals e open shoves como short stack, menos open shoves como big stack, mais RFI e defesa de BB.
- Início da mesa final: 1º e 2º lugar com o mesmo prêmio não pesam na estratégia.
- Bolha: o Risk Premium pesa menos, mas se joga mais tight porque há muito menos fold equity. Calling ranges, jam e re-steal do PKO são diferentes do vanilla. Pesar os riscos de dobrar ou bustar em spots marginais, principalmente em fields pequenos.

## 4. Variáveis do modelo (por registro: árvore + opener)
- Hero (BTN): stack, bounty. Opener: posição, stack, bounty. SB e BB: stack e bounty.
- Cobertura: hero cobre o opener, opener cobre o hero, hero cobre SB e BB.
- Help Value do opener e do hero. Bounty em fichas (tabela da seção 1).
- Pote (dead money), tamanho do open, % do field restante, fase, fator progressivo.
- Risk Premium do hero contra o opener (matriz de RP do visualizador).
- KOi (bounty inicial, no cabeçalho: "KOi: $125"), stack médio e stack inicial em bb (média × % restante).

## 5. Estado da coleta (27/10/2026)
- 357 registros, 26 árvores únicas, 109 pares árvore+opener únicos. A etiqueta de fase (Mid, Bubble e Late) é inválida: o filtro acumulava as fases.
- Dados no navegador do usuário, no localStorage, chave `claude_pko_btn`.
- Para refazer: fase com seleção única, amostra ampla, sem repetir árvore, capturar KOi, bounties de todos os assentos e RP.

## 6. Cabeçalho da árvore (fonte direta das variáveis)
Exemplo (#2247): 30% do field restante, 38 jogadores restantes, Média 70,5 bb, SI 25K, KOI $250, 15 posições pagas.
- SI (stack inicial, em fichas), KOI (bounty inicial), % do field restante, jogadores restantes, stack médio em bb e posições pagas ficam no cabeçalho.
- Stack inicial em bb = Média × % do field restante (70,5 × 0,30 = 21,2 bb). Confirmado pelo usuário: o cabeçalho tem SI e KOI.
- Em aberto (28/10/2026): nas 52 árvores coletadas, a "Média" fica a menos de 1bb da média dos stacks da mesa (#2247: 70,5 contra 69,6). Pode ser a média da mesa, ou o solver monta a mesa com a média do torneio. Ver o teste na pendência 7 de `retomada-pko.md`.
- Proximidade da bolha = jogadores restantes ÷ posições pagas (variável nova, para fase e ICM).

## 7. Decisões de escopo e definições (respostas do usuário, 27/10/2026)
- Objetivo: entender como o range do BTN amplia ou diminui em PKO, principalmente o call contra um open; melhorar a precisão em jogo; permitir que Claude estime o movimento do range em cenários sugeridos. Não se busca "cravar" ranges, e sim entender para onde o range corre.
- Escopo: BTN contra 1 open. Só PKO com fator progressivo de 50%. Vanilla 40bb (ChipEV) como métrica de comparação.
- Help Value: quanto menos de equity precisamos por causa do bounty (principalmente contra all-in; também justifica ampliações de call).
- Dead money do bounty: só o que podemos ganhar ao eliminar o oponente. O bounty do hero em risco não entra. Stack inicial em fichas.
- Cobertura: cobrir o opener (acesso ao bounty dele) é o principal. Cobrir os stacks à esquerda (SB, BB) também importa, porque se jogarem temos acesso ao bounty deles.
- SB e BB curtos: em geral, 20bb ou menos.
- Fase: as maiores ampliações vêm em Early e Mid, onde o dead money é maior em relação ao stack. Depois o dead money cai em fichas e o ICM pesa mais.
- Stack relativo à média do torneio: 50bb com média de 90bb é diferente de 50bb com média de 25bb.
- Valor do bounty: mais bounty, maior o dead money e mais incentivo para jogar contra. O bounty dos jogadores à esquerda também conta; às vezes se paga o range inteiro contra o open para incentivar o BB a jogar a mão.
- Posição do opener: determinante em conjunto. Contra EP o range é um, contra CO é outro, mas um bounty grande de EP pode levar a jogar como se fosse contra o CO.
- RP: usar contra o opener.
- Coleta: 150 a 200 nós únicos, sem repetir árvore, sem filtro de stack do hero; guardar no navegador (chave claude_pko_btn) e exportar CSV no final; grade completa de 169 mãos em uma amostra de ~40 nós.

## 8. Field size, fase e ITM (respostas do usuário, 27/10/2026)
- O % do field restante deve ser lido junto com o tamanho do field: fields grandes (1k ou mais) se comportam diferente de fields curtos (~200).
- Referência de fase: Mid vai, em geral, até ~16% do field restante; depois vem a bolha; depois o late game. Em fields menores isso muda um pouco. A primeira faixa de ITM (posições pagas) serve de base.
- Variáveis derivadas por árvore: tamanho do field (N0 = jogadores restantes ÷ % restante), posições pagas, % ITM (pagas ÷ N0), distância da bolha (restantes ÷ pagas) e jogadores até o ITM.
- Busca do site que ajuda a amostrar: "15 left" (jogadores restantes), "18toitm" (jogadores até o ITM) e "FT".
- Coleta de teste (5 minutos): 67 nós em 18 árvores. A busca por % é exata (só 45%, 30% e 15% retornaram). Dois nós descartados (#8954 e #7144).

## 9. Resultados da coleta (27/10/2026): BTN contra 1 open, PKO 50%
Amostra: 52 árvores, 203 nós (árvore + opener), 30 grades de 169 mãos com leitura consistente. Field restante de 15% a 80% (nenhuma árvore abaixo de 15%: buscas por FT, 10% e 5% voltaram vazias). Campos de ~100 a mais de 1k jogadores. Dados no navegador do usuário, chave `claude_pko_v2`.

Nota (28/10/2026): o arquivo versionado `dados/pko-arvores-btn.json` tem 208 nós e 41 grades (ver `pko-arvores-dicionario.md`). Os números desta seção foram calculados sobre 203 nós e 30 grades. Ao refazer a análise com o arquivo, conferir se os efeitos mudam.

Efeitos dentro da mesma árvore (isola o opener; efeitos em pontos percentuais do range do BTN):
- Help Value do opener +1,0 (mediana 0,8; 10% a 90%: 0,4 a 1,9): call +3,1, continua +3,8, 3bet +0,7.
- Stack do opener ×2: call +3,8, continua +4,7, 3bet +0,9.
- Cobrir o opener: call +2,2, continua +2,3, 3bet +0,1.
- RP do hero contra o opener +1 ponto: call −0,2, continua −0,5, 3bet −0,4.
- Opener uma posição mais tarde: continua +1,1, 3bet +1,1, call ≈ 0.
- R² dentro da árvore: continua 0,69, 3bet 0,40, call 0,29.

Entre árvores (validação por árvore): stacks do hero e do opener e RP explicam ~25% do call e da frequência que continua; fase, preço e cobertura de SB e BB têm efeito pequeno; o bounty não se isolou entre árvores; o 3bet não se prevê em árvores novas (R² negativo).

Ordem de entrada das mãos (terços da frequência que continua: ~24%, ~29%, ~41%):
- Sempre: todos os pares, AKo e todos os Ax suited, suited broadways, K5s+, Q8s+, J8s+, T8s+, 97s+, 87s, 76s, 65s, 54s, AQo, AJo, ATo, KQo, KJo, QJo.
- Entram no meio: K4s, K3s, Q7s, J7s, KTo, QTo, JTo, T7s, A9o, 86s, 75s, 64s.
- Só nos ranges mais largos: K2s, Q6s a Q2s, J6s a J4s, T6s, K9o, Q9o, J9o, T9o, 96s, 95s, 85s, 74s, 53s, 43s e Ax offsuit de A8o a A4o.

Cuidados: nós com hero curto têm all-in na grade (cor diferente), por isso 10 grades foram descartadas; os totais (fold e call) vêm do resumo do site e são confiáveis.
