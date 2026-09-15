export type Certification = {
  name: string;
  org: string;
  date: string;
};

export const LINKS = {
  STAFPRINT: "https://stafprint.com/",
  WHATSAPP: "https://wa.me/2290166523639",
};

export const portfolioData = {
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
};

export type PortfolioData = typeof portfolioData;
export const { certifications, education, autodidact } = portfolioData;
