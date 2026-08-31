import { ButtonLink } from "@/components/ui/button";
import { Glow, GridBackdrop } from "@/components/ui/glow";

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[70vh] place-items-center overflow-hidden py-32 grain">
      <GridBackdrop className="-z-10" />
      <Glow className="-z-10 left-1/2 top-1/4 size-[32rem] -translate-x-1/2" color="ember" />
      <div className="container-x text-center">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-neon-300">
          Erro 404
        </p>
        <h1 className="mt-6 font-display text-5xl font-extrabold tracking-[-0.04em] text-balance sm:text-7xl">
          Essa peça <span className="text-gradient-ember">não está no estoque</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-lg text-ink-300">
          A página que você procurou não existe ou mudou de endereço. Volte ao
          início ou dê uma olhada nas categorias.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Voltar ao início</ButtonLink>
          <ButtonLink href="/categorias" variant="glass">
            Ver categorias
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
