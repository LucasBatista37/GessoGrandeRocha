import { motion } from "framer-motion";
import { PhoneCall, Send } from "lucide-react";

export default function FinalCTASection() {
  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    },
  });

  return (
    <section
      id="contact"
      className="relative py-24 bg-blue-600 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu ambiente?
          </h2>

          <p className="text-blue-100 text-lg mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
            Solicite um orçamento gratuito e descubra como o drywall pode
            valorizar o seu espaço com rapidez, limpeza e acabamento
            profissional.
          </p>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
            >
              <PhoneCall size={22} />
              Fale no WhatsApp
            </a>

            <a
              href="#services"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold border border-white/30 transition"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </motion.div>

        <motion.form
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl w-full max-w-lg mx-auto md:mx-0"
        >
          <h3 className="text-xl font-semibold mb-6 text-white text-center md:text-left">
            Faça seu orçamento gratuito
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-blue-100 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Seu nome completo"
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-blue-100 mb-1"
              >
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(11) 99999-9999"
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-blue-100 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="seuemail@exemplo.com"
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-blue-100 mb-1"
              >
                Descreva seu projeto
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Ex: instalação de drywall em sala comercial..."
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-green-400 resize-none"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center md:justify-start mt-8">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition w-full sm:w-auto"
            >
              <Send size={20} />
              Enviar Orçamento
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
