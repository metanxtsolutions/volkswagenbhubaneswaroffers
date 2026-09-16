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
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-vw-cyan-dark">{eyebrow}</p>
      ) : null}
      <Tag className="text-3xl font-bold leading-tight text-vw-blue sm:text-4xl">{title}</Tag>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
