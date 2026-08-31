import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CategoryIcon } from "./ui/category-icon";
import { RevealGroup, RevealItem } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";
import { ButtonLink } from "./ui/button";
import { categories, type Category } from "@/lib/categories";

export function CategoryCard({
  category,
  index = 0,
}: {
  category: Category;
  index?: number;
}) {
  return (
    <Link
      href={`/categorias/${category.slug}`}
      className="group card-edge relative flex h-full flex-col overflow-hidden rounded-4xl bg-navy-850/60 transition-[transform,background-color] duration-500 will-change-transform hover:-translate-y-1.5"
    >
      <div className="relative aspect-16/11 overflow-hidden isolate [transform:translateZ(0)] [backface-visibility:hidden]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index < 3 ? "eager" : "lazy"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-0 from-navy-950 via-navy-950/45 to-transparent" />
        <div
          className={`absolute inset-0 bg-linear-135 ${category.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-25`}
        />
        <span className="absolute left-5 top-5 grid size-11 place-items-center rounded-2xl border border-white/15 bg-navy-950/60 text-neon-300 backdrop-blur-md transition-colors duration-500 group-hover:text-ember-300">
          <CategoryIcon name={category.icon} className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-white">
          {category.name}
        </h3>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-400">
          {category.blurb}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ember-400 transition-colors group-hover:text-ember-300">
          Ver itens
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function CategoryGrid({
  limit,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const list = limit ? categories.slice(0, limit) : categories;
  return (
    <section id="categorias" className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Catálogo"
            title="Tudo para o seu carro"
            highlight="em um lugar só"
            description="Da troca de óleo à revisão completa: linha leve, motos e veículos com GNV. Escolha a categoria e fale direto com quem entende."
          />
          {showCta ? (
            <ButtonLink href="/categorias" variant="outline" size="md" className="shrink-0">
              Ver todas as {categories.length} categorias
            </ButtonLink>
          ) : null}
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((c, i) => (
            <RevealItem key={c.slug} className="h-full">
              <CategoryCard category={c} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
