/**
 * Fonte única de verdade dos dados do negócio (NAP).
 * Alterar aqui reflete no site inteiro + JSON-LD + sitemap.
 */
export const business = {
  name: "Auto Peças Tourón",
  legalName: "Auto Peças Tourón Ltda",
  cnpj: "27.715.598/0001-51",
  shortName: "Tourón",
  foundedYear: 1974,
  tagline: "Desde 1974 levando o melhor para você e seu carro.",
  description:
    "Auto peças, óleos, lubrificantes, baterias, acessórios e produtos de estética automotiva em Petrópolis/RJ. Mais de 50 anos atendendo motoristas da região, com entrega no primeiro distrito.",
  address: {
    street: "Rua Coronel Veiga, 233",
    // Correios/ViaCEP (todas as 11 faixas da rua), cadastro do CNPJ na Receita
    // e o Google Business Profile registram "Coronel Veiga". A arte antiga da
    // loja dizia "Centro" — mas a loja fica a 2,2 km da Catedral.
    district: "Coronel Veiga",
    city: "Petrópolis",
    state: "RJ",
    stateFull: "Rio de Janeiro",
    postalCode: "25655-151",
    country: "BR",
  },
  geo: { lat: -22.5224025, lng: -43.1899729 },
  phone: { display: "(24) 2243-1030", href: "tel:+552422431030" },
  whatsapp: { display: "(24) 99305-9487", number: "5524993059487" },
  instagram: {
    handle: "@touronautopecas",
    url: "https://www.instagram.com/touronautopecas/",
  },
  maps: "https://maps.app.goo.gl/?q=Tour%C3%B3n+Auto+Pe%C3%A7as+Petr%C3%B3polis",
  mapsPlace:
    "https://www.google.com/maps/place/Tour%C3%B3n-Auto+Pe%C3%A7as/@-22.5224025,-43.1899729,17z",
  mapsEmbed:
    "https://www.google.com/maps?q=Tour%C3%B3n%20Auto%20Pe%C3%A7as%2C%20R.%20Cel.%20Veiga%20233%2C%20Petr%C3%B3polis%20-%20RJ&output=embed",
/**
   * Horário conferido em 31/08/2026 no Google Business Profile da loja e
   * corroborado por locaisdobrasil e OpenStreetMap. Se a flag voltar a false,
   * o site esconde o horário e o JSON-LD omite `openingHours`.
   */
  hoursConfirmed: true,
  hours: [
    { label: "Segunda a sexta", value: "08h às 18h" },
    { label: "Sábado", value: "08h às 13h" },
    { label: "Domingo e feriados", value: "Fechado" },
  ],
  hoursSchema: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
  /** Formas de pagamento também não confirmadas com o cliente. */
  paymentConfirmed: false,
  payment: "Dinheiro, PIX, Cartão de débito, Cartão de crédito",
  /**
   * Lido diretamente da ficha do Google Maps da loja em 31/08/2026.
   * Reconferir de tempos em tempos — a contagem muda.
   */
  googleRating: { value: "4,3", count: 142 },
  delivery: {
    area: "1º distrito de Petrópolis",
    note: "Entrega sem taxa no 1º distrito de Petrópolis. Confirme a cobertura do seu endereço pelo WhatsApp antes de fechar o pedido.",
    /**
     * O 1º distrito não é verificável pelo consumidor: a Prefeitura de
     * Petrópolis reconhece publicamente que os bairros não são formalizados e
     * que a divisa distrital vai ser redesenhada — vários bairros ficam
     * partidos entre o 1º e o 2º distrito (Caxambu é 47%/52%). Não há consulta
     * por endereço ou CEP. Enquanto a loja não definir uma lista de bairros ou
     * um raio em km, o site sempre manda confirmar o endereço no atendimento.
     */
    coverageNote: "Confirme a cobertura do seu endereço pelo WhatsApp.",
  },
} as const;

/**
 * ATENÇÃO: `touronautopecas.com.br` NÃO está registrado (verificado no
 * registro.br em 31/08/2026 — o domínio está livre). Enquanto não for
 * comprado, o canônico, o sitemap, o robots e o Open Graph precisam apontar
 * para o host que realmente existe, senão o site fica inindexável e o preview
 * do WhatsApp dá 404.
 * Ao registrar o domínio: definir NEXT_PUBLIC_SITE_URL no projeto da Vercel.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://touron-website.vercel.app";

export const yearsInBusiness = new Date().getFullYear() - business.foundedYear;

export const fullAddress = `${business.address.street}, ${business.address.district} — ${business.address.city}/${business.address.state}`;
