import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { portfolioData } from "../data/content";

const { identity, profile, stack, stackIntro, stackFooter, projects, certifications, education, autodidact } =
  portfolioData;

const LOGO = "https://cdn.jsdelivr.net/gh/steveasterafovo/Files/Images/Logos/SteveAsterAfovo-DC.png";

const NAV = [
  { href: "#projets", label: "Projets" },
  { href: "#a-propos", label: "À propos" },
  { href: "#stack", label: "Stack" },
  { href: "#parcours", label: "Parcours" },
];

const TITLE = "Steve Aster Afovo — Développeur Fullstack & IA | Bénin";
const DESCRIPTION = "Développeur fullstack IA-augmented à Abomey-Calavi (Bénin). Plateformes SaaS, cybersécurité, suites business et outils open source en production.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "développeur fullstack Bénin, développeur React Vue Node, SaaS Afrique de l'Ouest, IA-augmented developer, Steve Aster Afovo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Steve Aster Afovo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: identity.name,
          jobTitle: identity.role,
          email: `mailto:${identity.email}`,
          telephone: identity.phone,
          url: `https://${identity.portfolio}`,
          address: { "@type": "PostalAddress", addressLocality: "Abomey-Calavi", addressCountry: "BJ" },
          sameAs: [`https://${identity.linkedin}`, `https://${identity.github}`],
          knowsAbout: stack.flatMap((c) => c.items),
          worksFor: { "@type": "Organization", name: "Pro Gestion Soft" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Projets de Steve Aster Afovo",
          itemListElement: projects.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            description: p.short,
            url: p.url,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background font-body text-foreground antialiased">
      <Header />

      <main className="relative z-10">
        <Hero />
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Projects />
          <About />
          <Stack />
          <Credentials />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Logo Steve Aster Afovo" className="h-8 w-auto sm:h-9" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="py-1 transition-colors duration-300 hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-85 sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"
                  }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-display text-lg font-semibold tracking-tight transition-colors duration-300 hover:text-primary"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 mb-4 rounded-full bg-primary px-5 py-3 text-center font-medium text-primary-foreground"
          >
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-8">
          <div className="animate-rise mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-secondary px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]">
              Disponible pour de nouveaux projets
            </span>
          </div>

          <h1 className="animate-rise font-display text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-balance">
            {identity.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-primary">{identity.role.split("·")[0]?.trim()}</span>
          </h1>

          <p className="animate-rise mt-7 max-w-[58ch] text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {profile.paragraphs[0]}
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#projets"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-90"
            >
              Voir mes projets
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 font-medium transition-colors duration-300 hover:bg-secondary"
            >
              Me contacter
            </a>
          </div>
        </div>

        <aside className="min-w-0 lg:col-span-4">
          <div className="card-flat animate-rise-slow rounded-2xl p-6 sm:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              En bref
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat value={String(projects.length)} label="Produits" />
              <Stat value={String(certifications.length)} label="Certifs" />
              <Stat value="5+" label="Ans" />
            </div>
            <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <p>{identity.location}</p>
              <a
                href={`mailto:${identity.email}`}
                className="block break-all transition-colors hover:text-primary"
              >
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

function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-primary sm:text-[11px]">
        {tag}
      </p>
      <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-balance">
        {title}
      </h2>
    </>
  );
}

function Projects() {
  return (
    <section id="projets" className="border-b border-border py-18 sm:py-24">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <SectionTitle tag="Sélection" title="Projets en production" />
        </div>
        <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground sm:block">
          01 — {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-12 gap-5">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className={`card-flat card-hover group flex flex-col rounded-2xl p-6 sm:p-8 ${i === 0 ? "col-span-12" : "col-span-12 md:col-span-6"
              }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
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
                  className="h-8 w-auto max-w-[120px] shrink-0 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
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
              <p className="mt-6 rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-2.5 text-xs">
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

function About() {
  return (
    <section id="a-propos" className="border-b border-border py-18 sm:py-24">
      <SectionTitle tag="À propos" title={identity.quote} />

      <div className="mt-12 grid grid-cols-12 gap-8 md:gap-10">
        <div className="col-span-12 md:col-span-7">
          {profile.paragraphs.map((p) => (
            <p
              key={p}
              className="mb-5 max-w-[60ch] text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
            >
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-2">
            {profile.softSkills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5">
          <div className="card-flat rounded-2xl p-7 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Ce qui me distingue
            </p>
            <ul className="mt-6 space-y-4">
              {profile.differentiators.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary">◆</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold tracking-tight text-primary">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-b border-border py-18 sm:py-24">
      <SectionTitle tag="Stack" title="Les outils du métier" />
      <p className="mt-6 mb-12 max-w-[64ch] text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
        {stackIntro}
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((cat) => (
          <div key={cat.label} className="card-flat card-hover rounded-2xl p-6 sm:p-7">
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em]">{cat.label}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 font-mono text-sm text-primary">{stackFooter}</p>
    </section>
  );
}

function Credentials() {
  return (
    <section id="parcours" className="border-b border-border py-18 sm:py-24">
      <SectionTitle tag="Parcours" title="Certifications & formation" />
      <div className="mt-12 grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-7">
          <div className="card-flat rounded-2xl p-7 sm:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Certifications
            </h3>
            <ul className="mt-6 divide-y divide-border">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 py-3.5">
                  <div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.org}</div>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 space-y-5 md:col-span-5">
          <div className="card-flat rounded-2xl p-7 sm:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Formation
            </h3>
            <ul className="mt-6 space-y-4">
              {education.map((e) => (
                <li key={e.name}>
                  <div className="text-sm font-medium">{e.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {e.org} · {e.date}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-flat rounded-2xl p-7 sm:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Autodidacte
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {autodidact.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-secondary px-3 py-1 text-xs"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-18 sm:py-24">
      <div className="rounded-3xl bg-foreground p-8 text-background sm:p-12 md:p-16">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-background/60 sm:text-[11px]">
          Contact
        </p>
        <h2 className="max-w-[20ch] font-display text-[clamp(1.9rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-balance">
          Un projet à construire ? Parlons-en.
        </h2>
        <div className="mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <a
              href={`mailto:${identity.email}`}
              className="block break-all font-display text-lg font-medium tracking-tight underline decoration-background/40 underline-offset-8 transition-opacity hover:opacity-80 sm:text-2xl"
            >
              {identity.email}
            </a>
            <a
              href={`tel:${identity.phone.replace(/\s/g, "")}`}
              className="block font-mono text-sm text-background/70 transition-opacity hover:opacity-100"
            >
              {identity.phone}
            </a>
          </div>
          <a
            href={`mailto:${identity.email}`}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 font-medium text-foreground transition-opacity duration-300 hover:opacity-90 sm:w-auto"
          >
            Lancer un projet
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <img src={LOGO} alt="Logo Steve Aster Afovo" className="h-8 w-auto" loading="lazy" />
        <span className="font-mono text-[10px] uppercase tracking-widest">
          {identity.location} — {identity.year}
        </span>
        <div className="flex gap-6">
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
            href={`https://${identity.company}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-primary"
          >
            Entreprise
          </a>
        </div>
      </div>
    </footer>
  );
}
