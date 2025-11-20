"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = ["hero", "about", "services", "works", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (target) => {
    const section = document.getElementById(target);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? isDarkMode
            ? "bg-[#0F1115]/90 backdrop-blur-lg shadow-lg"
            : "bg-[#F7F7F7]/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`container mx-auto flex justify-between items-center transition-all duration-300 ${
          scrollY > 50 ? "py-3 px-4 md:px-10" : "py-5 px-4 md:px-10"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 transition-all">
          <div
            className="overflow-hidden rounded-xl bg-black/20 shadow-md"
            style={{
              width: scrollY > 50 ? "42px" : "52px",
              height: scrollY > 50 ? "42px" : "52px",
              transition: "width 0.25s ease, height 0.25s ease",
            }}
          >
            <img
              src="/logo.png"
              alt="FYS Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <span
            className={`font-bold text-orange-500 transition-all duration-300 ${
              scrollY > 50 ? "text-xl" : "text-2xl"
            }`}
          >
            FYS Creations
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors text-sm font-medium ${
                activeSection === section
                  ? "text-orange-500"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {section === "hero" ? "Home" : section}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg shadow transition-all ${
              isDarkMode
                ? "bg-[#1A1F2B] hover:bg-[#262E3D]"
                : "bg-[#EDEDED] hover:bg-[#DBDBDB]"
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg shadow transition-all ${
              isDarkMode
                ? "bg-[#1A1F2B] hover:bg-[#262E3D]"
                : "bg-[#EDEDED] hover:bg-[#DBDBDB]"
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className={`md:hidden px-4 py-4 rounded-b-xl transition-all ${
            isDarkMode ? "bg-[#111e3c9d] text-white" : "bg-[#F0F0F0] text-black"
          }`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`block w-full text-left py-3 rounded text-lg transition ${
                activeSection === section
                  ? "text-orange-500 font-semibold"
                  : isDarkMode
                  ? "hover:bg-[#242A38]"
                  : "hover:bg-gray-300"
              }`}
            >
              {section === "hero" ? "Home" : section}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
