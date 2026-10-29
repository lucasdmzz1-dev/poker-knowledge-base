# Dicionário dos dados das árvores de RFI

Cada situação de RFI guarda as árvores lidas em dois lugares:
- `<formato>/rfi/<posicao>/<stack>bb/arvores/<id>.md`: ficha legível de cada árvore.
- `<formato>/rfi/<posicao>/<stack>bb/dados/arvores.json`: os mesmos dados em formato de análise, um registro por árvore.

`<formato>` é `vanilla` ou `pko`. Os dois nunca se misturam na mesma situação nem no mesmo JSON: o range do PKO depende dos bounties, e o do Vanilla não.

O formato segue o das árvores de PKO (`theory/tools/pko/pko-arvores-dicionario.md`), adaptado para RFI: não há opener, e as ações do hero são fold, raise e all-in.

## Vanilla e PKO: o que muda
| | Vanilla | PKO |
|---|---|---|
| Pasta | `vanilla/` | `pko/` |
| `tipo` | `Vanilla` | `Bounty` |
| `fator_ko` | não existe | fator progressivo (por exemplo 50%) |
| `koi` | não existe | bounty inicial ($), do cabeçalho; se não vier, o menor bounty da mesa |
| `seats` | posição → stack em bb | posição → `[stack em bb, bounty em $]` |
| Derivadas | stacks, cobertura, bolha | as mesmas + Help Value e dead money do bounty de SB e BB |

Em Vanilla não se grava nenhum campo de bounty (nem como `null`).

Campo sem leitura fica `null` no JSON e "pendente" na ficha. Nunca preencher por estimativa.

## Campos de cada registro
| Grupo | Campo | O que é |
|---|---|---|
| Identificação | `id` | ID da árvore (por exemplo `#4772`). Digite no Solver para reabrir. |
| | `busca` | Termo de busca usado (por exemplo "BTN 15"). Só rastreia a amostragem. |
| Filtros | `tipo`, `fase_filtro`, `stacks_filtro` | Tipo de torneio (`Vanilla` ou `Bounty`), fase marcada no filtro e tipo de stacks (Asymmetric...). |
| | `fator_ko` | **Só PKO.** Fator progressivo do bounty (por exemplo 50). |
| Torneio | `estrutura` | Estrutura mostrada no cabeçalho (por exemplo "Regular"). |
| | `pct`, `left`, `paid` | % do field restante, jogadores restantes e posições pagas. |
| | `campo_n0` | Tamanho do field no início (`left` ÷ `pct` × 100), calculado. |
| | `media` | Stack médio do field, em bb. |
| | `si` | Stack inicial (fichas). |
| | `koi` | **Só PKO.** Bounty inicial ($). |
| | `ante_bb` | Ante em bb, se o cabeçalho mostrar. |
| Mesa | `seats` | Todos os assentos: UTG, UTG1, MP, LJ, HJ, CO, BTN, SB, BB. **Vanilla:** posição → stack em bb. **PKO:** posição → `[stack em bb, bounty em $]`. |
| | `hero` | Posição do hero (aqui sempre `BTN`). |
| | `hs` | Stack do hero no cabeçalho do range (bb). |
| | `pot` | Pote antes da ação do hero (blinds + antes), em bb. |
| Risk Premium | `rp_sb`, `rp_bb` | `[RP do hero contra o jogador, RP do jogador contra o hero]`, em %, lidos na matriz de RP. São os únicos que importam no RFI do BTN. |
| Range (totais) | `f`, `r`, `ai` | Fold, raise e all-in (%) da faixa "BTN RANGE". Somam 100. |
| | `r_size` | Tamanho do raise (bb), por exemplo 2. |
| Range (classes) | `cl` | Para 10 classes, `[raise%, all-in%]` ponderado por combos: `Pa` (AA a TT), `Pm` (99 a 66), `Pb` (55 a 22), `As` (Ax suited), `Ks` (Kx suited), `QJs` (Qx e Jx suited), `Sc` (suited conectados e gappers), `Ao` (Ax offsuit), `Bo` (broadways offsuit), `Oo` (outros offsuit). |
| Range (grade) | `grid` | 169 células na ordem de linha da grade (AA, AKs, AQs, ..., A2s, AKo, KK, KQs, ...). Cada célula é `r-a` em passos de 5% (`r` = raise, `a` = all-in; fold = 20 − r − a). |
| Controle | `obs` | Algo fora do padrão (cabeçalho incompleto, cor não reconhecida, grade descartada). |

## Derivadas (calculadas na análise, não gravadas)
- Stack inicial em bb = `media` × `pct` ÷ 100.
- Stack do hero ÷ média do field = `hs` ÷ `media`.
- Cobertura: o hero cobre o SB (`hs` ≥ stack do SB) e o BB. No RFI do BTN são os únicos que jogam depois.
- Stack efetivo contra os blinds = menor entre `hs` e o maior stack entre SB e BB.
- Blinds curtos: SB ou BB com 20bb ou menos.
- Distância da bolha = `left` ÷ `paid`.
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
