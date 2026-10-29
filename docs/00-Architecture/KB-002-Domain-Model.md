# KB-002 — Domain Model

**Version:** 1.0  
**Status:** Active  
**Created:** 2026-08-04

---

# 1. Purpose

This document defines the main entities of the Poker Knowledge Base and how they relate to each other.

The Domain Model is the common language of the project.

It ensures that theory, rules, exercises, statistics, leaks, hands and study plans remain organized and connected.

---

# 2. Core Principle

Every piece of information must have a clearly defined purpose.

A video lesson is not a rule.

A rule is not an exercise.

An exercise is not a leak.

A statistic is not automatically a diagnosis.

Each entity has its own role and must reference the other entities through immutable IDs.

---

# 3. Main Entities

The system contains the following main entities:

- Source
- Module
- Concept
- Rule
- Rule Version
- Strategy Profile
- Board Category
- Example
- Exercise
- Mistake Category
- Statistic Definition
- Ideal Statistic Range
- Leak Definition
- Hand Record
- Hand Analysis
- Player Profile
- Study Recommendation
- Study Plan
- Change Record

---

# 4. Source

A Source is the original material from which knowledge was extracted.

Possible source types:

- Video lesson
- Transcript
- Guideline
- Instructor confirmation
- Solver output
- Population report
- Hand history
- Practical example
- Internal research

Example:

```yaml
source_id: SOURCE_XR_SHORT_VIDEO_01
source_type: video_lesson
title: Check-Raise Short Stack — Lesson 1
language: pt-BR
status: active
```

A source does not automatically become official strategy.

It must first be studied, interpreted and validated.

---

# 5. Module

A Module represents a complete strategic study area.

Examples:

- C-Bet OOP Flop
- Second Barrel OOP
- Third Barrel OOP
- Check-Raise Short Stack
- Check-Raise Deep Stack

Example:

```yaml
module_id: MODULE_FLOP_OOP_XR_SHORT
name: Check-Raise Flop Short Stack
street: flop
hero_position: oop
stack_profile: short
status: active
version: 1.0
```

Every Rule, Exercise, Example and Leak must belong to at least one Module.

---

# 6. Concept

A Concept is a strategic idea used by one or more rules.

Examples:

- Equity realization
- Protection
- Range advantage
- Polarization
- Thin value
- Slowplay
- Direct equity
- Blocker
- Geometric sizing

Example:

```yaml
concept_id: CONCEPT_EQUITY_REALIZATION
name: Realização de equidade
status: active
```

Concepts explain why rules exist.

---

# 7. Rule

A Rule is a structured strategic decision.

A Rule contains:

- Conditions
- Recommended action
- Bet or raise size
- Value bucket
- Bluff bucket
- Call bucket
- Exceptions
- Strategy profile
- Status
- Confidence
- Sources

Example:

```yaml
rule_id: RULE_FLOP_OOP_XR_SHORT_014
module_id: MODULE_FLOP_OOP_XR_SHORT
title: Broca com BDFD prefere check-call

conditions:
  street: flop
  hero_position: oop
  hand_category: gutshot
  has_backdoor_flush_draw: true

recommendation:
  action: check_call

strategy_profile: simplified_human
status: active
confidence: high

source_ids:
  - SOURCE_XR_SHORT_GUIDELINE
  - SOURCE_XR_SHORT_VIDEO_01
  - SOURCE_XR_SHORT_VIDEO_02
```

The Rule ID never changes.

The strategic content may change through Rule Versions.

---

# 8. Rule Version

A Rule Version stores the strategic content that was valid during a specific period.

Example:

```yaml
rule_id: RULE_FLOP_OOP_XR_SHORT_014
version: 1.1
status: active
effective_date: 2026-08-04
supersedes: 1.0
change_reason: Instructor clarification about suit selection
```

Old versions are never silently deleted.

They remain available for historical comparison.

---

# 9. Strategy Profile

A Strategy Profile identifies which strategic framework is being used.

Initial profiles:

- gto_baseline
- simplified_human
- population_exploit
- instructor_strategy
- experimental

Example:

```yaml
strategy_profile_id: STRATEGY_SIMPLIFIED_HUMAN
name: Simplified Human Strategy
status: active
```

The same spot may contain different valid recommendations under different Strategy Profiles.

They must never be mixed without clear labeling.

---

# 10. Board Category

A Board Category describes the strategic structure of a board or runout.

Examples:

- A-High
- Broadway
- High Card
- Low Card
- Paired
- Monotone
- Blank Turn
- High Card Turn
- Dynamic Turn
- Flush-Completing Turn

Example:

```yaml
board_category_id: BOARD_FLOP_BROADWAY
name: Broadway
street: flop
status: active
```

Board Categories may be shared across modules, but their strategies may differ by position, stack and action history.

---

# 11. Example

An Example is a validated strategic situation.

It contains:

- Position
- Stack
- Board
- Suits
- Hero hand
- Previous actions
- Correct action
- Explanation
- Related rules
- Source

Example:

```yaml
example_id: EXAMPLE_XR_SHORT_0001
module_id: MODULE_FLOP_OOP_XR_SHORT

spot:
  position: bb_vs_btn
  effective_stack_bb: 20
  flop: Qs7d4c
  hero_hand: 5s3s
  villain_action: bet_25

solution:
  action: check_call
  reason: Gutshot with BDFD prioritizes equity realization

rule_ids:
  - RULE_FLOP_OOP_XR_SHORT_014
```

Examples support theory and may later be converted into exercises.

---

# 12. Exercise

An Exercise tests one or more Rules.

It contains:

- Spot
- Question
- Answer options
- Correct answer
- Explanation
- Rule IDs
- Difficulty
- Mistake categories

Example:

```yaml
exercise_id: EX_XR_SHORT_0001
module_id: MODULE_FLOP_OOP_XR_SHORT

rule_ids:
  - RULE_FLOP_OOP_XR_SHORT_014

difficulty: close
status: active
```

Exercises must never contain an independent strategic truth.

They reference the active Rules.

---

# 13. Mistake Category

A Mistake Category describes the reason behind an incorrect decision.

Examples:

- Overvaluing protection
- Ignoring equity realization
- Confusing XR/F with XR/C
- Wrong board classification
- Wrong sizing
- Mixing Short and Deep strategy
- Ignoring position
- Ignoring suits
- Overgeneralizing a guideline

Example:

```yaml
mistake_id: MISTAKE_IGNORED_EQUITY_REALIZATION
name: Ignorou realização de equidade
status: active
```

One incorrect exercise may generate one or more Mistake Categories.

---

# 14. Statistic Definition

A Statistic Definition describes exactly what a statistic measures.

It must include:

- Name
- Formula
- Filters
- Required sample
- Position
- Stack
- Street
- Action history
- Interpretation limits

Example:

```yaml
stat_id: STAT_XR_FLOP_BB_VS_BTN_SHORT
name: XR Flop BB vs BTN Short Stack

filters:
  hero_position: bb
  villain_position: btn
  effective_stack_bb:
    min: 15
    max: 25
  street: flop
```

A statistic without sufficient contextual filters cannot reliably identify a strategic leak.

---

# 15. Ideal Statistic Range

An Ideal Statistic Range defines an expected interval for a Statistic Definition.

It is not necessarily permanent.

It may vary by:

- Strategy profile
- Population
- Game format
- Rake
- Stack
- Position
- Date
- Sample quality

Example:

```yaml
ideal_range_id: IDEAL_XR_FLOP_BB_VS_BTN_SHORT_01
stat_id: STAT_XR_FLOP_BB_VS_BTN_SHORT
strategy_profile: simplified_human
status: experimental
valid_from: 2026-08-04
```

Ideal ranges must be versioned as poker strategy and population tendencies evolve.

---

# 16. Leak Definition

A Leak Definition connects statistical deviations or repeated mistakes to possible strategic causes.

Example:

```yaml
leak_id: LEAK_XR_SHORT_LOW_FREQUENCY
name: Frequência baixa de XR Short

possible_causes:
  - Under-raising top pairs
  - Missing XR/F bluffs
  - Excessive check-call

related_rule_ids:
  - RULE_FLOP_OOP_XR_SHORT_004
  - RULE_FLOP_OOP_XR_SHORT_011
  - RULE_FLOP_OOP_XR_SHORT_014
```

A Leak Definition is a diagnostic hypothesis.

It is not automatically proof that the player has a leak.

---

# 17. Hand Record

A Hand Record stores the factual information about a played hand.

It contains:

- Positions
- Stacks
- Hole cards
- Board
- Actions
- Sizes
- Tournament context
- Source image or hand history

Example:

```yaml
hand_id: HAND_000001
source_type: screenshot
status: reconstructed
```

The Hand Record contains facts only.

Analysis belongs to the Hand Analysis entity.

---

# 18. Hand Analysis

A Hand Analysis applies the active Rules to a Hand Record.

It must distinguish:

- Base strategy
- Simplification
- Exploit
- Alternative line
- Uncertainty
- Pending validation

Example:

```yaml
analysis_id: ANALYSIS_HAND_000001_V1
hand_id: HAND_000001

related_rule_ids:
  - RULE_TURN_OOP_SECOND_BARREL_021

recommendation:
  action: bet
  size: b40

confidence: high
```

A new strategic version may generate a new analysis of the same hand without deleting the old analysis.

---

# 19. Player Profile

A Player Profile stores information relevant to the training process.

It may include:

- Format
- Stakes
- Main positions
- Current modules
- Known leaks
- Trainer performance
- Statistical samples
- Study goals

Example:

```yaml
player_id: PLAYER_000001
status: active
```

Sensitive player information must remain private.

---

# 20. Study Recommendation

A Study Recommendation links a detected need to specific content.

Example:

```yaml
recommendation_id: STUDY_REC_000001
player_id: PLAYER_000001

reason:
  leak_id: LEAK_XR_SHORT_LOW_FREQUENCY

recommended_modules:
  - MODULE_FLOP_OOP_XR_SHORT

recommended_rules:
  - RULE_FLOP_OOP_XR_SHORT_014

recommended_exercises:
  - EX_XR_SHORT_0001
```

---

# 21. Study Plan

A Study Plan organizes multiple Study Recommendations over time.

It may contain:

- Modules to review
- Video lessons
- Exercise quantities
- Hand-review tasks
- Reassessment date
- Statistical sample target

Example:

```yaml
study_plan_id: STUDY_PLAN_000001
player_id: PLAYER_000001
status: active
```

---

# 22. Change Record

A Change Record documents why knowledge changed.

It contains:

- Changed entity
- Previous version
- New version
- Reason
- Source
- Date
- Affected exercises
- Affected leaks
- Affected analyses

Example:

```yaml
change_id: CHANGE_000001
entity_id: RULE_FLOP_OOP_XR_SHORT_014
from_version: 1.0
to_version: 1.1
reason: Instructor clarification
```

---

# 23. Entity Relationships

```text
SOURCE
  ↓
MODULE
  ↓
CONCEPT
  ↓
RULE
  ↓
RULE VERSION

RULE
  ├── EXAMPLE
  ├── EXERCISE
  ├── LEAK DEFINITION
  ├── HAND ANALYSIS
  └── STUDY RECOMMENDATION

STATISTIC DEFINITION
  ↓
IDEAL STATISTIC RANGE
  ↓
LEAK DEFINITION
  ↓
STUDY RECOMMENDATION
  ↓
STUDY PLAN

PLAYER PROFILE
  ├── TRAINER RESULTS
  ├── HAND RECORDS
  ├── STATISTICS
  └── STUDY PLANS
```

---

# 24. Data Separation Rules

## Facts and Analysis

Hand facts and hand analysis must remain separate.

## Sources and Rules

A source supports a rule, but it is not itself a rule.

## Statistics and Leaks

A statistical deviation suggests a possible leak, but does not prove it automatically.

## Theory and Exercises

Theory defines knowledge.

Exercises test knowledge.

## Current and Historical Strategy

Active strategy and deprecated strategy must remain distinguishable.

---

# 25. Immutable IDs

All major entities must receive immutable IDs.

Recommended prefixes:

```text
SOURCE_
MODULE_
CONCEPT_
RULE_
STRATEGY_
BOARD_
EXAMPLE_
EX_
MISTAKE_
STAT_
IDEAL_
LEAK_
HAND_
ANALYSIS_
PLAYER_
STUDY_REC_
STUDY_PLAN_
CHANGE_
```

Names may change.

IDs never change.

---

# 26. Language Standard

Architecture, identifiers and code-oriented fields use English.

Poker theory, explanations and educational content may use Portuguese.

Examples:

```yaml
rule_id: RULE_FLOP_OOP_XR_SHORT_014
title_pt: Broca com BDFD prefere check-call
```

This preserves the original teaching language while keeping the technical structure standardized.

---

# 27. Initial Scope

The first implementation phase focuses on:

1. Theory
2. Sources
3. Modules
4. Concepts
5. Rules
6. Rule Versions
7. Examples
8. Exercises
9. Pending Validations

The following entities will be implemented later:

- Statistics
- Ideal ranges
- Leak Finder
- Hand Analyzer
- Player Profile
- Study Planner
- Application code

This prevents unnecessary complexity during the current theory-building phase.

---

# 28. Long-Term Principle

The Domain Model may evolve.

New entities may be added.

Existing entities may receive new versions.

However, changes must remain:

- Documented
- Traceable
- Reversible
- Compatible with historical knowledge whenever possible

---

# 29. Changelog

## Version 1.0

- Defined the main domain entities
- Defined the relationship between Sources, Modules and Rules
- Separated Hand Records from Hand Analyses
- Separated Statistics from Leak Definitions
- Defined immutable ID prefixes
- Defined the initial implementation scope
- Added strategy mutability and historical support

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[README|Início]]

**Mesma pasta:** [[docs/00-Architecture/KB-000-Architecture|KB-000-Architecture]] · [[docs/00-Architecture/KB-001-Project-Architecture|KB-001-Project-Architecture]] · [[docs/00-Architecture/KB-003-Module-Template|KB-003-Module-Template]]

**Outros módulos:**

- [[theory/01-CBet-IP-Short-Stack/01-Guideline|01-CBet-IP-Short-Stack · 01-Guideline]]
- [[theory/01-CBet-IP-Short-Stack/04-Exercicios|01-CBet-IP-Short-Stack · 04-Exercicios]]
- [[theory/01-CBet-IP-Short-Stack/05-Regras-Consolidadas|01-CBet-IP-Short-Stack · 05-Regras-Consolidadas]]
- [[theory/01-CBet-IP-Short-Stack/08-Referencias|01-CBet-IP-Short-Stack · 08-Referencias]]

<!-- graphify-links:end -->
