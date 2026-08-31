import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { DeliverySection } from "@/components/delivery-section";
import { FaqSection } from "@/components/faq-section";
import { CtaBand } from "@/components/cta-band";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Clock, MapPin, Wallet } from "lucide-react";
import { business } from "@/lib/business";
import { waMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Entrega de auto peças em Petrópolis",
  description: `A ${business.name} leva a peça até você sem taxa no ${business.delivery.area}. Peça pelo WhatsApp e receba no mesmo dia, em horário comercial.`,
  alternates: { canonical: "/entrega" },
};

const detalhes = [
  {
    icon: MapPin,
    title: "Onde entregamos",
    text: `Sem taxa no ${business.delivery.area}. Demais bairros e distritos: a gente calcula na hora e combina com você pelo WhatsApp.`,
  },
  {
    icon: Clock,
    title: "Prazo",
    text: "Pedidos confirmados dentro do horário comercial normalmente saem para entrega no mesmo dia, conforme a disponibilidade da peça.",
  },
  {
    icon: Wallet,
    title: "Pagamento",
    text: "PIX, dinheiro ou cartão. Você confirma o valor total no WhatsApp antes da entrega — sem surpresa na porta.",
  },
];

export default function EntregaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Entrega"
        title="Nós levamos"
        highlight="até você"
        description={business.delivery.note}
        image="/images/entrega-petropolis.webp"
        breadcrumbs={[
          { href: "/", label: "Início" },
          { href: "/entrega", label: "Entrega" },
        ]}
      />

      <section className="py-14">
        <div className="container-x">
          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            {detalhes.map((d) => (
              <RevealItem key={d.title} className="h-full">
                <div className="card-edge h-full rounded-4xl bg-navy-850/40 p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-linear-135 from-navy-600 to-navy-800 text-neon-300">
                    <d.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
                    {d.title}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
                    {d.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-8">
            <p className="text-xs leading-relaxed text-ink-500">
              * Condições de entrega sujeitas à disponibilidade e ao horário de
              funcionamento da loja. Valores e prazos são confirmados no
              atendimento.
            </p>
          </Reveal>
        </div>
      </section>

      <DeliverySection />
      <FaqSection />
      <CtaBand
        title="Pronto para receber em casa?"
        highlight="É só chamar."
        description="Manda a peça e o modelo do veículo no WhatsApp. A gente confirma disponibilidade, valor e leva até você."
        message={waMessages.delivery}
      />
    </>
  );
}
