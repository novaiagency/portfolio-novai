import { cn } from '@/lib/utils';
import Link from 'next/link';
import AboutMePicture from "@/public/images/sejiux_about.webp";
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';

const About = () => {
  return (
    <section id="about" className={cn("px-6 flex flex-col justify-center space-y-14 max-w-7xl mx-auto", "md:mx-auto md:max-w-lg", "lg:max-w-2xl", "xl:max-w-7xl xl:px-0 xl:space-y-0 xl:grid xl:grid-cols-2 xl:items-center xl:justify-between")}>
      <Image loading="lazy" src={AboutMePicture} alt="About me" width={675} height={675} className={cn("aspect-ratio rounded-3xl border-2 border-neutral-600/30")} />
      <div className={cn("space-y-6", "xl:px-14 xl:space-y-8")}>
        <div className={cn("space-y-4", "lg:space-y-6")}>
          <h2 className={cn(
            "text-xl leading-normal font-medium",
            "text-white/80",
            "lg:text-4xl",
            "xl:px-0 xl:text-3xl xl:leading-[1.4]",
            "pointer-events-none whitespace-pre-wrap",
          )}>Derrière Novai Agency :</h2>
          <p className={cn("font-black text-2xl", "lg:text-2xl")}>Emre : CEO <br /> Sélim : CTO <br /> Secretair-IA : Assistant IA  </p>
        </div>
        <div className={cn("flex items-center flex-wrap gap-3")}>
          {[
            {title: "Automatisations Intelligentes"},
            {title: "Agent IA Personnalisé"},
          ].map((data, index) => (
            <div key={index} className={cn("text-sm bg-gradient-to-b from-background to-[#151518] border border-neutral-600/30 px-4 py-2 rounded-full", "lg:text-base")}>{data.title}</div>
          ))}
        </div>
        <p className={cn("text-base font-light w-full", "lg:text-left lg:text-base text-subtitleCard lg:w-[500px]", "xl:px-0 xl:pb-2 xl:text-lg xl:leading-relaxed")}>
        Chez Novai Agency, nous aidons les entreprises à se démarquer grâce à des stratégies digitales innovantes et personnalisées. Notre équipe passionnée met son expertise au service de votre croissance, en créant des expériences uniques qui génèrent du résultat.
        Notre mission est simple : transformer votre vision en succès concret. Nous croyons en la créativité, l'efficacité et la transparence pour bâtir des relations durables avec nos clients.<br />Prêt à passer au niveau supérieur ? Rejoignez-nous dès aujourd'hui !</p>
        <div className={cn("pt-4 flex flex-col items-center gap-4", "lg:flex-row")}>
          <Link href="https://calendly.com/novai-agency25/30min" rel="preload" target="_blank"
            className={cn(
              "text-white flex gap-2 items-center font-medium", 
              "w-full h-12 mx-auto",
              "md:h-14",
              "lg:mx-0",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "bg-gradient-to-b from-primary to-secondary flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-primary hover:shadow-custom-primary",
            )}>
            Réserver votre appel
          </Link>
          <Link href="https://x.com/NovaiAgency" target="_blank" rel="preload"
            className={cn(
              "text-white flex gap-2 items-center", 
              "w-full h-12 mx-auto",
              "md:h-14",
              "lg:mx-0",
              "xl:w-60 xl:h-14 p-[1px]",
              "*:transition ease-out *:hover:duration-300 *:hover:text-white", 
              "transition-all ease-in ",
              "border border-neutral-600/30 bg-gradient-to-bl from-neutral-600/30 to-[#151518] flex items-center justify-center text-base antialiased rounded-[10px]",
              "hover:bg-backgroundSecondary hover:shadow-custom-background-secondary",
            )}>
            <FaXTwitter />
                Suivez-nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;