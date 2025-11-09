"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type LiveEventsProps = {
  scrollToSection: (id: string) => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const events = [
  {
    title: "Jazz Nights",
    desc: "Immerse yourself in soulful live jazz every Friday, perfectly paired with our handcrafted cocktails.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/476280253_512819931855145_3750892327025519804_n.jpg_irsado.jpg",
  },
  {
    title: "DJ Evenings",
    desc: "Feel the rhythm with our top local DJs spinning vibrant beats every Saturday night.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1731196000/dj-night.jpg",
  },
  {
    title: "Themed Parties",
    desc: "From retro to tropical nights — join our themed parties for unforgettable experiences.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1731196040/themed-party.jpg",
  },
];

export default function LiveEvents({ scrollToSection }: LiveEventsProps) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      id="LiveEvents"
      className="relative py-20 px-6 md:px-20 bg-linear-to-b from-gray-100 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] pointer-events-none" />

      {/* Title */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="text-4xl md:text-5xl font-semibold text-center mb-12 text-black"
      >
        Live Events
      </motion.h2>

      {/* CTA */}
      <div className="text-center mb-16" data-aos="fade-up">
        <button
          onClick={() => scrollToSection("contact")}
          className="px-8 py-3 bg-[#d31c2b] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-[#b61623] transition-transform"
        >
          Reserve Your Spot
        </button>
      </div>

      {/* Event Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-md border border-gray-200 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
            data-aos="fade-up"
          >
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={event.img}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {event.desc}
              </p>

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 px-5 py-2 text-sm font-medium rounded-full bg-[#d31c2b] text-white hover:bg-[#b61623] transition"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Motion Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute -bottom-20 right-20 w-64 h-64 rounded-full bg-[#d31c2b] blur-3xl"
      />
    </section>
  );
}
