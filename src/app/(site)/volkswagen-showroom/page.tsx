import Button from "@/components/Button";
import CityGrid from "@/components/CityGrid";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { cities } from "@/data/cities";
import { locations, telHref, site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Showroom and Delivery Across Odisha",
  description:
    "Volkswagen sales and service for Bhubaneswar, Cuttack, Puri, Berhampur, Rourkela, Sambalpur, Balasore and 15 more Odisha towns. Same offers, doorstep test drive and delivery statewide.",
  path: "/volkswagen-showroom",
  keywords: [
    "volkswagen showroom odisha",
    "volkswagen dealer bhubaneswar",
    "volkswagen cuttack berhampur rourkela",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Locations", path: "/volkswagen-showroom" },
];

const steps = [
  "Share your model, variant and city over call or WhatsApp",
  "We send the written on road price and the running benefit",
  "Finance documents are collected digitally, approval usually inside 24 hours",
  "We share a video walkaround of your exact vehicle before dispatch",
  "Delivery is arranged in your town, registered under your district RTO",
];

export default function ShowroomIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        kicker="Across Odisha"
        title="One dealership, the whole state."
        lead={`Our Pahal showroom serves customers in ${cities.length} towns and cities across Odisha. Wherever you live, you get the same scheme, the same exchange bonus and the same finance options.`}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquiry">Check delivery to your town</Button>
          <Button href={telHref} variant="outline">
            Call {site.phoneDisplay}
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-hairline bg-mist">
        <div className="shell grid gap-px bg-hairline py-px lg:grid-cols-2">
          {locations.map((location) => (
            <div key={location.id} className="bg-mist px-2 py-8 lg:px-8">
              <p className="kicker">{location.kind}</p>
              <p className="mt-4 text-base text-vw-blue">{location.name}</p>
              <p className="mt-2 text-sm text-ink-soft">
                {location.street}, {location.locality} {location.postalCode}
              </p>
              <a href={`tel:${location.phone}`} className="mt-3 inline-block text-sm text-vw-blue underline underline-offset-4">
                {location.phoneDisplay}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <SectionHeader kicker="Where we deliver" title="Every town we serve" />
          <Reveal className="mt-14">
            <CityGrid />
          </Reveal>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <div>
            <SectionHeader
              kicker="Buying from out of town"
              title="You only travel if you want to"
              lead="Booking, loan approval, insurance and RTO documentation can all be completed remotely."
            />
            <Reveal delay={80} className="mt-10 grid gap-px border border-hairline bg-hairline">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-5 bg-white px-7 py-5 text-sm text-ink-soft">
                  <span className="font-display text-vw-cyan-deep">0{index + 1}</span>
                  {step}
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={120} id="enquiry" className="scroll-mt-24">
            <LeadForm
              source="showroom-index"
              heading="Tell us your town"
              subheading="We will confirm delivery timelines and the running offer for your location."
              ctaLabel="Check availability"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
