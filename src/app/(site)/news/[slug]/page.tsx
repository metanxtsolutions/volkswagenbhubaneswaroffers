import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { articleBySlug, articles, formatArticleDate } from "@/data/news";
import { absoluteUrl, site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.summary,
    path: `/news/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: article.title, path: `/news/${article.slug}` },
  ];

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName },
    mainEntityOfPage: absoluteUrl(`/news/${article.slug}`),
  };

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema(crumbs)]} />

      <PageHero
        crumbs={crumbs}
        kicker={`${article.category} | ${formatArticleDate(article.date)}`}
        title={article.title}
        lead={article.summary}
      />

      <article className="band">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-20">
          <Reveal className="max-w-2xl">
            <div className="grid gap-7 text-base leading-relaxed text-ink-soft">
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 border-t border-hairline pt-8">
              <p className="text-sm text-ink-soft">
                Questions about anything here? Our Brand Advisors will give you a straight answer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/contact">Contact the showroom</Button>
                <Button href="/book-test-drive" variant="outline">
                  Book a test drive
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} as="div">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">More stories</p>
            <ul className="mt-6 border-t border-hairline">
              {related.map((item) => (
                <li key={item.slug} className="border-b border-hairline py-5">
                  <Link href={`/news/${item.slug}`} className="group block">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-vw-cyan-deep">{item.category}</p>
                    <p className="mt-2 text-base font-light text-vw-blue transition-colors group-hover:text-vw-cyan-deep">
                      {item.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/news" className="arrow-link mt-7 text-sm">
              All news <Arrow />
            </Link>
          </Reveal>
        </div>
      </article>
    </>
  );
}
