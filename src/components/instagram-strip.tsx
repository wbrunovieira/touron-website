import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/reveal";
import { SectionHeading } from "./ui/section-heading";
import { InstagramIcon } from "./ui/category-icon";
import { business } from "@/lib/business";

const posts = [
  { src: "/images/post-cera.webp", alt: "Ceras automotivas disponíveis na loja" },
  { src: "/images/post-bomba.webp", alt: "Kit bomba de combustível" },
  { src: "/images/post-limpa-vidros.webp", alt: "Limpa-vidros automotivo" },
  { src: "/images/post-selante.webp", alt: "Selante para radiador Stop Leak" },
  { src: "/images/post-lubrificantes.webp", alt: "Linha de lubrificantes" },
  { src: "/images/fluidos-coloridos.webp", alt: "Aditivos e fluidos coloridos" },
  { src: "/images/post-gnv.webp", alt: "Peças para veículos com GNV" },
  { src: "/images/loja-interior.webp", alt: "Interior da loja Tourón Auto Peças" },
];

export function InstagramStrip() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Novidades"
            title="O que está chegando"
            highlight="na loja"
            description="Acompanhe as novidades, promoções e dicas de manutenção no nosso Instagram."
          />
          <Reveal>
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-ink-100 ring-1 ring-inset ring-white/12 transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/25"
            >
              <InstagramIcon className="size-4.5" />
              {business.instagram.handle}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mask-edges mt-14 overflow-hidden">
        <ul className="flex w-max animate-marquee-slow gap-4 pr-4 hover:[animation-play-state:paused]">
          {[...posts, ...posts].map((p, i) => (
            <li key={`${p.src}-${i}`} className="shrink-0">
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block size-52 overflow-hidden rounded-3xl ring-1 ring-white/10 sm:size-64"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="256px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <InstagramIcon className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 scale-75 text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
