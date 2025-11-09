"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface HotelroomProps {
  scrollToSection: (id: string) => void;
}

const rooms = [
  {
    title: "Deluxe Suite",
    desc: "Spacious and elegant with modern décor, offering city views, a private balcony, and a king-size bed.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/room_1_qgomzm.jpg",
  },
  {
    title: "Executive Room",
    desc: "Designed for comfort and productivity, featuring a large workspace and luxurious furnishings.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/room_2_toiezr.jpg",
  },
  {
    title: "Presidential Suite",
    desc: "Ultimate indulgence with a private lounge, jacuzzi, and panoramic skyline views.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/es-signature-presidential-suite-1_nc9ojy.jpg",
  },
  {
    title: "Couple’s Paradise",
    desc: "A romantic escape designed for intimacy and relaxation with soft lighting and premium amenities.",
    img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/room_3_xnl5tf.jpg",
  },
];

export default function Hotelroom({ scrollToSection }: HotelroomProps) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="hotelrooms"
      className="bg-[#fdfcfb] text-gray-800 py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#D31C2B] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Luxury Rooms
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From chic contemporary designs to timeless elegance, each of our rooms
          offers a unique experience of comfort, privacy, and luxury.
        </motion.p>
      </div>

      {/* Swiper Carousel */}
      <motion.div
        data-aos="fade-up"
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[ Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                data-aos="zoom-in"
              >
                <div className="relative w-full h-[250px]">
                  <Image
                    src={room.img}
                    alt={room.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#D31C2B]">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{room.desc}</p>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-[#D31C2B] font-medium hover:underline"
                  >
                    Book Now →
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      
    </section>
  );
}
