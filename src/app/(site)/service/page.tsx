import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import Faqs from "@/components/Faqs";
import type { Faq } from "@/data/faqs";
import { serviceItems, serviceSteps, warrantyHeadline } from "@/data/ownership";
import { locations, whatsappHref } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Service Centre in Bhubaneswar | Book a Service",
  description:
    "Authorised Volkswagen service centre at Bhanpur, Bhubaneswar. Periodic maintenance, Service Value Package, 4ever Care, body and paint, 24x7 roadside assistance and genuine parts. Book a service slot.",
  path: "/service",
  keywords: [
    "volkswagen service centre bhubaneswar",
    "volkswagen service booking odisha",
    "volkswagen service value package",
    "volkswagen roadside assistance india",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
];

const workshop = locations.find((location) => location.kind === "Service centre") ?? locations[0];

const serviceFaqs: Faq[] = [
  {
    q: "What does the standard Volkswagen warranty cover?",
    a: "New Volkswagen cars in India carry a standard warranty of 4 years or 1,00,000 km, whichever comes first, along with 3 free services and 4 years of roadside assistance. Extended warranty options are available through 4ever Care before the standard term ends.",
  },
  {
    q: "What is a Service Value Package and is it worth it?",
    a: "The Service Value Package is a prepaid plan covering the periodic maintenance listed in your owner's manual. You pay at today's prices, which protects you against labour and spare part cost inflation over the years it runs, and it guarantees 100 percent genuine parts. It also transfers to the next owner, which helps at resale.",
  },
  {
    q: "Do you offer pick up and drop for servicing?",
    a: "Yes, across Bhubaneswar and Cuttack for scheduled servicing. Tell us the address and preferred slot when you book and we will confirm the timing.",
  },
  {
    q: "Can I get service done without coming to the workshop?",
    a: "For periodic maintenance, minor repairs and value added jobs, our Mobile Service Unit can come to you. Larger repairs, body and paint work and anything needing a lift have to come into the Bhanpur workshop.",
  },
  {
    q: "What happens if my car breaks down on the highway?",
    a: "Call roadside assistance. Volkswagen Assistance operates 24x7 across India, handles small on site repairs, and arranges towing to the nearest authorised workshop when a repair cannot be done where you are.",
  },
  {
    q: "Are the parts genuine?",
    a: "Yes. Our workshop uses 100 percent Volkswagen genuine parts. Non genuine parts can compromise both your warranty and the engineering the car was built around, so we do not fit them.",
  },
];

export default function ServicePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(serviceFaqs)]} />

      <PageHero
        crumbs={crumbs}
        kicker="Owners and service"
        title="Your Volkswagen, looked after properly."
        lead="Volkswagen trained technicians, manufacturer diagnostic equipment and 100 percent genuine parts, at our authorised workshop on NH 16 at Bhanpur."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#book">Book a service</Button>
          <Button
            href={whatsappHref("Hi, I would like to book a service for my Volkswagen.")}
            variant="outline"
          >
            Book on WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-hairline bg-vw-blue text-white">
        <div className="shell grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Standard warranty", value: warrantyHeadline.years, note: `or ${warrantyHeadline.distance}` },
            { label: "Free services", value: "3", note: "on every new Volkswagen" },
            { label: "Roadside assistance", value: "4 years", note: "24x7 across India" },
            { label: "Genuine parts", value: "100%", note: "warranty safe" },
          ].map((stat) => (
            <div key={stat.label} className="bg-vw-blue px-6 py-10 lg:px-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">{stat.label}</p>
              <p className="mt-4 font-display text-3xl font-extralight">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <SectionHeader
            kicker="What we handle"
            title="Everything your car needs, under one roof"
            lead="From the first free service to accident repair years later, the workshop at Bhanpur covers the full range of authorised work."
          />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="bg-white p-8 lg:p-10">
                <h3 className="text-title font-light">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
                <ul className="mt-6 grid gap-2.5 border-t border-hairline pt-5 text-sm text-ink-soft">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-vw-cyan" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader kicker="How it works" title="Four steps, no surprises" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {serviceSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 70} className="bg-white p-8 lg:p-10">
                <p className="font-display text-sm font-light text-vw-cyan-deep">0{index + 1}</p>
                <h3 className="mt-5 text-title font-light">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{step.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <div>
            <SectionHeader
              kicker="Book a slot"
              title="Tell us what the car needs"
              lead="Share the model, registration number and what you have noticed. We will confirm a slot and give you an estimate before any work begins."
            />
            <Reveal delay={80} className="mt-10 border border-hairline bg-mist p-8">
              <p className="kicker">{workshop.kind}</p>
              <h3 className="mt-5 text-title font-light">{workshop.name}</h3>
              <address className="mt-4 not-italic text-sm leading-relaxed text-ink-soft">
                {workshop.street}
                <br />
                {workshop.locality}, {workshop.region} {workshop.postalCode}
              </address>
              <dl className="mt-6 grid gap-2 border-t border-hairline pt-5 text-sm">
                {workshop.hours.map((slot) => (
                  <div key={slot.days} className="flex justify-between gap-6">
                    <dt className="text-ink-soft">{slot.days}</dt>
                    <dd className="text-vw-blue">{slot.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm">
                <a href={`tel:${workshop.phone}`} className="font-medium text-vw-blue underline underline-offset-4">
                  {workshop.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <LeadForm
              source="service-page"
              heading="Request a service booking"
              subheading="Our service advisor will call you to confirm the slot and the estimate."
              ctaLabel="Request a slot"
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={serviceFaqs} title="Service questions" kicker="Ownership" tone="mist" />
    </>
  );
}
