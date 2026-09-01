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

## Antes de publicar em produção

Duas auditorias independentes rodaram sobre o conteúdo: uma contra o export do
Instagram, outra contra fontes públicas (Correios/ViaCEP, Receita Federal,
IBGE, SIG da Prefeitura de Petrópolis, registro.br, Google Business Profile).
O que dava para corrigir sozinho já foi. O que sobrou depende do dono.

### Bloqueador

- [ ] **Registrar `touronautopecas.com.br`.** Verificado no registro.br em
      31/08/2026: **o domínio está livre**. Qualquer um registra por ~R$ 40/ano,
      inclusive um concorrente. Registrar também `autopecastouron.com.br` como
      defensiva.

      O site hoje roda em **https://touron.wbdigitalsolutions.com** (subdomínio
      de apresentação, DNS no Cloudflare via CNAME para a Vercel). Ao comprar o
      domínio definitivo: apontar o DNS para a Vercel, rodar
      `vercel domains add touronautopecas.com.br touron-website`, e trocar
      `NEXT_PUBLIC_SITE_URL` no projeto — canônico, sitemap, robots e Open
      Graph acompanham sozinhos.

### Confirmar com o dono

- [ ] **1974 ou 1981?** O logotipo e a bio dizem "desde 1974". O CNPJ
      27.715.598/0001-51 registra início de atividade em **17/12/1981**
      (Receita Federal, três espelhos independentes). É comum a empresa operar
      antes de formalizar, mas a diferença muda "52 anos" para 45. Enquanto não
      confirmar, `foundingDate` foi retirado do JSON-LD — o texto "desde 1974"
      continua, por ser afirmação da própria marca.
- [ ] **A entrega sem taxa ainda vale?** A arte "SEM TAXAS* / * 1º distrito de
      Petrópolis" é de **06/08/2022**. Perguntar também se há **pedido mínimo**.
- [ ] **Trocar "1º distrito" por lista de bairros ou raio em km.** A Prefeitura
      declara que *"os bairros de Petrópolis não são formalizados"* e a divisa
      distrital será redesenhada; bairros ficam partidos entre o 1º e o 2º
      (Caxambu 47%/52%, Rocio 57%/43%). Não existe consulta de distrito por
      endereço ou CEP. Pelo CDC art. 30 a oferta vincula. *Mitigação aplicada:*
      o site pede em todo lugar para confirmar a cobertura pelo WhatsApp.
- [ ] **Mecânica, elétrica e borracharia.** O Street View mostra placas
      "Tourón MECÂNICA", "Tourón ELÉTRICA" e "Tourón BORRACHARIA" na fachada.
      Se esses serviços existem, faltam no site inteiro — e são um argumento de
      venda grande.
- [ ] **Telefone (24) 2245-3197.** Aparece no letreiro da fachada e em vários
      guias. Ativo ou linha antiga?
- [ ] **Formas de pagamento** (`paymentConfirmed: false`).
- [ ] **Itens de cada categoria** (`src/lib/categories.ts`) — metade é dedução
      razoável, não algo visto em foto. Nada falsificável, mas vale o dono cortar
      o que não trabalha.

### Sugerir ao dono (fora do site)

- [ ] **Cadastrar o site no Google Business Profile** — hoje a ficha não tem
      site, mostra "Adicionar website".
- [ ] **Corrigir o CEP no cadastro da Receita**: consta 25655-171, cuja faixa é
      "de 620 a 1136"; o correto para o nº 233 é **25655-151**.
- [ ] **Corrigir o número no Bing Places**: lista "Rua Coronel Veiga, 259".

### Confirmado por fonte pública

CEP **25655-151** (Correios/ViaCEP) · bairro **Coronel Veiga** — as 11 faixas
da rua retornam Coronel Veiga, nenhuma retorna "Centro", e a Receita e o Google
concordam · horário **Seg–Sex 08h–18h, Sáb 08h–13h, Dom fechado** (Google
Business Profile, corroborado por locaisdobrasil e OpenStreetMap) · telefone
**(24) 2243-1030** em cinco fontes · WhatsApp **(24) 99305-9487** (bio) · nota
**4,3 · 142 avaliações** (lida na ficha do Google em 31/08/2026 — sem espelho
independente, os agregadores brasileiros mantêm avaliação própria) · razão
social **AUTO PECAS TOURON LTDA**, CNPJ **27.715.598/0001-51**, CNAE 4530-7/03.

### Já corrigido

Bairro "Centro" → **Coronel Veiga** em todo o site. Horário reposto (estava
removido por suspeita, mas batia com o GBP). Canônico, sitemap, robots e Open
Graph tirados do domínio inexistente. CNPJ e razão social no rodapé.
Removidos por falta de lastro: "entrega no mesmo dia", "resposta em minutos",
"teste de carga e alternador", "orientação de instalação", "originais e OEM",
"baterias 45Ah a 100Ah", "fluido de freio DOT 3 e DOT 4", óleo "mineral", a
linha do tempo "Anos 90", "três gerações" e "no mesmo endereço desde 1974".
Nomes de marca corrigidos pelo rótulo lido na foto: Cindy→**Cinoy**,
Chesf→**Chesy Lub**, Car Lub→**Car 80**, Fresh Car→**Luxcar**,
Speed Way→**SW**.

## Dados de origem

Perfil `@touronautopecas` e ficha do Google Meu Negócio
(`Tourón-Auto Peças`, -22.5224025, -43.1899729).
