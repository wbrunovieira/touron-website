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

Uma auditoria de conteúdo (agente independente + verificação manual contra o
export do Instagram) removeu do site tudo o que não tinha lastro. O que sobrou
de pendente está abaixo, em ordem de risco.

### Bloqueadores

- [ ] **A entrega sem taxa ainda vale?** A arte "NÓS LEVAMOS ATÉ VOCÊ — SEM
      TAXAS* — * Entregas no primeiro distrito de Petrópolis" é **de 06/08/2022**.
      A bio atual do perfil ainda fala em entregas, mas não repete "sem taxa".
      É a promessa mais visível do site inteiro — confirmar antes de publicar,
      e perguntar se há **pedido mínimo**.
- [ ] **Horário de funcionamento.** Hoje `hoursConfirmed: false` em
      `src/lib/business.ts`: o site mostra "confirme pelo WhatsApp" e o JSON-LD
      **não** publica `openingHours`. Ao confirmar, preencher `hours` +
      `hoursSchema` e virar a flag.
- [ ] **Formas de pagamento.** Mesmo mecanismo: `paymentConfirmed: false`.
- [ ] **Domínio.** `siteUrl` aponta para `touronautopecas.com.br`, que vai para
      o sitemap e para as URLs canônicas. Confirmar que o domínio é deles.
- [ ] **Definir a área de entrega por um critério que o cliente consiga
      conferir sozinho** — lista de bairros ou raio em km a partir da loja.
      "1º distrito" não serve: a própria Prefeitura declara que *"os bairros de
      Petrópolis não são formalizados"* e que a divisa distrital será
      redesenhada. Bairros ficam partidos entre o 1º e o 2º distrito (Caxambu
      47%/52%, Rocio 57%/43%, Carangola 61%/39%) e **não existe consulta de
      distrito por endereço ou CEP**. O 1º distrito tem ~132 km², dos quais
      ~41 km² são zona rural de serra. Pelo CDC art. 30 a oferta anunciada
      vincula — com um critério que ninguém consegue verificar, isso é risco
      real. A loja está confirmadamente dentro do 1º distrito (a Rua Coronel
      Veiga está 100% nele), então o problema é só a fronteira externa.
      *Mitigação já aplicada:* o site pede em todo lugar para confirmar a
      cobertura do endereço pelo WhatsApp.
- [ ] **Bairro: "Centro" ou "Coronel Veiga"?** A arte da loja diz "Centro"; a
      ficha do Google Maps registra "R. Cel. Veiga, 233 - **Cel. Veiga**,
      Petrópolis - RJ, 25655-151". O site usa "Centro". Para SEO local o
      endereço do site deve bater exatamente com o do Google Meu Negócio —
      alinhar os dois.

### Revisar com quem está no balcão

- [ ] **Itens de cada categoria** (`src/lib/categories.ts`). Cerca de metade da
      lista é dedução razoável para uma auto peças, não algo visto nas fotos.
      Nada ali é falsificável (não há preço, spec nem promessa de serviço), e a
      página avisa que é amostra — mas vale o dono cortar o que não trabalha.
- [ ] **Marcas** (`src/lib/brands.ts`). A lista só contém marcas lidas em foto.
      Faltam certamente outras que a loja trabalha.

### Já corrigido nesta auditoria

Removidos por falta de lastro: horário e formas de pagamento no JSON-LD,
"entrega no mesmo dia", "resposta em minutos", "teste de carga e alternador",
"orientação de instalação", "originais e OEM", "baterias 45Ah a 100Ah",
"fluido de freio DOT 3 e DOT 4", óleo "mineral", a linha do tempo "Anos 90",
"três gerações atendidas" e "desde 1974 no mesmo endereço".
Corrigidos nomes de marca lidos errado: Cindy→**Cinoy**, Chesf→**Chesy Lub**,
Car Lub→**Car 80**, Fresh Car→**Luxcar**, Speed Way→**SW**. Marcas atribuídas
a categorias onde não aparecem foram removidas.

Mantidos por terem evidência direta: "desde 1974" (bio + logotipo), endereço,
telefone, WhatsApp, "sem taxas / 1º distrito" (arte da loja) e a nota
**4,3 · 142 avaliações**, lida na ficha do Google Maps em 31/08/2026.

## Dados de origem

Perfil `@touronautopecas` e ficha do Google Meu Negócio
(`Tourón-Auto Peças`, -22.5224025, -43.1899729).
