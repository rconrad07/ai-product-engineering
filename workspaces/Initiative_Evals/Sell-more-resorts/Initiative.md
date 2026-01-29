<!--
Template Name: Initiative
Source: Confluence
Owner: Product
Version: v1.0
Last Updated: 2026-01-23
-->

**Purpose:**  
Define the _why_, _what_, and _success criteria_.

**Used by agents:**

- Product Business Analyst (primary)
- Market Analyst (optional)
- Solutions Architect (constraints only)

**Agent behavior rules:**

- Fill sections verbatim
- If assumptions are made, explicitly identify them as such
- Add open questions explicitly

**Human gate:**

- Required before publishing
- If you are unable to respond to a section, flag it for human intervention (fill it out now or skip)
- Required before Epic creation

---

# AGENT OUTPUT

## 🤔 Problem Statement

1. **Why This Matters:**
   - **The Margin Opportunity Gap:** While All-Inclusive (AI) inventory (primarily Wyndham-owned) offers significantly higher margins compared to standard room-only stays, it remains under-utilized within our legacy booking ecosystem. Currently, AI inventory is treated as a secondary filter rather than a primary strategic product. The 2026 goal is to pivot from "offering AI" to "selling AI" across all white-label brand sites.
   - **Legacy Friction:** Our Smalltalk v1 engine’s reliance on deep class inheritance for white-label styling makes it difficult to deploy specialized AI marketing features (like "All-Inclusive Features" icons or bundled pricing displays) without causing regression issues across disparate brand sites. This creates a bottleneck in our ability to compete with modern platforms from Hilton and Hyatt.

2. **Expected Impact:**
   - **Gross Margin Capture:** Shift from lower-margin economy stays to high-value AI resort stays, directly increasing Average Booking Value (ABV).
   - **Strategic Inventory Dominance:** Maximize utilization of Wyndham-owned AI stock before relying on third-party aggregators.

3. **Success Metrics:**
   - **AI Sales Growth:** 15% year-over-year increase in All-Inclusive room nights sold across all platforms.
   - **Margin Contribution:** 10% increase in total net margin attributed to the "Resort & AI" category.
   - **Funnel Efficiency:** 8% improvement in the search-to-book conversion rate for users who apply an "All-Inclusive" filter.
   - **Cross-Brand Penetration:** 20% of AI bookings originating from non-resort branded white-label sites.

---

## 🥇 RICE Score

<https://wyndhamexchangeandrentals.atlassian.net/wiki/spaces/DTS/pages/5374476379>

| **Category**   | **Score** | **Reasoning** |
| :--- | :--- | :--- |
| **Reach**      | 8.5       | Impacts all traffic across our white-label portfolio and brand sites. |
| **Impact**     | 4.0       | Massive impact on margin; aligns with the #1 corporate strategic goal for 2026. |
| **Confidence** | 0.6       | Strategy is still undefined; technical constraints of Smalltalk v1 carry significant risk. |
| **Effort**     | 9.0       | High; legacy refactoring and inheritance management is labor-intensive and manual. |

**Overall RICE Score: 2.27** [(8.5 *4.0* 0.6) / 9.0]

---

## 🎯 Scope Delimitation

| **Is** | **Isn’t** |
| :--- | :--- |
| Wyndham-owned All-Inclusive inventory optimization. | Third-party or partner-sourced AI inventory. |
| Multi-brand marketing injection via legacy inheritance. | Creation of a new native mobile application. |
| Enhancing the web-only booking funnel for AI properties. | A multi-year codebase migration away from Smalltalk. |

| **Does** | **Doesn’t** |
| :--- | :--- |
| Prioritize AI inventory in search ranking algorithms. | Support native mobile booking (Web/Mobile Web only). |
| Implement brand-specific styling for AI modules. | Replace the core Smalltalk v1 booking logic. |
| Track margin-per-click for AI-specific search results. | Modify the underlying data structure of Wyndham resort feeds. |

---

## ⚽ Solution

### Option 1: Inheritance Injection (Low Effort, High Technical Debt)

- **Description**: Utilize the existing Smalltalk `WhiteLabelSite` inheritance hierarchy to add a specialized `InclusiveResortModule`. Styles and logic are "trickled down" to brand sites.
- **Analysis**: Risky. Competitor analysis (Hyatt, Marriott) shows they prefer centralized API feeds to avoid "logic bleeding." Smalltalk v1 may face performance hits when calculating complex AI bundles during inheritance lookups.

### Option 2: Headless AI Micro-Funnel (Medium Effort, High Value)

- **Description**: Intercept the search results page via a lightweight JavaScript proxy. For AI properties, redirect the user to a modern, React-based "AI Discovery" page that communicates with the Smalltalk backend via a minimal API shim.
- **Analysis**: Allows for modern UX (like Hilton’s digital-first experience) without a full system rewrite. Solves the web-only constraint with a mobile-responsive "wrapper" approach.

### Option 3: Logic Shadowing (High Effort, High Stability)

- **Description**: Duplicate the booking logic for AI inventory into a parallel "High Margin" class structure within Smalltalk to avoid touching standard room logic.
- **Analysis**: Best for stability but doubles maintenance costs. Rejected unless the inheritance chain is too fragile to support new methods.

---

## 📡 Early Detection Matrix

| **Risks** | **Assumptions** |
| :--- | :--- |
| **Inheritance Fragility:** Modification to the base AI class may unintentionally alter styling for non-AI boutique brands. | **Web Dominance:** User base continues to prefer web/mobile web over the absence of a mobile app. |
| **Talent Scarcity:** Limited pool of Smalltalk v1 experts to execute the 2026 strategy. | **Wyndham Control:** Wyndham owns sufficient inventory to meet goals without third-party reliance. |

| **Issues** | **Dependencies** |
| :--- | :--- |
| **SEO cannibalization:** How to market AI across brands without diluting brand-specific SEO. | **Inventory API:** Availability of a performant API to feed the discovery logic. |
| **Conversion friction:** Web-only experience may result in higher drop-off compared to Hyatt's "Inclusive Collection" app. | **Legal Compliance:** ADA and PCI compliance during any Smalltalk refactoring. |

| **Questions** |
| :--- |
| **Q1:** What are the specific margin percentages targeted for AI vs. the current 5.2% baseline for standard rooms? |
| **Q2:** Does "Selling across various brands" include white-label partners who do not carry the Wyndham name? |
| **Q3:** Is there a technical blocker preventing a RESTful API layer from being placed in front of the Smalltalk engine? |

---

## 🚩 Business milestones and deadlines

| **Milestone** | **Owner** | **Deadline** | **Status** |
| :--- | :--- | :--- | :--- |
| Strategic AI Target Defined | @Product-Lead | // 2026-03-31 | Not started |
| Technical Feasibility Study (Smalltalk) | @Sys-Arch | // 2026-04-30 | Not started |
| MVP Pilot (1 Brand Site) | @Product-BA | // 2026-08-31 | Not started |
| Full Scale Rollout | @Delivery-Lead | // 2026-11-30 | Not started |

---

## 🔗 Reference materials

- **Marriott All-Inclusive Platform**: [lodgingmagazine.com](https://lodgingmagazine.com/marriott-international-expands-all-inclusive-platform/) - Comparison of brand-specific AI strategies.
- **Hyatt Inclusive Collection**: [hyatt.com](https://www.hyatt.com/en-US/promo/inclusive-collection) - Benchmark for high-end resort discovery apps.
- **Wyndham Technical Debt Post-Spin-off**: [oreateai.com](https://oreateai.com/wyndham-hotels-resorts-digital-transformation/) - Context on the 26-year-old data center challenges and SaaS migration.

---

## ✅ Sign-Offs (if applicable)

| **Role**             | **Name**        | **Date Completed**   |
| -------------------- | --------------- | -------------------- |
| PCI-DSS Compliant    | _< @ a name >_  |                      |
| System Architecture  | _< @ a name >_  |                      |
| Legal                | _< @ a name >_  |                      |
| ADA Compliance       | _< @ a name >_  |                      |
