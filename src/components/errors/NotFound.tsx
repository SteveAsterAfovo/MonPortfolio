import { motion } from "framer-motion";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFoundComponent() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <section className="relative z-10 w-full max-w-2xl text-center">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-fit"
        >
          <span className="select-none font-display text-[clamp(7rem,25vw,14rem)] font-black leading-none tracking-tighter text-foreground/[0.04]">
            404
          </span>

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex size-20 items-center justify-center rounded-3xl border border-border bg-background/80 shadow-2xl backdrop-blur sm:size-24">
              <Sparkles className="size-8 text-primary sm:size-10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Page introuvable
          </p>

          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Oups. Cette page n'existe pas.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            J’ai cherché partout. Dans mes projets, dans mon code,
            même dans les endroits où personne ne devrait regarder.
            Rien.
          </p>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            La page que vous recherchez a peut-être été déplacée,
            supprimée ou n’a simplement jamais existé.
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-8 max-w-md overflow-hidden rounded-xl border border-border bg-card/60 text-left shadow-sm backdrop-blur"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="size-2.5 rounded-full bg-destructive/60" />
            <span className="size-2.5 rounded-full bg-yellow-500/60" />
            <span className="size-2.5 rounded-full bg-green-500/60" />

            <span className="ml-auto font-mono text-[10px] text-muted-foreground">
              portfolio://404
            </span>
          </div>

          <div className="space-y-2 p-4 font-mono text-xs">
            <p className="text-muted-foreground">
              <span className="text-primary">&gt;</span>{" "}
              searching_page...
            </p>

            <p className="text-muted-foreground">
              <span className="text-primary">&gt;</span>{" "}
              checking_projects...
            </p>

            <p className="text-destructive">
              <span>✕</span>{" "}
              PAGE_NOT_FOUND
            </p>

            <p className="text-muted-foreground">
              <span className="text-primary">&gt;</span>{" "}
              redirecting_to_safety...
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                }}
              >
                _
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 size-4" />
              Retour à l'accueil
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link to="/projects">
              Voir mes projets
            </Link>
          </Button>
        </motion.div>

        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Revenir à la page précédente
          </button>
        </motion.div>
      </section>
    </main>
  );
}