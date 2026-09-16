import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { locations, site, telHref, whatsappHref } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Volkswagen Bhubaneswar | Showroom and Service Centre",
  description:
    "Call, WhatsApp or visit the Volkswagen sales showroom at Pahal, NH 16, Bhubaneswar, or the authorised service centre at Bhanpur. Offers, on road price, finance and test drives across Odisha.",
  path: "/contact",
  keywords: [
    "volkswagen bhubaneswar contact number",
    "volkswagen showroom pahal address",
    "volkswagen service centre bhanpur",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        kicker="Contact"
        title="Talk to the showroom."
        lead="Sales and service run from two locations on NH 16. Call for an instant answer on price and availability, or send your requirement on WhatsApp and we will reply with a written quote."
      >
        <div className="flex flex-wrap gap-3">
          <Button href={telHref}>Call {site.phoneDisplay}</Button>
          <Button
            href={whatsappHref("Hi, I would like to know the current Volkswagen offers in Bhubaneswar.")}
            variant="whatsapp"
          >
            WhatsApp us
          </Button>
        </div>
      </PageHero>

      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <div>
            <div className="grid gap-px border border-hairline bg-hairline">
              {locations.map((location) => (
                <Reveal key={location.id} className="bg-white p-8 lg:p-10">
                  <p className="kicker">{location.kind}</p>
                  <h2 className="mt-5 text-title font-light">{location.name}</h2>
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
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
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

            <Reveal delay={100} className="mt-6 border border-hairline">
              <iframe
                title="Volkswagen Bhubaneswar sales showroom at Pahal, NH 16"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapEmbedQuery)}&output=embed`}
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            <p className="mt-6 text-sm text-ink-soft">
              For corporate and fleet enquiries, email{" "}
              <a href={`mailto:${site.email}`} className="font-medium text-vw-blue underline underline-offset-4">
                {site.email}
              </a>
              .
            </p>
          </div>

          <Reveal delay={120} id="enquiry">
            <LeadForm
              source="contact-page"
              heading="Request a callback"
              subheading="Fill this and a Brand Advisor will call you back, usually within the hour during working hours."
              ctaLabel="Request a callback"
            />
          </Reveal>
        </div>
      </section>

      <section className="band-tight bg-mist">
        <div className="shell">
          <SectionHeader
            kicker="Visiting us"
            title="Planning a showroom visit?"
            lead="Call ahead and we will keep the variant and colour you want ready for a walkaround, so the trip is not wasted."
          />
        </div>
      </section>
    </>
  );
}
