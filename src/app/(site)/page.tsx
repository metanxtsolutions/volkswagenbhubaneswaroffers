import Link from "next/link";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import CityGrid from "@/components/CityGrid";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ModelCard from "@/components/ModelCard";
import ModelVisual from "@/components/ModelVisual";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { articles, formatArticleDate } from "@/data/news";
import { cities } from "@/data/cities";
import { generalFaqs } from "@/data/faqs";
import { modelBySlug, models } from "@/data/models";
import { offers } from "@/data/offers";
import { warrantyHeadline } from "@/data/ownership";
import { locations, site, telHref, whatsappHref } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Bhubaneswar | Authorised Dealer, Showroom and Service",
  description:
    "Authorised Volkswagen dealer in Bhubaneswar. Explore the Taigun, Virtus, Tayron R-Line, Tiguan R-Line and Golf GTI, book a free test drive, check offers and EMI, and service your Volkswagen across Odisha.",
  path: "/",
  keywords: [
    "volkswagen bhubaneswar",
    "authorised volkswagen dealer bhubaneswar",
    "volkswagen showroom odisha",
    "volkswagen taigun price bhubaneswar",
    "volkswagen virtus on road price odisha",
    "volkswagen service centre bhubaneswar",
  ],
});

const quickActions = [
  { label: "Book a test drive", href: "/book-test-drive" },
  { label: "Current offers", href: "/offers" },
  { label: "Calculate EMI", href: "/finance" },
  { label: "Book a service", href: "/service" },
];

const hero = modelBySlug("volkswagen-taigun") ?? models[0];
const spotlight = modelBySlug("volkswagen-tayron-r-line") ?? models[2];

export default function HomePage() {
  const latest = articles.slice(0, 3);

  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />

      {/* Hero: the vehicle carries the page, text stays out of its way */}
      <section className="stage-dark relative overflow-hidden text-white">
        <div className="shell relative grid items-center gap-12 pb-0 pt-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:pt-20">
          <Reveal className="relative z-10 pb-12 lg:pb-28">
            <p className="kicker-light">Authorised Volkswagen dealer, Bhubaneswar</p>
            <h1 className="mt-6 text-display font-extralight text-white">
              German engineering,
              <br />
              delivered across Odisha.
            </h1>
            <p className="mt-7 max-w-xl text-lead font-light text-white/70">
              Sales at Pahal, service at Bhanpur, and a free test drive brought to your door. Explore the full
              Volkswagen range with transparent on road pricing and finance arranged in house.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/book-test-drive" size="lg">
                Book a test drive
              </Button>
              <Button href="/models" variant="light" size="lg">
                Explore the range
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-white/50">Warranty</dt>
                <dd className="mt-2 font-display text-xl font-light">{warrantyHeadline.years}</dd>
                <dd className="text-xs text-white/50">or {warrantyHeadline.distance}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-white/50">Free services</dt>
                <dd className="mt-2 font-display text-xl font-light">3</dd>
                <dd className="text-xs text-white/50">with roadside cover</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-white/50">We deliver to</dt>
                <dd className="mt-2 font-display text-xl font-light">{cities.length}</dd>
                <dd className="text-xs text-white/50">Odisha towns</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120} className="relative lg:pb-16">
            {/* Vehicle slot, 16:9. Official photography drops in here. */}
            <ModelVisual
              model={hero}
              priority
              reflection
              sizes="(max-width: 1024px) 92vw, 640px"
              className="aspect-[16/9] w-full"
            />
            <p className="mt-2 text-center text-xs text-white/45 lg:text-right">
              {hero.fullName} | from {hero.priceFrom} ex showroom
            </p>
          </Reveal>
        </div>

        {/* Quick actions, the dealer utility row */}
        <div className="relative z-10 border-t border-white/15 bg-white/[0.04] backdrop-blur-sm">
          <div className="shell grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group flex items-center justify-between gap-3 px-2 py-5 text-sm text-white/80 transition-colors first:pl-0 hover:text-white lg:px-6"
              >
                {action.label}
                <Arrow className="shrink-0 text-vw-cyan transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The range */}
      <section className="band">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              kicker="The range"
              title="Five ways into a Volkswagen"
              lead="Every model sold here runs a turbocharged TSI petrol engine and is built on a body shell engineered for crash protection. Prices are indicative ex showroom figures for Bhubaneswar."
            />
            <Reveal>
              <Link href="/models" className="arrow-link text-sm">
                Compare all models <Arrow />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {models.map((model, index) => (
              <Reveal key={model.slug} delay={index * 70}>
                <ModelCard model={model} priority={index < 2} />
              </Reveal>
            ))}

            <Reveal delay={models.length * 70}>
              <div className="flex h-full flex-col justify-between border border-hairline bg-mist p-8">
                <div>
                  <p className="kicker">Not sure yet</p>
                  <h3 className="mt-5 text-title font-light">Let a Brand Advisor help you shortlist</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    Tell us how you drive, who travels with you and what you want to spend each month. We will put two
                    or three variants in front of you, with the real on road price for each.
                  </p>
                </div>
                <Link href="/contact" className="arrow-link mt-8 text-sm">
                  Talk to us <Arrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Spotlight: one model, given room */}
      <section className="stage border-y border-hairline">
        <div className="shell grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <ModelVisual
              model={spotlight}
              reflection
              sizes="(max-width: 1024px) 92vw, 620px"
              className="aspect-[16/9] w-full"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="kicker">{spotlight.badge ?? "In focus"}</p>
            <h2 className="mt-5 text-headline font-light">{spotlight.fullName}</h2>
            <p className="mt-5 text-lead font-light text-ink-soft">{spotlight.strapline}</p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{spotlight.intro}</p>

            <dl className="mt-9 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-4">
              {[
                { label: "From", value: spotlight.priceFrom },
                { label: "Power", value: spotlight.power.split(" and ")[0] },
                { label: "Drive", value: "4MOTION" },
                { label: "Seats", value: `${spotlight.seating}` },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{item.label}</dt>
                  <dd className="mt-2 font-display text-lg font-light text-vw-blue">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`/models/${spotlight.slug}`}>Explore the {spotlight.name}</Button>
              <Button href={`/book-test-drive?model=${spotlight.slug}`} variant="outline">
                Book a test drive
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offers */}
      <section className="band">
        <div className="shell">
          <SectionHeader
            kicker="Running scheme"
            title="Offers live this month"
            lead="Most benefits stack, so the saving on your chosen variant is usually higher than any single line here. We confirm the exact figure in writing before you book."
          />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer, index) => (
              <Reveal key={offer.id} delay={index * 60} className="bg-white p-8 lg:p-10">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{offer.title}</p>
                <p className="mt-4 font-display text-2xl font-light text-vw-blue">{offer.value}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{offer.detail}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-ink-faint">{site.offerValidity}</p>
            <Link href="/offers" className="arrow-link text-sm">
              See all offers and how they apply <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Ownership and service */}
      <section className="bg-vw-blue text-white">
        <div className="shell band">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <SectionHeader
              tone="light"
              kicker="Owning a Volkswagen"
              title="The part that starts after delivery"
              lead="Every new Volkswagen carries four years or 1,00,000 km of warranty, three free services and four years of roadside assistance. Our workshop at Bhanpur handles the rest."
            />

            <Reveal delay={100}>
              <dl className="grid gap-px bg-white/15">
                {[
                  { term: "Standard warranty", detail: `${warrantyHeadline.years} or ${warrantyHeadline.distance}` },
                  { term: "Free services", detail: warrantyHeadline.freeServices },
                  { term: "Roadside assistance", detail: `${warrantyHeadline.roadside}, 24x7 across India` },
                  { term: "Service Value Package", detail: "Prepaid maintenance at today's prices" },
                  { term: "Genuine parts", detail: "100 percent genuine, warranty safe" },
                ].map((row) => (
                  <div key={row.term} className="flex flex-wrap items-baseline justify-between gap-4 bg-vw-blue py-5">
                    <dt className="text-sm text-white/60">{row.term}</dt>
                    <dd className="font-display text-lg font-light">{row.detail}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/service" variant="light">
                  Service and maintenance
                </Button>
                <Button href="/accessories" variant="light">
                  Genuine accessories
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Finance */}
      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              kicker="Purchase and financing"
              title="Work backwards from the monthly figure"
              lead="Tell us what you want to pay each month and we will find the structure that gets you there, across our partner banks and Volkswagen Secure."
            />
            <Reveal delay={80} className="mt-10 flex flex-wrap gap-3">
              <Button href="/finance">Open the EMI calculator</Button>
              <Button href="/finance#volkswagen-secure" variant="outline">
                About Volkswagen Secure
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {[
                { label: "Funding up to", value: "90%", note: "of the on road price" },
                { label: "Tenure", value: "1 to 7 years", note: "structured to your cash flow" },
                { label: "Buy back assured", value: "Up to 55%", note: "with Volkswagen Secure" },
                { label: "Lower monthly outgo", value: "Up to 35%", note: "against a standard loan" },
              ].map((item) => (
                <div key={item.label} className="bg-white p-8">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{item.label}</p>
                  <p className="mt-4 font-display text-3xl font-extralight text-vw-blue">{item.value}</p>
                  <p className="mt-2 text-sm text-ink-soft">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dealership */}
      <section className="stage border-y border-hairline">
        <div className="shell band">
          <SectionHeader
            kicker="Your dealership"
            title="Two addresses on NH 16"
            lead="Sales at Pahal, service at Bhanpur. Both staffed by Volkswagen trained teams, both on the highway, both easy to reach from Bhubaneswar and Cuttack."
          />

          <div className="mt-14 grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
            {locations.map((location, index) => (
              <Reveal key={location.id} delay={index * 90} className="bg-white p-8 lg:p-12">
                <p className="kicker">{location.kind}</p>
                <h3 className="mt-5 text-title font-light">{location.name}</h3>
                <address className="mt-5 not-italic text-base leading-relaxed text-ink-soft">
                  {location.street}
                  <br />
                  {location.locality}, {location.region} {location.postalCode}
                </address>
                <dl className="mt-6 grid gap-2 border-t border-hairline pt-6 text-sm">
                  {location.hours.map((slot) => (
                    <div key={slot.days} className="flex justify-between gap-6">
                      <dt className="text-ink-soft">{slot.days}</dt>
                      <dd className="text-vw-blue">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a href={`tel:${location.phone}`} className="arrow-link text-sm">
                    {location.phoneDisplay} <Arrow />
                  </a>
                  <a href={location.mapsUrl} target="_blank" rel="noopener" className="arrow-link text-sm">
                    Directions <Arrow />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link href="/dealership" className="arrow-link text-sm">
              About the dealership <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Das WeltAuto */}
      <section className="band">
        <div className="shell grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <SectionHeader
            kicker="Das WeltAuto"
            title="Certified pre owned, without the guesswork"
            lead="Every certified car passes a multi point inspection, carries verified history and comes with a warranty and roadside assistance through the authorised network."
          />
          <Reveal delay={100}>
            <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {[
                "Multi point inspection before certification",
                "Service history and odometer verified",
                "Warranty and roadside assistance included",
                "Exchange valued and finance arranged in house",
              ].map((point) => (
                <p key={point} className="bg-white p-7 text-sm leading-relaxed text-ink-soft">
                  {point}
                </p>
              ))}
            </div>
            <Link href="/used-cars" className="arrow-link mt-8 text-sm">
              Explore Das WeltAuto <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Odisha reach */}
      <section className="border-t border-hairline bg-mist">
        <div className="shell band">
          <SectionHeader
            kicker="Across Odisha"
            title="We deliver well beyond Bhubaneswar"
            lead="Booking, finance, documentation and delivery can all be completed without you travelling to the capital."
          />
          <Reveal className="mt-14">
            <CityGrid limit={12} />
          </Reveal>
          <Reveal className="mt-10">
            <Link href="/volkswagen-showroom" className="arrow-link text-sm">
              All {cities.length} locations <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="band">
        <div className="shell">
          <SectionHeader kicker="Owners" title="What people tell us after delivery" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 60} className="flex flex-col bg-white p-8">
                <div className="text-sm tracking-[0.2em] text-vw-cyan-deep" aria-label={`${item.rating} out of 5`}>
                  {"★".repeat(item.rating)}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">{item.quote}</blockquote>
                <figcaption className="mt-6 border-t border-hairline pt-4 text-sm">
                  <span className="text-vw-blue">{item.name}</span>
                  <span className="mt-1 block text-xs text-ink-faint">
                    {item.city} | {item.model}
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/reviews" className="arrow-link text-sm">
              Read more owner stories <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* News */}
      <section className="border-t border-hairline bg-mist">
        <div className="shell band">
          <SectionHeader kicker="News and campaigns" title="What is happening at the showroom" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
            {latest.map((article, index) => (
              <Reveal key={article.slug} delay={index * 70} className="bg-white p-8 lg:p-10">
                <p className="text-[11px] uppercase tracking-[0.14em] text-vw-cyan-deep">{article.category}</p>
                <h3 className="mt-5 text-title font-light">
                  <Link href={`/news/${article.slug}`} className="transition-colors hover:text-vw-cyan-deep">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{article.summary}</p>
                <p className="mt-6 text-xs text-ink-faint">
                  {formatArticleDate(article.date)} | {article.readMinutes} min read
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="scroll-mt-24 bg-vw-blue text-white">
        <div className="shell band grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <div>
            <SectionHeader
              tone="light"
              kicker="Enquire"
              title="Get your on road price in writing"
              lead="Share the model you have in mind. A Brand Advisor will send the full breakup of ex showroom price, Odisha registration, insurance and the running benefit, along with EMI options."
            />
            <Reveal delay={80} className="mt-10 flex flex-wrap gap-3">
              <Button href={telHref} variant="light">
                Call {site.phoneDisplay}
              </Button>
              <Button href={whatsappHref("Hi, I would like the on road price for a Volkswagen in Bhubaneswar.")} variant="whatsapp">
                WhatsApp us
              </Button>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <LeadForm
              source="home-enquiry"
              heading="Request a callback"
              subheading="We reply within working hours, usually inside the hour."
              ctaLabel="Send my enquiry"
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={generalFaqs} subtitle="The questions our Bhubaneswar and Odisha customers ask most often." />
    </>
  );
}
