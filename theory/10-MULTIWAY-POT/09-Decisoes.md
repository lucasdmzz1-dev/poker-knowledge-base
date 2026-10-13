# Decisões – Multiway Pot

> Módulo 10 — Poker Knowledge Base

---

# Decisão 1 — Organizar por perspectiva (OOP / IP / BB), não por board

Diferente de outros módulos (organizados por textura), o Multiway Pot foi estruturado primeiro por posição/papel na mão, porque é essa variável que mais muda a estratégia. A divisão por textura de board acontece dentro de cada situação.

---

# Decisão 2 — Tratar "capado vs não capado" como conceito central

Toda regra do módulo (Check-Raise, Probe Turn, Lead) deriva dessa pergunta. Decidiu-se destacar isso explicitamente no Conceito Central do README em vez de deixar implícito, porque é o que conecta as três situações.

---

# Decisão 3 — Documentar o motivo da estratégia antiga estar errada

Diferente de módulos que só documentam o "o que fazer", este módulo mantém uma seção de diagnóstico do erro anterior (C-Bet quase-range, Bet-vs-Missed como range, overfold generalizado). Decisão: manter esse histórico, porque explica o porquê da mudança e ajuda a não regredir para o padrão antigo.

---

# Decisão 4 — Registrar o Lead do Small Blind como pendência, não como regra ativa

O instrutor mencionou a possibilidade mas decidiu não implementar ainda, por baixa frequência e diferença de EV pequena. Decisão: documentar em Pendências, não em Regras Consolidadas, para não passar a impressão de que já é parte da estratégia validada.

---

# Decisão 5 — Não presumir dados para efetivos não estudados

O estudo cobriu majoritariamente 40bb. Decisão: não extrapolar para 15-20bb por enquanto — registrado explicitamente como limitação em vez de tentar inferir a regra.

---

# Decisão 6 — Construção da KB

Toda nova informação (quando a divisão fina de combos chegar) deve passar por:

1. Atualização do Guideline.
2. Atualização das Regras Consolidadas.
3. Registro no Changelog.

---

# Estado Atual

Módulo estruturado com:

- README.
- Guideline.
- VideoAulas.
- Regras Consolidadas.
- Pendências.
- Changelog.
- Referências.
- Decisões.

Pendente: Solver detalhado e Exercícios (ver 06-Pendencias.md).

---

# Próximos Passos

- Incorporar a divisão fina de combos quando disponibilizada.
- Adicionar resoluções de solver por textura específica.
- Criar exercícios práticos a partir de mãos reais.
- Expandir para River e efetivos menores.
