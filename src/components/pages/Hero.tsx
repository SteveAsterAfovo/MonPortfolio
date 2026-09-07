import { certifications, identity, profile, projects, Stat, STAFPRINT_URL } from "@/lib/shared";

export function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pt-16 pb-14 sm:px-6 sm:pt-28 sm:pb-24 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-8">
          <div className="animate-rise mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-border bg-secondary px-3.5 py-1.5 sm:mb-7">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="min-w-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
              Disponible pour de nouveaux projets
            </span>
          </div>

          <h1 className="animate-rise font-display text-[clamp(2.1rem,8.5vw,5.2rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-balance">
            {identity.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-primary">{identity.role.split("·")[0]?.trim()}</span>
          </h1>

          <p className="animate-rise mt-6 max-w-[58ch] text-[0.975rem] leading-relaxed text-pretty text-muted-foreground sm:mt-7 sm:text-lg">
            <p>{profile.paragraphs[0]}</p>
            <p className="mt-4">{profile.paragraphs[1]}</p>
          </p>

          <div className="animate-rise mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projets"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-90"
            >
              Voir mes projets
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href={STAFPRINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 font-medium transition-colors duration-300 hover:bg-secondary"
            >
              Visiter STAF PRINT CENTER
            </a>
          </div>
        </div>

        <aside className="min-w-0 lg:col-span-4">
          <div className="card-flat animate-rise-slow rounded-2xl p-5 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">En bref</p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              <Stat value={String(projects.length)} label="Produits" />
              <Stat value={String(certifications.length)} label="Certifs" />
              <Stat value="5+" label="Ans" />
            </div>
            <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <p>{identity.location}</p>
              <a href={`mailto:${identity.email}`} className="block break-all transition-colors hover:text-primary">
                {identity.email}
              </a>
              <a
                href={`tel:${identity.phone.replace(/\s/g, "")}`}
                className="block font-mono text-xs transition-colors hover:text-primary"
              >
                {identity.phone}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
