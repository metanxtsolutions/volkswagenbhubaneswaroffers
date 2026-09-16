import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ModelVisual from "@/components/ModelVisual";
import OffersGrid from "@/components/OffersGrid";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import StickyCta from "@/components/StickyCta";
import { campaignBySlug, campaigns } from "@/data/campaigns";
import { modelBySlug } from "@/data/models";
import { usps } from "@/data/offers";
import { warrantyHeadline } from "@/data/ownership";
import { site, telHref, whatsappHref } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ campaign: string }> };

export function generateStaticParams() {
  return campaigns.map((campaign) => ({ campaign: campaign.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { campaign: slug } = await params;
  const campaign = campaignBySlug(slug);
  if (!campaign) return {};

  // Paid landing pages stay out of the index so they never compete with the
  // SEO pages for the same keywords.
  return buildMetadata({
    title: campaign.metaTitle,
    description: campaign.metaDescription,
    path: `/lp/${campaign.slug}`,
    noindex: true,
  });
}

export default async function LandingPage({ params }: Params) {
  const { campaign: slug } = await params;
  const campaign = campaignBySlug(slug);
  if (!campaign) notFound();

  const model = campaign.modelSlug ? modelBySlug(campaign.modelSlug) : undefined;
  const source = `lp-${campaign.slug}`;

  return (
    <>
      <JsonLd data={faqSchema(campaign.faqs)} />

      <p className="bg-vw-cyan px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.14em] text-vw-blue">
        {campaign.offerStrip}
      </p>

      <section className="stage-dark text-white">
        <div className="shell grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-16 lg:py-16">
          <Reveal>
            <h1 className="text-display font-extralight">{campaign.headline}</h1>
            <p className="mt-6 max-w-xl text-lead font-light text-white/70">{campaign.subheadline}</p>

            <ul className="mt-9 grid gap-px bg-white/15">
              {campaign.points.map((point) => (
                <li key={point} className="bg-transparent py-4 text-base text-white/85">
                  {point}
                </li>
              ))}
            </ul>

            {model ? (
              <div className="mt-10 hidden lg:block">
                <ModelVisual model={model} priority reflection className="aspect-[16/8] w-full max-w-lg" />
              </div>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={telHref} size="lg" variant="light">
                Call {site.phoneDisplay}
              </Button>
              <Button
                href={whatsappHref(
                  `Hi, I am interested in the ${model ? model.fullName : "Volkswagen offers"} in Bhubaneswar.`,
                )}
                size="lg"
                variant="whatsapp"
              >
                WhatsApp us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} id="enquiry" className="scroll-mt-20">
            <LeadForm
              source={source}
              defaultModel={model?.fullName ?? ""}
              heading={campaign.formHeading}
              subheading={campaign.formSub}
              ctaLabel={campaign.ctaLabel}
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-hairline bg-mist">
        <div className="shell grid gap-px bg-hairline py-px sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "Free", label: "Home test drive, no obligation" },
            { value: "24 hrs", label: "Typical loan approval" },
            { value: warrantyHeadline.years, label: `Standard warranty, or ${warrantyHeadline.distance}` },
            { value: "All Odisha", label: "Delivery and documentation" },
          ].map((item) => (
            <div key={item.label} className="bg-mist px-2 py-8 text-center lg:px-6">
              <p className="font-display text-2xl font-extralight text-vw-blue">{item.value}</p>
              <p className="mt-2 text-xs text-ink-soft">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {model ? (
        <section className="band">
          <div className="shell">
            <SectionHeader kicker="The car" title={`Why buyers pick the ${model.fullName}`} lead={model.intro} />
            <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
              {model.highlights.map((highlight, index) => (
                <Reveal key={highlight} delay={index * 60} className="bg-white p-8">
                  <p className="text-sm leading-relaxed text-ink-soft">{highlight}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-6 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Ex showroom from", value: model.priceFrom },
                { label: "EMI from", value: model.emiFrom },
                { label: "Power", value: model.power },
                { label: "Safety", value: model.safety },
              ].map((item) => (
                <div key={item.label} className="bg-white p-7">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{item.label}</p>
                  <p className="mt-3 font-display text-lg font-light text-vw-blue">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader kicker="This month" title="Benefits you can claim right now" />
          <Reveal className="mt-14">
            <OffersGrid />
          </Reveal>
          <p className="mt-8 text-xs text-ink-faint">{site.offerValidity}</p>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <SectionHeader kicker="Why buy from us" title="An authorised dealer, start to finish" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {usps.map((usp, index) => (
              <Reveal key={usp.title} delay={index * 60} className="bg-white p-8">
                <h3 className="text-title font-light">{usp.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{usp.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader kicker="Owners" title="What customers tell us" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 60} className="flex flex-col bg-white p-8">
                <div className="text-sm tracking-[0.2em] text-vw-cyan-deep" aria-label={`${item.rating} out of 5`}>
                  {"★".repeat(item.rating)}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-soft">{item.quote}</blockquote>
                <figcaption className="mt-6 border-t border-hairline pt-4 text-sm text-vw-blue">
                  {item.name}
                  <span className="mt-1 block text-xs text-ink-faint">{item.city}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-vw-blue text-white">
        <div className="shell band grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <SectionHeader
            tone="light"
            kicker="Before the offer ends"
            title="Get your price today"
            lead="Share your details once. We send the running benefit, the full on road breakup and your EMI options, and hold booking priority for the variant and colour you want."
          />
          <Reveal delay={120}>
            <LeadForm
              source={`${source}-footer`}
              defaultModel={model?.fullName ?? ""}
              heading="Send me the offer"
              subheading="One call is all it takes to know your exact price."
              ctaLabel={campaign.ctaLabel}
              compact
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={campaign.faqs} title="Questions before you enquire" kicker="Quick answers" />

      <StickyCta source={source} />
    </>
  );
}
