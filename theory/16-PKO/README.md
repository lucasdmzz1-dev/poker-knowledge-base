---
tags:
  - modulo/16-pko
  - tema/pko
  - street/preflop
  - posicao/ip
  - tema/icm
  - tipo/modulo
---

# PKO: BTN contra 1 open

**Flashcards:** [[theory/16-PKO/16 - PKO FLASHCARDS|16 - PKO FLASHCARDS]]

## Módulo 16 — PKO (Progressive Knockout)

---

# Contexto

Fase:
Early e Mid de torneios PKO com fator progressivo de 50% (do início até perto da bolha). Mesa final e bolha entram só como contexto de ICM.

Formato:
Pote single raised. O adversário abre, e o hero está no BTN, com a decisão de foldar, pagar ou 3betar.

Fonte:
Não há aula em vídeo. O módulo nasce de três coisas: as notas do usuário sobre PKO, a leitura de 52 árvores do 4BET Trainer (203 nós de BTN contra um open) e 70 mãos jogadas no Trainer para testar a regra.

---

# Objetivo do Módulo

Entender como o range do BTN **amplia ou diminui** em PKO, principalmente o call contra um open, e usar isso para decidir com mais precisão na mesa. O objetivo não é cravar ranges (no PKO há variáveis demais), e sim saber para onde o range corre em cada situação.

O objetivo é entender:

- Como o bounty vira dinheiro morto (dead money) e desconto de equity (Help Value).
- Quais fatores alargam ou apertam o range: stack do opener, cobertura, stack do hero em relação à média, valor do bounty, posição do opener, fase do torneio e Risk Premium.
- Em que ordem as mãos entram quando o range alarga.
- Como estimar a largura do range de um nó e decidir.

---

# Conceito Central

O range do BTN contra um open em PKO não é fixo: ele se move com o incentivo de bounty (o que ganhamos ao eliminar o opener) e com a pressão de ICM e de stack. O que é estável é a **ordem de entrada das mãos**. A decisão fica em duas perguntas: o quão largo é este nó, e onde a minha mão está na ordem?

---

# Diferença Fundamental

No Vanilla (ChipEV, 40bb) o BTN contra o CO continua em ~25% (call 15%, 3bet 10%). No PKO o range é, em média, um pouco maior em call e menor em 3bet, mas pode ir de 13% a 49% conforme o nó.

---

# Estrutura do Módulo

## Parte 1 — Como o bounty entra

Dead money, valor do KO por fase e Help Value.

---

## Parte 2 — O que alarga ou aperta o range

Stack do opener, cobertura, stack relativo à média, bounty, posição, fase e RP.

---

## Parte 3 — A ordem de entrada das mãos

Núcleo, mãos que entram no meio e mãos só nos ranges largos.

---

## Parte 4 — Largura do nó e sinais de aperto

Como estimar a largura e quando apertar o corte.

---

## Parte 5 — A ação

Call, fold, raise e o que ainda falta testar (stack curto).

---

## Parte 6 — Passo a passo na mesa

---

# Resultado Esperado

Ao finalizar este módulo o jogador deve conseguir:

- Calcular o dead money do bounty do opener e o Help Value.
- Classificar o nó como apertado, médio ou largo e achar a mão na ordem de entrada.
- Decidir fold, call ou raise no BTN contra um open, com os sinais de aperto.
- Saber o que ainda não foi testado (stack curto, bolha, outras posições).

---

# Status

Módulo estruturado (v1.2). A regra foi testada em 170 mãos no Trainer (v2: 80% de acertos perfeitos em 50 mãos; v3: 79% em 100 mãos, 86% contando os quase perfeitos). Ainda não vale para outras posições, stack curto, bolha, mesa final ou contra 3bet. Ver 06-Pendencias.md.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[theory/README|theory]]

**Nesta pasta:**

- [[theory/16-PKO/16 - PKO GUIDELINE|01-Guideline]]
- [[theory/16-PKO/02-VideoAulas|02-VideoAulas]]
- [[theory/16-PKO/03-Solver|03-Solver]]
- [[theory/16-PKO/04-Exercicios|04-Exercicios]]
- [[theory/16-PKO/05-Regras-Consolidadas|05-Regras-Consolidadas]]
- [[theory/16-PKO/06-Pendencias|06-Pendencias]]
- [[theory/16-PKO/07-Changelog|07-Changelog]]
- [[theory/16-PKO/08-Referencias|08-Referencias]]
- [[theory/16-PKO/09-Decisoes|09-Decisoes]]
- [[theory/16-PKO/CLAUDE|CLAUDE]]
- [[theory/16-PKO/tools/pko/pko-conhecimento|tools/pko/pko-conhecimento]]
- [[theory/16-PKO/tools/pko/pko-maos-dicionario|tools/pko/pko-maos-dicionario]]
- [[theory/16-PKO/tools/pko/pko-solver-playbook|tools/pko/pko-solver-playbook]]
- [[theory/16-PKO/tools/pko/regras-vivas-pko-btn|tools/pko/regras-vivas-pko-btn]]

<!-- graphify-links:end -->
