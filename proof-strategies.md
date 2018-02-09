---
title: Proof strategies
---

March 30, 2015

## Proof by cases

+ This stragegy is useful when your premises include a **disjunction**.
+ We construct a separate *subproof* for each *disjunct* in the disjunction. The disjunct serves as the *assumption* of the subproof.
+ We attempt to make each subproof end with the **goal** of the proof as the last line of the subproof.
+ The strategy ends by *discharging* the assumptions of the disjuncts and entering the goal into the *main proof*.

### Formally, this strategy implements the **&or; Elim** proof rule:

[!&or; Elim](images/rules/orelim.png)

* * * * * 

## Indirect proof

+ This strategy is also known as **proof by contradiction**.
+ It is useful when the *goal* is a *negated* sentence, or when you don't have a good sense of how else to proceed with the proof.
+ We construct a single *subproof*; the assumption of the subproof is the *negation* of the *goal* of the main proof.
  - If the goal is a negated sentence, then the negation of it is a *double negation*, which is equivalent to the non-negated sentence.
+ We attempt to derive a *contradiction* within the subproof.
  - A contradiction is achieved when our proof includes both a sentence and its negation.
  - This shows that it is not possible to coherently accept all of the premises and the assumption of the subproof together.
+ The strategy ends by *discharging* the assumption and entering the negation of the assumption into the *main proof*.

### Formally, this strategy implements the **&not; Intro** proof rule:

[!&not; Intro](images/rules/notintro.png)

* * * * * 

## Conditional proof

+ This strategy is useful when the *goal* of your proof is a **conditional sentence**.
+ We construct a *subproof*; the assumption of the subproof is the *antecedent* of the conditional sentence that we want to get.
+ We attempt to make the subproof end with the *consequent* of the conditional sentence.
  - This shows that *if* the antecedent is true, *then* the consequent is also true, which is just what a conditional sentence says.
  - We can think of the subproof as showing that the consequent *follows* on the assumption of the antecedent.
+ The strategy ends by *discharging* the assumption and entering the conditional sentence into the main proof.

### Formally, this strategy implements the **&rarr; Intro** proof rule:

[!&rarr; Intro](images/rules/ifintro.png)


