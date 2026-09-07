import { autodidact, certifications, education, SectionTitle } from "@/lib/shared";

export function Credentials() {
  return (
    <section id="parcours" className="border-b border-border py-14 sm:py-24">
      <SectionTitle tag="Parcours" title="Certifications & formation" />
      <div className="mt-10 grid grid-cols-12 gap-4 sm:mt-12 sm:gap-5">
        <div className="col-span-12 min-w-0 md:col-span-7">
          <div className="card-flat rounded-2xl p-5 sm:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Certifications
            </h3>
            <ul className="mt-6 divide-y divide-border">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-baseline justify-between gap-4 py-3.5">
                  <div className="min-w-0">
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.org}</div>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 min-w-0 space-y-4 sm:space-y-5 md:col-span-5">
          <div className="card-flat rounded-2xl p-5 sm:p-8">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">Formation</h3>
            <ul className="mt-6 space-y-4">
              {education.map((e) => (
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
              {autodidact.map((a) => (
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
