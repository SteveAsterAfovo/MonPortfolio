import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import { NotFoundComponent, ErrorComponent } from "@/components/errors";
import { LOGOS, STAFPRINT_URL } from "@/lib/shared";

// Constantes pour éviter les répétitions
const AUTHOR_NAME = "Steve Aster D. AFOVO";
const SITE_NAME = `${AUTHOR_NAME} - Portfolio`;
const PAGE_TITLE = `${AUTHOR_NAME} | Développeur Fullstack & IA - Abomey-Calavi, Bénin`;
const PAGE_DESC = `Portfolio de Steve Aster D. AFOVO, développeur fullstack IA-augmented et manager. Découvre mes projets, stack technique et expertises.`;
const META_IMAGE = `${LOGOS.meta}`;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        { name: "theme-color", content: "#eef1f6" },
        { title: PAGE_TITLE },
        { name: "description", content: PAGE_DESC },
        { name: "author", content: AUTHOR_NAME },

        /* Open Graph / Facebook / WhatsApp */
        { property: "og:title", content: PAGE_TITLE },
        { property: "og:description", content: PAGE_DESC },
        { property: "og:type", content: "profile" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:image", content: META_IMAGE },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: SITE_NAME },
        { property: "og:url", content: currentUrl },
        { property: "og:locale", content: "fr_BJ" },

        /* Twitter / X */
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: META_IMAGE },
        { name: "twitter:title", content: PAGE_TITLE },
        { name: "twitter:description", content: PAGE_DESC },
        { name: "twitter:site", content: "@StafPrintCenter" },

        /* Google Verification */
        { name: "google-site-verification", content: "OdKxHpVkBSxk0mj4vD4OTmZPdVi5pWzyCu4QPIMHy9A" },
      ],
      links: [
        { rel: "canonical", href: currentUrl },
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      ],
      scripts: [
        /* Schéma ProfilePage & Person pour le Portfolio */
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": `${currentUrl}/#profile`,
            url: currentUrl,
            name: PAGE_TITLE,
            description: PAGE_DESC,
            inLanguage: "fr-BJ",
            mainEntity: {
              "@type": "Person",
              name: AUTHOR_NAME,
              jobTitle: "Développeur Fullstack & IA",
              image: META_IMAGE,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abomey-Calavi",
                addressCountry: "BJ"
              },
              worksFor: {
                "@type": "Organization",
                name: "STAF PRINT CENTER",
                url: STAFPRINT_URL
              }
            }
          }),
        }
      ],
    };
  },
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
