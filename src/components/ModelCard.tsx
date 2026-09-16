import Link from "next/link";
import Arrow from "./Arrow";
import ModelVisual from "./ModelVisual";
import type { Model } from "@/data/models";

/**
 * Flat OEM style card: hairline edge, mist stage behind the vehicle, no shadow.
 * Hover scales the car, not the card.
 */
export default function ModelCard({ model, priority = false }: { model: Model; priority?: boolean }) {
  return (
    <article className="group flex h-full flex-col border border-hairline bg-white transition-colors duration-300 hover:border-vw-blue/30">
      <Link href={`/models/${model.slug}`} className="block" aria-label={`${model.fullName} details`}>
        <div className="stage relative overflow-hidden px-6 pb-2 pt-8">
          {model.badge ? (
            <span className="absolute left-6 top-6 z-10 bg-vw-blue px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              {model.badge}
            </span>
          ) : null}
          <ModelVisual
            model={model}
            priority={priority}
            className="mx-auto aspect-[16/7] w-full max-w-[380px] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">{model.bodyType}</p>
        <h3 className="mt-2 min-h-[2.6em] text-title font-light leading-[1.3]">
          <Link href={`/models/${model.slug}`} className="transition-colors hover:text-vw-cyan-deep">
            {model.fullName}
          </Link>
        </h3>
        <p className="mt-3 min-h-[2.8em] text-sm leading-relaxed text-ink-soft">{model.tagline}</p>

        <dl className="mt-6 grid grid-cols-2 gap-5 rule-top pt-5 text-sm">
          <div>
            <dt className="text-xs text-ink-faint">Starting at</dt>
            <dd className="mt-1 font-display text-lg font-normal text-vw-blue">{model.priceFrom}</dd>
          </div>
          <div>
            <dt className="text-xs text-ink-faint">EMI from</dt>
            <dd className="mt-1 font-display text-lg font-normal text-vw-blue">{model.emiFrom}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
          <Link href={`/models/${model.slug}`} className="arrow-link text-sm">
            Explore <Arrow />
          </Link>
          <Link href={`/book-test-drive?model=${model.slug}`} className="arrow-link text-sm">
            Test drive <Arrow />
          </Link>
        </div>
      </div>
    </article>
  );
}
