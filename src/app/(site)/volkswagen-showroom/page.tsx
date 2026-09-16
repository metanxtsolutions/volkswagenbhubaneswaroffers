import Breadcrumbs from "@/components/Breadcrumbs";
import CityGrid from "@/components/CityGrid";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { cities } from "@/data/cities";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Showroom and Delivery Across Odisha",
  description:
    "Volkswagen sales support for Bhubaneswar, Cuttack, Puri, Berhampur, Rourkela, Sambalpur, Balasore and more. Same offers, doorstep test drive and delivery anywhere in Odisha.",
  path: "/volkswagen-showroom",
  keywords: ["volkswagen showroom odisha", "volkswagen dealer bhubaneswar", "volkswagen cuttack", "volkswagen berhampur"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Odisha locations", path: "/volkswagen-showroom" },
];

export default function ShowroomIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page py-10 sm:py-14">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
          Volkswagen sales and delivery across Odisha
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Our Bhubaneswar showroom serves customers in {cities.length} towns and cities across Odisha. Wherever you
          live, you get the same monthly scheme, the same exchange bonus and the same finance options. Booking, loan
          approval and RTO documentation can all be completed without travelling to the capital.
        </p>

        <div className="mt-10">
          <CityGrid />
        </div>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How out of town buying works"
              title="Buy from Bhubaneswar without the travel"
            />
            <ol className="mt-8 grid gap-4">
              {[
                "Share your model, variant and city over call or WhatsApp.",
                "We send the written on road price and the running benefit.",
                "Finance documents are collected digitally and approval usually lands within 24 hours.",
                "We share a video walkaround of your exact vehicle before dispatch.",
                "Delivery is arranged at your town, with registration completed under Odisha RTO.",
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-xl border border-vw-line bg-white px-5 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-vw-blue text-xs font-bold text-vw-cyan">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div id="enquiry" className="scroll-mt-24">
            <LeadForm
              source="showroom-index"
              heading="Tell us your town"
              subheading="We will confirm delivery timelines and the running offer for your location."
              ctaLabel="Check availability"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
