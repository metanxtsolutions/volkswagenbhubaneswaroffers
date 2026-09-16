import type { Faq } from "@/data/faqs";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

/**
 * Native details/summary accordion: no JavaScript, works before hydration and
 * stays keyboard accessible by default.
 */
export default function Faqs({
  faqs,
  title = "Frequently asked questions",
  subtitle,
  kicker = "Questions",
  tone = "light",
}: {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
  kicker?: string;
  tone?: "light" | "mist";
}) {
  return (
    <section className={`band ${tone === "mist" ? "bg-mist" : ""}`}>
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <SectionHeader kicker={kicker} title={title} lead={subtitle} />

        <Reveal delay={80} className="border-t border-hairline">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-hairline">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left text-base text-vw-blue transition-colors marker:hidden hover:text-vw-cyan-deep [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden
                  className="relative mt-2 block h-3 w-3 shrink-0 text-vw-cyan-deep"
                >
                  <span className="absolute left-0 top-1/2 block h-px w-3 -translate-y-1/2 bg-current" />
                  <span className="absolute left-1/2 top-0 block h-3 w-px -translate-x-1/2 bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-sm leading-relaxed text-ink-soft">{faq.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
