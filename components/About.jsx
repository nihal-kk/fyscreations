"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About({ isDarkMode }) {
  return (
    <section
      id="about"
      className={`py-24 ${
        isDarkMode ? "bg-[#0F0F0F]" : "bg-[#FFFFFF]"
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Image Card */}
        <div className="relative">
          <div className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <Image
              src="/logo.png" // Replace with your image
              alt="About FYS Creations"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          {/* Small Orange Tag */}
          <div className="inline-block mb-4 bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-sm font-medium">
            About Us
          </div>

          {/* Heading */}
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${
              isDarkMode ? "text-white" : "text-[#111111]"
            }`}
          >
            Crafting Designs  
            <span className="text-orange-500"> That Inspire.</span>   
          </h2>

          {/* Paragraph */}
          <p
            className={`text-lg mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            FYS Creations is a modern creative agency specializing in
            professional poster design, branding, video editing, logos, and
            digital content. We transform ideas into premium visuals designed
            to elevate your brand.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4 mb-8">
            {[
              "Premium designs with attention to detail.",
              "Fast delivery without compromising quality.",
              "Creative ideas crafted for business growth.",
              "Affordable pricing for all types of clients."
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500" />
                <p
                  className={`text-base ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
