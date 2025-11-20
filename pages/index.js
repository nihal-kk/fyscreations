import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import SliderR from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>FYS Creations – Creative Agency in Kerala</title>
        <meta
          name="description"
          content="FYS Creations is a premium creative agency specializing in branding, design, and digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Loader */}
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0F1115] text-[#E9ECF2]">
          <img
            src="/logo.png"
            alt="FYS Creations Logo"
            className="w-20 h-20 animate-pulse"
          />
          <span className="mt-4 text-xl font-semibold text-[#D4AF37]">
            Loading...
          </span>
        </div>
      ) : (
        <div
          className={
            isDarkMode
              ? "bg-[#0F1115] text-[#E9ECF2] min-h-screen transition-all duration-300"
              : "bg-[#F7F7F7] text-[#111111] min-h-screen transition-all duration-300"
          }
        >
          {/* Header */}
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          {/* Hero */}
          <section id="hero">
            <Hero isDarkMode={isDarkMode} />
          </section>

          {/* About */}
          <section id="about" className="py-10">
            <About isDarkMode={isDarkMode} />
          </section>

          {/* Services */}
          <section id="services" className="py-10">
            <Service isDarkMode={isDarkMode} />
          </section>

          {/* Sliders */}
          <section id="works" className="space-y-6 py-10">
            <SliderR isDarkMode={isDarkMode} />
          </section>

          {/* Contact */}
          <section id="contact" className="py-20">
            <Contact isDarkMode={isDarkMode} />
          </section>

          {/* Footer */}
          <Footer isDarkMode={isDarkMode} />
        </div>
      )}
    </>
  );
}
