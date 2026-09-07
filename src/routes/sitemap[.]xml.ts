import { createFileRoute } from "@tanstack/react-router";

/** Sitemap généré depuis l'hôte courant : reste valide sur la preview et le domaine final. */
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = ["/"];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map((path) => `  <url>\n    <loc>${origin}${path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>`)
            .join("\n")}
</urlset>
`;

        return new Response(xml, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
