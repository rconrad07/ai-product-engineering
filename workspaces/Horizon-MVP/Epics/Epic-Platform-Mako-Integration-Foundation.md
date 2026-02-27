<!--
Source Initiative: workspaces/Horizon-MVP/Initiative.md
Related Docs: workspaces/Horizon-MVP/Support-Docs.md
Epic Focus: Horizon Platform & Mako Integration Foundation
-->

# Epic Template

**Description:** Horizon / ARN MVP — establish the **platform and Mako integration foundation** for ARN, including repo structure and refactors, base BFF projects, CI/CD pipelines, unit test frameworks, and core configuration (siteID/domain, environments) so that all Horizon MVP user flows can be built without forking or copying components.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | The legacy v6 platform is not agile or scalable, and ARN currently cannot adopt Mako without risking forks or duplicated frameworks. We need a shared, well-structured platform foundation that allows ARN to build on Mako while preserving reuse and maintainability. |
| **Success Metrics** | * Foundational Mako components (repo, design library wiring, CI/CD, unit tests) are integrated and validated for ARN use by the Initiative target date (for example, 2026-02-02). <br> * ARN can begin developing user flows on top of the Mako platform without creating their own independent frameworks or copying components. <br> * Technical documentation for the platform foundation is complete and reviewed. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: An ARN engineer creates a new user-flow feature using the Horizon and Mako platform <br> * `Given`: The Horizon platform repositories (Tenzing and Mako) have been refactored for ARN extensibility without forking <br> * `And`: CI/CD pipelines and unit test frameworks are established and documented <br> * `When`: The engineer creates a new flow or component <br> * `Then`: They can follow documented patterns to create BFF endpoints, React components using the design system, and tests without modifying core framework code or duplicating components <br> * `And`: Their changes are validated via CI/CD and deployed to non-production environments using standard pipelines. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Platform foundation available in non-production environments to support Horizon MVP development and testing. <br> * Full Release: Out of scope; further hardening and production rollout will be handled in later platform Epics. <br> * Site Hierarchy Release: Initial configuration for ARN MVP siteID(s) and domains only. <br> Proposed date when the feature flag should be flipped and for whom: Not primarily feature-flag-driven; instead, platform is made available to engineering teams by agreed date. <br> Plan to remove the feature flag, if applicable: Not applicable for platform itself, but underlying capabilities must support feature-flagged user experiences. |
| **Sites Impacted:** | Primarily supports ARN Horizon MVP siteID(s) and domains; serves as the underlying platform for any future ARN and Mako sites. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | Monorepo refactors carry risk of regression for existing consumers. Misalignment on platform patterns (for example, BFF structure or deployment model) could create friction for teams adopting the platform. Insufficient documentation may make the platform difficult to use despite technical readiness. |
| **Gaps:** | Final decisions on certain repo layouts, shared library boundaries, and environment strategy may still be in progress. Tooling for local development and inner-loop productivity may need iteration beyond MVP. |
| **Assumptions:** | Tenzing and Mako architectural decisions remain stable enough to support ARN integration. Engineering teams agree to adopt shared patterns and avoid forks. CI/CD infrastructure (build agents, artifact repositories, environments) is available and supported by platform teams. |
| **T-Shirt Size:** | L |
| **Cross Impacts:** | Cross-impacts all Horizon MVP Epics (Search, Results, Property Details, Booking, Confirmation, Guest Receipt) as well as Design System, Observability and Performance, and Integrations. Platform changes may affect non-Horizon consumers if they share repos. |
| **Dev Complete Date:** | Target date for completing core platform refactors, CI/CD setup, and base BFF projects. |
| **QA Complete Date:** | Target date for validating platform readiness via smoke tests and example flows. |
| **Feature Flag Link** | If specific platform features are gated by flags, include direct links; otherwise note “N/A”. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA and engineering will validate platform readiness using representative flows (for example, a simple end-to-end path leveraging the new repos, BFF, and CI/CD). Tests will focus on build and deploy reliability, basic runtime health, and the ability for new components to be added and tested using common patterns. Any automated smoke tests or health checks will be documented and linked. |


