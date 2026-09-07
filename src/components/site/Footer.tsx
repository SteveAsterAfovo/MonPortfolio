import { identity, Logo, STAFPRINT_URL } from "@/lib/shared";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6">
        <Logo className="h-8 w-auto" />
        <span className="font-mono text-[10px] uppercase tracking-widest">
          {identity.location} — {identity.year}
        </span>
        <div className="flex flex-wrap gap-4 sm:gap-6">
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
            href={STAFPRINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary"
          >
            STAF PRINT
          </a>
        </div>
      </div>
    </footer>
  );
}
