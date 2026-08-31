/**
 * Fonte única de verdade dos dados do negócio (NAP).
 * Alterar aqui reflete no site inteiro + JSON-LD + sitemap.
 */
export const business = {
  name: "Auto Peças Tourón",
  legalName: "Auto Peças Tourón",
  shortName: "Tourón",
  foundedYear: 1974,
  tagline: "Desde 1974 levando o melhor para você e seu carro.",
  description:
    "Auto peças, óleos, lubrificantes, baterias, acessórios e produtos de estética automotiva em Petrópolis/RJ. Mais de 50 anos atendendo motoristas da região, com entrega no primeiro distrito.",
  address: {
    street: "Rua Coronel Veiga, 233",
    district: "Centro",
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
  // TODO CONFIRMAR COM O CLIENTE antes de publicar em produção.
  hours: [
    { label: "Segunda a sexta", value: "08h às 18h" },
    { label: "Sábado", value: "08h às 13h" },
    { label: "Domingo e feriados", value: "Fechado" },
  ],
  hoursSchema: [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-13:00",
  ],
  // Nota pública do perfil no Google Maps (verificar periodicamente).
  googleRating: { value: "4,3", count: 142 },
  delivery: {
    area: "1º distrito de Petrópolis",
    note: "Entrega sem taxa no 1º distrito de Petrópolis. Demais regiões, consulte pelo WhatsApp.",
  },
} as const;

export const siteUrl = "https://touronautopecas.com.br";

export const yearsInBusiness = new Date().getFullYear() - business.foundedYear;

export const fullAddress = `${business.address.street}, ${business.address.district} — ${business.address.city}/${business.address.state}`;
