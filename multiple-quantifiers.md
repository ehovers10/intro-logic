---
title: "Ch. 11: Multiple quantifiers"
---

April 27 and 29, 2015

1.  [Sentences with two of the same quantifier](#same)
2.  [Sentences with two different quantifiers](#diff)
3.  [Translating complex English sentences into FOL](#donkey)

# Sentences with two of the same quantifier 

Every quantifier binds a particular variable, and each variable stands in for some object in the world. So, we can put multiple quantifiers into a sentence to talk about more than one object in the world. But there's a bit of a trick to making sure that our variables pick out two *different* objects.

Consider the following English sentence:

+ There are two cubes in the same column.

A reasonable way one might think to translate this sentence into FOL would be as:

+ &exist;x &exist;y (Cube(x) &and; Cube(y) &and; SameCol(x,y))

But now consider the following world:

<table class="worldtable" ><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr><tr ><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite twlarge  twcube" title="A large cube named c." ><span class="twcell twwhite" >c</span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td></tr><tr ><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td><td class="twcell twwhite" title="" ><span class="twcell twwhite" ></span></td><td class="twcell twblack" title="" ><span class="twcell twblack" ></span></td></tr></table>

The English sentence is pretty clearly false in this world, but let's evaluate our FOL translation according to the world. To do that, we need to substitute each object from the world for every variable and see if the resulting sentence is true.

In our world there is only one object (c), so let's substitute it in for x in our translation.

+ &exist;y (Cube(c) &and; Cube(y) &and; SameCol(c,y))

And now we need to do the same thing for y. Again, since c is the only object, it's the only substitution we need to make.

+ Cube(c) &and; Cube(c) &and; SameCol(c,c)

Since c is a cube in our world, and any object is in the same row as itself, each conjunct in the sentence is true. This makes the whole sentence true. This world thus serves as a counterexample to the translation we provided for the English sentence.

## Ensuring distinctness

The problem with our translation is that we want x and y to stand for different objects, but nothing in the meaning of the quantifiers ensures that. In order to ensure that our variables pick out two objects instead of the same one, we add another condition to our translation that does it explicitly.

+ &exist;x &exist;y (Cube(x) &and; Cube(y) &and; x &ne; y &and; SameCol(x,y))

[Return to top](#top)

* * * * *

<a name="diff"></a>

# Sentences with two different quantifiers

Our discussion of this material was drawn directly from section 11.2 of the book. Please reread this section.

[Return to top](#top)

* * * * *

<a name="donkey"></a>

# Translating complex English sentences

We can use quantifiers to capture lots of additional ways of talking about objects in a general way. But English is a much more syntactically complex language than FOL, and there are a lot of ways to use generality in English that don't have a direct corelate in FOL. To capture these sentences, we have to be creative in our translations.

Unfortunately, there's no algorithm you can work through to translate any sentence of English. However, there are some strategies you can keep in mind to help get the correct translation.

+ Make sure you fully understand what the English sentence is getting at. This may take a little more than just a quick scan of the sentence.
+ Consider trying to *paraphrase* the sentence in a way to make the quantificational structure more evident.
+ Work through in a step by step fashion, replacing individual predicates with FOL translations. 
  - Doing so will make it clear what variables are needed to fill the arguments of each predicate.
  - Once you know what variables are needed, you can determine what quantifiers will best capture the intended meaning.
+ Try applying different quantifiers in different positions.
+ Then evaluate your translation in different worlds to see how its truth value turns out.

## Donkey sentences

There's a particular oddness with quantificational language in English that can cause some confusion, and I want to highlight it here. Consider the following sentence:

+ Every farmer who owns a donkey pets it.

Sentences like this are called *donkey sentences* in the literature because when they were first introduced, donkey ownership was the main subject matter. But the lesson they teach has nothing to do with donkeys per se. What they show is that there isn't a direct translation from English quantificational language into FOL.

Notice that there are two quantifier indicators in the sentence: "every" and "a". In general, "every" corresponds to the *universal* quantifier, and "a" to the *existential*. So we may be inclined to translate the sentence as:

+ &forall;x ((Farmer(x) &and; &exist;y (Donkey(y) &and; Owns(x,y))) &rarr; Pets(x,y)) 

But this isn't even a sentence of FOL because the last instance of y is unbound. So, we might try to bring it into the scope of the existential quantifier by moving the quantifier to the front:

+ &forall;x &exist;y ((Farmer(x) &and; Donkey(y) &and; Owns(x,y)) &rarr; Pets(x,y)) 

But this doesn't quite get us what we want. When we try to fully understand the English sentence, it seems that it requires that *whenever* a farmer owns a donkey, he pets it. That means that if the farmer has *more than one* donkey, then he must pet *all* of them. Thus, a better translation is:

+ &forall;x &forall;y ((Farmer(x) &and; Donkey(y) &and; Owns(x,y)) &rarr; Pets(x,y)) 

The upshot is that in this sentence, the English word "a" seems to be working as a *universal* quantifier. So, we can't just automatically translate all English quantifier words in the same way. We must be careful to think about how the word is being *used* in the particular sentence it occurs in.

## Practice with translation

The best way to come to understand translation into FOL is by practice. To help you out with it, here are some example translations that I've put together.

+ Every dodecahedron is as large as every cube.
  - &forall;x (Dodec(x) &rarr; &forall;y (Cube(y) &rarr; (Larger(x,y) &or; SameSize(x,y))))
+ If a cube is to the right of a dodecahedron but not in back of it, then it is as large as
the dodecahedron.
  - &forall;x &forall;y ((Cube(x) &and; Dodec(y) &and; RightOf(x,y) &and; &not;BackOf(x,y)) &rarr; (Larger(x,y) &or; SameSize(x,y)))
+ No cube with nothing to its left is between two cubes.
  - &forall;x ((Cube(x) &and; &not;&exist;y LeftOf(y,x)) &rarr; &forall;y &forall;z ((Cube(y) &and; Large(z)) &rarr; &not;Between(x,y,z)))
+ The only large cubes are b and c.
  - Large(b) &and; Cube(b) &and; Large(c) &and; Cube(c) & &forall;x ((Cube(x) &and; Large(x)) &rarr; (x = b &or; x = c)) 
+ At most b and c are large cubes.
  - &not;&exist;x ((x &ne; b &and; x &ne; c) &and; Large(x) &and; Cube(x))

