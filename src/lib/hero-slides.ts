import type { Slide } from "@/components/hero-carousel";

/**
 * Fotos do carrossel do hero.
 *
 * ── ESTADO ATUAL ──────────────────────────────────────────────────────────
 * O Instagram da loja tem 44 fotos e **uma única** mostra a loja de verdade
 * (o expositor de baterias, com o piso, o balcão e as prateleiras ao fundo).
 * Todas as outras são close de produto com a loja desfocada atrás. Não existe
 * nenhuma foto de fachada no acervo.
 *
 * As capturas do Google Street View não servem: são conteúdo licenciado do
 * Google, com marca d'água "© Google" visível.
 *
 * ── COMO RESOLVER ─────────────────────────────────────────────────────────
 * Uma sessão de fotos de 30 min com celular, luz do dia. Na ordem de valor:
 *   1. fachada com o letreiro "Auto Peças Tourón"
 *   2. corredor de escaninhos, foco nítido (a foto mais "auto peças" possível)
 *   3. balcão com atendente — hoje o site não tem nenhuma pessoa
 *   4. entregador saindo com o pedido
 *
 * Jogue os arquivos em `public/images/` e troque a lista abaixo. Proporção
 * 4:5 (vertical), 1200×1500 dá conta. O primeiro item é o que carrega antes
 * de o carrossel começar a girar — deve ser sempre o mais forte.
 */
export const heroSlides: Slide[] = [
  {
    src: "/images/hero-loja-baterias.webp",
    alt: "Expositor de baterias automotivas no salão da loja Auto Peças Tourón",
  },
  {
    src: "/images/hero-balcao-aditivos.webp",
    alt: "Condicionador de metais no balcão da Tourón, com as prateleiras de peças ao fundo",
  },
  {
    src: "/images/hero-balcao-limpeza.webp",
    alt: "Limpa-vidros no balcão da Tourón, com os escaninhos de peças atrás",
  },
  {
    src: "/images/hero-balcao-fluidos.webp",
    alt: "Aditivos de motor Bardahl nas prateleiras da loja",
  },
];
