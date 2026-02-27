<!--
Source Initiative: workspaces/Horizon-MVP/Initiative.md
Related Docs: workspaces/Horizon-MVP/Support-Docs.md
Epic Focus: Search Results Flow Technical Foundation
-->

# Epic Template

**Description:** Horizon / ARN MVP — implement the technical foundation for the **Search Results** experience using the Mako framework, including BFF contracts for result sets, frontend rendering with enterprise design system components, pagination/filtering/sorting behavior, and core observability, so future product features can iterate quickly without duplicating or forking components.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | There is no Mako-based Search Results experience wired for ARN, and existing v6 behavior is not suitable for rapid iteration or reuse. We need a technical backbone for rendering result lists (including pagination, sorting, and filtering) that aligns with Mako and Tenzing patterns and can be reused across ARN experiences without forking. |
| **Success Metrics** | * Search Results pages for the Horizon MVP can render result sets returned by the BFF within acceptable performance thresholds for the POC environment. <br> * Core interactions (paging, sorting, primary filters) function reliably and are instrumented for telemetry. <br> * The implementation uses Mako and enterprise design system components and can be extended for additional features without cloning or forking components. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: ARN guest views and navigates Search Results in Horizon (Mako) <br> * `Given`: The user has successfully initiated a search from the Horizon MVP Search page and a valid search token or request is available <br> * `And`: The BFF has endpoints for retrieving paginated search result sets based on that token or request <br> * `When`: The user lands on the Search Results page <br> * `Then`: The frontend requests the first page of results from the BFF and renders them using the configured Mako components <br> * `And`: The user can change sort order or filter criteria and the UI refreshes results accordingly <br> * `And`: Pagination controls allow navigation across pages with correct state management <br> * `But`: If any backend call fails, an appropriate error state is shown, errors are logged, and the system does not crash or navigate unexpectedly. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Internal-only POC for ARN developers and testers; Search Results page is accessible only after a successful search in non-production environments. <br> * Full Release: Out of scope for this Epic; future Epics will address broader rollout and end-user readiness. <br> * Site Hierarchy Release: Implementation must support configuration by siteID and domain but only ARN MVP siteIDs will be enabled initially. <br> Proposed date when the feature flag should be flipped and for whom: Aligned to Horizon MVP POC target dates, with feature flag enabling results view for restricted ARN users. <br> Plan to remove the feature flag, if applicable: Once the Search and Search Results user journey is stable and validated, feature flag removal or broader rollout will be planned in a later Epic. |
| **Sites Impacted:** | Primary: ARN Horizon MVP siteID(s) and domains as defined in the Initiative. Secondary: Future ARN and partner sites may reuse the implementation but are not directly in scope of this Epic. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Potential performance issues on large result sets, including slow rendering or unresponsive filtering. Backward-compatibility constraints with legacy search services may limit the richness of filtering and sorting. Misalignment between BFF contract and frontend needs could lead to rework across multiple flows (Search Results and Property Details). |
| **Gaps:** | Final definition of supported filters and sorts for MVP versus future. Confirmation of any personalization or experiment hooks required at the Results level. Agreement on fallback behavior when downstream data is incomplete or inconsistent. |
| **Assumptions:** | The Search flow Epic successfully delivers a stable search request and token or ID consumable by this Epic. Downstream search services support pagination and the required filtering and sorting semantics. Mako and enterprise design system components are sufficient to render core result tiles and cards without custom forks. |
| **T-Shirt Size:** | M |
| **Cross Impacts:** | Cross-impacts with the Search Flow, Property Details, Observability and Performance, and Design System Epics. Changes to result-set structure or filtering semantics may ripple into analytics, experiments, and downstream flows. |
| **Dev Complete Date:** | Target date for completing BFF contracts, UI implementation, and core interactions for Search Results. |
| **QA Complete Date:** | Target date for completing test coverage across pagination, filters, sorting, and error states. |
| **Feature Flag Link** | Direct link to the feature flag controlling exposure of the Search Results page. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA will validate Search Results behavior across all supported filters, sorts, and pagination paths, including edge cases such as no results, partial failures, and slow responses. Testing will cover data correctness, UI rendering, event tracking, and error handling. UAT involvement is optional for POC but can validate that core behaviors match expectations for ARN use cases. Identify primary QA owner and supporting roles. |


