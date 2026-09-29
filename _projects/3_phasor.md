---
layout: page
title: Transformer-Guided Symbolic Regression for Real-Time Phasor Estimation
description: "In progress: a small transformer proposes the waveform model, and a physics-constrained fit estimates the phasor. For fault-distorted currents in protective relaying."
img:
importance: 1
category: research
related_publications: false
---

<span class="badge badge-warning">In progress</span> &nbsp; **With:** Sina Mohammadi, Van-Hai Bui, Prof. Wencong Su (Power Lab, University of Michigan–Dearborn)

## The problem

Protective relays decide whether to trip based on the **fundamental-frequency phasor** (amplitude and phase) of the current, estimated from a short window, usually one cycle. Right after a fault, the current is not a clean 60 Hz sinusoid. It carries a **decaying DC offset** and low-order **harmonics**:

$$
i(t) = A\cos(\omega t + \varphi) \;+\; \sum_{j} B_j\, e^{-t/\tau_j} \;+\; \sum_{h\in\{3,5\}} C_h \cos(h\omega t + \varphi_h) \;+\; \text{noise}.
$$

A standard full-cycle **DFT** assumes none of that is there. Its estimate overshoots and oscillates exactly when the relay has to decide. Classical DC-offset-removal methods help, but they assume a fixed model (typically a single exponential). Symbolic-regression approaches can discover the model, but a search per window is far too slow for real-time protection.

## The idea: the network proposes, physics decides

For each one-cycle window:

1. A **small transformer** reads the samples and predicts **which terms are present** (decaying DC, 3rd harmonic, 5th harmonic) and a rough **decay rate**. It works like symbolic regression, but it is learned in advance, so there is no online search.
2. A **physics-constrained refinement** fits all coefficients of that structure to the window using **variable-projection Gauss–Newton**.
3. The **fundamental phasor** is read directly from the fitted model.

The expensive search moves into offline training. Online, it is a single forward pass plus a few Gauss–Newton steps, with no online training.

## What I'm doing

- Built the signal model and scenario generator for fault transients: short and long DC time constants, dual DC offsets, harmonics, off-nominal frequency and noise.
- Designed and trained the transformer models, and implemented the variable-projection refinement.
- Implemented the baselines for comparison: full-cycle DFT, a closed-form DC-offset-removal method (Abdoos et al., 2016), and a replication of a deep symbolic-regression phasor estimator.
- Ran ablation studies on an HPC cluster (SLURM) and set up an evaluation of accuracy (total vector error, amplitude error, overshoot, settling time) and per-window runtime.

## Status

The manuscript is in preparation, and the code will be released alongside it. Results will be posted here once it's public.

**Related work in the lab:** [Publications]({{ '/publications/' | relative_url }})
