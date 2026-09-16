import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ModelVisual from "@/components/ModelVisual";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { modelFaqs } from "@/data/faqs";
import { modelBySlug, models } from "@/data/models";
import { warrantyHeadline } from "@/data/ownership";
import { site, telHref, whatsappHref } from "@/data/site";
import { breadcrumbSchema, carSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return models.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const model = modelBySlug(slug);
  if (!model) return {};

  return buildMetadata({
    title: `${model.fullName} in Bhubaneswar | Price from ${model.priceFrom}`,
    description: `${model.fullName}: ${model.strapline}. From ${model.priceFrom} ex showroom in Bhubaneswar, EMI from ${model.emiFrom}. Book a free test drive with your authorised Volkswagen dealer for Odisha.`,
    path: `/models/${model.slug}`,
    keywords: [
      `${model.name.toLowerCase()} price in bhubaneswar`,
      `volkswagen ${model.name.toLowerCase()} on road price odisha`,
      `${model.name.toLowerCase()} test drive bhubaneswar`,
      `${model.name.toLowerCase()} variants colours`,
    ],
  });
}

export default async function ModelPage({ params }: Params) {
  const { slug } = await params;
  const model = modelBySlug(slug);
  if (!model) notFound();

  const faqs = modelFaqs(model.fullName, model.priceFrom, model.emiFrom);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Models", path: "/models" },
    { name: model.fullName, path: `/models/${model.slug}` },
  ];
  const others = models.filter((item) => item.slug !== model.slug).slice(0, 4);

  const keyFigures = [
    { label: "Ex showroom from", value: model.priceFrom },
    { label: "EMI from", value: `${model.emiFrom} pm` },
    { label: "Power", value: model.power },
    { label: "Mileage", value: model.mileage },
  ];

  return (
    <>
      <JsonLd data={[carSchema(model), breadcrumbSchema(crumbs), faqSchema(faqs)]} />

      {/* Model hero */}
      <section className="stage-dark text-white">
        <div className="shell pb-16 pt-10 md:pt-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/50">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {last ? (
                      <span className="text-white/80">{crumb.name}</span>
                    ) : (
                      <>
                        <Link href={crumb.path} className="transition-colors hover:text-vw-cyan">
                          {crumb.name}
                        </Link>
                        <span aria-hidden>/</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <Reveal className="mt-10 max-w-3xl">
            <p className="kicker-light">
              {model.bodyType}
              {model.cbu ? " | Completely built unit" : ""}
            </p>
            <h1 className="mt-5 text-display font-extralight">{model.fullName}</h1>
            <p className="mt-6 text-lead font-light text-white/70">{model.strapline}</p>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <ModelVisual
              model={model}
              priority
              reflection
              sizes="(max-width: 1024px) 94vw, 900px"
              className="mx-auto aspect-[16/8] w-full max-w-4xl"
            />
          </Reveal>

          <Reveal delay={180} className="mt-12 grid gap-6 border-t border-white/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {keyFigures.map((figure) => (
              <div key={figure.label}>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/50">{figure.label}</p>
                <p className="mt-2 font-display text-xl font-light">{figure.value}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={220} className="mt-10 flex flex-wrap gap-3">
            <Button href={`/book-test-drive?model=${model.slug}`}>Book a test drive</Button>
            <Button href="#enquiry" variant="light">
              Get the on road price
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Running offer */}
      <section className="border-b border-hairline bg-mist">
        <div className="shell flex flex-wrap items-center justify-between gap-6 py-7">
          <p className="text-sm text-ink-soft">
            <span className="mr-3 text-[11px] uppercase tracking-[0.14em] text-vw-cyan-deep">Running offer</span>
            {model.offer}
          </p>
          <Link href="/offers" className="arrow-link text-sm">
            All offers <Arrow />
          </Link>
        </div>
      </section>

      {/* Story sections, alternating */}
      {model.sections.map((section, index) => (
        <section key={section.title} className={index % 2 === 1 ? "band bg-mist" : "band"}>
          <div
            className={`shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Reveal>
              <div className={index % 2 === 1 ? "stage border border-hairline p-8" : "stage border border-hairline p-8"}>
                <ModelVisual model={model} className="aspect-[16/9] w-full" sizes="(max-width: 1024px) 90vw, 560px" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="kicker">0{index + 1}</p>
              <h2 className="mt-5 text-headline font-light">{section.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">{section.body}</p>
              <ul className="mt-8 grid gap-px border-t border-hairline bg-hairline">
                {section.points.map((point) => (
                  <li key={point} className="bg-white py-4 text-sm text-ink-soft">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      {/* Highlights */}
      <section className="band bg-vw-blue text-white">
        <div className="shell">
          <SectionHeader tone="light" kicker="Highlights" title={`What defines the ${model.name}`} />
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 xl:grid-cols-3">
            {model.highlights.map((highlight, index) => (
              <Reveal key={highlight} delay={index * 60} className="bg-vw-blue p-8">
                <p className="font-display text-sm font-light text-vw-cyan">0{index + 1}</p>
                <p className="mt-4 text-base leading-relaxed text-white/80">{highlight}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications, variants, colours */}
      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <SectionHeader kicker="Technical specifications" title={`${model.fullName} at a glance`} />
            <Reveal className="mt-10 border-t border-hairline">
              <dl>
                {[
                  { label: "Engine options", value: model.engines.join(" | ") },
                  { label: "Power", value: model.power },
                  { label: "Transmission", value: model.transmission },
                  { label: "Mileage", value: model.mileage },
                  { label: "Seating", value: `${model.seating} people` },
                  { label: "Boot space", value: model.bootSpace },
                  { label: "Safety", value: model.safety },
                  ...model.specs,
                ].map((row) => (
                  <div key={row.label} className="flex flex-wrap gap-4 border-b border-hairline py-5">
                    <dt className="w-44 shrink-0 text-sm text-ink-faint">{row.label}</dt>
                    <dd className="flex-1 text-sm text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="grid content-start gap-10">
            <Reveal>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">Variants</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {model.variants.map((variant) => (
                  <li key={variant} className="border border-hairline px-4 py-2 text-sm text-ink-soft">
                    {variant}
                  </li>
                ))}
              </ul>
              {model.designLines ? (
                <p className="mt-5 text-sm text-ink-soft">
                  Design lines: {model.designLines.join(" and ")}.
                </p>
              ) : null}
            </Reveal>

            <Reveal delay={80}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">Colours</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {model.colors.map((color) => (
                  <li key={color} className="border border-hairline px-4 py-2 text-sm text-ink-soft">
                    {color}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-ink-faint">
                Colour availability depends on current stock and variant. Confirm with us before booking a specific
                shade.
              </p>
            </Reveal>

            <Reveal delay={140} className="border border-hairline bg-mist p-8">
              <h3 className="text-title font-light">Included with every new Volkswagen</h3>
              <ul className="mt-5 grid gap-2 text-sm text-ink-soft">
                <li>
                  {warrantyHeadline.years} or {warrantyHeadline.distance} standard warranty
                </li>
                <li>{warrantyHeadline.freeServices}</li>
                <li>{warrantyHeadline.roadside}</li>
              </ul>
              <Link href="/service" className="arrow-link mt-7 text-sm">
                Service and ownership <Arrow />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="scroll-mt-24 border-y border-hairline bg-mist">
        <div className="shell band grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <div>
            <SectionHeader
              kicker="Enquire"
              title={`Get the ${model.name} on road price`}
              lead="Ex showroom price, Odisha registration, insurance and the running benefit, itemised and sent to you on WhatsApp."
            />
            <Reveal delay={80} className="mt-10 flex flex-wrap gap-3">
              <Button href={telHref}>Call {site.phoneDisplay}</Button>
              <Button
                href={whatsappHref(`Hi, please send the on road price for the ${model.fullName} in Bhubaneswar.`)}
                variant="outline"
              >
                WhatsApp us
              </Button>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <LeadForm
              source={`model-${model.slug}`}
              defaultModel={model.fullName}
              heading={`${model.name} enquiry`}
              subheading="A Brand Advisor will call you with pricing, availability and finance options."
              ctaLabel={`Get ${model.name} price`}
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={faqs} title={`${model.fullName} questions`} />

      {/* Related */}
      <section className="band-tight border-t border-hairline">
        <div className="shell">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">Also consider</h2>
          <div className="mt-8 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 xl:grid-cols-4">
            {others.map((item) => (
              <Link key={item.slug} href={`/models/${item.slug}`} className="group bg-white p-7 transition-colors hover:bg-mist">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{item.bodyType}</p>
                <p className="mt-3 font-display text-lg font-light text-vw-blue">{item.fullName}</p>
                <p className="mt-2 text-sm text-ink-soft">From {item.priceFrom}</p>
                <span className="arrow-link mt-5 text-sm">
                  Explore <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
