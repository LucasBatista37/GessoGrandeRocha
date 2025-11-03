import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const HEADER_HEIGHT = 80;

  const sections = useMemo(
    () => ["home", "about", "services", "gallery", "testimonials", "contact"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + HEADER_HEIGHT + 1; 

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (y >= top && y < bottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();   
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const toggleMenu = () => setIsOpen((v) => !v);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FAFAFA]/90 backdrop-blur-md z-50 transition-all duration-300 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/images/aldemirgessologo.webp"
            alt="Logo Aldemir Gesso"
            className="h-11 w-auto object-contain"
          />
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-[#333333]">
          {sections.map((id) => {
            const labelMap = {
              home: "Início",
              about: "Sobre",
              services: "Serviços",
              gallery: "Galeria",
              testimonials: "Depoimentos",
              contact: "Contato",
            };
            const label = labelMap[id] ?? id;

            return (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative transition ${
                    activeSection === id
                      ? "text-[#E67E22] font-semibold"
                      : "hover:text-[#E67E22]"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E67E22] rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <a
          href="https://wa.me/5511977349133"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 rounded-full font-medium transition shadow-lg bg-[#E67E22] text-white hover:bg-[#cf6d1e]"
        >
          Fale no WhatsApp
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden text-[#1C1C1C] transition-colors"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#FAFAFA] border-t border-[#DDD] shadow-inner transition-all">
          <ul className="flex flex-col items-center py-4 gap-4 text-[#333333] font-medium">
            {sections.map((id) => {
              const labelMap = {
                home: "Início",
                about: "Sobre",
                services: "Serviços",
                gallery: "Galeria",
                testimonials: "Depoimentos",
                contact: "Contato",
              };
              const label = labelMap[id] ?? id;

              return (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-[#E67E22] transition"
                  >
                    {label}
                  </button>
                </li>
              );
            })}
            <li>
              <a
                href="https://wa.me/5511977349133"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E67E22] text-white px-5 py-2 rounded-full hover:bg-[#cf6d1e] transition"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
