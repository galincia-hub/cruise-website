# Phase 0 scaffold notes

- Date: 2026-09-10
- Branch intent: general cruise backbone (not luxury-only), two seed voyages only
- SSOT: `docs/overview/cruise-ai-system.md`, ADR 0001–0003, `docs/library/` as selective reference

## What changed

### IA / copy

- Site tagline and hero no longer assume luxury-only. Framing is **일반 항해 + 럭셔리**.
- GNB starts with **항해** (`/voyages/`). Footer columns are 항해 / 선사 / 고객 지원 (not “울트라 럭셔리” as the IA).
- Home, about, blog, contact, and bottom CTA copy updated to allow Singapore / mass itineraries.
- New listing page: `voyages/index.html` (collection-driven).

### Seed products (2 only)

1. **RSSC / Regent luxury** — `_voyages/regent-med-2026-06.md`  
   Seven Seas Splendor, Athens → Rome style 10-night stub. `stub: true`, `price_display: 상담 문의`, GSA rates not published.
2. **Singapore-region general** — `_voyages/singapore-straits-2026-11.md`  
   Spectrum of the Seas, Singapore Straits 5-night stub. No locked prices. Does **not** claim GSA.

Cross-links only these two live voyage URLs. Extra invented “similar sailing” cards were removed from the Regent seed.

### Cruiselines

- Regent (`_cruiselines/regent.md`) remains the RSSC entry; recommended product now points at the luxury seed.
- Added lightweight **로열캐리비안** stub (`_cruiselines/royalcaribbean.md` + `_data/cruiselines.yml` tier `일반`) so the Singapore voyage has a parent page.

### Voyage-detail UX (cheap only)

- Sticky section nav (`_includes/sticky-nav.html`) + scroll spy in `assets/js/main.js`.
- Enquiry / phone CTA placeholders on hero, details, and a fixed bottom bar. Kakao URL still `#` / disabled.
- Luxury-only hardcoded cabin/inclusion copy in `_layouts/product.html` is now front-matter driven.
- Contact form submit is disabled (no Formspree / Supabase).
- CSS **tokens in `:root` were not changed.** New rules were appended only.

### Docs / build hygiene

- `_site/` stays in `.gitignore`.
- `docs` and `site_data` stay in `_config.yml` `exclude`.
- This file is the Phase 0 handoff note.

## Still gated (do not treat as decided)

| Gate | Status |
|------|--------|
| Color / brand palette | Open (ADR 0001 / 0002). Existing navy+orange tokens kept as-is. |
| Inquiry backend | Open. Phone CTA only. Form is a placeholder. |
| Consultants | Open (hide / placeholder / real names). Home + Regent still show prior placeholder names. Singapore seed has none. |
| Kakao channel URL | Open (`@cruiseinternational` was a prototype candidate only). |
| MD → `_voyages` daily bridge | Open (Phase 3). |
| Full voyage-detail (cabin/port modals, date table, deckplans) | Phase 1+. |
| Offers, Journey Finder, JSON-LD, CRM, ops, MNC/referral | Out of Phase 0. |

## Test notes

```bash
bundle install
bundle exec jekyll build
```

Confirm `_site/` is generated locally and remains untracked. `docs/` must not appear as site routes.
