"use client";
import React, { useState } from "react";

export default function Contact({ isDarkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const phone = "918089241011"; // Your WhatsApp number
    const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 py-12 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`max-w-5xl w-full rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Contact Info */}
        <div
          className={`md:w-2/5 p-8 flex flex-col justify-between transition-colors duration-300 ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-900 to-gray-700 text-white"
              : "bg-gradient-to-br from-gray-800 to-orange-400 text-white"
          }`}
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6">
              Have questions? Reach out and we'll respond as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg"><img className="h-7" src="icons/phone-svgrepo-com.svg" alt="" /></div>
                <div className="text-left">
                  <h3 className="font-semibold">Phone</h3>
                  <p>+91 9847471231</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg"><img className="h-7" src="icons/email-svgrepo-com.svg" alt="" /></div>
                <div className="text-left">
                  <h3 className="font-semibold">Email</h3>
                  <p>rameesmrm24@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg text-center"><img className="h-7" src="icons/location-svgrepo-com.svg" alt="" /></div>
                <div className="text-left">
                  <h3 className="font-semibold">Location</h3>
                  <p>karanthur, kozhikode, kerala</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`md:w-3/5 p-8 flex flex-col transition-colors duration-300 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
          <p className="mb-6">Fill out the form below and we'll get back to you.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={`w-full p-3 border rounded-lg transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300 focus:ring-blue-500"
                    : "bg-gray-100 text-black border-gray-300 placeholder-gray-500 focus:ring-blue-500"
                }`}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={`w-full p-3 border rounded-lg transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300 focus:ring-blue-500"
                    : "bg-gray-100 text-black border-gray-300 placeholder-gray-500 focus:ring-blue-500"
                }`}
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className={`w-full p-3 border rounded-lg transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300 focus:ring-blue-500"
                  : "bg-gray-100 text-black border-gray-300 placeholder-gray-500 focus:ring-blue-500"
              }`}
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className={`w-full p-3 border rounded-lg transition-colors duration-300 resize-y min-h-[150px] ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600 placeholder-gray-300 focus:ring-blue-500"
                  : "bg-gray-100 text-black border-gray-300 placeholder-gray-500 focus:ring-blue-500"
              }`}
            />

            <div className="flex flex-col md:flex-row gap-4 mt-4">
             
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
