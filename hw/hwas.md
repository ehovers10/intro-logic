<a name="top"></a>
[Return to course home page](../index.md)

# Homework answer key

> The homework assignments below use exercises drawn from the Language, Proof, and Logic textbook. In order to avoid widespread distribution, the answer keys have been password protected. If you are a student in Erik's class, you can contact him to get the password.

<a name="hw1"></a>

<h1><a id="hw1a" class="protectopen" href="#" onclick="return false;">HW #1</a></h1>
<div id="hw1ahid" style="display: none;">

Assignment: <a id="protect" href="#">1.2</a>, <a href="hw/erik-ex1.3.wld">1.3</a>, 1.4 (<a href="hw/erik-ex1.4.sen">sen</a>, <a href="hw/erik-ex1.4.wld">wld</a>), <a href="hw/erik-ex1.5.wld">1.5</a>, <a href="hw/erik-ex1.6.wld">1.6</a>, 1.8, <a href="hw/erik-ex1.9.sen">1.9</a>, 1.11 (<strong>5 points each</strong>)

<blockquote>
To see example answers to Grade Grinder exercises, right click the links above and save the files. Once saved, you can open them using the relevant LPL software.
</blockquote>

<a name="ex18"></a>
<h2 id="ex.-1.8">Ex. 1.8</h2>
<ol style="list-style-type: decimal">
<li>
<pre><code>  GaveScruffy(max,max)          GaveCarl(max,max)
  GaveScruffy(max,claire)       GaveCarl(max,claire)
  GaveScruffy(claire,max)       GaveCarl(claire,max)
  GaveScruffy(claire,claire)    GaveCarl(claire,claire)</code></pre></li>
<li>
<pre><code>  Gave(max,max,max)         Gave(max,scruffy,max)
  Gave(max,max,claire)      Gave(max,scruffy,claire)
  Gave(max,max,scruffy)     Gave(max,scruffy,scruffy)
  Gave(max,max,carl)        Gave(max,scruffy,carl)
  Gave(max,claire,max)      Gave(max,carl,max)
  Gave(max,claire,claire)   Gave(max,carl,claire)
  Gave(max,claire,scruffy)  Gave(max,carl,scruffy)
  Gave(max,claire,carl)     Gave(max,carl,carl)</code></pre>
= 16

x 4 (for each name as the first argument) = 64 total sentences

<em>The student does not need to list all of the sentences of this language. They need only give the correct number.</em></li>
<li>If n = number of names, then number of sentences = n<sup>2</sup> per binary predicate. So, 4 names and 4 binary predicates = 4<sup>2</sup> x 4 = 64 sentences.</li>
</ol>

<a name="ex111"></a>
<h2 id="ex.-1.11">Ex. 1.11</h2>
<ol style="list-style-type: decimal">
<li>ShakeHands(max, claire, past)</li>
<ul>
<li>ShakeHands(x,y,z) is a ternary predicate that takes two people and a time as arguments. It says that the two people shook hands at the indicated time.</li>
<li><em>max</em> and <em>claire</em> are names of people and <em>past</em> is a name for any time earlier than today.</li>
</ul>
<li>ShakeHands(max, claire, yesterday)</li>
<ul>
<li>This is the same predicate as above.</li>
<li><em>yesterday</em> is a name for a specific time one day prior to today.</li>
</ul>
<li>LessContagious(aids, influenza)</li>
<ul>
<li><em>LessContagious(x,y)</em> is a binary predicate that takes two diseases as arguments.</li>
<li><em>aids</em> and <em>influenza</em> are names of diseases.</li>
</ul>
<li>BetweenSize(spain, france, portugal) or Size(portugal, spain, france)</li>
<ul>
<li><em>BetweenSize(x,y,z)</em> is a ternary predicate that takes three objects as arguments. It says that the first object is between the second two objects in size.</li>
<li><em>Size(x,y,z)</em> is a ternary predicate that takes three objects as arguments. It orders the objects in size from smallest to largest.</li>
<li><em>spain</em>, <em>france</em>, and <em>portugal</em> are names for objects; specifically, they name countires.</li>
</ul>
<li>Loves(misery, company)</li>
<ul>
<li><em>Loves(x,y)</em> is a binary predicate that takes two objects as arguments. It says that the first object loves the second.</li>
<li><em>misery</em> and <em>company</em> are names for objects; specifically, they name abstract objects. <em>misery</em> is an emotion, and <em>company</em> is a state of not being alone.</li>
</ul>
</ol>
</div>

[Return to top](#top)
* * * * *

<a name="hw2"></a>

<h1><a id="hw2a" class="protectopen" href="#" onclick="return false;">HW #2</a></h1>
<div id="hw2ahid" style="display: none;">

Assignment: 2.1 (<a href="hw/erik-ex2.1.5.wld">arg5</a>, <a href="hw/erik-ex2.1.7.wld">arg7</a>,<a href="hw/erik-ex2.1.8.wld">arg8</a>), <a href="hw/erik-ex2.10.wld">2.10</a>, <a href="hw/erik-ex2.24.prf">2.24</a>, <a href="hw/erik-ex2.26.wld">2.26</a>, 3.6 (<a href="hw/erik-ex3.6.sen">sen</a>, <a href="hw/erik-ex3.6.wld">wld</a>), 3.10 (<a href="hw/erik-ex3.10.sen">sen</a>, <a href="hw/erik-ex3.10.wld">wld</a>), <a href="hw/erik-ex3.15.sen">3.15</a>, 3.19 (<strong>5 points each</strong>)

<blockquote>
To see example answers to Grade Grinder exercises, right click the links above and save the files. Once saved, you can open them using the relevant LPL software.
</blockquote>

<a name="ex21"></a>
<h2>Ex 2.1</h2>
<table>
<thead>
<tr class="header">
<th align="left">Argument</th>
<th align="left">Valid?</th>
<th align="left">Sound-Socrates?</th>
<th align="left">Sound-Wittgenstein?</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">1</td>
<td align="left">yes</td>
<td align="left">yes</td>
<td align="left">no</td>
</tr>
<tr class="even">
<td align="left">2</td>
<td align="left">yes</td>
<td align="left">yes</td>
<td align="left">no</td>
</tr>
<tr class="odd">
<td align="left">3</td>
<td align="left">yes</td>
<td align="left">yes</td>
<td align="left">no</td>
</tr>
<tr class="even">
<td align="left">4</td>
<td align="left">yes</td>
<td align="left">yes</td>
<td align="left">no</td>
</tr>
<tr class="odd">
<td align="left">5</td>
<td align="left">no</td>
<td align="left">n/a</td>
<td align="left">n/a</td>
</tr>
<tr class="even">
<td align="left">6</td>
<td align="left">yes</td>
<td align="left">yes</td>
<td align="left">no</td>
</tr>
<tr class="odd">
<td align="left">7</td>
<td align="left">no</td>
<td align="left">n/a</td>
<td align="left">n/a</td>
</tr>
<tr class="even">
<td align="left">8</td>
<td align="left">no</td>
<td align="left">n/a</td>
<td align="left">n/a</td>
</tr>
</tbody>
</table>

<a name="ex319"></a>
<h2>Ex 3.19</h2>
<ol style="list-style-type: decimal">
<li>ParentOf(chris,alex) <em>or</em> ChildOf(alex,chris)</li>
<li>SiblingOf(chris,alex)</li>
<li>Man(chris)</li>
<li>EvenNumber(4) <em>or</em> &not;OddNumber(4) (if zero is not considered even or odd)</li>
<li>NormalPerson(chris)</li>
<li>Grandmother(mary,alex) (ok if the student doesn't do this one)</li>
</ol>
</div>

[Return to top](#top)
* * * * *

<h1><a id="hw3a" class="protectopen" href="#" onclick="return false;">HW #3</a></h1>
<div id="hw3ahid" style="display: none;">

Assignment: <a href="erik-ex4.39.sen">4.39</a>, <a href="erik-ex4.40.sen">4.40</a>, <a href="erik-ex6.6.prf">6.6</a>, <a href="erik-ex6.8.prf">6.8</a>, <a href="erik-ex6.9.prf">6.9</a>, <a href="erik-ex6.14.prf">6.14</a>, <a href="erik-ex6.20.prf">6.20</a>, <a href="erik-ex6.28.prf">6.28</a>, <a href="erik-ex6.31.wld">6.31*</a>, <a href="erik-ex6.32.prf">6.32*</a> (<strong>5 points each, 3 bonus points each for starred ex</strong>)

<blockquote>
To see example answers to Grade Grinder exercises, right click the links above and save the files. Once saved, you can open them using the relevant LPL software.
</blockquote>

<a name="hint"></a><h1>Hints</h1>
<blockquote>
<p>Click the links below to reveal some hints for each exercise.</p>
</blockquote>
<ul>
<li><span class="open"><a href='#' onclick="return false;">6.6 ⇒ </a></span><span class="hideable" style="display: none;"> This proof makes use only of the ∧ and ∨ rules. My proof ended up with 12 lines.</span></li>
<li><span class="open"><a href='#' onclick="return false;">6.8 ⇒ </a></span><span class="hideable" style="display: none;"> With TautCon, we can substitute equivalent sentences <em>within</em> another sentence. Our new rules don't allow for that. This exercise shows us how to work around that limitation.</span></li>
<li><span class="open"><a href='#' onclick="return false;">6.9 ⇒ </a></span><span class="hideable" style="display: none;"> <strong>¬Intro</strong> plays a crucial role in this proof. My proof ended up with 7 lines.</span></li>
<li><span class="open"><a href='#' onclick="return false;">6.14 ⇒ </a></span><span class="hideable" style="display: none;"> You'll need a proof by cases with 3 cases, and ⊥Intro will come in handy a lot. My proof ended up with 20 lines.</span></li>
<li><span class="open"><a href='#' onclick="return false;">6.20 ⇒ </a></span><span class="hideable" style="display: none;"> This proof has doubly nested subproofs in it. My proof ended up with 12 lines.</span></li>
<li><span class="open"><a href='#' onclick="return false;">6.28 ⇒ </a></span><span class="hideable" style="display: none;"> You'll need to use AnaCon on a literal in this proof. Remember that a literal is any atomic sentence with or without a negation attached. You'll cite only one line with this use of AnaCon. My proof ended up with 10 lines.</span></li>
<li><span class="open"><a href='#' onclick="return false;">6.31 ⇒ </a></span><span class="hideable" style="display: none;"> Are you sure this argument is valid?</span></li>
<li><span class="open"><a href='#' onclick="return false;">6.32 ⇒ </a></span><span class="hideable" style="display: none;"> You'll need proof by cases twice, but not nested. My proof ended up with 20 lines.</span></li>
</ul>


</div>

[Return to top](#top)
* * * * *

<h1><a id="hw4a" class="protectopen" href="#" onclick="return false;">HW #4</a></h1>
<div id="hw4ahid" style="display: none;">

<p><strong>Assignment:</strong> <a href="erik-ex7.12.sen">7.12</a>, <a href="erik-ex7.16.sen">7.16</a>, <a href="erik-ex7.21.tt">7.21*</a>, 7.30*, 8.18 (<a href="erik-ex8.18.sen">sen</a>, <a href="erik-ex8.18.wld">wld</a>), <a href="erik-ex8.20.prf">8.20</a>, <a href="erik-ex8.29.prf">8.29</a>, <a href="erik-ex8.34.prf">8.34</a> (<strong>5 points each</strong>, starred exercises have written components, which should be submitted using the <strong>Submit HW #4</strong> button on the lecture notes home page)</p>

<p><strong>Deadline:</strong> This homework assignment is due the last day of classes -- <strong>Monday, May 4</strong> at noon.</p>

<blockquote>
To see example answers to Grade Grinder exercises, right click the links above and save the files. Once saved, you can open them using the relevant LPL software.
</blockquote>

<a name="ex721"></a>
<h2>Ex 7.21</h2>

The consequent of the conditional <em>If Keanu Reeves is a great actor, then I'm a monkey's uncle</em> is <em>I'm a monkey's uncle</em>, which is false (almost?) whenever it is uttered. In fact, it is a sentence that few people could ever mistakenly believe to be true. But, according to the truth table for the conditional, if a conditional has a false consequent, then the whole conditional can only be true if the antecedent is also false. So, when I utter this conditional, I presume that you will recognize the falsity of the consequent. And, as a result, if you take me to be a reliable person, you will infer that I must think the antecedent is false, too. Thus, I get my meaning across by relying on our mutual understanding of the semantics of conditionals.

<a name="ex730"></a>
<h2>Ex 7.30</h2>

<table>
<thead>
<tr class="header">
<th align="right">Boolean sentence</th>
<th align="left">Using only → and ⊥</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="right">¬P</td>
<td align="left">P → ⊥</td>
</tr>
<tr class="even">
<td align="right">P ∧ Q</td>
<td align="left">(P → (Q → ⊥)) → ⊥</td>
</tr>
<tr class="odd">
<td align="right">P ∨ Q</td>
<td align="left">(P → ⊥) → Q</td>
</tr>
</tbody>
</table>

</div>

[Return to top](#top)
* * * * *

<h1><a id="hw5a" class="protectopen" href="#" onclick="return false;">HW #5</a></h1>
<div id="hw5ahid" style="display: none;">

<p><strong>Assignment:</strong> <a href="erik-ex9.3.sen">9.3</a>, <a href="erik-ex9.5.sen">9.5</a>, <a href="erik-ex9.9.wld">9.9</a>, <a href="erik-ex9.16.sen">9.16</a>, <a href="erik-ex9.17.sen">9.17</a>, 10.1*, <a href="erik-focon1.sen">10.8</a> (<strong>6 points each</strong>, the starred exercise has a written component, which should be submitted using the <strong>Submit HW #5</strong> button on the lecture notes home page. Notice that there are <strong>42 points possible</strong> for this HW, so you have an opportunity to get a couple bonus points.)</p>

<p><strong>Deadline:</strong> This homework assignment is due on <strong>Monday, April 20</strong> at noon.</p>

<blockquote>
To see example answers to Grade Grinder exercises, right click the links above and save the files. Once saved, you can open them using the relevant LPL software.
</blockquote>

<table>
<tbody>
<tr class="odd">
<td align="right"></td>
<td align="left"><span class="scope">Annotated sentence</td>
<td align="left">Truth-functional form</td>
<td align="left">a/b/c</td>
</tr>
<tr class="odd">
<td align="right">1.</td>
<td align="left"><span class="scope">∀x x=x</span><sub>A</sub></td>
<td align="left">A</td>
<td align="left">b</td>
</tr>
<tr class="even">
<td align="right">2.</td>
<td align="left"><span class="scope">∃x Cube(x)</span><sub>A</sub> → <span class="scope">Cube(a)</span><sub>B</sub></td>
<td align="left">A → B</td>
<td align="left">c</td>
</tr>
<tr class="odd">
<td align="right">3.</td>
<td align="left"><span class="scope">Cube(a)</span><sub>A</sub> → <span class="scope">∃x Cube(x)</span><sub>B</sub></td>
<td align="left">A → B</td>
<td align="left">b</td>
</tr>
<tr class="even">
<td align="right">4.</td>
<td align="left"><span class="scope">∀x(Cube(x) ∧ Small(x))</span><sub>A</sub> → <span class="scope">∀x(Small(x) ∧ Cube(x))</span><sub>B</sub></td>
<td align="left">A → B</td>
<td align="left">b</td>
</tr>
<tr class="odd">
<td align="right">5.</td>
<td align="left"><span class="scope">∀v(Cube(v) ↔ Small(v))</span><sub>A</sub> ↔ ¬¬<span class="scope">∀v(Cube(v) ↔ Small(v))</span><sub>A</sub></td>
<td align="left">A ↔ ¬¬A</td>
<td align="left">a</td>
</tr>
<tr class="even">
<td align="right">6.</td>
<td align="left"><span class="scope">∀x Cube(x)</span><sub>A</sub> → ¬<span class="scope">∃¬Cube(x)</span><sub>B</sub></td>
<td align="left">A → B</td>
<td align="left">b</td>
</tr>
<tr class="odd">
<td align="right">7.</td>
<td align="left">[<span class="scope">∀z(Cube(z) → Large(z)) ∧ Cube(b)</span><sub>A</sub>] → <span class="scope">Large(b)</span><sub>B</sub></td>
<td align="left">A → B</td>
<td align="left">b</td>
</tr>
<tr class="even">
<td align="right">8.</td>
<td align="left"><span class="scope">∃x Cube(x)</span><sub>A</sub> → (<span class="scope">∃x Cube(x)</span><sub>A</sub> ∨ <span class="scope">∃y Dodec(y)</span><sub>B</sub>)</td>
<td align="left">A → (A ∨ B)</td>
<td align="left">a</td>
</tr>
<tr class="odd">
<td align="right">9.</td>
<td align="left">(<span class="scope">∃x Cube(x)</span><sub>A</sub> ∨ <span class="scope">∃y Dodec(y)</span><sub>B</sub>) → <span class="scope">∃x Cube(x)</span><sub>A</sub></td>
<td align="left">(A ∨ B) → A</td>
<td align="left">c</td>
</tr>
<tr class="even">
<td align="right">10.</td>
<td align="left">[(<span class="scope">∀u Cube(u)</span><sub>A</sub> → <span class="scope">∀u Small(u)</span><sub>B</sub>) ∧ ¬<span class="scope">∀u Small(u)</span><sub>B</sub>] → ¬<span class="scope">∀u Cube(u)</span><sub>A</sub></td>
<td align="left">[(A → B) ∧ ¬B] → ¬A</td>
<td align="left">a</td>
</tr>
</tbody>
</table>

</div>

[Return to top](#top)
* * * * *

<h1><a id="hw6a" class="protectopen" href="#" onclick="return false;">HW #6</a></h1>
<div id="hw6ahid" style="display: none;">

<p><strong>Assignment:</strong> <a href="erik-ex10.22.wld">10.22</a>, <a href="erik-ex10.27.wld">10.27</a>, 10.30, 10.32, <a href="erik-ex11.11.wld">11.11</a>, <a href="erik-ex11.17.sen">11.17</a>, <a href="erik-ex11.18.sen">11.18</a>, <a href="erik-ex11.26.sen">11.26</a> (<strong>6 points each</strong>, all exercises should be submitted through grade grinder. Notice that there are <strong>48 points possible</strong> for this HW, so you have an opportunity to get some bonus points.)</p>

<p><strong>Deadline:</strong> This homework assignment is due on the last day of classes -- <strong>Monday, May 4</strong> at noon.</p>

<blockquote>
To see example answers to Grade Grinder exercises, right click the links above and save the files. Once saved, you can open them using the relevant LPL software.
</blockquote>

</div>

[Return to top](#top)
* * * * *


<!-- Externals -->
<script src="../js/jquery-1.11.2.js"></script>
<script src="../js/toggles.js"></script>
<script src="../js/protect-file.js"></script>
<link rel="stylesheet" href="../css/hw.css">
