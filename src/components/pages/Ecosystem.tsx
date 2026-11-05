import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ECOSYSTEM, LINKS } from "@/data";

type Filter = "all" | "live" | "building";

const live = ECOSYSTEM.filter((p) => p.live).length;
const building = ECOSYSTEM.length - live;

function Dot({ on }: { on: boolean }) {
  return <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${on ? "bg-success" : "bg-warning"}`} aria-hidden="true" />;
}

export function EcosystemCard() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const list = ECOSYSTEM.filter((p) => (filter === "all" ? true : filter === "live" ? p.live : !p.live));
  const filters: [Filter, string][] = [
    ["all", `Tout (${ECOSYSTEM.length})`],
    ["live", `En ligne (${live})`],
    ["building", `En construction (${building})`],
  ];

  return (
    <article className="card-flat col-span-12 flex min-w-0 flex-col gap-6 rounded-2xl border-primary/30 p-5 sm:p-8 md:flex-row md:items-center md:justify-between">
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">STAF PRINT CENTER · Écosystème</p>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-[-0.03em] sm:text-2xl">
          {ECOSYSTEM.length} plateformes conçues et déployées
        </h3>
        <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
          En tant que Responsable des opérations, j'ai contribué au développement de l'ensemble de l'écosystème : IA, outils prépresse, studio 3D, formation, communication.
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2"><Dot on /> {live} en ligne</span>
          <span className="inline-flex items-center gap-2"><Dot on={false} /> {building} en construction</span>
        </p>
      </div>

      <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Explorer les {ECOSYSTEM.length} plateformes
            </button>
          </DialogTrigger>
          <DialogContent className="flex max-h-[90dvh] w-[calc(100%-1rem)] max-w-5xl flex-col gap-0 overflow-hidden rounded-2xl border-border p-0 sm:w-[calc(100%-3rem)]">
            <div className="border-b border-border p-5 sm:p-7">
              <DialogTitle className="font-display text-xl tracking-[-0.03em] sm:text-3xl">
                STAF PRINT CENTER : {ECOSYSTEM.length} plateformes
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm">
                Cliquez sur une plateforme pour l'ouvrir dans un nouvel onglet.
              </DialogDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {filters.map(([k, label]) => (
                  <button
                    key={k}
                    onClick={() => setFilter(k)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${filter === k ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid flex-1 gap-3 overflow-y-auto p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3">
              {list.map((p) => (
                <a
                  key={p.url}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-flat card-hover group flex min-w-0 flex-col rounded-xl p-4"
                >
                  <span className="flex items-center gap-2.5 font-semibold">
                    <Dot on={p.live} /> <span className="truncate group-hover:text-primary">{p.name}</span>
                  </span>
                  <span className="mt-1.5 text-sm text-muted-foreground">{p.desc}</span>
                  <span className="mt-2 truncate font-mono text-xs text-primary">{p.url.replace("https://", "")} ↗</span>
                </a>
              ))}
            </div>

            <a
              href={LINKS.ECOSYSTEM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-foreground px-5 py-4 text-sm text-background sm:px-7"
            >
              <span>{live} en ligne · {building} en construction</span>
              <span className="font-medium">Voir l'écosystème sur stafprint.com ↗</span>
            </a>
          </DialogContent>
        </Dialog>
        <a
          href={LINKS.ECOSYSTEM}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Voir sur stafprint.com ↗
        </a>
      </div>
    </article>
  );
}
