---
title: Proof construction tips
---

April 6, 2015

## Before you begin

+ Have all the relevant proof rules available
  - If you have them memorized, that's great.
  - Otherwise, get them all together in one place, and have them in front of you.
  - You can use the book: pages 573-575
  - Even better, write them all out by hand. This will help you to internalize the rules.

+ Have extra paper on hand
  - Don't try to do the proof in your head with a plan of writing it all out perfectly the first time.
  - Try things: attempt steps, set up strategies, and be ok with scratching out and starting over.
  - You can always rewrite your proof neatly when you've reached the goal.

## Determine a proof strategy

+ Examine the premises
  - What is the structure of each premise; determine this by finding the **main connective** of each premise.
  - Are there any atomic sentences that appear as parts of multiple premises? If so, think of ways that you might try to use these premises together in a rule.

+ Examine the goal
  - What is the structure of the goal?
  - How do the atomic sentences that appear as parts of the goal compare to the atomic sentences found in the premises?

+ Plan your strategy
  - Based on your examination of the premises and goal, determine the main strategy for your proof.
  - Our strategies are **proof by cases**, **proof by contradiction**, and **conditional proof**.
  - If multiple strategies fit, consider constructing two proofs: start with one strategy and see where it gets you; if it isn't working out, try the other strategy.

+ Set up the structure of the strategy
  - All strategies involve constructing a subproof (or two); draw out the structure of the subproof, so that you can fill it in as you go.
  - Write the **assumption** of the subproof, followed by the short horizontal Fitch bar.
  - Leave some space to fill in extra lines.
  - Write the **end goal** of the subproof.
  - Write the sentence that will be **discharged** into the main proof. 

## Determine a subproof strategy

+ Once you've set up your main strategy, repeat the process.
  - The assumption of your subproof is an additional **premise**
  - The end goal of your subproof is the new **goal**
  - You may need to implement a **sub-strategy** based on your main strategy.
  - Thus, you end up with subproofs **nested** within subproofs.

+ Eventually, you will get to a point where you can use the proof rules to add individual lines to the proof, thereby filling in each of your subproofs.

## Types of moves in a proof

+ Inference steps
  - These moves introduce a **single line** into the proof.
  - &and; **Intro**, &and; **Elim**, &or; **Intro**, &not; **Elim**, &perp; **Intro**, &perp; **Elim**, and &rarr; **Elim** involve inference steps.

+ Strategies
  - These moves utilize **subproofs** and introduce multiple lines into the proof.
  - &or; **Elim**, &not; **Intro**, and &rarr; **Intro** involve strategies.

## Justifications

+ Premises and assumptions do not require justifications.
+ Every other sentence you add to your proof must be justified.
+ State the **proof rule** that you used in adding the sentence.
+ State the **line numbers** of the steps that were used to infer the sentence.
  - Some proof rules cite only one line, some cite two, and some cite entire subproofs.
  - Use the structure of the proof rule definition to help you determine which lines to cite.

