import Logo from "@/components/Logo";
import { locations, site, telHref } from "@/data/site";

/**
 * Distraction free shell for paid traffic. No site navigation, one phone
 * action, and a compact legal footer, so every click points at the form.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-hairline bg-white/95 backdrop-blur-xl">
        <div className="shell flex h-[68px] items-center justify-between gap-4">
          <Logo />
          <a
            href={telHref}
            className="rounded-full bg-vw-blue px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-vw-blue-soft sm:px-7"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main className="pb-16 md:pb-0">{children}</main>

      <footer className="border-t border-hairline bg-mist">
        <div className="shell py-12">
          <div className="grid gap-8 sm:grid-cols-2">
            {locations.map((location) => (
              <div key={location.id}>
                <p className="kicker">{location.kind}</p>
                <address className="mt-3 not-italic text-sm leading-relaxed text-ink-soft">
                  {location.street}
                  <br />
                  {location.locality}, {location.region} {location.postalCode}
                </address>
                <p className="mt-2 text-sm">
                  <a href={`tel:${location.phone}`} className="text-vw-blue underline underline-offset-4">
                    {location.phoneDisplay}
                  </a>
                </p>
                <p className="mt-1 text-xs text-ink-faint">
                  {location.hours.map((slot) => `${slot.days}: ${slot.time}`).join(" | ")}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl text-[11px] leading-relaxed text-ink-faint">
            Operated by an authorised Volkswagen sales and service partner for Bhubaneswar and Odisha. This is not the
            official national website of Volkswagen India. Volkswagen and the model names used here are trademarks of
            Volkswagen AG. Prices, offers and specifications are indicative, apply for a limited period and can change
            without notice. Confirm the final on road price with our sales team before booking.
          </p>
          <p className="mt-4 text-[11px] text-ink-faint">
            <a href="/privacy-policy" className="underline underline-offset-4 hover:text-vw-blue">
              Privacy policy
            </a>
            <span className="mx-3">|</span>
            <a href="/terms" className="underline underline-offset-4 hover:text-vw-blue">
              Terms of use
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
