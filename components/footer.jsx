"use client";

import { useState } from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer({ isDarkMode }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full py-10 ${
        isDarkMode ? "bg-gray-1000 text-gray-300" : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
       

       

    
   
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
      <p>
        Powered by{" "}
        <span className="text-blue-300">
          <a 
            href="https://sketchno.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Sketchno Technologies
          </a>
        </span>{" "}
        | &copy; {currentYear} All rights reserved.
      </p>
    </div>
    </footer>
  );
}
