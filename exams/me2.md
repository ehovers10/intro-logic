<a name="top"></a>
[Return to course home page](../index.md)

<a name="me2"></a>
# Midterm Exam \# 2

#### Assignment: 

There are five arguments below. Construct proofs for each of the arguments using the proof rules indicated for that argument. You will submit your proofs as Fitch files using the **Submit Midterm Exam #2** button on the course lecture notes home page. Each proof is worth **20 points**; partial credit will be given for partially complete proofs.

#### Deadline:

You must submit your proofs by **noon, Wednesday April 8th**.

> You may make use of the Fitch files that are provided for each argument.  These files specify the premises and the goal for the argument.  They also specify the relevant goal constraints for constructing the proof. To access the Fitch file, right click the link and save the file locally. You can then open it using the Fitch program.

### Argument 1 ([Fitch file](me2.1.prf)) ([Complete example proof](me2.1proof.prf))

For this proof, you may make use of **Ana Con** (but only on *literals*) in addition to the **Intro** and **Elim** rules for **&and;, &or;, &not;,** and **&perp;** along with **Reit**.

<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Dodec(e)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Large(e)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;Dodec(e) &or; Dodec(f) &or; Small(e)</span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Dodec(f)</span></td></table></div>
</div>



### Argument 2 ([Fitch file](me2.2.prf)) ([Complete example proof](me2.2proof.prf))

For this proof, you may make use of the **Intro** and **Elim** rules for **&and;, &or;, &not;,** and **&perp;** along with **Reit**.

<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="">A &or; B</span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >A &or; &not;&not;B</span></td></table></div>
</div>



### Argument 3 ([Fitch file](me2.3.prf)) ([Complete example proof](me2.3proof.prf))

For this proof, you you may make use of **Taut Con** to include an instance of the logical truth **A &or; &not;A** as well as the **Intro** and **Elim** rules for **&and;, &or;, &not;,** and **&perp;** along with **Reit**.

<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title=""></span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >A &or; &not;(A &and; B)</span></td></table></div>
</div>



### Argument 4 ([Fitch file](me2.4.prf)) ([Complete example proof](me2.4proof.prf))

For this proof, you may make use of the **Intro** and **Elim** rules for **&and;, &or;, &not;, &perp;,** and **&rarr;** along with **Reit**.

<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="">&not;(A &and; (B &or; C))</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >(B &rarr; C) &rarr; B</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >(C &rarr; B) &rarr; A</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;B</span></td></table></div>
</div>



### Argument 5 ([Fitch file](me2.5.prf)) ([Complete example proof](me2.4proof.prf))

For this proof, you may make use of the **Intro** and **Elim** rules for **&and;, &or;, &not;, &perp;,** and **&rarr;** along with **Reit**.

<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="">A &rarr; B</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >B &rarr; (C &rarr; D)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;A &rarr; (E &and; F)</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >C &rarr; (F &or; D)</span></td></table></div>
</div>



### Bonus questions

For these questions, type your answers and save them in a text file (.txt, .rtf, or .doc please). 

1. In your own words, write a paragraph explaining what it means to say that FOL is a **truth functionally complete** language. **(4 bonus points)**

> To say that a language is truth-functionally complete is to say that, for every possible truth table, there is a sentence in the language that expresses that truth table. FOL is truth-functionally complete because the connectives &not;, &and;, &or;, and &rarr; can be combined in different ways to express sentences that cover every possible truth table. In fact, a language that had only &not; and &or; would also be truth-functionally complete.


2. Suppose Alfred says, *We can walk to the movie or we can drive*. Is it part of the **meaning** of this sentence that we can't do both, or is it a **conversational implicature**? Justify your answer. In what way does this example differ from the example of a waiter at a restaurant saying, *You can have soup or salad with that*? **(4 bonus points)**

> Both Alfred's sentence and the waiter's sentence seem to suggest that only one of the options can be selected. But the options in Alfred's sentence seem to be more strongly exclusionary, since it is physically impossible to both drive and walk to the movie. To represent the difference between the two, we might be inclined to interpret the "or" in Alfred's sentence as *exculsive* or, so that it is part of the meaning of his sentence that you can't do both. Whereas, in the waiter's sentence, we interpret the "or" *inclusively*, and make it a *conversational implicature* that you can't have both. This approach is supported by the fact that the suggestion in Alfred's sentence is harder to cancel. It would be weird for him to follow up his sentence with, "... of course, we could do both!"

<!--Externals-->
<link rel="stylesheet" href="/css/fitch.css">
<link rel="stylesheet" href="/css/hideables.css">
