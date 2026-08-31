import { Reveal } from "./ui/reveal";
import { ButtonAnchor, ButtonLink } from "./ui/button";
import { WhatsappIcon } from "./ui/category-icon";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

export function CtaBand({
  title = "Precisa de uma peça agora?",
  highlight = "A gente resolve.",
  description = "Manda o modelo do seu carro no WhatsApp. A gente confere a aplicação e entrega no 1º distrito de Petrópolis sem taxa.",
  message = waMessages.general,
}: {
  title?: string;
  highlight?: string;
  description?: string;
  message?: string;
}) {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="card-edge relative isolate overflow-hidden rounded-5xl bg-linear-135 from-navy-800 via-navy-850 to-navy-950 px-8 py-14 text-center sm:px-14 sm:py-20 grain">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-radial from-neon-400/25 to-transparent blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-16 size-96 rounded-full bg-radial from-ember-500/30 to-transparent blur-3xl"
            />
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.035em] text-balance sm:text-5xl lg:text-[3.5rem]">
              {title} <span className="text-gradient-ember">{highlight}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonAnchor
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="size-5" />
                Chamar no WhatsApp
              </ButtonAnchor>
              <ButtonLink href="/contato" variant="glass">
                Ver endereço e horários
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
