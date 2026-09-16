"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { site, telHref, whatsappHref } from "@/data/site";
import { trackContact } from "@/lib/analytics";

const primary = [
  { label: "Models", href: "/models" },
  { label: "Offers", href: "/offers" },
  { label: "Finance", href: "/finance" },
  { label: "Service", href: "/service" },
  { label: "Accessories", href: "/accessories" },
  { label: "Das WeltAuto", href: "/used-cars" },
  { label: "Dealership", href: "/dealership" },
];

const utility = [
  { label: "Locations", href: "/volkswagen-showroom" },
  { label: "Reviews", href: "/reviews" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar: dealer actions, the OEM convention */}
      <div className="hidden bg-vw-blue text-white lg:block">
        <div className="shell flex h-10 items-center justify-between text-xs">
          <p className="text-white/70">
            {site.openingHours.days}, {site.openingHours.time} | {site.address.street.split(",").slice(-1)[0].trim()},{" "}
            {site.address.locality}
          </p>
          <div className="flex items-center gap-6">
            {utility.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/70 transition-colors hover:text-vw-cyan">
                {item.label}
              </Link>
            ))}
            <a
              href={telHref}
              onClick={() => trackContact("call", "utility-bar")}
              className="font-medium text-white transition-colors hover:text-vw-cyan"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b bg-white/95 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 ${
          scrolled ? "border-hairline" : "border-transparent"
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-6 lg:h-[76px]">
          <Link href="/" aria-label="Volkswagen Bhubaneswar home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Main">
            {primary.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-[13px] font-medium tracking-wide transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-vw-cyan after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    active ? "text-vw-blue after:scale-x-100" : "text-ink-soft hover:text-vw-blue"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/book-test-drive"
              className="hidden rounded-full bg-vw-blue px-6 py-3 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-vw-blue-soft sm:inline-flex"
            >
              Book a test drive
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center border border-hairline text-vw-blue transition-colors hover:border-vw-blue xl:hidden"
            >
              <span className="relative block h-3 w-5" aria-hidden>
                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto border-t border-hairline bg-white xl:hidden">
          <nav className="shell py-6" aria-label="Mobile">
            <ul className="grid">
              {primary.map((item) => (
                <li key={item.href} className="rule-top first:border-t-0">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-4 font-display text-xl font-light text-vw-blue"
                  >
                    {item.label}
                    <span aria-hidden className="text-vw-cyan">
                      +
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-6 grid gap-1 border-t border-hairline pt-6">
              {utility.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block py-2.5 text-sm text-ink-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 pb-10">
              <Link
                href="/book-test-drive"
                className="rounded-full bg-vw-blue px-6 py-4 text-center text-sm font-medium text-white"
              >
                Book a test drive
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={telHref}
                  onClick={() => trackContact("call", "mobile-menu")}
                  className="rounded-full border border-vw-blue px-6 py-4 text-center text-sm font-medium text-vw-blue"
                >
                  Call
                </a>
                <a
                  href={whatsappHref("Hi, I would like to know more about Volkswagen cars in Bhubaneswar.")}
                  onClick={() => trackContact("whatsapp", "mobile-menu")}
                  className="rounded-full border border-vw-blue px-6 py-4 text-center text-sm font-medium text-vw-blue"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
