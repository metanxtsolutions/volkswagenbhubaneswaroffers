import Link from "next/link";
import { cities } from "@/data/cities";
import { models } from "@/data/models";
import { site, telHref } from "@/data/site";

const quickLinks = [
  { label: "Current offers", href: "/offers" },
  { label: "All models", href: "/models" },
  { label: "Book a test drive", href: "/book-test-drive" },
  { label: "EMI calculator", href: "/car-loan-emi-calculator" },
  { label: "On road price", href: "/on-road-price-bhubaneswar" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-vw-blue text-slate-300">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-white text-[13px] font-extrabold text-white">
              VW
            </span>
            <span className="text-base font-bold text-white">Volkswagen Bhubaneswar Offers</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Book your Volkswagen in Bhubaneswar with the running month offer, transparent on road pricing and a free
            home test drive anywhere in Odisha.
          </p>
          <address className="mt-5 not-italic text-sm leading-relaxed">
            {site.address.street}
            <br />
            {site.address.locality}, {site.address.region} {site.address.postalCode}
          </address>
          <p className="mt-4 text-sm">
            <a href={telHref} className="font-bold text-vw-cyan hover:underline">
              {site.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${site.email}`} className="hover:underline">
              {site.email}
            </a>
          </p>
          <p className="mt-3 text-sm">
            Open {site.openingHours.days}, {site.openingHours.time}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Quick links</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-vw-cyan">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Models</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {models.map((model) => (
              <li key={model.slug}>
                <Link href={`/models/${model.slug}`} className="hover:text-vw-cyan">
                  {model.fullName} price
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">We serve across Odisha</h2>
          <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link href={`/volkswagen-showroom/${city.slug}`} className="hover:text-vw-cyan">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-page flex flex-col gap-4 py-6 text-xs leading-relaxed text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-vw-cyan">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-vw-cyan">
              Terms of use
            </Link>
            <Link href="/sitemap.xml" className="hover:text-vw-cyan">
              Sitemap
            </Link>
          </div>
        </div>
        <div className="container-page pb-8 text-[11px] leading-relaxed text-slate-500">
          <p>
            Disclaimer: this website is operated by an authorised Volkswagen sales partner for lead generation in
            Bhubaneswar and Odisha. Volkswagen, the Volkswagen logo and model names are trademarks of Volkswagen AG.
            Prices, offers, specifications and colours shown here are indicative, apply for a limited period and can
            change without notice. Please confirm the final on road price, variant availability and scheme details with
            our sales team before booking.
          </p>
        </div>
      </div>
    </footer>
  );
}
