import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import { NotFoundComponent, ErrorComponent } from "@/components/errors";
import { LOGOS, identity, projects, stack, STAFPRINT_URL } from "@/lib/shared";

const PAGE_TITLE = "Steve Aster Afovo - Développeur Fullstack & IA";
const PAGE_DESC = "Portfolio de Steve Aster D. AFOVO, développeur fullstack IA-augmented basé à Abomey-Calavi, Bénin.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#eef1f6" },
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "author", content: "Steve Aster D. AFOVO" },

      /* Open Graph / Facebook / WhatsApp */
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: `Steve Aster AFOVO Portfolio` },
      { property: "og:image", content: `${LOGOS.meta}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Steve Aster AFOVO Portfolio" },
      { property: "og:url", content: `${SITE_LINK.docsUrl}` },
      { property: "og:locale", content: "fr_BJ" },

      /* Twitter / X */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${LOGOS.meta}` },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:site", content: "@StafPrintCenter" },

      /* Google Verification */
      { name: "google-site-verification", content: "OdKxHpVkBSxk0mj4vD4OTmZPdVi5pWzyCu4QPIMHy9A" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_LINK.docsUrl}` },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
    ],
    scripts: [
      /* 1. Schéma WebPage / TechArticle pour le hub de documentation */
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_LINK.docsUrl}/#webpage`,
          url: SITE_LINK.docsUrl,
          name: PAGE_TITLE,
          description: PAGE_DESC,
          inLanguage: "fr-BJ",
          publisher: {
            "@type": "Organization",
            name: "Steve Aster AFOVO Portfolio",
            LOGOS: { "@type": "ImageObject", url: `${LOGOS.meta}` }
          },
          mainEntity: {
            "@type": "ItemList",
            name: "Rubriques de documentation",
            description: "Guides utilisateurs, procédures de suivi de commande, formations et support technique."
          }
        }),
      }
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
