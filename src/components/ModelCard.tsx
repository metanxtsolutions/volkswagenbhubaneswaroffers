import Link from "next/link";
import ModelVisual from "./ModelVisual";
import type { Model } from "@/data/models";

export default function ModelCard({ model }: { model: Model }) {
  return (
    <article className="surface surface-hover group flex flex-col overflow-hidden">
      <div className={`relative bg-gradient-to-br ${model.accent} px-5 pb-1 pt-5`}>
        {model.badge ? (
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-vw-blue">
            {model.badge}
          </span>
        ) : null}
        <ModelVisual
          model={model}
          className="mx-auto h-40 w-full max-w-[330px] transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{model.bodyType}</p>
        <h3 className="mt-1.5 text-xl font-extrabold tracking-tight text-vw-blue">{model.fullName}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{model.tagline}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-vw-line pt-4 text-sm">
          <div>
            <dt className="text-xs text-ink-soft">Starting at</dt>
            <dd className="font-bold text-vw-blue">{model.priceFrom}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink-soft">EMI from</dt>
            <dd className="font-bold text-vw-blue">{model.emiFrom}</dd>
          </div>
        </dl>

        <p className="mt-4 rounded-xl bg-vw-grey px-3.5 py-2.5 text-xs font-medium leading-relaxed text-ink">{model.offer}</p>

        <div className="mt-5 flex gap-2">
          <Link
            href={`/models/${model.slug}`}
            className="flex-1 rounded-full border-2 border-vw-blue px-4 py-2.5 text-center text-sm font-bold text-vw-blue transition hover:bg-vw-blue hover:text-white"
          >
            View details
          </Link>
          <Link
            href={`/book-test-drive?model=${model.slug}`}
            className="flex-1 rounded-full bg-vw-cyan px-4 py-2.5 text-center text-sm font-bold text-vw-blue transition hover:bg-vw-blue hover:text-white"
          >
            Test drive
          </Link>
        </div>
      </div>
    </article>
  );
}
