# volkswagenbhubaneswaroffers.in

Lead generation website for Volkswagen sales in Bhubaneswar and across Odisha.
Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

The site has two jobs:

1. **Paid traffic.** Distraction free landing pages under `/lp/...` built for
   Google Ads and Meta Ads. No navigation, one goal, form above the fold.
2. **Organic traffic.** SEO pages for Bhubaneswar and 21 other Odisha towns,
   plus model, price, offer and finance pages.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you have
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
npm run typecheck            # TypeScript only, no emit
```

## Deploying to Vercel

1. Import the GitHub repository in Vercel. The framework is detected
   automatically, no build settings to change.
2. Add the environment variables from `.env.example` in
   Project Settings, Environment Variables.
3. Add `volkswagenbhubaneswaroffers.in` and `www.volkswagenbhubaneswaroffers.in`
   as domains and point the DNS records Vercel shows you.
4. Redeploy after adding the variables so the analytics tags are picked up.

For faster response times in India, set the function region to Mumbai (`bom1`)
under Project Settings, Functions.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, structured data |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads conversion account, `AW-XXXXXXXXX` |
| `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` | Conversion label for the lead action |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel, optional |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console verification, optional |
| `LEAD_WEBHOOK_URL` | Server side endpoint that receives each lead as JSON |
| `LEAD_WEBHOOK_TOKEN` | Optional shared secret sent as `x-webhook-token` |

Tracking scripts only load when the matching variable is set, so local and
preview builds stay clean.

## Where the content lives

Everything editable sits in `src/data`, so copy changes do not need component
edits.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Phone, WhatsApp, email, address, map pin, opening hours |
| `src/data/models.ts` | Model lineup, prices, specs, colours, variants, copy |
| `src/data/cities.ts` | Odisha towns, each one becomes an SEO page |
| `src/data/offers.ts` | This month's scheme and the reasons to buy from us |
| `src/data/campaigns.ts` | Ad landing pages under `/lp/...` |
| `src/data/faqs.ts` | FAQ content, including the per city and per model generators |
| `src/data/testimonials.ts` | Customer reviews |

## Page map

| Route | Purpose |
| --- | --- |
| `/` | Main SEO landing page |
| `/offers` | Running scheme and how buying works |
| `/models` and `/models/[slug]` | Model price and specification pages |
| `/volkswagen-showroom` and `/volkswagen-showroom/[city]` | 22 Odisha city pages |
| `/on-road-price-bhubaneswar` | On road price breakdown |
| `/car-loan-emi-calculator` | Interactive EMI calculator |
| `/book-test-drive` | Test drive booking, accepts `?model=<slug>` |
| `/contact`, `/about`, `/privacy-policy`, `/terms` | Supporting pages |
| `/thank-you` | Post submit page, noindex |
| `/lp/[campaign]` | Ad landing pages, noindex |
| `/api/lead` | Lead handler |

## Ad landing pages

Live campaign URLs:

- `/lp/volkswagen-offers` generic offer campaign
- `/lp/tera`, `/lp/taigun`, `/lp/virtus`, `/lp/tiguan`, `/lp/golf-gti`
- `/lp/test-drive` test drive campaign

They are `noindex` and excluded from the sitemap so they never compete with the
SEO pages for the same keywords. `robots.txt` blocks them for normal crawlers
but explicitly allows `AdsBot-Google`, so Google Ads can still crawl the
destination and approve the ad.

Add UTM parameters in the ad, for example:

```
https://volkswagenbhubaneswaroffers.in/lp/taigun?utm_source=google&utm_medium=cpc&utm_campaign=taigun-bbsr
```

To add a campaign, append an entry to `src/data/campaigns.ts`. The page, its
metadata and its static route are generated from that entry.

## How leads are handled

`POST /api/lead` validates the name and the 10 digit Indian mobile number,
drops honeypot submissions, throttles repeat posts, forwards the lead to
`LEAD_WEBHOOK_URL` when it is set, and always writes a `NEW_LEAD` line to the
server log so nothing is lost while the CRM is being connected.

Any endpoint that accepts a JSON POST works: a Google Apps Script web app
writing to a Sheet, Zapier, Make, n8n or your own CRM.

On success the form fires `generate_lead` for GA4, the Google Ads conversion
when the ads variables are set, and `Lead` for the Meta Pixel.

## Before going live

- [ ] Replace every `PLACEHOLDER` in `src/data/site.ts` with the real phone,
      WhatsApp number, email, address, PIN code and map coordinates.
- [ ] Confirm the model prices and the offer amounts in `src/data/models.ts`
      and `src/data/offers.ts` against the current dealership scheme.
- [ ] Replace the sample reviews in `src/data/testimonials.ts` with real,
      permission based customer feedback.
- [ ] Add official vehicle photography. Drop the files into `public/models`
      named after each model slug and they are used automatically. See
      `docs/vehicle-images.md`.
- [ ] Set `LEAD_WEBHOOK_URL` and test one lead end to end.
- [ ] Add GA4, Google Ads and Search Console variables, then verify the
      conversion fires with Google Tag Assistant.
- [ ] Submit `https://volkswagenbhubaneswaroffers.in/sitemap.xml` in Search
      Console and create the Google Business Profile listing.
- [ ] Have the dealership confirm the trademark disclaimer wording in the
      footer and in `/terms`.

## Vehicle photography

Official images go in `public/models`, named after the model slug, for example
`public/models/volkswagen-taigun.webp`. The site detects them at build time and
switches that model from the vector illustration to an optimised `next/image`
with AVIF and WebP variants. Models without a file keep the illustration, so
the set can be filled in one model at a time. Full notes are in
`docs/vehicle-images.md`.

## Refreshing the monthly scheme

Update `src/data/offers.ts` and the `offer` line on each model in
`src/data/models.ts` at the start of every month, then push. Vercel rebuilds
and every page that shows an offer, including all 22 city pages, updates with
it.
