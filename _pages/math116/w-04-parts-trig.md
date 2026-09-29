---
layout: page
permalink: /teaching/math116/parts-and-trig-substitution/
title: "Integration by Parts and Trig Substitution"
description: "MATH 116 SI worksheet · Winter 2024 · Session 4"
nav: false
---

<style>.post li mjx-container[display="true"]{text-align:left !important;margin:0.35em 0 !important}</style>

[← All MATH 116 worksheets]({{ '/teaching/' | relative_url }}) · [LaTeX source]({{ '/assets/tex/math116/parts-and-trig-substitution.tex' | relative_url }})

### I. Evaluate using integration by parts

1. $$\displaystyle \int x\cos x\,dx$$
2. $$\displaystyle \int x\arcsin x\,dx$$
3. $$\displaystyle \int \arctan x\,dx$$
4. $$\displaystyle \int x^n\ln x\,dx$$
5. $$\displaystyle \int e^x\cos x\,dx$$
6. $$\displaystyle \int x^n e^{x}\,dx$$
7. $$\displaystyle \int (\ln x)^n\,dx$$
8. $$\displaystyle \int \cos(\ln x)\,dx$$
9. $$\displaystyle \int x\ln\left(1+\frac{1}{x}\right) dx$$
10. $$\displaystyle \int \frac{\sqrt{x^2+1}\,[\ln(x^2+1)-2\ln x]}{x^4}\,dx$$
11. $$\displaystyle \int \ln\left(\sqrt{1-x}+\sqrt{1+x}\right) dx$$
{: style="columns: 2; column-gap: 2rem"}

### II. Evaluate using trigonometric substitution

1. $$\displaystyle \int \frac{\sqrt{a^2-x^2}}{x^2}\,dx$$
2. $$\displaystyle \int \frac{dx}{x^2\sqrt{1+x^2}}$$
3. $$\displaystyle \int \frac{\sqrt{x^2-a^2}}{x}\,dx$$
4. $$\displaystyle \int \frac{dx}{\sqrt{(a^2+x^2)^3}}$$
{: style="columns: 2; column-gap: 2rem"}

### III. Extra problems I: a geometric substitution

The line from $$(-1,0)$$ through a point $$(x,y)$$ on the unit circle crosses the $$y$$-axis at $$(0,t)$$.

<figure style="text-align:center;margin:1rem 0">
<svg viewBox="0 0 300 300" width="300" height="300" role="img" aria-label="Unit circle with the line from (-1,0) through (x,y) crossing the y-axis at (0,t)" style="color:var(--global-text-color);font-family:serif;font-style:italic;font-size:14px">
  <defs><marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs>
  <line x1="10" y1="150" x2="290" y2="150" stroke="currentColor" marker-end="url(#ah)"/>
  <line x1="150" y1="290" x2="150" y2="10" stroke="currentColor" marker-end="url(#ah)"/>
  <text x="282" y="168">x</text><text x="157" y="18">y</text>
  <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" stroke-width="2"/>
  <line x1="30" y1="150" x2="234.85" y2="65.15" stroke="currentColor"/>
  <line x1="150" y1="150" x2="234.85" y2="65.15" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="234.85" y1="150" x2="234.85" y2="65.15" stroke="currentColor" stroke-dasharray="4 3"/>
  <line x1="150" y1="150" x2="150" y2="100.3" stroke="currentColor" stroke-width="2"/>
  <circle cx="234.85" cy="65.15" r="3.5" fill="currentColor"/><text x="240" y="58">(x, y)</text>
  <circle cx="30" cy="150" r="3.5" fill="currentColor"/><text x="36" y="168">(−1, 0)</text>
  <circle cx="150" cy="100.3" r="3.5" fill="currentColor"/><text x="104" y="96">(0, t)</text>
  <text x="138" y="130">t</text><text x="186" y="100">1</text><text x="240" y="112">y</text><text x="188" y="166">x</text>
  <path d="M170,150 A20,20 0 0 0 164.14,135.86" fill="none" stroke="currentColor"/><text x="173" y="143">θ</text>
  <path d="M50,150 A20,20 0 0 0 48.48,142.35" fill="none" stroke="currentColor"/><text x="54" y="146" font-size="12">α</text>
</svg>
</figure>

- **a.** Express $$\alpha$$ in terms of $$\theta$$. What geometric property justifies this relationship?
- **b.** What is the slope of the line from $$(-1, 0)$$ to $$(x, y)$$ in terms of $$t$$? And in terms of $$x$$ and $$y$$?
- **c.** Using $$x^2+y^2=1$$ and the slope from part **b**, express $$\sin\theta$$, $$\cos\theta$$ and $$\tan\alpha$$ in terms of $$t$$.
- **d.** Using implicit differentiation, find $$d\theta$$ in terms of $$t$$.
- **e.** Use parts **c** and **d** to evaluate $$\displaystyle \int \frac{d\theta}{\sin^2\theta+\cos\theta+2}.$$

### IV. Extra problems II

- **a.** Let $$P(x)$$ be a polynomial with real coefficients. Prove that $$\displaystyle \int_{0}^{\infty} e^{-x}P(x)\,dx=P(0)+P'(0)+P''(0)+\cdots$$
- **b.** Compute $$\displaystyle \int_{0}^{\pi/4} \tan^{2n}x\,dx$$ for $$n\ge1$$.

<small>Part III follows Peter Magyar's [Geometric Trig Substitution](https://users.math.msu.edu/users/magyarp/Math133/Geometric-Trig-Substitution.pdf) notes.</small>
