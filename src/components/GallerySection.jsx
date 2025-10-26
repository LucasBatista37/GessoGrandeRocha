import { motion } from "framer-motion";

export default function GallerySection() {
  const projects = [
    {
      image: "/images/gallery1.jpg",
      title: "Sala Comercial — Santo André/SP",
    },
    {
      image: "/images/gallery2.jpg",
      title: "Apartamento Residencial — São Vicente/SP",
    },
    {
      image: "/images/gallery3.jpg",
      title: "Escritório Corporativo — Campinas/SP",
    },
    {
      image: "/images/gallery4.jpg",
      title: "Loja Reformada — São Paulo/SP",
    },
    {
      image: "/images/gallery5.jpg",
      title: "Forro e Iluminação — Praia Grande/SP",
    },
    {
      image: "/images/gallery6.jpg",
      title: "Revestimento Decorativo — Guarujá/SP",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 bg-white text-gray-800 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        >
          Nosso Portfólio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Confira alguns dos nossos projetos realizados — obras entregues com
          excelência, acabamento impecável e satisfação garantida.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-medium px-4">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
