import Link from "next/link";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import OffersGrid from "@/components/OffersGrid";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { generalFaqs } from "@/data/faqs";
import { models } from "@/data/models";
import { site, telHref } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Offers in Bhubaneswar | Discounts and Exchange Bonus",
  description:
    "Running Volkswagen offers in Bhubaneswar: cash benefit, exchange bonus, corporate discount and low interest finance on the Taigun, Virtus, Tayron R-Line, Tiguan R-Line and Golf GTI.",
  path: "/offers",
  keywords: [
    "volkswagen offers bhubaneswar",
    "volkswagen discount odisha",
    "volkswagen exchange bonus",
    "volkswagen corporate discount india",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Offers", path: "/offers" },
];

const steps = [
  { title: "Share your requirement", detail: "Model, variant and colour, plus your city and how soon you want delivery." },
  { title: "Get the written price", detail: "Ex showroom, RTO, insurance, accessories and the applicable benefit, itemised on WhatsApp." },
  { title: "Test drive at home", detail: "We bring the car to you in Bhubaneswar or Cuttack, at a time that suits you." },
  { title: "Book and drive home", detail: "Finance, insurance and registration handled by us. Most deliveries happen within three to seven days." },
];

export default function OffersPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(generalFaqs)]} />

      <PageHero
        crumbs={crumbs}
        kicker="Running scheme"
        title="This month's offers, in full."
        lead="Every benefit below is live at our Pahal showroom and applies to buyers across Odisha. Most of them stack, so the saving on your chosen variant is usually higher than any single line here."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquiry">Get my exact benefit</Button>
          <Button href={telHref} variant="outline">
            Call {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <section className="band">
        <div className="shell">
          <SectionHeader kicker="What you can claim" title="Benefits running now" />
          <Reveal className="mt-14">
            <OffersGrid />
          </Reveal>
          <p className="mt-8 text-xs text-ink-faint">{site.offerValidity}</p>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader kicker="By model" title="What applies to which car" />
          <Reveal className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
            {models.map((model) => (
              <Link key={model.slug} href={`/models/${model.slug}`} className="group bg-white p-8 transition-colors hover:bg-mist">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{model.bodyType}</p>
                <h3 className="mt-3 text-title font-light">{model.fullName}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{model.offer}</p>
                <p className="mt-5 text-sm text-vw-blue">From {model.priceFrom}</p>
                <span className="arrow-link mt-6 text-sm">
                  Model details <Arrow />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <SectionHeader
            kicker="How it works"
            title="Four steps from enquiry to delivery"
            lead="No showroom visit needed until you want one."
          />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70} className="bg-white p-8 lg:p-10">
                <p className="font-display text-sm font-light text-vw-cyan-deep">0{index + 1}</p>
                <h3 className="mt-5 text-title font-light">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-vw-blue text-white">
        <div className="shell band grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <SectionHeader
            tone="light"
            kicker="Enquire"
            title="Offers change with stock and manufacturing month"
            lead="Share your details and we will send the live figure for your variant, in writing, today."
          />
          <Reveal delay={120}>
            <LeadForm
              source="offers-page"
              heading="Get the exact benefit"
              subheading="We will confirm what applies to the variant and colour you want."
              ctaLabel="Send me the offer"
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={generalFaqs} title="Offer and pricing questions" kicker="Good to know" />
    </>
  );
}
