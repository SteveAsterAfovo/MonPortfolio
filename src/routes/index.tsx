import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer, WhatsAppFab } from "@/components/site";
import { Hero, Projects, About, Stack, Credentials, Contact } from "@/components/pages";
import { identity, projects, stack, STAFPRINT_URL } from "@/lib/shared";

const AUTHOR_NAME = "Steve Aster D. AFOVO";
const SITE_NAME = `${AUTHOR_NAME} - Portfolio`;
const TITLE = `${AUTHOR_NAME} | Développeur Fullstack & IA - Abomey-Calavi, Bénin`;
const DESCRIPTION = `Portfolio de Steve Aster D. AFOVO, développeur fullstack IA-augmented et manager. Découvre mes projets, stack technique et expertises.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: SITE_NAME },
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
          name: SITE_NAME,
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
