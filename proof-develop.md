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

