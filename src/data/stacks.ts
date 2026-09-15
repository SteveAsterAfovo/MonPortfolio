export type StackCategory = {
  label: string;
  icon: string;
  items: string[];
};

export const stacks = {
  intro: "Une stack moderne, choisie pour la productivité et la fiabilité - du front pixel-perfect au back robuste, avec l'IA comme accélérateur.",

  detail: [
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

  footer: "J'utilise l'IA comme multiplicateur de productivité, pas comme raccourci.",
};
