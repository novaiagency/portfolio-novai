import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

const montserrat = Montserrat({
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  subsets: ["latin"],
  variable: "--font-ms",
});

export const metadata: Metadata = {
  title: {
    default: "Novai Agency | Agents & Automatisation IA",
    template: "%s | Novai Agency"
  },
  description: "Optimisez vos processus avec des agents IA avancés et des automatisations intelligentes via Make et n8n, conçus pour booster votre productivité et efficacité.",
  keywords: ["automatisation IA", "agents IA", "Make", "n8n", "automatisation workflow", "intelligence artificielle", "bots IA", "productivité IA", "automatisation entreprise", "intégration IA"],
  authors: [{ name: "Novai Agency" }],
  creator: "Novai Agency",
  publisher: "Novai Agency",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://novai.agency",
    siteName: "Novai Agency",
    title: "Novai Agency | Agents & Automatisation IA",
    description: "Optimisez vos processus avec des agents IA avancés et des automatisations intelligentes via Make et n8n, conçus pour booster votre productivité et efficacité.",
    images: [
      {
        url: "https://novai.agency/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Novai Agency - Agents & Automatisation IA"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@novaiagency",
    creator: "@novaiagency",
    title: "Novai Agency | Agents & Automatisation IA",
    description: "Optimisez vos processus avec des agents IA avancés et des automatisations intelligentes via Make et n8n, conçus pour booster votre productivité et efficacité.",
    images: ["https://novai.agency/images/og-image.webp"],
  },
  verification: {
    google: "VeUQ003CQJEmqI8Jhat7AsydV1Lf4NOuzEaViRaR5BQ",
  },
  alternates: {
    canonical: "https://novai.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={cn(montserrat.variable, "font-montserrat relative text-white overscroll-x-hidden")} suppressHydrationWarning>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
