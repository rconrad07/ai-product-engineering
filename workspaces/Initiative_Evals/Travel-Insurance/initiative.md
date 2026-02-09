# Initiative: Self-Funded Travel Insurance

> [!WARNING]
> **External Research Alert:** Market Analyst research indicates that major competitors (Expedia, Booking.com) do NOT self-fund insurance, but partner with third-party underwriters. This may significantly impact the strategic assumptions of this initiative.

---

## 🤔 Problem Statement

1. **Why This Matters:**
   Our current third-party travel insurance partnership forces revenue sharing and limits our ability to control the guest experience. By self-funding, we aim to capture 100% of the insurance margin. However, research indicates this model is an industry outlier among OTAs, as competitors typically leverage licensed third-party underwriters to manage risk and regulatory burdens.

2. **Expected Impact:**
   * **Revenue Growth:** Potential to retain full premium amounts, though offset by new actuarial risk and capital reserves.
   * **Control:** Full ownership of the claims and payout experience for our guests.

3. **Success Metrics:**
   * **Profit Margin:** 20% increase in net insurance profit per booking (target).
   * **Pilot Completion:** Successful 6-month launch to US Associates with 0 regulatory compliance infractions.

---

## 🥇 RICE Score

| **Category**   | **Score** | **Reasoning** |
| -------------- | --------- | ------------- |
| **Reach**      | 2 | Limited to US Associates (~5,000 users). |
| **Impact**     | 3 | High strategic priority; significant revenue shift. |
| **Confidence** | 20% | **Low**: Competitive landscape suggests this is not standard industry practice; high regulatory uncertainty. |
| **Effort**     | 8 | Requires state-level licensing, actuarial modeling, and complex payment routing logic. |

**Overall RICE Score: 0.15**

---

## 🎯 Scope Delimitation

| **Is** | **Isn’t** |
| ------- | ---------- |
| Self-funded/Underwritten in-house. | Third-party partnership model. |
| US Associates only (Phase 1). | General public or International guests. |
| Internal booking website. | Native apps or third-party distribution. |

| **Does** | **Doesn’t** |
| --------- | ------------ |
| Handle premium collection at checkout. | Replace the core booking engine. |
| Manage claims via internal portal. | Include specialized high-risk coverages (e.g., extreme sports). |

---

## ⚽ Solution

_Assigned to: Solutions Architect_

1. **Split-Payment Routing:** Update the payment gateway to route insurance premiums to a separate internal clearing account while sending booking funds to travel suppliers.
2. **Synchronized Cancellation Logic:** Ensure that the "Travel State" and "Insurance State" remain in sync across the legacy booking engine to prevent orphaned active policies on cancelled trips.
3. **Internal Claims Workflow:** A lightweight portal integrated with the booking history for Associates to file and track claims.

---

## 📡 Early Detection Matrix

| **Risks (Market Analyst)** | **Assumptions (Market Analyst)** |
| :--- | :--- |
| Strategic misalignment with industry OTA norms. | We assume internal capital reserves are sufficient for self-funding. |
| State-level licensing roadblocks in 50 US states. | We assume internal Associates will accept the change from third-party. |

| **Risks (Solutions Architect)** | **Dependencies (Solutions Architect)** |
| :--- | :--- |
| **Build Trap**: Legacy payment gateway may not support automated split-routing. | **Legal Sign-off**: Every state-level product filing must be complete. |
| **Build Trap**: Manual reconciliation of disputes vs travel cancellations. | **Actuarial Model**: Risk-to-premium ratio must be finalized. |

| **Questions** |
| :--- |
| Can we realistically obtain insurance carrier status in 6 months? |
| Should we pivot to a "White-Label Underwriter" model instead of true self-funding? |

---

## 🚩 Business milestones and deadlines

| **Milestone** | **Owner** | **Deadline** | **Status** |
| :--- | :--- | :--- | :--- |
| Regulatory Gap Analysis | @LegalAnalyst | 2026-03-01 | In Progress |
| Actuarial Risk Finalization | @RiskOfficer | 2026-04-15 | Not started |
| MVP Technical Integration | @EngLead | 2026-06-01 | Not started |
| Associate Pilot Launch | @ProductLead | 2026-07-28 | Not started |

---

## 🔗 Reference materials

* [Travel Weekly: Licensing for Travel Retailers](https://www.travelweekly.com/Travel-News/Travel-Agent-Issues/Licensing-for-travel-insurance)
* [U.S. Bureau of Labor Statistics: Role of Underwriters](https://www.bls.gov/ooh/business-and-financial/insurance-underwriters.htm)
* [Market Analysis Document](file:///c:/Users/749534/Desktop/ai-product-engineering/workspaces/Initiative_Evals/Travel-Insurance/market-analysis.md)
* [Orchestration Log](file:///c:/Users/749534/Desktop/ai-product-engineering/workspaces/Travel-Insurance/orchestration-log.md)

---

## ✅ Sign-Offs (if applicable)

| **Role** | **Name** | **Date Completed** |
| :--- | :--- | :--- |
| PCI-DSS Compliant | TBD | |
| System Architecture | TBD | |
| Legal | TBD | |
| ADA Compliance | TBD | |
