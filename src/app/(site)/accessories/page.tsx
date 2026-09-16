import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { accessoryCategories } from "@/data/ownership";
import { whatsappHref } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Genuine Accessories and Parts in Bhubaneswar",
  description:
    "Volkswagen genuine accessories and parts at our Bhubaneswar dealership: styling, protection, interior comfort, infotainment and service parts. Warranty safe and fitted by trained technicians.",
  path: "/accessories",
  keywords: [
    "volkswagen genuine accessories bhubaneswar",
    "volkswagen spare parts odisha",
    "taigun accessories price",
    "virtus accessories india",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Accessories", path: "/accessories" },
];

export default function AccessoriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        kicker="Parts and accessories"
        title="Genuine, because the fit matters."
        lead="Volkswagen genuine accessories are developed alongside the car, tested to the same standards and fitted by our trained technicians, so nothing you add compromises what you bought."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquiry">Request a quote</Button>
          <Button
            href={whatsappHref("Hi, I would like a quote for Volkswagen genuine accessories.")}
            variant="outline"
          >
            Ask on WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="band">
        <div className="shell">
          <SectionHeader kicker="Categories" title="What you can add" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
            {accessoryCategories.map((category, index) => (
              <Reveal key={category.title} delay={index * 60} className="bg-white p-8 lg:p-10">
                <p className="font-display text-sm font-light text-vw-cyan-deep">0{index + 1}</p>
                <h3 className="mt-5 text-title font-light">{category.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{category.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeader
            kicker="Why genuine"
            title="The cheap part is the expensive one"
            lead="An aftermarket part that does not match specification can affect your warranty, your insurance claim and, with anything structural or electrical, your safety."
          />
          <Reveal delay={100}>
            <ul className="grid gap-px border border-hairline bg-hairline">
              {[
                "Developed and crash tested with the vehicle, not fitted around it",
                "Warranty safe, so your cover stays intact",
                "Correct fit, so no rattles, gaps or wiring improvisation",
                "Fitted and documented by Volkswagen trained technicians",
                "Available for every model we sell, including older cars",
              ].map((point) => (
                <li key={point} className="bg-white px-7 py-5 text-sm text-ink-soft">
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <SectionHeader
            kicker="Enquire"
            title="Tell us your car and what you want"
            lead="Send the model, variant and the accessories you are considering. We will come back with pricing, fitment time and what is in stock."
          />
          <Reveal delay={120}>
            <LeadForm
              source="accessories-page"
              heading="Accessories enquiry"
              subheading="We will send you a written quote including fitment."
              ctaLabel="Request a quote"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
