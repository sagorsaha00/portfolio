"use client";

import React from "react";
import { useInView, animated, useSpring, config } from "@react-spring/web";
import { FaLaptopCode, FaBrain, FaUserGraduate } from "react-icons/fa";
import { SiReact } from "react-icons/si";

const journeys = [
  {
    title: "Frontend Development",
    company: "React Ecosystem",
    date: "2022 — Present",
    icon: SiReact,
    glow: "shadow-cyan-500/30",
    border: "hover:border-cyan-400/40",
    iconBg: "from-cyan-500 to-blue-500",
    iconRing: "ring-cyan-400/20",
    dot: "bg-cyan-400",
    dotShadow: "shadow-[0_0_20px_#22d3ee]",
    points: [
      "Building modern responsive UI using React, Next.js, Tailwind CSS, and TypeScript.",
      "Focused on reusable components, animations, and premium user experience.",
      "Creating scalable frontend architecture with clean design systems.",
    ],
  },
  {
    title: "MERN Stack Development",
    company: "Full Stack Learning",
    date: "2023 — Present",
    icon: FaLaptopCode,
    glow: "shadow-emerald-500/30",
    border: "hover:border-emerald-400/40",
    iconBg: "from-emerald-500 to-green-500",
    iconRing: "ring-emerald-400/20",
    dot: "bg-emerald-400",
    dotShadow: "shadow-[0_0_20px_#34d399]",
    points: [
      "Developing full stack applications using MongoDB, Express.js, React, and Node.js.",
      "Working with REST APIs, Firebase auth, JWT, protected routes, and backend architecture.",
      "Building real-world projects with scalable workflow and responsive design.",
    ],
  },
  {
    title: "Generative AI Engineering",
    company: "AI Learning",
    date: "2024 — Present",
    icon: FaBrain,
    glow: "shadow-violet-500/30",
    border: "hover:border-violet-400/40",
    iconBg: "from-violet-500 to-fuchsia-500",
    iconRing: "ring-violet-400/20",
    dot: "bg-violet-400",
    dotShadow: "shadow-[0_0_20px_#a78bfa]",
    points: [
      "Learning LangChain, LangGraph, OpenAI APIs, prompt engineering, and AI workflows.",
      "Exploring AI agents, RAG systems, chatbot architecture, and intelligent automation.",
      "Integrating AI-powered experiences into modern web applications.",
    ],
  },
  {
    title: "Study & Career Journey",
    company: "Daily Growth",
    date: "Current",
    icon: FaUserGraduate,
    glow: "shadow-orange-500/30",
    border: "hover:border-orange-400/40",
    iconBg: "from-orange-500 to-red-500",
    iconRing: "ring-orange-400/20",
    dot: "bg-orange-400",
    dotShadow: "shadow-[0_0_20px_#fb923c]",
    points: [
      "Currently studying Degree 2nd Year while continuing programming learning.",
      "Managing a marketing job alongside development and self-learning.",
      "Learning consistently every day through projects, courses, and practical coding.",
    ],
  },
];

function TimelineItem({ item, index }) {
  const Icon = item.icon;
  const isLeft = index % 2 === 0;

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: `translateY(70px) scale(0.96)`,
        filter: "blur(8px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) scale(1)",
        filter: "blur(0px)",
      },
      config: { tension: 210, friction: 26 },
      delay: 100,
    }),
    {
      once: true,
      rootMargin: "-12% 0%",
    },
  );

  return (
    <animated.div
      ref={ref}
      style={springs}
      className={`relative grid items-center gap-10 md:grid-cols-2 ${
        isLeft ? "" : "md:[&>*:first-child]:col-start-2"
      }`}
    >
      <div className={`relative ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
        {/* subtle gradient ring behind the card for a "framed" premium edge */}
        <div
          className={`absolute inset-0 rounded-[26px] bg-gradient-to-br ${item.iconBg} opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-20`}
        />

        <div
          className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.015] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/[0.16] ${item.border} ${item.glow} hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]`}
        >
          {/* faint top hairline for glass edge realism */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* sheen sweep */}
          <div className="pointer-events-none absolute left-[-120%] top-0 h-full w-1/2 rotate-12 bg-white/[0.06] blur-2xl transition-all duration-1000 ease-out group-hover:left-[140%]" />

          <div className="relative mb-6 flex items-center gap-5">
            <div
              className={`relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${item.iconBg} text-3xl text-white shadow-lg ring-4 ${item.iconRing} transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[-4deg]`}
            >
              <Icon />
            </div>

            <div>
              <h3 className="text-2xl font-black tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-400">
                {item.company}
              </p>
            </div>
          </div>

          <div className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
            {item.date}
          </div>

          <ul className="relative space-y-4">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 text-sm leading-7 text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200"
              >
                <span
                  className={`mt-2 h-2 w-2 shrink-0 rounded-full ${item.dot} ${item.dotShadow}`}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* center timeline node with pulsing ring */}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <span
          className={`absolute inset-0 -m-2 animate-ping rounded-full ${item.dot} opacity-20`}
        />
        <span
          className={`relative block h-6 w-6 rounded-full border-4 border-[#0f0303] ${item.dot} ${item.dotShadow}`}
        />
      </div>
    </animated.div>
  );
}

export default function ExperienceTimeline() {
  const [headingRef, headingSpring] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(40px)",
        filter: "blur(6px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      },
      config: config.gentle,
    }),
    {
      once: true,
      rootMargin: "-10% 0%",
    },
  );

  const lineSpring = useSpring({
    from: { height: "0%" },
    to: { height: "100%" },
    config: { tension: 80, friction: 30 },
    delay: 300,
  });

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0f0303] px-6 py-28 text-white"
    >
      {/* ambient glows */}
      <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />

      {/* faint grid texture for premium depth, purely structural — no new colors */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <animated.div
          ref={headingRef}
          style={headingSpring}
          className="mb-24 text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-orange-400" />
            My Journey
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-orange-400" />
          </p>

          <h2 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl">
            MERN Stack &
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
              {" "}
              AI Developer
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400">
            Passionate about building modern web applications and AI-powered
            experiences while balancing studies, professional work, and
            continuous self-learning.
          </p>
        </animated.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 overflow-hidden rounded-full bg-white/10 md:block">
            <animated.div
              style={lineSpring}
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-orange-400 via-red-500 to-transparent"
            />

            <div className="absolute top-0 h-40 w-full animate-[moveLight_4s_linear_infinite] bg-gradient-to-b from-orange-400 via-red-500 to-transparent blur-sm" />
          </div>

          <div className="space-y-16 md:space-y-20">
            {journeys.map((item, index) => (
              <TimelineItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes moveLight {
          0% {
            transform: translateY(-120%);
          }
          100% {
            transform: translateY(900%);
          }
        }
      `}</style>
    </section>
  );
}
