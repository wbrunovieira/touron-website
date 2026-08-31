import { Clock, MapPin, Phone, Star } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";
import { ButtonAnchor } from "./ui/button";
import { InstagramIcon, WhatsappIcon } from "./ui/category-icon";
import { business, fullAddress } from "@/lib/business";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section id="contato" className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-180 from-transparent via-navy-850/40 to-navy-950"
      />
      <div className="container-x">
        <SectionHeading
          eyebrow="Contato"
          title="Passa lá no"
          highlight="Cel. Veiga, 233"
          description="Estamos no Centro de Petrópolis, pertinho de tudo. Chega sem hora marcada ou adianta o pedido pelo WhatsApp."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="flex flex-col gap-4">
            <a
              href={business.mapsPlace}
              target="_blank"
              rel="noopener noreferrer"
              className="card-edge group flex gap-4 rounded-3xl bg-navy-850/50 p-6 transition-all hover:-translate-y-1 hover:bg-navy-850/80"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-135 from-navy-600 to-navy-800 text-neon-300">
                <MapPin className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-white">
                  Endereço
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-400">
                  {fullAddress}
                </p>
                <p className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-ember-400">
                  abrir no Google Maps →
                </p>
              </div>
            </a>

            <a
              href={business.phone.href}
              className="card-edge group flex gap-4 rounded-3xl bg-navy-850/50 p-6 transition-all hover:-translate-y-1 hover:bg-navy-850/80"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-135 from-navy-600 to-navy-800 text-neon-300">
                <Phone className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-white">
                  Telefone da loja
                </p>
                <p className="mt-1 font-mono text-sm text-ink-400">
                  {business.phone.display}
                </p>
              </div>
            </a>

            <div className="card-edge flex gap-4 rounded-3xl bg-navy-850/50 p-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-135 from-navy-600 to-navy-800 text-neon-300">
                <Clock className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-white">
                  Horário de funcionamento
                </p>
                {business.hoursConfirmed ? (
                  <ul className="mt-2 space-y-1 text-sm text-ink-400">
                    {business.hours.map((h) => (
                      <li key={h.label} className="flex justify-between gap-6">
                        <span>{h.label}</span>
                        <span className="font-mono text-ink-300">{h.value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    Confirme o horário do dia pelo WhatsApp{" "}
                    <span className="font-mono text-ink-300">
                      {business.whatsapp.display}
                    </span>{" "}
                    antes de vir até a loja.
                  </p>
                )}
              </div>
            </div>

            <a
              href={business.mapsPlace}
              target="_blank"
              rel="noopener noreferrer"
              className="card-edge group flex items-center gap-4 rounded-3xl bg-navy-850/50 p-6 transition-all hover:-translate-y-1 hover:bg-navy-850/80"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-135 from-ember-400 to-ember-600 text-white">
                <Star className="size-5 fill-current" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-display text-base font-bold text-white">
                  {business.googleRating.value} de nota no Google
                </p>
                <p className="mt-0.5 text-sm text-ink-400">
                  {business.googleRating.count} avaliações de clientes de
                  Petrópolis
                </p>
              </div>
            </a>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonAnchor
                href={whatsappLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <WhatsappIcon className="size-5" />
                WhatsApp {business.whatsapp.display}
              </ButtonAnchor>
              <ButtonAnchor
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="glass"
              >
                <InstagramIcon className="size-5" />
                Instagram
              </ButtonAnchor>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card-edge h-full min-h-[26rem] overflow-hidden rounded-4xl bg-navy-850">
              <iframe
                title={`Mapa da ${business.name} em ${business.address.city}`}
                src={business.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="size-full min-h-[26rem] border-0 opacity-90 grayscale-[0.35] transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
