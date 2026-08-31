"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search, Send } from "lucide-react";
import { Glow } from "./ui/glow";
import { WhatsappIcon } from "./ui/category-icon";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

const sugestoes = [
  "Óleo 5W-30",
  "Bateria 60Ah",
  "Palheta do limpador",
  "Fluido de freio",
  "Aditivo de radiador",
  "Kit reparador de pneu",
  "Vela de ignição",
  "Cera de carnaúba",
];

export function PartFinder() {
  const [peca, setPeca] = useState("");
  const [carro, setCarro] = useState("");

  const href = whatsappLink(
    peca.trim()
      ? waMessages.part(peca.trim(), carro.trim() || undefined)
      : waMessages.general,
  );

  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <Glow className="-z-10 left-1/2 top-0 size-[36rem] -translate-x-1/2" color="navy" />

      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="card-edge relative overflow-hidden rounded-5xl bg-linear-135 from-navy-800/70 via-navy-850/80 to-navy-950 p-8 sm:p-12 lg:p-16 grain"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-radial from-ember-500/25 to-transparent blur-3xl"
          />

          <div className="relative max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-neon-300 ring-1 ring-inset ring-white/10">
              <Search className="size-3.5" />
              Busca rápida
            </span>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.03] tracking-[-0.03em] text-balance sm:text-5xl">
              Qual peça você precisa <span className="text-gradient-ember">hoje?</span>
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
              Escreve aí o que você procura e o modelo do carro. A gente já abre
              o WhatsApp com a mensagem pronta — sem cadastro, sem formulário
              chato.
            </p>
          </div>

          <div className="relative mt-9 grid gap-3 sm:grid-cols-[1.4fr_1fr_auto]">
            <label className="sr-only" htmlFor="peca">
              Peça ou produto
            </label>
            <input
              id="peca"
              value={peca}
              onChange={(e) => setPeca(e.target.value)}
              placeholder="Ex.: óleo de motor, bateria, palheta…"
              className="w-full rounded-2xl border border-white/12 bg-navy-950/60 px-5 py-4 text-[0.95rem] text-white placeholder:text-ink-500 transition-colors focus:border-neon-400/60 focus:outline-none focus:ring-2 focus:ring-neon-400/25"
            />
            <label className="sr-only" htmlFor="carro">
              Veículo
            </label>
            <input
              id="carro"
              value={carro}
              onChange={(e) => setCarro(e.target.value)}
              placeholder="Modelo e ano"
              className="w-full rounded-2xl border border-white/12 bg-navy-950/60 px-5 py-4 text-[0.95rem] text-white placeholder:text-ink-500 transition-colors focus:border-neon-400/60 focus:outline-none focus:ring-2 focus:ring-neon-400/25"
            />
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-linear-135 from-ember-400 via-ember-500 to-ember-600 px-7 py-4 font-bold text-white shadow-[0_12px_40px_-12px_rgba(255,106,0,0.95)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <WhatsappIcon className="size-5" />
              Consultar
              <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="relative mt-7 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-500">
              Populares
            </span>
            {sugestoes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setPeca(s)}
                className="rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-ink-300 ring-1 ring-inset ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:ring-neon-400/40"
              >
                {s}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
