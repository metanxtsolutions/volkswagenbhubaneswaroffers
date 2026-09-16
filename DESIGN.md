# Design direction

The brief: the site must read as part of the authorised Volkswagen retail
ecosystem, not as a local dealership template. This file records the direction
and the reasoning, so future changes stay consistent.

## Research

Direct page fetching of `volkswagen.co.in` is blocked in this build
environment, and browser automation hits the same tunnel. Web search is not
blocked, so the live site was researched through indexed search results:
page titles, URL architecture and indexed page summaries across the models,
offers, owners, purchase and financing, and dealer sections, plus the app
level journeys. Authorised dealer sites in India were surveyed the same way.

What that established, and what the build now follows:

**URL and content architecture** (volkswagen.co.in): `/en/models.html` with
per model pages at `/en/models/<model>.html` and separate pages for design
lines such as `virtus-chrome`. Commercial content sits under
`/en/purchase-and-financing/` (current offers, service offers, insurance,
warranty) and ownership under `/en/owners-and-services/` (Volkswagen service,
Service Value Package, 4ever Care, body and paint, Volkswagen Assistance,
mobile service unit). Editorial lives under news and updates. Transactional
journeys are separate apps: test drive scheduler, online booking, EMI
calculator, find a dealer, service product booking. Technical specifications
open as an overlay layer on the model page rather than as a separate page.

**Journeys.** Test drive: model, city, dealer, time. Online booking: model,
variant, colour, dealer, refundable token, after which a Brand Advisor
handles pricing, financing, insurance, registration and delivery. Dealer
locator: search by city, state or PIN, filtered by showroom against workshop,
each result showing address, phone, rating and directions.

**Line up and pricing** (September 2026): Taigun from about Rs 10.99 Lakh with
two TSI engines and nine colours, Virtus from about Rs 10.49 Lakh in Chrome
and Sport design lines, Tayron R-Line from about Rs 46.99 Lakh locally
assembled in 5 and 7 seat layouts, Tiguan R-Line from about Rs 47.11 Lakh, and
the Golf GTI at about Rs 50.90 Lakh as a CBU. This corrected a real error in
the earlier build, which listed a Tera that Volkswagen does not sell in India.

**Ownership programmes.** Standard warranty of 4 years or 1,00,000 km with 3
free services and 4 years of roadside assistance; Service Value Package as
prepaid maintenance protecting against labour and parts inflation; 4ever Care
for extended cover; Volkswagen Assistance and the Mobile Service Unit.

**Finance.** Funding up to 90 percent of on road price, tenures of 1 to 7
years, partner lenders including Kotak Mahindra Prime, HDFC, ICICI, Axis and
SBI, and Volkswagen Secure offering assured buy back up to 55 percent and up
to 35 percent lower EMI over 36 or 48 months.

**Brand typography.** The house faces are VW Head and VW Text, used at light
weights with tight negative tracking. They are proprietary, so this site sets
Outfit at 200 to 400 with tightened tracking to sit in the same register, and
never substitutes a lookalike as though it were the real face.

Nothing was copied: no markup, no CSS, no assets, no layouts lifted, no
marketing copy reused. The resemblance is in proportion, restraint and
information order, achieved through original implementation.

## What makes OEM sites feel official

Working from the pattern language that premium car sites share:

1. **Restraint over decoration.** Flat surfaces, hairline rules, almost no
   drop shadows. Cheap dealership sites lean on shadows, gradients on every
   card and three accent colours. OEM sites use white space as the primary
   design element.
2. **Light weight type at large sizes.** Headlines set at 300 weight and
   48px and up read as confident. Bold everywhere reads as a discount flyer.
3. **The vehicle is the hero.** Full bleed imagery, minimal text over it, the
   car never cropped awkwardly or boxed in a rounded card.
4. **One accent colour, used sparingly.** Volkswagen blue carries the brand;
   the cyan appears on links and small markers only.
5. **Calm, predictable navigation.** A thin utility bar for dealer actions,
   a clean primary nav, a persistent booking action. No mega menus stuffed
   with every page.
6. **Generous vertical rhythm.** Sections breathe at 96 to 160px of padding.
   Crowding is the single clearest signal of a cheap build.
7. **Motion that is felt, not watched.** Short, small, ease out. Content
   rises 16px and fades over 600ms once. Nothing bounces or spins.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-vw-blue` | `#001e50` | Brand, headlines, primary buttons |
| `--color-vw-cyan` | `#00b0f0` | Links, markers, focus, small accents only |
| `--color-ink` | `#0a1c33` | Body text |
| `--color-ink-soft` | `#5b6778` | Secondary text |
| `--color-hairline` | `#dfe4ec` | 1px rules and card edges |
| `--color-mist` | `#f3f5f8` | Section bands, image backdrops |

Type: **Outfit** for display (300 and 400 at large sizes, 500 for UI),
**Inter** for body and interface. Outfit is a geometric grotesque, which is
the closest freely licensable face to the Volkswagen house style. Volkswagen's
own faces are proprietary and are not used.

Scale is fluid: headlines use `clamp()` so a phone gets 32px where a desktop
gets 72px, without breakpoint jumps.

## Components

- **Buttons** are pills. Primary is solid blue, secondary is a 1px outline
  that fills on hover, tertiary is a text link with an arrow that shifts 4px
  right on hover.
- **Cards** are flat: a hairline border, a mist backdrop behind the vehicle,
  no shadow. Hover lifts the image 2 percent, not the card.
- **Sections** alternate white and mist to create rhythm without borders.
- **Reveal** wraps content in an IntersectionObserver that fades and raises it
  once. It respects `prefers-reduced-motion` and renders content visible when
  JavaScript is unavailable.

## Information architecture

The customer journey the brief asks for, in order, is: authorised dealer →
Volkswagen experience → local showroom → sales and service → easy action. The
navigation follows exactly that.

```
Models        range, then per model detail
Offers        running scheme
Test drive    the primary conversion journey
Finance       EMI calculator and the finance desk
Service       service booking, packages, what is covered
Accessories   genuine parts and accessories
Das WeltAuto  certified pre owned
Dealership    showroom and service centre, about, reviews, news
Locations     22 Odisha city pages for local SEO
Contact
```

Ad traffic keeps its own distraction free routes under `/lp/...`, noindex,
excluded from the sitemap, with AdsBot explicitly allowed in robots.txt.

## Imagery

Every vehicle slot renders official photography when a file exists in
`public/models`, and a studio treatment of the vector illustration when it does
not. The studio treatment (soft radial floor, reflection, per model paint
colour) is designed to look deliberate rather than like a missing image, but
it is a stand in. Real photography from the Volkswagen dealer asset pack is the
single biggest remaining upgrade to how premium the site feels.

## Accessibility and performance

- Every interactive element has a visible focus ring and an accessible name.
- Colour pairs meet WCAG AA against their backgrounds.
- Motion is disabled under `prefers-reduced-motion`.
- All pages are statically prerendered. Fonts are self hosted through
  `next/font` with `display: swap`, so there is no render blocking request to
  a third party.
