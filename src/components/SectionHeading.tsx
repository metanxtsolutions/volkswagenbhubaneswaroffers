type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
}: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowRow = align === "center" ? "justify-center" : "justify-start";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className={`eyebrow mb-3 flex items-center gap-2 ${eyebrowRow}`}>
          <span className="inline-block h-px w-6 bg-vw-cyan-dark/50" aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <Tag className="text-[28px] font-extrabold leading-[1.15] text-vw-blue sm:text-4xl">{title}</Tag>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
