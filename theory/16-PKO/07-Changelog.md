---
tags:
  - modulo/16-pko
  - tema/pko
  - street/preflop
  - posicao/ip
  - tema/icm
  - tipo/changelog
---

# Changelog — PKO

---

# Versão 1.0

## Criação do módulo

Fonte: notas do usuário, 52 árvores do 4BET Trainer e 70 mãos jogadas no Trainer.

Contexto definido:

- BTN contra um open, PKO 50%, Early e Mid.
- Sem aula em vídeo; as fontes estão em `02-VideoAulas.md`.

---

## Conteúdos adicionados

- Dead money do bounty, valor do KO por fase e Help Value.
- Fatores que movem o range e seus efeitos medidos.
- Ordem de entrada das mãos e largura do nó.
- Sinais de aperto (T) e regra de decisão (v2: 40 PERFEITO em 50 mãos).
- 39 exercícios (19 de conceito e 20 com mãos reais do Trainer).

---

## Estrutura KB aplicada

Criados:

- README.
- Guideline.
- VideoAulas (fontes).
- Solver (dados das árvores).
- Exercícios.
- Regras Consolidadas.
- Pendências.
- Referências.
- Decisões.

---

# Versão 1.1

Registro das mãos ampliado: `pko-maos-jogadas.csv` passa a ter 41 colunas (torneio, mesa, RP, nó do solver) e ganhou o `pko-maos-dicionario.md`. Registrada a configuração dos testes (Facing RFI, RNG OFF, Close Decisions) e o resumo do Trainer (70 mãos, 84% de precisão, −0,80bb de EV perdido).

---

# Versão 1.2

Sessão 3 do Trainer: 100 mãos com a regra v3 (79 PERFEITO, 7 QUASE, 1 IMPRECISO, 3 ERRO e 10 BLUNDER; precisão de 86% e EV perdido de 0,73bb). O shove com blockers foi descartado (errou 2 em 2). As regras de stack curto seguem sem teste (nenhuma mão apareceu). Registrado o cenário completo mão a mão (42 colunas no CSV). Hipóteses para a v3.1 em `regras-vivas-pko-btn.md`.

---

# Versão 1.3

Ordem de prioridade das fontes padronizada na ordem geral do `theory/CLAUDE.md` (decisão do autor do KB, 28/10/2026). `08-Referencias.md` e `09-Decisoes.md` atualizados, e a pendência correspondente resolvida. Nenhuma regra de estratégia mudou.

---

# Próximas Atualizações

Adicionar:

- Regra de stack curto (raise e all-in) testada.
- Árvores de bolha e de outras posições.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/16-PKO/README|theory/16-PKO]]

**Mesma pasta:** [[theory/16-PKO/01-Guideline|01-Guideline]] · [[theory/16-PKO/02-VideoAulas|02-VideoAulas]] · [[theory/16-PKO/03-Solver|03-Solver]] · [[theory/16-PKO/04-Exercicios|04-Exercicios]] · [[theory/16-PKO/05-Regras-Consolidadas|05-Regras-Consolidadas]] · [[theory/16-PKO/06-Pendencias|06-Pendencias]] · [[theory/16-PKO/08-Referencias|08-Referencias]] · [[theory/16-PKO/09-Decisoes|09-Decisoes]] · [[theory/16-PKO/CLAUDE|CLAUDE]]

<!-- graphify-links:end -->
