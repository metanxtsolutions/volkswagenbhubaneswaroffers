import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use | Volkswagen Bhubaneswar",
  description:
    "Terms that apply to the use of the Volkswagen Bhubaneswar dealership website, including pricing, product information and trademarks.",
  path: "/terms",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Terms of use", path: "/terms" },
];

const sections = [
  {
    title: "About this website",
    body: "This website is operated by an authorised Volkswagen sales partner to share offers and collect enquiries from customers in Bhubaneswar and across Odisha. It is not the official global or national website of Volkswagen AG or Volkswagen India.",
  },
  {
    title: "Prices and offers",
    body: "All prices, discounts, EMI figures, specifications, colours and availability shown on this site are indicative, apply for a limited period and can change without notice. Ex showroom prices exclude road tax, registration, insurance and accessories. Nothing on this site is an offer capable of acceptance or a guarantee of a particular price.",
  },
  {
    title: "Product information",
    body: "Vehicle specifications, features and mileage figures are shared in good faith based on information available to us. Manufacturer specifications can change between production batches. Please confirm the exact specification of the variant you are buying before you book.",
  },
  {
    title: "Finance and insurance",
    body: "Loan approval, interest rates, tenure and insurance premiums are decided by the respective bank, NBFC or insurance company. EMI figures shown by our calculator are illustrative only and are not an approval or a commitment of any kind.",
  },
  {
    title: "Trademarks",
    body: "Volkswagen, the Volkswagen logo and all model names are trademarks of Volkswagen AG and are used here to describe the vehicles we sell. All other trademarks belong to their respective owners.",
  },
  {
    title: "Limitation of liability",
    body: "We take care to keep this site accurate, but we do not accept liability for any loss arising from reliance on information published here. Your purchase is governed by the booking form, the invoice and the manufacturer warranty documents, not by this website.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of India, and any dispute is subject to the jurisdiction of the courts at Bhubaneswar, Odisha.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero crumbs={crumbs} kicker="Legal" title="Terms of use" lead="The terms that apply when you use this website." />

      <section className="band">
        <div className="shell max-w-3xl">
          <p className="text-xs text-ink-faint">Last updated: September 2026</p>
          <div className="mt-12 grid gap-12">
            {sections.map((section) => (
              <Reveal key={section.title}>
                <h2 className="text-title font-light">{section.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
