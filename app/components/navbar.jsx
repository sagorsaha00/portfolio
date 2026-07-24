"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On the homepage, scroll smoothly instead of relying on the browser's
  // instant anchor jump. On any other page, let the Link navigate to
  // "/#section" normally so the browser lands on the homepage first.
  const handleLinkClick = (e, hash) => {
    setOpen(false);
    if (!isHome) return;

    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", hash);
    }
  };

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl transition-all duration-500 ease-out ${
        scrolled
          ? "border border-white/10 bg-black/50 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          : "border border-transparent bg-transparent"
      }`}
    >
      {/* faint top hairline, only visible once the glass surface exists */}
      <div
        className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <nav
        className={`mx-auto flex w-[92%] max-w-7xl items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="group relative inline-block overflow-hidden text-2xl font-black tracking-wide"
        >
          <span className="animate-gradient bg-[length:200%_200%] bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            SAGOR SAHA
          </span>

          {/* Glow */}
          <span className="absolute inset-0 opacity-30 blur-xl transition duration-500 group-hover:opacity-60">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              SAGOR SAHA
            </span>
          </span>

          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transition-all duration-500 group-hover:w-full" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/[0.02] p-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 scale-x-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-90 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white backdrop-blur-lg transition-colors duration-300 hover:bg-white/10 md:hidden"
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
        <div className="mx-auto mb-4 flex w-[92%] flex-col gap-2 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-2xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={isHome ? link.href : `/${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="rounded-xl px-4 py-3 text-zinc-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
