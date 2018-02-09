---
title: Some more proofs
---

<div class="box">
<h3>Exercise 8.46</h3>
<div class="proof" >
<div class="line" ><table ><td class="step" ><span class="number" >1. </span><span class="formula" title="" >Cube(a) &or; (Cube(b) &rarr; Tet( c))</span></td></table></div>
<div class="line" ><table ><td class="step" ><span class="number" >2. </span><span class="formula" title="" >Tet(c) &rarr; Small(c)</span></td></table></div>
<div class="line" ><table ><td class="step" ><span class="number" >3. </span><span class="formula" title="" >(Cube(b) &rarr; Small(c)) &rarr; Small(b)</span></td></table></div>
<div class="fitchbar" ></div>

<img class="info" title="Conditional proof"><div class="hid">
<div class="proof">
<div class="line" ><table ><td class="step" ><span class="number" >4. </span><span class="formula" title="" >&not;Cube(a)</span></td></table></div>
<div class="fitchbar" ></div>

<img class="info" title="Proof by cases"><div class="hid">
<div class="proof">
<div class="line" ><table ><td class="step" ><span class="number" >5. </span><span class="formula" title="" >Cube(a)</span></td></table></div>
<div class="fitchbar" ></div>

<img class="info" title="Contradiction"><span class="line hid" ><table ><td class="step" ><span class="number" >6. </span><span class="formula" title="" >&perp;</span></td><td class="justification"><span class="rulename" >&perp; Intro</span><span class="support"> : 4,5</span></td></table></span>

<div class="line" ><table ><td class="step" ><span class="number" >7. </span><span class="formula" title="" >Small(b)</span></td><td class="justification"><span class="rulename" >&perp; Elim</span><span class="support"> : 6</span></td></table></div>
</div>

<div class="proof">
<div class="line" ><table ><td class="step" ><span class="number" >8. </span><span class="formula" title="" >Cube(b) &rarr; Tet(c)</span></td></table></div>
<div class="fitchbar" ></div>

<img class="info" title="Conditional proof"><div class="hid">
<div class="proof">
<div class="line" ><table ><td class="step" ><span class="number" >9. </span><span class="formula" title="" >Cube(b)</span></td></table></div>
<div class="fitchbar" ></div>

<img class="info" title="Modus ponens"><span class="line hid" ><table ><td class="step" ><span class="number" >10. </span><span class="formula" title="" >Tet(c)</span></td><td class="justification"><span class="rulename" >&rarr; Elim</span><span class="support"> : 8,9</span></td></table></span>

<div class="line" ><table ><td class="step" ><span class="number" >11. </span><span class="formula" title="" >Small(c)</span></td><td class="justification"><span class="rulename" >&rarr; Elim</span><span class="support"> : 2,10</span></td></table></div>

</div>

<div class="line" ><table ><td class="step" ><span class="number" >12. </span><span class="formula" title="" >Cube(b) &rarr; Small(c)</span></td><td class="justification"><span class="rulename" >&rarr; Intro</span><span class="support"> : 9-11</span></td></table></div>

</div>

<div class="line" ><table ><td class="step" ><span class="number" >13. </span><span class="formula" title="" >Small(b)</span></td><td class="justification"><span class="rulename" >&rarr; Elim</span><span class="support"> : 3,12</span></td></table></div>

</div>
</div>

<div class="line" ><table ><td class="step" ><span class="number" >14. </span><span class="formula" title="" >Small(b)</span></td><td class="justification"><span class="rulename" >&or; Elim</span><span class="support"> : 1,5-7,8-13</span></td></table></div>

</div>
</div>

<div class="line" ><table ><td class="step" ><span class="number" >15. </span><span class="formula" title="" >&not;Cube(a) &rarr; Small(b)</span></td><td class="justification"><span class="rulename" >&rarr; Intro</span><span class="support"> : 4-14</span></td></table></div>
</div>
</div>

