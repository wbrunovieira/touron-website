import { MapPin, Navigation } from "lucide-react";
import { business } from "@/lib/business";

/**
 * Atalhos de rota. Os dois são links universais: no celular o sistema abre o
 * app instalado, no desktop cai na versão web.
 */
export function NavButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <a
        href={business.nav.waze}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative isolate flex items-center gap-3.5 overflow-hidden rounded-3xl bg-linear-135 from-[#4FD8FF] via-[#33CCFF] to-[#0B93D5] p-5 text-[#062B3A] shadow-[0_10px_30px_-14px_rgba(51,204,255,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-12px_rgba(51,204,255,0.95)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#33CCFF]"
      >
        <span
          aria-hidden
          className="absolute inset-0 -z-10 translate-x-[-120%] bg-linear-110 from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
        />
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white/85 text-[#0B93D5] transition-transform duration-300 group-hover:scale-105">
          <Navigation
            className="size-5 transition-transform duration-300 group-hover:-rotate-12"
            strokeWidth={2.25}
            fill="currentColor"
          />
        </span>
        <span className="min-w-0">
          <span className="block font-display text-base font-extrabold leading-tight">
            Abrir no Waze
          </span>
          <span className="block text-xs font-medium text-[#062B3A]/70">
            traçar rota até a loja
          </span>
        </span>
      </a>

      <a
        href={business.nav.googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative isolate flex items-center gap-3.5 overflow-hidden rounded-3xl bg-linear-135 from-[#5A9BFF] via-[#4285F4] to-[#1A56C4] p-5 text-white shadow-[0_10px_30px_-14px_rgba(66,133,244,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-12px_rgba(66,133,244,0.95)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#4285F4]"
      >
        <span
          aria-hidden
          className="absolute inset-0 -z-10 translate-x-[-120%] bg-linear-110 from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]"
        />
        {/* faixa com as quatro cores do Maps, aparece no hover */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-90 from-[#4285F4] via-[#EA4335] to-[#FBBC04] transition-transform duration-500 group-hover:scale-x-100"
        />
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-[#EA4335] transition-transform duration-300 group-hover:scale-105">
          <MapPin
            className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
            strokeWidth={2.25}
            fill="currentColor"
            stroke="#fff"
          />
        </span>
        <span className="min-w-0">
          <span className="block font-display text-base font-extrabold leading-tight">
            Abrir no Google Maps
          </span>
          <span className="block text-xs font-medium text-white/75">
            ver rota e horários
          </span>
        </span>
      </a>
    </div>
  );
}
