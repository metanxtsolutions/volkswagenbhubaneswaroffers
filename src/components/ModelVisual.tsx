import Image from "next/image";
import CarArt from "./CarArt";
import type { Model } from "@/data/models";
import { findModelImage } from "@/lib/media";

const shapeFor = (bodyType: string) =>
  bodyType.toLowerCase().includes("sedan")
    ? "sedan"
    : bodyType.toLowerCase().includes("hatch")
      ? "hatch"
      : "suv";

type Props = {
  model: Model;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Adds a floor reflection under the illustration. Used on large hero slots. */
  reflection?: boolean;
};

/**
 * Renders official photography when a file exists in public/models, otherwise a
 * studio treatment of the vector illustration. Server component: it touches the
 * filesystem, so it must not be imported from a client component.
 */
export default function ModelVisual({
  model,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 92vw, 520px",
  reflection = false,
}: Props) {
  const source = model.imageUrl ?? findModelImage(model.slug);

  if (source) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={source}
          alt={`${model.fullName} available at our Bhubaneswar showroom`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }

  const shape = shapeFor(model.bodyType);

  return (
    <div className={`relative ${className}`}>
      <CarArt shape={shape} label={model.fullName} paint={model.paint} className="h-full w-full" />
      {reflection ? (
        <div
          className="pointer-events-none absolute inset-x-0 top-[78%] h-[38%] scale-y-[-1] opacity-[0.16] blur-[1px]"
          style={{ maskImage: "linear-gradient(to top, transparent 4%, black 80%)" }}
          aria-hidden
        >
          <CarArt shape={shape} paint={model.paint} className="h-full w-full" />
        </div>
      ) : null}
    </div>
  );
}
