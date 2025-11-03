import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../src/components/Footer";

export default function GaleriaPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      image: "/images/gallery/imagem1.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem2.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem3.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem4.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem5.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem6.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem7.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem8.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem9.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem10.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem11.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem12.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem13.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem14.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem15.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem16.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem17.webp",
      title: "",
    },
    {
      image: "/images/gallery/imagem18.webp",
      title: "",
    },
  ];

  return (
    <>
      <section className="relative py-24 bg-[#FAFAFA] text-[#1C1C1C] overflow-hidden min-h-screen">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-start mb-6">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 bg-[#E67E22] hover:bg-[#cf6d1e] text-white px-5 py-2 rounded-full font-semibold shadow-lg transition"
            >
              <ArrowLeft size={20} />
              Voltar ao Início
            </button>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]"
          >
            Galeria Completa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[#555555] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Explore todos os projetos realizados pela nossa equipe. Cada imagem
            representa a dedicação, o acabamento e a qualidade que entregamos em
            cada obra.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedImage(project)}
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
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="absolute top-6 right-6 text-white hover:text-[#E67E22] transition"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>

              <motion.div
                className="w-full h-full flex items-center justify-center bg-black"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              {selectedImage.title && (
                <p className="absolute bottom-10 text-white/90 text-lg font-medium text-center px-4">
                  {selectedImage.title}
                </p>
              )}

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#E67E22] hover:bg-[#cf6d1e] text-white px-4 py-2 rounded-full font-semibold shadow-lg transition"
              >
                ⬅️ Voltar
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <Footer />
    </>
  );
}
