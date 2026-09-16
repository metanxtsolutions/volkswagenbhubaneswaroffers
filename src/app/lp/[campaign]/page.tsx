import { notFound } from "next/navigation";
import ModelVisual from "@/components/ModelVisual";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import OffersGrid from "@/components/OffersGrid";
import SectionHeading from "@/components/SectionHeading";
import StickyCta from "@/components/StickyCta";
import Testimonials from "@/components/Testimonials";
import { campaignBySlug, campaigns } from "@/data/campaigns";
import { modelBySlug } from "@/data/models";
import { usps } from "@/data/offers";
import { site, telHref, whatsappHref } from "@/data/site";
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

      <div className="bg-vw-cyan">
        <p className="container-page py-2.5 text-center text-xs font-bold uppercase tracking-wider text-vw-blue sm:text-sm">
          {campaign.offerStrip}
        </p>
      </div>

      <section className="relative overflow-hidden bg-vw-blue text-white">
        <div className="hero-grid absolute inset-0 opacity-70" aria-hidden />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-vw-cyan/20 blur-3xl" aria-hidden />
        <div className="container-page relative grid gap-9 py-10 lg:grid-cols-[1.05fr_minmax(360px,0.95fr)] lg:py-16">
          <div className="animate-fade-up">
            <h1 className="text-[28px] font-extrabold leading-[1.15] sm:text-4xl lg:text-[44px]">{campaign.headline}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{campaign.subheadline}</p>

            <ul className="mt-7 grid gap-3">
              {campaign.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-slate-200 sm:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vw-cyan text-xs font-bold text-vw-blue">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {model ? (
              <div className={`mt-8 hidden overflow-hidden rounded-2xl bg-gradient-to-br ${model.accent} p-4 lg:block`}>
                <ModelVisual model={model} priority className="mx-auto h-44 w-full max-w-md" sizes="(max-width: 1024px) 100vw, 480px" />
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={telHref}
                className="rounded-full bg-vw-cyan px-6 py-3.5 text-base font-bold text-vw-blue transition hover:bg-white"
              >
                Call {site.phoneDisplay}
              </a>
              <a
                href={whatsappHref(`Hi, I am interested in the ${model ? model.fullName : "Volkswagen offers"} in Bhubaneswar.`)}
                className="rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#1eb457]"
              >
                WhatsApp us
              </a>
            </div>
          </div>

          <div id="enquiry" className="scroll-mt-20">
            <LeadForm
              source={source}
              defaultModel={model?.fullName ?? ""}
              heading={campaign.formHeading}
              subheading={campaign.formSub}
              ctaLabel={campaign.ctaLabel}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-vw-line bg-vw-grey">
        <div className="container-page grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {[
            { value: "2 min", label: "To get your price on WhatsApp" },
            { value: "Free", label: "Home test drive, no obligation" },
            { value: "24 hrs", label: "Typical loan approval" },
            { value: "All Odisha", label: "Delivery and documentation" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-2xl font-extrabold text-vw-blue sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {model ? (
        <section className="container-page py-14 sm:py-16">
          <SectionHeading eyebrow="The car" title={`Why buyers pick the ${model.fullName}`} subtitle={model.intro} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {model.highlights.map((highlight) => (
              <div key={highlight} className="rounded-2xl border border-vw-line bg-white p-5">
                <p className="text-sm leading-relaxed text-slate-700">{highlight}</p>
              </div>
            ))}
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Ex showroom from", value: model.priceFrom },
              { label: "EMI from", value: model.emiFrom },
              { label: "Engine", value: model.power },
              { label: "Safety", value: model.safety },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-vw-line bg-vw-grey p-4">
                <dt className="text-[11px] uppercase tracking-wider text-slate-500">{item.label}</dt>
                <dd className="mt-1 text-sm font-bold text-vw-blue">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="bg-vw-grey py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="This month" title="Benefits you can claim right now" />
          <div className="mt-10">
            <OffersGrid />
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">{site.offerValidity}</p>
        </div>
      </section>

      <section className="container-page py-14 sm:py-16">
        <SectionHeading eyebrow="Why buy from us" title="A straight, no runaround purchase" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <div key={usp.title} className="rounded-2xl border border-vw-line bg-white p-5">
              <h3 className="text-base font-bold text-vw-blue">{usp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{usp.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="bg-vw-blue py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="text-white">
            <h2 className="text-2xl font-bold sm:text-3xl">Get your price before the offer ends</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              Share your details once. We send the running benefit, the full on road breakup and your EMI options, and
              we hold the booking priority for the variant and colour you want.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={telHref}
                className="rounded-full bg-vw-cyan px-6 py-3.5 font-bold text-vw-blue transition hover:bg-white"
              >
                Call {site.phoneDisplay}
              </a>
              <a
                href={whatsappHref(`Hi, please share the offer details for the ${model ? model.fullName : "Volkswagen range"}.`)}
                className="rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white transition hover:bg-[#1eb457]"
              >
                WhatsApp us
              </a>
            </div>
          </div>
          <LeadForm
            source={`${source}-footer`}
            defaultModel={model?.fullName ?? ""}
            heading="Send me the offer"
            subheading="One call is all it takes to know your exact price."
            ctaLabel={campaign.ctaLabel}
            compact
          />
        </div>
      </section>

      <Faqs faqs={campaign.faqs} title="Questions before you enquire" eyebrow="Quick answers" />

      <StickyCta source={source} />
    </>
  );
}
