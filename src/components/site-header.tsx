"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { LogoLink } from "./ui/logo";
import { WhatsappIcon } from "./ui/category-icon";
import { business } from "@/lib/business";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

const nav = [
  { href: "/categorias", label: "Categorias" },
  { href: "/entrega", label: "Entrega" },
  { href: "/sobre", label: "A loja" },
  { href: "/contato", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-navy-900/80 backdrop-blur-xl supports-backdrop-filter:bg-navy-900/60"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <LogoLink />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-ink-300 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-px h-px scale-x-0 bg-linear-90 from-transparent via-neon-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phone.href}
              className="hidden items-center gap-2 rounded-full px-4 py-2 font-mono text-xs text-ink-300 ring-1 ring-inset ring-white/10 transition-colors hover:text-white hover:ring-white/25 md:inline-flex"
            >
              <Phone className="size-3.5" strokeWidth={2} />
              {business.phone.display}
            </a>
            <a
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-linear-135 from-ember-400 via-ember-500 to-ember-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_28px_-10px_rgba(255,106,0,0.95)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              <WhatsappIcon className="size-4" />
              Pedir no WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-full text-ink-100 ring-1 ring-inset ring-white/12 transition-colors hover:bg-white/8 lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden"
          >
            <div className="border-b border-white/10 bg-navy-950/95 backdrop-blur-xl">
              <div className="container-x flex flex-col gap-1 py-6">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3.5 font-display text-2xl font-bold tracking-tight text-ink-100 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={whatsappLink(waMessages.general)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-135 from-ember-400 via-ember-500 to-ember-600 px-6 py-3.5 font-bold text-white"
                  >
                    <WhatsappIcon className="size-5" />
                    Pedir no WhatsApp
                  </a>
                  <a
                    href={business.phone.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-mono text-sm text-ink-300 ring-1 ring-inset ring-white/15"
                  >
                    <Phone className="size-4" />
                    {business.phone.display}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
