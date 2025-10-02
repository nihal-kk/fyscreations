import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import SliderR from "@/components/Slider-to-l";
import SliderL from "@/components/Sliderr";
import SliderrR from "@/components/SliderrR";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake loading effect for 2 sec
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Venmenaden | Best typography and graphic designer in Kerala</title>
        <meta
          name="description"
          content="Venmenaden – Best typography and graphic designer in Kerala. Creative logos, posters, typography, and digital designs."
        />
        <meta
          name="keywords"
          content="Typography, Graphic Design, Logo Design, Poster Design, Calligraphy, Digital Design, Kerala Designer, Venmenaden"
        />
        <meta name="author" content="Venmenaden" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      {/* Loader */}
     {loading ? (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    {/* Logo / Icon */}
    <img 
      src="/photos/pic_1.png" 
      alt="Venmenaden Logo" 
      className="w-20 h-20 animate-pulse"
    />
    <span className="mt-4 text-xl font-semibold">Loading...</span>
  </div>
) : (
        <div
          className={
            isDarkMode
              ? "bg-gray-900 text-white min-h-screen"
              : "bg-white text-black min-h-screen"
          }
        >
          {/* Header */}
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          {/* Hero Section */}
          <section id="hero">
            <Hero isDarkMode={isDarkMode} />
          </section>

          {/* About Section */}
          <section id="about">
            <About isDarkMode={isDarkMode} />
          </section>

          {/* Services Section */}
          <section id="services">
            <Service isDarkMode={isDarkMode} />
          </section>

          {/* Works / Sliders Section */}
          <section id="works" className="space-y-6">
            <SliderR isDarkMode={isDarkMode} />
            <SliderL isDarkMode={isDarkMode} />
            <SliderrR isDarkMode={isDarkMode} />
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 text-center">
            <Contact isDarkMode={isDarkMode} />
          </section>

          <Footer isDarkMode={isDarkMode} />
        </div>
      )}
    </>
  );
}
