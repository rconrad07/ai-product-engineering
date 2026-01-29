# Solution Architecture: IoT Energy Management

## Overview

This document outlines the conceptual technical architecture for the IoT Smart Energy Management system, focusing on the integration between hardware sensors, the local gateway, the Property Management System (PMS), and the HVAC units.

## Core Components

1. **IoT Sensors:** PIR (Passive Infrared) and BLE (Bluetooth Low Energy) sensors for occupancy detection.
2. **In-Room Gateway:** Zigbee/Wi-Fi hub that aggregates sensor data and transmits to the cloud/on-prem server.
3. **Integration Layer:** REST API middleware that polls PMS events (Check-in/Check-out) and pushes commands to HVAC.
4. **Logic Engine:** Rules-based system that determines "Comfort" vs "Economy" modes.

## Conceptual Flow

```text
[Occupancy Sensor] --(Zigbee)--> [Gateway] --(API)--> [Logic Engine]
                                                           |
[PMS Events] --------(Webhook)-----------------------------|
                                                           |
[HVAC Control Hub] <------------(MQTT/REST)-----------------
```

## Technical Constraints

- **Latency:** Occupancy detection to HVAC adjustment must occur within < 30 seconds to maintain comfort.
- **Privacy:** Data must be processed at the edge or anonymized before cloud transit. No visual sensors allowed.
- **Reliability:** System must default to guest-controlled "Comfort" mode if connectivity to the Logic Engine is lost.

## Integration Dependencies

- **PMS:** Must support real-time webhooks for room state changes.
- **HVAC:** Requires thermostats with open API support (e.g., Schneider EcoStruxure).
