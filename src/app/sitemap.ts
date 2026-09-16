import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { models } from "@/data/models";
import { absoluteUrl } from "@/data/site";

/**
 * Paid landing pages under /lp are intentionally excluded. They are noindex so
 * they never compete with the SEO pages for the same keywords.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/offers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/models", priority: 0.9, changeFrequency: "monthly" },
    { path: "/volkswagen-showroom", priority: 0.8, changeFrequency: "monthly" },
    { path: "/on-road-price-bhubaneswar", priority: 0.8, changeFrequency: "monthly" },
    { path: "/car-loan-emi-calculator", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book-test-drive", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/about", priority: 0.5, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...models.map((model) => ({
      url: absoluteUrl(`/models/${model.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...cities.map((city) => ({
      url: absoluteUrl(`/volkswagen-showroom/${city.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: city.distanceKm <= 100 ? 0.8 : 0.6,
    })),
  ];
}
