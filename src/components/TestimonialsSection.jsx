import { useEffect } from "react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gray-50 text-gray-800 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
        >
          O Que Nossos Clientes Dizem
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Veja as avaliações reais de quem já confiou na{" "}
          <strong>Drywall & Construções</strong>.
        </motion.p>

        <div className="flex justify-center">
          <div
            className="elfsight-app-222e3203-18d3-4204-817a-b3fec014be48 w-full max-w-4xl"
            data-elfsight-app-lazy
          ></div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mt-12 italic"
        >
          As avaliações abaixo são importadas automaticamente do Google Maps,
          atualizadas em tempo real.
        </motion.p>
      </div>
    </section>
  );
}
