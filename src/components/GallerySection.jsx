import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function GallerySection() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideRef = useRef(null);

  const projects = [
    {
      image: "/images/gallery/imagem1.jpeg",
      title: "Sala Comercial — Santo André/SP",
    },
    {
      image: "/images/gallery/imagem3.jpeg",
      title: "Apartamento Residencial — São Vicente/SP",
    },
    {
      image: "/images/gallery/imagem4.jpeg",
      title: "Escritório Corporativo — Campinas/SP",
    },
    {
      image: "/images/gallery/imagem5.jpeg",
      title: "Loja Reformada — São Paulo/SP",
    },
    {
      image: "/images/gallery/imagem6.jpeg",
      title: "Forro e Iluminação — Praia Grande/SP",
    },
    {
      image: "/images/gallery/imagem9.jpeg",
      title: "Revestimento Decorativo — Guarujá/SP",
    },
  ];

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(autoSlideRef.current);
  }, [projects.length]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="gallery"
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
          Nosso Portfólio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#555555] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Confira alguns dos nossos projetos realizados — obras entregues com
          excelência, acabamento impecável e satisfação garantida.
        </motion.p>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="absolute inset-0 bg-[#E67E22]/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-medium px-4 text-center">
                  {project.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden relative w-full overflow-hidden rounded-2xl shadow-lg">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="min-w-full relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-[#E67E22]/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <p className="text-white text-lg font-medium px-4 text-center">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#1C1C1C]/60 hover:bg-[#E67E22] text-white p-2 rounded-full transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-[#1C1C1C]/60 hover:bg-[#E67E22] text-white p-2 rounded-full transition"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition ${
                  currentIndex === index ? "bg-[#E67E22]" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/galeria")}
            className="bg-[#E67E22] hover:bg-[#cf6d1e] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Ver mais projetos
          </motion.button>
        </div>
      </div>
    </section>
  );
}
