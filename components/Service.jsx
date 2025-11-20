"use client";

import Image from "next/image";

const services = [
  {
    title: "Logo Design",
    description:
      "Creating modern, professional, and memorable logos that elevate your brand identity.",
    icon: "/icons/logood.png",
  },
  {
    title: "Poster Design",
    description:
      "High-impact posters for events, promotions, ads, and digital campaigns.",
    icon: "/icons/poster.png",
  },
  {
    title: "ID Card Design",
    description:
      "Professional and clean ID card designs tailored for businesses, schools, and organizations.",
    icon: "/icons/id.png",
  },
  {
    title: "Invitation Card Design",
    description:
      "Elegant and modern invitation card designs for weddings, events, birthdays, and celebrations.",
    icon: "/icons/Invitation.png",
  },
  {
    title: "Digital Design",
    description:
      "Creative content for websites, apps, social media, ads, and brand promotions.",
    icon: "/icons/digital.png",
  },
  {
    title: "Video Editing",
    description:
      "Professional video editing for ads, reels, promos, intros, and brand storytelling.",
    icon: "/icons/video.png",
  },
];


export default function Service({ isDarkMode }) {
  return (
    <section
      id="services"
      className={`py-24 transition-all duration-300 ${
        isDarkMode ? "bg-[#0F0F0F]" : "bg-[#FFFFFF]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className={`text-sm px-4 py-1 rounded-full font-medium ${
              isDarkMode
                ? "bg-orange-600/20 text-orange-400"
                : "bg-orange-500/15 text-orange-600"
            }`}
          >
            What We Offer
          </span>

          <h2
            className={`text-4xl md:text-5xl font-extrabold mt-4 ${
              isDarkMode ? "text-white" : "text-[#111111]"
            }`}
          >
            Our Creative Services
          </h2>

          <p
            className={`max-w-2xl mx-auto mt-4 text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We offer premium design services crafted to make your brand stand out.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group p-8 rounded-2xl border backdrop-blur-md shadow-lg transition-all cursor-pointer hover:-translate-y-2 ${
                isDarkMode
                  ? "bg-white/5 border-white/10 hover:bg-white/10"
                  : "bg-black/5 border-black/10 hover:bg-black/10"
              }`}
            >
              {/* Icon */}
              {service.icon && (
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-orange-500/10">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={55}
                      height={55}
                      className="object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Title */}
              <h3
                className={`text-xl font-semibold text-center mb-3 ${
                  isDarkMode ? "text-white" : "text-[#111111]"
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-center text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
