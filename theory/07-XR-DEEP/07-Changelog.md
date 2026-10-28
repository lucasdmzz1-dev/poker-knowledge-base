# 07-Changelog.md
# XR Deep Stack

## Histórico de Evolução

---

# Versão 1.0

## Criação do módulo

Estrutura inicial:

- guideline;
- aula;
- solver;
- exercícios.

---

# Correção 1 — Não misturar Short Stack

Inicialmente foram aplicadas algumas regras de XR Short Stack.

Correção:

XR Deep deve ser baseado em:

- equidade;
- construção de pote;
- evolução futura.

---

# Correção 2 — Naipes em Boards Monotone

Erro inicial:

Assumir:

"ter o naipe do board = XR".

Correção:

A função da mão depende de:

- valor realizado;
- equidade;
- necessidade de pressão.

---

# Correção 3 — Axs com Backdoor

Erro:

Transformar todo Axs em XR.

Correção:

Avaliar:

- showdown;
- realização.

Exemplo:

A5s em K72 pode preferir XC.

---

# Correção 4 — 64 no Board 532

Erro:

Tratar como bluff marginal.

Correção:

64 é XR para extrair.

Motivo:

- OESD;
- alta equidade;
- construção de pote.

---

# Correção 5 — K9 no T85 com FD

Erro:

Avaliar K9 sem considerar naipe.

Correção:

K♦9 possui estrutura de XR.

K9 sem ♦ perde valor.

---

# Correção 6 — Board K72

Erro:

Usar overcards automaticamente.

Correção:

Mãos como 96s podem ser melhores XR porque:

- possuem baixa realização;
- possuem backdoors.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Mesmo módulo:** [[theory/07-XR-DEEP/README|README]] · [[theory/07-XR-DEEP/03-Solver|03-Solver]] · [[theory/07-XR-DEEP/04-Exercicios|04-Exercicios]] · [[theory/07-XR-DEEP/02-VideoAulas|02-VideoAulas]]

**Outros módulos:**

- [[theory/08-3BET-POT/01-Guideline|08-3BET-POT · 01-Guideline]]

<!-- graphify-links:end -->
