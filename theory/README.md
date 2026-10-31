# Theory Index

**Version:** 1.0  
**Status:** Active  
**Last Updated:** 2026-10-13

---

# Purpose

This directory contains the official human-readable poker theory of the Poker Knowledge Base.

Each strategic module has its own document.

Theory modules contain:

- Scope
- Philosophy
- Strategic guidelines
- Value strategy
- Bluff strategy
- Call strategy
- Sizes
- Position differences
- Stack differences
- Suit logic
- Exceptions
- Operational simplifications
- Validated examples
- Pending validations
- Changelog

Structured rules for software use will be stored separately in the Decision Engine.

---

# Current Modules

## Fundamentals

| Module | ID | Status | Version |
|---|---|---:|---:|
| Structural Board Classification | `MODULE_FUNDAMENTALS_BOARD_STRUCTURE` | To document | — |

## Single-Raised Pot — OOP

| Module | ID | Status | Version |
|---|---|---:|---:|
| C-Bet Flop OOP | `MODULE_SRP_OOP_CBET_FLOP` | Consolidated — documentation pending | — |
| Second Barrel OOP | `MODULE_SRP_OOP_SECOND_BARREL` | Partially consolidated — value range documented in `05-CBet-OOP-40bb`; bluffs and check pending | 1.1 |
| Third Barrel OOP | `MODULE_SRP_OOP_THIRD_BARREL` | Partially consolidated — review required | — |
| Check-Raise Flop Short Stack | `MODULE_SRP_OOP_XR_SHORT` | Consolidated with pending suit validation | — |
| Check-Raise Flop Deep Stack | `MODULE_SRP_OOP_XR_DEEP` | Not started | — |

## Single-Raised Pot — IP

| Module | ID | Status | Version |
|---|---|---:|---:|
| C-Bet Flop IP | `MODULE_SRP_IP_CBET_FLOP` | Existing knowledge — documentation pending | — |
| Second Barrel IP | `MODULE_SRP_IP_SECOND_BARREL` | Existing knowledge — documentation pending | — |
| Third Barrel IP | `MODULE_SRP_IP_THIRD_BARREL` | Existing knowledge — documentation pending | — |

---

# Module Directory

| Folder | Module |
|---|---|
| `01-CBet-IP-Short-Stack` | C-Bet IP Short Stack |
| `02-CBet-IP-40bb` | C-Bet IP 40bb |
| `03-Second-Barrel-IP` | Second Barrel IP |
| `04-Third-Barrel-e-vs-Third-Barrel` | Third Barrel and vs Third Barrel |
| `05-CBet-OOP-40bb` | C-Bet OOP 40bb + Second Barrel OOP (turn) |
| `06-XR-SHORT` | Check-Raise Short Stack |
| `07-XR-DEEP` | Check-Raise Deep Stack |
| `08-3BET-POT` | 3-Bet Pot |
| `09-BET-CHECK-BET` | Bet-Check-Bet |
| `10-MULTIWAY-POT` | Multiway Pot |
| `11-Value-Bet-Masterclass` | Value Bet Masterclass (cross-module) |
| `17-BB-Raised-Pot-vs-SB-Limp` | BB Raised Pot vs SB (blind war: SB limpa, BB raise, 40bb deep) |
| `_TEMPLATE` | Template for new modules |

---

# Documentation Order

The initial migration will follow this order:

1. Structural Board Classification
2. C-Bet Flop OOP
3. Second Barrel OOP
4. Third Barrel OOP
5. Check-Raise Flop Short Stack
6. Validated Examples
7. Pending Validations
8. Decision Engine Rules
9. Trainer Exercises

---

# Status Definitions

## Consolidated

The strategy has been studied, discussed and validated sufficiently to become official theory.

## Partially Consolidated

Some sections are validated, but the complete module still requires review.

## In Study

The module is currently being studied and tested.

## Pending Validation

A specific point requires instructor, solver or additional source confirmation.

## Not Started

The module has not yet entered the formal study process.

## Deprecated

The module or strategy is no longer recommended but remains stored historically.

---

# Source of Truth

The GitHub repository is the official long-term source of truth.

Chats are used for:

- Study
- Discussion
- Exercises
- Corrections
- Validation

A concept becomes official only after it is transferred to the Knowledge Base with:

- Scope
- Status
- Version
- Sources
- Changelog

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[README|Início]]

**Nesta pasta:**

- [[theory/01-CBet-IP-Short-Stack/README|01-CBet-IP-Short-Stack]]
- [[theory/02-CBet-IP-40bb/README|02-CBet-IP-40bb]]
- [[theory/03-Second-Barrel-IP/03 - SECOND BARREL IP GUIDELINE|03-Second-Barrel-IP]]
- [[theory/04-Third-Barrel-e-vs-Third-Barrel/README|04-Third-Barrel-e-vs-Third-Barrel]]
- [[theory/05-CBet-OOP-40bb/README|05-CBet-OOP-40bb]]
- [[theory/06-XR-SHORT/README|06-XR-SHORT]]
- [[theory/07-XR-DEEP/README|07-XR-DEEP]]
- [[theory/08-3BET-POT/README|08-3BET-POT]]
- [[theory/09-BET-CHECK-BET/README|09-BET-CHECK-BET]]
- [[theory/10-MULTIWAY-POT/README|10-MULTIWAY-POT]]
- [[theory/11-Value-Bet-Masterclass/README|11-Value-Bet-Masterclass]]
- [[theory/12-RETA-FINAL/README|12-RETA-FINAL]]
- [[theory/13-ICM/README|13-ICM]]
- [[theory/14-Probe-Turn/README|14-Probe-Turn]]
- [[theory/15-Bet-vs-Missed/README|15-Bet-vs-Missed]]
- [[theory/16-PKO/README|16-PKO]]
- [[theory/CLAUDE|CLAUDE]]
- [[theory/MAPA-PRE-POS|MAPA-PRE-POS]]
- [[theory/_TEMPLATE/01-Guideline|_TEMPLATE/01-Guideline]]
- [[theory/_TEMPLATE/02-VideoAulas|_TEMPLATE/02-VideoAulas]]
- [[theory/_TEMPLATE/03-Solver|_TEMPLATE/03-Solver]]
- [[theory/_TEMPLATE/04-Exercicios|_TEMPLATE/04-Exercicios]]
- [[theory/_TEMPLATE/05-Regras-Consolidadas|_TEMPLATE/05-Regras-Consolidadas]]
- [[theory/_TEMPLATE/06-Pendencias|_TEMPLATE/06-Pendencias]]
- [[theory/_TEMPLATE/07-Changelog|_TEMPLATE/07-Changelog]]
- [[theory/_TEMPLATE/08-Referencias|_TEMPLATE/08-Referencias]]
- [[theory/_TEMPLATE/09-Decisoes|_TEMPLATE/09-Decisoes]]
- [[theory/_TEMPLATE/README|_TEMPLATE/README]]
- [[theory/retomada-main-teoria|retomada-main-teoria]]
- [[theory/tools/pko/pko-arvores-dicionario|tools/pko/pko-arvores-dicionario]]
- [[theory/tools/pko/pko-conhecimento|tools/pko/pko-conhecimento]]
- [[theory/tools/pko/pko-maos-dicionario|tools/pko/pko-maos-dicionario]]
- [[theory/tools/pko/pko-solver-playbook|tools/pko/pko-solver-playbook]]
- [[theory/tools/pko/regras-vivas-pko-btn|tools/pko/regras-vivas-pko-btn]]
- [[theory/tools/pko/retomada-pko|tools/pko/retomada-pko]]

<!-- graphify-links:end -->
