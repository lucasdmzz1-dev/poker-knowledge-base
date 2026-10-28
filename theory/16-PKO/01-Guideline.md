# Guideline — PKO: BTN contra 1 open

> **Módulo:** 16 – PKO (versão 1.0)
>
> **Objetivo:** Decidir fold, call ou raise no BTN contra um open em PKO 50%, entendendo como o bounty, os stacks e a fase movem o range.

---

# Contexto

Spot:
Um jogador abre (UTG1 a CO), todos foldam, e o hero está no BTN. Os blinds ainda não agiram.

Stacks:
A regra vale de 10bb a 170bb, mas o stack curto (hero ou opener com 25bb ou menos) ainda não tem regra testada (Parte 5).

Fonte:
Notas do usuário, leitura de árvores do 4BET Trainer e mãos jogadas no Trainer.

---

# Como ler este guideline

Marcações:

- **[Notas]**: informado pelo usuário (conhecimento de mesa).
- **[Árvores]**: medido nas 52 árvores do Trainer (PKO 50%, de ~15% a 95% do field restante).
- **[Trainer]**: testado em mãos reais no Trainer.
- **[Pendente]**: ainda não testado.

Cada regra tem o formato **Faça**, **Por quê** e, quando existe, **Exemplo**.

Siglas:

- **KOI** é o bounty inicial. **SI** é o stack inicial em fichas. **KO** é o bounty atual de um jogador.
- **Help Value** é quanto menos de equity precisamos por causa do bounty.
- **RP** é o Risk Premium (matriz do visualizador, do hero contra o opener).
- **T** é a soma dos sinais de aperto (Parte 4).

---

# Em 30 segundos

1. **O bounty vira dinheiro morto:** (KO do opener ÷ KOI) × SI × valor da fase. Quanto maior em relação ao stack do opener, mais o range alarga.
2. **A ordem de entrada das mãos é estável:** pares, Ax suited, suited broadways e offsuit broadways primeiro.
3. **Alargam o range:** opener mais fundo, opener em posição tardia, cobrir o opener, Help Value alto, RP baixo.
4. **Apertam:** hero curto contra opener fundo, bounty alto do hero para o stack dele, bolha, hero abaixo da média.
5. **Corte:** no nó apertado, as marginais foldam. No largo, entram até gappers e Ax offsuit.
6. **Stack curto:** raise ou all-in no lugar de call. Ainda por testar.

---

# Parte 1 — Como o bounty entra

## Regra 1 — Dead money do bounty **[Notas]**

**Faça:** calcule o bounty que você ganha ao eliminar o opener:

**dead money = (KO do opener ÷ KOI) × SI × valor do KO inicial na fase**

**Por quê:** só entra o que você pode ganhar. O bounty do hero em risco não entra aqui (mas pesa nos sinais de aperto, Regra 13). O SI está em fichas; para comparar com os stacks em bb, divida pelo BB em fichas (ou use stack inicial em bb = média × % do field restante).

**Exemplo:** árvore #2247: 30% do field, média 70,5bb, SI 25K. Stack inicial = 70,5 × 0,30 = 21,2bb. Se o CO tem 3× o KOI, o dead money é 3 × 0,314 × 21,2 ≈ 20bb.

## Regra 2 — Valor do KO inicial por fase **[Notas]**

**Faça:** use esta tabela (PKO 50%), interpolando pelo % do field restante:

| % do field restante | KO inicial ÷ SI |
|---|---|
| 100% | 0,25 |
| 70% | 0,27 |
| 50% | 0,29 |
| 40% | 0,30 |
| 30% | 0,314 |
| 20% | 0,334 |
| 15% | 0,346 |
| 10% | 0,36 |
| 5% | 0,39 |
| 3% | 0,40 |
| 1% | 0,434 |
| Mesa final | 0,46 a 0,47 |
| Heads-up | 0,50 |

**Por quê:** o bounty vale cada vez mais em relação ao stack inicial. Mas os stacks também encolhem em bb. As maiores ampliações vêm no Early e no Mid, onde o dead money é grande em relação ao pote.

## Regra 3 — Help Value **[Notas]**

**Faça:** Help Value = (KO do opener ÷ KOI) ÷ (stack do opener ÷ SI). Leia na régua:

| Help Value | Redução de equity necessária |
|---|---|
| 0,5 | 3% |
| 1 | 5,4% |
| 1,5 | 7,4% |
| 2 | 9,3% |
| 2,5 | 11% |

**Por quê:** é a conta rápida do desconto que o bounty dá. Vale principalmente contra all-in (acesso direto ao bounty), mas é também por isso que o call amplia.

**[Árvores]:** nas árvores, a mediana do Help Value do opener é 0,8 (de 0,4 a 1,9 em 80% dos casos). Dentro de uma mesma árvore, +1,0 de Help Value soma ~3 pontos ao call.

---

# Parte 2 — O que alarga ou aperta o range

## Regra 4 — Stack do opener **[Árvores]**

**Faça:** contra um opener mais fundo, alargue o call. Dobrar o stack do opener soma ~4 pontos ao call e ~5 pontos ao range que continua.

**Por quê:** o sentido do efeito é consistente nos dados, mas a causa exata não foi isolada. As hipóteses são que o opener mais fundo abre mais e dá implícitas maiores.

## Regra 5 — Cobertura **[Notas] [Árvores]**

**Faça:** cobrir o opener (stack do hero ≥ stack dele) dá acesso ao bounty dele: +2 pontos ao call. Cobrir também SB e BB importa, porque se eles jogarem você tem acesso ao bounty deles.

**Por quê:** só quem cobre pode ganhar o bounty. Em alguns casos o usuário paga o range inteiro contra o open para incentivar o BB a jogar a mão.

## Regra 6 — Stack relativo à média e à fase **[Notas]**

**Faça:** olhe o seu stack contra a média do torneio e da mesa. 50bb com média de 90bb é um stack curto; 50bb com média de 25bb é um stack fundo.

**Por quê:** se você perde uma mão no início e fica com metade do stack, o seu bounty (25% do SI) passa a valer metade do seu stack, e os adversários têm desconto grande para jogar contra você. Quanto mais fundo está o hero em relação à média, menos os stacks dos outros "machucam" e maior o incentivo de ir atrás do bounty.

## Regra 7 — Posição do opener **[Árvores] [Notas]**

**Faça:** contra um opener uma posição mais tardia, o range que continua cresce ~1 ponto e o 3bet também.

**Por quê:** o range de open de uma posição mais tardia tende a ser mais largo (hipótese, não medida aqui). Um bounty muito alto do opener de posição inicial pode fazer o range parecer o contra o CO **[Notas]**.

## Regra 8 — Fase e tamanho do field **[Notas]**

**Faça:** use a % do field restante junto com o tamanho do field. Fields grandes (1k ou mais) e pequenos (~200) se comportam diferente.

- As maiores ampliações vêm no **Early e Mid** (Mid vai até ~16% do field restante).
- Depois vem a **bolha**, onde o PKO joga mais apertado (menos fold equity), e depois o late game.
- Em fields menores a faixa de ITM chega mais cedo; use a distância da bolha (jogadores restantes ÷ posições pagas).
- Na **mesa final** do PKO, o RP fica em torno da metade do de um torneio convencional: open e flat com ranges mais largos, menos re-steals e open shoves como short stack e como big stack, mais RFI e defesa de BB.

## Regra 9 — Risk Premium **[Árvores]**

**Faça:** cada ponto a mais de RP do hero contra o opener tira ~0,5 ponto do range que continua. Em RP acima de +1 aperte; perto da bolha (RP +6,7) o range cai a ~20%.

## Regra 10 — SB e BB curtos **[Notas]**

**Faça:** considere "curto" 20bb ou menos. Blinds curtos atrás mudam o incentivo de squeeze e a pressão sobre o seu call.

**Por quê:** nas árvores, o efeito de SB e BB curtos isolado foi pequeno e instável; o peso vem da cobertura e do stack do hero.

---

# Parte 3 — A ordem de entrada das mãos

## Regra 11 — Ordem de entrada **[Árvores]**

**Faça:** pense no range como uma fila. A mão entra quando o nó é largo o bastante.

- **Núcleo (entra já nos nós apertados):** todos os pares, AKo, todos os Ax suited, suited broadways (KQs, KJs, KTs, K9s, QJs, QTs, Q9s, JTs, J9s), K5s a K8s, Q8s, J8s, T9s, T8s, 98s, 97s, 87s, 76s, 65s, 54s, e os offsuit AQo, AJo, ATo, KQo, KJo e QJo.
- **Entram no meio:** K4s, K3s, Q7s, J7s, KTo, QTo, JTo, T7s, A9o, 86s, 75s e 64s.
- **Só nos ranges mais largos:** K2s, Q6s a Q2s, J6s a J4s, T6s, T9o, J9o, Q9o, K9o, 96s, 95s, 85s, 74s, 53s, 43s e Ax offsuit de A8o a A4o.

**Por quê:** esse roteiro prevê quais mãos o solver joga em árvores que ele nunca viu, com F1 de 0,95 (contra 0,85 de um ranking genérico de força).

**Atenção:** com hero curto, parte do "núcleo" (pares 22 a 55 e Kx suited baixos) sai da fila antes (Regra 13).

---

# Parte 4 — Largura do nó e sinais de aperto

## Regra 12 — Largura do nó **[Árvores]**

**Faça:** classifique o range total que continua (call + 3bet) do BTN:

| Nó | Continua | Típico |
|---|---|---|
| Apertado | 13% a 22% | Hero curto, bolha, RP alto |
| Médio | 23% a 30% | Maioria das árvores |
| Largo | 31% a 49% | Hero fundo, early, opener fundo |

## Regra 13 — Sinais de aperto (T) **[Trainer]**

**Faça:** some 1 ponto para cada sinal (T de 0 a 4):

1. Hero com 35bb ou menos **e** opener com pelo menos 1,3× o stack do hero.
2. Bounty do hero alto para o stack dele: (bounty do hero ÷ KOI) ÷ (stack do hero ÷ SI em bb) de 1,6 ou mais.
3. Perto da bolha: jogadores restantes ÷ posições pagas de 2 ou menos.
4. Stack do hero ÷ média do field de 0,6 ou menos.

**Por quê:** nos erros do Trainer (Q8s, K3s, 33, J8s) o range do nó era de 13% a 22%, por hero curto ou coberto, bounty do hero alto e ICM.

---

# Parte 5 — A ação

## Regra 14 — Fold, call e raise **[Trainer]**

**Faça:**
- **Núcleo:** call. Raise nas mãos premium (AA, KK, AKo; às vezes QQ, JJ e TT contra opener fundo).
- **Marginal com T de 2 ou mais:** fold. Com T = 1, pague só se a árvore parecida paga com folga. Com T = 0, siga o nó.
- **Suited gappers** (T8s, 97s, 86s, 75s, 64s, K9s, Q9s, J9s) com T de 2 ou mais: fold na prática.
- **Nó largo (hero fundo, early):** pague as marginais, e até offsuit gappers (Q7o foi call certo contra LJ de 92bb com hero de 52bb).

**Por quê:** na regra v2, 40 de 50 mãos foram PERFEITO, e os 4 pagamentos marginais errados da v1 caíram para 2 (T8s e J7s).

**[Trainer] v3:** em mais 100 mãos, 79 foram PERFEITO e 7 QUASE (86%). As marginais ficaram em 81% e o núcleo em 93%. Os erros foram nos dois sentidos: 5 folds que deviam ser call (Kx e Qx suited baixos em nós largos, com field alto e stacks parecidos) e 4 calls que deviam ser fold. O EV perdido foi pequeno (de 0,01 a 0,17bb por erro).

## Regra 15 — Stack curto: raise e all-in **[Pendente]**

**Faça (a testar):** hero com 25bb ou menos: troque "pagar" por raise ou all-in nos premium e nos pares médios. Nenhuma mão assim apareceu na v3.

**Não usar:** o shove com blockers (A5o a A2o) contra opener curto e coberto. Foi testado em 2 mãos e errou nas duas (A5o contra CO de 16bb: o certo era fold; A3o contra CO de 15bb: o certo era call).

- Premium (AQs, AKs, QQ e acima): raise.
- Blockers (A2o) contra opener curto e coberto: all-in.
- 66 a 99 contra CO com hero curto: all-in.

**Por quê:** os erros da v2 em A2o, AQs e 66 (certo all-in ou raise, eu foldei ou paguei) mostram que, com stack curto, o solver empurra.

---

# Parte 6 — Passo a passo na mesa

1. **Leia o cabeçalho:** % do field, jogadores restantes, posições pagas, média, SI.
2. **Veja os stacks e bounties:** opener, hero, SB e BB. KOI = o menor bounty da mesa.
3. **Calcule:** dead money e Help Value do opener, e a distância da bolha.
4. **Classifique o nó** (apertado, médio ou largo) e some o T.
5. **Ache a mão na ordem de entrada** (Regra 11).
6. **Decida:** núcleo paga; marginal só se o nó for largo e T for baixo; stack curto, pense em raise ou all-in.

---

# Limites

- A regra foi testada só em BTN contra **um open**, no Early e Mid (de ~13% a 95% do field). Não vale para outras posições, contra 3bet, squeeze, mesa final ou bolha de verdade.
- Entre árvores, os fatores explicam só ~25% do call. O que é confiável é a **ordem de entrada** e o sentido dos efeitos (dentro de uma árvore), e não os números exatos.
- Nas 170 mãos testadas (v1, v2 e v3) o modo era **Close Decisions** nas sessões 1 e 2 (a da sessão 3 não foi confirmada).
- Os testes no Trainer foram no modo **Close Decisions** (decisões próximas), com muitas mãos marginais. O placar (84% de precisão e −0,80bb de EV perdido em 70 mãos) não é comparável com o de um modo comum.
- A amostra: 52 árvores, 203 nós e 70 mãos. As diferenças de poucos pontos podem ser sorte.
- Ver `06-Pendencias.md`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/16-PKO/README|README]] · [[theory/16-PKO/04-Exercicios|04-Exercicios]] · [[theory/16-PKO/03-Solver|03-Solver]] · [[theory/16-PKO/02-VideoAulas|02-VideoAulas]] · [[theory/16-PKO/tools/pko/pko-conhecimento|pko-conhecimento]]

<!-- graphify-links:end -->
