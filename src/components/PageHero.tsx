import Link from "next/link";
import Reveal from "./Reveal";

type Crumb = { name: string; path: string };

/**
 * Standard inner page opening: breadcrumb, kicker, light headline, lead
 * paragraph, optional actions. Keeps every section of the site consistent.
 */
export default function PageHero({
  kicker,
  title,
  lead,
  crumbs,
  tone = "light",
  children,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  tone?: "light" | "dark";
  children?: React.ReactNode;
}) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "stage-dark text-white" : "border-b border-hairline bg-white"}>
      <div className="shell pb-14 pt-10 md:pb-20 md:pt-14">
        {crumbs ? (
          <nav aria-label="Breadcrumb">
            <ol className={`flex flex-wrap items-center gap-2 text-xs ${dark ? "text-white/50" : "text-ink-faint"}`}>
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {last ? (
                      <span className={dark ? "text-white/80" : "text-ink-soft"}>{crumb.name}</span>
                    ) : (
                      <>
                        <Link href={crumb.path} className="transition-colors hover:text-vw-cyan">
                          {crumb.name}
                        </Link>
                        <span aria-hidden>/</span>
                      </>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <Reveal className="mt-8 max-w-4xl">
          {kicker ? <p className={dark ? "kicker-light" : "kicker"}>{kicker}</p> : null}
          <h1 className={`mt-5 text-display font-extralight ${dark ? "text-white" : "text-vw-blue"}`}>{title}</h1>
          {lead ? (
            <p className={`mt-6 max-w-2xl text-lead font-light ${dark ? "text-white/70" : "text-ink-soft"}`}>{lead}</p>
          ) : null}
          {children ? <div className="mt-9">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
