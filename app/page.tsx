import { Suspense } from "react";
import { JsonLd } from 'react-schemaorg';
import HeaderPage from "@/components/Header";
import Tools from "@/components/Tools";
import Processus from "@/components/Processus";
import Price from "@/components/Price";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Benefit from "@/components/Benefit";
import FAQ from "@/components/FAQ";

/* export const runtime = 'edge'; */
// const Header = dynamic(() => import("@/components/Header"));
// const Services = lazy(() => import("@/components/Services"));
// const Tools = lazy(() => import("@/components/Tools"));
// const Benefit = lazy(() => import("@/components/Benefit"));
// const Processus = lazy(() => import("@/components/Processus"));
// const Price = lazy(() => import("@/components/Price"));
// const About = lazy(() => import("@/components/About"));
// const WhyMe = lazy(() => import("@/components/WhyMe"));
// const FAQ = lazy(() => import("@/components/FAQ"));
// const Blog = lazy(() => import("@/components/Blog"));
// const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  <>
    <JsonLd
      item={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "novaiagency",
        url: "https://novai.agency/",
        logo: "https://novai.agency/images/novai.png",
        description: "Automatisez vos processus avec des agents IA avancés et des solutions d'automatisation intelligentes.",
        sameAs: [
          "https://x.com/NovaiAgency",
          "https://github.com/novaiagency",
          "https://www.linkedin.com/company/novaiagency",
          "https://www.instagram.com/novai_agency",
          "https://www.facebook.com/people/Novai-Agency/61572557372194",
        ]
      }}
    />
  </>;
  
  return (
    <div className="space-y-24 lg:space-y-44">
      <Suspense>
        <HeaderPage />
        <Services />
        <Tools />
        <Benefit />
        <Price />
        <Processus />
        <About />
        <FAQ />
        <Footer />
      </Suspense>
    </div>
  );
}
