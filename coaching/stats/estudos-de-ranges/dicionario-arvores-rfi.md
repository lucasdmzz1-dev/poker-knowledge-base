---
tags:
  - tema/stats
  - tema/ranges
---

# Dicionário dos dados das árvores de RFI

Cada combinação de filtros guarda as árvores lidas em dois lugares (estrutura completa no `README.md` desta pasta):
- `<acao>/<posicao>/<stack>bb/<formato>/<fase>/arvores/<id>.md`: ficha legível de cada árvore.
- `<acao>/<posicao>/<stack>bb/<formato>/<fase>/dados/arvores.json`: os mesmos dados em formato de análise, um registro por árvore.

Depois de gravar, rodar `python gerar-indice.py` para atualizar o índice geral (`indice.md` e `indice.csv`).

`<formato>` é `vanilla` ou `pko`. Os dois nunca se misturam na mesma situação nem no mesmo JSON: o range do PKO depende dos bounties, e o do Vanilla não.

O formato segue o das árvores de PKO (`theory/tools/pko/pko-arvores-dicionario.md`), adaptado para RFI: não há opener, e as ações do hero são fold, raise e all-in.

## Vanilla e PKO: o que muda
| | Vanilla | PKO |
|---|---|---|
| Pasta (nível formato) | `vanilla/` | `pko/` (fator 50%; outro fator: `pko70`, `pko75`) |
| `tipo` | `Vanilla` | `Bounty` |
| `fator_ko` | não existe | fator progressivo (por exemplo 50%) |
| `koi` | não existe | bounty inicial ($), do cabeçalho; se não vier, o menor bounty da mesa |
| `seats` | posição → stack em bb | posição → `[stack em bb, bounty em $]` |
| Derivadas | stacks, cobertura, bolha | as mesmas + Help Value e dead money do bounty de SB e BB |

Em Vanilla não se grava nenhum campo de bounty (nem como `null`).

Campo sem leitura fica `null` no JSON e "pendente" na ficha. Nunca preencher por estimativa.

## Identificação do spot (obrigatória em toda árvore)
Um "BTN com 15bb" muda conforme o formato, a fase, o field, os blinds e os stacks em volta. Por isso toda ficha começa com uma linha de resumo do spot e o bloco abaixo. Sem esses campos, a árvore não pode ser comparada com outra.

| O que diferencia | Campos | Exemplo |
|---|---|---|
| Formato | `tipo` (Vanilla ou PKO); em PKO, `fator_ko` e `koi` | Vanilla |
| Fase do torneio | `fase` (classificada), `pct` (% do field restante), `left`, `paid`, `ate_itm`, `dist_bolha` | Early, 60% restante, 116 restantes, 51 pagos |
| Tamanho do field | `campo_n0` e de onde veio (`campo_n0_fonte`: cabeçalho ou calculado) | ~193 (calculado) |
| Blinds | `sb_fichas`, `bb_fichas`, `ante_fichas`, `ante_bb` | SB/BB, ante (fichas) |
| Efetivo do torneio | `media` ("Média" do cabeçalho; em aberto se é do torneio ou da mesa) e `media_field` | ver `media` abaixo |
| Hero | `hs` (bb), `hs_fichas`, `hs` ÷ média | 15,9bb |
| Mesa | `seats` (todos os assentos), `n_mesa` (jogadores sentados), `tavg` (média da mesa), maior e menor stack da mesa | nº de jogadores, média da mesa (bb) |
| Quem joga depois | stacks de SB e BB, quem cobre o hero, efetivo contra os blinds | stack do SB e do BB, se cobrem o hero |
| ICM | `rp_sb`, `rp_bb`; filtros de reta final | RP do hero contra SB e BB |

Linha de resumo da ficha, sempre neste formato:
`<formato> | <fase> (<pct>% restante) | field <n0> | <left> restantes, <paid> pagos | blinds <sb>/<bb> a<ante> | média <media>bb | BTN <hs>bb | SB <x>bb · BB <y>bb`

Os exemplos da tabela com números vêm da árvore #3336; os demais são só o nome do que gravar.

### Fase (`fase`)
- `fase_filtro`: o filtro marcado na busca do Solver (rastreia a amostragem, não é a fase real).
- `fase_header`: a fase mostrada na própria árvore, se o site mostrar.
- `fase`: a fase classificada, sempre gravada junto do `pct`. Referência do usuário (`theory/tools/pko/pko-conhecimento.md` §8): Mid vai até ~16% do field restante; depois vem a bolha; depois o late game (ITM) e a mesa final. Em fields menores isso muda um pouco.
- **Pendente:** o limite entre Early e Mid ainda não foi definido pelo usuário. Até lá, gravar `fase` = `fase_header` (ou `fase_filtro`, marcando em `obs`) e sempre o `pct`.

## Campos de cada registro
| Grupo | Campo | O que é |
|---|---|---|
| Identificação | `id` | ID da árvore (por exemplo `#4772`). Digite no Solver para reabrir. |
| | `busca` | Termo de busca usado (por exemplo "BTN 15"). Só rastreia a amostragem. |
| Filtros | `tipo`, `fase_filtro`, `stacks_filtro` | Tipo de torneio (`Vanilla` ou `Bounty`), fase marcada no filtro e tipo de stacks (Asymmetric...). |
| | `fator_ko` | **Só PKO.** Fator progressivo do bounty (por exemplo 50). |
| | `reta_final` | Filtros de reta final marcados (bolha, mesa final...), ou `null` se nenhum. |
| Torneio | `estrutura` | Estrutura mostrada no cabeçalho (por exemplo "Regular"). |
| | `fase_header`, `fase` | Fase mostrada na árvore e fase classificada (ver "Fase" acima). |
| | `pct`, `left`, `paid` | % do field restante, jogadores restantes e posições pagas. |
| | `campo_n0`, `campo_n0_fonte` | Tamanho do field no início e a fonte: `cabecalho` (se o site mostrar) ou `calculado` (`left` ÷ `pct` × 100). |
| | `media` | "Média" do cabeçalho, em bb. **Em aberto:** nas árvores lidas ela coincide com a média dos stacks da mesa (até 1bb). Pode ser a média da mesa, ou o solver monta a mesa com a média do torneio (aí é as duas coisas). Para decidir, teste: média do field em bb = SI ÷ (BB em fichas × % restante); se bater com a "Média", ela é do torneio. |
| | `media_field` | Efetivo do torneio, se o site mostrar em outro lugar ou se o teste acima confirmar que a "Média" é do torneio; senão `null`. |
| | `si` | Stack inicial (fichas). |
| Blinds | `sb_fichas`, `bb_fichas`, `ante_fichas` | Blinds e ante do nível, em fichas. |
| | `koi` | **Só PKO.** Bounty inicial ($). |
| | `ante_bb` | Ante em bb, se o cabeçalho mostrar. |
| Mesa | `seats` | Todos os assentos: UTG, UTG1, MP, LJ, HJ, CO, BTN, SB, BB. **Vanilla:** posição → stack em bb. **PKO:** posição → `[stack em bb, bounty em $]`. |
| | `hero` | Posição do hero (aqui sempre `BTN`). |
| | `hs`, `hs_fichas` | Stack do hero no cabeçalho do range (bb) e em fichas, se aparecer. |
| | `n_mesa` | Número de jogadores sentados (9, 8, 7...). |
| | `tavg` | Média dos stacks da mesa (bb), calculada dos `seats`. |
| | `pot` | Pote antes da ação do hero (blinds + antes), em bb. |
| Risk Premium | `rp_sb`, `rp_bb` | `[RP do hero contra o jogador, RP do jogador contra o hero]`, em %, lidos na matriz de RP. São os únicos que importam no RFI do BTN. |
| Range (totais) | `f`, `r`, `ai` | Fold, raise e all-in (%) da faixa "BTN RANGE". Somam 100. |
| | `r_size` | Tamanho do raise (bb), por exemplo 2. |
| Range (classes) | `cl` | Para 10 classes, `[raise%, all-in%]` ponderado por combos: `Pa` (AA a TT), `Pm` (99 a 66), `Pb` (55 a 22), `As` (Ax suited), `Ks` (Kx suited), `QJs` (Qx e Jx suited), `Sc` (suited conectados e gappers), `Ao` (Ax offsuit), `Bo` (broadways offsuit), `Oo` (outros offsuit). |
| Range (grade) | `grid` | 169 células na ordem de linha da grade (AA, AKs, AQs, ..., A2s, AKo, KK, KQs, ...). Cada célula é `r-a` em passos de 5% (`r` = raise, `a` = all-in; fold = 20 − r − a). |
| Controle | `obs` | Algo fora do padrão (cabeçalho incompleto, cor não reconhecida, grade descartada). |

## Derivadas (calculadas na análise, não gravadas)
- Stack inicial em bb = `media` × `pct` ÷ 100 (vale se a "Média" for do torneio; ver `media`).
- Stack do hero ÷ média = `hs` ÷ `media`.
- Cobertura: o hero cobre o SB (`hs` ≥ stack do SB) e o BB. No RFI do BTN são os únicos que jogam depois.
- Stack efetivo contra os blinds = menor entre `hs` e o maior stack entre SB e BB.
- Blinds curtos: SB ou BB com 20bb ou menos.
- Distância da bolha = `left` ÷ `paid`. Jogadores até o ITM (`ate_itm`) = `left` − `paid`. % pago = `paid` ÷ `campo_n0`.
- Maior e menor stack da mesa, e quantos jogadores da mesa cobrem o hero.
- Open total = `r` + `ai` (= 100 − `f`).
- **Só PKO:** Help Value de SB e BB = (bounty ÷ `koi`) ÷ (stack ÷ stack inicial em bb). Dead money do bounty, bounty do hero em relação ao stack dele, e tabela de valor do KO por fase: ver `theory/tools/pko/pko-conhecimento.md`.

## Cuidados
- **All-in na grade:** a cor do all-in é diferente da do raise. Antes de gravar a grade, conferir que a soma da grade bate com `f`, `r` e `ai` do resumo (diferença de até 3 pontos). Se não bater, gravar só os totais e anotar em `obs`.
- **Cabeçalho incompleto:** nem toda árvore mostra SI, KOI (PKO) ou ante. Deixar `null`.
- **Conferir o tipo antes de gravar:** uma árvore Bounty nunca entra numa pasta `vanilla/`, e vice-versa. Se a busca misturar os dois, separar pelo filtro de tipo.
- **Fase:** `fase_filtro` é o filtro marcado na busca. A fase real vem de `pct`, `left` e `paid`.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[coaching/stats/estudos-de-ranges/README|coaching/stats/estudos-de-ranges]]

**Mesma pasta:** [[coaching/stats/estudos-de-ranges/playbook-coleta-rfi|playbook-coleta-rfi]]

<!-- graphify-links:end -->
