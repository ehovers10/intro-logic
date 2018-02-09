<a name="ex629"></a>
<h2>Exercise 6.29</h2>

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

<a href="#top">Return to top</a>
