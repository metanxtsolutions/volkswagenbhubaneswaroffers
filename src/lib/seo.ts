import type { Metadata } from "next";
import { absoluteUrl, site } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
};

export function buildMetadata({ title, description, path, keywords, noindex }: SeoInput): Metadata {
  const url = absoluteUrl(path);
  return {
    // Absolute so each page controls its full title tag and stays inside the
    // length Google actually displays.
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true, nocache: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
