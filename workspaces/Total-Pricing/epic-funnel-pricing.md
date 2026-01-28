# AGENT OUTPUT

**Description:** This Epic covers the end-to-end implementation of the "Total Upfront Pricing" requirement across the online booking funnel. This includes backend API enhancements to provide aggregated price data and frontend updates to search results, property details, and checkout pages to ensure transparency and legal compliance.

---

## PRODUCT SPACE

| **Item**                   | **Description** |
| -------------------------- | --------------- |
| **Problem Being Solved:** | Currently, guests are presented with a base room rate early in the funnel, only to discover mandatory fees (resort fees, booking fees) at the final checkout stage. This leads to poor guest experience and violates new "Honest Pricing" laws (e.g., California SB 478). |
| **Success Metrics**       | *100% compliance across all white-label sites by the regulatory deadline. <br>* No decrease in top-of-funnel conversion despite higher initial price points. <br> * 5-10% improvement in bottom-of-funnel conversion (Selection to Payment) due to price transparency. |
| **Specific Use Case(s):** | `Given`: A guest is searching for accommodations on a white-label site. <br> `When`: The search results are displayed. <br> `Then`: The price shown for each property includes all mandatory fees (resort, service, etc.) but excludes government taxes. <br><br> `Given`: A guest has selected a property and is viewing room options. <br> `When`: Room prices are displayed. <br> `Then`: Every room rate reflects the total mandatory cost per night or per stay. <br><br> `Given`: A guest is on the final payment page. <br> `When`: The price breakdown is shown. <br> `Then`: The total price matches the price displayed in search results, with taxes added as a separate line item. |
| **Release Plan:**         | Phase 1: Internal Beta / QA environment test. <br> Phase 2: Pilot rollout on California-based white-label sites. <br> Phase 3: Global rollout across all sites. <br> Target Full Release: 2026-05-31. |
| **Sites Impacted:**       | All White-Label OTA sites (approximately 150+ sites). |

---

## DELIVERY SPACE

| **Item**              | **Description** |
| --------------------- | --------------- |
| **Known Risks:**      | *Frontend performance lag due to more complex price aggregation. <br>* Third-party hotel providers might not provide fee data in a standard format. |
| **Gaps:**             | * Need a comprehensive list of all "mandatory" fee types currently in the CMS. |
| **Assumptions:**      | *Backend APIs can be updated to return the total mandatory price in a single field. <br>* Legal confirms that taxes remain excluded from the "upfront total". |
| **T-Shirt Size:**     | XXL (Requires 40+ hours of development plus extensive cross-team coordination). Reference: `templates/product/sizing_guide/guide.md` |
| **Cross Impacts:**    | Backend Pricing Team, Frontend Template Team, Legal, Partner Relations. |
| **Dev Complete Date:**| 2025-12-31 |
| **QA Complete Date:** | 2026-03-31 |
| **Feature Flag Link** | [TBD - Internal LaunchDarkly Link] |

---

## QA SPACE

| **Item**            | **Description** |
| ------------------- | --------------- |
| **QA Testing Plan:**| Primary testing on 'Membrio' and 'Dermal' flagship white-label sites. UAT involvement required for Legal sign-off. Primary tester: @QA_Lead. |

---

## Template Enforcement Rules

- You must not modify template structure.
- You must not rename sections.
- If a section cannot be completed, leave it blank and explain why.
- You must not remove placeholders.
- You must respect the template version provided.
