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
};

/**
 * Shows the official photograph when one is available, otherwise the vector
 * placeholder. Server component: it checks the filesystem, so it must not be
 * imported from a client component.
 */
export default function ModelVisual({
  model,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 400px",
}: Props) {
  const source = model.imageUrl ?? findModelImage(model.slug);

  if (source) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={source}
          alt={`${model.fullName} in Bhubaneswar`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }

  return <CarArt shape={shapeFor(model.bodyType)} label={model.fullName} className={className} />;
}
