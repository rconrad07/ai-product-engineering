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
   * Front desk queues during peak hours (3-6 PM) lead to significant guest dissatisfaction. Physical keycard loss accounts for 5% of desk interactions, further burdening staff.

2. **Expected Impact:**
   * **Guest Experience:** Improve Arrival CSAT by 15 points.
   * **Operational Cost:** Reduce front desk staff overhead by 20% through self-service adoption.

3. **Success Metrics:**
   * > 40% of guests opt-in for digital-only check-in within first year.
   * Average check-in time reduced from 8 minutes to < 2 minutes for mobile users.

---

## 🥇 RICE Score

| **Category**   | **Score** | **Reasoning** |
| -------------- | --------- | ------------- |
| **Reach**      | 6         | Targets mobile-savvy travelers (approx 60% of guest base). |
| **Impact**     | 5         | Massive improvement in first-impression logistics. |
| **Confidence** | 70%       | Hardware compatibility across diverse portfolios is a risk. |
| **Effort**     | 9         | Complex integrations with both PMS and lock hardware (NFC/BLE). |

**Overall RICE Score: 2.33**

---

## 🎯 Scope Delimitation

| **Is*** | **Isn’t*** |
| ------- | ---------- |
| Digital key issuance to mobile app | A replacement for the lobby (hybrid stay only) |
| ID upload and credit card auth | For walk-in bookings (reservation required) |

---

## ⚽ Solution

A mobile-first check-in workflow integrated into the existing brand app. The system uses a middleware (e.g., OpenKey or ASSA ABLOY Seos) to securely transmit a Bluetooth Low Energy (BLE) token to the user's smartphone, allowing them to bypass the front desk entirely.

---

## 📡 Early Detection Matrix

| **Risks** | **Assumptions** |
| ---------- | ---------------- |
| Phone battery/compatibility issues | All locks at property support BLE or can be retrofitted |
| Security vulnerabilities in BLE transmit | Guests are willing to download the app for a key |

| **Issues** | **Dependencies** |
| ----------- | ----------------- |
| High cost of lock hardware upgrades | PMS must support online check-in state |
| | Legal approval for digital ID verification |

---

## 🚩 Business milestones and deadlines

| **Milestone**         | **Owner**        | **Deadline**        | **Status**    |
| --------------------- | ---------------- | ------------------- | ------------- |
| Hardware Audit        | @Facilities      | 2026-03-01          | Not started   |
| Security Certification| @Infosec         | 2026-05-15          | Not started   |

---

## 🔗 Reference materials

* **Market Projections:** Global contactless hotel check-in market projected to reach USD 6.06 billion by 2033. [1]
* **Key Vendors:** ASSA ABLOY Global Solutions, OpenKey, and SALTO Systems are lead providers. [1][10]

---

## ✅ Sign-Offs (if applicable)

| **Role**             | **Name**        | **Date Completed**   |
| -------------------- | --------------- | -------------------- |
| PCI-DSS Compliant    | @InfosecLead    | TBD                  |
| System Architecture  | @SolutionsArch  | 2026-01-29           |
| Legal                | @LegalCounsel   | TBD                  |

---
