import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { Eyebrow } from "./ui/section-heading";
import { Glow, GridBackdrop } from "./ui/glow";

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  image,
  breadcrumbs,
  icon,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  image?: string;
  breadcrumbs?: { href: string; label: string }[];
  icon?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-linear-180 from-navy-950 via-navy-900 to-navy-900"
      />
      {image ? (
        <div aria-hidden className="absolute inset-0 -z-20">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-linear-180 from-navy-950/85 via-navy-900/85 to-navy-900" />
        </div>
      ) : null}
      <GridBackdrop className="-z-10" />
      <Glow className="-z-10 -left-32 top-0 size-[30rem]" color="navy" />
      <Glow
        className="-z-10 right-[-8rem] top-10 size-[26rem] [animation-delay:-4s]"
        color="ember"
      />

      <div className="container-x">
        {breadcrumbs?.length ? (
          <nav aria-label="Trilha de navegação" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-500">
              {breadcrumbs.map((b, i) => (
                <li key={b.href} className="flex items-center gap-1">
                  {i > 0 ? <ChevronRight className="size-3" /> : null}
                  <Link
                    href={b.href}
                    className="transition-colors hover:text-neon-300"
                  >
                    {b.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <Reveal className="flex max-w-3xl flex-col gap-6">
          {eyebrow ? (
            <span className="flex items-center gap-3">
              {icon}
              <Eyebrow>{eyebrow}</Eyebrow>
            </span>
          ) : null}
          <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.0] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4rem]">
            {title}{" "}
            {highlight ? (
              <span className="text-gradient-ember">{highlight}</span>
            ) : null}
          </h1>
          {description ? (
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-300">
              {description}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
