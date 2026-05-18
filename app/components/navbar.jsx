"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-[90%] max-w-7xl items-center justify-between">
        {/* LOGO */}
        <a
          href="#"
          className="group relative inline-block overflow-hidden text-2xl font-black tracking-wide"
        >
          <span className="animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            SAGOR SAHA
          </span>

          {/* Glow */}
          <span className="absolute inset-0 blur-xl opacity-30 transition duration-500 group-hover:opacity-60">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              SAGOR SAHA
            </span>
          </span>

          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">{link.name}</span>

              <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 transition-transform duration-300 group-hover:scale-100"></span>
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white backdrop-blur-lg md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto mb-4 flex w-[90%] flex-col gap-3 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-2xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-zinc-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
