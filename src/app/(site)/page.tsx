import Link from "next/link";
import CityGrid from "@/components/CityGrid";
import CtaBand from "@/components/CtaBand";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ModelCard from "@/components/ModelCard";
import OffersGrid from "@/components/OffersGrid";
import SectionHeading from "@/components/SectionHeading";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import { generalFaqs } from "@/data/faqs";
import { models } from "@/data/models";
import { usps } from "@/data/offers";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Volkswagen Offers in Bhubaneswar 2026 | Price, EMI and Free Test Drive",
  description:
    "Get the running Volkswagen offers in Bhubaneswar on Tera, Taigun, Virtus, Tiguan R-Line and Golf GTI. Cash discount, exchange bonus, low EMI finance and a free home test drive across Odisha.",
  path: "/",
  keywords: [
    "volkswagen offers bhubaneswar",
    "volkswagen showroom bhubaneswar",
    "volkswagen price in odisha",
    "volkswagen taigun bhubaneswar",
    "volkswagen virtus on road price bhubaneswar",
    "volkswagen tera price odisha",
  ],
});

const heroPoints = [
  "Cash discount up to Rs 1,00,000 on select variants",
  "Exchange bonus up to Rs 40,000 on any brand",
  "Free home test drive in Bhubaneswar and Cuttack",
  "Car loan approval in 24 hours, tenure up to 84 months",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />

      <section className="relative overflow-hidden bg-vw-blue text-white">
        <div className="hero-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-vw-cyan/20 blur-3xl" aria-hidden />
        <div className="container-page relative grid gap-10 py-14 lg:grid-cols-[1.05fr_minmax(360px,0.95fr)] lg:py-20">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-vw-cyan">
              Offers live in Bhubaneswar and across Odisha
            </p>
            <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-5xl">
              Volkswagen offers in Bhubaneswar with the best price of the month
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Book the Tera, Taigun, Virtus, Tiguan R-Line or Golf GTI with a transparent on road price, the running
              cash and exchange benefit, and a free test drive at your doorstep.
            </p>

            <ul className="mt-7 grid gap-3">
              {heroPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-200 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vw-cyan text-xs font-bold text-vw-blue">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/offers"
                className="rounded-full bg-vw-cyan px-7 py-3.5 text-base font-bold text-vw-blue transition hover:bg-white"
              >
                See this month's offers
              </Link>
              <Link
                href="/book-test-drive"
                className="rounded-full border-2 border-white/70 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white hover:text-vw-blue"
              >
                Book a free test drive
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-400">{site.offerValidity}</p>
          </div>

          <div id="enquiry" className="scroll-mt-24">
            <LeadForm
              source="home-hero"
              heading="Check your best price in 2 minutes"
              subheading="Tell us the model you like. We will call you with the running offer, on road price and EMI options."
            />
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Running scheme"
          title="Volkswagen offers available this month"
          subtitle="Benefits are stackable on most variants. Our team confirms the exact amount for the model, colour and manufacturing month you choose."
        />
        <div className="mt-10">
          <OffersGrid />
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">{site.offerValidity}</p>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="The range"
            title="Volkswagen models available in Bhubaneswar"
            subtitle="Turbo petrol engines across the range, German safety engineering and a cabin built to last."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/models"
              className="rounded-full border-2 border-vw-blue px-7 py-3 font-bold text-vw-blue transition hover:bg-vw-blue hover:text-white"
            >
              Compare all models and prices
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why buy from us"
              title="A buying experience without the usual runaround"
              subtitle="From the first call to the day you drive out, one consultant handles your booking, finance, insurance and registration."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {usps.map((usp) => (
                <div key={usp.title} className="rounded-xl border border-vw-line bg-white p-5">
                  <h3 className="text-base font-bold text-vw-blue">{usp.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{usp.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-vw-blue p-7 text-white sm:p-9">
            <h3 className="text-2xl font-bold">Know your EMI before you visit</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Set your down payment and tenure, see the monthly figure instantly and then let our finance desk find you
              a better rate from our partner banks.
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-5">
              <div>
                <dt className="text-xs uppercase tracking-wider text-vw-cyan">EMI starts from</dt>
                <dd className="mt-1 text-2xl font-extrabold">Rs 16,999</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-vw-cyan">Tenure up to</dt>
                <dd className="mt-1 text-2xl font-extrabold">84 months</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-vw-cyan">Finance up to</dt>
                <dd className="mt-1 text-2xl font-extrabold">90 percent</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-vw-cyan">Approval in</dt>
                <dd className="mt-1 text-2xl font-extrabold">24 hours</dd>
              </div>
            </dl>
            <Link
              href="/car-loan-emi-calculator"
              className="mt-8 inline-flex rounded-full bg-vw-cyan px-6 py-3 font-bold text-vw-blue transition hover:bg-white"
            >
              Open the EMI calculator
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Across Odisha"
            title="We deliver Volkswagen cars all over Odisha"
            subtitle="Booking, finance, documentation and delivery can be completed without you travelling to Bhubaneswar."
          />
          <div className="mt-10">
            <CityGrid limit={12} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/volkswagen-showroom"
              className="rounded-full border-2 border-vw-blue px-7 py-3 font-bold text-vw-blue transition hover:bg-vw-blue hover:text-white"
            >
              See all Odisha locations
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="container-page pb-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-vw-blue sm:text-3xl">
            Buying a Volkswagen in Bhubaneswar: what you should know
          </h2>
          <div className="mt-5 grid gap-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              Volkswagen has built its Indian range around one idea: a turbocharged petrol engine in a body that is
              engineered to protect you. Every model sold in Bhubaneswar uses a TSI engine, and the Taigun and the
              Virtus both hold a 5 star Global NCAP rating for adult and child occupant protection. For families in
              Odisha who spend time on NH 16 and on mixed rural roads, that combination matters more than a long
              feature list.
            </p>
            <p>
              The on road price you pay in Bhubaneswar is made up of the ex showroom price, Odisha road tax,
              registration charges, insurance and any accessories you add. Odisha applies a single road tax structure
              across the state, so a buyer in Cuttack, Puri or Berhampur pays broadly the same as a buyer in the
              capital. Where the number actually moves is the running scheme, the exchange value of your old car and
              the corporate benefit you qualify for.
            </p>
            <p>
              Our advice is simple. Fix the variant first, then ask for the full written on road breakup, and only then
              compare the monthly EMI. We share that breakup on WhatsApp so you can take your time with it. If you want
              to feel the car before deciding, we will bring it to your home anywhere in Bhubaneswar or Cuttack at no
              cost.
            </p>
          </div>
        </div>
      </section>

      <Faqs faqs={generalFaqs} subtitle="The questions our Bhubaneswar and Odisha customers ask most often." />

      <CtaBand />
    </>
  );
}
