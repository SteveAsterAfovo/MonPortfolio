export type StackCategory = {
  label: string;
  icon: string;
  items: string[];
};

export type Project = {
  id: string;
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
  logo?: string;
  logoDesk?: string;
};


export type Certification = {
  name: string;
  org: string;
  date: string;
};


export const URL = {
  STAFPRINT: "https://stafprint.com/",
  WHATSAPP: "https://wa.me/2290166523639",
};

export const portfolioData = {
  identity: {
    name: "Steve Aster D. AFOVO",
    role: "Développeur Fullstack · IA-Augmented Developer",
    quote:
      "Je ne code pas pour coder. Je code pour résoudre, construire et transformer.",
    location: "Abomey-Calavi, Bénin",
    email: "steveasterafovo@gmail.com",
    phone: "+229 01 66 52 36 39",
    linkedin: "linkedin.com/in/SteveAsterAfovo",
    github: "github.com/SteveAsterAfovo",
    portfolio: "steveasterafovo.netlify.app",
    company: "stafprint.com",
    year: "2026",
  },
  profile: {
    paragraphs: [
      "Responsable des opérations chez STAF PRINT CENTER, je suis développeur fullstack à double culture : Finance & Tech.",
      "Je conçois des produits web et SaaS qui passent en production. Mon approche : architecture solide, exécution rapide, design soigné.",
      "J'opère sur des projets locaux et internationaux, du MVP à la plateforme à plusieurs modules.",
    ],
    differentiators: [
      "Double culture Finance & Tech",
      "IA-Augmented : Claude, Cursor, GitHub Copilot au quotidien",
      "Produits en production, pas juste des side projects",
    ],
    softSkills: ["Rigueur", "Créativité", "Autonomie", "Leadership"],
  },
  stackIntro: "Une stack moderne, choisie pour la productivité et la fiabilité - du front pixel-perfect au back robuste, avec l'IA comme accélérateur.",
  stack: [
    {
      label: "Frontend",
      icon: "Monitor",
      items: ["React.js", "Vue.js", "Nuxt.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
    },
    {
      label: "Backend & API",
      icon: "Server",
      items: ["Node.js", "API REST", "GraphQL", "Sails.js", "Laravel"],
    },
    {
      label: "Cloud & DevOps",
      icon: "Cloud",
      items: ["AWS", "GitHub", "CI/CD", "Netlify", "Vercel", "Webpack", "Vite"],
    },
    {
      label: "Outils IA",
      icon: "Sparkles",
      items: ["Claude", "Cursor", "GitHub Copilot", "Prompt Engineering"],
    },
    {
      label: "Tests & Qualité",
      icon: "ShieldCheck",
      items: ["Jest", "Cypress", "OWASP", "WCAG", "Accessibilité"],
    },
    {
      label: "Design & Outils",
      icon: "Palette",
      items: ["Figma", "Adobe Suite", "Notion", "Odoo", "Pinia", "Redux"],
    },
  ] as StackCategory[],
  stackFooter:
    "J'utilise l'IA comme multiplicateur de productivité, pas comme raccourci.",
  certifications: [
    { name: "AWS Academy - Cloud Foundation", org: "Amazon Web Services", date: "Mars 2026" },
    { name: "Prompt Design in Vertex AI", org: "Google Cloud", date: "Juin 2024" },
    { name: "Glide Certification Level 1", org: "Glide", date: "Oct. 2023" },
    { name: "Alumni Fondation Tony Elumenu", org: "TEF", date: "Déc. 2021" },
    { name: "Prix Résidences du Numérique", org: "Labis Bénin", date: "Sept. 2021" },
    { name: "HTML5 + CSS", org: "OpenClassrooms", date: "Août 2023" },
  ] as Certification[],
  education: [
    { name: "Licence Pro Finance Contrôle & Audit", org: "UPAO", date: "2017" },
    { name: "Baccalauréat G2 Comptabilité", org: "LTC Porto-Novo", date: "2014" },
  ],
  autodidact: ["Architecture SaaS", "Sécurité OWASP", "DevOps", "IA appliquée"],
};

export type PortfolioData = typeof portfolioData;
export const { identity, profile, stack, stackIntro, stackFooter, certifications, education, autodidact } = portfolioData;
