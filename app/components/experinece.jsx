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
    dot: "bg-cyan-400",
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
    dot: "bg-emerald-400",
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
    dot: "bg-violet-400",
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
    dot: "bg-orange-400",
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
        transform: `translateY(90px) scale(0.94)`,
        filter: "blur(10px)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0px) scale(1)",
        filter: "blur(0px)",
      },
      config: config.gentle,
      delay: 120,
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
        <div
          className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-700 hover:-translate-y-3 ${item.border} ${item.glow} hover:shadow-2xl`}
        >
          <div className="absolute left-[-120%] top-0 h-full w-1/2 rotate-12 bg-white/10 blur-2xl transition-all duration-1000 group-hover:left-[140%]" />

          <div className="mb-6 flex items-center gap-5">
            <div
              className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${item.iconBg} text-3xl shadow-xl`}
            >
              <Icon />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">{item.title}</h3>

              <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
            </div>
          </div>

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            {item.date}
          </div>

          <ul className="space-y-4">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-4 text-sm leading-7 text-zinc-300"
              >
                <span
                  className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${item.dot}`}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#0f0303] bg-orange-400 shadow-[0_0_30px_#fb923c] md:block" />
    </animated.div>
  );
}

export default function ExperienceTimeline() {
  const [headingRef, headingSpring] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(50px)",
        filter: "blur(8px)",
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
      <div className="absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <animated.div
          ref={headingRef}
          style={headingSpring}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">
            My Journey
          </p>

          <h2 className="text-5xl font-black leading-tight sm:text-6xl">
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

            <div className="absolute left-1/2 top-0 h-full -translate-x-1/2">
              <div className="absolute top-[10%] h-3 w-3 rounded-full bg-red-400 shadow-[0_0_20px_#f87171]" />
              <div className="absolute top-[35%] h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_#fb923c]" />
              <div className="absolute top-[60%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_20px_#fbbf24]" />
              <div className="absolute top-[85%] h-3 w-3 rounded-full bg-red-500 shadow-[0_0_20px_#ef4444]" />
            </div>
          </div>

          <div className="space-y-16">
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
