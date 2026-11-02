---
tags:
  - tipo/arquitetura
---

# KB-001 — Project Architecture

**Version:** 1.0  
**Status:** Active  
**Created:** 2026-08-04

---

# Purpose

This document defines the architecture of the Poker Knowledge Base.

The objective is to build a living knowledge system capable of supporting:

- Poker Theory
- Decision Engine
- Practical Trainers
- Leak Finder
- Hand Analyzer
- Study Planner
- AI Coaching
- Future Poker Application

The Knowledge Base is the central source of truth for the entire ecosystem.

---

# Vision

We are not building a collection of poker notes.

We are building a structured knowledge system where every concept can be:

- Read
- Practiced
- Validated
- Updated
- Queried
- Connected to player statistics
- Consumed by software
- Consumed by AI

Knowledge must exist independently of the application.

Applications may change.

The knowledge remains.

---

# Core Principles

## Single Source of Truth

Every strategic concept must exist only once.

Every other system references that concept.

---

## Poker is Mutable

Poker strategy evolves.

Strategies change because of:

- Solver improvements
- Population tendencies
- New tournament structures
- New exploits
- Better simplifications
- New coaching methodologies

Therefore:

No rule is permanent.

Every rule must support versioning.

---

## Never Delete Knowledge

Old strategies are never deleted.

They become:

- Deprecated
- Archived

Historical knowledge is valuable.

---

## Separate Knowledge from Software

The app is temporary.

Knowledge is permanent.

The application consumes the knowledge.

It never owns the knowledge.

---

# System Architecture

```
Knowledge Sources
        │
        ▼
Knowledge Base
        │
        ▼
Decision Engine
 ┌──────┼─────────┬───────────────┐
 ▼      ▼         ▼               ▼
Trainer Leak   Hand Analyzer Study Planner
        │
        ▼
     Poker App
```

---

# Layer 1 — Knowledge Sources

Everything begins with evidence.

Possible sources:

- Video Lessons
- Solver Studies
- Coach Guidelines
- Practical Examples
- Tournament Hands
- Population Analysis
- Internal Research

Nothing becomes official without passing through validation.

---

# Layer 2 — Knowledge Base

The Knowledge Base stores human-readable knowledge.

Every module contains:

- Scope
- Philosophy
- Strategic Concepts
- Board Classification
- Value Strategy
- Bluff Strategy
- Calls
- Bet Sizes
- Exceptions
- Simplifications
- Common Mistakes
- Exercises
- Pending Questions
- Changelog

---

# Layer 3 — Decision Engine

The Decision Engine converts knowledge into logical rules.

Example:

```yaml
rule_id: RULE_FLOP_XR_SHORT_014

conditions:
  street: flop
  position: bb_vs_btn
  board: broadway

action:
  xr_fold

status:
  active

version:
  1.0
```

Every Trainer, Leak Finder and Hand Analyzer references these rules.

---

# Layer 4 — Trainer

The Trainer evaluates rule execution.

Every exercise references one or more Rule IDs.

Example:

```yaml
exercise_id: EX_000421

rules:
- RULE_FLOP_XR_SHORT_014

difficulty:
close
```

The Trainer records:

- Correct answer
- Wrong answer
- Rule tested
- Mistake category
- Mastery progression

---

# Layer 5 — Leak Finder

The Leak Finder connects player statistics to strategic rules.

Example:

Statistic:

XR Flop BB vs BTN

↓

Possible Leak

↓

RULE_FLOP_XR_SHORT_014

↓

Suggested Review

↓

Exercises

↓

Video Lesson

The Leak Finder must never diagnose leaks from a single global statistic.

Context always matters.

---

# Layer 6 — Hand Analyzer

The Hand Analyzer reconstructs the played hand.

Workflow:

1. Identify spot
2. Locate module
3. Find matching rules
4. Apply active strategy
5. Explain decision
6. Link exercises
7. Register mistake (optional)

---

# Layer 7 — Study Planner

The Study Planner combines:

- Trainer performance
- Leak Finder
- Reviewed hands
- Knowledge updates

Output:

- Weekly study plan
- Priority modules
- Exercise recommendations
- Progress reports

---

# Rule Lifecycle

Every rule has a lifecycle.

## Active

Current official strategy.

---

## Simplified

Operational simplification for practical play.

---

## Experimental

Being tested.

---

## Pending Validation

Awaiting confirmation.

---

## Deprecated

No longer recommended.

---

## Archived

Historical reference only.

---

# Versioning

Every rule contains:

- Rule ID
- Version
- Status
- Source
- Effective Date
- Changelog
- Previous Version

Rule IDs never change.

Versions do.

---

# Confidence Levels

Every rule receives a confidence level.

## High

Repeatedly validated.

---

## Medium

Validated but contextual.

---

## Low

Hypothesis.

---

# Strategy Profiles

Multiple strategies may coexist.

Examples:

- GTO
- Simplified Human
- Population Exploit
- Future Strategy

Every profile must be identified.

---

# No Knowledge Duplication

A rule exists only once.

Trainer references Rule.

Leak Finder references Rule.

Hand Analyzer references Rule.

Study Planner references Rule.

Poker App references Rule.

---

# Repository Philosophy

The repository stores knowledge.

The application reads knowledge.

Knowledge never depends on software.

Software depends on knowledge.

---

# Change Management

Whenever strategy changes:

1. New evidence
2. Discussion
3. Validation
4. New Version
5. Old Version archived
6. Trainer updated
7. Leak Finder updated
8. Hand Analyzer updated
9. Changelog updated

---

# Long-Term Goal

Build the most complete poker knowledge system possible.

One capable of evolving forever.

Knowledge survives software.

Knowledge survives strategy changes.

Knowledge survives instructors.

Knowledge survives time.

---

# Motto

> We are not documenting poker.

> We are modeling poker knowledge.

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[README|Início]]

**Mesma pasta:** [[docs/00-Architecture/KB-000-Architecture|KB-000-Architecture]] · [[docs/00-Architecture/KB-002-Domain-Model|KB-002-Domain-Model]] · [[docs/00-Architecture/KB-003-Module-Template|KB-003-Module-Template]]

**Outros módulos:**

- [[theory/01-CBet-IP-Short-Stack/09-Decisoes|01-CBet-IP-Short-Stack · 09-Decisoes]]

<!-- graphify-links:end -->
