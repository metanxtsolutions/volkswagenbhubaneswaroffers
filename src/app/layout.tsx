import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { autoDealerSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Volkswagen Offers in Bhubaneswar | Price, EMI and Test Drive",
    template: "%s | Volkswagen Bhubaneswar Offers",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: true, email: true },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  other: {
    "geo.region": "IN-OR",
    "geo.placename": "Bhubaneswar",
    ...(site.geo
      ? {
          "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
          ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
        }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#001e50",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        <JsonLd data={[autoDealerSchema(), websiteSchema()]} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
