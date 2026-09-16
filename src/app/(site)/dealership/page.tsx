import Link from "next/link";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { cities } from "@/data/cities";
import { usps } from "@/data/offers";
import { warrantyHeadline } from "@/data/ownership";
import { locations, site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Volkswagen Bhubaneswar | Authorised Dealer, Showroom and Workshop",
  description:
    "Your authorised Volkswagen dealership for Bhubaneswar and Odisha. Sales showroom at Pahal on NH 16, service centre at Bhanpur, Volkswagen trained teams and delivery across the state.",
  path: "/dealership",
  keywords: [
    "volkswagen dealership bhubaneswar",
    "authorised volkswagen dealer odisha",
    "volkswagen showroom pahal nh16",
  ],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Dealership", path: "/dealership" },
];

export default function DealershipPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        kicker="The dealership"
        title="An authorised Volkswagen dealer, built around Odisha."
        lead="We sell, finance, register, deliver and service Volkswagen cars for Bhubaneswar and the rest of the state. Two locations on NH 16, one team, and a single point of contact from your first call to your first service."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">Contact us</Button>
          <Button href="/book-test-drive" variant="outline">
            Book a test drive
          </Button>
        </div>
      </PageHero>

      <section className="border-b border-hairline bg-vw-blue text-white">
        <div className="shell grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "2", label: "Locations on NH 16, sales and service" },
            { value: `${cities.length}`, label: "Odisha towns we deliver to" },
            { value: warrantyHeadline.years, label: "Standard warranty on every new car" },
            { value: "24x7", label: "Roadside assistance across India" },
          ].map((stat) => (
            <div key={stat.label} className="bg-vw-blue px-6 py-10 lg:px-8">
              <p className="font-display text-3xl font-extralight">{stat.value}</p>
              <p className="mt-3 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <SectionHeader kicker="How we work" title="What being authorised actually changes" />
          <Reveal delay={80}>
            <div className="grid gap-8 text-base leading-relaxed text-ink-soft">
              <p>
                An authorised dealership is bound to the manufacturer's standards, and that shows up in ordinary
                places: technicians trained by Volkswagen rather than on the job, manufacturer diagnostic equipment
                instead of generic scanners, genuine parts from the official supply chain, and warranty work that is
                actually honoured because it was carried out correctly.
              </p>
              <p>
                It also changes what happens when something goes wrong. A car bought and serviced inside the network
                keeps its warranty intact, its service history verifiable and its resale value defensible. That is the
                part buyers tend to appreciate three years in rather than on the day they sign.
              </p>
              <p>
                What we add on top is local. We know which roads in this state punish a car and which routes buyers
                actually drive. We arrange doorstep documentation for customers in Berhampur and Rourkela who should
                not have to lose two days travelling. And we put one consultant on your file so you are not repeating
                yourself to four different people.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band bg-mist">
        <div className="shell">
          <SectionHeader kicker="Our locations" title="Sales at Pahal, service at Bhanpur" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline lg:grid-cols-2">
            {locations.map((location, index) => (
              <Reveal key={location.id} delay={index * 90} className="bg-white p-8 lg:p-12">
                <p className="kicker">{location.kind}</p>
                <h3 className="mt-5 text-title font-light">{location.name}</h3>
                <address className="mt-5 not-italic text-base leading-relaxed text-ink-soft">
                  {location.street}
                  <br />
                  {location.locality}, {location.region} {location.postalCode}
                </address>
                <dl className="mt-6 grid gap-2 border-t border-hairline pt-6 text-sm">
                  {location.hours.map((slot) => (
                    <div key={slot.days} className="flex justify-between gap-6">
                      <dt className="text-ink-soft">{slot.days}</dt>
                      <dd className="text-vw-blue">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a href={`tel:${location.phone}`} className="arrow-link text-sm">
                    {location.phoneDisplay} <Arrow />
                  </a>
                  <a href={location.mapsUrl} target="_blank" rel="noopener" className="arrow-link text-sm">
                    Directions <Arrow />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <SectionHeader kicker="Our promises" title="Four things we hold ourselves to" />
          <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-4">
            {usps.map((usp, index) => (
              <Reveal key={usp.title} delay={index * 70} className="bg-white p-8 lg:p-10">
                <p className="font-display text-sm font-light text-vw-cyan-deep">0{index + 1}</p>
                <h3 className="mt-5 text-title font-light">{usp.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{usp.detail}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link href="/volkswagen-showroom" className="arrow-link text-sm">
              Where we deliver in Odisha <Arrow />
            </Link>
            <Link href="/reviews" className="arrow-link text-sm">
              Owner reviews <Arrow />
            </Link>
            <Link href="/news" className="arrow-link text-sm">
              News and campaigns <Arrow />
            </Link>
          </Reveal>
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-ink-faint">
            {site.legalName} is an authorised Volkswagen sales and service partner. Volkswagen, the Volkswagen logo and
            all model names are trademarks of Volkswagen AG, used here to describe the vehicles we retail and service.
          </p>
        </div>
      </section>
    </>
  );
}
