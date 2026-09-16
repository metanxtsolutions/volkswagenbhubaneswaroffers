import { offers } from "@/data/offers";

const icons: Record<string, string> = {
  cash: "₹",
  exchange: "⇄",
  finance: "%",
  corporate: "★",
  accessory: "✚",
  insurance: "☂",
};

export default function OffersGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer) => (
        <article key={offer.id} className="surface surface-hover p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-vw-blue text-lg font-bold text-vw-cyan">
            <span aria-hidden>{icons[offer.icon]}</span>
          </div>
          <h3 className="mt-4 text-lg font-extrabold tracking-tight text-vw-blue">{offer.title}</h3>
          <p className="mt-1 text-xl font-extrabold text-vw-cyan-dark">{offer.value}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{offer.detail}</p>
          <p className="mt-5 border-t border-vw-line pt-3 text-xs font-semibold uppercase tracking-wider text-ink-soft">Applies to {offer.appliesTo}</p>
        </article>
      ))}
    </div>
  );
}
