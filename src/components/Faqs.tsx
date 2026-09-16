import type { Faq } from "@/data/faqs";
import SectionHeading from "./SectionHeading";

export default function Faqs({
  faqs,
  title = "Frequently asked questions",
  subtitle,
  eyebrow = "Good to know",
}: {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-20">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-vw-line rounded-2xl border border-vw-line bg-white">
        {faqs.map((faq) => (
          <details key={faq.q} className="group px-5 py-4 sm:px-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-vw-blue marker:hidden">
              {faq.q}
              <span
                aria-hidden
                className="mt-0.5 shrink-0 text-xl leading-none text-vw-cyan-dark transition group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
