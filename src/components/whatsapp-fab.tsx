"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { WhatsappIcon } from "./ui/category-icon";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

export function WhatsappFab() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 520));

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          href={whatsappLink(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-linear-135 from-[#25D366] to-[#128C7E] px-5 py-4 font-bold text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.7)] sm:bottom-8 sm:right-8"
          aria-label="Falar no WhatsApp"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/50 blur-xl animate-pulse-glow"
          />
          <WhatsappIcon className="size-6" />
          <span className="hidden text-sm sm:inline">Fale conosco</span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
