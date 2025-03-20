import { lazy, Suspense } from "react";
import { JsonLd } from 'react-schemaorg';
import dynamic from "next/dynamic";

/* export const runtime = 'edge'; */
const Header = dynamic(() => import("@/components/Header"));
const Services = lazy(() => import("@/components/Services"));
const Tools = lazy(() => import("@/components/Tools"));
const Benefit = lazy(() => import("@/components/Benefit"));
const Processus = lazy(() => import("@/components/Processus"));
const Price = lazy(() => import("@/components/Price"));
const About = lazy(() => import("@/components/About"));
const WhyMe = lazy(() => import("@/components/WhyMe"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Blog = lazy(() => import("@/components/Blog"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  <>
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "sejiux",
        url: "https://novai.agency/",
        logo: "https://sejiux.com/images/sejiux.webp",
        description: "Je crée des boutiques en ligne headless sur mesure, combinant design unique et performance.",
        sameAs: [
          "https://x.com/NovaiAgency",
          "https://github.com/sejiux",
          "https://www.linkedin.com/company/novaiagency",
          "https://medium.com/@selimbaouz",
          "https://www.instagram.com/novai_agency",
          "https://www.facebook.com/people/Novai-Agency/61572557372194",
        ]
      }}
    /></>;
  
  return (
    <div className="space-y-24 lg:space-y-44">
      <Suspense>
        <Header />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Tools />
      </Suspense>
      <Suspense>
        <Processus />
      </Suspense>
      <Suspense>
        <Price />
      </Suspense>
      <Suspense>
        <Benefit />
      </Suspense>
      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <FAQ />
      </Suspense>
                         {/* a supprimer  <Whyme /> */}

                          {/* a supprimer <Blog /> */}
      <Suspense>
       
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
