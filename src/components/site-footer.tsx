import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { Logo } from "./ui/logo";
import { InstagramIcon, WhatsappIcon } from "./ui/category-icon";
import { business, fullAddress, yearsInBusiness } from "@/lib/business";
import { categories } from "@/lib/categories";
import { waMessages, whatsappLink } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-radial from-navy-600/25 to-transparent blur-[110px]"
      />
      <div className="container-x relative grid gap-12 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:py-20">
        <div className="flex flex-col gap-5">
          <Logo className="h-14 w-auto" />
          <p className="max-w-xs text-sm leading-relaxed text-ink-400">
            {business.tagline} {yearsInBusiness} anos de estrada atendendo os
            motoristas de {business.address.city}.
          </p>
          <div className="flex gap-2">
            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Tourón Auto Peças"
              className="inline-flex size-11 items-center justify-center rounded-full text-ink-300 ring-1 ring-inset ring-white/12 transition-all hover:-translate-y-0.5 hover:bg-white/8 hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Tourón Auto Peças"
              className="inline-flex size-11 items-center justify-center rounded-full text-ink-300 ring-1 ring-inset ring-white/12 transition-all hover:-translate-y-0.5 hover:bg-white/8 hover:text-white"
            >
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <h3 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-neon-300">
            Categorias
          </h3>
          {categories.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              href={`/categorias/${c.slug}`}
              className="text-sm text-ink-400 transition-colors hover:text-white"
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/categorias"
            className="text-sm font-semibold text-ember-400 transition-colors hover:text-ember-300"
          >
            Ver todas →
          </Link>
        </nav>

        <nav className="flex flex-col gap-3">
          <h3 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-neon-300">
            Navegar
          </h3>
          {[
            { href: "/", label: "Início" },
            { href: "/entrega", label: "Entrega em Petrópolis" },
            { href: "/sobre", label: "A loja" },
            { href: "/contato", label: "Contato" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-400 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-neon-300">
            Onde estamos
          </h3>
          <a
            href={business.mapsPlace}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 text-sm text-ink-400 transition-colors hover:text-white"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-ember-400" />
            <span>{fullAddress}</span>
          </a>
          <a
            href={business.phone.href}
            className="flex gap-3 font-mono text-sm text-ink-400 transition-colors hover:text-white"
          >
            <Phone className="mt-0.5 size-4 shrink-0 text-ember-400" />
            {business.phone.display}
          </a>
          <div className="flex gap-3 text-sm text-ink-400">
            <Clock className="mt-0.5 size-4 shrink-0 text-ember-400" />
            {business.hoursConfirmed ? (
              <ul className="space-y-1">
                {business.hours.map((h) => (
                  <li key={h.label}>
                    <span className="text-ink-300">{h.label}:</span> {h.value}
                  </li>
                ))}
              </ul>
            ) : (
              <span>
                Confirme o horário pelo WhatsApp{" "}
                <span className="font-mono text-ink-300">
                  {business.whatsapp.display}
                </span>
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos os direitos
            reservados.
          </p>
          <p className="font-mono tracking-wide">
            {business.address.city}/{business.address.state} · desde{" "}
            {business.foundedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
