import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import CityGrid from "@/components/CityGrid";
import Faqs from "@/components/Faqs";
import JsonLd from "@/components/JsonLd";
import LeadForm from "@/components/LeadForm";
import ModelCard from "@/components/ModelCard";
import OffersGrid from "@/components/OffersGrid";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
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
    description: `Volkswagen offers, on road price and free test drive for buyers in ${city.name}, ${city.district} district. Taigun, Virtus, Tayron R-Line, Tiguan R-Line and Golf GTI delivered to ${city.name} from our Bhubaneswar showroom.`,
    path: `/volkswagen-showroom/${city.slug}`,
    keywords: [
      `volkswagen ${city.name.toLowerCase()}`,
      `volkswagen showroom in ${city.name.toLowerCase()}`,
      `volkswagen price in ${city.name.toLowerCase()}`,
      `volkswagen offers ${city.name.toLowerCase()}`,
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
    { name: "Locations", path: "/volkswagen-showroom" },
    { name: city.name, path: `/volkswagen-showroom/${city.slug}` },
  ];

  return (
    <>
      <JsonLd data={[localBusinessForCity(city.name, city.slug), breadcrumbSchema(crumbs), faqSchema(faqs)]} />

      <PageHero
        crumbs={crumbs}
        kicker={`${city.district} district, Odisha`}
        title={`Volkswagen in ${city.name}`}
        lead={city.intro}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#enquiry">Get my on road price</Button>
          <Button href="/book-test-drive" variant="outline">
            Book a test drive
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-hairline bg-mist">
        <div className="shell grid gap-px bg-hairline py-px sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "District", value: city.district },
            { label: "From our showroom", value: city.distanceKm === 0 ? "In city" : `${city.distanceKm} km` },
            { label: "Drive time", value: city.distanceKm === 0 ? "You are here" : city.driveTime },
            { label: "Home test drive", value: "Available" },
          ].map((item) => (
            <div key={item.label} className="bg-mist px-2 py-8 lg:px-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{item.label}</p>
              <p className="mt-3 font-display text-xl font-light text-vw-blue">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader kicker={`Buying in ${city.name}`} title={`What ${city.name} customers ask us for`} />
            <Reveal delay={80} className="mt-8 grid gap-6 text-base leading-relaxed text-ink-soft">
              <p>{city.note}</p>
              <p>
                We cover the whole of {city.district} district, including {city.areas.slice(0, -1).join(", ")} and{" "}
                {city.areas[city.areas.length - 1]}. Landmarks our delivery team knows well here include{" "}
                {city.landmarks.slice(0, 3).join(", ")}.
              </p>
              <p>
                Road tax and registration in {city.name} follow the Odisha state structure, so the on road price is
                broadly the same as in Bhubaneswar. What changes month to month is the scheme, which is why we always
                send the current figure in writing before you book.
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link href="/offers" className="arrow-link text-sm">
                Current offers <Arrow />
              </Link>
              <Link href="/finance" className="arrow-link text-sm">
                Calculate EMI <Arrow />
              </Link>
              <Link href="/service" className="arrow-link text-sm">
                Service and support <Arrow />
              </Link>
            </Reveal>
          </div>

          <div>
            <p className="kicker">Most popular here</p>
            <Reveal delay={100} className="mt-8 max-w-md">
              <ModelCard model={featured} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader
            kicker={`Benefits for ${city.name}`}
            title="Every scheme running in Bhubaneswar applies here"
            lead={`Buyers from ${city.name} get the same cash benefit, exchange bonus, corporate discount and finance options.`}
          />
          <Reveal className="mt-14">
            <OffersGrid />
          </Reveal>
          <p className="mt-8 text-xs text-ink-faint">{site.offerValidity}</p>
        </div>
      </section>

      <section id="enquiry" className="scroll-mt-24 bg-vw-blue text-white">
        <div className="shell band grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.9fr)] lg:gap-20">
          <SectionHeader
            tone="light"
            kicker="Enquire"
            title={`Book your Volkswagen in ${city.name}`}
            lead="Share your details and we will send the on road price, the running offer and the delivery timeline for your town."
          />
          <Reveal delay={120}>
            <LeadForm
              source={`city-${city.slug}`}
              defaultCity={city.name}
              heading={`${city.name} enquiry`}
              subheading="A Brand Advisor will call you with pricing and availability."
              ctaLabel="Get my price"
            />
          </Reveal>
        </div>
      </section>

      <Faqs faqs={faqs} title={`Volkswagen in ${city.name}: common questions`} kicker="Local questions" />

      <section className="band-tight border-t border-hairline">
        <div className="shell">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">Other towns we serve</h2>
          <div className="mt-8">
            <CityGrid exclude={city.slug} limit={9} />
          </div>
        </div>
      </section>
    </>
  );
}
