---
title: Practice with proofs, counterexamples, and truth tables
---

February 16 and 18, 2015

1.  [Atomic sentences](#atomic)
    - [Example arguments](#arg)
    - [Answers](#ans)
2.  [Sentences with Boolean connectives](#boole)
    - [Example truth tables](#tt)

<a name="atomic"></a>

# Atomic stentences

<a name="arg"></a>

## Example arguments

For each of the arguments below, if the argument is valid, construct a proof showing that the conclusion is a logical consequence of the premises. If the argument is invalid, construct a world that is a counterexample to the argument. Example answers are provided below.

<img src="./images/ex-args1.png">

* * * * *

<a name="ans"></a>

## Answers

### Argument 1

This argument is valid. A proof that the conclusion is a logical consequence of the premises follows: 

<div class="open"><a href='#' onclick="return false;">Click to show proof</a></div>
<div class="hideable" style="display: none;">
<div class="prooffile" ><div class="proof-outer-outline" ><div class="proof-inner-outline" ><div class="proof" ><div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="SameRow(a, c)" >SameRow(a,c)</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="SameCol(c, a)" >SameCol(c,a)</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="BackOf(d, c)" >BackOf(d,c)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="a = c" >a = c</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Ana Con&#160;</span><span class="support" > : 1, 2</span></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="BackOf(d, a)" >BackOf(d,a)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >= Elim&#160;</span><span class="support" > : 3, 4</span></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="FrontOf(a, d)" >FrontOf(a,d)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Ana Con&#160;</span><span class="support" > : 5</span></td></table></div></div></div></div></div>
</div>

### Argument 2

This argument is valid. A proof that the conclusion is a logical consequence of the premises follows: 

<div class="open"><a href='#' onclick="return false;">Click to show proof</a></div>
<div class="hideable" style="display: none;">

<div class="prooffile" ><div class="proof-outer-outline" ><div class="proof-inner-outline" ><div class="proof" ><div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="LeftOf(a, b)" >LeftOf(a,b)</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="a = e" >a = e</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="SameCol(d, e)" >SameCol(d,e)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="LeftOf(e, b)" >LeftOf(e,b)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >= Elim&#160;</span><span class="support" > : 1, 2</span></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="LeftOf(d, b)" >LeftOf(d,b)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Ana Con&#160;</span><span class="support" > : 3, 4</span></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="RightOf(b, d)" >RightOf(b,d)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Ana Con&#160;</span><span class="support" > : 5</span></td></table></div></div></div></div></div>

Many arguments can be proved in different ways. An alternative proof of argument 2 is: 

<div class="prooffile" ><div class="proof-outer-outline" ><div class="proof-inner-outline" ><div class="proof" ><div class="step" ><table ><td class="step" ><span class="stepnumber" >1. </span><span class="stepFormula" title="LeftOf(a, b)" >LeftOf(a,b)</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >2. </span><span class="stepFormula" title="a = e" >a = e</span></td><td class="ruleStep" ></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >3. </span><span class="stepFormula" title="SameCol(d, e)" >SameCol(d,e)</span></td><td class="ruleStep" ></td></table></div><div class="fitchbar" ></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >4. </span><span class="stepFormula" title="RightOf(b, a)" >RightOf(b,a)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Ana Con&#160;</span><span class="support" > : 1</span></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >5. </span><span class="stepFormula" title="RightOf(b , e)" >RightOf(b,e)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >= Elim&#160;</span><span class="support" > : 4, 2</span></td></table></div><div class="step" ><table ><td class="step" ><span class="stepnumber" >6. </span><span class="stepFormula" title="RightOf(b, d)" >RightOf(b,d)</span></td><td class="ruleStep" ><span class="status valid" title="valid" ></span><span class="rulename" >Ana Con&#160;</span><span class="support" > : 5, 3</span></td></table></div></div></div></div></div>
</div>

### Argument 3

This argument is invalid. A counterexample world follows: 

<div class="open"><a href='#' onclick="return false;">Click to show world</a></div>
<div class="hideable" style="display: none;">

<div class="worldfile" ><table class="worldtable" ><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack twmedium  twcube" title="A medium  cube named a, b." ><span class="twcell twblack" >a b</span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack twsmall twcube" title="A small cube named c." ><span class="twcell twblack" >c</span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack twmedium  twtetrahedron" title="A medium  tetrahedron named d." ><span class="twcell twblack" >d</span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr></table></div>
</div>

### Argument 4

This argument is invalid. A counterexample world follows: 

<div class="open"><a href='#' onclick="return false;">Click to show world</a></div>
<div class="hideable" style="display: none;">

<div class="worldfile" ><table class="worldtable" ><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack twsmall twcube" title="A small cube named a, e." ><span class="twcell twblack" >a e</span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack twlarge twcube" title="A large cube named c." ><span class="twcell twblack" >c</span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack twsmall twdodecahedron" title="A small dodecahedron named d." ><span class="twcell twblack" >d</span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr></table></div>
</div>

* * * * *

<a name="boole"></a>

# Truth tables for the Boolean connectives

Below are some example truth tables that allow us to determine what if any **logical consequence relations** hold between the two sentences being compared.

If the truth conditions for two sentences are identical, then the sentences are **equivalent**, and the logical consequence relation holds in both directions.

If a sentence *P* is true in every row in which sentence *Q* is true, then *P* is a logical consequence of *Q*; we also say that *Q* **entails** *P*.

* * * * * 

<a name="tt"></a>

*Click on a column header to reveal the truth conditions for the relevant sentence. Click again to rehide the column.*

<div style="position: relative;">

<div class="truth-table odd">
<h3>Equivalence example</h3>
<div class="truth-head">
  <span class="open" id="aaa"><a href='#' onclick="return false;">A</a></span> | 
  <span class="open" id="bbb"><a href='#' onclick="return false;">B</a></span> | A
  <span class="open" id="ccc"><a href='#' onclick="return false;">&or;</a></span> 
  <span class="open" id="ddd"><a href='#' onclick="return false;">&not;</a></span> B | 
  <span class="open" id="eee"><a href='#' onclick="return false;">&not;</a></span> (
  <span class="open" id="fff"><a href='#' onclick="return false;">&not;</a></span> A 
  <span class="open" id="ggg"><a href='#' onclick="return false;">&and;</a></span> B)
</div>

<div class="truth-main">
<div class="truth-col hid sen-border" id="aaahid" style="left: 0;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid sen-border" id="bbbhid" style="left: 20px;">
  <ul>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid" id="ccchid" style="left: 50px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>T</li>
  </ul>  
</div>
<div class="truth-col hid sen-border extra-pad" id="dddhid" style="left: 65px;">
  <ul>
    <li>F</li>
    <li>T</li>
    <li>F</li>
    <li>T</li>
  </ul>  
</div>

<div class="truth-col hid" id="eeehid" style="left: 95px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>T</li>
  </ul>  
</div>
<div class="truth-col hid" id="fffhid" style="left: 115px;">
  <ul>
    <li>F</li>
    <li>F</li>
    <li>T</li>
    <li>T</li>
  </ul>  
</div>

<div class="truth-col hid" id="ggghid" style="left: 140px;">
  <ul>
    <li>F</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>
</div></div>

<div class="truth-table even">
<h3>Logical consequence ex</h3>
<div class="truth-head">
  <span class="open" id="aa"><a href='#' onclick="return false;">A</a></span> | 
  <span class="open" id="bb"><a href='#' onclick="return false;">B</a></span> | (
  <span class="open" id="cc"><a href='#' onclick="return false;">&not;</a></span> A 
  <span class="open" id="dd"><a href='#' onclick="return false;">&or;</a></span> B) 
  <span class="open" id="ee"><a href='#' onclick="return false;">&and;</a></span> 
  <span class="open" id="ff"><a href='#' onclick="return false;">&not;</a></span> B | 
  <span class="open" id="gg"><a href='#' onclick="return false;">&not;</a></span> A
</div>

<div class="truth-main">
<div class="truth-col hid sen-border" id="aahid" style="left: 0;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid sen-border" id="bbhid" style="left: 20px;">
  <ul>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid" id="cchid" style="left: 45px;">
  <ul>
    <li>F</li>
    <li>F</li>
    <li>T</li>
    <li>T</li>
  </ul>  
</div>
<div class="truth-col hid" id="ddhid" style="left: 70px;">
  <ul>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>T</li>
  </ul>  
</div>

<div class="truth-col hid" id="eehid" style="left: 100px;">
  <ul class="green">
    <li>F</li>
    <li>F</li>
    <li class="red">F</li>
    <li>T</li>
  </ul>  
</div>
<div class="truth-col hid sen-border extra-pad" id="ffhid" style="left: 115px;">
  <ul>
    <li>F</li>
    <li>T</li>
    <li>F</li>
    <li>T</li>
  </ul>  
</div>

<div class="truth-col hid" id="gghid" style="left: 145px;">
  <ul class="green">
    <li>F</li>
    <li>F</li>
    <li>T</li>
    <li>T</li>
  </ul>  
</div>

</div></div>
<div style="clear: both;"></div>

<div class="buffer"></div>

* * * * *

<div class="truth-table odd">
<h3>Practice 1</h3>
<div class="truth-head">
  <span class="open" id="aaaa"><a href='#' onclick="return false;">A</a></span> | 
  <span class="open" id="bbbb"><a href='#' onclick="return false;">B</a></span> | (A
  <span class="open" id="cccc"><a href='#' onclick="return false;">&or;</a></span> B)
  <span class="open" id="dddd"><a href='#' onclick="return false;">&or;</a></span> A | B
  <span class="open" id="eeee"><a href='#' onclick="return false;">&or;</a></span> A
</div>

<div class="truth-main">
<div class="truth-col hid sen-border" id="aaaahid" style="left: 0;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid sen-border" id="bbbbhid" style="left: 20px;">
  <ul>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid" id="cccchid" style="left: 55px;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid sen-border extra-pad" id="ddddhid" style="left: 90px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid" id="eeeehid" style="left: 135px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>
</div></div>

<div class="truth-table even">
<h3>Practice 2</h3>
<div class="truth-head">
  <span class="open" id="a4"><a href='#' onclick="return false;">A</a></span> | 
  <span class="open" id="b4"><a href='#' onclick="return false;">B</a></span> | (A
  <span class="open" id="c4"><a href='#' onclick="return false;">&or;</a></span> B)
  <span class="open" id="d4"><a href='#' onclick="return false;">&and;</a></span> A | B 
  <span class="open" id="e4"><a href='#' onclick="return false;">&or;</a></span> (A
  <span class="open" id="f4"><a href='#' onclick="return false;">&and;</a></span> A) 
</div>

<div class="truth-main">
<div class="truth-col hid sen-border" id="a4hid" style="left: 0;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid sen-border" id="b4hid" style="left: 20px;">
  <ul>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid" id="c4hid" style="left: 55px;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid sen-border extra-pad" id="d4hid" style="left: 90px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li class="red">F</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid" id="e4hid" style="left: 135px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid" id="f4hid" style="left: 165px;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>

</div></div>
<div style="clear: both;"></div>

<div class="buffer"></div>

* * * * *

<div class="truth-table odd">
<h3>Practice 3</h3>
<div class="truth-head">
  <span class="open" id="a5"><a href='#' onclick="return false;">A</a></span> | 
  <span class="open" id="b5"><a href='#' onclick="return false;">B</a></span> |
  <span class="open" id="c5"><a href='#' onclick="return false;">C</a></span> | A
  <span class="open" id="d5"><a href='#' onclick="return false;">&or;</a></span> (B
  <span class="open" id="e5"><a href='#' onclick="return false;">&and;</a></span> C) | (A
  <span class="open" id="f5"><a href='#' onclick="return false;">&or;</a></span> B)
  <span class="open" id="g5"><a href='#' onclick="return false;">&and;</a></span> (A 
  <span class="open" id="h5"><a href='#' onclick="return false;">&or;</a></span> C)
</div>

<div class="truth-main">
<div class="truth-col hid sen-border" id="a5hid" style="left: 0;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid sen-border" id="b5hid" style="left: 20px;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid sen-border" id="c5hid" style="left: 40px;">
  <ul>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid" id="d5hid" style="left: 70px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid sen-border extra-pad" id="e5hid" style="left: 105px;">
  <ul>
    <li>T</li>
    <li>F</li>
    <li>F</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid" id="f5hid" style="left: 155px;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>

<div class="truth-col hid" id="g5hid" style="left: 190px;">
  <ul class="green">
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>F</li>
    <li>F</li>
  </ul>  
</div>
<div class="truth-col hid" id="h5hid" style="left: 220px;">
  <ul>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>T</li>
    <li>F</li>
    <li>T</li>
    <li>F</li>
  </ul>
</div>
</div></div>
<div style="clear: both;"></div>

<div class="buffer"></div>
<div class="buffer"></div>
</div>

