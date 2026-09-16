const points = [
  { value: "5 star", label: "Global NCAP safety on Taigun and Virtus" },
  { value: "Free", label: "Home test drive across Bhubaneswar" },
  { value: "24 hrs", label: "Typical car loan approval" },
  { value: "22+", label: "Odisha towns we deliver to" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-vw-line bg-vw-grey">
      <div className="container-page grid grid-cols-2 divide-vw-line py-9 sm:py-11 lg:grid-cols-4 lg:divide-x">
        {points.map((point) => (
          <div key={point.label} className="px-4 py-2 text-center">
            <p className="font-display text-2xl font-extrabold tracking-tight text-vw-blue sm:text-3xl">
              {point.value}
            </p>
            <p className="mx-auto mt-1.5 max-w-[190px] text-xs leading-relaxed text-ink-soft sm:text-sm">
              {point.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
