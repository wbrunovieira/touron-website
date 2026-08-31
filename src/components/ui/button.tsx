import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-neon-400";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

const variants = {
  ember:
    "bg-linear-135 from-ember-400 via-ember-500 to-ember-600 text-white shadow-[0_10px_36px_-10px_rgba(255,106,0,0.9)] hover:shadow-[0_14px_44px_-8px_rgba(255,106,0,1)] hover:-translate-y-0.5",
  glass:
    "bg-white/6 text-ink-100 ring-1 ring-inset ring-white/15 backdrop-blur-md hover:bg-white/12 hover:ring-white/30 hover:-translate-y-0.5",
  solid:
    "bg-ink-100 text-navy-800 hover:bg-white hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(238,241,255,0.6)]",
  outline:
    "text-ink-100 ring-1 ring-inset ring-navy-500/60 hover:ring-neon-400/70 hover:text-white hover:-translate-y-0.5",
};

type Props = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

export function ButtonLink({
  children,
  variant = "ember",
  size = "lg",
  className = "",
  ...rest
}: Props & ComponentProps<typeof Link>) {
  return (
    <Link
      {...rest}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  children,
  variant = "ember",
  size = "lg",
  className = "",
  ...rest
}: Props & ComponentProps<"a">) {
  return (
    <a
      {...rest}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
