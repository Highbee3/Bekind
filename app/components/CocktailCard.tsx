"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type CocktailCardProps = {
  name: string;
  description: string;
  image: string;
};

export default function CocktailCard({ name, description, image }: CocktailCardProps) {
  return (
    <motion.div
      className="relative group bg-neutral-900 text-white rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-neutral-800"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Cocktail Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />
      </div>

      {/* Cocktail Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="p-5"
      >
        <h3 className="text-2xl font-semibold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
          {name}
        </h3>

        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Decorative line */}
        <div className="w-12 h-0.5 bg-purple-500 mb-3 group-hover:w-16 transition-all duration-500" />

        {/* Cocktail tags / details */}
        <div className="flex justify-between text-gray-400 text-xs font-medium">
          <span>🍸 Signature Blend</span>
          <span>⭐ Customer Favorite</span>
        </div>
      </motion.div>

      {/* Floating label effect */}
      <motion.div
        className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Featured
      </motion.div>
    </motion.div>
  );
}
