"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

interface ContactSectionProps {
  scrollToSection: (id: string) => void;
}

export default function ContactSection({
  scrollToSection,
}: ContactSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="bg-neutral-950 text-white py-20 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-linear-to-t from-red-900/20 to-transparent blur-3xl" />

      {/* Header */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[#D31C2B]">
          Get In Touch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Whether you want to reserve a table, plan an event, or simply connect
          — we’re here to make it happen. Let’s create memorable moments
          together.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        data-aos="fade-up"
        className="relative z-10 flex flex-col md:flex-row justify-center items-start md:items-center gap-12 mb-16"
      >
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">📍 Address</h3>
          <p className="text-gray-400">
           No 4, Sangolana Street, Ori Oke Oloruntosin Area, <br />Off Offatedo Road, Osogbo, Osun State
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">📞 Phone</h3>
          <p className="text-gray-400 hover:text-red-400 transition">
            +2348142273759.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">✉️ Email</h3>
          <p className="text-gray-400 hover:text-red-400 transition">
            info@bekindbar.com
          </p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        data-aos="fade-up"
        className="relative z-10 max-w-xl mx-auto space-y-5 bg-neutral-900/60 p-8 rounded-xl shadow-lg backdrop-blur-md"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#D31C2B]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#D31C2B]"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-[#D31C2B]"
        ></textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#D31C2B] hover:bg-[#b31725] text-white py-3 rounded-md transition font-semibold"
        >
          Send Message
        </motion.button>
      </motion.form>
      {/* 🌍 Hotel Location Map */}
      <motion.div
        data-aos="zoom-in"
        className="relative z-10 mb-16 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.0755279350774!2d4.510203173129309!3d7.789245207165573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787d6ae5d3ce5%3A0x635b95d613f8b7d7!2sBe%20Kind%20Bar%20and%20Lounge!5e1!3m2!1sen!2sng!4v1762718587941!5m2!1sen!2sng"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0"
        ></iframe>
      </motion.div>

      {/* Back to Top */}
      <motion.div
        data-aos="fade-up"
        className="relative z-10 mt-16 text-center"
      >
        <button
          onClick={() => scrollToSection("hero")}
          className="px-6 py-3 border border-[#D31C2B] text-white rounded-lg hover:bg-[#D31C2B] hover:text-white transition-all duration-300"
        >
          ↑ Back to Top
        </button>
      </motion.div>
    </section>
  );
}
