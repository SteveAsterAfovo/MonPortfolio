import { useEffect, useRef, useState } from "react";
import { SectionTitle } from "../site";
import { DOCS } from "@/data";
import { deliverFile, formatBytes } from "@/lib/download";

type Doc = (typeof DOCS)[number];
type Status = "loading" | "ready" | "error";

/** Récupère le PDF en mémoire dès que la carte approche de l'écran. */
function usePreloadedDoc(url: string) {
  const ref = useRef<HTMLDivElement>(null);
  const blobRef = useRef<Blob | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [size, setSize] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setStatus("loading");
        fetch(url)
          .then((response) => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.blob();
          })
          .then((blob) => {
            if (cancelled) return;
            blobRef.current = blob;
            setSize(blob.size);
            setStatus("ready");
          })
          .catch(() => {
            if (!cancelled) setStatus("error");
          });
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(el);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [url]);

  return { ref, blobRef, status, size };
}

function DocCard({ doc, featured = false }: { doc: Doc; featured?: boolean }) {
  const { ref, blobRef, status, size } = usePreloadedDoc(doc.url);

  const handleDownload = () => {
    const blob = blobRef.current;
    if (blob) {
      void deliverFile(blob, doc.filename);
      return;
    }
    // Fichier pas encore prêt (ou récupération impossible) : on l'ouvre dans un onglet.
    window.open(doc.url, "_blank", "noopener,noreferrer");
  };

  const meta =
    status === "ready" && size
      ? `PDF · ${doc.pages} pages · ${formatBytes(size)}`
      : status === "error"
        ? "Ouverture dans un onglet"
        : "Préparation du fichier…";

  return (
    <article
      ref={ref}
      className="card-flat card-hover flex min-w-0 flex-col rounded-2xl p-6 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            {doc.tag}
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.03em] sm:text-2xl">
            {doc.title}
          </h3>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">PDF</span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{doc.description}</p>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
        {meta}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={handleDownload}
          aria-busy={status === "loading"}
          className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${featured
            ? "bg-primary text-primary-foreground hover:opacity-90"
            : "border border-border bg-secondary text-foreground hover:bg-accent"
            }`}
        >
          Télécharger
          {status === "loading" ? (
            <span
              className="h-3.5 w-3.5 animate-spin rounded-full border border-current border-t-transparent"
              aria-hidden="true"
            />
          ) : (
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          )}
        </button>
        <a
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors duration-300 hover:text-primary"
        >
          Aperçu
        </a>
      </div>
    </article>
  );
}

export function Downloads() {
  return (
    <section id="documents" className="border-b border-border py-14 sm:py-24">
      <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
        <div className="min-w-0">
          <SectionTitle tag="Documents" title="CV & portfolio en PDF" />
        </div>
        <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground sm:block">
          {DOCS.length} fichiers
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
        {DOCS.map((doc, i) => (
          <DocCard key={doc.key} doc={doc} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
