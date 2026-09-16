import Link from "next/link";
import { cities } from "@/data/cities";

export default function CityGrid({ exclude, limit }: { exclude?: string; limit?: number }) {
  const list = cities.filter((city) => city.slug !== exclude).slice(0, limit ?? cities.length);

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((city) => (
        <Link
          key={city.slug}
          href={`/volkswagen-showroom/${city.slug}`}
          className="flex items-center justify-between gap-3 rounded-xl border border-vw-line bg-white px-4 py-3.5 transition hover:border-vw-cyan hover:shadow-md"
        >
          <span>
            <span className="block text-sm font-bold text-vw-blue">Volkswagen in {city.name}</span>
            <span className="block text-xs text-slate-500">
              {city.district} district{city.distanceKm > 0 ? ` | ${city.distanceKm} km from showroom` : " | our showroom city"}
            </span>
          </span>
          <span aria-hidden className="text-vw-cyan-dark">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
