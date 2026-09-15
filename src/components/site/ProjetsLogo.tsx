import logos from "@/assets/logos.json";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { cn } from "@/lib/utils";

export function SteveMobLogo({ className }: { className?: string }) {
  const dark = useDarkMode();
  return (
    <img
      src={dark ? logos.mw : logos.mc}
      alt="Logo Steve Aster Afovo"
      className={cn("object-contain", className)}
      loading="eager"
      decoding="async"
    />
  );
}

export function SteveDeskLogo({ className }: { className?: string }) {
  const dark = useDarkMode();

  return (
    <img
      src={dark ? logos.dw : logos.dc}
      alt="Logo Steve Aster Afovo"
      className={cn("object-contain", className)}
      loading="eager"
      decoding="async"
    />
  );
}