---
title: Example proofs using the proof rules for the Boolean connectives including the conditionals.
---

<h2><a id="ex823" class="protectopen" href="#" onclick="return false;">Exercise 8.23</a></h2>

<div class="box" id="ex823hid" style="display: none;">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >A &rarr; B</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: conditional proof">
<div class="proof hid">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >A</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >B</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim </span><span class="support" > : 1,2</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >B &or; C</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 3</span></td></table></div>
</div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >A &rarr; (B &or; C)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Intro</span><span class="support" > : 2-4</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<h2><a id="ex826" class="protectopen" href="#" onclick="return false;">Exercise 8.26</a></h2>

<div class="box" id="ex826hid" style="display: none;">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" > </span><span class="stepFormula" title="" ></span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: conditional proof">
<div class="proof hid">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >P</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Nested strategy: conditional proof">
<div class="proof hid">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >Q</span></td></table></div>
<div class="fitchbar" ></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >P</span></td><td class="ruleStep" ><span class="rulename" >Reit</span><span class="support" > : 1</span></td></table></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >Q &rarr; P</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Intro</span><span class="support" > : 2-3</span></td></table></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >P &rarr; (Q &rarr; P)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Intro</span><span class="support" > : 1-4</span></td></table></div></div>
</div>

<a href="#top">Return to top</a>

* * * * *

<h2><a id="ex831" class="protectopen" href="#" onclick="return false;">Exercise 8.31</a></h2>

<div class="box" id="ex831hid" style="display: none;">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >(&not;Myth(c) &rarr; Mam(c)) &and; (Myth(c) &rarr; &not;Mort(c))</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >(&not;Mort(c) &or; Mam(c)) &rarr; Horn(c)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >Horn(c) &rarr; Magic(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Excluded middle">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >Myth(c) &or; &not;Myth(c)</span></td><td class="ruleStep" ><span class="rulename" >Taut Con</span><span class="support" ></span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: proof by cases"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >Myth(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Take what you need from premise 1">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >Myth(c) &rarr; &not;Mort(c)</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >&not;Mort(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 5,6</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="You can add anything you want to a sentence using &or; Intro">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >&not;Mort(c) &or; Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 7</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >Horn(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 2,8</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="" >Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 3,9</span></td></table></div>
</div>

<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="" >&not;Myth(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Same as for the first case">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="" >&not;Myth(c) &rarr; Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Same as for the first case">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >13. </span><span class="stepFormula" title="" >Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 11,12</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Same as for the first case">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >14. </span><span class="stepFormula" title="" >&not;Mort &or; Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 13</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Same as for the first case">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >15. </span><span class="stepFormula" title="" >Horn(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 2,14</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >16. </span><span class="stepFormula" title="" >Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 3,15</span></td></table></div>
</div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >17. </span><span class="stepFormula" title="" >Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&or; Elim</span><span class="support" > : 5,6-10,12-16</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<h2><a id="ex831alt" class="protectopen" href="#" onclick="return false;">Exercise 8.31 alternative</a></h2>

<div class="box" id="ex831althid" style="display: none;">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >(&not;Myth(c) &rarr; Mam(c)) &and; (Myth(c) &rarr; &not;Mort(c))</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >(&not;Mort(c) &or; Mam(c)) &rarr; Horn(c)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >Horn(c) &rarr; Magic(c)</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >&not;Magic(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus tollens lemma"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >Horn(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 3,5</span></td></table></span></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 4,6</span></td></table></div>
</div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >&not;Horn(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 5-7</span></td></table></div></div></div>

<div><img class="open" src="images/help-with-circle.svg" title="Modus tollens lemma"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >&not;Mort(c) &or; Mam(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="" >Horn(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 2,9</span></td></table></span></div>

<div class="step " ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 8,10</span></td></table></div>
</div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="" >&not;(&not;Mort &or; Mam(c))</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 9-11</span></td></table></div></div></div>

<div><img class="open" src="images/help-with-circle.svg" title="DeMorgan's lemma"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >13. </span><span class="stepFormula" title="" >&not;Mort(c)</span></td></table></div>
<div class="fitchbar"></div>
<div><img class="open" src="images/help-with-circle.svg" title="You can add anything you want to a sentence using &or;">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >14. </span><span class="stepFormula" title="" >&not;Mort(c) &or; Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 13</span></td></table></span></div>

<div class="step " ><table ><td class="step" ><span class="stepnumber" >15. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 12,14</span></td></table></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >16. </span><span class="stepFormula" title="" >&not;&not;Mort(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 13-15</span></td></table></div></div></div>

<div><img class="open" src="images/help-with-circle.svg" title="DeMorgan's lemma"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >17. </span><span class="stepFormula" title="" >Mam(c)</span></td></table></div>
<div class="fitchbar"></div>
<div><img class="open" src="images/help-with-circle.svg" title="You can add anything you want to a sentence using &or;">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >18. </span><span class="stepFormula" title="" >&not;Mort(c) &or; Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 17</span></td></table></span></div>

<div class="step " ><table ><td class="step" ><span class="stepnumber" >19. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 12,18</span></td></table></div>
</div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >20. </span><span class="stepFormula" title="" >&not;Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 17-19</span></td></table></div></div></div>

<div><img class="open" src="images/help-with-circle.svg" title="Modus tollens lemma"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >21. </span><span class="stepFormula" title="" >Myth(c)</span></td></table></div>
<div class="fitchbar"></div>
<div><img class="open" src="images/help-with-circle.svg" title="Take what you need from premise 1">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >22. </span><span class="stepFormula" title="" >Myth(c) &rarr; &not;Mort(c)</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >23. </span><span class="stepFormula" title="" >&not;Mort(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 21,22</span></td></table></span></div>

<div class="step " ><table ><td class="step" ><span class="stepnumber" >24. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 16,23</span></td></table></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >25. </span><span class="stepFormula" title="" >&not;Myth(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 21-24</span></td></table></div></div></div>
<div><img class="open" src="images/help-with-circle.svg" title="Take what you need from premise 1">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >26. </span><span class="stepFormula" title="" >&not;Myth(c) &rarr; Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >27. </span><span class="stepFormula" title="" >Mam(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 25,26</span></td></table></span></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >28. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 20,27</span></td></table></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >29. </span><span class="stepFormula" title="" >&not;&not;Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 4-28</span></td></table></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >30. </span><span class="stepFormula" title="" >Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Elim</span><span class="support" > : 29</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<h2><a id="ex833" class="protectopen" href="#" onclick="return false;">Exercise 8.33</a></h2>

<div class="box" id="ex833hid" style="display: none;">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >(Horn(c) &rarr; (Elus(c)) &and; Magic(c)) &and; (&not;Horn(c) &rarr; (&not;Elus(c) &and; &not;Magic(c))</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >&not;Horn(c) &rarr; &not;Myth(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: conditional proof in both directions"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >Horn(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Check out premise 1">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >Horn(c) &rarr; (Elus(c) &and; Magic(c))</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >Elus(c) &and; Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 3,4</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Take what you need from the conjunction above">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 5</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >Magic(c) &or; Myth(c)</span></td><td class="ruleStep" ><span class="rulename" >&or; Intro</span><span class="support" > : 6</span></td></table></div>
</div>

<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >Magic(c) &or; Myth(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Nested strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >&not;Horn(c)</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Nested strategy: proof by cases "><div class="hid">

<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="" >Magic(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Take what you need from premise 1">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="" >&not;Horn(c) &rarr; (&not;Elus(c) &and; &not;Magic(c))</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 1</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="" >&not;Elus(c) &and; &not;Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 9,11</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Take what you need from the conjunction above">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >13. </span><span class="stepFormula" title="" >&not;Magic(c)</span></td><td class="ruleStep" ><span class="rulename" >&and; Elim</span><span class="support" > : 12</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >14. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 10,13</span></td></table></div></div>

<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >15. </span><span class="stepFormula" title="" >Myth(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Modus ponens">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >16. </span><span class="stepFormula" title="" >&not;Myth(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 2,9</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >17. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 15,16</span></td></table></div></div></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >18. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&or; Elim</span><span class="support" > : 8,14-15,16-17</span></td></table></div></div>

<div class="step" ><table ><td class="step" ><span class="stepnumber" >19. </span><span class="stepFormula" title="" >&not;&not;Horn(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 9-18</span></td></table></div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >20. </span><span class="stepFormula" title="" >Horn(c)</span></td><td class="ruleStep" ><span class="rulename" >&not; Elim</span><span class="support" > : 19</span></td></table></div></div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >21. </span><span class="stepFormula" title="" >Horn(c) &harr; (Magic(c) &or; Myth(c))</span></td><td class="ruleStep" ><span class="rulename" >&harr; Intro</span><span class="support" > : 3-7,8-20</span></td></table></div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<h2><a id="ex835" class="protectopen" href="#" onclick="return false;">Exercise 8.35</a></h2>

<div class="box" id="ex835hid" style="display: none;">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="" >&not;Cube(b) &rarr; Small(b)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="" >Small(c) &rarr; (Small(d) &or; Small(e))</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="" >Small(d) &rarr; &not;Small(c)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="" >Cube(b) &rarr; &not;Small(e)</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Main strategy: conditional proof">
<div class="proof hid">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="" >Small(c)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Check out premise 2">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="" >Small(d) &or; Small(e)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 2,5</span></td></table></span></div>

<div><img class="open" src="images/help-with-circle.svg" title="Nested strategy: proof by cases"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="" >Small(d)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Check out premise 3">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="" >&not;Small(c)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 3,7</span></td></table></span></div>
<div><img class="open" src="images/help-with-circle.svg" title="Check out line 5">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 5,8</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="" >Small(b)</span></td><td class="ruleStep" ><span class="rulename" >&perp; Elim</span><span class="support" > : 9</span></td></table></div>
</div>

<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="" >Small(e)</span></td></table></div>
<div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg" title="Nested strategy: proof by contradiction"><div class="hid">
<div class="proof">
<div class="step" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="" >Cube(b)</span></td></table></div>
<div class="fitchbar" ></div>
<div><img class="open" src="images/help-with-circle.svg" title="Check out premise 4">
<span class="step hid" ><table ><td class="step" ><span class="stepnumber" >13. </span><span class="stepFormula" title="" >&not;Small(e)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 1,12</span></td></table></span></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >14. </span><span class="stepFormula" title="" >&perp;</span></td><td class="ruleStep" ><span class="rulename" >&perp; Intro</span><span class="support" > : 11,13</span></td></table></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >15. </span><span class="stepFormula" title="" >&not;Cube(b)</span></td><td class="ruleStep" ><span class="rulename" >&not; Intro</span><span class="support" > : 11-14</span></td></table></div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >16. </span><span class="stepFormula" title="" >Small(b)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Elim</span><span class="support" > : 1,15</span></td></table></div></div></div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >17. </span><span class="stepFormula" title="" >Small(b)</span></td><td class="ruleStep" ><span class="rulename" >&or; Elim</span><span class="support" > : 6,7-10,11-15</span></td></table></div>
</div></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" >18. </span><span class="stepFormula" title="" >Small(c) &rarr; Small(b)</span></td><td class="ruleStep" ><span class="rulename" >&rarr; Intro</span><span class="support" > : 5-17</span></td></table></div>
</div>
</div>

