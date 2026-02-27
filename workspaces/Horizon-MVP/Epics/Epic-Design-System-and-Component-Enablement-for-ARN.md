<!--
Source Initiative: workspaces/Horizon-MVP/Initiative.md
Related Docs: workspaces/Horizon-MVP/Support-Docs.md
Epic Focus: Design System & Component Enablement for ARN
-->

# Epic Template

**Description:** Horizon / ARN MVP — enable ARN to build on the **enterprise design system and Mako components** without forking, including Figma library wiring, core shared React components (layout, header/footer, typography, color tokens), and documentation of usage patterns for Horizon user flows.

---

## PRODUCT SPACE

| **Item** | **Description** |
| --- | --- |
| **Problem Being Solved:** | ARN currently lacks a clear, reusable path to adopt the enterprise design system and Mako components, increasing the risk of bespoke UI implementations and divergence from brand standards. We need a well-defined set of components, tokens, and patterns that Horizon MVP can use consistently across all user flows. |
| **Success Metrics** | * Core Horizon MVP pages (Search, Results, Property Details, Booking, Confirmation, Guest Receipt) use shared design system tokens and components. <br> * ARN designers and developers can locate and use the correct Figma libraries and component documentation. <br> * No forks of core design system components are required for Horizon MVP scope. |
| **Specific Use Case(s):** | Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes. <br><br> * `Scenario`: An ARN designer and developer create a Horizon page using the shared design system <br> * `Given`: Figma libraries for the enterprise design system and Mako components are configured for Horizon <br> * `And`: Shared React components are exposed via the platform repos with documentation <br> * `When`: The designer composes a screen in Figma and the developer implements it using the documented components <br> * `Then`: The resulting UI matches design standards and reuses existing tokens and components without custom forks. |
| **Release Plan:** | Initial Release vs Full Release vs Site Hierarchy Release: <br> * Initial Release: Design system enablement for Horizon MVP flows only, wired to ARN use cases. <br> * Full Release: Future work may expand to additional brands, flows, and teams. <br> * Site Hierarchy Release: Applies to ARN MVP siteIDs and domains initially, but patterns should be generalizable. <br> Proposed date when the feature flag should be flipped and for whom: Not typically feature-flagged; instead, this Epic ensures underlying components and libraries are available by the time flows are implemented. <br> Plan to remove the feature flag, if applicable: Not applicable. |
| **Sites Impacted:** | All Horizon MVP pages for ARN siteIDs and domains, via shared UI components. |

---

## DELIVERY SPACE

| **Item** | **Description** |
| --- | --- |
| **Known Risks:** | If the design system does not fully cover ARN needs, teams may be tempted to fork or create ad hoc components. Misalignment between design and engineering on tokens or component usage may result in inconsistent experiences. Figma library misconfiguration could slow adoption. |
| **Gaps:** | Some Horizon-specific patterns (for example, certain booking widgets) may not yet exist in the design system and will need interim patterns or proposals. The process for contributing new components or patterns back into the enterprise system may require clarification. |
| **Assumptions:** | The enterprise design system and Mako components are mature enough to cover the majority of Horizon MVP requirements. Design and engineering stakeholders are aligned on using the shared system. Supporting documentation (for example, contribution and usage guidelines) is available or can be produced. |
| **T-Shirt Size:** | M |
| **Cross Impacts:** | Cross-impacts all user-flow Epics and platform foundation. Changes to tokens or components can ripple across multiple pages and teams. |
| **Dev Complete Date:** | Target date for exposing core components and tokens in code, aligned with Figma readiness. |
| **QA Complete Date:** | Target date for validating component usage across key Horizon MVP screens. |
| **Feature Flag Link** | If any component sets are gated by flags, include direct links; otherwise note “N/A”. |

---

## QA SPACE

| **Item** | **Description** |
| --- | --- |
| **QA Testing Plan:** | QA and design or UX partners will validate that pages built using the shared components match design specifications and behave consistently (including responsive behavior where applicable). Any visual regressions or accessibility issues will be logged and triaged. Testing may leverage visual regression tools as available. |


