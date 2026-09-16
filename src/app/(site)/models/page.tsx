import Link from "next/link";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import ModelCard from "@/components/ModelCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { models } from "@/data/models";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Cars in Bhubaneswar | Price List and Range",
  description:
    "The full Volkswagen range at our Bhubaneswar showroom: Taigun, Virtus, Tayron R-Line, Tiguan R-Line and Golf GTI. Compare price, engines, mileage and safety, then book a test drive.",
  path: "/models",
  keywords: [
    "volkswagen car price list bhubaneswar",
    "volkswagen models india price",
    "volkswagen taigun virtus tayron price odisha",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Models", path: "/models" },
];

const segments = ["SUV", "Sedan", "Performance"];

export default function ModelsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        kicker="The range"
        title="Every Volkswagen, one showroom."
        lead="Five model families, all turbocharged TSI petrol, all built on body structures engineered for crash protection. Indicative ex showroom prices for Bhubaneswar."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/book-test-drive">Book a test drive</Button>
          <Button href="/offers" variant="outline">
            See current offers
          </Button>
        </div>
      </PageHero>

      {segments.map((segment) => {
        const list = models.filter((model) => model.segment === segment);
        if (list.length === 0) return null;

        return (
          <section key={segment} className="band-tight border-b border-hairline last:border-b-0">
            <div className="shell">
              <Reveal>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
                  {segment}
                  <span className="ml-3 text-ink-faint/60">
                    {list.length} model{list.length > 1 ? "s" : ""}
                  </span>
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {list.map((model, index) => (
                  <Reveal key={model.slug} delay={index * 70}>
                    <ModelCard model={model} priority={segment === "SUV" && index < 2} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader kicker="Side by side" title="The range, compared" />
          <Reveal className="mt-12 overflow-x-auto border border-hairline bg-white">
            <table className="w-full min-w-[860px] text-left text-sm">
              <thead>
                <tr className="border-b border-hairline">
                  {["Model", "Body", "Ex showroom from", "Engines", "Mileage", "Safety", ""].map((head) => (
                    <th
                      key={head}
                      scope="col"
                      className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {models.map((model) => (
                  <tr key={model.slug} className="border-b border-hairline align-top last:border-b-0">
                    <th scope="row" className="px-6 py-6 font-display text-base font-normal text-vw-blue">
                      {model.fullName}
                    </th>
                    <td className="px-6 py-6 text-ink-soft">{model.bodyType}</td>
                    <td className="px-6 py-6 text-vw-blue">{model.priceFrom}</td>
                    <td className="px-6 py-6 text-ink-soft">{model.engines.join(", ")}</td>
                    <td className="px-6 py-6 text-ink-soft">{model.mileage}</td>
                    <td className="px-6 py-6 text-ink-soft">{model.safety}</td>
                    <td className="px-6 py-6">
                      <Link href={`/models/${model.slug}`} className="arrow-link text-sm whitespace-nowrap">
                        Details <Arrow />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-5 text-xs text-ink-faint">
            Prices are indicative ex showroom figures and change with variant, colour and the running scheme. Mileage
            is ARAI certified and varies with driving conditions.
          </p>
        </div>
      </section>
    </>
  );
}
