export type Certification = {
  name: string;
  org: string;
  date: string;
  url?: string;
};

export const knowledge = {
  certifications: [
    {
      name: "Excel Fundamentals for Data Analysis",
      org: "Macquarie University", date: "Sept. 2026",
      url: "https://www.coursera.org/account/accomplishments/verify/SVYT5RBCZDDD",
    },
    {
      name: "Code Yourself! An Introduction to Programming",
      org: "The University of Edinburgh", date: "Août 2026",
      url: "https://coursera.org/verify/example-code"
    },
    {
      name: "Basic Information Literacy",
      org: "The State University of New York",
      date: "Août 2026"
    },
    {
      name: "Intelligence Artificielle pour tous",
      org: "FORCE-N & ADPM Bénin", date: "Août 2026"
    },
    {
      name: "Certificate of completion: Claude 101",
      org: "Anthropic", date: "Juil. 2026",
      url: "https://anthropic.com/verify/example-claude"
    },
    {
      name: "Certificate of Completion: Al Fluency Framework & Foundations",
      org: "Anthropic", date: "Juil. 2026"
    },
    {
      name: "AWS Academy - Cloud Foundation",
      org: "Amazon Web Services", date: "Mars 2026",
      url: "https://aws.amazon.com/verify/example-aws"
    },
    {
      name: "Prompt Design in Vertex AI",
      org: "Google Cloud", date: "Juin 2024",
      url: "https://cloud.google.com/verify/example-vertex"
    },
    {
      name: "Lancez votre Startup digitale en 8 semaines",
      org: "Ibudo Hub", date: "Oct. 2023"
    },
    {
      name: "Glide Certification Level 1",
      org: "Glide", date: "Émis le oct. 2023 · Expiré le oct. 2024"
    },
    {
      name: "Alumni Fondation Tony Elumenu",
      org: "TEF", date: "Déc. 2021"
    },
    {
      name: "Prix Résidences du Numérique",
      org: "Labis Bénin", date: "Sept. 2021"
    },
    {
      name: "HTML5 + CSS",
      org: "OpenClassrooms", date: "Août 2023",
      url: "https://openclassrooms.com/verify/example-html"
    },
  ] as Certification[],

  education: [
    { name: "Licence Pro Finance Contrôle & Audit", org: "UPAO", date: "2017" },
    { name: "Baccalauréat G2 Comptabilité", org: "LTC Porto-Novo", date: "2014" },
  ],
};
