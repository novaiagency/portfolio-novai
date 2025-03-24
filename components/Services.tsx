import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';
import { ServicesData } from '@/data/works';
import CardServices from './card/CardServices';
import HorizonSection from './HorizonSection';
import JsonLd from './JsonLd';

const Services = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatisation et Agents IA sur Mesure",
    "description": "Automatisez vos processus et optimisez votre productivité avec des agents IA et des workflows intelligents.",
    "provider": {
      "@type": "Organization",
      "name": "Novai Agency"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solutions d'Automatisation et Agents IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatisation des Processus",
            "description": "Optimisez vos tâches répétitives avec des workflows automatisés via Make et n8n."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agents IA Personnalisés",
            "description": "Déployez des agents IA adaptés à vos besoins pour gérer vos tâches et améliorer votre efficacité."
          }
        }
      ]
    }
  };
  return (
    <>
      <JsonLd data={jsonLd} />
      <section id="services" className={cn("flex flex-col justify-center")}>
        <div className={cn('relative pb-24 hidden', "lg:pb-28 lg:block")}>
          <HorizonSection />
        </div>
        <div className={cn("px-6 text-center space-y-6", "md:mx-auto md:max-w-lg", "lg:max-w-4xl lg:mx-auto", "xl:px-10 xl:max-w-full")}>
          <div className="z-10 flex items-center justify-center">
            <div
              className={cn(
                "group rounded-full text-base text-white transition-all ease-in hover:cursor-pointer bg-transparent hover:bg-neutral-800 h-12",
              )}
            >
              <Button
                borderRadius="1.75rem"
                className="bg-gradient-to-b from-background to-[#151518]"
              >
                <AnimatedShinyText
                  className={cn(
                    "inline-flex items-center justify-center px-4 py-0 transition ease-out hover:duration-300 hover:text-neutral-400 text-white/70 font-normal",
                    "text-sm",
                    "md:text-sm",
                  )}>
                  <div className="px-2">
                    <p className={cn("text-sm", "lg:text-base")}>
                  Rejoignez la révolution
                    </p>
                  </div>
                </AnimatedShinyText>
              </Button>
            </div>
          </div>
          <h2 className={cn(
            "text-[28px] px-2 leading-tight font-semibold",
            "lg:px-0 lg:text-4xl",
            "xl:text-5xl xl:leading-[1.4]",
            "pointer-events-none whitespace-pre-wrap",
            "text-white text-center",
          )}>
          L’Avènement d’une Nouvelle<br className="hidden lg:block" /> Ère pour votre Entreprise
          </h2>
          <p className={cn("text-base font-light w-full px-4", "lg:px-0 lg:mx-auto text-subtitle/80 lg:pb-2 lg:w-[500px]", "xl:text-lg xl:leading-relaxed xl:w-[700px]")}>Découvrez comment nos services d'automatisation transforment votre activité en vous faisant gagner du temps et en optimisant vos ressources. </p>
          <div className={cn("relative pt-10 w-full max-w-7xl flex flex-col gap-4", "lg:grid lg:grid-cols-2", "xl:grid-cols-3")}>
            {/* <div className='absolute blur-xl -z-10 w-full mx-auto flex justify-center'>
            <div className='bg-gradient size-[1000px] border rounded-full'/>
          </div> */}
            {ServicesData.map((data, index) => (
              <CardServices
                key={index}
                title={data.title}
                content={data.content}
                icon={data.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;