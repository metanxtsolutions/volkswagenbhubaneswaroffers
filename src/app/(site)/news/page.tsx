import Link from "next/link";
import Arrow from "@/components/Arrow";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { articles, formatArticleDate } from "@/data/news";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Volkswagen News, Launches and Campaigns in Bhubaneswar",
  description:
    "Launches, offers, ownership guides and showroom campaigns from your authorised Volkswagen dealership in Bhubaneswar.",
  path: "/news",
  keywords: ["volkswagen news india", "volkswagen launch bhubaneswar", "volkswagen campaign odisha"],
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
];

export default function NewsPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageHero
        crumbs={crumbs}
        kicker="News and campaigns"
        title="What is new, and what it means for you."
        lead="Launches, ownership guides and what is happening at the showroom, written for buyers in Odisha rather than for a press release."
      />

      <section className="band">
        <div className="shell">
          <Reveal>
            <Link href={`/news/${lead.slug}`} className="group grid gap-8 border border-hairline lg:grid-cols-2">
              <div className="stage aspect-[16/10] w-full" aria-hidden />
              <div className="p-8 lg:p-12">
                <p className="text-[11px] uppercase tracking-[0.14em] text-vw-cyan-deep">{lead.category}</p>
                <h2 className="mt-5 text-headline font-light transition-colors group-hover:text-vw-cyan-deep">
                  {lead.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-soft">{lead.summary}</p>
                <p className="mt-7 text-xs text-ink-faint">
                  {formatArticleDate(lead.date)} | {lead.readMinutes} min read
                </p>
                <span className="arrow-link mt-7 text-sm">
                  Read the story <Arrow />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="mt-6 grid gap-px border border-hairline bg-hairline lg:grid-cols-3">
            {rest.map((article, index) => (
              <Reveal key={article.slug} delay={index * 70} className="bg-white">
                <Link href={`/news/${article.slug}`} className="group block h-full p-8 lg:p-10">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-vw-cyan-deep">{article.category}</p>
                  <h3 className="mt-5 text-title font-light transition-colors group-hover:text-vw-cyan-deep">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{article.summary}</p>
                  <p className="mt-6 text-xs text-ink-faint">
                    {formatArticleDate(article.date)} | {article.readMinutes} min read
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
