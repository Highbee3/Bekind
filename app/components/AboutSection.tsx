"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type AboutPageProps = {
  scrollToSection: (id: string) => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage({ scrollToSection }: AboutPageProps) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/560302605_17947820613020854_833354385222966530_n.jpg_tptu6n.jpg"
          alt="Bekind Lounge Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide"
          >
            Welcome to Bekind Bar & Lounge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-2xl text-white/90 mb-8"
          >
            Crafting extraordinary moments, one cocktail at a time.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => scrollToSection("story")}
            className="px-8 py-3 bg-[#d31c2b] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-[#b61623] transition-transform"
          >
            Discover More
          </motion.button>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </section>

      {/* Story Section */}
      <motion.section
        id="story"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-6 md:px-20 bg-gray-100 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
          Bekind Bar & Lounge was born from a passion for creating memorable
          nights filled with laughter, great drinks, and soulful ambiance. Each
          cocktail tells a story, handcrafted by our expert mixologists with
          premium ingredients and a touch of flair. Whether you’re here to
          celebrate, unwind, or discover new flavors — Bekind is your perfect
          destination.
        </p>
        <button
          onClick={() => scrollToSection("features")}
          className="px-6 py-3 bg-[#d31c2b] text-white rounded-full hover:bg-[#b61623] transition shadow-md"
        >
          Explore Our Experience
        </button>
      </motion.section>

      {/* Mission & Values Section */}
      <section
        className="py-20 px-6 md:px-20 bg-white text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Our Mission & Values
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
          <p className="mb-6">
            At Bekind, our mission is simple: to create a space where everyone
            feels welcomed, valued, and inspired. We believe in kindness,
            craftsmanship, and community — and that every sip, sound, and smile
            should elevate your evening.
          </p>
          <p>
            Our values are built on connection, quality, and creativity — the
            essence of every unforgettable night shared at Bekind.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-6 md:px-20 bg-gray-50"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          What Makes Us Special
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Crafted Cocktails",
              desc: "Experience innovation and flavor with our mixologists’ curated menu — a perfect blend of creativity and tradition.",
              icon: "🍸",
            },
            {
              title: "Ambient Lounge",
              desc: "Our space is designed to soothe the senses — elegant interiors, curated playlists, and a relaxed vibe.",
              icon: "🎶",
            },
            {
              title: "Exclusive Events",
              desc: "From live performances to themed nights, Bekind hosts events that leave lasting impressions.",
              icon: "🎤",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 bg-white rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              data-aos="fade-up"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        id="team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="py-20 px-6 md:px-20 bg-gray-100"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              name: "Alex Johnson",
              role: "Head Mixologist",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1731194445/mixologist1.jpg",
            },
            {
              name: "Sophie Lee",
              role: "Cocktail Specialist",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1731194445/mixologist2.jpg",
            },
            {
              name: "Marcus Kim",
              role: "Event Coordinator",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/517565953_627421693728301_2988617585636828158_n.jpg_sguhp2.jpg",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3 }}
              data-aos="fade-up"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={160}
                height={160}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-4 border-[#d31c2b]"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
