import Image from "next/image";
import { Handshake, MessageCircle, PackageCheck, Award } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";
import { Counter } from "./ui/counter";
import { Glow } from "./ui/glow";
import { categories } from "@/lib/categories";
import { brands } from "@/lib/brands";
import { yearsInBusiness } from "@/lib/business";

const pillars = [
  {
    icon: Award,
    title: "Meio século de balcão",
    text: "Desde 1974 na Rua Coronel Veiga. Mais de meio século vendo o que roda — e o que quebra — nas ruas de Petrópolis.",
  },
  {
    icon: Handshake,
    title: "Quem atende entende",
    text: "Nada de robô. Você fala com alguém que sabe qual peça serve no seu modelo e o que vale a pena trocar junto.",
  },
  {
    icon: PackageCheck,
    title: "Marcas de linha",
    text: "Trabalhamos com fabricantes reconhecidos do mercado de reposição — nada de peça sem procedência.",
  },
  {
    icon: MessageCircle,
    title: "Resolvido no WhatsApp",
    text: "Foto da peça antiga, modelo e ano. A gente confere a aplicação e volta com preço e entrega combinada.",
  },
];

export function Pillars() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <Glow className="-z-10 right-0 top-10 size-[32rem]" color="neon" />

      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Por que a Tourón"
            title="Loja de bairro com"
            highlight="cabeça de 2026"
            description="A confiança de quem está há mais de 50 anos na Rua Coronel Veiga, com a praticidade de resolver tudo pelo celular."
          />

          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { value: yearsInBusiness, suffix: "+", label: "anos de história" },
              { value: categories.length, suffix: "", label: "categorias" },
              { value: brands.length, suffix: "+", label: "marcas" },
            ].map((s) => (
              <RevealItem
                key={s.label}
                className="card-edge rounded-3xl bg-navy-850/50 px-5 py-6"
              >
                <Counter
                  to={s.value}
                  suffix={s.suffix}
                  className="font-display text-4xl font-extrabold tracking-tight text-gradient-ember sm:text-5xl"
                />
                <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-400">
                  {s.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i}>
              <div className="card-edge group h-full rounded-4xl bg-navy-850/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-navy-850/70">
                <span className="grid size-12 place-items-center rounded-2xl bg-linear-135 from-navy-600 to-navy-800 text-neon-300 ring-1 ring-inset ring-white/10 transition-colors duration-500 group-hover:text-ember-300">
                  <p.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-tight tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-x mt-20">
        <Reveal>
          <div className="card-edge relative overflow-hidden rounded-5xl">
            <Image
              src="/images/prateleira-aditivos.webp"
              alt="Prateleiras da Tourón Auto Peças com aditivos, óleos e produtos de manutenção"
              width={1400}
              height={1400}
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="h-[22rem] w-full object-cover sm:h-[26rem]"
            />
            <div className="absolute inset-0 bg-linear-90 from-navy-950 via-navy-950/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg p-8 sm:p-14">
                <p className="font-display text-2xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl">
                  &ldquo;Desde 1974 levando o melhor para você e seu carro.&rdquo;
                </p>
                <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ember-400">
                  Auto Peças Tourón · Petrópolis
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
