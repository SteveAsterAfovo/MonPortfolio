export const NAV = [
  { href: "#projets", label: "Projets" },
  { href: "#a-propos", label: "À propos" },
  { href: "#stack", label: "Stack" },
  { href: "#parcours", label: "Parcours" },
];

export function SectionTitle({ tag, title }: { tag: string; title: string }) {
  return (
    <>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-primary sm:text-[11px]">
        {tag}
      </p>
      <h2 className="font-display text-[clamp(1.75rem,6vw,3.1rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-balance">
        {title}
      </h2>
    </>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="font-display text-2xl font-semibold tracking-tight text-primary">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export function screenshotUrl(url: string, width = 1200) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${Math.round(
    (width * 10) / 16,
  )}`;
}
