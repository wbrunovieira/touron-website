"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = { src: string; alt: string };

const INTERVALO = 5500;

export function HeroCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((i) => (i + delta + slides.length) % slides.length);
    },
    [slides.length],
  );

  const jump = useCallback(
    (to: number) => {
      setDirection(to > index ? 1 : -1);
      setIndex(to);
    },
    [index],
  );

  // Autoplay: parado no hover/foco e quando o usuário pede menos movimento.
  useEffect(() => {
    if (paused || reduceMotion || slides.length < 2) return;
    timer.current = setTimeout(() => go(1), INTERVALO);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [index, paused, reduceMotion, go, slides.length]);

  const atual = slides[index];

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label="Fotos da loja Auto Peças Tourón"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-5xl ring-1 ring-white/12">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={atual.src}
            custom={direction}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.06, x: direction * 40 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.02, x: direction * -40 }
            }
            transition={{ duration: reduceMotion ? 0.2 : 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={atual.src}
              alt={atual.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-linear-0 from-navy-950/75 via-navy-950/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-linear-135 from-navy-800/25 via-transparent to-ember-600/12" />

        {slides.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="group/nav absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-navy-950/50 text-ink-100 backdrop-blur-md transition-all hover:bg-navy-950/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-400 sm:left-4"
            >
              <ChevronLeft className="size-5 transition-transform group-hover/nav:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima foto"
              className="group/nav absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-navy-950/50 text-ink-100 backdrop-blur-md transition-all hover:bg-navy-950/80 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-400 sm:right-4"
            >
              <ChevronRight className="size-5 transition-transform group-hover/nav:translate-x-0.5" />
            </button>

            <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => jump(i)}
                  aria-label={`Ir para a foto ${i + 1} de ${slides.length}`}
                  aria-current={i === index}
                  className="group/dot grid h-6 place-items-center px-0.5"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-500 ${
                      i === index
                        ? "w-7 bg-ember-400"
                        : "w-1.5 bg-white/40 group-hover/dot:bg-white/70"
                    }`}
                  />
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>

      <p aria-live="polite" className="sr-only">
        Foto {index + 1} de {slides.length}: {atual.alt}
      </p>
    </div>
  );
}
