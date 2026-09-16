import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModelVisual from "@/components/ModelVisual";
import CtaBand from "@/components/CtaBand";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/SectionHeading";
import { modelFaqs } from "@/data/faqs";
import { modelBySlug, models } from "@/data/models";
import { primaryCities } from "@/data/cities";
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
    title: `${model.fullName} Price in Bhubaneswar, Offers and On Road Price`,
    description: `${model.fullName} starts from ${model.priceFrom} ex showroom in Bhubaneswar. See variants, mileage, colours, EMI from ${model.emiFrom} and the running offer. Free home test drive across Odisha.`,
    path: `/models/${model.slug}`,
    keywords: [
      `${model.name.toLowerCase()} price in bhubaneswar`,
      `volkswagen ${model.name.toLowerCase()} on road price odisha`,
      `${model.name.toLowerCase()} offers bhubaneswar`,
      `${model.name.toLowerCase()} emi`,
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
  const others = models.filter((item) => item.slug !== model.slug);

  return (
    <>
      <JsonLd data={[carSchema(model), breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page grid gap-10 py-8 lg:grid-cols-[1.05fr_minmax(340px,0.95fr)] lg:py-12">
        <div>
          <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${model.accent} p-6`}>
            <ModelVisual model={model} priority className="mx-auto h-56 w-full max-w-lg" sizes="(max-width: 1024px) 100vw, 620px" />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-vw-cyan-dark">{model.bodyType}</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
            {model.fullName} price in Bhubaneswar
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{model.intro}</p>

          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Ex showroom from", value: model.priceFrom },
              { label: "EMI from", value: model.emiFrom },
              { label: "Engine", value: model.power },
              { label: "Mileage", value: model.mileage },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-vw-line bg-white p-4">
                <dt className="text-[11px] uppercase tracking-wider text-slate-500">{item.label}</dt>
                <dd className="mt-1 text-sm font-bold text-vw-blue">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 rounded-xl border border-vw-cyan/40 bg-vw-cyan/10 px-5 py-4">
            <p className="text-sm font-semibold text-vw-blue">Running offer</p>
            <p className="mt-1 text-sm text-slate-700">{model.offer}</p>
          </div>
        </div>

        <div id="enquiry" className="scroll-mt-24">
          <LeadForm
            source={`model-${model.slug}`}
            defaultModel={model.fullName}
            heading={`Get the ${model.name} on road price`}
            subheading="Full breakup of ex showroom, RTO, insurance and the running benefit, sent to you on WhatsApp."
            ctaLabel={`Get ${model.name} price`}
          />
        </div>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-vw-blue sm:text-3xl">Why the {model.name} works in Odisha</h2>
            <div className="mt-5 grid gap-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {model.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-vw-blue sm:text-3xl">Highlights</h2>
            <ul className="mt-5 grid gap-3">
              {model.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 rounded-xl border border-vw-line bg-white px-4 py-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vw-cyan text-xs font-bold text-vw-blue">
                    ✓
                  </span>
                  <span className="text-sm text-slate-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Specifications" title={`${model.fullName} at a glance`} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-vw-line">
            <table className="w-full text-left text-sm">
              <tbody className="divide-y divide-vw-line">
                {[
                  { label: "Engine options", value: model.engines.join(", ") },
                  { label: "Power", value: model.power },
                  { label: "Transmission", value: model.transmission },
                  { label: "Mileage", value: model.mileage },
                  { label: "Seating", value: `${model.seating} people` },
                  { label: "Boot space", value: model.bootSpace },
                  { label: "Safety", value: model.safety },
                  ...model.specs,
                ].map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="w-2/5 bg-vw-grey px-5 py-3 font-semibold text-vw-blue">
                      {row.label}
                    </th>
                    <td className="px-5 py-3 text-slate-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid content-start gap-6">
            <div className="rounded-2xl border border-vw-line p-6">
              <h3 className="text-base font-bold text-vw-blue">Variants</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {model.variants.map((variant) => (
                  <li key={variant} className="rounded-full bg-vw-grey px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                    {variant}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-vw-line p-6">
              <h3 className="text-base font-bold text-vw-blue">Colours available</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {model.colors.map((color) => (
                  <li key={color} className="rounded-full bg-vw-grey px-3.5 py-1.5 text-xs font-semibold text-slate-700">
                    {color}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                Colour availability depends on current stock. Ask us before booking a specific shade.
              </p>
            </div>
            <div className="rounded-2xl bg-vw-blue p-6 text-white">
              <h3 className="text-base font-bold">Buying the {model.name} outside Bhubaneswar?</h3>
              <p className="mt-2 text-sm text-slate-300">
                We deliver to towns across Odisha with full documentation support.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {primaryCities.slice(0, 6).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/volkswagen-showroom/${city.slug}`}
                    className="rounded-full border border-white/30 px-3.5 py-1.5 text-xs font-semibold hover:border-vw-cyan hover:text-vw-cyan"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faqs faqs={faqs} title={`${model.fullName} questions`} />

      <section className="container-page pb-16">
        <SectionHeading eyebrow="Also consider" title="Other Volkswagen models" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/models/${item.slug}`}
              className="rounded-xl border border-vw-line bg-white px-4 py-4 transition hover:border-vw-cyan"
            >
              <span className="block text-sm font-bold text-vw-blue">{item.fullName}</span>
              <span className="mt-1 block text-xs text-slate-500">From {item.priceFrom}</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title={`Book your ${model.fullName} today`}
        whatsappMessage={`Hi, I want the on road price and current offer for the ${model.fullName} in Bhubaneswar.`}
      />
    </>
  );
}
