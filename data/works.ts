import { FaCode, FaJira, FaLock, FaRocket, FaShopify } from "react-icons/fa6";
import { FaGithub, FaDiscord, FaMedium, FaTwitter, FaHtml5, FaCss3, FaReact, FaFigma, FaPinterest, FaTachometerAlt, FaPaintBrush, FaHeadphonesAlt, FaSearch, FaMoneyBillAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiZod, SiPrisma, SiBlender, SiGreensock, SiGit, SiFramer, SiReactquery, SiResend, SiReacthookform, SiTailwindcss, SiShadcnui, SiShopify, SiVercel, SiGithub, SiSocketdotio, SiGraphql, SiStrapi, SiAirtable, SiNotion, SiOpenai, SiN8N, SiGoogle, SiCalendly, SiFathom, SiZapier, SiSlack, SiStripe, SiTwilio, SiDropbox, SiHubspot, SiMailchimp, SiSalesforce, SiWoocommerce, SiPaypal, SiTrello, SiClickup, SiGooglesheets } from "react-icons/si";
import { RiBearSmileLine, RiCodeSSlashLine, RiHomeSmile2Fill, RiRobot2Fill, RiServiceFill, RiUser5Fill } from "react-icons/ri";
import { AiOutlineAppstore, AiOutlineSketch } from "react-icons/ai";
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
    title: "Combien ça coûte ?", 
    content: "Le coût dépend de la complexité, du nombre d'intégrations API et du volume traité. Mise en place initiale dès 300 € (simple), 1 500 à 5 000 € (avancée), jusqu'à +10 000 € (complexe). Maintenance mensuelle dès 150 €/mois selon consommation API. Devis précis après analyse.", 
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
    symbole: "+", 
    percentage: "80",
    title: "Identité renforcée", 
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
    link: "https://cal.com/sejiux/appel-de-decouverte",
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
    link: "https://cal.com/sejiux/appel-de-decouverte",
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
    link: "https://github.com/sejiux", icon: FaGithub, label: "Github",
  },
  {
    link: "https://discordapp.com/users/849428669180542976", icon: FaDiscord, label: "Discord",
  },
  {
    link: "https://medium.com/@selimbaouz", icon: FaMedium, label: "Medium",
  },
  {
    link: "https://www.pinterest.fr/sejiux/", icon: FaPinterest, label: "Pinterest",
  },
  {
    link: "https://x.com/sejiux", icon: FaTwitter, label: "Twitter",
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
    link: "/legals/cookie-policy", label: "Politique de cookies",
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
          content: `Créateur du site : Sélim Baouz
            Responsable de publication : Sélim Baouz
            Adresse : 5 rue marcel sembat 83200 Toulon
            Email : im.sejiux@gmail.com
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
          content: `Tous les contenus présents sur ce site (textes, images, vidéos, logos, etc.) sont protégés par les lois relatives à la propriété intellectuelle. Toute reproduction, totale ou partielle, sans autorisation écrite est interdite.`,
        },
        {
          title: "4. Paiements sécurisés avec Stripe",
          content: `Les paiements effectués sur ce site sont redirigés vers **Stripe Checkout**. Stripe est responsable de la collecte et du traitement des données de paiement sur son propre domaine sécurisé. Pour plus d'informations, veuillez consulter [la politique de confidentialité de Stripe](https://stripe.com/fr/privacy).`,
        },
        {
          title: "5. Collecte et traitement des données",
          content: `Ce site utilise **Vercel Analytics** pour analyser l'usage du site et **Vercel Speed Insights** pour optimiser les performances. Ces outils collectent des données anonymisées pour améliorer votre expérience.`,
        },
        {
          title: "6. Cookies",
          content: `Aucun cookie n'est utilisé pour collecter des données personnelles. Cependant, des cookies techniques peuvent être générés pour le fonctionnement des services analytiques.`,
        },
        {
          title: "7. Droit applicable",
          content: `Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux de Toulon.`,
        },
      ],
    };
  case "privacy-policy":
    return {
      title: "Politique de confidentialité",
      data: [
        {
          title: "1. Introduction",
          content: `Je respecte votre vie privée et je m'engage à protéger vos informations personnelles. Cette politique de confidentialité décrit comment je collecte, utilise et protège les données que vous me fournissez lorsque vous utilisez ce site.`,
        },
        {
          title: "2. Données collectées",
          content: `Je collecte uniquement des données anonymisées via Vercel Analytics pour suivre l'activité du site et améliorer ses performances. Les paiements effectués via Stripe Checkout sont soumis à la politique de confidentialité de Stripe.`,
        },
        {
          title: "3. Finalité du traitement des données",
          content: `Les données collectées sont utilisées pour :
          - Analyser le trafic et améliorer le contenu du site.
          - Assurer un processus de paiement sécurisé avec Stripe.`,
        },
        {
          title: "4. Partage des données",
          content: `Je ne partage pas vos données personnelles avec des tiers, à l'exception des services nécessaires au fonctionnement du site, tels que Stripe et Vercel.`,
        },
        {
          title: "5. Vos droits",
          content: `Conformément au RGPD, vous avez le droit d'accéder, de corriger ou de demander la suppression des données vous concernant. Pour exercer ces droits, vous pouvez me contacter à l'adresse suivante : im.sejiux@gmail.com.`,
        },
        {
          title: "6. Sécurité",
          content: `Je mets en œuvre des mesures de sécurité pour protéger vos données contre tout accès non autorisé.`,
        },
      ],
    };
  case "terms-and-conditions":
    return {
      title: "Conditions générales de vente",
      data: [
        {
          title: "1. Objet",
          content: `Les présentes conditions générales régissent la vente des services et produits proposés sur ce site.`,
        },
        {
          title: "2. Tarification",
          content: `Les prix des produits sont indiqués en euros et peuvent être modifiés à tout moment. Les paiements sont traités via Stripe Checkout.`,
        },
        {
          title: "3. Commande et paiement",
          content: `La commande est validée une fois que vous avez été redirigé vers Stripe Checkout et que le paiement est effectué sur leur plateforme sécurisée.`,
        },
        {
          title: "4. Droit de rétractation",
          content: `Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation.`,
        },
        {
          title: "5. Litiges",
          content: `En cas de litige, le tribunal compétent sera celui de Toulon.`,
        },
      ],
    };
  case "cookie-policy":
    return {
      title: "Politique de cookies",
      data: [
        {
          title: "1. Utilisation des cookies",
          content: `Je n'utilise pas de cookies pour collecter des données personnelles. Toutefois, des cookies techniques peuvent être utilisés pour améliorer la navigation et la performance du site.`,
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
    icon: SiNextdotjs,
    name: "NextJs",
    link: "https://nextjs.org/"
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
    icon: SiStrapi,
    name: "Strapi",
    link: "https://strapi.io/"
  },
  {
    icon: SiGraphql,
    name: "GraphQL",
    link: "https://graphql.org/"
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
    icon: SiFramer,
    name: "Framer motion",
    link: "https://www.framer.com/motion/"
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
