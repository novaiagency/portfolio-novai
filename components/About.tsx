import { cn } from '@/lib/utils';
import Emre from "@/public/images/emre.webp";
import Selim from "@/public/images/sejiux_about.webp";
import AgentIa from "@/public/images/agentia.webp";
import Image from 'next/image';
import { Button } from './ui/moving-border';
import AnimatedShinyText from './ui/animated-shiny-text';

const About = () => {
  return (
    <section id="about" className={cn("relative flex flex-col justify-center max-w-7xl mx-auto items-center")}>
      <div className={cn("px-6 text-center space-y-6", "md:mx-auto md:max-w-lg", "lg:max-w-2xl lg:mx-auto", "xl:px-10 xl:max-w-full")}>
        <div className="flex items-center justify-center">
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
                Qui sommes-nous ?
                  </p>
                </div>
              </AnimatedShinyText>
            </Button>
          </div>
        </div>
        <h2 className={cn(
          "text-[28px] px-2 leading-tight font-semibold ",
          "lg:px-0 lg:text-[38px]",
          "xl:px-0 xl:text-5xl xl:leading-[1.4]",
          "pointer-events-none whitespace-pre-wrap",
          "text-white text-center",
        )}>Découvrez qui se cache<br className="hidden lg:block" /> dérrière Novai Agency</h2>
        <p className={cn("text-subtitle/80 text-base font-light w-full px-4 pb-4", "lg:text-base lg:mx-auto lg:w-[500px]", "xl:px-0 xl:text-lg xl:leading-relaxed xl:w-[700px]")}>
        2 humains et une IA, pour optimiser vos processus et booster votre performance.
        </p>
        <div className={cn("relative pt-14 w-full max-w-8xl flex flex-col gap-4", "xl:grid xl:grid-cols-3 xl:justify-between")}>
          <div className='text-center space-y-4'>
            <Image loading="lazy" src={Emre} alt="About me" width={675} height={675} className={cn("aspect-ratio rounded-3xl border-2 border-neutral-600/30 h-max")} />
            <h6 className={cn("font-bold text-2xl")}>Emre</h6>
            <p className={cn("font-medium text-lg")}>Fondateur & CEO</p>
            <div className='px-4'>
              <p className={cn("text-sm")}>
              Emre, fondateur de Novai, est passionné par l’innovation et aide les entreprises à adopter des solutions d’IA et d’automatisation.
              </p>
            </div>
          </div>
          <div className='text-center space-y-4'>
            <Image loading="lazy" src={Selim} alt="About me" width={675} height={675} className={cn("aspect-ratio rounded-3xl border-2 border-neutral-600/30 h-max")} />
            <h6 className={cn("font-bold text-2xl")}>Selim</h6>
            <p className={cn("font-medium text-lg")}>Co-Fondateur & CTO</p>
            <div className='px-4'>
              <p className={cn("text-sm")}>
              Selim, notre responsable technologique, est un développeur passionné par l'IA, alliant stratégie et créativité pour concevoir des solutions innovantes.
              </p>
            </div>
          </div>
          <div className='text-center space-y-4'>
            <Image loading="lazy" src={AgentIa} alt="About me" width={675} height={675} className={cn("aspect-ratio rounded-3xl border-2 border-neutral-600/30 h-max")} />
            <h6 className={cn("font-bold text-2xl")}>Mar-IA</h6>
            <p className={cn("font-medium text-lg")}>Assitante IA</p>
            <div className='px-4'>
              <p className={cn("text-sm")}>
            Mar-IA, notre assistante IA, se distingue par son efficacité et sa capacité à intervenir rapidement pour optimiser vos processus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;