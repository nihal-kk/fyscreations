"use client";
import React, { useState } from "react";

export default function Contact({ isDarkMode }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (e) => {
    const { name, value } = e.target;
    setData((p) => ({ ...p, [name]: value }));
  };

  const whatsapp = (e) => {
    e.preventDefault();
    const text = `Name: ${data.name}%0AEmail: ${data.email}%0ASubject: ${data.subject}%0AMessage: ${data.message}`;
    window.open(`https://wa.me/918606043137?text=${text}`, "_blank");
  };

  return (
    <section
      className={`min-h-screen px-6 py-20 transition-all duration-300 ${
        isDarkMode ? "bg-[#0D0D0D] text-[#EDEDED]" : "bg-[#FAF7EF] text-[#222]"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all ${
          isDarkMode ? "bg-[#1A1A1A]" : "bg-white"
        }`}
      >

        {/* LEFT PANEL */}
        <div
          className={`md:w-2/5 p-10 transition-all ${
            isDarkMode
              ? "bg-gradient-to-br from-[#1A1A1A] to-black"
              : "bg-gradient-to-br from-[#B8860B] to-[#3B2F1A]"
          } text-white`}
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="opacity-80 mt-2 mb-6">
            Contact the FYS Creations team any time.
          </p>

          <div className="space-y-6">

            {/* Phone */}
            <div className="flex gap-4 items-center">
              <div
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#FAF7EF]/20"
                }`}
              >
                <img src="/icons/phone-svgrepo-com.svg" className="h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="opacity-80">+91 8606043137</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-center">
              <div
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#FAF7EF]/20"
                }`}
              >
                <img src="/icons/email-svgrepo-com.svg" className="h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="opacity-80">fyscreations123@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-center">
              <div
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#FAF7EF]/20"
                }`}
              >
                <img src="/icons/location-svgrepo-com.svg" className="h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="opacity-80">Kozhikode, Kerala ,India</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-10">
            <a  href="https://wa.me/918606043137" target="_blank" id="wb" rel="noopener noreferrer"><img className="h-9 hover:scale-110 transition" src="/icons/whatsapp-svgrepo-com.svg" alt="WhatsApp"/></a>
            <a  href="https://www.instagram.com/fyscreations?utm_source=qr&igsh=MTA2M3k5bW16NXRtNg==" target="_blank" rel="noopener noreferrer"><img className="h-9 hover:scale-110 transition" src="/icons/instagram-1-svgrepo-com.svg" alt="WhatsApp"/></a>
            <a  href="https://whatsapp.com/channel/0029VaxHGuL6BIEnCGYkl22S" target="_blank" rel="noopener noreferrer"><img className="h-9 hover:scale-110 transition" src="/icons/group-svgrepo-com.svg" alt="WhatsApp"/></a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="md:w-3/5 p-10">
          <h2 className="text-3xl font-bold">Send Us a Message</h2>
          <p className="opacity-70 mb-6">We reply within minutes.</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your Name"
                onChange={update}
                className={`p-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-[#2B2B2B] text-white border-[#444]"
                    : "bg-[#F2EDE4] border-[#D6C7A1]"
                }`}
              />
              <input
                name="email"
                placeholder="Your Email"
                onChange={update}
                className={`p-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-[#2B2B2B] text-white border-[#444]"
                    : "bg-[#F2EDE4] border-[#D6C7A1]"
                }`}
              />
            </div>

            <input
              name="subject"
              placeholder="Subject"
              onChange={update}
              className={`w-full p-3 rounded-lg border ${
                isDarkMode
                  ? "bg-[#2B2B2B] text-white border-[#444]"
                  : "bg-[#F2EDE4] border-[#D6C7A1]"
              }`}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              onChange={update}
              className={`w-full p-3 rounded-lg min-h-[150px] border ${
                isDarkMode
                  ? "bg-[#2B2B2B] text-white border-[#444]"
                  : "bg-[#F2EDE4] border-[#D6C7A1]"
              }`}
            />

            <button
              onClick={whatsapp}
              className={`w-full py-3 rounded-lg font-semibold mt-4 transition-all ${
                isDarkMode
                  ? "bg-[#D4AF37] hover:bg-[#c19d2f] text-black"
                  : "bg-[#B8860B] hover:bg-[#8F6E05] text-white"
              }`}
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
