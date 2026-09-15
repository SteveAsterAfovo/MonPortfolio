import { ArrowLeft, Terminal } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFoundComponent() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <section className="relative z-10 w-full max-w-3xl">
        {/* Terminal window */}
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          {/* Terminal header */}
          <div className="flex h-11 items-center border-b border-border bg-muted/40 px-4">
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-yellow-500/70" />
              <span className="size-2.5 rounded-full bg-green-500/70" />
            </div>

            <div className="mx-auto flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
              <Terminal className="size-3.5" />
              terminal
            </div>

            <div className="w-[52px]" />
          </div>

          {/* Terminal */}
          <div className="p-5 font-mono text-xs leading-6 sm:p-8 sm:text-sm">
            <div className="text-muted-foreground">
              <span className="text-primary">developer</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-foreground">portfolio</span>
              <span className="text-muted-foreground">:~$ </span>
              <span>navigate /page</span>
            </div>

            <div className="mt-4 text-muted-foreground">
              GET /page HTTP/1.1
            </div>

            <div className="mt-1 text-red-400">
              HTTP/1.1 404 Not Found
            </div>

            <div className="mt-1 text-muted-foreground">
              route: <span className="text-foreground">undefined</span>
            </div>

            <div className="mt-1 text-muted-foreground">
              status: <span className="text-red-400">NOT_FOUND</span>
            </div>

            <div className="my-6 border-t border-border" />

            {/* Main error */}
            <div className="text-center sm:text-left">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
                <span className="text-7xl font-black tracking-tighter text-primary sm:text-8xl">
                  404
                </span>

                <div className="pb-2">
                  <p className="text-base font-semibold text-foreground">
                    Route introuvable
                  </p>

                  <p className="text-xs text-muted-foreground">
                    This page doesn't exist in this build.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-6 border-t border-border" />

            {/* Fake stack trace */}
            <div className="space-y-1 text-[11px] text-muted-foreground sm:text-xs">
              <p>
                <span className="text-red-400">Error:</span>{" "}
                Cannot find requested resource
              </p>

              <p className="pl-4">
                at <span className="text-foreground">Router.resolve()</span>
              </p>

              <p className="pl-4">
                at <span className="text-foreground">Application.handle()</span>
              </p>

              <p className="pl-4">
                at <span className="text-foreground">main.tsx:404</span>
              </p>
            </div>

            <div className="mt-6 text-muted-foreground">
              <span className="text-primary">developer</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-foreground">portfolio</span>
              <span className="text-muted-foreground">:~$ </span>
              <span className="text-foreground">
                cd /home
              </span>
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            // End of execution
          </p>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 size-3.5" />
              Retour
            </Button>

            <Button asChild size="sm">
              <Link to="/">
                cd ~
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}