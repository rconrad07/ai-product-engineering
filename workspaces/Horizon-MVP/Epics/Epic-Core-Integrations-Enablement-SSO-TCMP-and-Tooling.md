

# Epic Template

**Description:** Horizon / ARN MVP — enable **core technical integrations** required across the funnel, including authentication/SSO, TCMP connectivity for transactional flows, and hooks to approved third-party tooling (e.g., feature flags, metrics, consent), limited to technical enablement in non-production environments.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | Horizon MVP relies on key integrations (SSO, TCMP, observability tools, feature flags, and more), but these are not yet wired to the new Mako-based platform for ARN. Ad hoc or incomplete integrations would create instability and limit our ability to exercise realistic flows. |
| **Success Metrics** | * Horizon MVP environments support sign-in and authentication flows as required for POC scope. <br> * Booking-related interactions can safely call TCMP or related transactional services in non-production. <br> * Approved third-party tools (for example, feature flags, metrics, consent) are technically integrated and usable by the Horizon flows. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: An authenticated ARN user completes a Horizon MVP journey using integrated services <br> * `Given`: The user has authenticated via SSO, and an appropriate token or session is available to Horizon <br> * `And`: The BFF is configured to interact with TCMP and other required services in non-production <br> * `When`: The user completes a booking through the Horizon MVP flow <br> * `Then`: Booking-related calls to TCMP succeed in the POC environment, and relevant feature flags and telemetry are applied using the integrated tooling <br> * `But`: If an integration is unavailable, the system uses appropriate fallbacks for POC and logs errors for follow-up. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Integration enablement in non-production environments to support technical validation of Horizon MVP flows. <br> * Full Release: Future Epics will extend to production-grade integration and hardening. <br> * Site Hierarchy Release: Applies first to ARN MVP siteIDs and domains and associated authentication contexts. <br> Proposed date when the feature flag should be flipped and for whom: Integrations will be turned on as soon as flows are ready for technical end-to-end testing; specific feature flags may gate particular tools or behaviors. <br> Plan to remove the feature flag, if applicable: To be addressed during production-readiness and rollout planning. |
| **Sites Impacted:** | ARN Horizon MVP siteIDs and domains in non-production, and any environments wired for SSO and TCMP testing. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Integrations with authentication and transactional systems can be sensitive; misconfiguration may cause security or stability concerns even in non-production. Differences between non-production and production configurations may lead to surprises later. Third-party tools may have quotas, rate limits, or other constraints. |
| **Gaps:** | Exact SSO flows and user roles for POC remain to be fully detailed. TCMP and related transaction service test data and behaviors may vary by environment. The set of third-party tools to be enabled for MVP (for example, LaunchDarkly, Quantum Metrics, cookie consent) may need final confirmation. |
| **Assumptions:** | Required integration endpoints and credentials are available for non-production environments and are managed securely. Platform and security teams are engaged and supportive. Existing corporate standards for using these integrations will be followed. |
| **T-Shirt Size:** | M/L |
| **Cross Impacts:** | Cross-impacts Booking, Confirmation, Guest Receipt, Observability and Performance, and Platform Foundation Epics. Integration decisions may affect future compliance and security reviews. |
| **Dev Complete Date:** | Target date for enabling core integrations in non-production environments for Horizon MVP. |
| **QA Complete Date:** | Target date for validating integration flows (authentication, booking interactions, telemetry) across representative journeys. |
| **Feature Flag Link** | Direct links to feature flags or configuration toggles controlling integrations, where applicable. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA and engineering will validate authentication flows, booking interactions involving TCMP, and behaviors of any integrated tools (for example, that feature flags behave as expected and telemetry is captured). Non-functional aspects, such as latency or failure behaviors, will be observed and documented. Clear test data and environment usage guidelines will be defined. |


