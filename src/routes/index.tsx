import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, WhatsAppFab } from "@/components/site";
import { Hero, Projects, About, Stack, Credentials, Contact } from "../components/pages";
import { identity, projects, stack, STAFPRINT_URL } from "../lib/shared";

const TITLE = "Steve Aster Afovo - Développeur Fullstack & IA | Bénin";
const DESCRIPTION = "Développeur fullstack IA-augmented à Abomey-Calavi (Bénin) et responsable des opérations de STAF PRINT CENTER. Plateformes SaaS, cybersécurité, suites business et outils en production.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "développeur fullstack Bénin, développeur React Vue Node, SaaS Afrique de l'Ouest, IA-augmented developer, Steve Aster Afovo, STAF PRINT CENTER, Porto-Novo" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: "Steve Aster Afovo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: identity.name,
          jobTitle: [identity.role, "Responsable des opérations — STAF PRINT CENTER"],
          email: `mailto:${identity.email}`,
          telephone: identity.phone,
          url: `https://${identity.portfolio}`,
          address: { "@type": "PostalAddress", addressLocality: "Abomey-Calavi", addressCountry: "BJ" },
          sameAs: [`https://${identity.linkedin}`, `https://${identity.github}`, STAFPRINT_URL],
          knowsAbout: stack.flatMap((c) => c.items),
          worksFor: [
            { "@type": "Organization", name: "Pro Gestion Soft" },
            { "@type": "Organization", name: "STAF PRINT CENTER", url: STAFPRINT_URL },
          ],
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Projects />
          <About />
          <Stack />
          <Credentials />
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
