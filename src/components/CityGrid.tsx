import Link from "next/link";
import Arrow from "./Arrow";
import { cities } from "@/data/cities";

export default function CityGrid({ exclude, limit }: { exclude?: string; limit?: number }) {
  const list = cities.filter((city) => city.slug !== exclude).slice(0, limit ?? cities.length);

  return (
    <div className="grid gap-px border border-hairline bg-hairline sm:grid-cols-2 xl:grid-cols-3">
      {list.map((city) => (
        <Link
          key={city.slug}
          href={`/volkswagen-showroom/${city.slug}`}
          className="group flex items-center justify-between gap-4 bg-white px-6 py-5 transition-colors hover:bg-mist"
        >
          <span>
            <span className="block text-base font-light text-vw-blue">Volkswagen in {city.name}</span>
            <span className="mt-1 block text-xs text-ink-faint">
              {city.district} district
              {city.distanceKm > 0 ? ` | ${city.distanceKm} km from the showroom` : " | our showroom city"}
            </span>
          </span>
          <Arrow className="shrink-0 text-vw-cyan-deep transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}
