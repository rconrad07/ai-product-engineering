

# Epic Template

**Description:** Horizon / ARN MVP — implement the technical foundation for the **Booking** step, including BFF booking flows, validation and error handling, React form components built on the design system, and hooks for authentication and core integrations (e.g., TCMP, feature flags), to support end-to-end internal POC booking without production rollout.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | The current v6 booking flow is tightly coupled to legacy implementations and is not aligned with the Mako-based platform. To support Horizon MVP and future ARN experiences, we need a reusable booking spine (BFF + UI) that can handle reservation creation, validation, and error handling while integrating with required services, without duplicating or forking existing frameworks. |
| **Success Metrics** | * Internal POC users can complete a booking flow end-to-end in non-production environments using the Horizon MVP stack. <br> * Booking validations and error states are handled predictably and logged for diagnostics. <br> * The Booking step uses Mako/enterprise design system components and can be extended without forking. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: ARN guest completes a booking using Horizon MVP <br> * `Given`: The user has selected a property and rate from Property Details and is eligible to book <br> * `And`: The BFF exposes booking endpoints that can create and confirm reservations for the MVP scope <br> * `When`: The user lands on the Booking page and enters required details (for example, guest information and any payment details defined for MVP) <br> * `Then`: The frontend validates inputs and submits a booking request to the BFF <br> * `And`: The BFF performs necessary validation and interacts with downstream transaction systems (for example, TCMP) <br> * `And`: On success, the BFF returns confirmation details that allow navigation to the Confirmation page <br> * `But`: On error (validation failure or downstream failure), the user sees a clear message, and the system logs details for later analysis. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Internal POC bookings in non-production environments, limited to specific test scenarios and ARNs. <br> * Full Release: Out of scope; real customer bookings and payment flows will be addressed in later work with additional controls and sign-offs. <br> * Site Hierarchy Release: Only ARN MVP siteIDs/domains will be enabled initially. <br> Proposed date when the feature flag should be flipped and for whom: After Search, Results, and Property Details flows are functionally validated for POC. <br> Plan to remove the feature flag, if applicable: Future business and technology decision; this Epic will implement feature-flag hooks but not drive removal. |
| **Sites Impacted:** | ARN Horizon MVP siteID(s)/domains for internal POC environments. No production or end-user availability is in scope. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Complexity of downstream integrations (for example, TCMP) may introduce unexpected failure modes or additional validation requirements. Booking flows often involve sensitive data and strict business rules; even in POC, misalignment can cause rework. Coupling between Booking and upstream Property Details or downstream Confirmation flows may complicate sequencing of work. |
| **Gaps:** | Exact MVP scope for payment handling versus stubbed or tokenized flows needs finalization. Error-handling patterns (for example, retries or compensation) are not yet fully defined. Non-functional requirements around performance and resilience must be clarified for POC versus future production. |
| **Assumptions:** | Authentication and SSO are available for the contexts in which booking is executed. The necessary TCMP and related transaction services can be safely exercised in non-production environments. Business rules for MVP are stable enough that technical design will not require major rework within the POC timeframe. |
| **T-Shirt Size:** | L |
| **Cross Impacts:** | Cross-impacts with Integrations (SSO and TCMP), Observability and Performance, Property Details, Confirmation, and Guest Receipt Epics. Booking changes affect analytics, reporting, and downstream customer touchpoints. |
| **Dev Complete Date:** | Target date for completing MVP booking flow implementation in BFF and UI. |
| **QA Complete Date:** | Target date for completing end-to-end booking POC testing. |
| **Feature Flag Link** | Direct link to feature flag controlling booking flow access. |


---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA will execute end-to-end booking scenarios starting from Property Details through Confirmation, covering both successful and failure paths. Tests will verify input validation, downstream error handling, logging and telemetry, and idempotency where applicable. UAT may participate in validating representative flows using non-production data, with explicit constraints documented. |


