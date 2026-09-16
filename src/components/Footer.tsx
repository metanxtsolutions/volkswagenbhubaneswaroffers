import Link from "next/link";
import Arrow from "./Arrow";
import Logo from "./Logo";
import { cities } from "@/data/cities";
import { models } from "@/data/models";
import { locations, site } from "@/data/site";

const columns = [
  {
    title: "Models",
    links: models.map((model) => ({ label: model.fullName, href: `/models/${model.slug}` })),
  },
  {
    title: "Buying",
    links: [
      { label: "Current offers", href: "/offers" },
      { label: "Book a test drive", href: "/book-test-drive" },
      { label: "Finance and EMI", href: "/finance" },
      { label: "On road price", href: "/on-road-price-bhubaneswar" },
      { label: "Das WeltAuto", href: "/used-cars" },
    ],
  },
  {
    title: "Owning",
    links: [
      { label: "Service and maintenance", href: "/service" },
      { label: "Genuine accessories", href: "/accessories" },
      { label: "News and campaigns", href: "/news" },
      { label: "Owner reviews", href: "/reviews" },
    ],
  },
  {
    title: "Dealership",
    links: [
      { label: "About us", href: "/dealership" },
      { label: "Odisha locations", href: "/volkswagen-showroom" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-vw-blue text-white">
      <div className="shell grid gap-14 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/60">
            Authorised Volkswagen sales and service partner for Bhubaneswar and Odisha. Transparent on road pricing,
            finance arranged in house, and delivery across the state.
          </p>

          <div className="mt-10 grid gap-8">
            {locations.map((location) => (
              <div key={location.id}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-vw-cyan">{location.kind}</p>
                <address className="mt-3 not-italic text-sm leading-relaxed text-white/70">
                  {location.street}
                  <br />
                  {location.locality}, {location.region} {location.postalCode}
                </address>
                <p className="mt-2">
                  <a href={`tel:${location.phone}`} className="text-sm text-white transition-colors hover:text-vw-cyan">
                    {location.phoneDisplay}
                  </a>
                </p>
                <p className="mt-1 text-xs text-white/45">
                  {location.hours.map((slot) => `${slot.days}: ${slot.time}`).join(" | ")}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm">
            <a href={`mailto:${site.email}`} className="text-white/70 transition-colors hover:text-vw-cyan">
              {site.email}
            </a>
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">{column.title}</h2>
              <ul className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-vw-cyan">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell py-10">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
            Volkswagen across Odisha
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/volkswagen-showroom/${city.slug}`}
                  className="text-xs text-white/55 transition-colors hover:text-vw-cyan"
                >
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/volkswagen-showroom" className="mt-6 inline-flex items-center gap-2 text-xs text-vw-cyan">
            All locations <Arrow />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-5 py-8 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-vw-cyan">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-vw-cyan">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="transition-colors hover:text-vw-cyan">
              Sitemap
            </Link>
          </div>
        </div>
        <div className="shell pb-10 text-[11px] leading-relaxed text-white/35">
          <p>
            This website is operated by an authorised Volkswagen sales and service partner for Bhubaneswar and Odisha.
            It is not the official national website of Volkswagen India. Volkswagen, the Volkswagen logo and all model
            names are trademarks of Volkswagen AG, used here to describe the vehicles we retail and service. Prices,
            offers, specifications, colours and availability shown here are indicative, apply for a limited period and
            can change without notice. Please confirm the final on road price and specification with our sales team
            before booking.
          </p>
        </div>
      </div>
    </footer>
  );
}
