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

};

export type PortfolioData = typeof portfolioData;
export const { certifications, education } = portfolioData;
