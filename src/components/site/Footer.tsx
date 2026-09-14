import { identity } from "@/data/content";
import { SteveDeskLogo } from "@/components/site";
import { URL } from "@/data/content";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:flex-row md:justify-between md:gap-8 md:py-10">
        <div className="shrink-0">
          <SteveDeskLogo className="h-10 w-auto sm:h-12" />
        </div>

        {/* Informations */}
        <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
            {identity.location} - © {identity.year}
          </span>
        </div>

        {/* Liens */}
        <nav
          aria-label="Liens externes"
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-6"
        >
          <a
            href={`https://${identity.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary"
          >
            LinkedIn
          </a>

          <a
            href={`https://${identity.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary"
          >
            GitHub
          </a>

          <a
            href={URL.STAFPRINT}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary"
          >
            STAF PRINT CENTER
          </a>
        </nav>
      </div>
    </footer>
  );
}
