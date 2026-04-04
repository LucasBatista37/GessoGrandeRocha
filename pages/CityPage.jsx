import { motion } from "framer-motion";
import {
  PhoneCall,
  ArrowLeft,
  MapPin,
  Layout,
  Layers,
  Package,
  Ruler,
  Building2,
  Home,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { cities } from "../src/data/cities.js";
import SEOHead from "../src/components/SEOHead.jsx";
import Footer from "../src/components/Footer.jsx";

const serviceIcons = [
  { icon: <Layout size={24} />, title: "Montagem de Paredes em Drywall" },
  { icon: <Layers size={24} />, title: "Forros e Sancas" },
  { icon: <Package size={24} />, title: "Armários Sob Medida" },
  { icon: <Ruler size={24} />, title: "Revestimentos Decorativos" },
  { icon: <Building2 size={24} />, title: "Divisórias Corporativas" },
  { icon: <Home size={24} />, title: "Reformas Residenciais e Comerciais" },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-[#EEE] rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FAFAFA] transition-colors"
      >
        <span className="font-semibold text-[#1C1C1C] pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#E67E22] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="px-5 text-[#555555] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function CityPage({ citySlug }) {
  const navigate = useNavigate();
  const city = cities[citySlug];
  const [openFaq, setOpenFaq] = useState(null);

  if (!city) return null;

  const otherCities = Object.values(cities).filter(
    (c) => c.slug !== citySlug
  );

  const jsonLd = {
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
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Serviços de Drywall em ${city.name}`,
      itemListElement: serviceIcons.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          areaServed: { "@type": "City", name: city.name },
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const combinedJsonLd = [jsonLd, faqJsonLd];

  return (
    <>
      <SEOHead
        title={city.metaTitle}
        description={city.metaDescription}
        canonicalUrl={city.canonicalUrl}
        jsonLd={combinedJsonLd}
      />

      {/* Hero da Cidade */}
      <section className="relative py-20 bg-[#1C1C1C] text-white overflow-hidden min-h-[400px] md:min-h-[90vh] flex items-center">
        <img
          src="/images/drywall-banner.webp"
          alt={`Serviços de drywall e gesso em ${city.name}`}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            {city.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            {city.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5511977349133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E67E22] hover:bg-[#cf6d1e] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
            >
              <PhoneCall size={20} />
              Orçamento Gratuito
            </a>
            <button
              onClick={() => {
                navigate("/galeria");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Ver Nossos Projetos
            </button>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C]">
              Serviços de Drywall e Gesso em {city.name}
            </h2>
            <p className="text-lg text-[#555555] leading-relaxed">{city.content}</p>
            <p className="text-lg text-[#555555] leading-relaxed">{city.extra}</p>
          </motion.div>

          {/* Por que nos escolher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-8">
              Por que escolher a Gesso Grande Rocha em {city.name}?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {city.whyChoose.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm border border-[#EEE]"
                >
                  <CheckCircle
                    size={22}
                    className="text-[#E67E22] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[#333] leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Serviços com ícones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-8">
              Nossos Serviços em {city.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceIcons.map((service) => (
                <div
                  key={service.title}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-[#EEE] group hover:shadow-md transition"
                >
                  <div className="bg-[#FFF3E0] text-[#E67E22] p-2 rounded-lg group-hover:bg-[#E67E22] group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="font-medium text-[#1C1C1C] group-hover:text-[#E67E22] transition-colors">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Serviços Detalhados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-8">
              Conheça Nossos Serviços em Detalhes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {city.detailedServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-[#EEE] hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-[#1C1C1C] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bairros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-4">
              Bairros Atendidos em {city.name}
            </h2>
            <p className="text-[#555555] mb-6">
              Atendemos todos os bairros de {city.name} e região. Confira
              algumas das localidades onde já realizamos projetos:
            </p>
            <div className="flex flex-wrap gap-3">
              {city.neighborhoods.map((bairro) => (
                <span
                  key={bairro}
                  className="flex items-center gap-1 bg-[#FFF3E0] text-[#1C1C1C] px-4 py-2 rounded-full text-sm font-medium"
                >
                  <MapPin size={14} className="text-[#E67E22]" />
                  {bairro}
                </span>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-8">
              Perguntas Frequentes sobre Drywall em {city.name}
            </h2>
            <div className="space-y-3">
              {city.faq.map((item, i) => (
                <FAQItem
                  key={i}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </motion.div>

          {/* Outras cidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">
              Também atendemos
            </h2>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  to={`/gesso-${c.slug}`}
                  className="flex items-center gap-2 bg-white border border-[#EEE] hover:border-[#E67E22] text-[#1C1C1C] hover:text-[#E67E22] px-5 py-3 rounded-xl font-medium transition"
                >
                  <MapPin size={16} className="text-[#E67E22]" />
                  Gesso em {c.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1C1C1C] rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#F4B400] mb-4">
              Solicite seu orçamento gratuito em {city.name}
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato agora pelo WhatsApp e receba um atendimento
              personalizado. Visita técnica gratuita em {city.name} e região.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/5511977349133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#E67E22] hover:bg-[#cf6d1e] text-white px-8 py-4 rounded-full font-semibold shadow-lg transition text-lg"
              >
                <PhoneCall size={22} />
                Fale no WhatsApp
              </a>
              <button
                onClick={() => {
                  navigate("/galeria");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="border-2 border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white px-8 py-4 rounded-full font-semibold transition text-lg"
              >
                Ver Nossos Projetos
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
