"use client"; // Required for useState/useEffect if needed

import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero({ isDarkMode = false }) {
  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/best.mp4"   // ✅ Video must be in public folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Gradient Layer */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20"
              : "bg-gradient-to-br from-purple-100 via-white to-pink-100"
          }`}
        ></div>

        {/* Floating Blurs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-orange-400 to-red-800 bg-clip-text text-transparent">
              Venmenaden
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-8 animate-fade-in ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Creative Typography Designer
          </p>

          <p
            className={`text-lg mb-12 max-w-2xl mx-auto animate-fade-in ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            Best Typography designer in Kerala
          </p>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Contact Me
          </button>

          {/* Scroll Down Arrow */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown
              className={`w-8 h-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
