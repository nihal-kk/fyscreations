"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = ["hero", "about", "services", "works", "contact"];  // "testimonials"

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? isDarkMode
            ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container mx-auto flex justify-between items-center transition-all duration-300"
        style={{ padding: scrollY > 50 ? "0.5rem 1.5rem" : "1rem 1.5rem" }}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 transition-all duration-300">
          <div
            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center font-bold text-white"
            style={{
              width: scrollY > 50 ? "40px" : "50px",
              height: scrollY > 50 ? "40px" : "50px",
              fontSize: scrollY > 50 ? "0.9rem" : "1rem",
            }}
          >
            VD
          </div>
          <span
            className="text-xl font-bold transition-all duration-300"
            style={{ fontSize: scrollY > 50 ? "1.2rem" : "1.5rem" }}
          >
            Venmenaden
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize transition-colors ${
                activeSection === section
                  ? "text-orange-500 font-semibold"
                  : isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {section === "hero" ? "Home" : section.replace("-", " ")}
            </button>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-600" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-purple-600" />}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden mt-2 py-4 rounded-lg flex flex-col items-start space-y-2 px-4 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize w-full text-left px-2 py-2 rounded transition-colors ${
                activeSection === section
                  ? "text-orange-500 font-semibold"
                  : isDarkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-200"
              }`}
            >
              {section === "hero" ? "Home" : section.replace("-", " ")}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
