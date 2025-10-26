import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-600 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Drywall & Construções
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Especialistas em drywall, forros e reformas residenciais e
              comerciais. Qualidade, agilidade e acabamento impecável em cada
              projeto.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={18} />
                <span>
                  Rua das Construções, 1234<br />
                  São Vicente - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500" size={18} />
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500" size={18} />
                <a
                  href="mailto:contato@drywallconstrucoes.com"
                  className="hover:text-white transition"
                >
                  contato@drywallconstrucoes.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Localização
            </h4>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
              <iframe
                title="Mapa de Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.007241167617!2d-46.653458!3d-23.565734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c97f3a7b75%3A0x1e26d238a30d9c67!2sPaulista%20Avenue!5e0!3m2!1sen!2sbr!4v1698244800000!5m2!1sen!2sbr"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2025 Drywall & Construções — Todos os direitos reservados</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#about" className="hover:text-white transition">
              Sobre
            </a>
            <a href="#services" className="hover:text-white transition">
              Serviços
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contato
            </a>
            <a href="#privacy" className="hover:text-white transition">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
