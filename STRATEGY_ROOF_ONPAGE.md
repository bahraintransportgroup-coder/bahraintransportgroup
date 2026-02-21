# BTG On-Page & Silo Strategy (Roof Protocol)

This strategy is based on the "Kyle Roof" secrets to on-page SEO excellence, focusing on structural authority and contextual density.

## 1. The Reverse Silo Architecture
*Logic: Supporting pages do the heavy lifting for money pages.*
- **Money Pages (Target Pages):**
    - `/routes/bahrain-to-dammam-taxi`
    - `/routes/bahrain-to-khobar-taxi`
    - `/routes/manama-to-riyadh-taxi`
- **Supporting Pages (Blog/Guides):**
    - Articles that answer specific long-tail questions (e.g., "Visa protocols," "Causeway fees") MUST link directly to the corresponding Money Page.
    - **Link Pattern:** Blog Article -> Money Page (Primary Link) + Blog Article A -> Blog Article B (Daisy Chain).
- **Isolation:** Supporting pages in a silo should *only* link to their target money page and other pages in the same silo. This focuses all "link juice" on the conversion target.

## 2. URL Flattening (The .COM rule)
- **Goal:** Keep target pages within 1 folder of the root domain.
- **Current:** `bahraintransportgroup.com/routes/bahrain-to-dammam-taxi` (2 folders deep).
- **Optimization:** Move pages to `app/(routes)/...` to achieve `bahraintransportgroup.com/bahrain-to-dammam-taxi`.

## 3. Contextual (LSI) Density
*Logic: AI misses these, Google needs them for context.*
- Use the **"Midpoint Zone"** (approx. 150 terms for 1,500 words).
- **Core Contextual Terms for BTG:**
    - `Verified MTT License`
    - `Cross-border logistics`
    - `Fixed-rate protocol`
    - `Customs facilitation`
    - `Professional chauffeur`
    - `Yukon/Suburban fleet`
    - `Causeway toll inclusion`
    - `24/7 dispatch center`
    - `English-speaking drivers`
    - `Vetted transit service`

## 4. EAT Tick-Boxes
- Physical address in `footer.tsx` (Building 123, Road 45, Manama).
- Links to Privacy Policy and Terms of Service (already implemented).
- Expert Bio (Zahra Al-Bahraini) integrated into blog posts to satisfy reviewer expertise models.

## 5. Reverse Word-Count Logic
- Don't just look at visible text. Ensure the HTML structure (H2s, H3s, Alt tags) is keyword-rich.
- Target word count for Money Pages: **1,650 words** (mixture of visible text and robust metadata).
