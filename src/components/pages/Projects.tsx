import { projects, SectionTitle } from "@/lib/shared";

export function Projects() {
  return (
    <section id="projets" className="border-b border-border py-14 sm:py-24">
      <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
        <div className="min-w-0">
          <SectionTitle tag="Sélection" title="Projets en production" />
        </div>
        <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground sm:block">
          01 — {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-12 gap-4 sm:gap-5">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className={`card-flat card-hover group flex min-w-0 flex-col rounded-2xl p-5 sm:p-8 ${i === 0 ? "col-span-12" : "col-span-12 md:col-span-6"
              }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.03em] sm:text-2xl">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="mt-1.5 text-sm text-muted-foreground">{project.subtitle}</p>
                )}
              </div>
              {project.logoDesk || project.logo ? (
                <img
                  src={project.logoDesk ?? project.logo}
                  alt={`Logo du projet ${project.title}`}
                  loading="lazy"
                  className="h-7 w-auto max-w-22.5 shrink-0 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 sm:h-8 sm:max-w-30"
                />
              ) : (
                <span className="font-mono text-xs text-muted-foreground">{project.index}</span>
              )}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {i === 0 ? project.long : project.short}
            </p>

            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
              {project.role}
            </p>

            {project.modules && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.modules.map((m) => (
                  <span
                    key={m.name}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs"
                  >
                    <span aria-hidden="true">{m.icon}</span> {m.name}
                  </span>
                ))}
              </div>
            )}

            {i === 0 && (
              <ul className="mt-6 grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="text-primary">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {project.badge && (
              <p className="mt-6 rounded-xl border border-primary/20 bg-primary/8 px-4 py-2.5 text-xs">
                {project.badge}
              </p>
            )}

            {project.extras?.map((e) => (
              <p key={e} className="mt-4 font-mono text-xs text-primary">
                {e}
              </p>
            ))}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 self-start pt-7 text-sm font-medium text-primary transition-colors duration-300 hover:text-foreground"
            >
              Voir le projet
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
