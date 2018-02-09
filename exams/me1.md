---
title: Midterm Exam 1
course: Intro Logic, s15
date: February 23, 2015
---
<div style="width: 800px; margin: auto;">
<div style="float: left; width: 25%; text-align: left; margin-left: 2%;">
  **Introduction to Logic**

  **Feb. 23, 2015** 
</div>
<div style="float: left; width: 46%; text-align: center;"><h2>Midterm Exam 1</h2></div>
<div style="float: left; width: 25%; text-align: right; margin-right: 2%;">
  **Name:**<span style="padding: 0 75px; border-bottom: 1px solid #000;"> </span>

  100 points possible
</div>
<div style="clear: both;"></div>

* * * * *

<!--<div style="height: 1em;"></div>-->
## Logical concepts

(@) What does it mean for an argument to be *valid*? **(3 points)**

<div style="height: 4em;"></div>

(@) Why does using the *method of counterexample* show that an argument is invalid? **(3 points)**

<div style="height: 4em;"></div>

(@) Fill in the blanks below with the logical concept that best completes the sentence. Draw your answers from the list of concepts provided. Each concept is used at most once; some will not be used at all. **(2 points each)**

> **Concepts:** *proof, counterexample, truth conditions, possibility, logical truth, truth table, reflexive, commutative, transitive, equivalent, inverse, semantics, syntax, idempotence, associative*

<div style="line-height: 1.75em; margin-left: 5%;">
a.  If an argument is invalid, then it is possible to construct a <span style="padding: 0 150px; border-bottom: 1px  solid #000;"> </span> to it.
b. If a sentence is a <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>, then it is true in all possible worlds.
b. *BackOf(x,y)* and *FrontOf(x,y)* are an example of predicates that stand in the <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span> relation.
b. A <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span> is a step by step procedure for showing one sentence to be a logical consequence of other sentences.
b. If a sentence is a tautology, then it is true in every row of its <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>.
b. The Boolean connective $\wedge$ has the property of being <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span> because the order of the sentences it connects does not matter to its truth value.
b. If sentence A is <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span> to sentence B, then we can replace A for B in any line of a proof.
b. In FOL, the meaning of a sentence is constituted by its <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>.
b. Since the predicate *Larger(x,y)* is <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>, we can infer *Larger(a,c)* from *Larger(a,b)* and *Larger(b,c)*.
b. *A $\vee$ (B $\vee$ C)* is equivalent to *(A $\vee$ B) $\vee$ C* because the Boolean connective $\vee$ has the property of being <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>.
</div>

<div style="page-break-before: always;"></div>
## Translations

(@) For each of the English sentences below, write an appropriate translation into FOL. **(2 points each)**

<div style="line-height: 1.75em; margin-left: 5%;">
a. Craig is not hungry, and Dana is starving. <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>
b. Either Fran or Gilbert ate the last cookie. <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>
b. Hugh had a headache and went home. <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>
b. It is not the case that Ichabod loves Julie. <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>
b. Kale is not both tasty and good for you. <span style="padding: 0 150px; border-bottom: 1px solid #000;"> </span>
</div>

## Assessing truth

(@) Using the world on the left, indicate whether each of the FOL sentences on the right is *true* or *false* by placing either a **T** or an **F** to the left of each sentence. **(2 points each)**

<div style="line-height: 1.75em; float: right; margin-right: 5%;">
a. Large(c)
b. Large(f) &and; Tet(f)
b. Medium(c) &or; FrontOf(a,b)
b. RightOf(a,c)
b. (SameSize(d,f) &and; SameSize(b,c)) &and; SameSize(e,d)
b. SameSize(b,c)
b. SameRow(a,a)
b. Adjoins(a,b) &or; a = b
b. Between(e,d,f)
b. LeftOf(d,d)
</div>
<img src="images/me1w1.png" style="float: left; width: 40%; margin-left: 5%;">
<div style="clear: both;"></div>

(@) Using the checkerboard on the right, construct a world in which **every** sentence on the left is true. You may want to practice on some scratch paper before drawing your official world on the exam. **(2 points each)**

<div style="line-height: 1.75em; float: left; margin-left: 10%;">
a. Tet(a)
b. c = d
b. RightOf(a,c)
b. Between(a,c,f)
b. Cube(d) &and; Medium(d)
b. &not;SameRow(a,f)
b. Larger(f,d)
</div>
<img src="images/check.png" style="float: right; width: 40%; margin-right: 10%;">
<div style="clear: both;"></div>

<div style="page-break-before: always;"></div>
## Proofs

(@) The proofs below have a number of missing pieces. Fill in the blanks with a sentence of FOL or a justification where appropriate. (Remember that justifications must include the rule name and the line numbers for the lines you use in the justification.) **(3 points per blank)**

> a. **Argument 1** 
> 
> <img src="images/me1p3.png" style="margin-left: 2%; margin-bottom: 1em; width: 90%;">

> b. **Argument 2** 
> 
> <img src="images/me1p5.png" style="margin-left: 2%; margin-bottom: 1em; width: 90%;">


## Counterexample

(@) The argument below is invalid. Using the checkerboard provided, construct a counterexample world that shows the argument to be invalid. **(5 points)**

<img src="images/me1pcounter.png" style="float: left; margin-left: 10%;">
<img src="images/check.png" style="float: right; width: 40%; margin-right: 10%;">
<div style="clear: both;">

<div style="page-break-before: always;"></div>
## Truth tables

(@) Fill out the truth tables below. Make sure that you fill the column under every Boolean connective. **(4 points per table)**

<img src="images/me1tt1.png" style="float: left; width: 45%; margin-left: 5%;">
<img src="images/me1tt2.png" style="float: right; width: 40%; margin-right: 5%;">
<div style="clear: both;"></div>
<div style="height: 2em;"></div>

(@) What does the left table above tell us about the relation between sentences of the form **&not;A &or; B** and **&not;(&not;B &and; A)**? **(2 points)**

<div style="height: 4em;"></div>

## Bonus

(@) For any of the proof lines you marked with **Ana Con** in the *Proofs* section, explain your intuitive reason for the justification you gave. Be sure to give the argument and line number in your explanation. **(2 points each)**

<div style="height: 4em;"></div>

(@) Explain what it means to say that FOL is a *recursive* language. **(3 points)**

<div style="height: 3em;"></div>

(@) Translate the following English sentence into FOL. **(2 points)**

> *Vera has never not gotten either an A or a B on any exam she has taken.* 

<div style="height: 3em;"></div>
</div>

<link rel="stylesheet" href="css/protect.css">
<script src="js/jquery-1.11.2.js"></script>
<script src="js/protect.js"></script>
