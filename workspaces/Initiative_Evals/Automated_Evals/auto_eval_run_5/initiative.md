<!--
Template Name: Initiative
Source: Confluence
Owner: Product
Version: v1.0
Last Updated: 2026-01-23
-->

**Purpose:**  
Define the _why_, _what_, and _success criteria_.

---

# AGENT OUTPUT

## 🤔 Problem Statement

1. **Why This Matters:**
   * Utility costs represent 14-25% of hotel operating expenses, with HVAC alone responsible for up to 53%. Heating/cooling empty rooms is a major source of financial and environmental waste.

2. **Expected Impact:**
   * **Cost Reduction:** 20-30% reduction in energy usage per property.
   * **Sustainability:** Alignment with green building certifications and corporate ESG goals.

3. **Success Metrics:**
   * HVAC runtime reduced by 40% in unoccupied rooms.
   * Net energy cost savings of > $2,000/month for a 200-room property.

---

## 🥇 RICE Score

| **Category**   | **Score** | **Reasoning** |
| -------------- | --------- | ------------- |
| **Reach**      | 10        | Every guest room and common area is impacted. |
| **Impact**     | 5         | Direct, massive impact on bottom-line margin. |
| **Confidence** | 80%       | Market solutions (Verdant, Schneider) show proven results. |
| **Effort**     | 8         | Large-scale hardware install and IoT integration. |

**Overall RICE Score: 5.0**

---

## 🎯 Scope Delimitation

| **Is*** | **Isn’t*** |
| ------- | ---------- |
| Automated thermostat setback for empty rooms | A replacement for manual thermostat controls |
| Lighting shut-off based on occupancy | A whole-building smart grid solution |

---

## ⚽ Solution

A cloud-managed IoT network of PIR/BLE sensors that communicate with an integration middleware. The system cross-references PIR data with PMS room status (Occupied vs. Vacant) to set HVAC setbacks. Refer to the supplemental `solution-architecture.md` for technical deep-dive.

---

## 📡 Early Detection Matrix

| **Risks** | **Assumptions** |
| ---------- | ---------------- |
| Sensor "dead zones" (guests sleeping) | Zigbee signal can penetrate thick hotel walls |
| False negatives leading to cold rooms | PMS provides stable real-time webhooks |

| **Issues** | **Dependencies** |
| ----------- | ----------------- |
| High cost of retrofitting legacy HVAC | Certification for Wi-Fi/Zigbee safety |
| | Guest app integration for override |

---

## 🚩 Business milestones and deadlines

| **Milestone**         | **Owner**        | **Deadline**        | **Status**    |
| --------------------- | ---------------- | ------------------- | ------------- |
| Hardware Pilot (5 rms)| @Facilities      | 2026-05-01          | Not started   |
| PMS Logic Validation  | @Engineering     | 2026-06-15          | Not started   |

---

## 🔗 Reference materials

* **Market Growth:** HEMS market projected to USD 10.42B by 2034. <https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEU01QG4mqHU6ZwZ2BAsXDW9HCq8OiMmu7vijiwo0qneEwOT5y6ZNLdhLnTgJwW4SJXgi5JL8yMQjcZoS61zmY7n_Zm-GqBGGpAveJsFEtnCaPL4c8bzlPj6PuiRMEQwM6HOfgQe2DGFi_XnPkGjXB1mYimfTMVM8nGiGeObCBbXb2Qq8g4L-7hBouS3A06Bc3Hslw9rP2oTJIp8Q==>
* **Vendor Comparison:** Solutions by Verdant and Schneider Electric. <https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF8H7NguA50gYDPC-0XkHDfnI3CCEEydGmnUbG9rHv9A6EJcOWfRAYGfr7NpbNkn1ymQqHkQNNXrQgY62QpOpT0CTk2xPWBPxniE-vDzA4SRK-Zo3T5swGEl5Zd8ZkzzQmN92VO9ghbO4AWDHgy7x98BWzA>

---

## ✅ Sign-Offs (if applicable)

| **Role**             | **Name**        | **Date Completed**   |
| -------------------- | --------------- | -------------------- |
| PCI-DSS Compliant    | N/A              | N/A                  |
| System Architecture  | @SA_Specialist  | 2026-01-23           |
| Legal (Privacy)      | @LegalCounsel   | TBD                  |

---
