const points = [
  { value: "5 star", label: "Global NCAP safety on Taigun and Virtus" },
  { value: "Free", label: "Home test drive across Bhubaneswar" },
  { value: "24 hrs", label: "Typical car loan approval" },
  { value: "22+", label: "Odisha towns we deliver to" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-vw-line bg-vw-grey">
      <div className="container-page grid grid-cols-2 gap-6 py-8 sm:py-10 lg:grid-cols-4">
        {points.map((point) => (
          <div key={point.label} className="text-center">
            <p className="text-2xl font-extrabold text-vw-blue sm:text-3xl">{point.value}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{point.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
