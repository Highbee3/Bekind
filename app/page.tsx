// app/page.tsx
"use client";

import Hero from "./components/Hero";
import CocktailsSection from "./components/CocktailsSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import LiveEvents from "./components/LiveEvents";
import Hotelroom from "./components/Hotelroom";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero scrollToSection={scrollToSection} />
        </section>

        <section id="cocktails">
          <CocktailsSection scrollToSection={scrollToSection} />
        </section>

        <section id="about">
          <AboutSection scrollToSection={scrollToSection} />
        </section>

       
        <section id="LiveEvents">
          <LiveEvents scrollToSection={scrollToSection} />
        </section>

        
        <section id="hotelrooms">
          <Hotelroom scrollToSection={scrollToSection} /> {/* ← Pass it here */}
        </section>

        <section id="contact">
  <ContactSection scrollToSection={scrollToSection} />
</section>

      </main>
    </>
  );
}
