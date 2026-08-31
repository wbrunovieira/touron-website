import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { business, fullAddress, siteUrl } from "@/lib/business";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jet",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — Auto peças em Petrópolis/RJ desde 1974`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "auto peças Petrópolis",
    "peças automotivas Petrópolis RJ",
    "óleo de motor Petrópolis",
    "bateria automotiva Petrópolis",
    "acessórios automotivos Petrópolis",
    "Tourón auto peças",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} — Auto peças em Petrópolis desde 1974`,
    description: business.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Auto peças em Petrópolis desde 1974`,
    description: business.description,
  },
  icons: {
    icon: [{ url: "/brand/icon-512.png", type: "image/png" }],
    apple: "/brand/icon-512.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#040957",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "@id": `${siteUrl}#store`,
  name: business.name,
  description: business.description,
  url: siteUrl,
  telephone: "+552422431030",
  image: `${siteUrl}/brand/icon-512.png`,
  logo: `${siteUrl}/brand/icon-512.png`,
  priceRange: "$$",
  currenciesAccepted: "BRL",
  ...(business.paymentConfirmed ? { paymentAccepted: business.payment } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.postalCode,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  ...(business.hoursConfirmed ? { openingHours: business.hoursSchema } : {}),
  sameAs: [business.instagram.url],
  areaServed: {
    "@type": "City",
    name: `${business.address.city} - ${business.address.state}`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-navy-900 font-sans">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ember-500 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
        >
          Ir para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsappFab />
        <span className="sr-only">{fullAddress}</span>
      </body>
    </html>
  );
}
