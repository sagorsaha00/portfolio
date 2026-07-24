"use client";

import React, { useEffect, useState } from "react";
import { animated, config, useSpring, useTransition } from "@react-spring/web";
import { FaDownload } from "react-icons/fa";

import ExperienceTimeline from "./components/experinece";
import SkillCard from "./components/showSkill";
import SocialConnectSection from "./components/contact";
import FeaturedProjects from "./components/project";
import Navbar from "./components/navbar";

const heroWords = [
  "MERN Stack Developer",
  "FRONTEND DEVELOPER",
  "GENERATIVE AI",
  "Ready to Learn & Build",
];

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let timeout;

    const type = () => {
      setText(words[wordIndex].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex < words[wordIndex].length) {
        timeout = setTimeout(type, 80);
      } else {
        timeout = setTimeout(() => {
          setText("");
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 1400);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [wordIndex, words]);

  return text;
}

function HeroSection() {
  const typed = useTypewriter(heroWords);

  const hero = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: config.gentle,
  });

  const profileFloat = useSpring({
    from: { y: 0 },
    to: async (next) => {
      while (true) {
        await next({ y: -8 });
        await next({ y: 0 });
      }
    },
    config: {
      tension: 80,
      friction: 18,
    },
  });

  return (
    <section id="about" className=" bg-[#0f0303] px-3 pb-16 pt-28 md:px-5">
      <animated.div
        style={{
          opacity: hero.opacity,
          transform: hero.y.to((y) => `translateY(${y}px)`),
        }}
        className="mx-auto w-[92%] max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-[#140707] shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:w-[80%]"
      >
        {/* COVER */}
        <div className="relative h-[260px] overflow-hidden md:h-[340px]">
          <img
            src="/cover.png"
            alt="Cover"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#140707] via-black/30 to-black/20" />

          {/* Premium Glow */}
          <div className="absolute -left-20 top-0 h-[250px] w-[250px] rounded-full bg-orange-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-red-500/20 blur-3xl" />
        </div>

        {/* PROFILE CONTENT */}
        <div className="relative px-5 pb-12 md:px-10">
          {/* PROFILE IMAGE */}
          <animated.div
            style={{
              transform: profileFloat.y.to((y) => `translateY(${y}px)`),
            }}
            className="relative mx-auto -mt-20 flex justify-center md:absolute md:-top-20 md:left-10 md:mx-0 md:mt-0"
          >
            <div className="group relative h-40 w-40 md:h-44 md:w-44">
              {/* Glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-red-500/40 via-orange-500/30 to-red-500/40 blur-2xl transition duration-700 group-hover:blur-3xl" />

              {/* Image */}
              <img
                src="/sagor-saha.jpg"
                alt="Sagor Saha"
                className="relative z-10 h-full w-full rounded-full border-4 border-[#180808] object-cover object-[center_22%] shadow-2xl transition-all duration-700 group-hover:scale-105"
              />

              {/* Ring */}
              <div className="absolute inset-0 z-20 rounded-full border border-white/20" />
            </div>
          </animated.div>

          {/* INFO */}
          <div className="mt-8 text-center md:ml-[210px] md:mt-2 md:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Sagor Saha
              </h1>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-red-500/30">
                ✓
              </span>
            </div>

            <div className="mt-5 text-xl font-black text-orange-300 md:text-2xl">
              {typed}
              <span className="animate-pulse text-red-400">|</span>
            </div>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
              I’m a MERN Stack and Generative AI developer passionate about
              building modern, responsive, and AI-powered web applications using
              TypeScript, Next.js, Node.js, MongoDB, MySQL, Tailwind CSS,
              shadcn/ui, LangChain, OpenAI APIs, and Docker.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a
                href="/Sagor_Saha_Resume.pdf"
                download
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-7 py-3 text-sm font-bold text-white shadow-[0_8px_30px_-6px_rgba(239,68,68,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-6px_rgba(239,68,68,0.75)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                <FaDownload className="relative z-10 text-xs" />
                <span className="relative z-10">Download Resume</span>
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-12 grid w-full gap-5 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-red-500/10">
              <h3 className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-4xl font-black text-transparent">
                2+
              </h3>
              <p className="mt-2 text-sm text-zinc-400">Years Learning</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-red-500/10">
              <h3 className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-4xl font-black text-transparent">
                20+
              </h3>
              <p className="mt-2 text-sm text-zinc-400">Practice Projects</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-2xl hover:shadow-red-500/10">
              <h3 className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-4xl font-black text-transparent">
                Daily
              </h3>
              <p className="mt-2 text-sm text-zinc-400">Consistent Growth</p>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ececec]">
      <Navbar></Navbar>
      <HeroSection />
      <FeaturedProjects />
      <ExperienceTimeline />
      <SkillCard />
      <SocialConnectSection />
    </main>
  );
}
