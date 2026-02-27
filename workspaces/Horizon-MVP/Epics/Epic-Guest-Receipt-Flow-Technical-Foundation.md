<!--
Source Initiative: workspaces/Horizon-MVP/Initiative.md
Related Docs: workspaces/Horizon-MVP/Support-Docs.md
Epic Focus: Guest Receipt Flow Technical Foundation
-->

# Epic Template

**Description:** Horizon / ARN MVP — implement the technical foundation for the **Guest Receipt** experience (post-booking surfaces) using the Mako framework, including BFF contracts for receipt retrieval and React UI for displaying receipts and enabling core interactions (view, print, download) in non-production environments.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | There is no Mako-based Guest Receipt view for ARN that can be reused across experiences. Current v6 implementations are tightly coupled and difficult to evolve. We need a shared, extensible receipt experience and retrieval pattern to support Horizon MVP and future user journeys. |
| **Success Metrics** | * After a booking is completed in the Horizon MVP POC environment, an internal user can retrieve and view the associated Guest Receipt using the new stack. <br> * Receipt data is displayed accurately for supported test cases, with clear error handling when data is unavailable. <br> * The Receipt experience is implemented using Mako and enterprise design system components and can be extended or reused by future teams. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: ARN agent views a Guest Receipt for a completed booking in Horizon MVP <br> * `Given`: A booking has been successfully completed in the Horizon MVP environment and a booking identifier is available <br> * `And`: The BFF exposes an endpoint that can retrieve a structured receipt for that booking <br> * `When`: The user navigates to the Guest Receipt page or selects a “View Receipt” option <br> * `Then`: The frontend requests the receipt from the BFF and renders it using Mako components <br> * `And`: The user can view key receipt details and, if in scope for MVP, print or download the receipt <br> * `But`: If the receipt cannot be retrieved, a clear error or fallback message is shown and the system logs the issue. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Internal-only receipt viewing in non-production environments for POC bookings. <br> * Full Release: Out of scope; customer-facing receipt access and communications will be handled in later Epics. <br> * Site Hierarchy Release: Limited to ARN MVP siteIDs and domains at first. <br> Proposed date when the feature flag should be flipped and for whom: After Confirmation flow is stable and booking identifiers can be reliably used to retrieve receipts. <br> Plan to remove the feature flag, if applicable: To be defined as part of a future rollout plan. |
| **Sites Impacted:** | ARN Horizon MVP siteID(s) and domains for POC environments. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Availability of receipt data in non-production environments may be limited or inconsistent. Data privacy considerations may restrict which receipt details can be shown, even in POC. Dependencies on downstream billing or fulfillment systems could introduce instability. |
| **Gaps:** | Exact MVP scope for what must appear on a Guest Receipt screen is not fully finalized. Requirements for printing or downloading in POC versus later phases are not yet defined. Non-functional requirements (for example, retention expectations and performance) are still being refined. |
| **Assumptions:** | The Booking and Confirmation Epics provide stable identifiers and minimal necessary data that can be used to retrieve receipts. Downstream receipt data sources are accessible from the BFF in non-production environments. The design system can represent a basic receipt layout without new bespoke components. |
| **T-Shirt Size:** | S/M |
| **Cross Impacts:** | Cross-impacts with Booking, Confirmation, Integrations, and Observability and Performance Epics. Receipt patterns may inform future customer self-service journeys. |
| **Dev Complete Date:** | Target date for completing Guest Receipt retrieval and UI implementation. |
| **QA Complete Date:** | Target date for validating receipt retrieval and error handling. |
| **Feature Flag Link** | Direct link to feature flag controlling Guest Receipt access. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA will validate receipt retrieval for a set of representative POC bookings, including correct display of key fields, behavior when receipt data is unavailable, and basic printing or downloading interactions if in scope. Logs and telemetry will be reviewed to ensure sufficient signal for troubleshooting. QA will coordinate with Booking and Confirmation testing to ensure end-to-end traceability. |


