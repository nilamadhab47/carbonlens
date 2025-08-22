import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "ESG reporting",
    "BRSR compliance",
    "CSRD reporting",
    "carbon accounting",
    "sustainability reporting",
    "NASA Harvest",
    "emission factors",
    "India ESG",
  ],
  authors: [
    {
      name: "CarbonLens Team",
    },
  ],
  creator: "CarbonLens",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@carbonlens",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "250000",
    priceCurrency: "INR",
    description: "Founder Pilot Program - 6 months access",
  },
  creator: {
    "@type": "Organization",
    name: "CarbonLens",
    url: siteConfig.url,
  },
  featureList: [
    "BRSR compliance reporting",
    "NASA Harvest satellite data integration",
    "Automated carbon accounting",
    "Scope 1, 2, 3 emissions calculation",
    "Audit-ready documentation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background`}
      >
        <div className="relative min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
