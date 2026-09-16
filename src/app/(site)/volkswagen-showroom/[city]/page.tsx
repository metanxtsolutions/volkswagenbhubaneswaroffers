import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CityGrid from "@/components/CityGrid";
import CtaBand from "@/components/CtaBand";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ModelCard from "@/components/ModelCard";
import OffersGrid from "@/components/OffersGrid";
import SectionHeading from "@/components/SectionHeading";
import { cities, cityBySlug } from "@/data/cities";
import { cityFaqs } from "@/data/faqs";
import { modelBySlug, models } from "@/data/models";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, localBusinessForCity } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { city: slug } = await params;
  const city = cityBySlug(slug);
  if (!city) return {};

  return buildMetadata({
    title: `Volkswagen in ${city.name} | Price, Offers and Test Drive`,
    description: `Volkswagen offers, on road price and free test drive for buyers in ${city.name}, ${city.district} district. Tera, Taigun, Virtus, Tiguan R-Line and Golf GTI delivered to ${city.name} from our Bhubaneswar showroom.`,
    path: `/volkswagen-showroom/${city.slug}`,
    keywords: [
      `volkswagen ${city.name.toLowerCase()}`,
      `volkswagen showroom in ${city.name.toLowerCase()}`,
      `volkswagen price in ${city.name.toLowerCase()}`,
      `volkswagen offers ${city.name.toLowerCase()}`,
      `car showroom ${city.name.toLowerCase()} odisha`,
    ],
  });
}

export default async function CityPage({ params }: Params) {
  const { city: slug } = await params;
  const city = cityBySlug(slug);
  if (!city) notFound();

  const faqs = cityFaqs(city.name, city.distanceKm);
  const featured = modelBySlug(city.popularModel) ?? models[0];
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Odisha locations", path: "/volkswagen-showroom" },
    { name: city.name, path: `/volkswagen-showroom/${city.slug}` },
  ];

  return (
    <>
      <JsonLd data={[localBusinessForCity(city.name, city.slug), breadcrumbSchema(crumbs), faqSchema(faqs)]} />
      <Breadcrumbs items={crumbs} />

      <section className="container-page grid gap-10 py-8 lg:grid-cols-[1.05fr_minmax(340px,0.95fr)] lg:py-12">
        <div>
          <p className="inline-flex rounded-full bg-vw-grey px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-vw-cyan-dark">
            {city.district} district, Odisha
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-vw-blue sm:text-4xl">
            Volkswagen in {city.name}: offers, price and test drive
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{city.intro}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {city.name} is known as {city.knownAs}.{" "}
            {city.distanceKm > 0
              ? `It sits about ${city.distanceKm} km from our Bhubaneswar showroom, roughly ${city.driveTime} by road.`
              : "Our showroom is right here in the city, so walk in any day of the week."}
          </p>

          <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "District", value: city.district },
              { label: "Distance", value: city.distanceKm === 0 ? "In city" : `${city.distanceKm} km` },
              { label: "PIN code", value: city.pin },
              { label: "Home test drive", value: "Available" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-vw-line bg-white p-4">
                <dt className="text-[11px] uppercase tracking-wider text-slate-500">{item.label}</dt>
                <dd className="mt-1 text-sm font-bold text-vw-blue">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="enquiry" className="scroll-mt-24">
          <LeadForm
            source={`city-${city.slug}`}
            defaultCity={city.name}
            heading={`Volkswagen offers for ${city.name}`}
            subheading="Share your details and we will send the on road price and delivery timeline for your town."
            ctaLabel="Get my price"
          />
        </div>
      </section>

      <section className="bg-vw-grey py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-vw-blue sm:text-3xl">
              What {city.name} buyers ask us for
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">{city.note}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              We cover the whole of {city.district} district, including{" "}
              {city.areas.slice(0, -1).join(", ")} and {city.areas[city.areas.length - 1]}. Landmarks our delivery team
              knows well here include {city.landmarks.slice(0, 3).join(", ")}.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Road tax and registration in {city.name} follow the Odisha state structure, so the on road price is
              broadly the same as in Bhubaneswar. The part that changes month to month is the scheme, which is why we
              always send the current figure in writing before you book.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/offers"
                className="rounded-full bg-vw-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-vw-blue-400"
              >
                See current offers
              </Link>
              <Link
                href="/car-loan-emi-calculator"
                className="rounded-full border-2 border-vw-blue px-6 py-3 text-sm font-bold text-vw-blue transition hover:bg-vw-blue hover:text-white"
              >
                Calculate EMI
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-vw-blue sm:text-3xl">Most popular in {city.name}</h2>
            <div className="mt-6 max-w-md">
              <ModelCard model={featured} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow={`Benefits for ${city.name}`}
          title={`Volkswagen offers available to ${city.name} customers`}
          subtitle={`Every scheme running in Bhubaneswar applies to buyers from ${city.name}.`}
        />
        <div className="mt-10">
          <OffersGrid />
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">{site.offerValidity}</p>
      </section>

      <Faqs faqs={faqs} title={`Volkswagen in ${city.name}: common questions`} />

      <section className="container-page pb-16">
        <SectionHeading eyebrow="Nearby" title="Other towns we serve in Odisha" />
        <div className="mt-8">
          <CityGrid exclude={city.slug} limit={9} />
        </div>
      </section>

      <CtaBand
        title={`Book your Volkswagen in ${city.name}`}
        subtitle="Call us for the running offer, the on road price and the delivery date for your town."
        whatsappMessage={`Hi, I am from ${city.name}. Please share the Volkswagen offers and on road price.`}
      />
    </>
  );
}
