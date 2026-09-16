import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { site, telHref, whatsappHref } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact the Volkswagen Bhubaneswar Sales Team",
  description:
    "Call, WhatsApp or visit our Volkswagen showroom in Bhubaneswar for offers, on road price, finance and test drives across Odisha.",
  path: "/contact",
  keywords: ["volkswagen bhubaneswar contact number", "volkswagen showroom address bhubaneswar"],
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
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Our sales team is available seven days a week. Call for an instant answer on price and availability, or
            send your requirement on WhatsApp and we will reply with a written quote.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href={telHref} className="rounded-2xl border border-vw-line bg-white p-5 transition hover:border-vw-cyan">
              <p className="text-xs font-bold uppercase tracking-wider text-vw-cyan-dark">Call us</p>
              <p className="mt-2 text-lg font-bold text-vw-blue">{site.phoneDisplay}</p>
              <p className="mt-1 text-sm text-slate-600">
                {site.openingHours.days}, {site.openingHours.time}
              </p>
            </a>

            <a
              href={whatsappHref("Hi, I would like to know the current Volkswagen offers in Bhubaneswar.")}
              className="rounded-2xl border border-vw-line bg-white p-5 transition hover:border-vw-cyan"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-vw-cyan-dark">WhatsApp</p>
              <p className="mt-2 text-lg font-bold text-vw-blue">Chat with sales</p>
              <p className="mt-1 text-sm text-slate-600">Fastest way to get a written price</p>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="rounded-2xl border border-vw-line bg-white p-5 transition hover:border-vw-cyan"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-vw-cyan-dark">Email</p>
              <p className="mt-2 text-lg font-bold text-vw-blue">{site.email}</p>
              <p className="mt-1 text-sm text-slate-600">For corporate and fleet enquiries</p>
            </a>

            <a
              href={site.googleMapsUrl}
              target="_blank"
              rel="noopener"
              className="rounded-2xl border border-vw-line bg-white p-5 transition hover:border-vw-cyan"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-vw-cyan-dark">Showroom</p>
              <p className="mt-2 text-lg font-bold text-vw-blue">{site.address.locality}</p>
              <address className="mt-1 not-italic text-sm text-slate-600">
                {site.address.street}, {site.address.region} {site.address.postalCode}
              </address>
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-vw-line">
            <iframe
              title="Volkswagen Bhubaneswar showroom location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapEmbedQuery)}&output=embed`}
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
