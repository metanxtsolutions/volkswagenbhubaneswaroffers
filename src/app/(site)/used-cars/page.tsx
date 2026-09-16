import Button from "@/components/Button";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import type { Faq } from "@/data/faqs";
import { usedCarPromise } from "@/data/ownership";
import { whatsappHref } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Das WeltAuto Certified Pre Owned Cars in Bhubaneswar",
  description:
    "Volkswagen Das WeltAuto certified pre owned cars in Bhubaneswar. Multi point inspection, verified history, warranty and roadside assistance, with exchange and finance arranged in house.",
  path: "/used-cars",
  keywords: [
    "das weltauto bhubaneswar",
    "volkswagen certified pre owned odisha",
    "second hand volkswagen bhubaneswar",
    "used taigun virtus price",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Das WeltAuto", path: "/used-cars" },
];

const usedFaqs: Faq[] = [
  {
    q: "What makes a car Das WeltAuto certified?",
    a: "Every car goes through a multi point inspection covering mechanical, electrical, interior and body parameters. Anything outside specification is rectified before the car can be sold under the badge, and the service history, ownership and odometer are verified rather than taken on trust.",
  },
  {
    q: "Does a certified pre owned car come with a warranty?",
    a: "Yes. Certified cars carry a warranty along with roadside assistance, and they are serviced through the same authorised network as a new Volkswagen.",
  },
  {
    q: "Can I exchange my current car against a certified one?",
    a: "Yes, any brand. We evaluate your car, handle the ownership transfer paperwork and adjust the value against your purchase.",
  },
  {
    q: "Is finance available on pre owned cars?",
    a: "Yes. Our finance desk arranges loans on certified pre owned cars through the same partner banks, though rates and tenure differ from a new car loan depending on the vehicle's age.",
  },
  {
    q: "Can I sell my Volkswagen to you without buying another?",
    a: "Yes. Bring the car in for evaluation and we will make you an offer. Share the model, year and running before you visit and we can give you an indicative range.",
  },
];

export default function UsedCarsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(usedFaqs)]} />

      <PageHero
        tone="dark"
        crumbs={crumbs}
        kicker="Das WeltAuto"
        title="Pre owned, without the guesswork."
        lead="Volkswagen's certified pre owned programme exists to take the risk out of buying used: inspected, verified, warranted and serviced through the authorised network."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquiry" variant="light">
            Tell us what you are looking for
          </Button>
          <Button
            href={whatsappHref("Hi, I am interested in a Das WeltAuto certified pre owned Volkswagen.")}
            variant="whatsapp"
          >
            WhatsApp us
          </Button>
        </div>
      </PageHero>

      <section className="band">
        <div className="shell">
          <SectionHeader
            kicker="The promise"
            title="Four things every certified car carries"
            lead="Certification is a process, not a sticker. This is what a car has to pass before it can wear the badge."
          />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {usedCarPromise.map((item, index) => (
              <Reveal key={item.title} delay={index * 70} className="bg-white p-8 lg:p-10">
                <p className="font-display text-sm font-light text-vw-cyan-deep">0{index + 1}</p>
                <h3 className="mt-5 text-title font-light">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            kicker="Selling or exchanging"
            title="Your current car, valued honestly"
            lead="We evaluate any brand, explain how we arrived at the number, and handle the transfer paperwork. If you are buying a new Volkswagen, the value plus the exchange bonus comes straight off your invoice."
          />
          <Reveal delay={100}>
            <ol className="grid gap-px border border-hairline bg-hairline">
              {[
                "Share the model, year, variant and kilometres run",
                "We give an indicative range before you travel",
                "Physical evaluation at the showroom, or at your home in Bhubaneswar",
                "Firm offer, with the reasoning explained",
                "Paperwork and RC transfer handled by us",
              ].map((step, index) => (
                <li key={step} className="flex gap-5 bg-white px-7 py-5 text-sm text-ink-soft">
                  <span className="font-display text-vw-cyan-deep">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <div>
            <SectionHeader
              kicker="Enquire"
              title="Looking for something specific?"
              lead="Certified stock changes weekly. Tell us the model, budget and how soon you need it, and we will tell you what we have and what is arriving."
            />
            <Reveal delay={80} className="mt-10 border border-hairline bg-mist p-8">
              <p className="text-sm leading-relaxed text-ink-soft">
                Certified pre owned inventory is not listed on this page because it moves too quickly to keep accurate.
                We would rather tell you what is genuinely available today than show you a car that sold last week.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <LeadForm
              source="used-cars-page"
              heading="Das WeltAuto enquiry"
              subheading="Tell us what you are after and we will match it against current stock."
              ctaLabel="Send my requirement"
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={usedFaqs} title="Certified pre owned questions" kicker="Das WeltAuto" tone="mist" />
    </>
  );
}
