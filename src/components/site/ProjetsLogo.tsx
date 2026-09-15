import logos from "@/assets/logos.json";
import { useIsMobile } from "@/hooks/use-mobile";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { cn } from "@/lib/utils";

type ProjectKey = keyof typeof logos.projets;

interface ProjetsLogoProps {
  project: ProjectKey;
  className?: string | undefined;
  alt?: string | undefined;
}


function getProjectLogos(project: ProjectKey) {
  const variants = logos.projets[project];
  if (!variants) {
    throw new Error(`Logo du projet "${project}" introuvable dans logos.json`);
  }
  return variants;
}

/** Logo mobile d'un projet : MC en clair, MW en sombre. */
export function ProjetsMobLogo({ project, className, alt }: ProjetsLogoProps) {
  const dark = useDarkMode();
  const variants = getProjectLogos(project);

  return (
    <img
      src={dark ? variants.mw : variants.mc}
      alt={alt ?? `Logo mobile du projet ${project}`}
      className={cn("object-contain", className)}
      loading="eager"
      decoding="async"
    />
  );
}

/** Logo desktop d'un projet : DC en clair, DW en sombre. */
export function ProjetsDeskLogo({ project, className, alt }: ProjetsLogoProps) {
  const dark = useDarkMode();
  const variants = getProjectLogos(project);

  return (
    <img
      src={dark ? variants.dw : variants.dc}
      alt={alt ?? `Logo desktop du projet ${project}`}
      className={cn("object-contain", className)}
      loading="eager"
      decoding="async"
    />
  );
}

/** Logo responsive d'un projet : choisit automatiquement mobile/desktop + thème. */
export function ProjetsLogo({ project, className, alt }: ProjetsLogoProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <ProjetsMobLogo project={project} className={className} alt={alt} />;
  }

  return <ProjetsDeskLogo project={project} className={className} alt={alt} />;
}
