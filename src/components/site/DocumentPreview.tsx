import { useEffect, useRef, useState } from "react";
import { Download, Eye, LoaderCircle, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type DocumentPreviewProps = {
  url: string;
  title: string;
  pages: number;
  onDownload: () => void;
};

function PdfPages({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let cancelled = false;
    let destroy: (() => void) | undefined;
    setStatus("loading");
    container.replaceChildren();

    async function render() {
      try {
        const [pdfjs, worker] = await Promise.all([
          import("pdfjs-dist/legacy/build/pdf.mjs"),
          import("pdfjs-dist/legacy/build/pdf.worker.min.mjs?url"),
        ]);
        if (cancelled || !container) return;
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
        const task = pdfjs.getDocument({ url });
        destroy = () => { void task.destroy(); };
        const pdf = await task.promise;
        const width = Math.min(container.clientWidth, 1100);
        const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

        for (let number = 1; number <= pdf.numPages; number++) {
          if (cancelled) return;
          const page = await pdf.getPage(number);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: (width / base.width) * pixelRatio });
          const canvas = document.createElement("canvas");
          canvas.width = Math.ceil(viewport.width);
          canvas.height = Math.ceil(viewport.height);
          canvas.className = "mx-auto block h-auto w-full max-w-[1100px]";
          canvas.setAttribute("role", "img");
          canvas.setAttribute("aria-label", `Page ${number} sur ${pdf.numPages}`);
          await page.render({ canvas, viewport }).promise;
          if (cancelled) return;
          container.appendChild(canvas);
          page.cleanup();
        }
        if (!cancelled) setStatus("ready");
      } catch (error) {
        if (!cancelled) {
          console.error("Document preview failed", error);
          setStatus("error");
        }
      }
    }

    void render();
    return () => {
      cancelled = true;
      destroy?.();
      container.replaceChildren();
    };
  }, [url, attempt]);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-secondary p-2 sm:p-5">
      {status === "loading" && (
        <p role="status" className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground">
          <LoaderCircle className="size-4 animate-spin motion-reduce:animate-none" />
          Chargement du document…
        </p>
      )}
      {status === "error" && (
        <div role="alert" className="flex flex-col items-center gap-4 px-4 py-12 text-center">
          <p className="text-sm text-muted-foreground">Impossible de charger l’aperçu du document.</p>
          <Button variant="outline" onClick={() => setAttempt((value) => value + 1)}>
            <RotateCw /> Réessayer
          </Button>
        </div>
      )}
      <div ref={containerRef} className="space-y-3" aria-busy={status === "loading"} />
    </div>
  );
}

export function DocumentPreview({ url, title, pages, onDownload }: DocumentPreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="h-auto gap-2 p-0 text-muted-foreground underline decoration-border underline-offset-4 hover:text-primary">
          <Eye /> Aperçu
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-[90dvh] w-[calc(100%-1rem)] max-w-5xl flex-col gap-0 overflow-hidden rounded-lg border-border p-0 text-foreground sm:w-[calc(100%-3rem)]">
        <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-4 pr-12 sm:px-6 sm:pr-14">
          <div className="min-w-0">
            <DialogTitle className="font-display tracking-normal">{title}</DialogTitle>
            <DialogDescription className="mt-1">PDF · {pages} pages</DialogDescription>
          </div>
          <Button variant="outline" size="sm" onClick={onDownload}>
            <Download /> Télécharger
          </Button>
        </header>
        {open && <PdfPages url={url} />}
      </DialogContent>
    </Dialog>
  );
}