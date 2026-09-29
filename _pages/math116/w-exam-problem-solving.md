---
layout: page
permalink: /teaching/math116/exam-problem-solving/
title: "Exam Session: How Do You Solve a Problem?"
description: "MATH 116 SI worksheet · Winter 2024 · Exam review"
nav: false
---

<style>.post li mjx-container[display="true"]{text-align:left !important;margin:0.35em 0 !important}</style>

[← All MATH 116 worksheets]({{ '/teaching/' | relative_url }}) · [LaTeX source]({{ '/assets/tex/math116/exam-problem-solving.tex' | relative_url }})

This session is less about new content and more about **how** you attack a problem you haven't seen before.

### I. Problem-solving strategies

1. In bullet points, describe your problem-solving strategy.
2. What do you do when you don't know where to start on a question?
3. Imagine the ideal problem-solving strategy and write it down in bullets. How does it differ from your answers to 1 and 2?

Here is some of Terence Tao's advice on solving mathematical problems (from *Solving Mathematical Problems: A Personal Perspective*):

- Understand the **problem**.
- Understand the **data**.
- Understand the **objective**.
- Select good **notation**.
- **Write** everything down.
- **Modify** the problem slightly.
- **Simplify**, **exploit** the data, and reach tactical **goals**.

For each point, give one example you've already run into in this course.

### II. Try it on a problem

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

### Reflection

Go back through the problem and write down, in bullets, the method you actually used. Where did it match your ideal strategy? How could you improve your technique?
