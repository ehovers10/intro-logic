---
title: Some proofs of common lemmas
---

> You'll come across these lemmas frequently in proofs that we examine. Use this page as a reference until you get comfortable recognizing these lemmas and constructing the associated proofs yourself.

+ [Modus Tollens](#mt)
+ [DeMorgan's 1](#dem2)
+ [DeMorgan's 2](#dem2)
+ [Excluded Middle](#em)
+ [Conditional to Disjunction](#ctod)
+ [Disjunction to Conditional](#dtoc)

<a name="mt"></a>

## Modus Tollens

<div class="box">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >P &rarr; Q</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >&not;Q</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >P</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >Q</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 1,3</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 2,4</span></td></table></div>
</div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >&not;P</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 3-5</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *
<a name="dem1"></a>

## DeMorgan's 1

<div class="box">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >&not;(P &or; Q)</span></td></table></div>
<div class="fitchbar"></div>
<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: derive each conjunct"><div class="hid">
<div><img class="open" src="images/help-with-circle.svg" title="Sub strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >P</span></td></table></div>
<div class="fitchbar"></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >P &or; Q</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 2</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 1,3</span></td></table></div>
</div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >&not;P</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 2-4</span></td></table></div>

<div><img class="open" src="images/help-with-circle.svg" title="Sub strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >Q</span></td></table></div>
<div class="fitchbar"></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >P &or; Q</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 2</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 1,7</span></td></table></div>
</div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >&not;Q</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 2-4</span></td></table></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="" >&not;P &and; &not;Q</span></td><td class="ruleStep" ><span class="rulename" >&and; Intro</span><span class="support" > : 5,9</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *
<a name="dem2"></a>

## DeMorgan's 2

<div class="box">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >&not;P &and; &not;Q</span></td></table></div>
<div class="fitchbar"></div>

<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >P &or; Q</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Nested strategy: proof by cases"><div class="hid">
<div class="proof">
<div class="step" ><table><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >P</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >&not;P</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 3,4</span></td></table></div></div>

<div class="proof">
<div class="step" ><table><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >Q</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >&not;Q</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 6,7</span></td></table></div></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&or; Elim</span><span class="support" > : 2,3-5,6-8</span></td></table></div></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="" >&not(P &or; Q)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 2-9</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<a name="em"></a>

## Excluded middle

<div class="box">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" ></span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >&not;(P &or; &not;P)</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="DeMorgan's lemma"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >P</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >P &or; &not;P</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 2</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 1,3</span></td></table></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >&not;P</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 2-4</span></td></table></div></div></div>
<div><img class="open" src="images/help-with-circle.svg" title="Addition">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >P &or; &not;P</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 5</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 1,6</span></td></table></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >&not;&not;(P &or; &not;P)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 1-7</span></td></table></div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >P &or; &not;P</span></td><td class="ruleStep" ><span class="rulename" >&not; Elim</span><span class="support" > : 8</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<a name="ctod"></a>

## Conditional to Disjunction

<div class="box">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >P &rarr; Q</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >&not;(&not;P &or; Q)</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="DeMorgan's lemma"><div class="hid">
<div class="proof">
<div class="step" ><table><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >&not;P</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >&not;P &or; Q</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 4</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 2,5</span></td></table></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >&not;&not;P</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 3-6</span></td></table></div></div></div>
<div><img class="open" src="images/help-with-circle.svg" title="Double neg">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >P</span></td><td class="ruleStep" ><span class="rulename" >&not; Elim</span><span class="support" > : 6</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >Q</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 1,7</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Addition">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >&not;P &or; Q</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 8</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 2,9</span></td></table></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="" >&not;&not;(&not;P &or; Q)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 2-10</span></td></table></div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="" >&not;P &or; Q</span></td><td class="ruleStep" ><span class="rulename" >&not; Elim</span><span class="support" > : 11</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<a name="dtoc"></a>

## Disjunction to Conditional

<div class="box">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >&not;P &or; Q</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: conditional proof">
<div class="proof hid">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >P</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Nested strategy: proof by cases"><div class="hid">
<div class="proof">
<div class="step" ><table><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >&not;P</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Contradiction">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 2,3</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >Q</span></td><td class="ruleStep" ><span class="rulename" >&perp; Elim</span><span class="support" > : 4</span></td></table></div></div>

<div class="proof">
<div class="step" ><table><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >Q</span></td></table></div>
<div class="fitchbar" ></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >Q</span></td><td class="ruleStep" ><span class="rulename" >Reit</span><span class="support" > : 7</span></td></table></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >Q</span></td><td class="ruleStep" ><span class="rulename" >&or; Elim</span><span class="support" > : 1,3-5,6-7</span></td></table></div></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >P &rarr; Q</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Intro</span><span class="support" > : 2-8</span></td></table></div>
</div>
</div>

