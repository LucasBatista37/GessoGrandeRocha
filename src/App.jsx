import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import SEOHead from "./components/SEOHead";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gesso Grande Rocha",
  image: "https://gessogranderocha.com.br/images/drywall-banner.jpg",
  telephone: "+5511977349133",
  email: "gessogranderocha@gmail.com",
  url: "https://gessogranderocha.com.br",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Monsenhor Seckler, 771 - Casa 2, Jardim Praia Grande",
    addressLocality: "Mongaguá",
    addressRegion: "SP",
    postalCode: "11733-232",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-24.1096",
    longitude: "-46.6636",
  },
  areaServed: [
    { "@type": "City", name: "Mongaguá" },
    { "@type": "City", name: "Itanhaém" },
    { "@type": "City", name: "Praia Grande" },
  ],
  sameAs: [
    "https://www.facebook.com/AldemirGesso",
    "https://www.instagram.com/aldemirgrande?igsh=eHF4NXd6Y3Y3bmdj",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Drywall e Gesso",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Montagem de Paredes em Drywall" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Forros e Sancas" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Armários Sob Medida" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Revestimentos Decorativos" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Divisórias Corporativas" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Reformas Residenciais e Comerciais" },
      },
    ],
  },
};

function App() {
  return (
    <div className="min-h-screen flex flex-col text-[#1C1C1C]">
      <SEOHead
        title="Gesso e Drywall em Mongaguá, Itanhaém e Praia Grande | Gesso Grande Rocha"
        description="Especialistas em drywall, forros, sancas e reformas em Mongaguá, Itanhaém e Praia Grande. Orçamento gratuito. Qualidade e acabamento impecável."
        canonicalUrl="https://gessogranderocha.com.br"
        jsonLd={homeJsonLd}
      />
      <Navbar />
      <main className="mt-20">
        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FAFAFA]">
          <HeroSection />
        </section>

        <section className="bg-gradient-to-b from-[#FFF3E0] to-[#FFEBD0]">
          <AboutSection />
        </section>

        <section className="bg-gradient-to-b from-[#FFE5C2] to-[#FFDFA3]">
          <ServicesSection />
        </section>

        <section className="bg-gradient-to-b from-[#F5F5F5] to-[#ECECEC]">
          <GallerySection />
        </section>

        <section className="bg-gradient-to-b from-[#FFFFFF] to-[#FFF8EB]">
          <TestimonialsSection />
        </section>

        <section className="bg-gradient-to-b from-[#FFF7E9] to-[#FFF1D7]">
          <FinalCTASection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
