<!--
Source Initiative: workspaces/Horizon-MVP/Initiative.md
Related Docs: workspaces/Horizon-MVP/Support-Docs.md
Epic Focus: Property Details Flow Technical Foundation
-->

# Epic Template

**Description:** Horizon / ARN MVP — implement the technical foundation for the **Property Details** experience using the Mako framework, including BFF contracts for property data, availability, and pricing snippets, as well as React UI composition with design system components and instrumentation for key interactions.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | There is no reusable, Mako-based Property Details experience for ARN that surfaces consistent property information, availability, and pricing while remaining extensible. The current v6 implementation is not aligned with the future platform and is difficult to evolve without accruing technical debt. |
| **Success Metrics** | * Property Details pages in Horizon MVP can be rendered end-to-end from BFF to UI using Mako and enterprise design system components. <br> * Core content (for example, images, descriptions, amenities, and rates or availability snippets) is displayed accurately for supported test cases. <br> * Key user interactions (viewing gallery, expanding sections, navigating to booking) are instrumented for telemetry and error logging. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: ARN guest views a Property Details page and proceeds toward booking <br> * `Given`: The user has selected a property from the Search Results page in Horizon MVP <br> * `And`: The BFF exposes an endpoint that returns property details, availability indicators, and pricing snippets required for the MVP <br> * `When`: The user navigates to the Property Details page <br> * `Then`: The frontend fetches data from the BFF and renders the page using Mako components (for example, gallery, summary, amenities, and rate cards) <br> * `And`: The user can interact with key components (for example, expand sections or view more photos) without errors <br> * `And`: The user can initiate the booking flow from Property Details, passing all required context to the booking step <br> * `But`: If the BFF call fails or returns incomplete data, an appropriate error or fallback is shown, with logging for diagnostics. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Internal-only POC scope; limited set of properties, with controlled data quality, is exposed in non-production for ARN testing. <br> * Full Release: Out of scope for this Epic; additional content types and richer personalization may be added later. <br> * Site Hierarchy Release: Only ARN MVP siteIDs and domains will be configured initially. <br> Proposed date when the feature flag should be flipped and for whom: Aligned with MVP Property Details readiness (after Search and Search Results are stable). <br> Plan to remove the feature flag, if applicable: May be transitioned to a configuration toggle once the overall Horizon MVP stack is validated. |
| **Sites Impacted:** | ARN Horizon MVP siteID(s) and domains. Future expansion to additional brands or partners is outside the scope of this Epic but should be technically feasible using this foundation. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Data quality issues from upstream property content services, including missing images or inconsistent amenities. Latency or instability in availability and pricing services may affect page load performance. Dependencies on other flows (Search Results and Booking) could introduce cross-team coordination risk. |
| **Gaps:** | Final set of MVP attributes for Property Details has not been fully finalized. Edge cases for properties with limited or unusual data need definition (for example, missing images or special rate types). Performance expectations and fallback strategies are still being refined. |
| **Assumptions:** | Property content and availability services are accessible from the BFF environments used by Horizon. The Search Results Epic provides sufficient identifiers and context to retrieve property details. Design system components are adequate to represent the MVP view of property content without custom forks. |
| **T-Shirt Size:** | M |
| **Cross Impacts:** | Cross-impacts with Search Results, Booking, Design System, Observability and Performance, and Integrations Epics. Changes to property content contracts may affect downstream analytics and external integrations. |
| **Dev Complete Date:** | Target date for completing BFF contracts and UI implementation for Property Details. |
| **QA Complete Date:** | Target date for completing functional and integration testing of Property Details. |
| **Feature Flag Link** | Direct link to feature flag controlling exposure of Property Details pages. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA will validate core Property Details flows, including correct rendering for a set of representative properties, error handling when data is missing or services fail, navigation to and from Search Results, and initiation of the booking flow. Testing will also verify event tracking and logging for page views and key interactions. Primary QA owner and supporting engineers will be identified in Jira. |


