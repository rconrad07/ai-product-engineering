## 🤔 Problem Statement

- **Why This Matters**  
  - A new legal requirement mandates “total upfront pricing” for accommodation bookings to reduce price confusion and prevent customers from entering unaffordable commitments.  
  - Current pricing presentation in the booking funnel may not clearly surface all mandatory costs (e.g., taxes, fees) prior to commitment, creating a risk of non-compliance and eroding user trust.  
  - As a white label OTA booking engine used across multiple sites, inconsistent or unclear total price display at any step of the web booking journey may expose multiple partners and brands to regulatory, financial, and reputational risk.

- **Expected Impact**  
  - Clear, consistent total price visibility at all relevant points in the web booking funnel (e.g., search results, room selection, checkout) for all accommodation products.  
  - Reduced customer disputes, cancellations, and support contacts linked to unexpected charges discovered late in the flow.  
  - Improved perceived transparency of pricing by end users and partner brands, while maintaining or improving conversion through reduced last‑minute price shock.

- **Success Metrics**  
  - Reduction in customer complaints and support tickets explicitly related to “unexpected fees” or “final price different from displayed price” (baseline vs. post‑launch).  
  - Reduction in late‑stage funnel drop‑offs where a higher final price is surfaced compared with initial shown pricing (where trackable).  
  - Zero or minimized legal/non‑compliance notices directly related to price transparency for accommodation bookings after the compliance deadline.  
  - Stable or improved overall web booking conversion rate across impacted white label sites (no significant negative impact attributable to the new pricing presentation).

---

## 🥇 RICE Score

| Dimension | Score | Reasoning |
|----------|--------|-----------|
| Reach | 9 | Applies to all web accommodation bookings across all white label OTA sites, impacting a large proportion of total transaction volume. **(Inference: High reach based on “all sites are impacted” and typical OTA volume concentration in accommodation.)** |
| Impact | 10 | Directly tied to legal compliance, customer trust, and core booking revenue; failure creates significant regulatory and reputational risk, while success supports sustainable business continuity. |
| Confidence | 7 | Legal requirement is explicit and the need for change is clear, but detailed regulatory thresholds (e.g., exact fee types and display positions) are not fully described here. **(Inference: Medium‑high confidence due to clear mandate but partial information.)** |
| Effort | 6 | Requires coordinated changes across pricing calculation logic, UI presentation in multiple funnel steps, QA regression for all white label variants, and alignment with legal guidance. **(Inference: Effort score approximated without detailed system/architecture view.)** |
| **RICE Score** | **(9 × 10 × 0.7) ÷ 6 ≈ 10.5** | **(Inference: Overall prioritization score derived from inferred Reach, Impact, Confidence, Effort for comparative use.)** |

---

## 🎯 Scope Delimitation

### Is / Isn’t

| Category | Description |
|----------|-------------|
| **Is** | Ensuring that total payable price for accommodation bookings (including mandatory taxes and fees) is calculated and presented clearly during the web booking funnel. |
| **Is** | Updating web UI and pricing display components across relevant funnel steps (e.g., search results, room selection, review/checkout) for white label OTA implementations. |
| **Is** | Ensuring that price calculations and displays align with the new “total upfront pricing” legal requirement for accommodation bookings by the specified deadline. |
| **Is** | Applying consistent total price logic across all web white label sites using the shared booking engine. |
| **Isn’t** | Redesigning the overall booking funnel UX beyond what is necessary to meet total upfront pricing display requirements. |
| **Isn’t** | Changing underlying commercial agreements with suppliers, partners, or hosts (e.g., commission structures, rate plans). |
| **Isn’t** | Extending changes to non‑accommodation products (e.g., flights, car rentals) unless separately required. **(Inference: Non‑accommodation products are considered out of scope based on problem statement focus on accommodation bookings.)** |
| **Isn’t** | Implementing native mobile app changes (scope is explicitly web only). |

### Does / Doesn’t

| Category | Description |
|----------|-------------|
| **Does** | Present to customers a clearly labeled total price that includes all mandatory charges for accommodation before they commit to book. |
| **Does** | Adjust existing price calculation and aggregation logic so the total price presented matches the amount ultimately charged (excluding any optional add‑ons not selected). |
| **Does** | Standardize how total price and its components (e.g., nightly rate, taxes, mandatory fees) are surfaced in key funnel steps for web users. |
| **Does** | Support white label partners by ensuring their branded sites remain compliant without each partner needing custom pricing logic. |
| **Doesn’t** | Define or reinterpret the legal standard for “total upfront pricing”; legal interpretation remains with legal and compliance teams. |
| **Doesn’t** | Guarantee coverage of non‑mandatory or optional third‑party charges that the platform cannot technically or contractually know in advance. **(Inference: Assumes certain off‑platform or unknown fees cannot be included.)** |
| **Doesn’t** | Introduce new discounting, promotion engines, or loyalty pricing schemes beyond what is required to correctly calculate and display total price. |
| **Doesn’t** | Commit to how partners communicate their own offline or post‑stay charges (e.g., incidentals, security deposits) beyond what is surfaced in existing content fields. **(Inference: Assumes these are handled via existing content/terms rather than total price mechanics.)** |

---

## ⚽ Solution

We will introduce a **single, canonical “Total Upfront Price” concept** for accommodations and make it the primary pricing object throughout the booking funnel (search → property/detail → room selection → checkout), so that every place the guest sees a price can be traced back to the same underlying calculation rules.

Key elements:

- **Canonical pricing model across all touchpoints**  
  - Define a funnel-wide “Total Upfront Price” composed of: base room rate, mandatory fees, and mandatory taxes for the selected stay, per occupancy and stay length.  
  - Treat this as the **source of truth** for price display, eligibility, and downstream payment amounts.

- **Jurisdiction-aware pricing policies governed by Legal**  
  - Introduce a **pricing policy layer** that maps jurisdiction (guest location, property location, or legal regime as defined by Legal) to which components must be included in the total price and how they are labeled.  
  - Legal owns the rules; product & engineering implement only explicit, versioned policies.

- **Centralized pricing services and shared calculation library**  
  - Consolidate calculation logic into a single conceptual “Pricing & Fees Engine” that normalizes supplier data, applies policy, and returns a structured breakdown plus the total upfront price.  
  - All experiences (web, white‑label tenants, APIs consumed by partners) call this engine instead of computing their own totals.

- **Consistent presentation patterns in the funnel**  
  - On all funnel steps, make the **total upfront price the primary or co-primary price** (e.g., “Total for stay” plus per‑night equivalents when needed).  
  - Always show a **brief breakdown** (room + fees + taxes) and a way to expand into a detailed price sheet, avoiding surprises at checkout.

- **Alignment of total price with charged amount**  
  - Ensure that the amount sent to payments and third‑party gateways for the core booking equals the canonical Total Upfront Price (excluding only optional, unselected add‑ons).  
  - Make add‑ons explicit line items that are clearly labeled as optional and shown as incremental to the total upfront price.

- **Tenant configurability within legal constraints**  
  - Allow white‑label tenants to configure **presentation** (labels, positioning, style) and some business rules (e.g., rounding behavior, currency display), **but not** the legal core of what must be included in total price.  
  - Provide transparent documentation and changelog so tenants understand how law-driven updates affect them.

---

## 📡 Early Detection Matrix

| **Risks (Market Analyst)** | **Assumptions (Market Analyst)** |
| :--- | :--- |
| Divergent legal requirements (FTC Junk Fees Rule, California SB 478, Colorado HB25‑1090, EU Omnibus Directive) increase the risk that a single global pricing pattern leaves some booking flows non‑compliant if jurisdiction or fee‑inclusion logic is wrong. (https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions, https://oag.ca.gov/node/585017, https://leg.colorado.gov/bills/hb25-1090, https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32019L2161) | It is assumed that regulators will continue to treat OTAs and white‑label engines as “offering, displaying, or advertising” prices, so they are directly responsible for total‑price presentation alongside hotel brands. (https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions, https://oag.ca.gov/node/585017) |
| Poorly structured fee data from hotels (e.g., resort fees as generic surcharges) can prevent accurate “total price” calculation in the white‑label engine and surface as consumer complaints or regulatory scrutiny. (https://www.hospitalitynet.org/opinion/4121924.html) | It is assumed that treating taxes as a clearly labeled separate line item (while including all mandatory fees in the upfront total) will remain acceptable under FTC and California guidance. (https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions, https://oag.ca.gov/node/585017) |
| If the white‑label UI lags competitors like Expedia, Airbnb, and Booking.com on clear total‑upfront pricing, partner sites may see lower conversion and reputational damage as media and regulators normalize all‑in pricing. (https://www.expedia.com/newsroom/transparency-in-travel-pricing-a-win-for-consumers-and-a-standard-at-expedia, https://skift.com/2024/07/03/expedia-airbnb-and-booking-comply-with-california-junk-fee-law-but-in-different-ways/, https://www.usatoday.com/story/travel/news/2024/12/18/new-ban-hotel-hidden-fees/77072038007/) | It is assumed that aligning with Booking.com and Expedia’s total‑price guidance and UI behavior is a reasonable proxy for “industry standard” practice for white‑label OTAs, despite some differences in how competitors handle taxes. (https://developers.booking.com/demand/docs/compliance/ftc-compliance, https://www.expedia.com/newsroom/transparency-in-travel-pricing-a-win-for-consumers-and-a-standard-at-expedia, https://skift.com/2024/07/03/expedia-airbnb-and-booking-comply-with-california-junk-fee-law-but-in-different-ways/) |
| High consumer sensitivity to hidden fees (with ~31.5% abandoning bookings when they encounter undisclosed charges) means even small defects in fee inclusion or labeling can quickly show up as measurable funnel impact. (https://www.travelboommarketing.com/blog/the-hidden-danger-of-hidden-hotel-fees) | It is assumed that consumer preference for transparent, all‑in pricing observed in hotel‑direct surveys will generalize to white‑label OTA experiences, but this is an inference that should be validated with partner‑specific A/B tests. (https://www.travelboommarketing.com/blog/the-hidden-danger-of-hidden-hotel-fees, https://www.usatoday.com/story/travel/2015/11/02/survey-travelers-hotel-resort-mandatory-fees/74889978/) |
| Ongoing regulatory and enforcement updates (FTC guidance, state AG interpretations) may outpace static business rules, creating a risk that “compliant at launch” behavior drifts out of alignment over time. (https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions, https://oag.ca.gov/node/585017) | It is assumed that no near‑term legal carve‑outs will exempt small properties or specific lodging categories from total‑upfront pricing rules, so the engine must support compliant behavior across the full accommodation catalog. (https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions, https://leg.colorado.gov/bills/hb25-1090) |
|  | It is assumed that existing and future partner contracts will not block combining mandatory fees into headline prices on white‑label channels, though some hotels may require review or negotiation; this is an inference drawn from industry commentary. (https://www.hospitalitynet.org/opinion/4121924.html) |

| **Risks (Solutions Architect)** | **Dependencies (Solutions Architect)** |
| :--- | :--- |
| **Inconsistent use of canonical pricing**: Some frontends or partner APIs continue using legacy price fields, causing mismatched totals across funnel steps. | **Legal & Compliance**: Authoritative definition of “total upfront price” per jurisdiction, including which fees/taxes are mandatory and labeling requirements. |
| **Jurisdiction misclassification**: Incorrect mapping of bookings to legal regimes (e.g., wrong country/region logic) results in non‑compliant totals. | **Pricing & Tax Domain Teams**: Ownership of rate/fee/tax ingestion, canonical data model, and shared calculation rules. |
| **Supplier data gaps or ambiguity**: Fees and taxes from third‑party suppliers are incomplete or mis‑typed (e.g., optional vs. mandatory), leading to under- or over-inclusion in total. | **Supplier & Inventory Integrations**: Changes or contracts to ensure suppliers expose sufficient fee/tax metadata (mandatory vs optional, per stay vs per night, etc.). |
| **Performance regressions in search/room selection**: Centralized pricing calculations add latency, degrading search results load time at scale. | **Design & UX**: Unified patterns for presenting total price and breakdown across all white‑label themes and responsive layouts. |
| **Price rounding and currency edge cases**: Small discrepancies between displayed and charged amounts due to rounding or currency conversions create customer disputes. | **Payments & Billing**: Alignment so the charged amount, invoices, and confirmations all use the same total upfront price and breakdown. |
| **Inadequate tenant customization boundaries**: Tenants work around constraints (e.g., hiding disclaimers via CSS), inadvertently undermining compliance. | **Analytics & Observability**: Instrumentation for funnel metrics, pricing discrepancies, and jurisdiction-specific compliance dashboards. |

---

## 🚩 Business milestones and deadlines

| Milestone | Description | Target Date | Owner (Role) |
|----------|-------------|-------------|--------------|
| Legal requirements clarification | Consolidate and document concrete legal requirements for “total upfront pricing” by market/region and product type. | 2026-03-10 | @Legal |
| Regulatory compliance criteria sign‑off | Confirm with legal/compliance the minimum acceptable behavior and examples of compliant vs. non‑compliant pricing displays. | 2026-03-17 | @Legal, @Product |
| Current state assessment | Inventory where and how prices are currently calculated and displayed across all web booking funnel steps and white label variants. | 2026-03-24 | @Product, @EngLead |
| Functional specification completed | Document functional requirements for total price calculation and presentation, including edge cases and tracking needs. | 2026-04-01 | @Product |
| Technical design & estimation | Engineering designs changes to pricing services and UI components; estimates effort and identifies dependencies. | 2026-04-08 | @EngLead |
| Implementation phase 1 (pricing logic) | Update and integrate pricing calculation logic to support total price computation for accommodation bookings. | 2026-04-26 | @EngLead |
| Implementation phase 2 (UI & white label variations) | Update web UI components across all relevant funnel steps and white label templates to display total price. | 2026-05-07 | @EngLead |
| QA and UAT | Execute regression and scenario testing across key markets and white label sites; validate against compliance criteria. | 2026-05-17 | @QA, @Product |
| Partner review (select partners) | Provide early access or sandbox environments to selected partners for review and feedback on pricing display. | 2026-05-22 | @ProductOps, @AccountMgmt |
| Launch readiness & go/no‑go | Final review of compliance checklist, quality status, and rollback/contingency plans. | 2026-05-28 | @Product, @Legal, @EngLead |
| Web rollout completed | Roll out changes to all production web white label sites. | 2026-05-31 | @ProductOps, @EngLead |

---

## 🔗 Reference materials

- [Market Research Document](file:///c:/Users/749534/Desktop/ai-product-engineering/workspaces/Total-Upfront-Pricing/market-research.md)  
- [FTC – Junk Fees Rule press release (hotels and lodging)](https://www.ftc.gov/news-events/news/press-releases/2024/12/federal-trade-commission-announces-bipartisan-rule-banning-junk-ticket-hotel-fees)  
- [FTC – Rule on Unfair or Deceptive Fees: Business FAQ](https://www.ftc.gov/business-guidance/resources/rule-unfair-or-deceptive-fees-frequently-asked-questions)  
- [California Attorney General – SB 478 “Hidden Fees” / Honest Pricing Law guidance](https://oag.ca.gov/node/585017)  
- [Colorado HB25‑1090 – Protections Against Deceptive Pricing Practices](https://leg.colorado.gov/bills/hb25-1090)  
- [JD Supra – Colorado’s “junk fee” ban for hotels and hospitality (HB25‑1090)](https://www.jdsupra.com/legalnews/what-is-colorado-s-junk-fee-ban-1964668/)  
- [EU Omnibus Directive 2019/2161 – price transparency and unfair practices](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX:32019L2161)  
- [Expedia – Transparency in travel pricing (corporate statement)](https://www.expedia.com/newsroom/transparency-in-travel-pricing-a-win-for-consumers-and-a-standard-at-expedia)  
- [Booking.com developer docs – FTC compliance and total price display](https://developers.booking.com/demand/docs/compliance/ftc-compliance)  
- [Skift – How Expedia, Airbnb and Booking comply with California junk fee law](https://skift.com/2024/07/03/expedia-airbnb-and-booking-comply-with-california-junk-fee-law-but-in-different-ways/)  
- [TravelBoom – The hidden danger of hidden hotel fees (2023 traveler survey)](https://www.travelboommarketing.com/blog/the-hidden-danger-of-hidden-hotel-fees)  
- [USA Today – Survey and coverage on resort fee transparency](https://www.usatoday.com/story/travel/2015/11/02/survey-travelers-hotel-resort-mandatory-fees/74889978/)  
- [USA Today – New ban on hotel hidden fees (FTC rule coverage)](https://www.usatoday.com/story/travel/news/2024/12/18/new-ban-hotel-hidden-fees/77072038007/)  

---

## ✅ Sign-Offs (if applicable)

| Role | Name / Group | Date | Status |
|------|--------------|------|--------|
| Product Management | TBD | TBD | Pending |
| Legal / Compliance | TBD | TBD | Pending |
| Engineering Lead | TBD | TBD | Pending |
| QA Lead | TBD | TBD | Pending |
| Operations / Partner Management | TBD | TBD | Pending |

