import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ModelCard from "@/components/ModelCard";
import SectionHeading from "@/components/SectionHeading";
import { models } from "@/data/models";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Cars Price List in Bhubaneswar, Odisha",
  description:
    "Compare all Volkswagen models on sale in Bhubaneswar: Tera, Taigun, Virtus, Tiguan R-Line and Golf GTI. Ex showroom price, EMI, engine, mileage and safety at a glance.",
  path: "/models",
  keywords: ["volkswagen car price list bhubaneswar", "volkswagen models india", "volkswagen cars odisha"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Models", path: "/models" },
];

export default function ModelsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page py-10 sm:py-14">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
          Volkswagen car price list in Bhubaneswar
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Five models, one engineering philosophy. Every Volkswagen sold here runs a turbocharged TSI petrol engine and
          is built on a body shell designed for crash protection. Prices below are indicative ex showroom figures for
          Bhubaneswar.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((model) => (
            <ModelCard key={model.slug} model={model} />
          ))}
        </div>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Side by side" title="Quick comparison" />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-vw-line bg-white">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-vw-blue text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Model</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Body type</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Ex showroom from</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Engine</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Mileage</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Safety</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-vw-line">
                {models.map((model) => (
                  <tr key={model.slug} className="align-top">
                    <th scope="row" className="px-5 py-4 font-bold text-vw-blue">{model.fullName}</th>
                    <td className="px-5 py-4 text-slate-600">{model.bodyType}</td>
                    <td className="px-5 py-4 font-semibold text-slate-800">{model.priceFrom}</td>
                    <td className="px-5 py-4 text-slate-600">{model.engines.join(", ")}</td>
                    <td className="px-5 py-4 text-slate-600">{model.mileage}</td>
                    <td className="px-5 py-4 text-slate-600">{model.safety}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Prices are indicative ex showroom figures and change with variant, colour and the running scheme. Mileage
            figures are ARAI certified and vary with driving conditions.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="mx-auto max-w-2xl" id="enquiry">
          <LeadForm
            source="models-page"
            heading="Not sure which model fits you?"
            subheading="Tell us your budget and how you drive. Our consultant will recommend the right variant and send the price."
            ctaLabel="Help me choose"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
