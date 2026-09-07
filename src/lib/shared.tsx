import { portfolioData } from "@/data/content";
import { useTheme } from "./theme";

export const {
  identity,
  profile,
  stack,
  stackIntro,
  stackFooter,
  projects,
  certifications,
  education,
  autodidact,
} = portfolioData;

export const LOGOS = {
  lightDesktop: "https://cdn.jsdelivr.net/gh/steveasterafovo/Files/Images/Logos/SteveAsterAfovo-DC.png",
  lightMobile: "https://cdn.jsdelivr.net/gh/steveasterafovo/Files/Images/Logos/SteveAsterAfovo-MC.png",
  darkDesktop: "https://cdn.jsdelivr.net/gh/steveasterafovo/Files/Images/Logos/SteveAsterAfovo-DW.png",
  darkMobile: "https://cdn.jsdelivr.net/gh/steveasterafovo/Files/Images/Logos/SteveAsterAfovo-MW.png",
  metaImg: "https://cdn.jsdelivr.net/gh/stafprintcenter/Files/Images/Other/meta.avif",
};

export const NAV = [
  { href: "#projets", label: "Projets" },
  { href: "#a-propos", label: "À propos" },
  { href: "#stack", label: "Stack" },
  { href: "#parcours", label: "Parcours" },
];

export const STAFPRINT_URL = "https://stafprint.com/";
export const WHATSAPP_URL = "https://wa.me/2290166523639";

/** Logo adapté au thème (clair/sombre) et au format (mobile/desktop). */
export function Logo({ className = "h-8 w-auto sm:h-9" }: { className?: string }) {
  const { theme } = useTheme();
  const dark = theme === "dark";
  return (
    <>
      <img
        src={dark ? LOGOS.darkMobile : LOGOS.lightMobile}
        alt="Logo Steve Aster Afovo"
        className={`${className} sm:hidden`}
      />
      <img
        src={dark ? LOGOS.darkDesktop : LOGOS.lightDesktop}
        alt="Logo Steve Aster Afovo"
        className={`${className} hidden sm:block`}
      />
    </>
  );
}

export function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-primary sm:text-[11px]">
        {tag}
      </p>
      <h2 className="font-display text-[clamp(1.75rem,6vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-balance">
        {title}
      </h2>
    </>
  );
}

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
