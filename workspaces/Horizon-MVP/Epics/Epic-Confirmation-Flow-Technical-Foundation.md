<!--
Source Initiative: workspaces/Horizon-MVP/Initiative.md
Related Docs: workspaces/Horizon-MVP/Support-Docs.md
Epic Focus: Confirmation Flow Technical Foundation
-->

# Epic Template

**Description:** Horizon / ARN MVP — implement the technical foundation for the **Confirmation** step, including retrieval of booking confirmation data from the BFF, React UI components for confirmation details and messaging, and observability for success/failure patterns, to complete the internal end-to-end booking journey.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | The platform currently lacks a Mako-based Confirmation experience for ARN bookings. Without a reusable confirmation layer, each product team risks building bespoke confirmation flows, leading to inconsistent user experiences and duplicated effort. We need a shared Confirmation foundation to support Horizon MVP and future experiences. |
| **Success Metrics** | * After a successful booking in Horizon MVP, a Confirmation page can be rendered with accurate reservation details and messaging. <br> * Confirmation success and failure events are tracked and logged for diagnostics. <br> * The Confirmation implementation is reusable and can be extended for future use cases without forking. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: ARN guest views a booking Confirmation page after completing a reservation <br> * `Given`: The user has successfully completed the Booking flow and a booking reference or identifier is available <br> * `And`: The BFF exposes an endpoint to retrieve confirmation details for that booking <br> * `When`: The user is redirected or navigates to the Confirmation page <br> * `Then`: The frontend requests confirmation details from the BFF and renders them using Mako components (for example, summary, dates, guest information, and important notices) <br> * `And`: The page clearly indicates success and provides next steps for the guest <br> * `But`: If confirmation details cannot be retrieved, the system shows a user-appropriate error state and logs the failure for investigation. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Internal POC use only; confirmation screens displayed in non-production environments for test bookings. <br> * Full Release: Out of scope; future enhancements will support customer-facing confirmations and communications. <br> * Site Hierarchy Release: Only ARN MVP siteIDs and domains are enabled initially. <br> Proposed date when the feature flag should be flipped and for whom: After Booking flow is stable in non-production POC environments. <br> Plan to remove the feature flag, if applicable: To be addressed in future production-readiness Epics. |
| **Sites Impacted:** | ARN Horizon MVP siteID(s) and domains for POC environments. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Inconsistent or delayed booking data from downstream systems may cause incomplete confirmations. Dependencies on the Booking flow and transaction systems could introduce coupling that complicates future changes. Error handling for partial confirmations (for example, booking success but downstream notification failures) needs clear patterns. |
| **Gaps:** | Final definition of what information must be displayed on the Confirmation page in MVP versus future phases. Non-functional targets (for example, time-to-display after booking and tolerance for intermittent downstream issues) are not fully defined. |
| **Assumptions:** | The Booking flow Epic successfully creates reservations and returns identifiers that can be used by this Epic. BFF and downstream systems can expose confirmation data appropriate for POC. The design system has sufficient components or patterns to represent the MVP confirmation experience. |
| **T-Shirt Size:** | S/M |
| **Cross Impacts:** | Cross-impacts with Booking, Guest Receipt, Observability and Performance, and Integrations Epics. Confirmation data structures may influence reporting and analytics expectations. |
| **Dev Complete Date:** | Target date for completing BFF and UI implementation for Confirmation flow. |
| **QA Complete Date:** | Target date for validating successful and failure confirmation paths. |
| **Feature Flag Link** | Direct link to feature flag controlling exposure of the Confirmation page. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA will validate confirmation rendering and data correctness for bookings created via the Horizon MVP flow, including tests for successful confirmations and handling of failures or delayed data. Logging and telemetry will be verified to ensure operators can diagnose issues. QA will also confirm that navigation from Booking to Confirmation behaves as expected across browsers and devices. |


