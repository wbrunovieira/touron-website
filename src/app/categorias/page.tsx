import type { Metadata } from "next";
import { CategoryGrid } from "@/components/category-grid";
import { CtaBand } from "@/components/cta-band";
import { PageHeader } from "@/components/page-header";
import { business } from "@/lib/business";
import { categories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Categorias de auto peças e acessórios",
  description: `Óleos, aditivos, baterias, estética automotiva, palhetas, som, ferramentas e peças de reposição na ${business.name}, em Petrópolis/RJ.`,
  alternates: { canonical: "/categorias" },
};

export default function CategoriasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catálogo"
        title="Categorias"
        highlight="Tourón"
        description={`${categories.length} famílias de produtos para carro, moto e veículos com GNV. Escolha a sua e fale direto com a loja pelo WhatsApp.`}
        image="/images/prateleira-aditivos.webp"
      />
      <CategoryGrid showCta={false} />
      <CtaBand />
    </>
  );
}
