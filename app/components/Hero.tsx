"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Instagram, Facebook, Twitter } from "lucide-react";
import { useEffect } from "react";

type HeroProps = {
  scrollToSection?: (id: string) => void;
};

export default function Hero({
  scrollToSection = () => {},
}: HeroProps) {
  useEffect(() => {
    window.scrollTo(0, 0); // start at top for a clean intro
  }, []);

  return (
    <section className="relative h-150 flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/560302605_17947820613020854_833354385222966530_n.jpg_tptu6n.jpg"
          alt="Bekind Lounge Background"
          fill
          className="object-cover brightness-45"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      {/* Main Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full  mx-auto px-6 py-12 backdrop-blur-md bg-white/5 rounded-2xl shadow-2xl mt-30"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-wide leading-tight"
        >
          Welcome to{" "}
          <span className="text-red-500">Bekind Bar & Lounge</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-white/80 mb-6 leading-relaxed"
        >
          Where every sip tells a story. Experience handcrafted cocktails,
          velvet ambiance, and the rhythm of good vibes.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="italic text-white/70 mb-8"
        >
          “Good friends, great drinks, unforgettable nights.”
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("cocktails")}
            className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-105"
          >
            🍸 View Menu
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-transparent border border-red-400 text-black-400 font-semibold rounded-lg hover:bg-red-600/20 hover:text-black transition-all duration-300 hover:scale-105"
          >
            Reserve a Table
          </button>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ delay: 1, duration: 0.8 }}
          className="h-0.5 bg-red-500 mx-auto mt-10"
        />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex gap-6 mt-12 text-white/70"
      >
        <a href="#" className="hover:text-purple-400 transition">
          <Instagram size={24} />
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          <Facebook size={24} />
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          <Twitter size={24} />
        </a>
      </motion.div>

      {/* Scroll Down Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-purple-400 transition animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
