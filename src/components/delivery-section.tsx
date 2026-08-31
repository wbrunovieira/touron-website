import Image from "next/image";
import { Bike, Clock, MapPin, PackageCheck } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { ButtonAnchor } from "./ui/button";
import { WhatsappIcon } from "./ui/category-icon";
import { business } from "@/lib/business";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

const steps = [
  {
    icon: WhatsappIcon,
    title: "Você chama no WhatsApp",
    text: "Manda a peça, o modelo e o ano do veículo. Se tiver foto da peça antiga, melhor ainda.",
  },
  {
    icon: PackageCheck,
    title: "A gente confere e separa",
    text: "Confirmamos a aplicação, o preço e a disponibilidade antes de fechar o pedido.",
  },
  {
    icon: Bike,
    title: "Sai para entrega",
    text: `Sem taxa no ${business.delivery.area}. Fora dessa área, a gente combina na hora.`,
  },
];

export function DeliverySection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-linear-135 from-ember-600 via-ember-500 to-[#b83700]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-45 grain [background-image:radial-gradient(circle_at_20%_20%,rgba(4,9,87,0.7),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(2,5,31,0.85),transparent_60%)]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-navy-950/35 px-3.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-white ring-1 ring-inset ring-white/25 backdrop-blur">
              <MapPin className="size-3.5" />
              {business.address.city} / {business.address.state}
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.01] tracking-[-0.035em] text-white text-balance sm:text-5xl lg:text-[3.6rem]">
              Nós levamos
              <br />
              até você.
              <span className="block text-navy-900">Sem taxas.</span>
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/90">
              O melhor para o seu veículo direto no seu endereço. Entregas sem
              custo adicional no {business.delivery.area} — e o resto da cidade a
              gente combina pelo WhatsApp.
            </p>
          </Reveal>

          <ol className="mt-10 space-y-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={0.08 * i}>
                <div className="flex gap-4 rounded-3xl border border-white/20 bg-navy-950/25 p-5 backdrop-blur-sm transition-colors hover:bg-navy-950/40">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-ember-600">
                    <s.icon className="size-5" />
                  </span>
                  <div>
                    <p className="flex items-baseline gap-2 font-bold text-white">
                      <span className="font-mono text-xs text-white/60">
                        0{i + 1}
                      </span>
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.3} className="mt-9">
            <ButtonAnchor
              href={whatsappLink(waMessages.delivery)}
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
            >
              <WhatsappIcon className="size-5" />
              Combinar minha entrega
            </ButtonAnchor>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-md">
            <div className="overflow-hidden rounded-5xl border-4 border-white/25 shadow-2xl">
              <Image
                src="/images/entrega-petropolis.webp"
                alt="Peça de comunicação da Tourón: nós levamos até você, sem taxas, no 1º distrito de Petrópolis"
                width={1080}
                height={1080}
                sizes="(max-width: 1024px) 80vw, 420px"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -bottom-9 -left-4 flex items-center gap-3 rounded-3xl bg-navy-950 px-5 py-4 shadow-2xl ring-1 ring-white/15 sm:-left-8">
              <Clock className="size-5 text-ember-400" strokeWidth={2} />
              <div>
                <p className="text-sm font-bold text-white">No mesmo dia</p>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-400">
                  pedidos em horário comercial
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
