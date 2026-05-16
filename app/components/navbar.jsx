"use client";

import React, { useEffect, useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#140707]/80 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-[80%] items-center justify-between px-5 py-4">
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-300 transition duration-300 hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BUTTON */}
        <a
          href="https://wa.me/8801234567890"
          target="_blank"
          className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]"
        >
          Let’s Talk
        </a>
      </nav>
    </header>
  );
}
