export type Category = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  icon: string;
  image: string;
  accent: string;
  items: string[];
  brands: string[];
};

/** Catálogo vitrine — sem preço e sem estoque; todo CTA cai no WhatsApp. */
export const categories: Category[] = [
  {
    slug: "oleos-e-lubrificantes",
    name: "Óleos e Lubrificantes",
    short: "Óleos",
    blurb:
      "Óleo de motor, câmbio, transmissão automática e lubrificantes para carro e moto — sintético, semissintético e mineral, na viscosidade que o seu manual pede.",
    icon: "Droplet",
    image: "/images/cat-oleos.webp",
    accent: "from-amber-400 to-orange-600",
    items: [
      "Óleo de motor 5W-30, 15W-40, 20W-50",
      "Óleo de câmbio e diferencial",
      "Fluido de transmissão automática (ATF)",
      "Óleo para motos 2T e 4T",
      "Graxas e lubrificantes de chassi",
    ],
    brands: ["Lubrax", "Petronas", "Ipiranga", "Texaco", "Radnaq"],
  },
  {
    slug: "aditivos-e-fluidos",
    name: "Aditivos e Fluidos",
    short: "Aditivos",
    blurb:
      "Aditivo de radiador, fluido de freio, água desmineralizada, condicionador de metais e limpa-bicos para manter o motor na temperatura e na pressão certas.",
    icon: "Thermometer",
    image: "/images/cat-aditivos.webp",
    accent: "from-rose-400 to-red-600",
    items: [
      "Aditivo de radiador concentrado e pronto uso",
      "Fluido de freio DOT 3 e DOT 4",
      "Água desmineralizada",
      "Condicionador de metais e anti-atrito",
      "Limpa-bicos, limpa radiador e selante",
    ],
    brands: ["Paraflu", "Bardahl", "Militec-1", "Petronas Tutela", "MSX"],
  },
  {
    slug: "baterias",
    name: "Baterias",
    short: "Baterias",
    blurb:
      "Bateria para carro, moto e utilitário com a amperagem certa, teste na hora e orientação de instalação. Também para veículos com GNV.",
    icon: "BatteryCharging",
    image: "/images/cat-baterias.webp",
    accent: "from-lime-400 to-emerald-600",
    items: [
      "Baterias 45Ah a 100Ah para automóveis",
      "Baterias AGM e seladas para motos",
      "Baterias para utilitários e caminhonetes",
      "Teste de carga e alternador",
      "Cabos, bornes e chaves de bateria",
    ],
    brands: ["Kondor", "Haizer"],
  },
  {
    slug: "estetica-automotiva",
    name: "Estética Automotiva",
    short: "Estética",
    blurb:
      "Cera de carnaúba, polidores, shampoo automotivo, revitalizador de plásticos e limpa-vidros para deixar o carro com cara de novo.",
    icon: "Sparkles",
    image: "/images/cat-estetica.webp",
    accent: "from-sky-400 to-blue-600",
    items: [
      "Cera de carnaúba e cera líquida",
      "Massa de polir e revitalizador de pintura",
      "Shampoo automotivo e limpa-rodas",
      "Limpa-vidros e cristalizador",
      "Renovador de plásticos e pretinho",
    ],
    brands: ["Abro", "Grand Prix", "Bardahl", "Orbi Química"],
  },
  {
    slug: "aromatizantes",
    name: "Aromatizantes",
    short: "Aromas",
    blurb:
      "Odorizadores, aromatizantes em gel e sprays para deixar o interior sempre agradável — inclusive os clássicos Little Trees.",
    icon: "TreePine",
    image: "/images/cat-aromatizantes.webp",
    accent: "from-violet-400 to-fuchsia-600",
    items: [
      "Little Trees e Black Ice",
      "Aromatizante em gel",
      "Odorizador spray e bactericida",
      "Limpa ar-condicionado",
      "Essências automotivas",
    ],
    brands: ["Little Trees", "Orbi Air", "Cariocar", "Fresh Car"],
  },
  {
    slug: "palhetas-e-limpadores",
    name: "Palhetas e Limpadores",
    short: "Palhetas",
    blurb:
      "Palhetas na medida do seu modelo, motor do limpador, reservatório e aditivo de para-brisa. Chegou a chuva da serra, você enxerga.",
    icon: "CloudRain",
    image: "/images/cat-palhetas.webp",
    accent: "from-cyan-400 to-teal-600",
    items: [
      "Palhetas dianteiras e traseiras",
      "Motor do limpador de para-brisa",
      "Bomba e reservatório do esguicho",
      "Aditivo e desengordurante de para-brisa",
      "Borrachas de reposição",
    ],
    brands: ["Indisa", "Orbi Química"],
  },
  {
    slug: "som-e-acessorios",
    name: "Som e Acessórios",
    short: "Som",
    blurb:
      "Aparelho de som com Bluetooth e USB, alto-falantes, antenas, capas, tapetes e todos os acessórios que fazem diferença no dia a dia.",
    icon: "Radio",
    image: "/images/cat-som.webp",
    accent: "from-indigo-400 to-purple-600",
    items: [
      "Aparelhos de som com Bluetooth e USB",
      "Alto-falantes e módulos",
      "Antenas e chicotes",
      "Tapetes, capas e organizadores",
      "Carregadores veiculares e suportes",
    ],
    brands: ["Cindy"],
  },
  {
    slug: "ferramentas",
    name: "Ferramentas",
    short: "Ferramentas",
    blurb:
      "Macaco hidráulico, chaves, cavaletes, jogos de soquete e tudo que resolve na garagem ou na beira da estrada.",
    icon: "Wrench",
    image: "/images/cat-ferramentas.webp",
    accent: "from-orange-400 to-red-600",
    items: [
      "Macaco hidráulico e macaco tipo jacaré",
      "Chave de roda e cavaletes",
      "Jogos de soquete e chaves combinadas",
      "Alicates, chaves de fenda e martelos",
      "Cabos de chupeta e compressores",
    ],
    brands: ["Hulk", "Speed Way"],
  },
  {
    slug: "pneus-e-emergencia",
    name: "Pneus e Emergência",
    short: "Emergência",
    blurb:
      "Kit reparador de pneus para carro e moto, calibradores, triângulo, extintor e o item de segurança que você espera nunca precisar.",
    icon: "CircleDot",
    image: "/images/cat-pneus.webp",
    accent: "from-yellow-400 to-amber-600",
    items: [
      "Kit reparador de pneus carro e moto",
      "Selante e inflador instantâneo",
      "Calibradores e compressores 12V",
      "Triângulo, colete e extintor",
      "Bicos, válvulas e contrapesos",
    ],
    brands: ["Speed Way", "Abro"],
  },
  {
    slug: "pecas-de-reposicao",
    name: "Peças de Reposição",
    short: "Reposição",
    blurb:
      "Bomba d'água, bomba de combustível, correias, rolamentos, velas, filtros e peças de linha leve — nacionais e importadas.",
    icon: "Cog",
    image: "/images/cat-reposicao.webp",
    accent: "from-slate-300 to-blue-500",
    items: [
      "Bomba d'água e bomba de combustível",
      "Correias, tensores e rolamentos",
      "Velas de ignição e cabos",
      "Filtros de óleo, ar, combustível e cabine",
      "Peças e componentes para GNV",
    ],
    brands: ["Indisa", "Ipiranga"],
  },
  {
    slug: "tintas-e-repintura",
    name: "Tintas e Repintura",
    short: "Tintas",
    blurb:
      "Massa plástica, massa de polir, thinner, primer, cola de contato e o material de funilaria para o reparo sair bem-feito.",
    icon: "PaintBucket",
    image: "/images/cat-tintas.webp",
    accent: "from-pink-400 to-rose-600",
    items: [
      "Massa plástica e massa rápida",
      "Massa de polir e lixas",
      "Thinner, aguarrás e removedores",
      "Primer, fundo e vernizes",
      "Colas de contato e adesivos",
    ],
    brands: ["Proauto", "Itaqua", "Massa Fix"],
  },
  {
    slug: "sprays-e-manutencao",
    name: "Sprays e Manutenção",
    short: "Sprays",
    blurb:
      "Desengripante, silicone, limpa-contato, sabão pasta e vaselina — os itens que ficam sempre à mão em qualquer oficina.",
    icon: "SprayCan",
    image: "/images/cat-sprays.webp",
    accent: "from-emerald-400 to-cyan-600",
    items: [
      "Desengripante e antiferrugem",
      "Silicone spray e lubrificante de corrente",
      "Limpa-contato e limpa-freios",
      "Sabão pasta e pasta desengraxante",
      "Vaselina sólida e estopa",
    ],
    brands: ["WD-40", "Gitanes", "Car Lub", "Chesf Lub"],
  },
];

export const categoryBySlug = (slug: string) =>
  categories.find((c) => c.slug === slug);
