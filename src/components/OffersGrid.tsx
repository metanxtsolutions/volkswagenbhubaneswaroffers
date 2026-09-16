import { offers } from "@/data/offers";
import Reveal from "./Reveal";

export default function OffersGrid() {
  return (
    <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2 xl:grid-cols-3">
      {offers.map((offer, index) => (
        <Reveal key={offer.id} delay={index * 60} className="bg-white p-8 lg:p-10">
          <p className="text-[11px] uppercase tracking-[0.14em] text-ink-faint">{offer.title}</p>
          <p className="mt-4 font-display text-2xl font-light text-vw-blue">{offer.value}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{offer.detail}</p>
          <p className="mt-6 border-t border-hairline pt-4 text-xs text-ink-faint">Applies to {offer.appliesTo}</p>
        </Reveal>
      ))}
    </div>
  );
}
