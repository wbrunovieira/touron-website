import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contato, endereço e horários",
  description: `${business.name} — ${fullAddress}. Telefone ${business.phone.display} e WhatsApp ${business.whatsapp.display}.`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Fale com a"
        highlight="Tourón"
        description={`Estamos na ${business.address.street}, em ${business.address.city}. Atendimento no balcão, por telefone e pelo WhatsApp.`}
        image="/images/loja-fachada-frontal.webp"
        breadcrumbs={[
          { href: "/", label: "Início" },
          { href: "/contato", label: "Contato" },
        ]}
      />
      <ContactSection />
      <CtaBand />
    </>
  );
}
