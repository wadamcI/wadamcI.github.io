---
layout: page
title: Project Vulcan 24-25, Airbrakes Controls
description:  Closed-loop airbrake control with Kalman-based state estimation, HIL/SIL validation, and flight testing.
img: assets/img/MASA/AB_Vulcan_photo.png
importance: 1
category: work
related_publications: true
tags: [controls, avionics, HIL, MASA, STM32, Kalman]
---

## Overview

The **airbrake control system** regulates aerodynamic braking to ensure the Vulcan rocket reaches its target apogee. Our research explored advanced methods such as **PID** and **adaptive control**, but given time and experience constraints, we implemented a simplified **threshold-based deployment strategy**. This mechanism activates the airbrakes when the error signal—defined as the difference between modeled and measured drag—exceeds a predefined threshold.

Fail-safes are incorporated to guarantee reliability:
- **Timed activation** within a defined flight window.  
- **Sensor cross-validation** to reduce false triggers.  
- **Real-time health checks** for actuator/sensor integrity.  

---

## Design Analysis

In aerospace applications, a control system is best understood as the integration of three interdependent functions:

- **Navigation** — estimating the vehicle’s state (position, velocity, acceleration, orientation) using onboard sensors.  
- **Guidance** — generating target instructions, such as desired apogee altitude.  
- **Control** — executing guidance commands via actuators (airbrake servos in our case).  

For Vulcan, analysis focuses on the **midcourse (coasting) phase**—the period between motor burnout and apogee. During this phase:

- Thrust is zero, so both mass and inertia are constant.  
- The rocket behaves as a rigid body under translational and rotational motion.  
- Dominant forces are:
  - Gravitational force (\(F_g\))  
  - Aerodynamic drag force (\(F_A(u)\)), modulated by airbrake openness \(u\)  
  - Disturbance forces (\(F_N\)) such as wind or turbulence  

---
## System Overview
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3">
    {% include figure.liquid path="assets/img/MASA/AB_Vulcan_SoftwareBlock.png" title="Software overview" class="img-fluid rounded z-depth-1" %}
  </div>


</div>
<div class="caption">Sensor → Estimator (Kalman) → Controller → Airbrake Actuator.</div>

**Stack & Hardware**
- **MCU:** STM32
- **Buses:** I2C for IMU/Baro, UART for telemetry, CAN for inter-board
- **Tooling:** PlatformIO, MATLAB/Simulink, Python, Post-processing in Jupyter

---
