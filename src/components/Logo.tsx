/**
 * Dealership monogram. Deliberately not the Volkswagen roundel: that mark may
 * only be used in the form and placement the manufacturer's brand guidelines
 * allow, so the site identifies the dealership by name instead. Swap this for
 * the approved dealer lockup when the brand team supplies it.
 */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const ring = tone === "light" ? "border-white text-white" : "border-vw-blue text-vw-blue";
  const name = tone === "light" ? "text-white" : "text-vw-blue";
  const sub = tone === "light" ? "text-white/60" : "text-ink-faint";

  return (
    <span className="flex items-center gap-3">
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${ring} font-display text-[13px] font-medium tracking-tight`}
      >
        VW
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[15px] font-medium tracking-tight ${name}`}>
          Volkswagen Bhubaneswar
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.18em] ${sub}`}>
          Authorised dealer
        </span>
      </span>
    </span>
  );
}
