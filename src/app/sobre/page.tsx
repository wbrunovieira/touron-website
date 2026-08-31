import type { Metadata } from "next";
import Image from "next/image";
import { Award, Handshake, MapPin, Wrench } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { BrandMarquee } from "@/components/brand-marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { business, yearsInBusiness } from "@/lib/business";
import { categories } from "@/lib/categories";
import { brands } from "@/lib/brands";

export const metadata: Metadata = {
  title: "A loja — mais de 50 anos em Petrópolis",
  description: `Conheça a história da ${business.name}: desde ${business.foundedYear} na Rua Coronel Veiga, em Petrópolis, atendendo motoristas da serra com peças, óleos e acessórios.`,
  alternates: { canonical: "/sobre" },
};

const marcos = [
  {
    ano: "1974",
    titulo: "A porta abre",
    texto:
      "É o ano que está no logo da loja até hoje: Tourón, desde 1974, atendendo os motoristas de Petrópolis.",
  },
  {
    ano: "Hoje",
    titulo: "Carro, moto e GNV",
    texto:
      "Do óleo de motor à bateria de moto, da cera de carnaúba ao emulador de bico para veículo convertido a GNV. Linha leve completa no balcão.",
  },
  {
    ano: "Agora",
    titulo: "Balcão e WhatsApp",
    texto:
      "O mesmo atendimento de sempre, agora também pelo celular — com entrega no 1º distrito de Petrópolis.",
  },
];

const valores = [
  {
    icon: Award,
    title: "Procedência",
    text: "Só trabalhamos com marcas conhecidas do mercado de reposição. Peça barata que dá problema sai caro pra todo mundo.",
  },
  {
    icon: Handshake,
    title: "Conversa honesta",
    text: "Se não temos, a gente diz. Se dá pra resolver mais barato, a gente conta. É assim há mais de 50 anos.",
  },
  {
    icon: Wrench,
    title: "Conhecimento de balcão",
    text: "Meio século vendo o que quebra em cada modelo. Você chega com o problema, a gente confere a aplicação.",
  },
  {
    icon: MapPin,
    title: "Raiz petropolitana",
    text: "Somos daqui: conhecemos as ladeiras, o clima da serra e o que a frota de Petrópolis exige de manutenção.",
  },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="A loja"
        title="Desde 1974 na"
        highlight="Rua Coronel Veiga"
        description={`${yearsInBusiness} anos na Rua Coronel Veiga, atendendo os motoristas da serra. ${business.tagline}`}
        image="/images/loja-fachada-frontal.webp"
        breadcrumbs={[
          { href: "/", label: "Início" },
          { href: "/sobre", label: "A loja" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <RevealGroup className="grid gap-4 sm:grid-cols-3">
              {[
                { v: yearsInBusiness, s: "+", l: "anos de história" },
                { v: brands.length, s: "+", l: "marcas no balcão" },
                { v: categories.length, s: "", l: "categorias" },
              ].map((x) => (
                <RevealItem
                  key={x.l}
                  className="card-edge rounded-3xl bg-navy-850/50 px-5 py-6"
                >
                  <Counter
                    to={x.v}
                    suffix={x.s}
                    className="font-display text-4xl font-extrabold tracking-tight text-gradient-ember"
                  />
                  <p className="mt-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-400">
                    {x.l}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>

            <ol className="mt-12 space-y-4">
              {marcos.map((m, i) => (
                <Reveal as="li" key={m.ano} delay={0.08 * i}>
                  <div className="card-edge relative rounded-3xl bg-navy-850/40 p-7 pl-8">
                    <span
                      aria-hidden
                      className="absolute left-0 top-8 h-12 w-1 rounded-full bg-linear-180 from-ember-400 to-ember-600"
                    />
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ember-400">
                      {m.ano}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
                      {m.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-400">
                      {m.texto}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.1}>
            <div className="card-edge overflow-hidden rounded-5xl">
              <Image
                src="/images/loja-fachada-calcada.webp"
                alt="Fachada da Auto Peças Tourón na Rua Coronel Veiga, em Petrópolis"
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 520px"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <BrandMarquee />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-[-0.03em] text-balance sm:text-4xl">
              O que a gente leva a sério
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2">
            {valores.map((v) => (
              <RevealItem key={v.title} className="h-full">
                <div className="card-edge group h-full rounded-4xl bg-navy-850/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-navy-850/70">
                  <span className="grid size-12 place-items-center rounded-2xl bg-linear-135 from-navy-600 to-navy-800 text-neon-300 transition-colors duration-500 group-hover:text-ember-300">
                    <v.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
                    {v.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
