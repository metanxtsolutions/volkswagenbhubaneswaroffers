import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import OffersGrid from "@/components/OffersGrid";
import SectionHeading from "@/components/SectionHeading";
import { generalFaqs } from "@/data/faqs";
import { models } from "@/data/models";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Offers and Discounts in Bhubaneswar This Month",
  description:
    "Running Volkswagen offers in Bhubaneswar: cash discount up to Rs 1,00,000, exchange bonus up to Rs 40,000, corporate benefit and low EMI finance on Tera, Taigun, Virtus, Tiguan and Golf GTI.",
  path: "/offers",
  keywords: [
    "volkswagen discount bhubaneswar",
    "volkswagen offers odisha",
    "volkswagen exchange bonus",
    "volkswagen corporate discount",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Offers", path: "/offers" },
];

const steps = [
  {
    title: "Share your requirement",
    detail: "Tell us the model, variant and colour you have in mind, plus your city and budget.",
  },
  {
    title: "Get the written price",
    detail: "We send the ex showroom price, RTO, insurance, accessories and the applicable benefit on WhatsApp.",
  },
  {
    title: "Test drive at home",
    detail: "We bring the car to you, at your home or office, at a time that suits your schedule.",
  },
  {
    title: "Book and drive home",
    detail: "Finance, insurance and registration are handled by us. Most deliveries happen within three to seven days.",
  },
];

export default function OffersPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(generalFaqs)]} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page grid gap-10 py-10 lg:grid-cols-[1.05fr_minmax(340px,0.95fr)] lg:py-14">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
            Volkswagen offers in Bhubaneswar this month
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Every benefit listed below is live right now at our Bhubaneswar showroom and applies to buyers across
            Odisha. Most of them stack, so the final saving on your chosen variant is usually higher than any single
            line here.
          </p>
          <p className="mt-4 rounded-xl border border-vw-line bg-vw-grey px-4 py-3 text-sm text-slate-700">
            {site.offerValidity}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {models.map((model) => (
              <Link
                key={model.slug}
                href={`/models/${model.slug}`}
                className="flex items-center justify-between rounded-xl border border-vw-line bg-white px-4 py-3 text-sm transition hover:border-vw-cyan"
              >
                <span>
                  <span className="block font-bold text-vw-blue">{model.fullName}</span>
                  <span className="block text-xs text-slate-500">{model.offer}</span>
                </span>
                <span aria-hidden className="text-vw-cyan-dark">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div id="enquiry" className="scroll-mt-24">
          <LeadForm
            source="offers-page"
            heading="Get the exact benefit on your variant"
            subheading="Offers change with stock and manufacturing month. Share your details and we will send the live number."
            ctaLabel="Send me the offer"
          />
        </div>
      </section>

      <section className="container-page py-8">
        <SectionHeading eyebrow="What you can claim" title="Benefits running on Volkswagen cars" />
        <div className="mt-10">
          <OffersGrid />
        </div>
      </section>

      <section className="mt-8 bg-vw-grey py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps from enquiry to delivery"
            subtitle="No showroom visit needed until you want one."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-vw-line bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vw-blue text-sm font-bold text-vw-cyan">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-vw-blue">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faqs faqs={generalFaqs} title="Offer and pricing questions" />

      <CtaBand
        title="Want the running offer in writing?"
        subtitle="Call or message us and we will send the full on road breakup for your variant today."
        whatsappMessage="Hi, please send me the current Volkswagen offer and on road price in Bhubaneswar."
      />
    </>
  );
}
