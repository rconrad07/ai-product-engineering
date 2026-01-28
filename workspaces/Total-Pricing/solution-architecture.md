# Solution Architecture: Total Upfront Pricing

## 🏗 Overview

To comply with "Honest Pricing" laws, we must transition from a "Base + Fees" display model to a "Total Upfront" model. This requires changes across the backend pricing engine, the API layer, and the frontend web templates.

## 🛠 Backend Changes

### 1. Pricing Engine Update

- **Logic:** The pricing engine must now aggregate the base room rate with all mandatory non-tax fees (e.g., resort fees, mandatory service charges).
- **New Field:** Introduce `total_mandatory_amount` in the pricing response.
- **Formula:** `total_mandatory_amount = base_rate + SUM(mandatory_fees)`.

### 2. API Layer (GraphQL/REST)

- Update the `Search` and `PropertyDetail` schemas to include `totalMandatoryPrice`.
- Deprecate (but do not remove) only showing `basePrice` as the primary rate.
- Include a breakdown of included fees in the metadata for tooltip display.

### 3. Caching Strategy

- The price cache (e.g., Redis) must be updated to store the `total_mandatory_amount` to ensure search performance remains high.
- Cache invalidation logic must consider changes to fee structures, not just base rate changes.

## 💻 Frontend Changes

### 1. Component Library Update

- **PriceDisplay Component:** Modify to accept `totalMandatoryPrice` and `taxAmount`.
- **Primary Display:** Render `totalMandatoryPrice` in the largest font weight.
- **Sub-text:** Display "Includes fees, excludes taxes" or similar legal copy.

### 2. Funnel Pages

- **Search Results:** Card display updated to show the total price.
- **Property Details:** "Starting from" price updated.
- **Room Selection:** All room types updated to show total price per night/stay.
- **Checkout:** Final confirmation must show the same total price, with taxes clearly labeled as the only addition.

## 🔒 Security & Compliance

- Ensure that the price displayed in search is consistent throughout the session.
- Audit the "mandatory" flag in the CMS to ensure no fees are accidentally excluded.
- Ensure ADA compliance for price labels (e.g., screen readers must announce "Total Price").

## 🚦 Phase 1 Technical Roadmap

1. DB/Schema updates to support persistent fee mapping. (Q2 2025)
2. API endpoint updates for Search results. (Q3 2025)
3. Frontend rollout for California sites. (Q4 2025)
4. Full global rollout. (Q1 2026)
