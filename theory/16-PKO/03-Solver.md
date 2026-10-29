---
tags:
  - modulo/16-pko
  - tema/pko
  - street/preflop
  - posicao/ip
  - tema/icm
  - tipo/solver
---

# Solver — PKO

## Módulo 16 — PKO

---

# Contexto

Dados lidos do 4BET Trainer (aba Solver): BTN contra um open, PKO 50%. A comparação de base é o ChipEV 40bb do GTO Wizard.

---

# Comparação com o Vanilla (BTN contra CO)

| Situação | Fold | Call | 3bet |
|---|---|---|---|
| Vanilla ChipEV 40bb | 75,1% | 15,1% | 9,8% |
| PKO #5844 (Early, bounties de $5, BTN 48bb) | 72,7% | 20,7% | 6,7% |
| PKO #7067 (43% do field, bounties de $125 a $375, BTN 52,8bb, SB 14,8bb e BB 27,9bb) | 69,4% | 17,1% | 13,5% |

O mesmo spot muda muito entre árvores. Na #7067 o 3bet dobra e a composição troca: AQo passa de 100% call para 100% 3bet; KJs, JTs, K8s e 97s viram 3bet; A5o, A7o e A8o entram como blefe de 3bet.

---

# Efeitos dentro de uma mesma árvore (isola o opener)

Pontos percentuais do range do BTN, por árvore (50 árvores):

| Variável | Call | Continua | 3bet |
|---|---|---|---|
| Help Value do opener +1,0 (mediana 0,8) | +3,1 | +3,8 | +0,7 |
| Stack do opener ×2 | +3,8 | +4,7 | +0,9 |
| Cobrir o opener | +2,2 | +2,3 | +0,1 |
| RP do hero +1 ponto | −0,2 | −0,5 | −0,4 |
| Opener uma posição mais tarde | ≈ 0 | +1,1 | +1,1 |

R² dentro da árvore: continua 0,69, 3bet 0,40, call 0,29.

---

# Efeitos entre árvores (validação por árvore)

- Stacks do hero e do opener e o RP explicam ~25% do call e do range que continua.
- Fase, preço (pote ÷ open) e cobertura de SB e BB têm efeito pequeno.
- O bounty não se isolou entre árvores.
- O 3bet não se prevê em árvores novas (R² negativo).
- O teste com árvores deixadas de fora: a ordem dos openers por frequência que continua foi igual à de usar só a posição (Spearman 0,52 nos dois); no call, perto de 0.

Conclusão: **o sentido dos efeitos é confiável; os números exatos, não.**

---

# Ordem de entrada das mãos (30 grades consistentes)

Terços do range que continua: ~24%, ~29% e ~41%.

- **Sempre (≥60% já no terço baixo):** todos os pares, AKo, Ax suited, KQs a K5s, QJs, QTs, Q9s, Q8s, JTs, J9s, J8s, T9s, T8s, 98s, 97s, 87s, 76s, 65s, 54s, AQo, AJo, ATo, KQo, KJo, QJo.
- **Meio:** K4s, K3s, Q7s, J7s, KTo, QTo, JTo, T7s, A9o, 86s, 75s e 64s.
- **Só no alto:** K2s, Q6s a Q2s, J6s a J4s, T6s, K9o, Q9o, J9o, T9o, 96s, 95s, 85s, 74s, 53s, 43s e Ax offsuit de A8o a A4o.

Em árvores deixadas de fora, essa ordem acerta quais mãos continuam com F1 de 0,95 (um ranking genérico de força dá 0,85).

---

# Árvores dos erros do Trainer

| Árvore | Situação | Range do BTN | Mão (certo) |
|---|---|---|---|
| #23 | 91% do field, média 78bb, hero 34,8bb, CO 38,7bb | continua ~21% | Q8s (fold) |
| #102 | 30%, 55 pagos, hero 54,8bb, CO 55,5bb com bounty 3× o inicial | continua ~22% | K3s (fold) |
| #7459 | 40%, 15 pagos, hero 24,4bb com bounty 2× o inicial, UTG1 61bb | continua ~13% | 33 (fold) |
| #3697 | 13%, 213 jogadores para 192 pagos (bolha), hero 21bb, CO 54bb, RP +6,7 | continua ~20% | J8s (fold) |
| #8587 | 95%, hero 96bb, bounties iguais | continua ~49% (call 47%) | K7s (call) |

---

# Padrões

- **O range varia de 13% a 49%** conforme o nó. O que muda pouco é a ordem das mãos.
- **Hero curto contra opener fundo, ICM alto e bounty alto do hero** apertam o range.
- **Hero fundo no Early com bounties iguais** é o nó mais largo.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/16-PKO/README|theory/16-PKO]]

**Mesma pasta:** [[theory/16-PKO/01-Guideline|01-Guideline]] · [[theory/16-PKO/02-VideoAulas|02-VideoAulas]] · [[theory/16-PKO/04-Exercicios|04-Exercicios]] · [[theory/16-PKO/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/16-PKO/06-Pendencias|06-Pendencias]] · [[theory/16-PKO/07-Changelog|07-Changelog]] · [[theory/16-PKO/08-Referencias|08-Referencias]] · [[theory/16-PKO/09-Decisoes|09-Decisoes]] · [[theory/16-PKO/CLAUDE|CLAUDE]]

<!-- graphify-links:end -->
