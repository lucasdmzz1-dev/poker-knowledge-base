# Pendências – PKO

> Módulo 16 — Poker Knowledge Base

---

# Objetivo

Registrar pontos que precisam de complemento futuro.

---

# 1. Stack curto (hero ou opener com 25bb ou menos)

A regra de raise e all-in no lugar de call (Regra 15) segue sem teste: na v3 nenhuma mão com hero de 25bb ou menos e premium ou par médio apareceu. O shove com blockers foi testado e errou (2 em 2).

---

# 2. Bolha e late game

As árvores lidas vão de ~13% a 95% do field. Não há dados de bolha de verdade (no último nível antes do ITM), mesa final ou heads-up. A busca por % no site é exata (10%, 8% etc. não retornaram, mas 13% existe).

---

# 3. Outras posições e outros spots

Só BTN contra um open. Faltam CO, SB e BB contra open, contra 3bet, squeeze e multiway.

---

# 4. Amostra maior e mais variada

52 árvores e 70 mãos são pouco. Faltam árvores de bounties de 3× a 5× o inicial, campos de 100 e mais de 1k jogadores, e mais mãos por regra, com teste em mãos que não foram usadas para ajustá-la.

---

# 5. Prever o tamanho do range

Entre árvores os fatores explicam só ~25% do call. Falta descobrir o que mais move o range (por exemplo, a distribuição dos bounties dos jogadores atrás e o tamanho do pote) ou aceitar que é preciso ler a árvore.

---

# 6. Pontos do usuário a confirmar

- Os valores "−3%" e "−11%" da régua do Help Value foram lidos como 3% e 11%.
- Pagar o range inteiro contra o open para incentivar o BB a jogar (nota do usuário) não foi medido.
- O bounty do hero em risco: o usuário disse que não entra no dead money; entrou só como sinal de aperto (T).

---

# 7. Registro automático das mãos

Hoje o registro vai ao arquivo `pko-maos-jogadas.csv` ao fim de cada sessão. Falta a gravação mão a mão no navegador.

---

# 8. Nós largos (Early, stacks parecidos)

Na v3, 5 folds de Kx e Qx suited baixos deviam ser call (field alto, hero e opener com stacks parecidos). Testar não apertar nesses nós.

---

# 9. Premium contra opener fundo ou curto

QQ contra opener de 214bb pede raise; AA contra opener de 14bb pede call. Confirmar com mais mãos.

---

# 10. Atualizações futuras

Quando houver novas mãos ou árvores, atualizar:

- Guideline.
- Regras Consolidadas.
- `regras-vivas-pko-btn.md` e `pko-maos-jogadas.csv`.
- Changelog.
