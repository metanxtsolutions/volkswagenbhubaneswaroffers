import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { locations, site, telHref, whatsappHref } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Volkswagen Bhubaneswar | Showroom and Service Centre",
  description:
    "Call or visit the Volkswagen sales showroom at Pahal, NH 16, Bhubaneswar, or the service centre at Bhanpur. Offers, on road price, finance and test drives across Odisha.",
  path: "/contact",
  keywords: [
    "volkswagen bhubaneswar contact number",
    "volkswagen showroom pahal bhubaneswar",
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
      <Breadcrumbs items={crumbs} />

      <section className="container-page grid gap-10 py-10 lg:grid-cols-[1.05fr_minmax(340px,0.95fr)] lg:py-14">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">Contact us</h1>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
            Sales and service run from two locations on NH 16. Call for an instant answer on price and availability, or
            send your requirement on WhatsApp and we will reply with a written quote.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={telHref}
              className="surface surface-hover p-5"
            >
              <p className="eyebrow">Call sales</p>
              <p className="mt-2 text-lg font-bold text-vw-blue">{site.phoneDisplay}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {site.openingHours.days}, {site.openingHours.time}
              </p>
            </a>

            <a
              href={whatsappHref("Hi, I would like to know the current Volkswagen offers in Bhubaneswar.")}
              className="surface surface-hover p-5"
            >
              <p className="eyebrow">WhatsApp</p>
              <p className="mt-2 text-lg font-bold text-vw-blue">Chat with sales</p>
              <p className="mt-1 text-sm text-ink-soft">Fastest way to get a written price</p>
            </a>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {locations.map((location) => (
              <div key={location.id} className="surface p-6">
                <p className="eyebrow">{location.kind}</p>
                <h2 className="mt-2 text-lg font-bold text-vw-blue">{location.name}</h2>
                <address className="mt-3 not-italic text-sm leading-relaxed text-ink-soft">
                  {location.street}
                  <br />
                  {location.locality}, {location.region} {location.postalCode}
                </address>
                <p className="mt-3 text-sm">
                  <a href={`tel:${location.phone}`} className="font-bold text-vw-blue hover:text-vw-cyan-dark">
                    {location.phoneDisplay}
                  </a>
                </p>
                <dl className="mt-3 grid gap-1 text-sm text-ink-soft">
                  {location.hours.map((slot) => (
                    <div key={slot.days} className="flex justify-between gap-4">
                      <dt>{slot.days}</dt>
                      <dd className="font-medium text-vw-blue">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex text-sm font-semibold text-vw-cyan-dark hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            ))}
          </div>

          <div className="surface mt-6 overflow-hidden p-0">
            <iframe
              title="Volkswagen Bhubaneswar sales showroom location at Pahal"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapEmbedQuery)}&output=embed`}
              className="h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-4 text-sm text-ink-soft">
            Email us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-vw-cyan-dark hover:underline">
              {site.email}
            </a>{" "}
            for corporate and fleet enquiries.
          </p>
        </div>

        <div id="enquiry" className="scroll-mt-24">
          <LeadForm
            source="contact-page"
            heading="Send us your requirement"
            subheading="Fill this and our consultant will call you back, usually within the hour during working hours."
            ctaLabel="Request a callback"
          />
        </div>
      </section>

      <section className="bg-vw-grey py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="Visiting us"
            title="Planning a showroom visit?"
            subtitle="Call ahead and we will keep the variant and colour you want ready for a walkaround, so your visit is not wasted."
          />
        </div>
      </section>
    </>
  );
}
