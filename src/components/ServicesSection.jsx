import { motion } from "framer-motion";
import { Layout, Layers, Ruler, Home, Building2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Montagem de Paredes em Drywall",
      description:
        "Divisórias rápidas e limpas, perfeitas para reformas e ambientes corporativos ou residenciais.",
    },
    {
      icon: <Layers size={32} />,
      title: "Forros e Sancas",
      description:
        "Soluções modernas para iluminação e acabamento. Ideal para valorizar salas, quartos e escritórios.",
    },
    {
      icon: <Ruler size={32} />,
      title: "Revestimentos Decorativos",
      description:
        "Painéis em drywall e gesso 3D que trazem sofisticação e estilo aos ambientes.",
    },
    {
      icon: <Building2 size={32} />,
      title: "Divisórias Corporativas",
      description:
        "Instalação de divisórias e isolamento acústico para empresas, com design profissional e funcional.",
    },
    {
      icon: <Home size={32} />,
      title: "Reformas Residenciais e Comerciais",
      description:
        "Transforme seu imóvel com acabamento de alto padrão, sem sujeira e com prazos ágeis.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-[#FAFAFA] text-[#1C1C1C] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]"
        >
          Nossos Serviços
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#555555] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Oferecemos soluções completas em drywall, forros e reformas, unindo
          agilidade, qualidade e acabamento impecável em cada projeto.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden p-8 border border-[#EEE] group"
            >
              <div className="flex justify-center items-center mb-6 p-3 rounded-xl bg-[#FFF3E0] text-[#E67E22] group-hover:bg-[#E67E22] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1C1C1C] group-hover:text-[#E67E22] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#555555] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
