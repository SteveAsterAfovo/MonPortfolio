import logos from "@/assets/logos.json";

export type ProjectKey = keyof typeof logos.projets;

export type Project = {
  id: string;
  projectKey: ProjectKey;
  index: string;
  category: string;
  title: string;
  subtitle?: string;
  role: string;
  short: string;
  long: string;
  features: string[];
  stack: string[];
  url: string;
  extras?: string[];
  modules?: { icon: string; name: string }[];
  partners?: string[];
  badge?: string;
  status?: "new" | "updated";
};

export const projects: Project[] = [
  {
    id: "cypass",
    projectKey: "cypass",
    index: "01",
    category: "SAAS · CYBERSÉCURITÉ",
    title: "CYPASS",
    subtitle: "Cybersecurity Platform for Assurance, Surveillance and Support",
    role: "Architecte & Chef de Projet",
    short: "Plateforme nationale de cybersécurité regroupant surveillance, scan, contrôle documentaire et veille de fuites.",
    long: "CYPASS est une plateforme SaaS intégrée destinée aux institutions et entreprises, avec quatre modules couvrant tout le cycle de cyberdéfense : DocSentry, VigiTech, SecuScan et LeakMonitor. Architecture multi-tenant, audit trail, conformité ASIN.",
    features: [
      "Surveillance temps réel des actifs numériques",
      "Scan automatisé de vulnérabilités",
      "Détection de fuites de données (LeakMonitor)",
      "Contrôle documentaire et conformité",
      "Tableaux de bord institutionnels",
    ],
    stack: ["Vue.js", "Node.js", "Tailwind", "PostgreSQL", "AWS"],
    url: "https://cypass.netlify.app/",
    modules: [
      { icon: "🔒", name: "DocSentry" },
      { icon: "👁", name: "VigiTech" },
      { icon: "🔍", name: "SecuScan" },
      { icon: "💧", name: "LeakMonitor" },
    ],
    partners: ["ASIN", "BJ-CSIRT", "ARCEP", "Ministère du Numérique", "APIEX"],
    status: "updated",
  },
  {
    id: "suitops",
    projectKey: "suitops",
    index: "02",
    category: "SAAS · BUSINESS SUITE",
    title: "SuitOps",
    role: "Architecte & Développeur Principal",
    short: "Suite business modulaire pour PME : recrutement, facturation, RH et productivité dans une seule plateforme.",
    long: "SuitOps regroupe les opérations critiques d'une PME africaine moderne : recrutement, gestion RH, facturation et productivité interne. Pensé pour une adoption rapide, avec une UX inspirée des meilleurs SaaS internationaux.",
    features: [
      "Module Hire - pipeline candidat complet",
      "Facturation conforme normes locales",
      "Gestion RH (contrats, congés, paie)",
      "Espace productivité collaboratif",
    ],
    stack: ["Nuxt.js", "Node.js", "Sails.js", "Tailwind", "PostgreSQL"],
    url: "https://suitops.netlify.app/",
    modules: [
      { icon: "👥", name: "Hire" },
      { icon: "🧾", name: "Facturation" },
      { icon: "🏢", name: "RH" },
      { icon: "⚡", name: "Productivité" },
    ],
  },
  {
    id: "hire",
    projectKey: "hire",
    index: "03",
    category: "SAAS · RECRUITMENT & TALENT",
    title: "Hire",
    role: "Développeur Principal",
    short: "Plateforme moderne qui connecte les talents aux meilleures opportunités professionnelles.",
    long: "Hire est une solution complète pour recruteurs et candidats : recherche avancée, suivi des candidatures, messagerie intégrée et recommandations intelligentes. Module phare de la suite SuitOps.",
    features: [
      "Recherche et filtrage avancé des candidats",
      "Suivi des candidatures en temps réel",
      "Messagerie intégrée recruteurs / candidats",
      "Recommandations personnalisées de postes",
      "Notifications et alertes d'opportunités",
    ],
    stack: ["Nuxt.js", "Sails.js", "Node.js", "Tailwind", "PostgreSQL"],
    url: "https://hire-suitops.netlify.app/",
  },
  {
    id: "eqt",
    projectKey: "easyquicktrack",
    index: "04",
    category: "WEB APP · SEO & ANALYTICS",
    title: "EasyQuickTrack",
    role: "Développeur Principal",
    short: "Outil léger de tracking SEO et analytics pour sites en croissance - installation en minutes.",
    long: "EasyQuickTrack permet aux PME de suivre leurs performances SEO et leur trafic sans la complexité des suites entreprise. Installation rapide, tableaux clairs, alertes intelligentes.",
    features: [
      "Tracking SEO multi-keywords",
      "Dashboard analytics simplifié",
      "Alertes de chute de positions",
      "Rapports PDF automatiques",
    ],
    stack: ["React", "Node.js", "MongoDB", "Chart.js"],
    url: "https://eqt.netlify.app/",
  },
  {
    id: "axiom",
    index: "05",
    category: "OPEN SOURCE · DEVELOPER TOOLS",
    title: "AXIOM",
    role: "Auteur & Mainteneur Principal",
    short: "Librairie open source de composants UI et utilitaires pour accélérer les projets Vue/React.",
    long: "AXIOM est une boîte à outils de composants accessibles, design tokens et helpers TS, conçue pour standardiser la qualité au sein de Pro Gestion Soft puis ouverte à la communauté.",
    features: [
      "Composants accessibles (WCAG AA)",
      "Design tokens portables",
      "Helpers TypeScript typés",
      "Documentation interactive",
    ],
    stack: ["TypeScript", "Vue", "React", "Vite"],
    url: "https://pgs-axiom.netlify.app/",
    logo: `${PGS_LOGO_BASE}/AXIOM-MC.png`,
    logoDesk: `${PGS_LOGO_BASE}/AXIOM-DC.png`,
    extras: ["Disponible sur NPM : @progestionsoft/axiom"],
  },
  {
    id: "pgs",
    index: "06",
    category: "ENTREPRISE · LANDING PAGE · CORPORATE",
    title: "Pro Gestion Soft",
    role: "Co-Fondateur & Responsable R&D",
    short: "Identité digitale et vitrine corporate de l'éditeur SaaS Pro Gestion Soft.",
    long: "Site corporate de Pro Gestion Soft - éditeur de solutions de gestion pour le marché ouest-africain. Pensé comme une vitrine premium, performant, SEO-ready.",
    features: [
      "Performance Lighthouse > 95",
      "SEO multi-pages",
      "Animations sobres et premium",
      "Formulaires connectés CRM",
    ],
    stack: ["Nuxt.js", "Tailwind", "Netlify"],
    url: "https://progestionsoft.netlify.app/",
    badge: "🏆 Lauréate - Résidence du Numérique, Labis Bénin 2021",
    logo: `${PGS_LOGO_BASE}/PGS-MC.png`,
    logoDesk: `${PGS_LOGO_BASE}/PGS-DC.png`,
  },
  {
    id: "pgsdocs",
    index: "07",
    category: "DOCUMENTATION TECHNIQUE",
    title: "PGS Docs",
    role: "Concepteur & Rédacteur Technique",
    short: "Hub de documentation technique pour l'écosystème Pro Gestion Soft.",
    long: "PGS Docs centralise la documentation produit, technique et API de l'écosystème PGS. Navigation rapide, recherche, exemples de code interactifs.",
    features: [
      "Recherche full-text instantanée",
      "Exemples de code copiables",
      "Versionning de la doc",
      "Mode sombre/clair",
    ],
    stack: ["VitePress", "Markdown", "TypeScript"],
    url: "https://pgsdocs.netlify.app/",
    logo: `${PGS_LOGO_BASE}/PGSDocs-MC.png`,
    logoDesk: `${PGS_LOGO_BASE}/PGSDocs-DC.png`,
  },
] as Project[];
