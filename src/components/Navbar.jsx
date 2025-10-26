import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      const sections = ["home", "about", "services", "gallery", "contact"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (y >= offset && y < offset + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md backdrop-blur-md z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-md bg-blue-600">
            D
          </div>
          <span className="text-xl font-bold text-gray-800">
            Drywall & Construções
          </span>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {[
            { id: "home", label: "Início" },
            { id: "about", label: "Sobre" },
            { id: "services", label: "Serviços" },
            { id: "gallery", label: "Galeria" },
            { id: "contact", label: "Contato" },
          ].map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`relative hover:text-blue-600 transition ${
                  activeSection === id ? "text-blue-600" : ""
                }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 rounded-full font-medium transition shadow-lg bg-green-600 text-white hover:bg-green-700"
        >
          Fale no WhatsApp
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-inner transition-all">
          <ul className="flex flex-col items-center py-4 gap-4 text-gray-700 font-medium">
            {[
              { id: "home", label: "Início" },
              { id: "about", label: "Sobre" },
              { id: "services", label: "Serviços" },
              { id: "gallery", label: "Galeria" },
              { id: "contact", label: "Contato" },
            ].map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="hover:text-blue-600 transition"
                >
                  {label}
                </button>
              </li>
            ))}

            <li>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
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
