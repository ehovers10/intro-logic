---
layout: default
title: "Ch. 1: Atomic Sentences"
---

January 28, 2015

1.  [Topic of investigation](#topic)
2.  [The language of FOL](#lang)
    -   [Vocabulary](#vocab)
    -   [Syntax](#syntax)
    -   [Semantics](#sem)
3.  [Fol vs. English](#eng)
    -   [Unique names](#uni)
    -   [Empty names](#empty)
    -   [Vagueness](#vague)
    -   [Between](#bet)

<a id="topic"></a>
Topic of investigation
======================

The logical language that we put together depends on what subset of human reasoning we are interested in investigating. In this class, we’re going to turn our attention to reasoning involving basic geometrical objects standing in certain physical relations to each other. So, for this, our domain of reasoning includes:

+ A discrete space within which the objects exist.
    - This represents the world of investigation.
    - It is a two dimensional landscape in which objects can be situated in specific locations; basically, it is a checkerboard.
+ A set of objects that exist within our world.
    - The objects we will use are basic geomtrical blocks.
+ A set of properties and relations that can hold among the objects.
    - The properties are the shapes our geometical objects can have: cube, tetrahedron, and dodecahedron.
    - The relations are basic spatial relations such as being in front of, being bigger than, or being in between.

<a id="lang"></a>
The language of FOL
===================

With this topic of investigation as background, we can design our
language to represent each of these pieces.

As with all languages, we start with a list of *vocabulary*, define
*syntax* rules for building sentences out of the vocubulary, and
establish a *semantics* for assigning meaning to those sentences.

<a id="vocab"></a>
Vocabulary
----------

We divide the vocabulary of a logical language into the *logical* vocab
and the *non-logical* vocab. For FOL, the logical vocab consists of
**connectives** and **quantifiers**.

We're going to build our language in stages, starting with the simplest
possible sentences. These sentences, which we call **atomic sentences**,
do not contain any logical vocab, so we'll put off discussing this until
Ch 2.

The non-logical vocab of FOL can be divided into two parts: **names**
and **predicates**.

### Names

The function of names in FOL is to *refer* to the objects in our domain
of investigation.

-   Each name picks out a particular, unique individual geometical
    block.
-   Thus, names are similar to *proper nouns* in English.
-   In FOL, the symbols that we use as names are: *a, b, c, d, e, f* and
    *n<sub>1</sub>, n<sub>2</sub>, n<sub>3</sub>, ...*

### Predicates

The function of predicates in FOL is to *express* properties and
relations between the objects of are domain.

-   Each predicate takes one or more objects as **arguments** to create
    a complete sentence.
-   Predicates are grouped based on the number of arguments they require
    to make a complete sentence.
    -   This is known as the **arity** of the predicate.
    -   *Unary* predicates take one argument, *binary* predicates take
        two arguments, and *ternary* predicates take three arguments.
    -   In principle, a predicate could have an arity of any size, but
        we will restrict our attention to predicates with at most three
        arguments.
-   In FOL, we represent predicates with capital words followed by
    parentheses. We represent the arity of the predicate with **variable
    names** (*x,y,z*) in between the parentheses.
-   Examples: *Cube(x), FrontOf(x,y), Between(x,y,z)*

<a id="syntax"></a>
Syntax 
------

-   Now that we have a basic vocabulary, we need a rule for combining
    words to create sentences.
-   The smallest sentences of FOL are known as **atomic sentences**.
    They are composed of one *predicate* and enough *names* to match the
    arity of that predicate.
-   The primary syntactic rule for atomic sentences is **prefix
    notation**, in which the prediacte is prefixed to the names, and the
    names fill the slots in the parentheses of the predicate.
    -   Examples: *Cube(a), FrontOf(e,b),
        Between(n<sub>1</sub>,n<sub>2</sub>,n<sub>3</sub>)*
-   However, there is one type of atomic sentence that follows **infix
    notation**, with the predicate inserted between the names.
    -   *a = b*

<a name="sem"></a>
Semantics
---------

The semantics for a language is a set of rules for assigning meanings to
sentences. Eventually, we will introduce some of these rules explicitly.
But for now, we'll use that fact that FOL is based very closely on
English.

### Translation

-   As English speakers, we all understand the meaning of sentences such
    as *Indiana is between Illinois and Ohio.*
-   So, if we can associate sentences of FOL with certain English
    sentences, we can use our understanding of English to get the
    meaning of the FOL sentences.
-   We do this by **translating** the FOL sentence into English. The
    translation schema is pretty much what you would expect:
    -   Cube(a)  →  *a is a cube.*
    -   FrontOf(e,b)  →  *e is in front of b.*
    -   Between(n<sub>1</sub>,n<sub>2</sub>,n<sub>3</sub>)  → 
        *n<sub>1</sub> is between n<sub>2</sub> and n<sub>3</sub>.*

### Truth conditions

In English, sentences we use can carry lots of different shades of
meaning. A sentences used in one situation might convey things that it
doesn't convey in other situations.

-   But in FOL, the only kind of meaning we are concerned with is
    **truth conditions**
-   The truth conditions of a sentences is a specification of all the
    ways in which the sentence can be either true or false.
-   The way we test the truth conditions of a sentence is by
    constructing a *hypothetical world* and asking whether the English
    translation of the FOL sentence is true in that world.
    -   As we construct more worlds and check the sentence against them,
        we get a more full picture of the truth conditions for the
        sentence.
-   The program *Tarski's World* is a tool for examining the truth
    conditions of sentences of FOL.

<a id="eng"></a>
FOL vs. English
===============

While FOL is closely based on English, it's important to remember that
they are distinct languages. Thus, there can be some important
differences from how FOL sentences are interpreted compared to their
English counterparts.

<a id="uni"></a>
Uniqueness of names
-------------------

In English, it is quite common for different individuals to share a
name.

-   For instance, *Jack Johnson* can refer either to an professional
    boxer who lived in the early 20th century or a laid back singer
    songwriter from Hawaii.
-   This fact of English can sometimes lead to confusion, but there's no
    deep problem.
-   But in FOL, every name must have a *unique* referent.
    -   If we assign the name *a* to an object in our world, then no
        disticnt object can also be called *a*.

<a id="empty"></a>
Empty names
-----------

In English, we can use names even if they don't refer to anything.

-   For instance, *Santa Claus brings presents to all the good little
    boys and girls* is meaningful even though *Sata Claus* is **empty**
    because it doesn't refer to any real thing.
-   But in FOL, sentences that involve empty names cannot be assigned a
    truth value.
    -   Thus, there must be an object for every name in every sentence
        of the language.

<a id="vague"></a>
Vagueness
---------

In English, we use lots of predicates that don't clearly apply to
certain objects.

-   For instance, *High Point* has the highest elevation of any location
    in New Jersey.
    -   But is High Point a *mountain*?
    -   In some sense it seems true to call it a mountain, but compared
        to the Rockies, it seems wrong to call it a mountain.
    -   We call predicates like this *vague* because they don't clearly
        apply to some objects.
-   Using vauge predicates can be very valuable in communicating what
    we're trying to get across in English.
-   But in FOL, vagueness only gets in the way of investigating clear
    logical principles.
    -   Thus, for every predicate, every name either explicitly applies
        to it, or it doesn't.

<a id="bet"></a>
Between
-------

In English, it seems fine to say *South Dakota is between Montana and
Illinois* because there is an interstate connecting all three. But they
don't lie in a straight line

-   In FOL, the interpretation of Between(x,y,z) is more strict.
    -   if *a,b,* and *c* are in the same row or the same column, then
        Between(x,y,z) will apply to them.
    -   it also applies if *a,b,* and *c* are on the same diagonal (like
        a bishop travels in chess).
    -   but, if *a,b,* and *c* are not in a straight line, then
        Between(x,y,z) does not apply.

