import type { Slide } from "@/components/hero-carousel";

/**
 * Fotos do carrossel do hero.
 *
 * ── ORIGEM ────────────────────────────────────────────────────────────────
 * As três primeiras são a fachada da loja, tratadas (clareadas, contraste e
 * nitidez) a partir de capturas do Google Street View enviadas pelo cliente.
 * São PROVISÓRIAS: imagem do Street View é licenciada pelo Google, e a foto
 * frontal ainda traz a marca d'água "© 2025 Google" — que não foi removida de
 * propósito. Para publicação definitiva, duas saídas legítimas:
 *   a) foto própria da fachada (melhor, e a de maior valor para a marca)
 *   b) embed oficial do Street View, que é licenciado e mantém a atribuição
 *
 * As demais vêm do Instagram da loja (@touronautopecas) e são nossas de usar.
 *
 * ── O QUE AINDA FALTA FOTOGRAFAR ──────────────────────────────────────────
 * Sessão de 30 min com celular, luz do dia:
 *   1. fachada com o letreiro (substitui as três primeiras)
 *   2. corredor de escaninhos, foco nítido
 *   3. balcão com atendente — o site não tem nenhuma pessoa até agora
 *   4. entregador saindo com o pedido
 *
 * Jogue os arquivos em `public/images/` e troque a lista. Proporção 4:5,
 * 1200×1500 dá conta. O primeiro item é o que carrega antes de o carrossel
 * girar — deve ser sempre o mais forte.
 */
export const heroSlides: Slide[] = [
  {
    src: "/images/loja-fachada-calcada.webp",
    alt: "Fachada da Auto Peças Tourón na Rua Coronel Veiga, com as placas de mecânica e elétrica",
  },
  {
    src: "/images/loja-fachada-letreiro.webp",
    alt: "Letreiro da Auto Peças Tourón sobre a entrada da loja, com o expositor de baterias",
  },
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
];
