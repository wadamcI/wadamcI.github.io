---
layout: page
permalink: /teaching/math116/improper-integrals-and-laplace/
title: "Improper Integrals, Comparison and Laplace Transforms"
description: "MATH 116 SI worksheet · Winter 2024 · Session 3"
nav: false
---

<style>.post li mjx-container[display="true"]{text-align:left !important;margin:0.35em 0 !important}</style>

[← All MATH 116 worksheets]({{ '/teaching/' | relative_url }}) · [LaTeX source]({{ '/assets/tex/math116/improper-integrals-and-laplace.tex' | relative_url }})

### I. Evaluate the integrals or prove they diverge

1. $$\displaystyle \int_{2}^{4} \frac{dx}{(x-3)^2}$$
2. $$\displaystyle \int_{0}^{2} \frac{dx}{\sqrt{4-x^2}}$$
3. $$\displaystyle \int_{-\infty}^{\infty} \frac{dx}{x^2+2x+5}$$
4. $$\displaystyle \int_{e^2}^{\infty} \frac{dx}{x\ln^3 x}$$
5. $$\displaystyle \int_{0}^{\infty} x\sin x\,dx$$
6. $$\displaystyle \int_{0}^{\infty} e^{-x}\sin x\,dx$$
{: style="columns: 2; column-gap: 2rem"}

### II. Test for convergence using the comparison test

1. $$\displaystyle \int_{a}^{\infty} e^{-px}\,dx,\quad p>0$$
2. $$\displaystyle \int_{0}^{\infty} \frac{dx}{1+2x^2+3x^4}$$
3. $$\displaystyle \int_{e^2}^{\infty} \frac{dx}{x+\sin^2 x}$$
4. $$\displaystyle \int_{1}^{\infty} \frac{\arctan x}{x}\,dx$$
5. $$\displaystyle \int_{2}^{\infty} \frac{\sqrt[7]{3+2x^2}}{\sqrt[5]{x^3-1}}\,dx$$
6. $$\displaystyle \int_{1}^{\infty} \left(1- \cos\frac{2}{x}\right) dx$$
{: style="columns: 2; column-gap: 2rem"}

### III. Derive the Laplace transform of each function

| $$f(t)$$ | $$\mathcal{L}\{f(t)\} = F(s)$$ |
|:---:|:---:|
| $$1$$ | |
| $$t$$ | |
| $$t^n$$ | |
| $$e^{at}$$ | |
| $$te^{at}$$ | |
| $$\sin bt$$ | |
| $$\cos bt$$ | |
| $$e^{at}\sin bt$$ | |
| $$e^{at}\cos bt$$ | |
| $$y$$ | |
| $$y'$$ | |
| $$y^{(n)}$$ | |

### IV. Rewrite the equations in terms of Laplace transforms

1. $$y' = ay$$
2. $$T' = -k(T-T_a)$$
3. $$\displaystyle \frac{du}{dt}= r_{in}\,c_{in} - r_{out}\,\frac{u(t)}{V}$$
4. $$y'' + 4y' + 4y = \cos 2t$$
{: style="columns: 2; column-gap: 2rem"}

### V. Solve problems using the Laplace transform

Rewrite problems 8–10 from worksheet 2 (cooling and mixing) using Laplace transforms and isolate $$\mathcal{L}\{f(t)\}$$.

### VI. Extra problems

- **a.** Prove that $$\displaystyle \int_{0}^{\infty} \frac{\sin x}{x}\,dx$$ converges.
- **b.** Compute $$\displaystyle \int_{0}^{\infty} \frac{\ln x}{x^2+a^2}\,dx$$, where $$a>0$$.
- **c.** Give an example of a function $$f: (2, \infty) \to (0, \infty)$$ such that $$\displaystyle \int_{2}^{\infty} f^p(x)\,dx$$ is finite if and only if $$p\in [2, \infty)$$.
