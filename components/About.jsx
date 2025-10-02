"use client"; // Required for React hooks if needed

import Image from "next/image";

export default function About({ isDarkMode }) {
  return (
    <section
      id="about"
      className={`py-30 ${isDarkMode ? "bg-gray-800/50" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="w-full max-w-sm aspect-square overflow-hidden rounded-2xl shadow-lg mx-auto">
              <Image
                src="/logo.jpg" // ✅ Must be inside public folder
                alt="About section"
                width={400}    // Optional: set width
                height={400}   // Optional: set height
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p
              className={`mb-4 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Venmanaden is a creative platform dedicated to the art of
              typography. Here, letters aren’t just letters; they tell stories,
              evoke emotions, and bring words to life. From custom fonts and
              sleek text styles to dynamic motion typography, ordinary text
              transforms into extraordinary visual experiences. Every project is
              an exploration of creativity, balance, and expression, blending
              modern design trends with timeless typographic principles.
            </p>
            <p
              className={`mb-6 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              The platform serves as a source of inspiration for designers,
              creators, and brands, encouraging experimentation with type,
              discovering new styles, and making every word visually captivating
              and unforgettable. Venmanaden is where ideas meet form, and every
              letter leaves an impression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
