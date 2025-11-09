"use client";

import CocktailCard from "../components/CocktailCard";
import { cocktails } from "../data/cocktails";

type CocktailsSectionProps = {
  scrollToSection: (id: string) => void;
};

export default function CocktailsSection({ scrollToSection }: CocktailsSectionProps) {
  return (
    <section id="cocktails" className="py-16 bg-neutral-900 text-white">
      <h2 className="text-center text-4xl font-serif mb-12">Our Signature Cocktails</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cocktails.map((drink) => (
          <CocktailCard
            key={drink.name}
            name={drink.name}
            description={drink.description}
            image={drink.image}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 bg-white text-black rounded-lg border hover:bg-gray-100 transition"
        >
          View Full Menu
        </button>
      </div>
    </section>
  );
}
