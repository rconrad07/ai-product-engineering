<!--
Source Initiative: workspaces/Horizon-MVP/Initiative.md
Related Docs: workspaces/Horizon-MVP/Support-Docs.md
Epic Focus: Search Flow Technical Foundation (Horizon/Mako)
-->

# Epic Template

**Description:** Horizon / ARN MVP — implement the technical foundation for the **Search** step of the booking funnel using the Mako framework, including BFF contracts, React search entry experience, feature flagging, and CI/CD/test scaffolding, to enable ARN to build on the shared platform without forking or duplicating components.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | The legacy v6 platform limits agile, scalable delivery for ARN, and there is currently no Mako-based search experience wired for ARN. We need a technical foundation for the Search entry point (query capture, parameter handling, and initial request to downstream systems) that is aligned with Mako/Tenzing patterns so future product features can be built without custom forks or one-off implementations. |
| **Success Metrics** | * Foundational Mako components, BFFs, and CI/CD for the Search flow are implemented and validated for ARN by the Initiative target dates. <br> * Search requests can be initiated end-to-end (from UI through BFF to downstream services) within agreed performance thresholds for the POC environment. <br> * Search entry events and errors are captured with sufficient telemetry to support debugging and future optimization. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: ARN guest initiates a property search using Horizon (Mako) <br> * `Given`: The ARN Horizon MVP application is available on the configured siteID and domain, and the user is on the Search page built with Mako and enterprise design system components <br> * `And`: The BFF is configured with endpoints for search orchestration and has network connectivity to required downstream systems <br> * `When`: The user enters valid search criteria (for example, destination, dates, occupancy) and clicks the Search button <br> * `Then`: The frontend validates required fields, constructs a request using the defined contract, and sends it to the BFF <br> * `And`: The BFF validates and forwards the request to downstream services according to the technical design <br> * `And`: A successful response returns a search token or initial payload that allows navigation to the Search Results step <br> * `But`: If the request fails due to validation or technical error, the system logs the error, returns a user-appropriate message, and does not proceed to the Search Results page. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Internal-only POC scope for ARN developers and testers; Search page available in non-production environments with feature flag enabled for a restricted audience. <br> * Full Release: Not in scope for this Epic (handled by future rollout Epics); however, technical implementation must not block expansion to broader audiences. <br> * Site Hierarchy Release: Search implementation should support configuration by siteID and domain as defined in the Initiative. <br> Proposed date when the feature flag should be flipped and for whom: Aligned to Horizon MVP POC timeline; feature flag initially enabled for ARN internal users only. <br> Plan to remove the feature flag, if applicable: Once the Search flow is stable and the broader rollout plan is defined, control may transition from feature flag to configuration-driven enablement. |
| **Sites Impacted:** | Initial: ARN Horizon MVP siteID(s) and associated domains defined in the Initiative. Future: Additional ARN and partner sites may be configured once Search flow is proven in POC, but those are outside the scope of this Epic. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Integration with legacy search backends may surface unexpected latency or schema mismatches. Platform constraints in Mako and Tenzing could require additional refactoring to support ARN-specific search parameters. If the Search API contracts are not aligned early with downstream teams, we may create rework for later flows (Search Results and Property Details). |
| **Gaps:** | Finalization of search request and response schemas with downstream systems; confirmation of all mandatory search parameters for ARN; alignment on performance baselines and acceptable error-handling patterns between product, architecture, and engineering. |
| **Assumptions:** | The Mako framework and Tenzing monorepo are stable enough for ARN integration during the MVP timeframe. ARN business requirements for search remain stable during the POC. Required downstream search services are reachable from the BFF environments used for Horizon. |
| **T-Shirt Size:** | M |
| **Cross Impacts:** | Impacts and depends on platform and Mako integration Epics, BFF and API contract Epics, and Search Results and Property Details Epics that consume the search results. May also impact observability and integrations Epics for telemetry and feature flagging. |
| **Dev Complete Date:** | Target a specific date for completing all development tasks related to the Search flow foundation (aligned with the Initiative milestone for foundational components). |
| **QA Complete Date:** | Target a specific date for completing functional, integration, and regression testing of the Search entry experience. |
| **Feature Flag Link** | Direct link to the feature flag controlling exposure of the Search page and associated backend behavior. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA will validate the Search flow across configured test environments and siteIDs. Testing will include: input validation, successful search initiation, error handling for invalid or failed requests, logging and telemetry verification, and compatibility across primary supported browsers and devices. UAT is not required for POC but may be involved informally to validate basic usability. Identify primary QA owner and any supporting engineers for test case authoring and execution. |


