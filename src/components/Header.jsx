import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (name) => {
    setActiveLink(name);
    closeMenu();
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 bg-[#F4F7FC] shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="text-3xl font-bold tracking-normal"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Ankit
          <span className="inline-block w-[5px] h-[5px] bg-blue-500 rounded-full ml-0.5"></span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.name)}
              className={`text-sm font-medium transition-colors ${
                activeLink === link.name
                  ? "text-blue-500"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#contact"
            onClick={() => handleNavClick("Contact")}
            className="hidden md:inline-flex px-6 py-2 bg-[#2563EB] text-white rounded-full text-lg font-semibold hover:bg-blue-800 transition-all"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-gray-700 text-2xl"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col items-center px-6 py-5 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`text-sm font-medium transition-colors ${
                  activeLink === link.name
                    ? "text-blue-500"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => handleNavClick("Contact")}
              className="px-6 py-2 bg-[#2563EB] text-white rounded-full text-sm font-semibold hover:bg-blue-800 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

