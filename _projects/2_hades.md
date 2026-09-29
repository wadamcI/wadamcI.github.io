---
layout: page
title: Project HADES — Closed-Loop Airbrakes
description: Apogee-targeting airbrakes on a Teensy 4.1, with Kalman/Madgwick estimation, CFD-based guidance and hardware-in-the-loop simulation. Flight scheduled for October 2026.
img: assets/img/MASA/hades/irec_launch_day.jpg
importance: 1
category: rocketry
related_publications: false
toc:
  sidebar: left
---

**Team:** MASA-Dearborn, Team 45 · **Season:** 2025–26 · **Competition:** IREC 2026, 10k ft COTS category · **Flight:** rescheduled to October 2026 · **My role:** Project Lead, Airbrakes Electrical · **Code:** [MASA-Dearborn/HADES-Airbrakes](https://github.com/MASA-Dearborn/HADES-Airbrakes)

## Overview

**H.A.D.E.S.** (High Altitude Demonstrator for Electromechanical Systems) is MASA-Dearborn's 2026 competition rocket. It is a single-stage, 6-inch, 3.74 m vehicle on an **AeroTech N3300R**, with a liftoff mass of about 40.6 kg. On that motor it would coast well past the **10,000 ft (3,048 m)** target, so the airbrakes have to remove that extra energy.

Where [Vulcan]({{ '/projects/1_project/' | relative_url }}) used a threshold-based deployment, HADES closes the loop. The flight computer **predicts apogee continuously** during coast and commands the flap opening needed to hit the target.

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/MASA/hades/control_loop.png" title="Airbrake control loop" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/MASA/hades/controller_arch.png" title="Two-loop controller architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Left: the airbrake control loop. Right: the two-loop architecture. An outer guidance loop turns predicted-apogee error into a deployment command, and an inner loop drives the actuator to that position.</div>

## Hardware

| Function | Part |
|---|---|
| Microcontroller | Teensy 4.1 |
| IMU | Bosch BMI088 (accel + gyro) |
| Barometer | Bosch BMP585 |
| Magnetometer | ST LIS2MDL |
| Actuation | Linear actuator + TI DRV8262 H-bridge, Hall-effect position feedback |
| Logging | Binary flight log to SD |
| Power | 4 × 18350 Li-ion cells (≈13 Wh usable) |

Sensors are on SPI and the actuator is driven by PWM. We picked each sensor for noise performance, sample rate and robustness to vibration. Integration started on dev boards and a perfboard prototype, then moved to a custom PCB.

<div class="row">
  <div class="col-sm-4 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/perfboard_prototype.jpg" title="Perfboard prototype" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/pcb_routing.png" title="PCB routing" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/mock_system.jpg" title="Actuator bench mock-up" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">From left: the perfboard prototype, the custom board routing, and the linear-actuator bench mock-up.</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/hardware_block.png" title="Hardware block diagram" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Hardware block diagram: sensors → Teensy 4.1 → DRV8262 → linear actuator, with Hall-effect feedback, SD logging and a Bluetooth module.</div>

## State estimation

<div class="row">
  <div class="col-sm-5 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/estimation_arch.png" title="Estimation architecture" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-7 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/kf_altitude.png" title="Kalman filter altitude validation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Left: a Kalman filter handles the vertical state and a Madgwick filter handles attitude. Right: offline validation, with barometric altitude compared to the Kalman estimate.</div>

**Attitude (Madgwick).** A quaternion filter integrates the gyro and corrects with the accelerometer. The correction only runs when the measured acceleration is between 0.5 and 1.5 g, so boost and free-fall don't corrupt it. The estimated tilt feeds a **30° tilt lock**: past that, the brakes are inhibited or retracted.

**Vertical state (Kalman).** A two-state filter with $$\mathbf{x}_k = [h_k,\ v_k]^\top$$:

$$
\mathbf{x}_{k+1} = \begin{bmatrix}1 & \Delta t\\ 0 & 1\end{bmatrix}\mathbf{x}_k + \begin{bmatrix}\tfrac12\Delta t^2\\ \Delta t\end{bmatrix} u_k + \mathbf{w}_k,
\qquad y_k = \begin{bmatrix}1 & 0\end{bmatrix}\mathbf{x}_k + v_k,
$$

The input $$u_k = a_m\cos\alpha_k - g$$ is the IMU acceleration projected onto the vertical axis. The filter **predicts at 200 Hz** from the IMU and **corrects at 50 Hz** from the barometer. Its noise parameters come from bench characterization of the actual sensors: accelerometer σ ≈ 0.052 m/s², barometer σ ≈ 0.03 m.

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/accel_noise.png" title="Accelerometer noise distribution" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/baro_noise.png" title="Barometer noise distribution" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Sensor noise characterization used to tune the filter's process and measurement noise.</div>

## Guidance and control

Drag is modeled as $$D = \tfrac12 \rho v^2 A\, C_D(\theta, \mathrm{Ma})$$. The $$C_D$$ table comes from **Ansys CFD** of the flaps across deployment angle and Mach number.

- **Apogee prediction.** An energy balance on the current $$(h, v)$$ estimate, with a mean-drag correction from the CFD table.
- **Outer loop.** Proportional control on the predicted apogee error: $$\theta_{cmd} = K_{P,o}\,(h_{target} - h_{pred})$$.
- **Inner loop.** A PI position controller on the actuator, closed through the Hall-effect encoder: $$u = K_{P,i}\, e_\theta + K_{I,i}\!\int e_\theta\,dt$$.

Separating trajectory regulation from actuator dynamics keeps each loop simple to tune and test on its own.

The firmware runs on a fixed-rate cooperative scheduler, with a flight state machine of **IDLE → LAUNCHED → COASTING → APOGEE → DESCENT**, plus a **FAULT** state. Deployment is only allowed in COASTING, after burnout, and within the tilt limit.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/software_flow.png" title="Flight software flow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Flight software flow: health check → launch detect → estimation → burnout → controller → apogee → retract.</div>

## Hardware-in-the-loop testing

The biggest step up from Vulcan is a **HIL simulator**. A [RocketPy](https://github.com/RocketPy-Team/RocketPy) 6-DoF simulation runs on the laptop and is coupled over USB serial to the Teensy running the **unmodified flight stack**:

1. Python sends an `INIT` packet with pad pressure and temperature, and the Teensy calibrates its barometer and homes the actuator.
2. The rocket sits on the pad for a few seconds so the Madgwick and Kalman filters converge.
3. Every 5 ms of simulated time (the 200 Hz IMU rate), Python sends one sensor packet and waits. The Teensy replies with its actuator position, and the simulation applies the matching drag from the CFD table.
4. The run reports apogee error, firmware estimates against ground truth, and the deployment history.

There are three builds. The first simulates both sensors and actuator, which is deterministic and used for tuning guidance. The second injects simulated sensors but drives the **real motor and encoder**, paced to wall-clock time so real friction, dead-band and speed are in the loop. The third is a bench-only build for calibrating the actuator.

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/offline_controlled_vs_uncontrolled.png" title="Controlled vs uncontrolled flight" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/hil_altitude_velocity.png" title="HIL run: truth vs firmware estimate" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Left: simulated flight with and without airbrakes. Right: a HIL run, where the firmware's altitude and velocity estimates (dashed) sit on top of simulator truth.</div>

**Results so far (simulation):** without airbrakes, the simulated flight reaches about **4.2 km**. In the latest HIL runs, the firmware brought apogee to **3,021–3,026 m**, within about **25 m (under 1%) of the 3,048 m target**.

## Status and next steps

**HADES has not flown yet. The flight has been rescheduled to October 2026.** The firmware builds, the protocol tests pass and the HIL loop closes, but it is not yet flight-cleared. Before the October flight, we still need to:

- Add a hardware watchdog and sensor-failure detection that latch FAULT and retract the brakes.
- Add timing margin on the boost inhibit so the brakes can never open under residual thrust.
- Complete a real-hardware run (captive carry or tumble test) to confirm estimator convergence and launch detection on real sensor noise.
- Check the CFD drag table against the as-built flap geometry.

## Team

**HADES Airbrakes Electrical, 2026:** Marcus Wada (Project Lead) · Andrew Bellinger (Theory & Testing) · Ali Beidoun (CFD & Assembly) · Osman Hadi (PCB Design & Schematics) · Resul Ilmammedov (Hardware Prototyping) · David Richardson (Theory)

**Support & leadership:** Robert Everitt (Chief Electrical Engineer) · Michael Miney (Chief Mechanical Engineer, CFD) · Chase Sutherlin (Airbrakes Mechanical Design) · Prof. Karishma Patnaik (Faculty Advisor)

<div class="row">
  <div class="col-sm-7 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/muskegon_group.jpg" title="MASA-Dearborn team" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-5 mt-3">
    {% include figure.liquid path="assets/img/MASA/hades/whiteboard.jpg" title="Whiteboard session" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">Left: the MASA-Dearborn team (Muskegon launch, Sept. 21). Right: talking through controller architecture on the whiteboard.</div>

## The trip to IREC 2026

HADES didn't fly in Texas, but competition week is about more than the launch: a long drive, a lot of Chipotle, and a team that got closer along the way.

<div class="row">
  <div class="col-sm-4 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_drive_to.jpg" title="Drive down" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm-4 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_basspro.jpg" title="Bass Pro stop in Tennessee" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm-4 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_gym.jpg" title="Gym session" class="img-fluid rounded z-depth-1" %}</div>
</div>
<div class="caption">The drive down, a stop at the Tennessee Bass Pro Shops, and a gym session on the road.</div>

<div class="row">
  <div class="col-sm-7 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_launch_day.jpg" title="Launch day" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm-5 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_presentation.jpg" title="Presentation" class="img-fluid rounded z-depth-1" %}</div>
</div>
<div class="caption">On the range in Texas, and after the team presentation.</div>

<div class="row">
  <div class="col-sm-4 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_bbq.jpg" title="Team BBQ" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm-4 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_paper_plate.jpg" title="Paper-plate award" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm-4 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_shoes.jpg" title="Boots lined up" class="img-fluid rounded z-depth-1" %}</div>
</div>
<div class="caption">Team BBQ, the paper-plate awards ("Cannon Calves"), and a hallway of boots after a day on the range.</div>

<div class="row">
  <div class="col-sm-6 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_chipotle.jpg" title="Chipotle on the way back" class="img-fluid rounded z-depth-1" %}</div>
  <div class="col-sm-6 mt-3">{% include figure.liquid path="assets/img/MASA/hades/irec_drive_back.jpg" title="Drive back" class="img-fluid rounded z-depth-1" %}</div>
</div>
<div class="caption">Chipotle and the long drive home.</div>
