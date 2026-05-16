"use client";

import React from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/8801857681366",
    color: "hover:text-green-500",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/sagor.saha.55",
    color: "hover:text-blue-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/sagor-saha00",
    color: "hover:text-cyan-400",
  },
];

export default function SocialConnectSection() {
  return (
    <section id="contact" className="bg-[#0f0303] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          Contact
        </p>

        <h2 className="text-4xl font-black sm:text-5xl">Let’s Connect</h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400">
          Available for freelance work, collaboration, and learning
          opportunities.
        </p>

        <div className="mt-12 flex items-center justify-center gap-5">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl transition hover:-translate-y-1 ${social.color}`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
