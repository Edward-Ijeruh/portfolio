"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#herosection" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("herosection");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const bottom = top + section.clientHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(item.href.replace("#", ""));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // call once to set initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-0 mx-auto z-50 flex justify-center"
    >
      <div className="backdrop-blur-md bg-gray-900/60 border border-gray-800 px-6 py-3 rounded-full shadow-lg flex items-center gap-4 sm:gap-6 text-sm text-gray-300">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-2 py-1 transition-colors duration-300 hover:text-white`}
            >
              {item.name}
              {isActive && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
