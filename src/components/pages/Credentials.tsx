import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { SectionTitle } from "@/components/site";
import { profile, knowledge } from "@/data";

const ITEMS_PER_PAGE = 4;

export function Credentials() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = knowledge.certifications.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const paginatedCertifications = knowledge.certifications.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section id="parcours" className="border-b border-border py-14 sm:py-24">
      <SectionTitle tag="Parcours" title="Certifications & formation" />
      <div className="mt-10 grid grid-cols-12 gap-4 sm:mt-12 sm:gap-5">
        <div className="col-span-12 min-w-0 md:col-span-7">
          <div className="card-flat flex h-full flex-col justify-between rounded-2xl p-5 sm:p-8">
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                  Certifications ({totalItems})
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {startIndex + 1}-{endIndex} sur {totalItems} · Page {currentPage}/{totalPages}
                </span>
              </div>

              <ul className="mt-6 divide-y divide-border">
                {paginatedCertifications.map((c) => {
                  const Component = c.url ? "a" : "div";
                  const linkProps = c.url
                    ? {
                      href: c.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                    : {};

                  return (
                    <li key={c.name}>
                      <Component
                        {...linkProps}
                        className={`group flex items-center justify-between gap-4 py-3.5 px-2 -mx-2 rounded-xl transition-colors ${c.url
                          ? "cursor-pointer hover:bg-secondary/60"
                          : "cursor-default"
                          }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-medium ${c.url ? "group-hover:text-primary transition-colors" : ""
                                }`}
                            >
                              {c.name}
                            </span>
                            {c.url && (
                              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">{c.org}</div>
                        </div>
                        <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          {c.date}
                        </span>
                      </Component>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                >
                  ← Précédent
                </button>
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-7 w-7 rounded-lg text-xs font-mono transition-colors ${currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "border border-border hover:bg-secondary cursor-pointer"
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                >
                  Suivant →
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12 min-w-0 space-y-4 sm:space-y-5 md:col-span-5">
          <div className="card-flat rounded-2xl p-5 sm:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Formation</h3>
            <ul className="mt-6 space-y-4">
              {knowledge.education.map((e) => (
                <li key={e.name}>
                  <div className="text-sm font-medium">{e.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {e.org} · {e.date}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-flat rounded-2xl p-5 sm:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Autodidacte</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.autodidact.map((a) => (
                <span key={a} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs">
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
