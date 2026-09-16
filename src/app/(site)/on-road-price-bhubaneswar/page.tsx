import Button from "@/components/Button";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { models } from "@/data/models";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import type { Faq } from "@/data/faqs";

export const metadata = buildMetadata({
  title: "Volkswagen On Road Price in Bhubaneswar, Odisha",
  description:
    "Understand the Volkswagen on road price in Bhubaneswar: ex showroom price, Odisha road tax, registration, insurance and accessories. Get a written breakup for your variant.",
  path: "/on-road-price-bhubaneswar",
  keywords: [
    "volkswagen on road price bhubaneswar",
    "volkswagen road tax odisha",
    "taigun on road price odisha",
    "virtus on road price bhubaneswar",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "On road price", path: "/on-road-price-bhubaneswar" },
];

const components = [
  {
    title: "Ex showroom price",
    detail: "The manufacturer price for the variant and colour you choose, including GST and cess.",
  },
  {
    title: "Odisha road tax",
    detail:
      "A one time tax charged as a percentage of the ex showroom price, with the rate slab depending on the price of the vehicle. Odisha applies the same structure across every district.",
  },
  {
    title: "Registration and handling",
    detail: "RTO registration, number plate, temporary registration and documentation handling charges.",
  },
  {
    title: "Insurance",
    detail:
      "A first year comprehensive policy, usually with zero depreciation, roadside assistance and engine protection for a new car.",
  },
  {
    title: "Accessories and extended warranty",
    detail: "Optional. Floor mats, body cover, 3M treatment, extended warranty and service value packages.",
  },
  {
    title: "Less the running benefit",
    detail: "Cash discount, exchange bonus, corporate benefit and any loyalty offer are subtracted from the total.",
  },
];

const priceFaqs: Faq[] = [
  {
    q: "How much more is the on road price compared to the ex showroom price?",
    a: "As a rough guide, expect the on road price to be around 15 to 22 percent above the ex showroom price once Odisha road tax, registration and a first year comprehensive insurance policy are added. The exact percentage depends on the price slab of the variant and the insurance cover you select.",
  },
  {
    q: "Is the Volkswagen on road price the same across Odisha?",
    a: "Yes, broadly. Odisha follows a single state road tax structure, so the on road price in Cuttack, Puri, Berhampur or Rourkela is close to the Bhubaneswar figure. Only local handling arrangements and the insurance you choose can move the number slightly.",
  },
  {
    q: "Can I register the car in my home district instead of Bhubaneswar?",
    a: "Yes. We can complete the registration under the RTO of your district. Share your address proof and we will confirm the process and the timeline for your location.",
  },
  {
    q: "Are accessories compulsory when buying?",
    a: "No. Accessories and value packages are optional. We list them separately in the quote so you can decide what you want and what you would rather skip.",
  },
];

export default function OnRoadPricePage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(priceFaqs)]} />

      <section className="container-page grid gap-10 py-10 lg:grid-cols-[1.05fr_minmax(340px,0.95fr)] lg:py-14">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
            Volkswagen on road price in Bhubaneswar explained
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            The price you see in an advertisement is the ex showroom price. What you actually pay is the on road price,
            and the gap between the two surprises a lot of first time buyers. Here is exactly what goes into it, with
            nothing hidden.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {components.map((item) => (
              <div key={item.title} className="rounded-xl border border-vw-line bg-white p-5">
                <h2 className="text-base font-bold text-vw-blue">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="enquiry" className="scroll-mt-24">
          <LeadForm
            source="on-road-price"
            heading="Get your written on road price"
            subheading="Pick the model and we will send a full line by line breakup, with the running benefit applied."
            ctaLabel="Send me the breakup"
          />
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader
            kicker="Starting points"
            title="Ex showroom prices in Bhubaneswar"
            lead="Indicative starting prices. The on road figure is calculated on the exact variant you select."
          />
          <div className="mt-14 overflow-x-auto border border-hairline bg-white">
            <table className="w-full min-w-[620px] text-left text-sm">
              <thead>
                <tr className="border-b border-hairline">
                  <th scope="col" className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Model</th>
                  <th scope="col" className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Ex showroom from</th>
                  <th scope="col" className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">Ex showroom up to</th>
                  <th scope="col" className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">EMI from</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model) => (
                  <tr key={model.slug} className="border-b border-hairline last:border-b-0">
                    <th scope="row" className="px-6 py-6 font-display text-base font-normal text-vw-blue">{model.fullName}</th>
                    <td className="px-5 py-4 text-slate-600">{model.priceFrom}</td>
                    <td className="px-5 py-4 text-slate-600">{model.priceTo}</td>
                    <td className="px-5 py-4 text-slate-600">{model.emiFrom} per month</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-xs text-ink-faint">
            Prices are indicative, apply to Bhubaneswar and can change without notice. Confirm the live price with our
            team before booking.
          </p>
        </div>
      </section>

      <Faqs faqs={priceFaqs} title="On road price questions" kicker="Pricing" tone="mist" />

    </>
  );
}
