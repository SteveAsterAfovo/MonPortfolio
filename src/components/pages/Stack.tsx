import { SectionTitle, stack, stackFooter, stackIntro } from "@/lib/shared";

export function Stack() {
  return (
    <section id="stack" className="border-b border-border py-14 sm:py-24">
      <SectionTitle tag="Stack" title="Les outils du métier" />
      <p className="mt-6 mb-10 max-w-[64ch] text-[0.975rem] leading-relaxed text-pretty text-muted-foreground sm:mb-12 sm:text-lg">
        {stackIntro}
      </p>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {stack.map((cat) => (
          <div key={cat.label} className="card-flat card-hover min-w-0 rounded-2xl p-5 sm:p-7">
            <h3 className="font-display text-lg font-semibold tracking-[-0.02em]">{cat.label}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 font-mono text-sm text-primary">{stackFooter}</p>
    </section>
  );
}
