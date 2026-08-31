import { brands } from "@/lib/brands";

export function BrandMarquee() {
  const row = [...brands, ...brands];
  return (
    <section className="relative border-y border-white/8 bg-navy-950/60 py-7">
      <div className="container-x mb-5 flex items-center justify-center">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-ink-500">
          Marcas que trabalhamos
        </p>
      </div>
      <div className="mask-edges overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-12 pr-12 hover:[animation-play-state:paused]">
          {row.map((b, i) => (
            <li
              key={`${b}-${i}`}
              className="whitespace-nowrap font-display text-xl font-bold tracking-tight text-ink-500 transition-colors duration-300 hover:text-neon-300 sm:text-2xl"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
