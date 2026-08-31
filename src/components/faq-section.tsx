"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./ui/section-heading";
import { faq } from "@/lib/faq";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Dúvidas"
          title="Perguntas"
          highlight="frequentes"
          description="Não achou o que procurava? É só chamar no WhatsApp que a gente responde."
        />

        <ul className="divide-y divide-white/8 border-y border-white/8">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-white"
                >
                  <span
                    className={`font-display text-lg font-bold leading-snug tracking-tight sm:text-xl ${
                      isOpen ? "text-white" : "text-ink-100"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-full ring-1 ring-inset transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-ember-500 text-white ring-ember-500"
                        : "text-ink-400 ring-white/15"
                    }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pr-12 text-[0.95rem] leading-relaxed text-ink-400">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
