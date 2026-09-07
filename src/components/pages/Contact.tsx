import { identity, WHATSAPP_URL } from "@/lib/shared";

export function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-24">
      <div className="rounded-3xl bg-foreground p-6 text-background sm:p-12 md:p-16">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-background/60 sm:text-[11px]">
          Contact
        </p>
        <h2 className="max-w-[20ch] font-display text-[clamp(1.65rem,6.5vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-balance">
          Un projet à construire ? Parlons-en.
        </h2>
        <div className="mt-8 flex flex-col items-start gap-7 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 space-y-2">
            <a
              href={`mailto:${identity.email}`}
              className="block break-all font-display text-base font-medium tracking-tight underline decoration-background/40 underline-offset-8 transition-opacity hover:opacity-80 sm:text-2xl"
            >
              {identity.email}
            </a>
            <a
              href={`tel:${identity.phone.replace(/\s/g, "")}`}
              className="block font-mono text-sm text-background/70 transition-opacity hover:opacity-100"
            >
              {identity.phone}
            </a>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`mailto:${identity.email}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 font-medium text-foreground transition-opacity duration-300 hover:opacity-90 sm:w-auto"
            >
              Lancer un projet
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-background/35 px-7 py-3.5 font-medium transition-colors duration-300 hover:bg-background/10 sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
