"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavLink = {
  id: string;
  label: string;
};

const navLinks: NavLink[] = [
  { id: "hero", label: "Home" },
  // { id: "cocktails", label: "Cocktails" },
  { id: "about", label: "About" },
  { id: "LiveEvents", label: "Live Events" },
  { id: "hotelrooms", label: "Hotel Room" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(link.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md shadow-md text-white py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/Screenshot_18_k0tqkg.png"
            alt="BeKind Logo"
            width={150}
            height={50}
            className="w-auto h-12 md:h-14"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-2 py-1 font-medium transition-colors duration-300 ${
                activeSection === link.id ? "text-[#D31C2B]" : "text-gray-300 hover:text-[#D31C2B]"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#D31C2B] rounded"></span>
              )}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 bg-[#D31C2B] text-black rounded-md font-semibold hover:opacity-90 transition"
          >
            Reserve
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 text-center py-6 space-y-4 rounded-b-lg shadow-lg animate-slide-down">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="block w-full py-2 text-gray-200 hover:text-[#D31C2B] hover:bg-gray-800 rounded transition"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollToSection("contact");
              setIsMobileMenuOpen(false);
            }}
            className="block w-full py-2 bg-[#D31C2B] text-black rounded-md font-semibold hover:opacity-90 transition"
          >
            Reserve
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
