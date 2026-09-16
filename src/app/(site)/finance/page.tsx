import Button from "@/components/Button";
import EmiCalculator from "@/components/EmiCalculator";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { financeFaqs } from "@/data/faqs";
import { financeDocuments, financePartners, financeProducts } from "@/data/ownership";
import { site, telHref } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Finance and EMI in Bhubaneswar | Car Loan and Volkswagen Secure",
  description:
    "Volkswagen car finance in Bhubaneswar: funding up to 90 percent of the on road price, tenure from 1 to 7 years, Volkswagen Secure with assured buy back, plus an EMI calculator and in house finance desk.",
  path: "/finance",
  keywords: [
    "volkswagen emi calculator bhubaneswar",
    "volkswagen car loan odisha",
    "volkswagen secure buy back",
    "volkswagen finance interest rate india",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Finance", path: "/finance" },
];

export default function FinancePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(financeFaqs)]} />

      <PageHero
        crumbs={crumbs}
        kicker="Purchase and financing"
        title="Start from the monthly figure, not the sticker."
        lead="Our finance desk runs your profile past every partner bank and comes back with the best approved rate, the maximum funding available and a tenure that keeps the EMI comfortable."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#calculator">Calculate your EMI</Button>
          <Button href={telHref} variant="outline">
            Call {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <section id="calculator" className="band scroll-mt-24">
        <div className="shell">
          <SectionHeader
            kicker="EMI calculator"
            title="See the monthly number in seconds"
            lead="Pick a model to load its starting price, then move the sliders. The figure updates as you go."
          />
          <Reveal className="mt-14">
            <EmiCalculator />
          </Reveal>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader kicker="Finance products" title="Three ways to structure the purchase" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
            {financeProducts.map((product, index) => (
              <Reveal
                key={product.title}
                delay={index * 80}
                className="bg-white p-8 lg:p-10"
              >
                <div id={product.title === "Volkswagen Secure" ? "volkswagen-secure" : undefined} className="scroll-mt-28">
                  <p className="font-display text-sm font-light text-vw-cyan-deep">0{index + 1}</p>
                  <h3 className="mt-5 text-title font-light">{product.title}</h3>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">{product.detail}</p>
                  <ul className="mt-7 grid gap-3 border-t border-hairline pt-6 text-sm text-ink-soft">
                    {product.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-vw-cyan" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader
              kicker="Partner banks"
              title="One application, every lender"
              lead="Rather than walking into three banks yourself, share your documents once. We compare the offers and tell you which one actually works out cheaper over the full tenure."
            />
            <Reveal delay={80} className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
              {financePartners.map((partner) => (
                <p key={partner} className="bg-white px-6 py-5 text-sm text-ink-soft">
                  {partner}
                </p>
              ))}
            </Reveal>
            <p className="mt-5 text-xs text-ink-faint">
              Partner list follows Volkswagen India's published financing partners. Availability and rates depend on
              your profile and the lender's current policy.
            </p>
          </div>

          <Reveal delay={120} className="border border-hairline bg-mist p-8 lg:p-10">
            <h3 className="text-title font-light">What to keep ready</h3>
            <ul className="mt-7 grid gap-4 text-sm text-ink-soft">
              {financeDocuments.map((doc) => (
                <li key={doc} className="flex gap-3 border-b border-hairline pb-4 last:border-b-0">
                  <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-vw-cyan" />
                  {doc}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-relaxed text-ink-soft">
              Our team collects everything digitally over WhatsApp, so you should not need to visit the showroom before
              your approval comes through.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-vw-blue text-white">
        <div className="shell band grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <SectionHeader
            tone="light"
            kicker="Finance desk"
            title="Get a rate you actually qualify for"
            lead="Share your requirement and our finance manager will come back with the approved rate, funding percentage and the EMI across two or three tenures."
          />
          <Reveal delay={120}>
            <LeadForm
              source="finance-page"
              heading="Request a finance quote"
              subheading="Tell us the model and we will structure the plan around your monthly budget."
              ctaLabel="Check my EMI plan"
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={financeFaqs} title="Finance questions" kicker="Good to know" />
    </>
  );
}
