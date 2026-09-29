---
layout: page
title: Project Vulcan — Airbrakes Controls
description: MASA-Dearborn's first flown airbrake system at IREC 2025, from simulation and CFD to flight software.
img: assets/img/MASA/vulcan/airbrakes_deployed.jpg
importance: 2
category: rocketry
related_publications: false
toc:
  sidebar: left
---

**Team:** MASA-Dearborn (Michigan Aeronautical Science Association at Dearborn) · **Season:** 2024–25 · **Competition:** Spaceport America Cup / IREC 2025 (Midland, TX) · **My role:** Airbrakes Electronics & Controls Lead

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3">
    {% include video.liquid path="assets/video/MASA/vulcan_irec_launch.mp4" class="img-fluid rounded z-depth-1" controls=true %}
  </div>
</div>
<div class="caption">Onboard footage from Vulcan's flight at IREC 2025.</div>

## Overview

Vulcan was the first MASA-Dearborn rocket to fly an **active airbrake system**. The goal was simple to state and hard to do: after motor burnout, deploy drag flaps so the rocket coasts to the **target apogee** instead of overshooting it.

The airbrakes team owned the whole loop: a flight simulator to predict apogee, CFD to characterize how the flaps change drag, the embedded electronics and estimation code, and the deployment logic. We studied **PID** and **adaptive** controllers in simulation. For our first flight, with limited time and flight data, we chose a simpler and more predictable **threshold-based deployment strategy**, backed by several fail-safes.

<div class="row">
  <div class="col-sm-7 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/MASA/vulcan/airbrakes_deployed.jpg" title="Vulcan in flight" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-5 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/MASA/AB_Vulvan_Design.png" title="Airbrake mechanism" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Left: Vulcan in flight. Right: the airbrake mechanism. A central linear actuator drives lever arms that swing hinged flaps out through the airframe coupler.</div>

## Design analysis

In aerospace applications, a control system is best understood as the integration of three interdependent functions:

- **Navigation**: estimating the vehicle's state (position, velocity, acceleration, orientation) from onboard sensors.
- **Guidance**: generating the target, here the desired apogee altitude.
- **Control**: executing guidance commands through actuators (the airbrake flaps).

The analysis focuses on the **midcourse (coast) phase**, the period between motor burnout and apogee. During this phase:

- Thrust is zero, so mass and inertia are constant.
- The rocket behaves as a rigid body in translation and rotation.
- The dominant forces are gravity $$F_g$$, aerodynamic drag $$F_A(u)$$ modulated by the airbrake opening $$u$$, and disturbances $$F_N$$ such as wind and turbulence.

For vertical motion this reduces to

$$
m\,\dot v = -m g - \tfrac{1}{2}\rho(h)\, v^2 A\, C_D(u, \mathrm{Ma}) + F_N ,
$$

so the only lever we have on apogee is the drag coefficient, through $$u$$.

## Simulation and modeling

We built a Python flight simulator ([vulcan_airbrakes_control](https://github.com/wadamcI/vulcan_airbrakes_control)). It uses [RocketPy](https://github.com/RocketPy-Team/RocketPy) for the powered ascent, then hands off to custom coast-phase ODEs that include the airbrake drag. Control logic was prototyped in MATLAB/Simulink first, then ported to Python.

To trust a simplified model on board, we validated it against the full 6-DoF RocketPy simulation. We ran **Monte Carlo** simulations with identical input distributions and compared the predicted apogee using bias, RMSE and a KS test. The scatter below shows the simplified model tracking RocketPy with a consistent bias, which can be corrected.

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/vulcan/monte_carlo_apogee.png" title="Monte Carlo apogee comparison" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/vulcan/cfd_pressure.png" title="Vulcan CFD pressure contours" class="img-fluid rounded z-depth-1" %}
    {% include figure.liquid path="assets/img/MASA/vulcan/cfd_mesh.png" title="Vulcan CFD mesh" class="img-fluid rounded z-depth-1 mt-3" %}
  </div>
</div>
<div class="caption">Left: simplified-model apogee vs. RocketPy apogee across Monte Carlo runs. Right: CFD pressure contours and the mesh around the deployed flaps, used to build the drag table.</div>

## Flight software

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/MASA/AB_Vulcan_SoftwareBlock.png" title="Vulcan flight software flow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Flight software flow: initialize → read sensors → Kalman filter → inhibit checks → deploy → retract near apogee. Data is logged to SD throughout.</div>

The flight computer reads the IMU and barometer, and a **Kalman filter** fuses them into altitude and vertical-velocity estimates. The deployment logic is a small state machine:

1. **Boost inhibit.** No deployment until a fixed time after launch has passed, so the flaps can never open under thrust.
2. **Attitude inhibit.** If the rocket is more than **30° off vertical**, the system enters a do-not-deploy state. Airbrakes should shed energy, not steer a tilted rocket.
3. **Deploy.** Once the Kalman-estimated altitude crosses the deployment threshold, the flaps open.
4. **Retract.** When the estimate indicates apogee is near, or a timeout elapses, the flaps retract.

**Other fail-safes:** timed activation within a fixed flight window, cross-checking between sensors to avoid false triggers, and health checks on the actuator and sensors.

**Stack:** STM32 · IMU + barometer · Kalman filtering · SD logging · PlatformIO · MATLAB/Simulink · Python (RocketPy, NumPy/SciPy) · Jupyter for post-flight analysis.

## At the competition

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/vulcan/irec_explaining.jpg" title="Presenting the airbrakes at IREC" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/vulcan/sac2024_group.jpg" title="MASA-Dearborn at Spaceport America Cup" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Left: walking judges through the airbrake design at IREC. Right: the MASA-Dearborn team at Spaceport America Cup 2024 with S.H.A.G.E.E., the rocket before Vulcan.</div>

## What I took away

- **Ship a simple controller first.** A threshold law with solid inhibits flew. A tuned PID with no flight data might not have.
- **Validate simplified models before trusting them on board.** The Monte Carlo comparison is what made the onboard predictor credible.
- **Safety logic is most of the code.** Boost inhibit, tilt lock and retraction timing took more design effort than the control law itself.

These lessons carried straight into the next season's rocket: [Project HADES]({{ '/projects/2_hades/' | relative_url }}) replaced the threshold law with closed-loop apogee prediction and added hardware-in-the-loop testing.
