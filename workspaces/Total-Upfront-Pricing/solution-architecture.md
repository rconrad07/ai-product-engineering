# Solution Architecture: Total Upfront Pricing (Accommodations)

## 🏗 Overview

The objective is to ensure that guests see a **clear, consistent “Total Upfront Price”** throughout the accommodation booking funnel and that this amount **matches the core amount actually charged**, in line with new legal requirements. This architecture describes a conceptual model for how prices are computed, propagated, and displayed across white-label sites, while keeping legal interpretations centralized with the Legal function.

At a high level, we introduce:

- A **canonical pricing object** representing the Total Upfront Price for a booking context.
- A **jurisdiction-aware pricing policy layer** that decides which components are included and how they are described.
- A **central pricing service (conceptual “engine”)** that normalizes inputs, applies policies, and outputs totals and breakdowns.
- **Consistent UI and API contracts** that use the same pricing object for search results, property details, room selection, and checkout.

This model is intentionally implementation-agnostic and assumes existing rate, fee, and tax sources from suppliers and internal systems.

---

## 🧩 Pricing Inputs & Data Model (Conceptual)

### Core Pricing Inputs

Conceptually, the Total Upfront Price is derived from:

- **Stay context**
  - Check-in / check-out dates, number of nights.
  - Number of guests (adults/children) and room occupancy configuration.
  - Property identifier, room type, and rate plan.

- **Monetary components**
  - **Base room rate(s)**: Per-night or per-stay prices for each room-night.
  - **Mandatory fees**: Resort fees, cleaning fees, booking fees, and similar items that are required given the selected stay and cannot be declined.
  - **Mandatory taxes**: Taxes that must be collected by the platform, the supplier, or the property for the booking (not discretionary).
  - **Optional add-ons** (conceptually separate): Breakfast, insurance, parking, room upgrades, etc., where the guest explicitly opts in.

- **Jurisdiction and policy context**
  - Property location (country, region, city) and any special regulatory zone.
  - Guest location / point-of-sale context (e.g., market site, currency).
  - Legal policy version applicable at booking time.

### Canonical Data Model (Conceptual)

We define a conceptual **Pricing Bundle** for a booking context:

- **PricingBundle**
  - `context`: stay details, jurisdiction identifiers, currency.
  - `components[]`:
    - `type`: { base_rate, mandatory_fee, mandatory_tax, optional_addon, discount, other }.
    - `name`: human-readable label (e.g., "Room rate", "City tax").
    - `scope`: { per_night, per_stay, per_guest, per_room }.
    - `quantity`: numerical multiplier (e.g., nights, guests, rooms).
    - `amount`: monetary amount in booking currency (pre-policy).
    - `is_mandatory`: boolean based on supplier and policy.
    - `supplier_origin`: { platform, property, OTA partner, other }.
  - `policyMetadata`: identifiers for the pricing policy and legal regime used.
  - `derivedTotals`:
    - `totalUpfrontPrice`: sum of all mandated-included components.
    - `totalOptionalAddonsSelected`: sum of optional components the guest has chosen.
    - `perNightEquivalent`: (optional) derived per-night total where needed.
    - `displayBreakdown`: normalized grouped breakdown for UI (e.g., "Room", "Fees", "Taxes").

The **Total Upfront Price** is defined as `derivedTotals.totalUpfrontPrice`, computed by applying jurisdiction-specific rules to the raw `components[]`.

---

## 🔁 Funnel Touchpoints (Conceptual)

The same Pricing Bundle concept is reused at each step of the funnel, but with progressively more precise context:

1. **Search results**
   - Context: date range, occupancy, property candidates.
   - Behavior:
     - For each property/room offer, compute or retrieve a **preview** Total Upfront Price based on the currently selected filters (dates, guests).
     - Display: surface "Total for stay" as a primary figure, with a short note like "includes taxes and fees" and optional per-night breakdown.
   - Constraints: performance and result set size may require cached or approximated bundles, but the calculation rules must be the same as later steps.

2. **Property / Room details**
   - Context: specific property and room with selected dates/occupancy.
   - Behavior:
     - Recompute a detailed Pricing Bundle for the selected room/rate plan.
     - Display: highlight the Total Upfront Price, show a **clickable breakdown** revealing base rate, fees, and taxes, and confirm that this is the amount due for the selected stay (excluding optional add-ons).
   - This is where we can add explanatory text tailored by jurisdiction and site.

3. **Room selection (multi-room, rate comparisons)**
   - Context: multiple rooms or rate plans for selected dates/occupancy.
   - Behavior:
     - Each selectable room/rate line item carries its own Pricing Bundle.
     - Display: Total Upfront Price per option, consistently formatted, plus per-night or per-room labels as needed.
   - Selection updates a consolidated bundle for the whole basket (if multiple rooms).

4. **Checkout / payment**
   - Context: finalized selection of room(s), rate plan(s), and any optional add-ons.
   - Behavior:
     - Build a final consolidated Pricing Bundle for the booking, now including any selected add-ons as optional components.
     - Display:
       - **Total Upfront Price (core booking)** as a single amount that matches the charge for the non-optional portion.
       - A distinct section for **Optional Add-ons** with incremental totals.
       - Clear mapping of what is paid now vs. at property (if applicable) according to policy.
     - The amount sent to the payment system for the core booking aligns exactly to the canonical Total Upfront Price.

### Example ASCII Flow (Conceptual)

```text
[Raw Supplier Data] --> [Normalization] --> [Pricing Bundle]
                               |
                               v
                      [Policy Application]
                               |
          +--------------------+--------------------+
          v                    v                    v
   [Search Results]   [Room / Property Detail]   [Checkout]
       (preview)         (detailed view)      (final bundle)
```

---

## ⚙️ Calculation Rules & Edge Cases (Conceptual)

### Policy-Driven Inclusion Rules

The legal interpretation of what must be included in the Total Upfront Price is expressed via **policies**:

- **Inclusion rules**
  - For each policy/jurisdiction, define which `component.type` and `scope` combinations must be included in `totalUpfrontPrice`.
  - Encode distinctions such as:
    - Fees/taxes that are collected at property vs. by platform, but still must be included in displayed total.
    - Components that must be disclosed but not included in the total (e.g., fully optional extras).
- **Labeling / explanation rules**
  - Each policy defines how groups of components are labeled (e.g., "Taxes & Fees" vs. separated "Taxes" and "Fees").
  - Policies may specify mandatory disclaimers or notes (e.g., “Local tourist tax payable at property; amount included in total”).

### Variable and Conditional Fees

Some components are **dependent on conditions**:

- **Usage-based fees** (e.g., parking if used, minibar).
  - If legally required to be included, policy defines how to estimate (e.g., minimum mandatory amount) and label as an estimate.
  - Otherwise, they are disclosed separately as potential additional charges, not included in Total Upfront Price.
- **Per-guest / per-night variations**
  - Policies must define how to handle child pricing, extra beds, or guest-specific taxes.
  - The Pricing Bundle uses `scope` and `quantity` so totals are still computed correctly when occupancy or nights change.

### Currency, Rounding, and Conversion

- **Single authoritative currency for Total Upfront Price**
  - The Total Upfront Price is computed in a canonical currency (usually payment currency) and, if required, displayed in POS currency with clear labels.
- **Rounding and precision**
  - A **deterministic rounding strategy** is applied consistently across all touchpoints, so the same bundle yields the same visible numbers.
  - Policies may dictate rounding rules for specific jurisdictions (e.g., cash rounding).

### Third-Party Supplier Specifics

- **Incomplete or ambiguous metadata**
  - If a supplier does not classify a fee/tax as mandatory vs. optional, default rules are defined per supplier group and jurisdiction.
  - When ambiguity cannot be resolved while staying compliant, the system should:
    - Either **exclude** the inventory from sale in that jurisdiction; or
    - Mark it as needing manual correction/override; rules are owned by Legal/Compliance.

### Matching Displayed and Charged Amounts

- **Display-charge parity**
  - The amount charged for the core booking equals `totalUpfrontPrice`, accounting for rounding.
  - Optional add-ons selected at checkout are added on top as separate line items; they do not silently change the original Total Upfront Price but create a new **Total to be charged now** that is clearly explained.
- **Refunds and adjustments**
  - Refund calculations reference the same canonical components, so partial refunds can be computed in a way that matches how the original price was formed.

---

## 🧪 Testing & Observability (Conceptual)

### Testing Strategy

- **Unit and policy tests**
  - For each pricing policy/jurisdiction, define **canonical test scenarios** covering:
    - Different combinations of fees/taxes.
    - Property types and stay lengths.
    - Edge cases like free nights, promotions, and overlapping discounts.
  - Ensure expected Total Upfront Price and breakdown remain stable via automated tests.

- **Integration tests**
  - End-to-end tests that simulate **full funnels**:
    - Search → Detail → Room Selection → Checkout.
    - Verify that the Total Upfront Price for a given itinerary is identical (or traceably derived) across each step.
  - Test variations by jurisdiction and by supplier type.

- **Visual regression / UX tests**
  - Validate that the Total Upfront Price and breakdown are **always visible and legible** on supported devices and white-label themes.
  - Confirm that legal text and disclosures appear where required.

### Observability & Monitoring

- **Price consistency metrics**
  - Emit events when:
    - The price displayed at checkout does not match the sum of components previously shown on search/detail for the same itinerary.
    - Any recalculation leads to a change in Total Upfront Price after a given funnel step (beyond allowed variance like explicit changes to dates/occupancy).
- **Jurisdictional dashboards**
  - Track metrics like:
    - Number of bookings per jurisdiction using each policy version.
    - Incidents of policy fallback or missing data.
- **Data quality alerts**
  - Alert when:
    - Components arrive without required metadata (e.g., `type` or `is_mandatory` missing).
    - A significant percentage of inventory in a jurisdiction is excluded due to policy non-compliance (indicating upstream issues).

---

## ♿ Accessibility & Compliance Considerations

- **Price prominence and clarity**
  - Ensure the Total Upfront Price is **semantically identified** (e.g., heading or ARIA attributes) so assistive technologies can clearly announce it as “total price for stay, including taxes and fees.”
  - Avoid relying solely on color, small font sizes, or subtle styling to differentiate totals from subtotals.

- **Screen reader and keyboard navigation**
  - The price breakdown (e.g., expandable sections) must be keyboard-operable and screen-reader friendly, with clear labels (“Expand price breakdown”, “Collapse price breakdown”).
  - Reading order should prioritize the Total Upfront Price and then breakdown components.

- **Plain language and localization**
  - Labels and legal disclaimers should use **plain, localized language** tuned for each jurisdiction’s requirements, avoiding jargon such as internal fee names.
  - Ensure translated strings do not truncate or obscure critical legal information, especially on small screens.

- **Error and edge case messaging**
  - When price cannot be computed with required certainty, show explicit, accessible messages (e.g., “Price unavailable for this property at the moment”) and avoid presenting incomplete/possibly non-compliant totals.

---

## 🚧 Technical Risks & Mitigations (Conceptual)

- **Risk: Fragmented pricing logic across systems**
  - *Mitigation*: Introduce and enforce a **single conceptual Pricing Bundle and policy application layer**, deprecating legacy fields and scattered calculations via API contracts and decommission plans.

- **Risk: Performance impact on search and room selection**
  - *Mitigation*: Use **caching and precomputation** strategies that still rely on the same policy rules; design APIs to return both summary totals and on-demand detailed breakdowns to minimize recalculation.

- **Risk: Policy churn and legal change management**
  - *Mitigation*: Externalize pricing policies into a **configurable rules layer** with versioning, rollout controls, and audit trails; changes from Legal can be rolled out without code changes where possible.

- **Risk: Supplier data quality and variability**
  - *Mitigation*: Define clear **data contracts** and mapping rules per supplier; implement automated validation and fallback strategies with dashboards showing non-compliant or suppressed inventory.

- **Risk: Tenant customization undermining compliance**
  - *Mitigation*: Separate **core compliance components** (which cannot be hidden or altered) from customizable presentation elements; provide documented, supported extension points and linting/validation for tenant themes.

- **Risk: Inconsistent rollout across platforms**
  - *Mitigation*: Plan a **phased rollout** with feature flags per tenant/site, combined with observability, to detect regressions early; ensure mobile and web properties share the same conceptual pricing APIs.

