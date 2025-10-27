import { motion } from "framer-motion";
import { Users, ShieldCheck, MapPin, Hammer } from "lucide-react";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay },
    },
  });

  const images = [
    "/images/team/equipe1.jpeg",
    "/images/team/equipe2.jpeg",
    "/images/team/equipe3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-[#FAFAFA] text-[#1C1C1C] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-xl h-[320px] md:h-[480px]"
        >
          <img
            key={currentImage}
            src={images[currentImage]}
            alt="Equipe realizando instalação de drywall"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-6 rounded-full transition-all duration-500 ${
                  index === currentImage ? "bg-[#E67E22]" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1C1C1C]">
            Qualidade e Confiança em Cada Projeto
          </h2>

          <p className="text-[#555555] mb-6 leading-relaxed">
            Somos especialistas em drywall, forros e soluções em reformas para
            ambientes residenciais e corporativos. Nossa equipe une experiência,
            agilidade e acabamento impecável, garantindo resultados que
            valorizam cada detalhe do seu espaço.
          </p>

          <p className="text-[#555555] mb-10 leading-relaxed">
            Atuamos com materiais certificados e seguimos padrões rigorosos de
            qualidade para oferecer segurança e durabilidade. Do planejamento à
            execução, nosso compromisso é entregar um resultado final que supera
            expectativas.
          </p>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <ShieldCheck size={24} />,
                label: "Materiais certificados",
              },
              { icon: <Users size={24} />, label: "Equipe especializada" },
              { icon: <Hammer size={24} />, label: "Acabamento profissional" },
              { icon: <MapPin size={24} />, label: "Atendimento em toda SP" },
            ].map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", i * 0.1 + 0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 group"
              >
                <div className="bg-[#FFF3E0] text-[#E67E22] p-3 rounded-xl group-hover:bg-[#E67E22] group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <span className="font-medium group-hover:text-[#E67E22] transition-colors">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
