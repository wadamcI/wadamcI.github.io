---
layout: page
permalink: /teaching/math116/sequences-and-series/
title: "Sequences and Series"
description: "MATH 116 SI worksheet · Fall 2025 · Session 3"
nav: false
---

<style>.post li mjx-container[display="true"]{text-align:left !important;margin:0.35em 0 !important}</style>

[← All MATH 116 worksheets]({{ '/teaching/' | relative_url }}) · [LaTeX source]({{ '/assets/tex/math116/sequences-and-series.tex' | relative_url }})

### Definitions

A **sequence of real numbers** is a function $$f: \mathbb{N} \to \mathbb{R}$$, $$n \mapsto a_n = f(n)$$, written $$(a_n)_{n \in \mathbb{N}} = (a_1, a_2, a_3, \dots)$$.

Its associated **series** is $$\displaystyle \sum_{n=1}^\infty a_n = a_1 + a_2 + a_3 + \cdots$$, and the **sequence of partial sums** is $$\displaystyle S_n = \sum_{k=1}^n a_k$$.

The series is defined by $$\displaystyle \sum_{n=1}^\infty a_n = \lim_{n \to \infty} S_n$$. It is

- **convergent** if $$\lim_{n \to \infty} S_n = s$$ for some $$s \in \mathbb{R}$$, and
- **divergent** if $$\lim_{n \to \infty} S_n = \pm\infty$$ or the limit does not exist.

**Necessary condition:** if $$\sum a_n$$ converges, then $$\lim_{n\to\infty} a_n=0$$.

### Write $$a_n$$ for each sequence

1. $$1, 2, 3, \dots$$ Answer: $$a_n = n$$
2. $$2, 4, 6, \dots$$
3. $$1, 2, 4, 8, \dots$$
4. $$1, 1, 2, 3, 5, 8, \dots$$
5. $$1, 2, 6, 24, 120, \dots$$
6. $$1, 3, 6, 10, 15, 21, \dots$$
{: style="columns: 2; column-gap: 2rem"}

### Rewrite as a sum

1. $$1+\frac{1}{2}+\frac{1}{4}+\frac{1}{8}+ \cdots$$ Answer: $$\sum_{n=0}^\infty\frac{1}{2^n}$$
2. $$\frac{1}{1\cdot2}+\frac{1}{2\cdot3}+\frac{1}{3\cdot4}+ \cdots$$
3. $$1+\frac{1}{4}+\frac{1}{9}+\frac{1}{16}+ \cdots$$
4. $$1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+ \cdots$$
5. $$1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+ \cdots$$
6. $$1-1+1-1+ \cdots$$
7. $$1-2+3-4+5- \cdots$$
8. $$1+2+3+4+5+ \cdots$$
{: style="columns: 2; column-gap: 2rem"}

### Properties of series

*Assume all series below converge.*

- **Addition:** $$\sum (a_n + b_n) = \sum a_n + \sum b_n$$
- **Subtraction:** $$\sum (a_n - b_n) = \sum a_n - \sum b_n$$
- **Scalar multiple:** $$\sum c\,a_n = c \sum a_n$$ for $$c \in \mathbb{R}$$

### Compute the sums

1. $$\displaystyle \sum_{n=1}^\infty \frac{3^{n-1}-1}{6^{n-1}}$$
2. $$\displaystyle \sum_{n=1}^\infty \frac{4}{6^{n-1}}$$
{: style="columns: 2; column-gap: 2rem"}

### Find a formula for the partial sums

1. $$1+2+3+\cdots +n$$
2. $$1^2+2^2+3^2+\cdots +n^2$$
3. $$1^3+2^3+3^3+\cdots +n^3$$

### Additional problems

1. Find a formula for the general term of $$1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, \dots$$
2. Find a closed form for the general term of the sequence defined by $$x_0=1$$ and $$x_n = x_{n-1} + n$$ if $$n$$ is odd, $$x_n = x_{n-1} + n - 1$$ if $$n$$ is even.
3. Find the sum of the coefficients of the terms whose exponent of $$x$$ is a multiple of 3 in $$(1 + x^2 - x^3 + x^4)^{10}$$.
