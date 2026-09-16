import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Ad landing pages and the post submit page stay out of organic search.
        disallow: ["/api/", "/lp/", "/thank-you"],
      },
      {
        // Google Ads crawlers must reach the landing pages, otherwise ads get
        // disapproved for an uncrawlable destination.
        userAgent: ["AdsBot-Google", "AdsBot-Google-Mobile"],
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
