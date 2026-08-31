# Auto Peças Tourón — site institucional

Site de vitrine + conversão por WhatsApp para a **Auto Peças Tourón**
(R. Coronel Veiga, 233 — Centro, Petrópolis/RJ · desde 1974).

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · Motion · lucide-react.

## Rodando

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de produção
pnpm lint
```

## Estrutura

```
src/
  app/
    page.tsx                    home
    categorias/                 índice + [slug] (12 páginas estáticas, SEO local)
    entrega/  sobre/  contato/
    opengraph-image.tsx         OG dinâmico (next/og)
    sitemap.ts  robots.ts
  components/                   seções da página + ui/
  lib/
    business.ts                 NAP, horários, redes — FONTE ÚNICA DE VERDADE
    categories.ts               catálogo vitrine (sem preço/estoque)
    brands.ts  faq.ts  whatsapp.ts
public/
  brand/                        logo extraído do perfil (PNG transparente) + ícone
  images/                       fotos do Instagram tratadas em WebP
```

Todo CTA monta um link `wa.me` com a mensagem já preenchida
(`src/lib/whatsapp.ts`). Não há carrinho, checkout, estoque nem painel admin.

## Antes de publicar em produção — confirmar com o cliente

- [ ] **Horário de funcionamento** (`src/lib/business.ts` → `hours` / `hoursSchema`).
      Os valores atuais são uma suposição e estão marcados com `TODO CONFIRMAR`.
- [ ] **Formas de pagamento e parcelamento** (`src/lib/faq.ts`).
- [ ] **Marcas por categoria** (`src/lib/categories.ts` → `brands`). A lista veio das
      publicações do Instagram; confirmar o que está de fato em linha.
- [ ] **Itens de cada categoria** — revisar com quem está no balcão.
- [ ] **Domínio final** (`siteUrl` em `src/lib/business.ts`) — hoje aponta para
      `touronautopecas.com.br`.
- [ ] **Nota do Google** (`googleRating`) — 4,3 com 142 avaliações em ago/2026.
- [ ] Fotos: as imagens vieram do Instagram da loja. Vale fazer uma sessão de
      fotos da fachada e do balcão para o hero e a página "A loja".

## Dados de origem

Perfil `@touronautopecas` e ficha do Google Meu Negócio
(`Tourón-Auto Peças`, -22.5224025, -43.1899729).
