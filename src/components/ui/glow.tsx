/** Manchas de gradiente desfocado usadas como pano de fundo. */
export function Glow({
  className = "",
  color = "navy",
  animate = true,
}: {
  className?: string;
  color?: "navy" | "ember" | "neon";
  animate?: boolean;
}) {
  const palette = {
    navy: "from-navy-500/50 via-navy-600/25",
    ember: "from-ember-500/40 via-ember-400/15",
    neon: "from-neon-400/35 via-neon-500/12",
  }[color];

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-radial ${palette} to-transparent blur-[90px] ${
        animate ? "animate-float" : ""
      } ${className}`}
    />
  );
}

export function GridBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 grid-lines [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_72%)] ${className}`}
    />
  );
}
