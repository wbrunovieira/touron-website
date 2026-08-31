import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-neon-300 ring-1 ring-inset ring-white/10">
      <span className="size-1.5 rounded-full bg-neon-400 animate-pulse-glow" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start";
  return (
    <Reveal className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.4rem]">
        {title}{" "}
        {highlight ? (
          <span className="text-gradient-ember">{highlight}</span>
        ) : null}
      </h2>
      {description ? (
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
