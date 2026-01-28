## 🤔 Problem Statement

1. **Why This Matters:**
   As a white-label online travel agent (OTA) service, we are subject to emerging "Honest Pricing" laws (e.g., California SB 478, AB 537) that mandate the display of total upfront pricing. Currently, many of our platforms display a "base rate" and only reveal mandatory fees (resort fees, service fees, etc.) later in the booking funnel. This leads to "sticker shock," guest dissatisfaction, and potential legal non-compliance. Providing a transparent total price from the start ensures guests can make informed decisions and reduces abandonment at the final payment step.

2. **Expected Impact:**
   * **Compliance:** Avoid significant legal penalties (up to $10,000 per infraction in some jurisdictions).
   * **Trust:** Improve customer satisfaction and brand loyalty through pricing transparency.
   * **Efficiency:** Reduce customer support inquiries related to "hidden fees."
   * **Conversion:** While top-of-funnel pricing may appear higher, bottom-of-funnel conversion (from selection to payment) is expected to improve as price surprises are eliminated.

3. **Success Metrics:**
   * **Legal Compliance:** 100% of white-label sites compliant with "Total Upfront Pricing" regulations by May 31, 2026.
   * **Conversion Rate:** Neutral or positive impact on overall guest-to-booking conversion rate.
   * **Funnel Completion:** 5% increase in conversion from 'Room Selection' to 'Booking Confirmation'.

---

## 🥇 RICE Score

| **Category**   | **Score** | **Reasoning** |
| -------------- | --------- | ------------- |
| **Reach**      | 10        | Impacts all guests across all white-label sites globally. |
| **Impact**     | 3         | High impact on trust and legal compliance; critical for business continuity. |
| **Confidence** | 90%       | Market trends and legal mandates make this a clear requirement. |
| **Effort**     | 5         | Requires significant backend changes to pricing engines and frontend UI updates across multiple templates. |

**Overall RICE Score: 5.4**

---

## 🎯 Scope Delimitation

| **Is** | **Isn’t** |
| ------- | ---------- |
| Mandatory resort fees, service fees, and house fees included in advertised price. | Government-imposed taxes and fees (exempt in most jurisdictions). |
| Updates to search results, property detail pages, and room selection. | Behavior-based fees (e.g., smoking penalties, late check-out). |
| Web-based platforms (Mobile Web & Desktop). | Native Mobile Apps (out of scope for this phase). |

| **Does** | **Doesn’t** |
| --------- | ------------ |
| Calculate total mandatory price at the first point of display. | Provide a breakdown of taxes until the final checkout page. |
| Update all active white-label site templates. | Change the underlying merchant of record or payment processing. |

---

## ⚽ Solution

1. **Backend Integration:** Update the central pricing engine to aggregate all mandatory "non-tax" fees into the primary `base_price` or a new `total_mandatory_price` field in API responses.
2. **Frontend UI Update:** Modify all web templates to use the `total_mandatory_price` as the primary price display. Use clear labeling (e.g., "Total price including fees, excl. taxes").
3. **Toggle for Transparency:** Provide a "Price Breakdown" tooltip or modal near the price display to show what fees are included.
4. **Validation Logic:** Ensure the price displayed on the search result page matches the price on the confirmation page (excluding taxes).

---

## 📡 Early Detection Matrix

| **Risks** | **Assumptions** |
| ---------- | ---------------- |
| Competitors not following suit early might appear cheaper in search. | We assume taxes continue to be exempt from "upfront" total requirements. |
| Performance impact of more complex backend price calculations. | White-label partners will accept the visual change in "starting from" prices. |

| **Issues** | **Dependencies** |
| ----------- | ----------------- |
| Discrepancy between cache prices and real-time total prices. | Backend Pricing API must be updated before frontend work starts. |
| Multiple fee structures across different hotel partners. | Content Management System (CMS) needs to flag which fees are mandatory. |

| **Questions** |
| -------------- |
| How do we handle international sites with different tax/fee regulations? |
| Should we allow guests to toggle between "Base" and "Total" (if legally permitted)? |

---

## 🚩 Business milestones and deadlines

| **Milestone**         | **Owner**        | **Deadline**        | **Status**    |
| --------------------- | ---------------- | ------------------- | ------------- |
| Backend API Pricing Update | @SolutionsArch | 2025-08-31 | Not started |
| Frontend Template Updates | @LeadWebDev | 2025-12-31 | Not started |
| QA & UAT Compliance Check | @Legal / @QA | 2026-03-31 | Not started |
| Final Rollout (All Sites) | @ProductOps | 2026-05-31 | Not started |

---

## 🔗 Reference materials

* California SB 478 Full Text
* FTC Rule on Unfair or Deceptive Fees
* Internal Audit of current "Drip Pricing" instances

---

## ✅ Sign-Offs (if applicable)

| **Role**             | **Name**        | **Date Completed**   |
| -------------------- | --------------- | -------------------- |
| PCI-DSS Compliant    | TBD | |
| System Architecture  | TBD | |
| Legal                | TBD | |
| ADA Compliance       | TBD | |
