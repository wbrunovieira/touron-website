import { Hero } from "@/components/hero";
import { BrandMarquee } from "@/components/brand-marquee";
import { PartFinder } from "@/components/part-finder";
import { CategoryGrid } from "@/components/category-grid";
import { DeliverySection } from "@/components/delivery-section";
import { Pillars } from "@/components/pillars";
import { InstagramStrip } from "@/components/instagram-strip";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { faq } from "@/lib/faq";
import { siteUrl } from "@/lib/business";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}#faq`,
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <BrandMarquee />
      <PartFinder />
      <CategoryGrid limit={6} />
      <DeliverySection />
      <Pillars />
      <InstagramStrip />
      <FaqSection />
      <ContactSection />
      <CtaBand />
    </>
  );
}
