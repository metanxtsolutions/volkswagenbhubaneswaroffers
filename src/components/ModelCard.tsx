import Link from "next/link";
import CarArt from "./CarArt";
import type { Model } from "@/data/models";

const shapeFor = (bodyType: string) =>
  bodyType.toLowerCase().includes("sedan") ? "sedan" : bodyType.toLowerCase().includes("hatch") ? "hatch" : "suv";

export default function ModelCard({ model }: { model: Model }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-vw-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative bg-gradient-to-br ${model.accent} px-5 pt-5`}>
        {model.badge ? (
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-vw-blue">
            {model.badge}
          </span>
        ) : null}
        <CarArt
          shape={shapeFor(model.bodyType)}
          label={model.fullName}
          className="mx-auto h-40 w-full max-w-[320px] drop-shadow-lg transition group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-vw-cyan-dark">{model.bodyType}</p>
        <h3 className="mt-1 text-xl font-bold text-vw-blue">{model.fullName}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{model.tagline}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-vw-line pt-4 text-sm">
          <div>
            <dt className="text-xs text-slate-500">Starting at</dt>
            <dd className="font-bold text-vw-blue">{model.priceFrom}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">EMI from</dt>
            <dd className="font-bold text-vw-blue">{model.emiFrom}</dd>
          </div>
        </dl>

        <p className="mt-4 rounded-lg bg-vw-grey px-3 py-2 text-xs font-medium text-slate-700">{model.offer}</p>

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
