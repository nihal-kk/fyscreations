"use client"; // Required for React hooks if needed

import Image from "next/image";

// Example services with icons (replace with your own images or SVGs)
const services = [
  {
    title: "Logo Design",
    description:
      "Creating unique and memorable logos that represent your brand identity.",
    icon: "/icons/logo.png",
  },
  {
    title: "Poster Design",
    description:
      "Designing visually striking posters for events, promotions, and campaigns.",
    icon: "/icons/poster.png",
  },
  {
    title: "Typography",
    description:
      "Crafting beautiful text layouts that enhance readability and aesthetics.",
    icon: "/icons/typography.png",
  },
  {
    title: "Calligraphy",
    description:
      "Custom hand-lettered designs for invitations, logos, and artworks.",
    icon: "/icons/caligraphy.svg",
  },
  {
    title: "Digital Design",
    description:
      "Designing graphics for websites, social media, apps, and digital campaigns.",
    icon: "/icons/digital.png",
  },
];

export default function Service({ isDarkMode }) {
  return (
    <section
      id="services"
      className={`py-20 ${isDarkMode ? "bg-gray-900/50" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`p-8 rounded-3xl ${
                isDarkMode
                  ? "bg-gray-800 text-gray-200"
                  : "bg-white text-gray-800"
              } transform transition-all shadow-2xl duration-300 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-105 cursor-pointer flex flex-col items-center text-center`}
            >
              {/* Icon with circular gradient background */}
              {service.icon && (
                <div className="h-20 mb-3 flex justify-center items-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80} // Optional: set width
                    height={80} // Optional: set height
                    className="object-contain"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
