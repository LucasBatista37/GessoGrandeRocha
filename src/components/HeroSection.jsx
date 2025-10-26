import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[90vh] bg-[url('/images/drywall-banner.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight drop-shadow-lg"
        >
          Transforme Seu Espaço com Drywall Profissional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed"
        >
          Instalações rápidas, limpas e com acabamento impecável.
          <br />
          Soluções sob medida para residências e empresas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg"
          >
            <Phone size={20} />
            Fale no WhatsApp
          </a>

          <a
            href="#services"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition border border-white/30"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>

    </section>
  );
}
