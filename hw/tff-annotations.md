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
