import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen Bhubaneswar Reviews | Owner Experiences",
  description:
    "What Volkswagen owners across Bhubaneswar, Cuttack and Odisha say about buying and servicing with our authorised dealership.",
  path: "/reviews",
  keywords: ["volkswagen bhubaneswar reviews", "volkswagen dealer review odisha"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
];

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        kicker="Owners"
        title="The part we cannot write ourselves."
        lead="Buying experiences shared by Volkswagen owners across Odisha, in their words."
      />

      <section className="band">
        <div className="shell">
          <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 70} className="bg-white p-8 lg:p-12">
                <div className="text-sm tracking-[0.2em] text-vw-cyan-deep" aria-label={`${item.rating} out of 5`}>
                  {"★".repeat(item.rating)}
                </div>
                <blockquote className="mt-6 text-lead font-light leading-relaxed text-ink">{item.quote}</blockquote>
                <figcaption className="mt-8 border-t border-hairline pt-5 text-sm">
                  <span className="text-vw-blue">{item.name}</span>
                  <span className="mt-1 block text-xs text-ink-faint">
                    {item.city} | {item.model}
                  </span>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-faint">
            Reviews are published with the customer's permission. We do not publish aggregate rating markup for these,
            because a star rating in search results should come from a verified review platform rather than from our
            own page.
          </p>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <SectionHeader
            kicker="Your turn"
            title="Bought or serviced with us?"
            lead="Tell us how it went. We publish the good and use the rest to fix what needs fixing."
          />
          <Reveal delay={120}>
            <LeadForm
              source="reviews-page"
              heading="Share your experience"
              subheading="Leave your details and our customer relations team will get in touch."
              ctaLabel="Send feedback"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
