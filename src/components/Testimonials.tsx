import { testimonials } from "@/data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="container-page py-16 sm:py-20">
      <SectionHeading
        eyebrow="Customer stories"
        title="What Volkswagen owners in Odisha tell us"
        subtitle="Real buying experiences from Bhubaneswar, Cuttack and beyond."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((item) => (
          <figure key={item.name} className="surface flex h-full flex-col p-5">
            <div className="text-vw-cyan-dark" aria-label={`${item.rating} out of 5 stars`}>
              {"★".repeat(item.rating)}
            </div>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.quote}</blockquote>
            <figcaption className="mt-4 border-t border-vw-line pt-3 text-sm">
              <span className="font-bold text-vw-blue">{item.name}</span>
              <span className="block text-xs text-slate-500">
                {item.city} | {item.model}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
