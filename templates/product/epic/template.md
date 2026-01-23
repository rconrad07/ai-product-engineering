<!--
Template Name: Epic
Source: Confluence
Owner: Product
Version: v1.0
Last Updated: 2026-01-23
-->
**Purpose:**  
Translate the initiative into **deliverable product chunks**.

**Used by agents:**

- Product Business Analyst (primary)
- Solutions Architect (conceptual dependencies)

**Agent behavior rules:**

- No story breakdown
- No task-level planning
- No estimation beyond rough scope

**Human gate:**

- Required before Epic is created in Jira

---

# AGENT OUTPUT:

**Description:** _\<brief, detailed description of the Epic - might include screenshots, graphs, attachments\>_

---

## PRODUCT SPACE

| **Item**                   | **Description** |
| -------------------------- | --------------- |
| **Problem Being Solved:** | _\< A clear explanation of the business problem or opportunity that this work addresses \>_ |
| **Success Metrics**       | * _\< Specific, measurable outcomes that define success (i.e. contributes to growth in revenue, margin, or transactions\_)_. \>_  <br> * _\< How will we know if we were successful? \>_ |
| **Specific Use Case(s):** | _\< Using the Gherkin format, document the scenario(s) as a series of steps that describe the actions and expected outcomes.\>_  <br><br> * `Given`: Sets up the initial context or preconditions for the scenario. <br> * `When`: Describes the action or event that triggers the scenario. <br> * `Then`: States the expected outcome of the scenario. <br> * `And` and `But`: Used to add additional steps or conditions, extending the `Given`, `When`, `Then` statements. |
| **Release Plan:**         | _\< Initial Release vs Full Release vs Site Hierarchy Release \>_  <br> _\< Proposed date when the feature flag should be flipped and for whom \>_  <br> _\< Plan to remove the feature flag, if applicable \>_ |
| **Sites Impacted:**       | _\< List of sites and siteIDs impacted \>_ |

---

## DELIVERY SPACE

| **Item**              | **Description** |
| --------------------- | --------------- |
| **Known Risks:**      |                 |
| **Gaps:**             |                 |
| **Assumptions:**      |                 |
| **T-Shirt Size:**     | _\< XS/S/M/L/XL - Reference:_ templates/product/sizing_guide/guide.md> |
| **Cross Impacts:**    | _\< Team or Project \>_ |
| **Dev Complete Date:**| _\< Target a specific date\>_ |
| **QA Complete Date:** | _\< Target a specific date\>_ |
| **Feature Flag Link** | _\< Direct link to the feature flag \>_ |

---

## QA SPACE

| **Item**            | **Description** |
| ------------------- | --------------- |
| **QA Testing Plan:**| _\< QA test on which site? Does UAT need to be involved in testing? Identify who is primary tester? \>_ |

---

## Template Enforcement Rules

- You must not modify template structure.
- You must not rename sections.
- If a section cannot be completed, leave it blank and explain why.
- You must not remove placeholders.
- You must respect the template version provided.
