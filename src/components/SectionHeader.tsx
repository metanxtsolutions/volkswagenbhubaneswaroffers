import Reveal from "./Reveal";

type Props = {
  kicker?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h2" | "h3";
  className?: string;
};

export default function SectionHeader({
  kicker,
  title,
  lead,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className = "",
}: Props) {
  const centered = align === "center";
  const titleColor = tone === "light" ? "text-white" : "text-vw-blue";
  const leadColor = tone === "light" ? "text-white/70" : "text-ink-soft";

  return (
    <Reveal className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {kicker ? (
        <p className={tone === "light" ? "kicker-light" : "kicker"}>
          <span className="inline-block h-px w-8 bg-current opacity-50" aria-hidden />
          {kicker}
        </p>
      ) : null}
      <Tag className={`mt-5 text-headline font-light ${titleColor}`}>{title}</Tag>
      {lead ? <p className={`mt-5 text-lead font-light ${leadColor}`}>{lead}</p> : null}
    </Reveal>
  );
}
