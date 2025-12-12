"use client";
import Image from "next/image";

export default function Works({ isDarkMode }) {
  // ------------------------ LOGOS ------------------------
  const logoImages = [
    "/photos/l1.jpg",
    "/photos/l2.jpg",
    "/photos/l5.jpg",
    "/photos/l6.jpg",
    
  ];
  
  // ------------------------ POSTERS ------------------------
  const posterImages = [
    "/photos/p1.jpg",
    "/photos/p2.jpg",
    "/photos/p3.jpg",
    "/photos/p4.jpg",
    "/photos/p5.jpg",
    "/photos/p6.jpg",
    "/photos/p7.jpg",
    "/photos/p8.jpg",
  
  ];

  // ------------------------ VIDEOS ------------------------
  const videoFiles = [
    "/vedios/v1.mp4",
    "/vedios/v2.mp4",
    "/vedios/v3.mp4",
    "/vedios/v4.mp4",
    "/vedios/v5.mp4",
    "/vedios/v6.mp4",
    "/vedios/v7.mp4",
    "/vedios/v8.mp4",

  ];

  // ------------------------ youtube VIDEOS ------------------------

   const youtubeFiles = [
    "https://www.youtube.com/embed/76j6nb0HNs8",
    "https://www.youtube.com/embed/zLeyprw2vs0",
    "https://www.youtube.com/embed/6RzO9t0PFEs",
    "https://www.youtube.com/embed/uwl2qfwaqtg",
    "https://www.youtube.com/embed/OrJmbWX0Jnk",
    "https://www.youtube.com/embed/vsds5xjRJ3E",
 
  ];

  return (
    <section
      id="works"
      className={`py-24 transition-all duration-300 ${
        isDarkMode ? "bg-[#0F0F0F]":   "bg-white" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------------- LOGO SECTION ---------------------- */}
        <div className="mb-20">
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-6 ${
              isDarkMode ?   "text-white":"text-[#111111]"
            }`}
          >
            Logos
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {logoImages.map((src, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-black/5 border border-black/10"
                    : "bg-white/10 border border-white/10"
                }`}
              >
                <Image
                  src={src}
                  alt="Logo Design"
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------- POSTER SECTION ---------------------- */}
        <div className="mb-20">
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-6 ${
              isDarkMode ? "text-white" : "text-[#111111]"
            }`}
          >
            Posters
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {posterImages.map((src, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-black/5 border border-black/10"
                    : "bg-white/10 border border-white/10"
                }`}
              >
                <Image
                  src={src}
                  alt="Poster Design"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

      {/* ---------------------- VIDEO SECTION ---------------------- */}
<div className="mb-10">
  <h2
    className={`text-3xl md:text-4xl font-extrabold mb-6 ${
      isDarkMode ? "text-white":" text-[#111111]"
    }`}
  >
    Videos
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
    {videoFiles.map((src, index) => (
      <div
        key={index}
        className={`rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all hover:-translate-y-2 ${
          isDarkMode
            ? "bg-black/5 border border-black/10"
            : "bg-white/10 border border-white/10"
        }`}
      >
        <video
          src={src}
          preload="metadata"
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          
          // Hover play
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.currentTime = 0;
          }}

          // --- Scroll Auto Pause ---
          ref={(video) => {
            if (!video) return;

            const observer = new IntersectionObserver(
              ([entry]) => {
                if (!entry.isIntersecting) {
                  video.pause();
                }
              },
              { threshold: 0.3 } // 30% visible required
            );

            observer.observe(video);
          }}
        />
      </div>
    ))}
  </div>
  </div>
  
     <div className="mt-10">
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-6 ${
              isDarkMode ? "text-white" : "text-[#111111]"
            }`}
          >
            Lip Set (Lip-Sync) Videos
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {youtubeFiles.map((src, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg transition-all hover:-translate-y-2 ${
                  isDarkMode
                    ? "bg-black/5 border border-black/10"
                    : "bg-white/10 border border-white/10"
                }`}
              >
                <iframe
                  src={src}
                  className="w-full h-60"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

</div>



    </section>
  );
}
