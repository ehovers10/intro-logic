---
title: "Ch. 9: Quantifiers"
---

April 6, 8, and 13, 2015

1.  [A need for new vocab](#need)
2.  [Expanding the language](#expand)
    - [Vocabulary](#vocab)
    - [Syntax](#syntax)
    - [Semantics](#semantics)
3.  [Translating quantified sentences](#trans)
    - [Aristotelian forms](#arist)
    - [Scope](#scope)
    - [Complex noun phrases](#complex)

<a name="need"></a>

# A need for new vocabulary

Consider the following sentence:

> Claire has never not gotten an A or a B on any exam she has taken.

How would we translate this sentence into FOL?

## First step: assign names and predicates

+ The sentence has one proper name, "Claire".
  - We'll translate this into FOL as *claire*
+ The sentence has a few predicates (filling in elided material):
  - "gotten an A", 
  - "gotten a B", and 
  - "took", 
+ We'll translate these as: *GotA*, *GotB*, and *Took*.
  - Notice that all three predicates are **binary**: 
  - They take a *student* as one argument, and 
  - An *exam* as the other argument.

So, an example sentence using each would be:

> *Amy got an A on the midterm.* &Rarr; GotA(amy, midterm)

> *Barry got a B on the final.* &Rarr; GotB(barry, final)

> *Cliff took the LSAT.* &Rarr; Took(cliff, lsat)

## A problem: what fills the second argument in our example sentence?

+ There isn't a specific exam named in our sentence.
+ This suggests that the sentence isn't well formed.
+ But, of course, this is a perfectly good sentence of English.

### Solution 1: admit failure

+ We accepted that we may not be able to express all English sentences using FOL. Maybe this is one example of that.
+ But this is defeatist; we can do better.

### Solution 2: add another name

+ Sometimes, we have to paraphrase the English to get an good translation into FOL.
+ Perhaps we can just fill in a name that is left out in the English.
+ Let's just add a new name, *exam*, to stand for a specific exam.

> &not;(Took(claire,exam) &and; &not;(GotA(claire,exam) &or; GotB(claire,exam)))

+ That is, roughly:
  - It's not the case that Claire took Exam and she didn't get an A or a B.
+ But this isn't what our example sentence is saying. It says that Claire **never** fails to get an A or a B.

### Solution 3: add a conjunct for all the exams

+ We could go through every exam that Claire has taken and give it a name. Then we would end up with something like:

> &not;(Took(claire,exam<sub>1</sub>) &and; &not;(GotA(claire,exam<sub>1</sub>) &or; GotB(claire,exam<sub>1</sub>))) &and; &not;(Took(claire,exam<sub>2</sub>) &and; &not;(GotA(claire,exam<sub>2</sub>) &or; GotB(claire,exam<sub>2</sub>))) &and; &not;(Took(claire,exam<sub>3</sub>) &and; &not;(GotA(claire,exam<sub>3</sub>) &or; GotB(claire,exam<sub>3</sub>))) &and; ...

+ But this doesn't seem right either.
  - We can understand our example sentence without knowing what exams Claire has taken.
  - But in order to understand this conjunction, we have to know what *exam<sub>1</sub>*, *exam<sub>2</sub>*, *exam<sub>3</sub>*, ... refer to.

### Solution 4: variables and quantifiers

+ What we need is a way to talk about objects **in general** instead of naming them specifically.
+ We're going to capture this by adding two new kinds of *vocabulary* to our language:

#### Variables: 

+ These are like names, but they can stand for *any* object.
+ *x, y, z, ...*

#### Quantifiers:

+ These serve to *group* objects together and talk about them as a group.
+ We can talk about **all** members of some group
+ Or we can talk about **some** random members of a group
+ Or we can talk about **most** members, **three** members, **all but two** members, **no** members, etc.

This solution will do the trick!

[Return to top](#top)

* * * * *

<a name="expand"></a>

# Expanding the language

<a name="vocab"></a>

## Vocabulary

We will add just two quantifiers to our language

+  **&forall; :** *For all* *Every*
+  **&exist; :** *There is*, *Some*

Quantifiers don't work alone; they combine with *variables* to fill argument slots. So, we also need to add a bunch of variables to the language

+ *x*, *y*, *z*, ...

Variables act a lot like names, so we group variables and names together and call the whole class **terms**.

<a name="syntax"></a>

## Syntax

+ Unlike the Boolean connectives, quantifiers aren't connectives at all. 
+ They are more like *names* because they work with variables to fill an **argument** of a predicate.
+ Thus, we need a new syntax rule to account for this new vocab.

But first, let's add a new bit of jargon. Compare:

1. Home(john), Cube(a), FrontOf(b,d)
2. MarriedTo(y,z), Tet(x), Bigger(x,y)

+ The expressions in 1 are *sentences* of FOL.
+ In FOL all names must refer to specific objects.
+ Since variables don't refer to specific objects, the expressions in 2 are not *sentences*.
+ But they are properly formed expressions none the less, because they have the right number of arguments for the predicate.

We call expressions like those in 1 and those in 2, **well-formed formulas**, of **wffs**.

### Syntax rule for quantifiers:

Let *P* be any *wff* and *v* any variable:

+ &forall;v P is a *wff*, and
+ &exist;v P is a *wff* 

If a variable in a *wff* has an associated quantifier, then we say that it is **bound**. If all the variables in a *wff* are bound, then the *wff* is a **sentence**. Thus, all of the following are sentences of FOL.

+ &forall;x Cube(x)
+ &forall;x &exist;y FrontOf(x,y)
+ &forall;x ((Cube(x) &and; Small(x)) &rarr; &exist;y LeftOf(x,y))

<a name="semantics"></a>

## Semantics

### Domain of discourse

Quantified sentences are used to make claims about **groups** in general as opposed to claims about *specific objects*.

In order to assess these claims, we have to know what objects are included in the groups we are talking about.  We call the complete list of objects we are talking about the **domain of discourse**.  We always evaluate quantified sentences in terms of the particular domain of discourse we are interested in.

For our purposes, we can use a world as set up in the Tarski's World program as our domain of discourse.

### Truth conditions

In FOL, we understand the meaning of sentences in terms of their *truth conditions*, so we need to establish the truth conditions of quantified sentences.

Atomic sentences are true just in case the objects named in the sentence stand in the relation expressed by the predicate of the sentence.

And sentences involving Boolean connectives are true dependent on the truth values of the sentences they connect.

On their face, quantified sentences look like compound sentences, so we may think that their truth value depends on the truth value of the sentence they precede.

But this doesn't quite work:

+ &forall;x Cube(x) is a quantified sentence, but
+ Cube(x) is not a sentence at all, so it doesn't have a truth value.

To make sense of the truth conditions of quantified sentences, we need a new semantic notion: that of **satisfaction**.

### Satisfaction

Look at the world on the board, and consider the wff: Cube(x)

+ If we let *x* stand for *a*, then Cube(x) becomes the true sentence *Cube(a)*
+ If we let *x* stand for *c*, then Cube(x) becomes the false sentence *Cube(c)*

We can summarize this by saying that (according to our example world) *a* **satisfies** the wff Cube(x) and *c* fails to satisfy it.

In general, we understand the notion of satisfaction as:

+ An object **n** *satisfies* a wff P(x) (according to world *w*) *iff* P(n) is true according to *w*
 - where P(n) is the result of substituting *n* for every **unbound** occurrence of *x* in P(x).

### Quantifier truth conditions

Using the notion of satisfaction just defined, we can establish truth conditions for quantified sentences.

Let P(x) be a wff with *x* as its only unbound variable:

+ &forall;x P(x) is true *iff* **every** n in the domain of discourse satisfies P(x).
+ &exist;x P(x) is true *iff* **some** n in the domain of discourse satisfies P(x).

[Return to top](#top)
* * * * *

<a name="trans"></a>

# Translating quantified sentences

<a name="arist"></a>

### Aristotelian forms

 English sentence     |        | FOL equivalent
:--------------------:|:------:|:----------------------------------:
 *All Ps are Qs*      | &Rarr; | &forall;x( P(x) &rarr; Q(x) )
 *Some Ps are Qs*     | &Rarr; | &exist;x( P(x) &and; Q(x) )
 *No Ps are Qs*       | &Rarr; | &forall;x( P(x) &rarr; &not;Q(x) )
                      | &Rarr; | &not;&exist;x( P(x) &and; Q(x) )
 *Some Ps are not Qs* | &Rarr; | &exist;x( P(x) &and; &not;Q(x) )

<a name="scope"></a>

### Scope

We're already familiar with the notion of scope from our study of the Boolean connectives.  Consider the following English sentence:

+ It's not the case that Mike is at the party and Sue is happy.

We could translate this sentence as:

+ &not;(Party(mike) &and; Happy(sue))

thereby indicating that Sue is bummed about Mike's absence from the party.  But we could equally well translate it as:

+ &not;Party(mike) &and; Happy(sue)

and indicate that Sue is no fan of Mike after all. The parentheses serve to tell us what the main operator of the sentence is, and set the boundary of what sentence the negation symbol applies to.  We call the sentence that the negation is applied to the **scope** of the negation.

Quantifiers similarly have a scope, and we can use parentheses with them to indicate what *wff* the quantifier applies to. Consider:

+ All you need is love.
  - &forall;x (Need(you,x) &rarr; Love(x))
  - &forall;x Need(you,x) &rarr; Love(x)

While the first translation captures the idea that anything one needs is nothing other than love, the second translation isn't a sentence at all, because its 3rd *x* is unbound. Now consider:

+ All that glitters is not gold.
  - &forall;x (Glitters(x) &rarr; &not;Gold(x))
  - &not;&forall;x (Glitters(x) &rarr; Gold(x))

Here, we have negation and quantification interacting with eachother.  The first translation suggests that gold is not among the glittery things of the world, while the second is probably closer to the intended meaning of the aphorism, that there is more value in the world than merely material things.

So, quantifier scope can be determined by the placement of parentheses and Boolean connectives.  It turns out that quantifiers can also interact with other quantifiers to dertermine their scope. Consider:

+ Every doctor researched some disease.
  - &forall;x &exist;y ((Doctor(x) &and; Disease(y)) &rarr; Researched(x,y))
  - &exist;y &forall;x ((Doctor(x) &and; Disease(y)) &rarr; Researched(x,y))

The first translation captures the use of this sentence that would be appropriate at a conference in general medicine, in which each doctor present studies a disease, but they perhaps study different ones.  The second translation is more at home at a conference on, say, blood born parasites, at which every doctor present studies *the same* disease. Thus, we can use the **order** of quantifiers to highlight which variable is in focus (the one for doctors, or the one for diseases), and changing the order results in slightly different meanings for the resulting sentences.

<a name="complex"></a>

### Complex noun phrases

Rarely do we talk just about, say, all the cubes in the world, or some person in the world. Instead, we want to narrow down the things we're talking about. In English, we have a number of ways of doing this:

+ *Something that is a cube and small...*
+ *Every man who works at the hospital...*
+ *Any dog that is both fuzzy and brown...*
+ *A a big, scary monster with fangs...*

Each of these expressions in English serve to combine **conditions** that are placed on the variable bound by the quantifier. In FOL, we don't have such a variety of expressions of subordination like *who*, *that*, and *with*. Instead, we capture all of these combining terms using the conjunction operation (&and;).

+ &exist;x (Cube(x) &and; Small(x))
+ &forall;x (Man(x) &and; Works(x, *hospital*))
+ &forall;x (Dog(x) &and; Fuzzy(x) &and; Brown(x))
+ &exist;x (Monster(x) &and; Big(x) &and; Scary(x) &and; Fanged(x))

## Back to our example sentence

When all is said and done, we'll translate our example sentence as:

> &not;&exist;x (Took(claire,x) &and; &not;(GotA(claire,x) &or; GotB(claire,x)))

