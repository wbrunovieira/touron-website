import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CategoryCard } from "@/components/category-grid";
import { CtaBand } from "@/components/cta-band";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ButtonAnchor } from "@/components/ui/button";
import { CategoryIcon, WhatsappIcon } from "@/components/ui/category-icon";
import { categories, categoryBySlug } from "@/lib/categories";
import { business, siteUrl } from "@/lib/business";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/categorias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} em Petrópolis/RJ`,
    description: `${category.blurb} Consulte disponibilidade na ${business.name}, no Centro de Petrópolis, com entrega no 1º distrito.`,
    alternates: { canonical: `/categorias/${category.slug}` },
    openGraph: {
      title: `${category.name} — ${business.name}`,
      description: category.blurb,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoriaPage({
  params,
}: PageProps<"/categorias/[slug]">) {
  const { slug } = await params;
  const category = categoryBySlug(slug);
  if (!category) notFound();

  const related = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categorias",
        item: `${siteUrl}/categorias`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${siteUrl}/categorias/${category.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow={category.short}
        title={category.name}
        description={category.blurb}
        image={category.image}
        breadcrumbs={[
          { href: "/", label: "Início" },
          { href: "/categorias", label: "Categorias" },
          { href: `/categorias/${category.slug}`, label: category.name },
        ]}
        icon={
          <span className="grid size-12 place-items-center rounded-2xl border border-white/15 bg-navy-950/60 text-ember-400 backdrop-blur">
            <CategoryIcon name={category.icon} className="size-6" />
          </span>
        }
      />

      <section className="py-14 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                O que você encontra
              </h2>
            </Reveal>
            <RevealGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {category.items.map((item) => (
                <RevealItem key={item}>
                  <div className="card-edge flex h-full items-start gap-3 rounded-2xl bg-navy-850/50 p-5 transition-colors hover:bg-navy-850/80">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-linear-135 from-ember-400 to-ember-600">
                      <Check className="size-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-300">
                      {item}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal className="mt-10">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-500">
                Marcas nesta categoria
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.brands.map((b) => (
                  <li
                    key={b}
                    className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-ink-300 ring-1 ring-inset ring-white/10"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-ink-500">
                A disponibilidade varia conforme o estoque. Consulte pelo
                WhatsApp antes de vir até a loja.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="sticky top-28 flex flex-col gap-5">
              <div className="card-edge overflow-hidden rounded-4xl">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={900}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="card-edge rounded-4xl bg-linear-135 from-navy-800/70 to-navy-950 p-7">
                <h3 className="font-display text-xl font-bold leading-tight text-white">
                  Não achou o item exato?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-400">
                  Nosso catálogo de balcão é bem maior que esta lista. Manda a
                  marca, o modelo e o ano do veículo que a gente confere pra
                  você.
                </p>
                <ButtonAnchor
                  href={whatsappLink(waMessages.category(category.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full"
                >
                  <WhatsappIcon className="size-5" />
                  Consultar {category.short}
                </ButtonAnchor>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em] sm:text-3xl">
              Veja também
            </h2>
            <Link
              href="/categorias"
              className="group inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ember-400"
            >
              todas
              <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <RevealGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c, i) => (
              <RevealItem key={c.slug} className="h-full">
                <CategoryCard category={c} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        title={`Precisa de ${category.short.toLowerCase()}?`}
        highlight="Fala com a gente."
        description={`Consulte disponibilidade, preço e entrega de ${category.name.toLowerCase()} direto pelo WhatsApp.`}
        message={waMessages.category(category.name)}
      />
    </>
  );
}
