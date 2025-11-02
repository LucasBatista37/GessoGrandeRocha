import { MapPin, Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1C1C1C] text-[#CCCCCC] pt-16 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Gesso Grande Rocha
            </h3>
            <p className="text-[#AAAAAA] leading-relaxed mb-6">
              Especialistas em drywall, forros e reformas residenciais e
              comerciais. Qualidade, agilidade e acabamento impecável em cada
              projeto.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/aldemirgrande?igsh=eHF4NXd6Y3Y3bmdj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#E67E22] text-white p-3 rounded-full transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/AldemirGesso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2A2A2A] hover:bg-[#E67E22] text-white p-3 rounded-full transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-[#AAAAAA]">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#E67E22] mt-1" size={18} />
                <span>
                  R. Monsenhor Seckler, 771 - Casa 2
                  <br />
                  Jardim Praia Grande, Mongaguá - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#E67E22]" size={18} />
                <a
                  href="https://wa.me/5511977349133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  (11) 97734-9133
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#E67E22]" size={18} />
                <a
                  href="mailto:contato@drywallconstrucoes.com"
                  className="hover:text-white transition"
                >
                  gessogranderocha@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Localização
            </h4>
            <div className="rounded-xl overflow-hidden shadow-lg border border-[#333333]">
              <iframe
                title="Mapa de Localização - Gesso Grande Rocha"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.900710025616!2d-46.66356818458553!3d-24.10960758428685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce49f64d6205f9%3A0x64af1baff9d0527c!2sGesso%20Grande%20Rocha!5e0!3m2!1spt-BR!2sbr!4v1730000000000!5m2!1spt-BR!2sbr"
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

        <div className="border-t border-[#333333] my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-[#888888]">
          <p>© 2025 Gesso Grande Rocha — Todos os direitos reservados</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#about" className="hover:text-[#E67E22] transition">
              Sobre
            </a>
            <a href="#services" className="hover:text-[#E67E22] transition">
              Serviços
            </a>
            <a href="#contact" className="hover:text-[#E67E22] transition">
              Contato
            </a>
            <a href="#privacy" className="hover:text-[#E67E22] transition">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
