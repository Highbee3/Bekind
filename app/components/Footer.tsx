"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-neutral-950 text-white py-16 px-6 md:px-12 border-t border-neutral-800 overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-linear-to-t from-[#D31C2B]/10 via-transparent to-transparent blur-3xl" />

      <motion.div
        className="container relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Top Section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-4 text-[#D31C2B]">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>No 4, Sangolana Street, Ori Oke Oloruntosin Area, </li>
              <li>Off Offatedo Road, Osogbo, Osun State</li>
              <li className="pt-2">📞  +2348142273759</li>
              <li>✉️ hello@bekindbar.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="font-serif text-xl mb-4 text-[#D31C2B]">Follow Us</h4>
            <div className="flex justify-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#D31C2B] transition-colors duration-300"
                aria-label="Facebook"
              >
                <SiFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D31C2B] transition-colors duration-300"
                aria-label="Instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D31C2B] transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <SiX className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-right  md:text-right ">
            <h4 className="font-serif text-xl mb-4 text-[#D31C2B] text-start">Location</h4>
            <p className="text-gray-400 text-sm text-justify w-full">
              Bekind Bar & Lounge
              <br />
              No 4, Sangolana Street, Ori Oke Oloruntosin Area,
              <br />
              Off Offatedo Road, Osogbo, Osun State
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-24 h-0.5 mx-auto mb-10 bg-linear-to-r from-transparent via-[#D31C2B] to-transparent" />

        {/* Bottom Section */}
        <motion.div
          data-aos="fade-up"
          className="text-center text-gray-500 text-sm"
        >
          <p className="mb-2">
            © {currentYear} <span className="text-[#D31C2B] font-semibold">Bekind Lounge</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Designed with ❤️ for lovers of fine cocktails and good vibes.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#D31C2B] hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
          aria-label="Scroll to top"
        >
          <HiArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
