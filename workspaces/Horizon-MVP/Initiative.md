# Initiative Doc v2 - Project Horizon

## 🤔 Problem Statement

1. **Why This Matters:**
   The legacy v6 platform is not agile or scalable, limiting the ability to deliver new features rapidly and reliably for the ARN business. Modernization is required to enable rapid, reliable development and to avoid duplicating or forking existing frameworks, which would increase technical debt.

2. **Expected Impact:**
   Establishes technical readiness for ARN to leverage the Mako framework, enabling faster, more scalable development for future user-facing features. Reduces technical debt, accelerates time-to-market, and lays the groundwork for future enhancements.

3. **Success Metrics:**
   * All foundational Mako components (repo, design library, CI/CD, unit tests) are integrated and validated for ARN use no later than 2026-02-02.
   * ARN can begin developing using the Mako platform without generating their own components.
   * Technical documentation is complete and reviewed.
   * Unit tests cover 90%+ of the codebase.

---

## 🥇 RICE Score

| **Category**  | **Score** | **Reasoning**                                               |
| ------------- | --------- | ----------------------------------------------------------- |
| **Reach**     | 8         | Impacts all ARN developers and future user-facing features.|
| **Impact**    | 7         | Enables scalable, rapid development and reduces technical debt. |
| **Confidence**| 0.8       | Based on proven frameworks and clear technical objectives.  |
| **Effort**    | 5         | Medium effort for foundational setup and integration.       |

**Overall RICE Score:** `8.96` (Reach × Impact × Confidence ÷ Effort)

---

## 🎯 Scope Delimitation

### What This **Is**

| **Is**                                                                 | **Isn’t**                                   |
| ---------------------------------------------------------------------- | ------------------------------------------- |
| Refactoring Mako/Tenzing repos for extensibility                       | Delivering a production-ready solution      |
| Establishing BFF layer, React front end, and CI/CD                     | Supporting business requirements changes during POC |
| Using enterprise design system and RCI/Mako components                 | End-user availability or production deployment |
| Supporting Search > Search Results > Property Details > Book > Confirmation > Guest Receipt pages |                                             |

### What This **Does / Doesn’t** Do

| **Does**                                      | **Doesn’t**                                  |
| --------------------------------------------- | -------------------------------------------- |
| Enables ARN to build on Mako without forking  | Release to end users                         |
| Provides technical onboarding and documentation | Include UAT or business sign-off for POC   |

---

## ⚽ Solution

* Refactor Mako/Tenzing repos to be extensible for ARN without forking or copying components.
* Implement a BFF layer for aggregation (ties Trip to SmallTalk).
* Use a React front end and allow some customization via inheritance (colors, header/footer).
* Leverage RCI Phase 2 and Mako components, and the enterprise design system.
* Support key user flows: **Search → Search Results → Property Details → Book → Confirmation → Guest Receipt**.
* Establish SiteID and domain with human-readable URLs.
* Set up Figma Design Library, CI/CD pipeline, and unit testing.
* Deliver technical documentation.
* POC is internal only, not available to end users.

---

## 📡 Early Detection Matrix

### Risks & Assumptions

| **Risks**                                        | **Assumptions**                               |
| ------------------------------------------------ | --------------------------------------------- |
| Integration challenges with legacy systems       | ARN business requirements will not change during POC |
| Incomplete documentation                         | Mako framework is stable                      |
| CI/CD pipeline misconfiguration                  |                                               |
| Resourcing constraints                           |                                               |
| Tech debt if Mako is forked or copied           |                                               |

### Issues & Dependencies

| **Issues**                                                          | **Dependencies**                                                    |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Potential gaps in design library coverage for ARN-specific needs    | Tenzing monorepo, Mako framework, Figma Design Library, CI/CD tools |

### Questions

| **Questions**                                                                 |
| ----------------------------------------------------------------------------- |
| Are there any ARN-specific requirements not covered by the current design system? |
| What is the process for onboarding new developers to the Mako framework?     |

---

## 🚩 Business milestones and deadlines

| **Milestone**                                                   | **Owner** | **Deadline** | **Status**     |
| ----------------------------------------------------------------| --------- | ------------ | -------------- |
| Foundational Mako components integrated and validated for ARN   | [Ryan Conrad](https://wyndhamexchangeandrentals.atlassian.net/people/712020:b43f586c-2887-4df5-8cbf-49ba93781938) | 2026-02-02 | Not started   |
| Technical documentation delivered                               | [Ryan Conrad](https://wyndhamexchangeandrentals.atlassian.net/people/712020:b43f586c-2887-4df5-8cbf-49ba93781938) | 2026-03-31 | Not started   |
| POC completion                                                  | Project Horizon | Q1 2026   | Not started   |

---

## 🔗 Reference materials

* Jira Epic: https://wyndhamexchangeandrentals.atlassian.net/browse/TNLB-42

---

## ✅ Sign-Offs (if applicable)

| **Role**             | **Name** | **Date Completed** |
| -------------------- | -------- | ------------------ |
| PCI-DSS Compliant    |          |                    |
| System Architecture  |          |                    |
| Legal                |          |                    |
| ADA Compliance       |          |                    |