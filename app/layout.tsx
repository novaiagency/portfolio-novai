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
<<<<<<< HEAD
    default: "Novai Agency | Agents & Automatisation IA",
    template: "%s | Novai Agency"
  },
  description: "Optimisez vos processus avec des agents IA avancés et des automatisations intelligentes via Make et n8n, conçus pour booster votre productivité et efficacité.",
  keywords: ["automatisation IA", "agents IA", "Make", "n8n", "automatisation workflow", "intelligence artificielle", "bots IA", "productivité IA", "automatisation entreprise", "intégration IA"],
  authors: [{ name: "Novai Agency" }],
  creator: "Novai Agency",
  publisher: "Novai Agency",
=======
    default: "Sejiux | Expert Shopify Headless",
    template: "%s | Sejiux"
  },
  description: "Offrez une expérience headless mémorable à vos clients grâce à une boutique en ligne rapide, performante et sur mesure avec Next.js et Shopify.",
  keywords: ["shopify headless", "shopify", "headless", "boutique headless", "boutique shopify headless", "dropshipping", "boutique dropshipping", "e-commerce", "design sur mesure", "design ux/ui", "designer web", "développeur shopify headless", "développeur shopify", "développeur fullstack", "shopify seo"],
  authors: [{ name: "Sejiux" }],
  creator: "Sejiux",
  publisher: "Sejiux",
>>>>>>> 0168cb42bd5e30be4da577893f197326bafd9d42
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
<<<<<<< HEAD
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
=======
    url: "https://sejiux.com",
    siteName: "Sejiux",
    title: "Sejiux | Expert Shopify Headless",
    description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance, pour offrir à votre marque une expérience utilisateur fluide et mémorable.",
    images: [
      {
        url: "https://sejiux.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sejiux - Expert Shopify Headless"
>>>>>>> 0168cb42bd5e30be4da577893f197326bafd9d42
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
<<<<<<< HEAD
    site: "@novaiagency",
    creator: "@novaiagency",
    title: "Novai Agency | Agents & Automatisation IA",
    description: "Optimisez vos processus avec des agents IA avancés et des automatisations intelligentes via Make et n8n, conçus pour booster votre productivité et efficacité.",
    images: ["https://novai.agency/images/og-image.webp"],
=======
    site: "@sejiux",
    creator: "@sejiux",
    title: "Sejiux | Expert Shopify Headless",
    description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance, pour offrir à votre marque une expérience utilisateur fluide et mémorable.",
    images: ["https://sejiux.com/images/og-image.webp"],
>>>>>>> 0168cb42bd5e30be4da577893f197326bafd9d42
  },
  verification: {
    google: "VeUQ003CQJEmqI8Jhat7AsydV1Lf4NOuzEaViRaR5BQ",
  },
  alternates: {
<<<<<<< HEAD
    canonical: "https://novai.agency",
=======
    canonical: "https://sejiux.com",
>>>>>>> 0168cb42bd5e30be4da577893f197326bafd9d42
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
