"use client";

import Image from "next/image";

export default function Hero({ isDarkMode = false }) {
  return (
    <section
      className={`relative w-full min-h-screen flex items-center overflow-hidden ${
        isDarkMode ? "bg-[#0F0F0F]" : "bg-[#F7F7F7]"
      }`}
    >

      {/* Background Image (Dark Mode) */}
      {isDarkMode && (
        <div className="absolute inset-0">
          <Image
            src="https://wallpapers.com/images/hd/2440x1440-desktop-pc-background-wkvl5uwxyeuanzts.jpg"   // <--- Dark image
            alt="Dark Background"
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>
      )}

      {/* Background Image (Light Mode) */}
      {!isDarkMode && (
        <div className="absolute inset-0">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gnd8yllY_1lymFa-Rfh7T5l8zEqgSkPKeQvORVZ2DkMM43sh2lRO8kViZVvwsEavCGU&usqp=CAU"  // <--- Light image
            alt="Light Background"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          isDarkMode
            ? "bg-gradient-to-b from-black/60 via-black/70 to-black/90"
            : "bg-gradient-to-b from-white/70 via-white/80 to-white/90"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 text-center">

        {/* Tag */}
        <div
          className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 ${
            isDarkMode
              ? "bg-orange-600/20 text-orange-400"
              : "bg-orange-500/15 text-orange-600"
          }`}
        >
          Premium Creative Agency
        </div>

        {/* Title */}
        <h1
          className={`text-4xl md:text-6xl font-extrabold leading-tight mb-6 ${
            isDarkMode ? "text-white" : "text-[#111111]"
          }`}
        >
          Transform Your Vision <br />
          <span className="text-orange-500">Into Reality</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Professional poster design, video editing, logos, and more.
          Premium quality, lightning-fast delivery.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
  onClick={() => {
    document.getElementById("wb").scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-xl transition-all duration-300"

>
  Start Your Project →
</button>


          <button
  onClick={() => {
    const section = document.getElementById("works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className={`px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-all duration-300 ${
    isDarkMode
      ? "bg-white/10 hover:bg-white/20 border border-white/20 text-gray-200"
      : "bg-black/5 hover:bg-black/10 border border-black/20 text-gray-900"
  }`}
>
  View Portfolio
</button>

        </div>
      </div>
    </section>
  );
}
