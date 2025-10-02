import { useState } from "react";
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

        {/* Testimonials Section
        <section id="testimonials" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-gray-400">Coming soon...</p>
        </section> */}

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center">
         <Contact isDarkMode={isDarkMode} />
        </section>

        <Footer isDarkMode={isDarkMode}/>
      </div>
    </>
  );
}
