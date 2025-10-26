import { motion } from "framer-motion";
import { Users, ShieldCheck, MapPin, Hammer } from "lucide-react";

export default function AboutSection() {
  const fadeIn = (direction = "up", delay = 0) => {
    const variants = {
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
    };
    return variants;
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-white text-gray-800 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/drywall-banner.jpg"
              alt="Equipe realizando instalação de drywall"
              className="w-full h-[320px] md:h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-lg tracking-wide drop-shadow-md">
            +10 anos de experiência
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Qualidade e Confiança em Cada Projeto
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Somos especialistas em drywall, forros e soluções em reformas para
            ambientes residenciais e corporativos. Nossa equipe une experiência,
            agilidade e acabamento impecável, garantindo resultados que
            valorizam cada detalhe do seu espaço.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
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
              {
                icon: <Users size={24} />,
                label: "Equipe especializada",
              },
              {
                icon: <Hammer size={24} />,
                label: "Acabamento profissional",
              },
              {
                icon: <MapPin size={24} />,
                label: "Atendimento em toda SP",
              },
            ].map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", i * 0.1 + 0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 group"
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <span className="font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
