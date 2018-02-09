---
layout: default
title: Example proofs using the proof rules for the Boolean connectives
---

+ [Arguments](#arg)
+ [Proofs](#proof)
  - [Exercise 6.4](#ex64)
  - [Exercise 6.5](#ex65)
  - [Exercise 6.12](#ex612)
  - [Exercise 6.19](#ex619)
  - [Exercise 6.29](#ex629)
  - [Exercise 6.30](#ex630)

<a name="arg"></a>

## Arguments

<div class="argbox">
<h3>Exercise 6.4</h3>
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="(A &#8743; B) &#8744; C" >(A &#8743; B) &#8744; C</span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="C &#8744; B" >C &#8744; B</span></td></table></div>
</div>
</div>

<div class="argbox">
<h3>Exercise 6.5</h3>
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="A &and; (B &or; C)" >A &and; (B &or; C)</span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="(A &and; B) &or; (A &and; C)" >(A &and; B) &or; (A &and; C)</span></td></table></div>
</div>
</div>

<div style="clear: both;"></div>

* * * * * 

<div class="argbox">
<h3>Exercise 6.12</h3>
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Dodec(e)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;Small(e)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;Dodec(e) &or; Dodec(f) &or; Small(e)</span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Dodec(f)</span></td></table></div>
</div>
</div>

<div class="argbox">
<h3>Exercise 6.19</h3>
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >A &or; B</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;B &or; C</span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >A &or; C</span></td></table></div>
</div>
</div>

<div style="clear: both;"></div>

* * * * * 

<div class="argbox">
<h3>Exercise 6.29</h3>
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Larger(a,b) &or; Larger(a,c)</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Smaller(b,a) &or; &not;Larger(a,c)</span></td></table></div>
<div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Larger(a,b)</span></td></table></div>
</div>
</div>

<div class="argbox">
<h3>Exercise 6.30</h3>
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;(&not;Cube(a) &and; Cube(b))</span></td></table></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >&not;(&not;Cube(b) &or; Cube(c))</span></td></table></div><div class="fitchbar" ></div>
<div class="step" ><table ><td class="step" ><span class="stepnumber" ></span><span class="stepFormula" title="" >Cube(a)</span></td></table></div>
</div>
</div>

<div style="clear: both;"></div>

* * * * * 

<a name="proof"></a>

## Proofs

> The proofs below are password protected. To access the proofs, click on the exercise number and enter the appropriate password.

<a name="ex64"></a>
<h2><a id="ex64a" class="protectopen" href="#" onclick="return false;">Exercise 6.4</a></h2>

<div id="ex64ahid" style="display: none;">
<ul>
<li><bf>Goal:</bf> C &or; B</li>
</ul>

<div class="box">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="(A &#8743; B) &#8744; C" >(A &#8743; B) &#8744; C</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="proof hid" ><div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="A &#8743; B" >A &#8743; B</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="B" >B</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8743;&#160;Elim&#160;</span><span class="support" > : 2</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="C &#8744; B" >C &#8744; B</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Intro&#160;</span><span class="support" > : 3</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="C" >C</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="C &#8744; B" >C &#8744; B</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Intro&#160;</span><span class="support" > : 5</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="C &#8744; B" >C &#8744; B</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Elim&#160;</span><span class="support" > : 1, 2-4, 5-6</span></td></table></div></div>
</div>
</div>
</div>

<a href="#top">Return to top</a>
 
* * * * *

<a name="ex65"></a>
<h2><a id="ex65a" class="protectopen" href="#" onclick="return false;">Exercise 6.5</a></h2>

<div id="ex65ahid" style="display: none;">
<ul>
<li><bf>Goal:</bf> (A &and; B) &or; (A &and; C)</li>
</ul>

<div class="box">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="A &#8743; (B &#8744; C)" >A &#8743; (B &#8744; C)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="A" >A</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8743;&#160;Elim&#160;</span><span class="support" > : 1</span></td></table>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="B &#8744; C" >B &#8744; C</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8743;&#160;Elim&#160;</span><span class="support" > : 1</span></td></table>

<div><img class="open" src="images/help-with-circle.svg">
<div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="B" >B</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="A &#8743; B" >A &#8743; B</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8743;&#160;Intro&#160;</span><span class="support" > : 4, 2</span></td></table>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="(A &#8743; B) &#8744; (A &#8743; C)" >(A &#8743; B) &#8744; (A &#8743; C)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Intro&#160;</span><span class="support" > : 5</span></td></table></div></div>
</div></div></div>

<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="C" >C</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="A &#8743; C" >A &#8743; C</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8743;&#160;Intro&#160;</span><span class="support" > : 7, 2</span></td></table>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="(A &#8743; B) &#8744; (A &#8743; C)" >(A &#8743; B) &#8744; (A &#8743; C)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Intro&#160;</span><span class="support" > : 8</span></td></table></div></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="(A &#8743; B) &#8744; (A &#8743; C)" >(A &#8743; B) &#8744; (A &#8743; C)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Elim&#160;</span><span class="support" > : 3, 4-6, 7-9</span></td></table></div></div>
</div></div></div></div>
</div></div></div></div>
</div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<a name="ex612"></a>
<h2><a id="ex612a" class="protectopen" href="#" onclick="return false;">Exercise 6.12</a></h2>

<div id="ex612ahid" style="display: none;">
<ul>
<li><bf>Goal:</bf> Dodec(f)</li>
</ul>

<div class="box">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="Dodec(e)" >Dodec(e)</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="&#172;Small(e)" >&#172;Small(e)</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="&#172;Dodec(e) &#8744; Dodec(f) &#8744; Small(e)" >&#172;Dodec(e) &#8744; Dodec(f) &#8744; Small(e)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="&#172;Dodec(e)" >&#172;Dodec(e)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="Dodec(e)" >Dodec(e)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Reit&#160;</span><span class="support" > : 1</span></td></table></div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="&#8743;#8869;" >&#8869;</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Intro&#160;</span><span class="support" > : 4, 5</span></td></table></div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="Dodec(f)" >Dodec(f)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Elim&#160;</span><span class="support" > : 6</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="Dodec(f)" >Dodec(f)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="Dodec(f)" >Dodec(f)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Reit&#160;</span><span class="support" > : 8</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="Small(e)" >Small(e)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="&#172;Small(e)" >&#172;Small(e)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Reit&#160;</span><span class="support" > : 2</span></td></table></div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hif" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="&#8743;#8869;" >&#8869;</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Intro&#160;</span><span class="support" > : 11, 10</span></td></table></div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >13. </span><span class="stepFormula" title="Dodec(f)" >Dodec(f)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Elim&#160;</span><span class="support" > : 12</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >14. </span><span class="stepFormula" title="Dodec(f)" >Dodec(f)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Elim&#160;</span><span class="support" > : 10-13, 8-9, 4-7, 3</span></td></table></div></div>
</div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<a name="ex619"></a>
<h2><a id="ex619a" class="protectopen" href="#" onclick="return false;">Exercise 6.19</a></h2>

<div id="ex619ahid" style="display: none;">
<ul>
<li><bf>Goal:</bf> A &or; C</li>
</ul>

<div class="box">

<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="A &#8744; B" >A &#8744; B</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="&#172;B &#8744; C" >&#172;B &#8744; C</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="A" >A</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="A &#8744; C" >A &#8744; C</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Intro&#160;</span><span class="support" > : 3</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="B" >B</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="&#172;B" >&#172;B</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="B" >B</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Reit&#160;</span><span class="support" > : 5</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="&#8743;#8869;" >&#8869;</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Intro&#160;</span><span class="support" > : 6, 7</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="A &#8744; C" >A &#8744; C</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Elim&#160;</span><span class="support" > : 8</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="C" >C</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="A &#8744; C" >A &#8744; C</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Intro&#160;</span><span class="support" > : 10</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="A &#8744; C" >A &#8744; C</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Elim&#160;</span><span class="support" > : 2, 6-9, 10-11</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg"><div class="step hid" ><table ><td class="step" ><span class="stepnumber" >13. </span><span class="stepFormula" title="A &#8744; C" >A &#8744; C</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Elim&#160;</span><span class="support" > : 1, 3-4, 5-12</span></td></table></div></div>
</div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<a name="ex629"></a>
<h2><a id="ex629a" class="protectopen" href="#" onclick="return false;">Exercise 6.29</a></h2>

<div id="ex629ahid" style="display: none;">
<ul>
<li><bf>Goal:</bf> Larger(a,b)</li>
</ul>

<div class="box">
<div class="proof">
<div class="step"><table><tbody><tr><td class="step"><span class="stepnumber">1. </span><span class="stepFormula" title="Larger(a, b) ∨ Larger(a, c)">Larger(a,b) ∨ Larger(a,c)</span></td><td class="ruleStep"></td></tr></tbody></table></div>
<div class="step"><table><tbody><tr><td class="step"><span class="stepnumber">2. </span><span class="stepFormula" title="Smaller(b, a) ∨ ¬Larger(a, c)">Smaller(b,a) ∨ ¬Larger(a,c)</span></td><td class="ruleStep"></td></tr></tbody></table></div>
<div class="fitchbar"></div>

<!-- Sub 1-->
<div><img class="open" src="images/help-with-circle.svg">
<div class="proof hid">
<div class="step"><table><tbody><tr><td class="step"><span class="stepnumber">3. </span><span class="stepFormula" title="Larger(a, b)">Larger(a,b)</span></td><td class="ruleStep"></td></tr></tbody></table></div>
<div class="fitchbar"></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid"><table><tbody><tr><td class="step"><span class="stepnumber">4. </span><span class="stepFormula" title="Larger(a, b)">Larger(a,b)</span></td><td class="ruleStep"><span class="status valid" title="valid"></span><span class="rulename">Reit&nbsp;</span><span class="support"> : 3</span></td></tr></tbody></table></div>
</div>
</div></div>

<!-- Sub 2-->
<div><img class="open" src="images/help-with-circle.svg">
<div class="proof hid">
<div class="step"><table><tbody><tr><td class="step"><span class="stepnumber">5. </span><span class="stepFormula" title="Larger(a, c)">Larger(a,c)</span></td><td class="ruleStep"></td></tr></tbody></table></div>
<div class="fitchbar"></div>

  <!-- Subsub 1-->
  <div><img class="open" src="images/help-with-circle.svg">
  <div class="proof hid"><div class="step"><table><tbody><tr><td class="step"><span class="stepnumber">6. </span><span class="stepFormula" title="Smaller(b, a)">Smaller(b,a)</span></td><td class="ruleStep"></td></tr></tbody></table></div>
  <div class="fitchbar"></div>

  <div><img class="open" src="images/help-with-circle.svg">
  <div class="step hid"><table><tbody><tr><td class="step"><span class="stepnumber">7. </span><span class="stepFormula" title="Larger(a, b)">Larger(a,b)</span></td><td class="ruleStep"><span class="status valid" title="valid"></span><span class="rulename">Ana Con&nbsp;</span><span class="support"> : 6</span></td></tr></tbody></table></div>
  </div>
  </div></div>

  <!-- Subsub 2 -->
  <div><img class="open" src="images/help-with-circle.svg">
  <div class="proof hid"><div class="step"><table><tbody><tr><td class="step"><span class="stepnumber">8. </span><span class="stepFormula" title="¬Larger(a, c)">¬Larger(a,c)</span></td><td class="ruleStep"></td></tr></tbody></table></div>
  <div class="fitchbar"></div>

  <div><img class="open" src="images/help-with-circle.svg">
  <div class="step hid"><table><tbody><tr><td class="step"><span class="stepnumber">9. </span><span class="stepFormula" title="Larger(a, c)">Larger(a,c)</span></td><td class="ruleStep"><span class="status valid" title="valid"></span><span class="rulename">Reit&nbsp;</span><span class="support"> : 5</span></td></tr></tbody></table></div>
  </div>

  <div><img class="open" src="images/help-with-circle.svg">
  <div class="step hid"><table><tbody><tr><td class="step"><span class="stepnumber">10. </span><span class="stepFormula" title="∧#8869;">⊥</span></td><td class="ruleStep"><span class="status valid" title="valid"></span><span class="rulename">⊥&nbsp;Intro&nbsp;</span><span class="support"> : 8, 9</span></td></tr></tbody></table></div>
  </div>

  <div><img class="open" src="images/help-with-circle.svg">
  <div class="step hid"><table><tbody><tr><td class="step"><span class="stepnumber">11. </span><span class="stepFormula" title="Larger(a, b)">Larger(a,b)</span></td><td class="ruleStep"><span class="status valid" title="valid"></span><span class="rulename">⊥&nbsp;Elim&nbsp;</span><span class="support"> : 10</span></td></tr></tbody></table></div>
  </div>
  </div></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid"><table><tbody><tr><td class="step"><span class="stepnumber">12. </span><span class="stepFormula" title="Larger(a, b)">Larger(a,b)</span></td><td class="ruleStep"><span class="status valid" title="valid"></span><span class="rulename">∨&nbsp;Elim&nbsp;</span><span class="support"> : 2, 6-7, 8-11</span></td></tr></tbody></table></div>
</div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid"><table><tbody><tr><td class="step"><span class="stepnumber">13. </span><span class="stepFormula" title="Larger(a, b)">Larger(a,b)</span></td><td class="ruleStep"><span class="status valid" title="valid"></span><span class="rulename">∨&nbsp;Elim&nbsp;</span><span class="support"> : 1, 3-4, 5-12</span></td></tr></tbody></table></div></div>
</div>
</div>
</div>

<a href="#top">Return to top</a>

* * * * *

<a name="ex630"></a>
<h2><a id="ex630a" class="protectopen" href="#" onclick="return false;">Exercise 6.30</a></h2>

<div id="ex630ahid" style="display: none;">
<ul>
<li><bf>Goal:</bf> Cube(a)</li>
</ul>

<div class="box">
<div class="proof" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="&#172;(&#172;Cube(a) &#8743; Cube(b))" >&#172;(&#172;Cube(a) &#8743; Cube(b))</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="&#172;(&#172;Cube(b) &#8744; Cube(c))" >&#172;(&#172;Cube(b) &#8744; Cube(c))</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="&#172;Cube(b)" >&#172;Cube(b)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar"></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="&#172;Cube(b) &#8744; Cube(c)" >&#172;Cube(b) &#8744; Cube(c)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8744;&#160;Intro&#160;</span><span class="support" > : 3</span></td></table></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="&#172;( &#172;Cube(b) &#8744; Cube(c))" >&#172;(&#172;Cube(b) &#8744; Cube(c))</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Reit&#160;</span><span class="support" > : 2</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="&#8743;#8869;" >&#8869;</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Intro&#160;</span><span class="support" > : 4, 5</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >7. </span><span class="stepFormula" title="&#172;&#172;Cube(b)" >&#172;&#172;Cube(b)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#172;&#160;Intro&#160;</span><span class="support" > : 3-6</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >8. </span><span class="stepFormula" title="Cube(b)" >Cube(b)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#172;&#160;Elim&#160;</span><span class="support" > : 7</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="proof hid" >
<div class="step" ><table ><td class="step" ><span class="stepnumber" >9. </span><span class="stepFormula" title="&#172;Cube(a)" >&#172;Cube(a)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >10. </span><span class="stepFormula" title="&#172;Cube(a) &#8743; Cube(b)" >&#172;Cube(a) &#8743; Cube(b)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8743;&#160;Intro&#160;</span><span class="support" > : 8, 9</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >11. </span><span class="stepFormula" title="&#172;( &#172;Cube(a) &#8743; Cube(b))" >&#172;(&#172;Cube(a) &#8743; Cube(b))</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Reit&#160;</span><span class="support" > : 1</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >12. </span><span class="stepFormula" title="&#8743;#8869;" >&#8869;</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#8869;&#160;Intro&#160;</span><span class="support" > : 10, 11</span></td></table></div></div>
</div></div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >13. </span><span class="stepFormula" title="&#172;&#172;Cube(a)" >&#172;&#172;Cube(a)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#172;&#160;Intro&#160;</span><span class="support" > : 9-12</span></td></table></div>
</div>

<div><img class="open" src="images/help-with-circle.svg">
<div class="step hid" ><table ><td class="step" ><span class="stepnumber" >14. </span><span class="stepFormula" title="Cube(a)" >Cube(a)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >&#172;&#160;Elim&#160;</span><span class="support" > : 13</span></td></table></div></div>
</div></div>
</div>
</div>

