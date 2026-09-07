import { identity, profile, SectionTitle, STAFPRINT_URL } from "@/lib/shared";

export function About() {
  return (
    <section id="a-propos" className="border-b border-border py-14 sm:py-24">
      <SectionTitle tag="À propos" title={identity.quote} />

      <div className="mt-10 grid grid-cols-12 gap-8 sm:mt-12 md:gap-10">
        <div className="col-span-12 min-w-0 md:col-span-7">
          {profile.paragraphs.map((p) => (
            <p
              key={p}
              className="mb-5 max-w-[60ch] text-[0.975rem] leading-relaxed text-pretty text-muted-foreground sm:text-lg"
            >
              {p}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.softSkills.map((s) => (
              <span key={s} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 min-w-0 md:col-span-5">
          <div className="card-flat rounded-2xl p-5 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              Ce qui me distingue
            </p>
            <ul className="mt-6 space-y-4">
              {profile.differentiators.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-primary">◆</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
