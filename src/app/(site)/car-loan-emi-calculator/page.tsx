import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import EmiCalculator from "@/components/EmiCalculator";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { financeFaqs } from "@/data/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Car Loan EMI Calculator for Bhubaneswar Buyers",
  description:
    "Calculate your Volkswagen EMI in seconds. Set the car price, down payment, interest rate and tenure to see the monthly figure, total interest and total payable amount.",
  path: "/car-loan-emi-calculator",
  keywords: ["volkswagen emi calculator", "car loan emi bhubaneswar", "volkswagen finance odisha"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "EMI calculator", path: "/car-loan-emi-calculator" },
];

const partners = [
  "Public sector banks with the lowest published rates",
  "Private banks for faster approval and higher funding",
  "NBFC options for self employed buyers without an ITR",
  "Special schemes for doctors, chartered accountants and government employees",
];

export default function EmiPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(financeFaqs)]} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page py-10 sm:py-12">
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
          Volkswagen car loan EMI calculator
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Move the sliders to see what your Volkswagen will cost every month. Pick a model to load its starting price,
          then adjust the down payment, interest rate and tenure to match your plan.
        </p>

        <div className="mt-10">
          <EmiCalculator />
        </div>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading align="left" eyebrow="Finance desk" title="We find you the rate you actually qualify for" />
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Instead of walking into three banks yourself, share your documents once with us. We run your profile past
              our partner lenders and come back with the best approved rate, the maximum funding available and the
              tenure that keeps your EMI comfortable.
            </p>
            <ul className="mt-6 grid gap-3">
              {partners.map((partner) => (
                <li key={partner} className="flex items-start gap-3 rounded-xl border border-vw-line bg-white px-4 py-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vw-cyan text-xs font-bold text-vw-blue">
                    ✓
                  </span>
                  <span className="text-sm text-slate-700">{partner}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-vw-line bg-white p-5">
              <h3 className="text-sm font-bold text-vw-blue">Documents usually needed</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                PAN card, Aadhaar, three to six months of bank statements, salary slips or business proof, and one
                address proof. Our team collects everything digitally over WhatsApp.
              </p>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-24">
            <LeadForm
              source="emi-calculator"
              heading="Get a finance quote"
              subheading="Tell us the model and we will send the best approved rate and EMI plan for your profile."
              ctaLabel="Check my EMI plan"
            />
          </div>
        </div>
      </section>

      <Faqs faqs={financeFaqs} title="Car finance questions" eyebrow="Finance" />

      <CtaBand
        title="Talk to our finance desk"
        subtitle="Most approvals come through within 24 hours of receiving your documents."
        whatsappMessage="Hi, I want to check the EMI and finance options for a Volkswagen."
      />
    </>
  );
}
