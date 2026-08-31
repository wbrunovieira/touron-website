"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MapPin, ShieldCheck, Star, Truck } from "lucide-react";
import { ButtonAnchor, ButtonLink } from "./ui/button";
import { Glow, GridBackdrop } from "./ui/glow";
import { WhatsappIcon } from "./ui/category-icon";
import { business, yearsInBusiness } from "@/lib/business";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

const ease = [0.16, 1, 0.3, 1] as const;

const trust = [
  { icon: Truck, label: "Entrega grátis", sub: "1º distrito" },
  { icon: ShieldCheck, label: "Marcas de linha", sub: "originais e OEM" },
  { icon: MapPin, label: "Centro", sub: "Cel. Veiga, 233" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28 grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-linear-180 from-navy-950 via-navy-900 to-navy-850"
      />
      <GridBackdrop className="-z-10" />
      <Glow className="-z-10 -left-40 top-0 size-[38rem]" color="navy" />
      <Glow
        className="-z-10 right-[-12rem] top-24 size-[34rem] [animation-delay:-3s]"
        color="ember"
      />
      <Glow
        className="-z-10 left-1/3 bottom-[-16rem] size-[30rem] [animation-delay:-6s]"
        color="neon"
      />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* -------------------------------------------------- coluna texto */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4 ring-1 ring-inset ring-white/12 backdrop-blur"
          >
            <span className="rounded-full bg-linear-135 from-ember-400 to-ember-600 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
              {yearsInBusiness} anos
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-300">
              Petrópolis / RJ · desde {business.foundedYear}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-7 font-display text-[2.85rem] font-extrabold leading-[0.98] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.6rem]"
          >
            A peça certa,
            <br />
            <span className="text-gradient">sem rodar a cidade</span>
            <span className="text-ember-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-300"
          >
            Óleos, baterias, acessórios e peças de reposição para carro e moto.
            Você manda o modelo do seu veículo no WhatsApp, a gente confere e{" "}
            <strong className="font-semibold text-white">
              leva até a sua porta
            </strong>{" "}
            no 1º distrito — sem taxa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonAnchor
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon className="size-5" />
              Pedir pelo WhatsApp
            </ButtonAnchor>
            <ButtonLink href="/categorias" variant="glass">
              Ver categorias
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
          </motion.div>

          <motion.a
            href={business.mapsPlace}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white/4 py-2 pl-3 pr-4 ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/8"
          >
            <span className="flex gap-0.5 text-ember-400">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
              <Star className="size-3.5 fill-current opacity-40" />
            </span>
            <span className="text-sm text-ink-300">
              <strong className="font-semibold text-white">
                {business.googleRating.value}
              </strong>{" "}
              · {business.googleRating.count} avaliações no Google
            </span>
          </motion.a>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-8 grid max-w-xl grid-cols-3 gap-3"
          >
            {trust.map((t) => (
              <li
                key={t.label}
                className="card-edge rounded-2xl bg-white/[0.035] px-4 py-4 backdrop-blur-sm"
              >
                <t.icon className="size-5 text-neon-400" strokeWidth={1.75} />
                <p className="mt-3 text-sm font-semibold leading-tight text-white">
                  {t.label}
                </p>
                <p className="mt-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-ink-500">
                  {t.sub}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* -------------------------------------------------- coluna visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-5xl ring-1 ring-white/12">
            <Image
              src="/images/hero-loja-baterias.webp"
              alt="Expositor de baterias automotivas no salão da loja Auto Peças Tourón, em Petrópolis"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-0 from-navy-950 via-navy-950/25 to-transparent" />
            <div className="absolute inset-0 bg-linear-135 from-navy-800/45 via-transparent to-ember-600/15" />
          </div>

          {/* cartão flutuante — entrega */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-16 w-56 rounded-3xl border border-white/12 bg-navy-950/80 p-4 shadow-2xl backdrop-blur-xl sm:-left-10"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-linear-135 from-ember-400 to-ember-600">
                <Truck className="size-5 text-white" strokeWidth={2} />
              </span>
              <div>
                <p className="text-sm font-bold leading-tight text-white">
                  Nós levamos até você
                </p>
                <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ember-300">
                  sem taxas*
                </p>
              </div>
            </div>
          </motion.div>

          {/* cartão flutuante — desde 1974 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute -right-3 top-10 rounded-3xl border border-white/12 bg-navy-950/80 px-5 py-4 text-center shadow-2xl backdrop-blur-xl sm:-right-8"
          >
            <p className="font-display text-4xl font-extrabold leading-none text-gradient-ember">
              1974
            </p>
            <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-400">
              desde
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
