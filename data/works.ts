import { FaRocket} from "react-icons/fa6";
import { FaGithub, FaTwitter, FaFigma, FaPaintBrush, FaHeadphonesAlt, FaSearch, FaMoneyBillAlt } from "react-icons/fa";
import { SiAirtable, SiNotion, SiOpenai, SiN8N, SiGoogle, SiCalendly, SiZapier, SiSlack, SiStripe, SiTwilio, SiDropbox, SiHubspot, SiMailchimp, SiSalesforce, SiWoocommerce, SiPaypal, SiTrello, SiClickup, SiGooglesheets, SiShopify } from "react-icons/si";
import { RiCodeSSlashLine, RiHomeSmile2Fill, RiRobot2Fill, RiServiceFill, RiUser5Fill } from "react-icons/ri";
import { AiOutlineSketch } from "react-icons/ai";
import { IoClose, IoShield } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { HiOutlineCloudUpload } from "react-icons/hi";
import { GiKey, GiPiggyBank } from "react-icons/gi";
import { MdArticle, MdOutlineChatBubbleOutline, MdOutlineSend, MdOutlineSettings } from "react-icons/md";
import { PiQuestionFill } from "react-icons/pi";
import HomeHellopurly from "@/public/images/hellopurly-home.webp";
import ProductHellopurly from "@/public/images/hellopurly-product.webp";
import MobileHelloPurly from "@/public/images/hellopurly-mobile.webp";
import BlogReview from "@/public/images/blog-review.webp";
import BlogError from "@/public/images/blog-snipcart-error.webp";
import BlogDesign from "@/public/images/blog-snipcart-design.webp";
import BlogStrapi from "@/public/images/blog-strapi.webp";
import BlogSnipcart from "@/public/images/blog-snipcart.webp";
import BlogHeadless from "@/public/images/blog-headless.webp";
import BlogIp from "@/public/images/blog-ip.webp";
import BlogListening from "@/public/images/blog-active-listening.webp";
import BlogMindset from "@/public/images/blog-mindset.webp";
import { IoMdTime } from "react-icons/io";

export const ServicesData = [
  {
    title: "Libérez du temps", 
    content: "Dites adieu aux tâches répétitives et concentrez-vous sur des projets à plus forte valeur ajoutée.", 
    icon: IoMdTime, 
  },
  {
    title: "Déléguez en toute confiance", 
    content: "Automatisez les processus et déléguez les tâches à notre technologie pour vous concentrer sur la stratégie.", 
    icon: MdOutlineSend, 
  },
  {
    title: "Réduisez le travail robotique", 
    content: "Moins de tâches monotones et plus de temps pour les interactions humaines et créatives.", 
    icon: RiRobot2Fill, 
  },
  {
    title: "Améliorez l'expérience client", 
    content: "Automatisez les interactions pour offrir un service rapide, efficace et personnalisé à vos clients.", 
    icon: TfiBarChart, 
  },
  {
    title: "Économies", 
    content: "Profitez de la productivité accrue sans les coûts associés à un salarié à temps plein.", 
    icon: GiPiggyBank, 
  },
  {
    title: "Optimisation continue", 
    content: "Nos solutions évoluent pour suivre la croissance de votre entreprise, vous permettant d'optimiser chaque processus au fur et à mesure.", 
    icon: FiZap, 
  },
];

export const FAQsData = [
  {
    title: "Comment ça fonctionne ?", 
    content: "Nous créons des automatisations personnalisées en utilisant JavaScript et des outils no-code. Nous connectons vos outils existants via leurs API officielles ou, si l'API n'est pas disponible (par exemple pour certains SaaS), nous mettons en place des solutions alternatives efficaces (webhooks, parsing, scraping sécurisé). Créer ces automatisations seul peut entraîner des surcoûts liés aux erreurs techniques, à la maintenance ou aux limites d'intégration.", 
  },
  {
    title: "Quelles tâches pouvez-vous automatiser ?", 
    content: "Nous automatisons de nombreuses tâches : emails, devis, factures, relances clients, gestion des données, reporting, publications réseaux sociaux, chatbots et bien d'autres. Chaque automatisation est conçue sur mesure selon vos besoins précis.", 
  },
  {
    title: "Quels avantages offre votre service ?", 
    content: "✅ Gain de temps significatif ✅ Réduction des erreurs humaines ✅ Augmentation immédiate de la productivité ✅ Expérience client améliorée ✅ Optimisation financière grâce à l'efficacité accrue.", 
  },
  {
    title: "Comment se déroule le processus ?", 
    content: "1. Analyse précise de vos besoins 2. Conception du workflow adapté 3. Développement technique (JavaScript & no-code) et intégration API 4. Tests approfondis et validation 5. Déploiement officiel avec formation utilisateur 6. Suivi continu et maintenance", 
  },
  {
    title: "Quelles sont les étapes clés pour mettre en place une solution sur mesure ?", 
    content: "La mise en place d'une solution sur mesure suit un processus structuré pour garantir son succès. Cela commence par une analyse approfondie de vos besoins et la définition des objectifs. Ensuite, les équipes conçoivent une solution adaptée en choisissant les technologies appropriées et en élaborant des maquettes.", 
  },
  {
    title: "Combien de temps cela prend-il ?", 
    content: "- Automatisation simple : 24 à 48 heures - Automatisation avancée : Quelques jours à quelques semaines selon complexité", 
  },
  {
    title: "Puis-je faire évoluer mes automatisations après mise en place ?", 
    content: "Oui, les modifications mineures sont incluses gratuitement pendant une période définie après déploiement initial. Les évolutions complexes sont possibles ultérieurement (avec facturation complémentaire).", 
  },
];

export const articlesData = [
  {
    image: BlogHeadless,
    title: "Comment résoudre la redirection du checkout dans Shopify Headless", 
    category: "Developpement",
    date: "30 Oct, 2024", 
    ReadingTime: "Temps de lecture: 10 min", 
    link: "https://medium.com/stackademic/how-to-resolve-checkout-redirection-in-shopify-headless-693a2c2a5df4", 
  },
  {
    image: BlogIp,
    title: "Comment bloquer l'accès à votre site web par adresse IP sur Vercel", 
    category: "Developpement",
    date: "10 Juil, 2024", 
    ReadingTime: "Temps de lecture: 5 min", 
    link: "https://medium.com/stackademic/how-to-block-access-to-your-website-by-ip-address-on-vercel-ace280739449", 
  },
  {
    image: BlogListening,
    title: "L'écoute active: Un chemin vers une véritable présence", 
    category: "Psychologie",
    date: "6 Feb, 2024", 
    ReadingTime: "Temps de lecture: 4 min", 
    link: "https://medium.com/@selimbaouz/active-listening-a-path-to-true-presence-63da2811fb64", 
  },
  {
    image: BlogMindset,
    title: "L'impact de l'environnement sur notre conditionnement mental", 
    category: "Neurosciences",
    date: "6 Feb, 2024", 
    ReadingTime: "Temps de lecture: 2 min", 
    link: "https://medium.com/@selimbaouz/the-impact-of-the-environment-on-our-mental-conditioning-b9fbb7a960c5", 
  },
  {
    image: BlogReview,
    title: "Comment créer un formulaire d'avis avec React Hook Form, Zod et Next.js", 
    category: "Developpement",
    date: "5 Feb, 2024", 
    ReadingTime: "Temps de lecture: 10 min", 
    link: "https://blog.stackademic.com/how-to-create-a-review-form-with-react-hook-form-zod-and-nextjs-21f09cdda77c", 
  },
  {
    image: BlogSnipcart,
    title: "Intégration d'un panier d'achat avec Snipcart dans la boutique Next.js", 
    category: "Developpement",
    date: "3 Feb, 2024", 
    ReadingTime: "Temps de lecture: 5 min", 
    link: "https://blog.stackademic.com/integration-of-an-e-commerce-shopping-cart-with-snipcart-in-nextjs-store-7cce036bf0c5", 
  },
  {
    image: BlogStrapi,
    title: "Comment déployer Strapi et Next.js sur un serveur VPS avec Hostinger", 
    category: "DevOps",
    date: "31 Dec, 2023", 
    ReadingTime: "Temps de lecture: 10 min", 
    link: "https://blog.stackademic.com/how-to-deploy-strapi-and-nextjs-on-a-vps-server-with-hostinger-f0f615560147", 
  },
  {
    image: BlogError,
    title: "Comment corriger l'erreur 'product crawling error' avec Next.js et Snipcart",
    category: "Developpement",
    date: "29 Dec, 2023", 
    ReadingTime: "Temps de lecture: 2 min", 
    link: "https://blog.stackademic.com/how-to-fix-product-crawling-error-with-nextjs-app-and-snipcart-b38fc54f95f3", 
  },
  {
    image: BlogDesign,
    title: "Comment personnaliser le SDK de Snipcart avec Next.js", 
    category: "Developpement",
    date: "29 Dec, 2023", 
    ReadingTime: "Temps de lecture: 2 min", 
    link: "https://blog.stackademic.com/customize-snipcart-sdk-with-nextjs-13-0a257dd15e2f", 
  },
];

export const ProcessusData = [
  {
    title: "Analyse des besoins", 
    content: "Identifier les tâches répétitives et les points de friction à automatiser..", 
    step: "1",
    icon: MdOutlineChatBubbleOutline, 
  },
  {
    title: "Définition des objectifs", 
    content: "Clarifier les gains attendus (gain de temps, réduction d’erreurs, amélioration client, etc.)", 
    step: "2",
    icon: MdOutlineSettings, 
  },
  {
    title: "Choix des outils et intégrations", 
    content: "Sélectionner les solutions adaptées (Make, ChatGPT, Apify, etc.)", 
    step: "3",
    icon: AiOutlineSketch, 
  },
  {
    title: "Paramétrage et configuration", 
    content: "Une fois les besoins définis, la configuration et l’optimisation des paramètres d’automatisation sont réalisées afin d’assurer un fonctionnement fluide et efficace. .", 
    step: "4",
    icon: RiCodeSSlashLine, 
  },
  {
    title: "Tests et ajustements", 
    content: "Vérifier le bon fonctionnement, identifier et corriger les éventuels blocages.", 
    step: "5",
    icon: HiOutlineCloudUpload, 
  },
  {
    title: "Déploiement et suivi", 
    content: "Assurer une gestion continue, des mises à jour et un support pour garantir une automatisation performante.", 
    step: "6",
    icon: GiKey, 
  },
];

export const BenefitsData = [
  {
    symbole: "+", 
    percentage: "30",
    title: "Taux de Conversion", 
  },
  {
    symbole: "+", 
    percentage: "50",
    title: "Performances Optimisées", 
  },
  {
    symbole: "+", 
    percentage: "40",
    title: "Engagement Client", 
  },
  {
    symbole: "-", 
    percentage: "80",
    title: "coûts liés au service client", 
  },
];

export const WhyData = [
  {
    title: "Autres Agences",
    lists: [
      {
        icon: IoClose,
        content: "Thème prédéfini, commun et duplicable",
      },
      {
        icon: IoClose,
        content: "Pages lentes et peu optimisées",
      },
      {
        icon: IoClose,
        content: "Assistance et mises à jour restreintes",
      },
      {
        icon: IoClose,
        content: "Optimisations SEO de base",
      },
      {
        icon: IoClose,
        content: "Mise en place rapide et coût initial réduit",
      },
    ], 
  },
  {
    title: "Sejiux",
    lists: [
      {
        icon: FaPaintBrush,
        content: "Thème sur-mesure, unique et exclusif",
      },
      {
        icon: FaRocket,
        content: "Pages ultra-rapides et hautement optimisées",
      },
      {
        icon: FaHeadphonesAlt,
        content: "Assistance et mises à jour complètes",
      },
      {
        icon: FaSearch,
        content: "Optimisations SEO avancées et performantes",
      },
      {
        icon: FaMoneyBillAlt,
        content: "Coût élevé mais taux de conversion multipliée",
      },
    ], 
  },
];

export const CaseStudyData = [
  {
    image: MobileHelloPurly, 
    alt: "First Image of Hellopurly",
  },
  {
    image: HomeHellopurly, 
    alt: "Third Image of Hellopurly",  
  },
  {
    image: ProductHellopurly, 
    alt: "Four Image of Hellopurly",
  },
];

export const PricesFixeData = [
  {
    title: "Offre basique", 
    content: "Automatisez emails, relances paniers et notifications pour simplifier la gestion client.",
    link: "https://calendly.com/novai-agency25/30min",
    options: [
      {
        title: "Mise en place de réponses automatiques aux emails clients"
      },
      {
        title: "Automatisation des relances paniers abandonnés"
      },
      {
        title: "Notifications automatiques sur les commandes"
      },
    ],
  },
  {
    title: "Offre intermédiaire", 
    content: "Ajoutez un chatbot, gérez stocks et expéditions, et planifiez vos campagnes.",
    link: "https://calendly.com/novai-agency25/30min",
    options: [
      {
        title: "Mise en place de réponses automatiques aux emails clients"
      },
      {
        title: "Automatisation des relances paniers abandonnés"
      },
      {
        title: "Notifications automatiques sur les commandes"
      },
      {
        title: "Ajout d’un chatbot pour le service client 24/7"
      },
      {
        title: "Gestion automatisée du stock et création d’étiquettes d’expédition"
      },
      {
        title: "Campagnes email marketing planifiées"
      },
    ], 
  },
];

export const socialsData = [
  {
    link: "https://github.com/novaiagency", icon: FaGithub, label: "Github",
  },
  {
    link: "https://x.com/NovaiAgency", icon: FaTwitter, label: "Twitter",
  }
];

export const linksData = [
  {
    link: "/#home", 
    label: "Accueil",
    icon: RiHomeSmile2Fill
  },
  {
    link: "/#services", 
    label: "Services",
    icon: RiServiceFill
  },
  {
    link: "/#about", 
    label: "À propos",
    icon: RiUser5Fill
  },
  {
    link: "/#faq", 
    label: "FAQ",
    icon: PiQuestionFill
  },
  {
    link: "/#blog", 
    label: "Blog",
    icon: MdArticle
  },
];

export const legalsLinksData = [
  {
    link: "/legals/terms-of-use", label: "Mentions légales",
  },
  {
    link: "/legals/privacy-policy", label: "Politique de confidentialité",
  },
  {
    link: "/legals/terms-and-conditions", label: "Conditions générales de vente",
  },
  {
    link: "/legals/cgu", label: "Conditions générales d'utilisation",
  },
];

export const legalsPagesData = (handle: string) => {
  switch (handle) {
  case "terms-of-use":
    return {
      title: "Mentions légales",
      data: [
        {
          title: "1. Informations légales",
          content: `Forme juridique : Auto-entrepreneur
            Adresse : Rue de la Tour, 57100 Thionville
            Email : novai.agency25@gmail.com
            Immatriculation :
            Numéro RCS : Thionville A 842 876 757
            Numéro TVA intracommunautaire : FR 42 842876757
            Numéro SIRET du siège : 842 876 757 00019 
            Créateur du site : Sejiux Studio
            Responsable de publication : Sejiux Studio
            Adresse : 5 rue marcel sembat 83200 Toulon
            Email : novai.agency25@gmail.comI
            Numéro SIRET : 83012126500037`,
        },
        {
          title: "2. Hébergement",
          content: `Hébergeur : Vercel Inc.
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            Site Web : vercel.com`,
        },
        {
          title: "3. Propriété intellectuelle",
          content: `L'ensemble du contenu du site (textes, images, vidéos, logos, etc.) est la propriété exclusive de Novai Agency ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, représentation, modification ou adaptation totale ou partielle du site ou de son contenu, par quelque procédé que ce soit et sur quelque support que ce soit, est strictement interdite sans l'autorisation écrite préalable de Novai Agency.`,
        },
        {
          title: "4. DONNÉES PERSONNELLES",
          content: `Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez de droits d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données personnelles. Vous pouvez exercer ces droits en nous contactant par email à [email de contact RGPD] ou par courrier à l'adresse du siège social de Novai Agency.
Pour en savoir plus sur la gestion de vos données et vos droits, veuillez consulter notre Politique de Confidentialité accessible depuis notre site web
.`,
        },
        {
          title: "5. Collecte et traitement des données",
          content: `Ce site utilise **Vercel Analytics** pour analyser l'usage du site et **Vercel Speed Insights** pour optimiser les performances. Ces outils collectent des données anonymisées pour améliorer votre expérience.`,
        },
        {
          title: "6. Cookies",
          content: `Aucun cookie n'est utilisé pour collecter des données personnelles. Cependant, des cookies techniques peuvent être générés pour le fonctionnement des services analytiques, Lors de votre navigation sur notre site, des cookies peuvent être déposés sur votre terminal. Ces cookies sont utilisés pour faciliter votre navigation, permettre certaines fonctionnalités et nous aider à améliorer nos services. Vous pouvez paramétrer votre navigateur pour refuser les cookies ou être alerté lors de leur utilisation.`,
        },
        {
          title: "7. Droit applicable",
          content: `Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.`,
        },
      ],
    };
  case "privacy-policy":
    return {
      title: "Politique de confidentialité",
      data: [
        {
          title: "1. OBJECTIF ET CHAMP D'APPLICATION",
          content: `Novai Agency accorde la plus grande importance à la protection de la vie privée et des données à caractère personnel. La présente politique de confidentialité a pour objectif de vous informer sur nos pratiques concernant la collecte, l'utilisation et le partage des informations que vous nous fournissez dans le cadre de l'utilisation de nos solutions d'IA et d'automatisation.
          Cette politique s'applique à l'ensemble des services proposés par Novai Agency et respecte les dispositions du Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et de la loi française n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.`,
        },
        {
          title: "2. RESPONSABLE DE TRAITEMENT",
          content: `Dans le cadre de nos services, nous collectons et traitons des données à caractère personnel en lien avec vous. Pour l'ensemble de ces traitements, Novai Agency, dont le siège social est situé à [adresse à compléter], agit en qualité de responsable de traitement au sens du RGPD.`,
        },
        {
          title: "3. DONNÉES COLLECTÉES",
          content: `Données fournies directement
          Lorsque vous utilisez nos services, nous collectons les informations que vous nous fournissez volontairement :
          Informations d'identification (nom, prénom, email professionnel)
          Coordonnées professionnelles (fonction, société, téléphone)
          Contenus et données que vous choisissez de traiter via nos solutions d'IA`,
        },
        {
          title: "4. Données collectées automatiquement",
          content: `Certaines données sont automatiquement collectées lors de votre utilisation de nos solutions :
          Données de connexion (adresse IP, date et heure, pages consultées)
          Informations sur votre appareil (type, système d'exploitation, navigateur)
          Données d'utilisation des solutions d'IA et d'automatisation
          Journaux d'activité et statistiques d'utilisation`,
        },
        {
          title: "5. FINALITÉS DU TRAITEMENT",
          content: `Vos données personnelles sont collectées et traitées pour les finalités suivantes :
          Fournir, maintenir et améliorer nos solutions d'IA et d'automatisation
          Personnaliser votre expérience utilisateur
          Assurer la sécurité de nos services et détecter les utilisations frauduleuses
          Analyser l'utilisation de nos solutions pour en améliorer les performances
          Communiquer avec vous concernant votre compte ou vos demandes de support
          Vous informer des mises à jour, nouvelles fonctionnalités ou offres complémentaires
          Respecter nos obligations légales et réglementaires.`,
        },
        {
          title: "6. BASES LÉGALES DU TRAITEMENT",
          content: `Nous traitons vos données personnelles sur la base des fondements juridiques suivants :
          L'exécution du contrat conclu avec vous ou votre entreprise
          Notre intérêt légitime à développer et améliorer nos solutions
          Votre consentement, lorsque celui-ci est requis par la réglementation
          Le respect de nos obligations légales.`,
        },
        {
          title: "7. DESTINATAIRES DES DONNÉES",
          content: ` Vos données personnelles peuvent être partagées avec :
          Notre personnel autorisé, dans la limite de leurs attributions
          Nos sous-traitants techniques (hébergement, maintenance, support)
          Nos prestataires de services, agissant en tant que sous-traitants au sens du RGPD
          Les autorités compétentes, en cas d'obligation légale ou de demande judiciaire
          Nous nous assurons que l'ensemble de ces destinataires présentent des garanties suffisantes quant à la protection de vos données.`,
        },
        {
          title: "8. TRANSFERT DES DONNÉES",
          content: ` Les données que nous collectons peuvent être transférées et stockées dans des pays situés en dehors de l'Union Européenne. Dans ce cas, nous prenons toutes les mesures nécessaires pour garantir un niveau de protection adéquat de vos données, conformément aux exigences du RGPD (clauses contractuelles types, décisions d'adéquation, etc.)`,
        },
        {
          title: "9. DURÉE DE CONSERVATION",
          content: ` Vos données personnelles sont conservées pour une durée limitée et proportionnée aux finalités pour lesquelles elles ont été collectées :
          Données de compte : pendant la durée de votre relation contractuelle avec nous, puis archivées selon les délais légaux applicables
          Données d'utilisation : jusqu'à 12 mois après votre dernière activité
           de facturation : 10 ans, conformément aux obligations légales
          Données de navigation : 13 mois maximum.`,
        },
        {
          title: "10. DROITS DES PERSONNES",
          content: ` Conformément à la réglementation applicable, vous disposez des droits suivants concernant vos données personnelles :
          Droit d'accès et de rectification
          Droit à l'effacement (droit à l'oubli)
          Droit à la limitation du traitement
          Droit à la portabilité des données
          Droit d'opposition au traitement
          Droit de définir des directives relatives au sort de vos données après votre décès
          Pour exercer vos droits, vous pouvez contacter notre Délégué à la Protection des Données par email à novai.agency25@gmail.com ou par courrier à l'adresse de notre siège social.`,
        },
        {
          title: "11. SÉCURITÉ DES DONNÉES",
          content: ` Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, accès non autorisé, divulgation, altération ou destruction. Ces mesures incluent le chiffrement des données, les contrôles d'accès, les audits de sécurité réguliers et la formation de notre personnel.`,
        },
        {
          title: "12. SPÉCIFICITÉS LIÉES À L'IA",
          content: ` Nos solutions d'IA et d'automatisation peuvent impliquer des traitements particuliers, comme l'apprentissage automatique ou l'analyse prédictive. Dans ces cas :
          Nous privilégions l'utilisation de données pseudonymisées ou anonymisées
          Nous appliquons des mesures de protection spécifiques aux données utilisées pour l'entraînement des modèles d'IA
          Nous mettons en place des contrôles pour limiter les biais algorithmiques
          Nous documentons les décisions automatisées significatives et préservons un droit d'intervention humaine.`,
        },
      ],
    };
  case "terms-and-conditions":
    return {
      title: "Conditions générales de vente",
      data: [
        {
          title: "ARTICLE 1 - PRÉAMBULE",
          content: `Les présentes Conditions Générales de Vente (ci-après "CGV") s'appliquent à toutes commandes de services d'intégration de solutions d'intelligence artificielle et d'automatisation effectuées auprès de Novai Agency (ci-après "le Prestataire"), sur le territoire français et international. Ces CGV peuvent être aménagées par des conditions particulières conclues entre les parties dans le cadre d'un contrat spécifique ou d'un devis. À défaut de dispositions particulières stipulées par écrit, le fait de passer commande implique l'acceptation pleine et entière des présentes CGV. Le Prestataire se réserve la faculté de modifier ses CGV à tout moment, les nouvelles conditions s'appliquant à toute nouvelle commande.`,
        },
        {
          title: "ARTICLE 2 - DESCRIPTION DES SERVICES",
          content: `Les services proposés par Novai Agency comprennent notamment :
          Création d'automatisations pour optimiser les processus d'affaires
          Développement et intégration d'agents IA (chatbots, assistants virtuels, etc.)
          Intégration de solutions IA dans les systèmes existants du Client
          Conseil en stratégie d'automatisation et IA
          Maintenance et support technique proposés exclusivement aux clients abonnés mensuellement.
          Le Prestataire s'engage à mettre en œuvre son expertise pour concevoir et intégrer des solutions adaptées aux besoins spécifiques du Client, dans le cadre d'une obligation de moyens visant à garantir un service optimal.`,
        },
        {
          title: "ARTICLE 3 - MODALITÉS DE COMMANDE ET TARIFS",
          content: `Les prix applicables sont ceux en vigueur à la date de signature du devis. Ils sont mentionnés en euros HT et TTC et sont disponibles sur demande.
          Le Client doit retourner le bon de commande signé dans les 15 jours ouvrables suivant sa réception (ou à la date de validité indiquée sur le devis). Ce bon de commande doit parvenir au Prestataire au moins 8 jours ouvrables avant la date de début prévue des prestations. En l'absence de retour dans les délais, le Prestataire se réserve le droit de considérer la commande comme non acceptée.`,
        },
        {
          title: "ARTICLE 4 - FACTURATION ET RÈGLEMENT",
          content: `Le prix des services inclut les prestations détaillées dans le devis ainsi que les éventuels coûts d'achat de composants logiciels tiers nécessaires à l'intégration des solutions d'IA.
          Les règlements doivent être effectués par virement bancaire à 30 jours maximum à compter de la date de facturation. À défaut de paiement dans les délais, une pénalité de retard égale à trois fois le taux d'intérêt légal sera appliquée, ainsi qu'une indemnité forfaitaire pour frais de recouvrement d'un montant de 40 euros.
          Le Prestataire pourra exiger un acompte représentant une partie de la commande à la signature du bon de commande. En l'absence de ce règlement, le Prestataire peut suspendre les prestations sans préjudice de l'exigibilité du montant total de la commande.`,
        },
        {
          title: "ARTICLE 5 - DÉVELOPPEMENT ET INTÉGRATION",
          content: `5.1 Responsabilités du Client
          Le Client est seul responsable des informations, accès et outils nécessaires au bon déroulement de la mission. Il garantit être titulaire des droits de propriété intellectuelle sur les contenus, données et codes informatiques transmis au Prestataire.
          5.2 Recette et validation des livrables
          Les solutions d'IA et d'automatisation feront l'objet d'une procédure de recette permettant au Client de contrôler la conformité des prestations. Cette recette se déroule en deux phases :
          Une recette provisoire par la signature d'un procès-verbal après tests et validation
          Une recette définitive intervenant dans un délai d'un mois après la signature du procès-verbal provisoire
          Aucune recette ne pourra avoir lieu tacitement. Le déploiement du livrable par le Client aura valeur de reconnaissance de conformité des prestations.`,
        },
        {
          title: "ARTICLE 6 - PROPRIÉTÉ INTELLECTUELLE",
          content: `Les automatisations et agents IA sont créés sur le compte interne unique de Novai Agency. Le Client reconnaît expressément qu'aucun accès au code source, aux comptes ou aux paramètres internes ne pourra lui être fourni, même en cas de redressement judiciaire, liquidation judiciaire ou cessation d'activité du Prestataire. Le Client bénéficie uniquement d'un droit d'utilisation des solutions mises à sa disposition dans le cadre de son abonnement.`,
        },
        {
          title: "ARTICLE 7 - CALENDRIER D'EXÉCUTION",
          content: `Le calendrier pour l'accomplissement des prestations est celui stipulé dans le devis ou la proposition commerciale. Compte tenu de la nature des prestations, les délais figurant dans ce calendrier sont indicatifs. Le Prestataire s'efforce de les respecter au mieux de ses moyens, mais n'encourt aucune responsabilité en cas de non-respect, sauf négligence grave.`,
        },
        {
          title: "ARTICLE 8 - CONFIDENTIALITÉ",
          content: `Pendant toute la durée du contrat et pendant une période de deux ans suivant sa résiliation, chacune des parties s'engage à ne pas divulguer d'informations confidentielles concernant l'autre partie à tout tiers sans accord préalable écrit, sauf dans les cas expressément prévus par la loi.
          Les informations confidentielles comprennent notamment les technologies d'IA utilisées, les méthodes d'automatisation, les algorithmes, le savoir-faire, ainsi que les données des clients traitées par les solutions.`,
        },
        {
          title: "ARTICLE 9 - RESPONSABILITÉ",
          content: `La responsabilité du Prestataire est limitée aux dommages directs prouvés par le Client. En tout état de cause, le montant total des dommages et intérêts que le Prestataire pourrait être amené à verser ne pourra excéder 50% des sommes effectivement perçues au titre du contrat concerné durant les trois derniers mois précédant l'incident.`,
        },
        {
          title: "ARTICLE 10 - RÉSILIATION ET RENOUVELLEMENT",
          content: `Le service est proposé sous forme d'abonnement mensuel. Le Client peut résilier son abonnement directement depuis son espace client sur le site web de Novai Agency ou en adressant une demande par email à l'adresse indiquée dans l'article 10. Toute demande de résiliation prendra effet à la fin du mois en cours si elle est reçue au moins 15 jours avant la fin du mois concerné.`,
        },
      ],
    };
  case "cgu":
    return {
      title: "Conditions Générales d'Utilisation (CGU)",
      data: [
        {
          title: "ARTICLE 1 - PRÉAMBULE ET DÉFINITIONS",
          content: `Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent l'accès et l'utilisation des services de Novai Agency, notamment les solutions d'intelligence artificielle et d'automatisation proposées par le Prestataire6.
          Dans les présentes CGU, les termes suivants ont la signification qui leur est donnée ci-après :
          "Solution d'IA" : toute technologie, application ou plateforme intégrant des capacités d'intelligence artificielle
          "Automatisation" : ensemble des processus techniques permettant l'exécution automatisée de tâches
          "Agent IA" : programme informatique autonome utilisant l'intelligence artificielle pour interagir et exécuter des tâches
          "Utilisateur" : toute personne physique ou morale accédant aux solutions d'IA et d'automatisation.`,
        },
        {
          title: "2. Cookies tiers",
          content: `Certains cookies peuvent être générés par Vercel Analytics afin d'analyser la performance du site et améliorer l'expérience utilisateur.`,
        },
        {
          title: "3. Désactivation des cookies",
          content: `Vous pouvez configurer votre navigateur pour bloquer les cookies. Cependant, cela pourrait affecter certaines fonctionnalités du site et rendre certaines sections moins accessibles.`,
        },
        {
          title: "4. Consentement",
          content: `En naviguant sur ce site, vous consentez à l'utilisation des cookies techniques nécessaires pour le bon fonctionnement du site.`,
        },
      ],
    };
  default:
    return {
      title: "Page non trouvée",
      data: [
        {
          title: "Error 404",
          content: "La page demandée n'existe pas.",
        },
      ],
    };
  }
};


export const stacksData = [
  {
    icon: SiAirtable,
    name: "Airtable",
    link: "https://www.airtable.com/"
  },
  {
    icon: SiNotion,
    name: "Notion",
    link: "https://www.notion.com/fr"
  },
  {
    icon: SiOpenai,
    name: "OpenAi",
    link: "https://openai.com/"
  },
  {
    icon: SiN8N,
    name: "N8N",
    link: "https://n8n.io/"
  },
  {
    icon: SiGoogle,
    name: "GOOGLE",
    link: "https://GOOGLE.com/"
  },
  {
    icon: SiCalendly,
    name: "Calendly",
    link: "https://calendly.com/"
  },
  {
    icon: SiZapier,
    name: "Zapier",
    link: "https://zapier.com/"
  },
  {
    icon: IoShield,
    name: "NextAuth",
    link: "https://next-auth.js.org/"
  },
  {
    icon: SiSlack,
    name: "Slack",
    link: "https://slack.com/"
  },
  {
    icon: SiStripe,
    name: "Stripe",
    link: "https://stripe.com/"
  },
  {
    icon: SiTwilio,
    name: "Twilio",
    link: "https://www.twilio.com/"
  },
  {
    icon: SiDropbox,
    name: "Dropbox",
    link: "https://www.dropbox.com/"
  },
  {
    icon: SiHubspot,
    name: "Hubspot",
    link: "https://www.hubspot.fr/"
  },
  {
    icon: SiMailchimp,
    name: "Mailchimp",
    link: "https://mailchimp.com/"
  },
  {
    icon: SiSalesforce,
    name: "Salesforce",
    link: "https://www.salesforce.com/"
  },
  {
    icon: SiShopify,
    name: "Shopify",
    link: "https://www.shopify.com/"
  },
  {
    icon: SiWoocommerce,
    name: "Woocommerce",
    link: "https://woocommerce.com/"
  },
  {
    icon: SiPaypal,
    name: "Paypal",
    link: "https://www.paypal.com/"
  },
  {
    icon: SiTrello,
    name: "Trello",
    link: "https://trello.com/"
  },
  {
    icon: FaFigma,
    name: "Figma",
    link: "https://www.figma.com/"
  },
  {
    icon: SiClickup,
    name: "Clickup",
    link: "https://clickup.com/"
  },
  {
    icon: SiGooglesheets,
    name: "Googlesheets",
    link: "https://docs.google.com/spreadsheets/"
  },
];
