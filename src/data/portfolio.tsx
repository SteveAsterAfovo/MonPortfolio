import { portfolioData } from "@/data/content";

export const { identity, profile, stack, stackIntro, stackFooter, projects, certifications, education, autodidact } = portfolioData;

export const STAFPRINT_URL = "https://stafprint.com/";
export const WHATSAPP_URL = "https://wa.me/2290166523639";

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="font-display text-2xl font-semibold tracking-tight text-primary">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
