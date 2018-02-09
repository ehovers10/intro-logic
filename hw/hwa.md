<a name="top"></a>
[Return to course home page](./index.md)

Written homework answer key
===========================

1.  [HW \# 1](#hw1)
    -   [Ex. 1.8](#ex18)
    -   [Ex. 1.11](#ex111)
2.  [HW \# 2](#hw2)
    -   [Ex. 2.1](#ex21)
    -   [Ex. 3.19](#ex319)
3. [HW \# 3](#hw3)
4. [HW \# 4](#hw4)
    - [Ex. 7.21](#ex721)
    - [Ex. 7.30](#ex730)
5. [HW \# 5](#hw5)
    - [Ex. 10.1](#ex101)

<a name="hw1"></a>
HW \# 1
=======

Assignment: 1.2, 1.3, 1.4, 1.5, 1.6, 1.8, 1.9, 1.11 (**5 points each**)

<a name="ex18"></a>
Ex. 1.8
-------

1.  ----------------------------  -------------------------
      GaveScruffy(max,max)          GaveCarl(max,max)
      GaveScruffy(max,claire)       GaveCarl(max,claire)
      GaveScruffy(claire,max)       GaveCarl(claire,max)
      GaveScruffy(claire,claire)    GaveCarl(claire,claire)

2.  ------------------------  ---------------------------
      Gave(max,max,max)         Gave(max,scruffy,max)
      Gave(max,max,claire)      Gave(max,scruffy,claire)
      Gave(max,max,scruffy)     Gave(max,scruffy,scruffy)
      Gave(max,max,carl)        Gave(max,scruffy,carl)
      Gave(max,claire,max)      Gave(max,carl,max)
      Gave(max,claire,claire)   Gave(max,carl,claire)
      Gave(max,claire,scruffy)  Gave(max,carl,scruffy)
      Gave(max,claire,carl)     Gave(max,carl,carl)

    = 16

    x 4 (for each name as the first argument) = 64 total sentences

    *The student does not need to list all of the sentences of this language. They need only give the correct number.*

3.  If n = number of names, then number of sentences = n<sup>2</sup> per binary predicate. So, 4 names and 4 binary predicates = 4<sup>2</sup> x 4 = 64 sentences.

<a name="ex111"></a>
Ex. 1.11
--------

1.  ShakeHands(max, claire, past)
    -   ShakeHands(x,y,z) is a ternary predicate that takes two people and a time as arguments. It says that the two people shook hands at the indicated time.
    -   *max* and *claire* are names of people and *past* is a name for any time earlier than today.

2.  ShakeHands(max, claire, yesterday)
    -   This is the same predicate as above.
    -   *yesterday* is a name for a specific time one day prior to today.

3.  LessContagious(aids, influenza)
    -   *LessContagious(x,y)* is a binary predicate that takes two diseases as arguments.
    -   *aids* and *influenza* are names of diseases.

4.  BetweenSize(spain, france, portugal) or Size(portugal, spain, france)
    -   *BetweenSize(x,y,z)* is a ternary predicate that takes three objects as arguments. It says that the first object is between the second two objects in size.
    -   *Size(x,y,z)* is a ternary predicate that takes three objects as arguments. It orders the objects in size from smallest to largest.
    -   *spain*, *france*, and *portugal* are names for objects; specifically, they name countires.

5.  Loves(misery, company)
    -   *Loves(x,y)* is a binary predicate that takes two objects as arguments. It says that the first object loves the second.
    -   *misery* and *company* are names for objects; specifically, they name abstract objects. *misery* is an emotion, and *company* is a state of not being alone.

* * * * *

<a name="hw2"></a>
HW \# 2
=======

Assignment: 2.1, 2.10, 2.24, 2.26, 3.6, 3.10, 3.15, 3.19 (**5 points each**)

<a name="ex21"></a>
Ex 2.1
------

Argument  | Valid?  | Sound-Socrates?  | Sound-Wittgenstein?
:---------|:--------|:-----------------|:---------------------
 1        |  yes    |    yes           |     no
 2        |  yes    |    yes           |     no 
 3        |  yes    |    yes           |     no 
 4        |  yes    |    yes           |     no 
 5        |  no     |    n/a           |     n/a
 6        |  yes    |    yes           |     no 
 7        |  no     |    n/a           |     n/a
 8        |  no     |    n/a           |     n/a

<a name="ex319"></a>
Ex 3.19
-------

1.  ParentOf(chris,alex) *or* ChildOf(alex,chris)
2.  SiblingOf(chris,alex)
3.  Man(chris)
4.  EvenNumber(4) *or* \$\\neg\$OddNumber(4) (if zero is not considered even or odd)
5.  NormalPerson(chris)
6.  Grandmother(mary,alex) (ok if the student doesn't do this one)

*Be lenient on ex 3.19. As long as the sentence is a rough translation, count it as correct.*

[Return to top](#top)
* * * * *

<a name="hw4"></a>
HW #4
======

Assignment: 7.12, 7.16, 7.21*, 7.30*, 8.18, 8.20, 8.29, 8.34 (**5 points each**, starred exercises have written components, which should be submitted using the **Submit HW #4** button on the lecture notes home page)

**Deadline:** This homework assignment is due the last day of classes -- **Monday, May 4** at noon.

<a name="ex721"></a>
## Ex 7.21

The consequent of the conditional *If Keanu Reeves is a great actor, then I'm a monkey's uncle* is *I'm a monkey's uncle*, which is false (almost?) whenever it is uttered. In fact, it is a sentence that few people could ever mistakenly believe to be true. But, according to the truth table for the conditional, if a conditional has a false consequent, then the whole conditional can only be true if the antecedent is also false. So, when I utter this conditional, I presume that you will recognize the falsity of the consequent. And, as a result, if you take me to be a reliable person, you will infer that I must think the antecedent is false, too. Thus, I get my meaning across by relying on our mutual understanding of the semantics of conditionals.

<a name="ex730"></a>
## Ex. 7.30

 Boolean sentence | Using only &rarr; and &perp;
-----------------:|:-----------------------------
 &not;P           | P &rarr; &perp;
 P &and; Q        | (P &rarr; (Q &rarr; &perp;)) &rarr; &perp;
 P &or; Q         | (P &rarr; &perp;) &rarr; Q

[Return to top](#top)
* * * * *

<a name="hw5"></a>
HW #5
======

Assignment: 9.3, 9.5, 9.9, 9.16, 9.17, 10.1*, 10.8 (**6 points each**, the starred exercise has a written component, which should be submitted using the **Submit HW #5** button on the lecture notes home page. Notice that there are **42 points possible** for this HW, so you have an opportunity to get a couple bonus points.)

**Deadline:** This homework assignment is due on **Wednesday, April 15** at noon.

<a name="ex101"></a>
## Ex. 10.1

    | Annotated sentence                                                    | Truth-functional form | a/b/c 
---:|:----------------------------------------------------------------------|:----------------------|:------
 1. | <span class="scope">&forall;x x=x</span><sub>A</sub>  | A  | b
 2. | <span class="scope">&exist;x Cube(x)</span><sub>A</sub> &rarr; <span class="scope">Cube(a)</span><sub>B</sub> | A &rarr; B | c
 3. | <span class="scope">Cube(a)</span><sub>A</sub> &rarr; <span class="scope">&exist;x Cube(x)</span><sub>B</sub> | A &rarr; B | b
 4. | <span class="scope">&forall;x(Cube(x) &and; Small(x))</span><sub>A</sub> &rarr; <span class="scope">&forall;x(Small(x) &and; Cube(x))</span><sub>B</sub> | A &rarr; B | b
 5. | <span class="scope">&forall;v(Cube(v) &harr; Small(v))</span><sub>A</sub> &harr; &not;&not;<span class="scope">&forall;v(Cube(v) &harr; Small(v))</span><sub>A</sub> | A &harr; &not;&not;A | a
 6. | <span class="scope">&forall;x Cube(x)</span><sub>A</sub> &rarr; &not;<span class="scope">&exist;&not;Cube(x)</span><sub>B</sub> | A &rarr; B | b
 7. | \[<span class="scope">&forall;z(Cube(z) &rarr; Large(z)) &and; Cube(b)</span><sub>A</sub>\] &rarr; <span class="scope">Large(b)</span><sub>B</sub> | A &rarr; B | b
 8. | <span class="scope">&exist;x Cube(x)</span><sub>A</sub> &rarr; (<span class="scope">&exist;x Cube(x)</span><sub>A</sub> &or; <span class="scope">&exist;y Dodec(y)</span><sub>B</sub>) | A &rarr; (A &or; B) | a
 9. | (<span class="scope">&exist;x Cube(x)</span><sub>A</sub> &or; <span class="scope">&exist;y Dodec(y)</span><sub>B</sub>) &rarr; <span class="scope">&exist;x Cube(x)</span><sub>A</sub> | (A &or; B) &rarr; A | c
 10. | \[(<span class="scope">&forall;u Cube(u)</span><sub>A</sub> &rarr; <span class="scope">&forall;u Small(u)</span><sub>B</sub>) &and; &not;<span class="scope">&forall;u Small(u)</span><sub>B</sub>\] &rarr; &not;<span class="scope">&forall;u Cube(u)</span><sub>A</sub> | \[(A &rarr; B) &and; &not;B\] &rarr; &not;A | a

* * * * *
[Return to top](#top)

<!-- Externals -->
<link rel="stylesheet" href="../css/protect.css">
<script src="../js/jquery-1.11.2.js"></script>
<script src="../js/protect.js"></script>
<link rel="stylesheet" href="../css/hw.css">
