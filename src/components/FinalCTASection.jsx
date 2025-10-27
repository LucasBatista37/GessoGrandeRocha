import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Send } from "lucide-react";

export default function FinalCTASection() {
  const [status, setStatus] = useState("idle");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mzzkzoga", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#1C1C1C] text-[#FAFAFA] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* LADO ESQUERDO */}
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F4B400]">
            Pronto para transformar seu ambiente?
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
            Solicite um orçamento gratuito e descubra como o drywall pode
            valorizar o seu espaço com rapidez, limpeza e acabamento
            profissional.
          </p>

          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/5511977349133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#E67E22] hover:bg-[#cf6d1e] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
            >
              <PhoneCall size={22} />
              Fale no WhatsApp
            </a>

            <a
              href="#services"
              className="border border-[#E67E22] text-[#E67E22] hover:bg-[#E67E22] hover:text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Ver Nossos Serviços
            </a>
          </div>
        </motion.div>

        {/* FORMULÁRIO FUNCIONAL */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#2A2A2A] rounded-2xl p-8 shadow-xl w-full max-w-lg mx-auto md:mx-0"
        >
          <h3 className="text-xl font-semibold mb-6 text-[#F4B400] text-center md:text-left">
            Faça seu orçamento gratuito
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Nome */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Seu nome completo"
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            {/* Telefone */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(11) 99999-9999"
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="seuemail@exemplo.com"
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-[#E67E22]"
              />
            </div>

            {/* Mensagem */}
            <div className="flex flex-col sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 mb-1"
              >
                Descreva seu projeto
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Ex: instalação de drywall em sala comercial..."
                className="px-4 py-2 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-[#E67E22] resize-none"
              ></textarea>
            </div>
          </div>

          {/* Botão e status */}
          <div className="flex justify-center md:justify-start mt-8">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 bg-[#E67E22] hover:bg-[#cf6d1e] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition w-full sm:w-auto"
            >
              <Send size={20} />
              {status === "sending"
                ? "Enviando..."
                : status === "success"
                ? "Enviado ✅"
                : "Enviar Orçamento"}
            </button>
          </div>

          {/* Mensagens de feedback */}
          {status === "success" && (
            <p className="text-green-400 text-sm mt-4 text-center md:text-left">
              ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-4 text-center md:text-left">
              ❌ Erro ao enviar. Tente novamente mais tarde.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
