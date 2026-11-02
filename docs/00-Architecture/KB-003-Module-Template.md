---
tags:
  - tipo/arquitetura
---

# KB-003 — Module Template

**Version:** 1.0  
**Status:** Active  
**Created:** 2026-08-04

---

# 1. Purpose

This document defines the official template for every poker theory module inside the Poker Knowledge Base.

Every module must follow this structure so that:

- Theory remains consistent
- Rules can be converted into the Decision Engine
- Exercises can reference specific concepts
- Leaks can be connected to strategic causes
- Strategy updates can be versioned safely
- The future application can consume the content

---

# 2. Module Header

Every module begins with the following metadata:

```yaml
module_id: MODULE_[STREET]_[POSITION]_[TOPIC]
title_pt: Nome do módulo em português
title_en: Module name in English

version: 1.0
status: active
confidence: high

strategy_profile:
  - simplified_human

created_date: YYYY-MM-DD
last_updated: YYYY-MM-DD
```

---

# 3. Module Identification

## Module Name

State the official name of the module.

## Module ID

Use an immutable ID.

Example:

```text
MODULE_FLOP_OOP_XR_SHORT
```

## Current Version

Example:

```text
1.0
```

## Status

Allowed values:

- active
- simplified
- experimental
- pending_validation
- deprecated
- archived

## Confidence

Allowed values:

- high
- medium
- low

---

# 4. Scope

Define exactly where the strategy applies.

Include:

- Game format
- Street
- Hero position
- Villain position
- Effective stack
- Pot type
- Previous actions
- Bet size faced
- Relevant board categories

Example:

```yaml
scope:
  format: mtt
  street: flop
  hero_position: bb
  villain_position:
    - btn
    - ep
  effective_stack_bb:
    min: 15
    max: 25
  node: hero_checks_villain_cbets
```

The scope must prevent strategy contamination between:

- IP and OOP
- Short and Deep
- Different positions
- Different action trees
- Different streets

---

# 5. Exclusions

List situations that are not covered by the module.

Examples:

- Deep Stack
- Multiway pots
- Limped pots
- 3-Bet pots
- Different bet sizes
- Different positions
- Different tournament formats

This section prevents users and software from applying the module outside its intended context.

---

# 6. Philosophy

Explain the strategic logic behind the module.

Possible concepts:

- Equity realization
- Protection
- Range advantage
- Nut advantage
- Polarization
- Thin value
- Showdown value
- Fold equity
- Slowplay
- Stack commitment

This section explains why the strategy exists.

It must not be only a list of actions.

---

# 7. Core Principles

List the most important strategic principles.

Example:

```text
1. Short Stack prioritizes equity realization.
2. The check-raise range is polarized.
3. Hands that need to realize equity should not become XR/F.
4. Protection determines when to develop check-shove.
```

Each principle may later receive its own Concept ID.

---

# 8. Decision Order

Define the order in which the player should think.

Example:

```text
1. Confirm the module and action tree.
2. Identify the board category.
3. Identify the hand category.
4. Evaluate equity realization.
5. Evaluate protection.
6. Select the action.
7. Select the size.
8. Determine response against a shove or raise.
```

The decision order should be practical enough for real-time use.

---

# 9. Board Classification

List every board category relevant to the module.

For each category include:

- Definition
- Structural characteristics
- Strategic reason
- Main action
- Main size
- Value bucket
- Bluff bucket
- Call bucket
- Exceptions
- Examples

Template:

```markdown
## Board Category: [Name]

### Definition

### Structural Characteristics

### Strategic Objective

### Main Action

### Main Size

### Value Bucket

### Bluff Bucket

### Call Bucket

### Exceptions

### Validated Examples
```

---

# 10. Hand Categories

Define all relevant hand categories.

Examples:

- Absolute value
- Top pair
- Second pair
- Bottom pair
- Overpair
- Two pair
- Set
- Straight
- Flush
- OESD
- Gutshot
- Flush draw
- Backdoor flush draw
- Combo draw
- Overcards
- Air

Each category must be interpreted inside the module context.

The same hand category may behave differently in another module.

---

# 11. Value Strategy

Describe which hands bet, raise, call or slowplay for value.

For each value bucket include:

- Hand category
- Action
- Size
- Response against aggression
- Reason
- Exceptions
- Position differences
- Stack differences
- Suit considerations

Template:

```yaml
value_bucket:
  hand_category:
  action:
  size:
  versus_shove:
  reason:
  exceptions:
```

---

# 12. Bluff Strategy

Describe which hands are selected as bluffs.

Include:

- Direct equity
- Backdoor equity
- Blockers
- Suit selection
- Ability to continue against a shove
- Ability to improve on later streets
- Showdown value
- Hands that must not be transformed into bluffs

Template:

```yaml
bluff_bucket:
  hand_category:
  required_equity:
  required_blockers:
  action:
  size:
  versus_shove:
  reason:
```

---

# 13. Call Strategy

Describe which hands prefer check-call or call.

Include:

- Hands prioritizing equity realization
- Medium showdown value
- Traps
- Strong draws
- Weak top pairs
- Second pairs
- Position-specific calls
- Suit-specific calls

Explain why these hands should not raise.

---

# 14. Fold Strategy

Describe which hands should be folded.

Include:

- Hands without enough equity
- Hands without useful blockers
- Hands dominated by the opponent’s range
- Hands that cannot continue against aggression
- Hands outside the defended preflop range, when relevant

The module should distinguish between:

- Strategic fold
- Preflop range issue
- Simplified give-up

---

# 15. Bet and Raise Sizes

List every size used in the module.

For each size explain:

- When it is used
- Why it is used
- Which hands use it
- Which hands do not use it
- How stack depth changes it
- Whether it is a simplification

Template:

```yaml
size_id:
size_percentage:
context:
strategic_goal:
value_bucket:
bluff_bucket:
exceptions:
```

---

# 16. Response Against Aggression

Describe what happens after:

- Villain shoves
- Villain 3-bets
- Villain calls
- Villain raises
- Villain checks back

Possible categories:

- Raise/fold
- Raise/call
- Raise/shove
- Call down
- Give up
- Continue on specific turns

This section must remain specific to the action tree.

---

# 17. Position Differences

Document strategic differences by position.

Examples:

- EP vs BB
- CO vs BTN
- BTN vs BB
- Blind vs Blind

For each difference explain:

- Range strength
- Range width
- Bluff density
- Value density
- Equity realization
- Protection needs
- Changes in value buckets
- Changes in bluff buckets

Do not merge position strategies without explicit support.

---

# 18. Stack Differences

Document strategic differences by effective stack.

Examples:

- 10–14bb
- 15–20bb
- 21–25bb
- 26–40bb
- Deep Stack

Explain how stack depth affects:

- SPR
- Commitment
- Raise size
- Shove frequency
- Equity realization
- Slowplay
- Bluff selection

Short and Deep strategies must remain separate unless explicitly linked.

---

# 19. Suit Logic

Document all strategic suit considerations.

Include:

- Front-door flush draw
- Backdoor flush draw
- Flush blockers
- Suit of the high card
- Suit of the low card
- Suit-based calls
- Suit-based raises
- Suit-based pending questions

Do not create suit rules from inference alone.

Every suit rule must have:

- Source
- Example
- Status
- Confidence

---

# 20. Exceptions

List all exceptions to the main strategy.

Each exception must include:

- Base rule
- Exception
- Reason
- Scope
- Source
- Confidence
- Whether it is required for practical execution

Template:

```yaml
exception_id:
base_rule_id:
condition:
alternative_action:
reason:
status:
confidence:
```

---

# 21. Operational Simplifications

List the human simplifications adopted for real-time execution.

Examples:

- Use only one size in a category
- Group mixed solver strategies into one action
- Ignore low-frequency traps
- Use the two best kickers as a practical frontier

Every simplification must be labeled:

```text
Operational Simplification
```

It must not be presented as exact solver strategy.

---

# 22. Exploitative Adjustments

Document exploits separately from the base strategy.

Each exploit must include:

- Population assumption
- Evidence
- Adjustment
- Risk
- When not to use it
- Status
- Confidence

Template:

```yaml
exploit_id:
population_assumption:
base_strategy:
exploit_adjustment:
risk:
status:
confidence:
```

Exploits must never silently replace the base strategy.

---

# 23. Common Mistakes

List the most common errors in the module.

For each mistake include:

- Mistake name
- Wrong reasoning
- Correct reasoning
- Related rule
- Related exercise
- Possible statistical symptom

Example:

```yaml
mistake_id:
wrong_action:
wrong_reason:
correct_action:
correct_reason:
related_rule_ids:
```

---

# 24. Decision Tree

Create a simplified practical decision tree.

Example:

```text
Identify Board
    ↓
Does the hand need equity realization?
    ├── Yes → Call
    └── No
          ↓
Can the hand continue versus shove?
    ├── Yes → XR/Call
    └── No → XR/Fold or Fold
```

The decision tree must reflect the consolidated strategy, not an unvalidated hypothesis.

---

# 25. Rules

Every consolidated strategic decision must later be converted into a Rule.

Rule template:

```yaml
rule_id: RULE_[MODULE]_[NUMBER]
module_id: MODULE_[NAME]

title_pt:
description_pt:

conditions:
  street:
  positions:
  stack:
  previous_actions:
  board_category:
  hand_category:
  suits:

recommendation:
  action:
  size:
  versus_aggression:

strategy_profile:
status:
confidence:

source_ids:
examples:
exceptions:
```

Rule IDs are immutable.

Rule versions may change.

---

# 26. Validated Examples

Every example must include:

- Example ID
- Module ID
- Position
- Stack
- Board
- Suits
- Hero hand
- Villain action
- Correct action
- Size
- Response against aggression
- Explanation
- Related rules
- Source
- Confidence

Template:

```yaml
example_id:
module_id:

spot:
  position:
  stack_bb:
  board:
  hero_hand:
  villain_action:

solution:
  action:
  size:
  versus_aggression:
  explanation:

rule_ids:
source_ids:
confidence:
```

---

# 27. Counterexamples

Include spots that look similar but use a different strategy.

Counterexamples are essential to prevent overgeneralization.

Template:

```markdown
## Counterexample

### Base Spot

### Similar Spot

### Structural Difference

### Strategic Difference

### Related Rules
```

---

# 28. Exercises

Each exercise must reference one or more Rule IDs.

Include:

- Exercise ID
- Spot
- Question
- Answer
- Explanation
- Difficulty
- Mistake categories
- Follow-up exercise
- Source

Difficulty levels:

- basic
- intermediate
- close
- advanced
- expert

---

# 29. Pending Validations

Record unresolved questions.

Every pending item must include:

- Pending ID
- Question
- Context
- Current hypothesis
- Required validation
- Responsible source
- Status
- Date opened

Template:

```yaml
pending_id:
module_id:
question:
context:
current_hypothesis:
validation_needed:
status: open
```

Pending knowledge must not enter the active strategy.

---

# 30. Sources

List all source materials used in the module.

Examples:

- Guideline
- Video lesson
- Transcript
- Instructor confirmation
- Solver image
- Hand example
- Population report

Every source should later receive a Source ID.

---

# 31. Confidence and Evidence

Explain the confidence of the module.

## High Confidence

Repeatedly supported by:

- Multiple lessons
- Multiple examples
- Instructor validation
- Solver confirmation

## Medium Confidence

Supported but contextual.

## Low Confidence

Preliminary or incomplete.

The module may contain sections with different confidence levels.

---

# 32. Changelog

Every module must contain a changelog.

Template:

```markdown
# Changelog

## Version 1.0

- Initial consolidation

## Version 1.1

- Updated suit-selection rule
- Added instructor confirmation
- Updated affected examples
```

No strategic change should happen without a changelog entry.

---

# 33. Module Completion Checklist

A module is considered ready for the Knowledge Base only when:

- [ ] Scope is defined
- [ ] Exclusions are defined
- [ ] Philosophy is documented
- [ ] Core principles are documented
- [ ] Board categories are documented
- [ ] Value strategy is documented
- [ ] Bluff strategy is documented
- [ ] Call strategy is documented
- [ ] Fold strategy is documented
- [ ] Sizes are documented
- [ ] Position differences are documented
- [ ] Stack differences are documented
- [ ] Suit logic is documented
- [ ] Exceptions are documented
- [ ] Simplifications are labeled
- [ ] Exploits are separated
- [ ] Common mistakes are documented
- [ ] Validated examples are included
- [ ] Counterexamples are included
- [ ] Pending validations are separated
- [ ] Sources are listed
- [ ] Changelog is created
- [ ] Version and status are assigned

---

# 34. Initial Use

This template will first be used for:

1. C-Bet OOP Flop
2. Second Barrel OOP
3. Third Barrel
4. Check-Raise Flop Short Stack
5. Check-Raise Flop Deep Stack

The template may evolve as new modules reveal additional requirements.

---

# 35. Changelog

## Version 1.0

- Created the official poker module template
- Defined scope and exclusion standards
- Added theory, rules, examples and exercise structure
- Added strategy mutability support
- Added suit logic section
- Added operational simplifications and exploit separation
- Added completion checklist

<!-- graphify-links:start -->

---

## Ligações

_Gerado a partir do grafo do graphify. Não editar à mão: é sobrescrito na próxima geração._

**Pasta:** [[README|Início]]

**Mesma pasta:** [[docs/00-Architecture/KB-000-Architecture|KB-000-Architecture]] · [[docs/00-Architecture/KB-001-Project-Architecture|KB-001-Project-Architecture]] · [[docs/00-Architecture/KB-002-Domain-Model|KB-002-Domain-Model]]

**Outros módulos:**

- [[theory/01-CBet-IP-Short-Stack/03-Solver|01-CBet-IP-Short-Stack · 03-Solver]]
- [[theory/01-CBet-IP-Short-Stack/06-Pendencias|01-CBet-IP-Short-Stack · 06-Pendencias]]
- [[theory/02-CBet-IP-40bb/06-Pendencias|02-CBet-IP-40bb · 06-Pendencias]]
- [[theory/01-CBet-IP-Short-Stack/09-Decisoes|01-CBet-IP-Short-Stack · 09-Decisoes]]

<!-- graphify-links:end -->
