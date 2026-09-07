import { createFileRoute } from "@tanstack/react-router";
import type { } from "@tanstack/react-start";

const RAW_URL = import.meta.env.VITE_STEVE_URL;
const BASE_URL = RAW_URL.replace(/\/$/, "");

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

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
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
