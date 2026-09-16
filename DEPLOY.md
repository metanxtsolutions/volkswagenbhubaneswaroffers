# Deploying to Vercel

The repository is deploy ready. Nothing needs to change in the code: Vercel
detects Next.js, runs `next build` and serves the 53 prerendered pages from
its edge network, with the lead API running as a serverless function.

## First deploy

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with the GitHub
   account that owns this repository.
2. Pick **metanxtsolutions/volkswagenbhubaneswaroffers** and click Import.
3. Leave every build setting as detected. Framework should read "Next.js",
   build command `next build`, output directory `.next`.
4. Add the environment variables below. They can also be added later.
5. Click Deploy. The first build takes two to three minutes and ends with a
   live `.vercel.app` URL.

## Environment variables

Add these under Project Settings, Environment Variables, for the Production,
Preview and Development environments.

| Variable | Value | Needed |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://volkswagenbhubaneswaroffers.in` | Yes, canonical tags and the sitemap use it |
| `LEAD_WEBHOOK_URL` | Your CRM, Zapier, Make or Google Apps Script endpoint | Strongly recommended, otherwise leads only reach the logs |
| `LEAD_WEBHOOK_TOKEN` | A shared secret of your choosing | Optional |
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | For Google Analytics |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | `AW-XXXXXXXXX` | For Google Ads conversion tracking |
| `NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL` | The conversion label | For Google Ads conversion tracking |
| `NEXT_PUBLIC_META_PIXEL_ID` | Your pixel ID | Only if running Meta ads |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console token | Only if verifying by meta tag |

Anything starting with `NEXT_PUBLIC_` is baked in at build time, so redeploy
after changing one. `LEAD_WEBHOOK_URL` is read at request time and takes effect
immediately.

## Connecting the domain

1. Project Settings, Domains, add `volkswagenbhubaneswaroffers.in` and
   `www.volkswagenbhubaneswaroffers.in`.
2. Vercel shows the DNS records to create at your registrar. Usually an `A`
   record for the apex pointing at `76.76.21.21` and a `CNAME` for `www`
   pointing at `cname.vercel-dns.com`. Use whatever the dashboard shows, since
   these values do change.
3. Pick one as primary and let Vercel redirect the other. Serving both without
   a redirect splits your SEO signals.
4. HTTPS is issued automatically once DNS resolves, normally within minutes.

## Production branch

Vercel deploys the repository's default branch to production. The default is
currently `claude/volkswagen-bhubaneswar-site-eu09y8`. Either switch the
default to `main` on GitHub (Settings, General) and merge the outstanding work
into it, or set the production branch explicitly under Project Settings, Git.

Every other branch and pull request gets its own preview URL automatically.

## Recommended settings

- **Function region**: Project Settings, Functions, set to Mumbai (`bom1`).
  The lead API then runs close to your customers instead of in the United
  States. The pages themselves are static and already served from the edge.
- **Deployment protection**: leave off for production, otherwise Google Ads
  cannot crawl the landing pages.

## After the first deploy

- Check `https://your-domain/sitemap.xml` and `robots.txt` resolve.
- Submit the sitemap in Google Search Console.
- Send one test lead through a form and confirm it reaches your webhook. If no
  webhook is set yet, it appears in the Vercel function logs as `NEW_LEAD`.
- Verify the Google Ads conversion fires using Google Tag Assistant.
- Run the live URL through PageSpeed Insights.

## Redeploying

Every push to the production branch triggers a deploy. To update the monthly
offer figures, edit `src/data/offers.ts` and the `offer` line on each model in
`src/data/models.ts`, commit and push. Vercel rebuilds and all 53 pages pick up
the change.
