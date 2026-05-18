"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { animated, config, useSpring, useTransition } from "@react-spring/web";

import { FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { IoClose, IoChatbubbleEllipses } from "react-icons/io5";

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
        className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-[#140707] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
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

// function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const bottomRef = useRef(null);

//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "Hi 👋 I’m Sagor’s portfolio assistant. Ask me about skills, projects, or hiring.",
//     },
//   ]);

//   const bubbleSpring = useSpring({
//     from: { opacity: 0, scale: 0.2, y: 40 },
//     to: { opacity: 1, scale: 1, y: 0 },
//     delay: 700,
//     config: config.wobbly,
//   });

//   const panelTransition = useTransition(open, {
//     from: { opacity: 0, y: 35, scale: 0.92 },
//     enter: { opacity: 1, y: 0, scale: 1 },
//     leave: { opacity: 0, y: 25, scale: 0.94 },
//     config: { tension: 260, friction: 22 },
//   });

//   const send = useCallback(() => {
//     if (!input.trim()) return;

//     const userText = input.trim();
//     const msg = userText.toLowerCase();

//     let reply =
//       "Thanks for your message! You can contact me directly on WhatsApp for a faster reply.";

//     if (msg.includes("hire") || msg.includes("work")) {
//       reply =
//         "Yes, I’m open to freelance, internship, and junior developer opportunities.";
//     }

//     if (msg.includes("skill") || msg.includes("stack")) {
//       reply =
//         "I’m learning React, Next.js, JavaScript, TypeScript, Node.js, Express.js, MongoDB, Firebase, and Tailwind CSS.";
//     }

//     if (msg.includes("project")) {
//       reply =
//         "I build practice projects like dashboards, portfolio websites, CRUD apps, authentication systems, and MERN stack projects.";
//     }

//     setMessages((prev) => [
//       ...prev,
//       { from: "user", text: userText },
//       { from: "bot", text: reply },
//     ]);

//     setInput("");
//   }, [input]);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, open]);

//   return (
//     <>
//       {panelTransition(
//         (style, item) =>
//           item && (
//             <animated.div
//               style={style}
//               className="fixed bottom-24 right-4 z-50 w-[calc(100%-2rem)] max-w-[380px] overflow-hidden rounded-[28px] border border-red-500/20 bg-[#130303]/95 text-white shadow-[0_0_60px_rgba(239,68,68,0.25)] backdrop-blur-xl sm:right-6"
//             >
//               <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-red-950 via-black to-black px-5 py-5">
//                 <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-red-500/20 blur-3xl" />

//                 <div className="relative flex items-center justify-between gap-4">
//                   <div className="flex items-center gap-3">
//                     <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-500 text-xl shadow-[0_0_25px_rgba(239,68,68,0.6)]">
//                       <IoChatbubbleEllipses />
//                     </div>

//                     <div>
//                       <h3 className="font-black leading-none">
//                         Portfolio Assistant
//                       </h3>
//                       <p className="mt-1 flex items-center gap-2 text-xs text-green-300">
//                         <span className="h-2 w-2 rounded-full bg-green-400" />
//                         Online now
//                       </p>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => setOpen(false)}
//                     className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xl transition hover:bg-red-500"
//                     aria-label="Close chat"
//                   >
//                     <IoClose />
//                   </button>
//                 </div>
//               </div>

//               <div className="max-h-[360px] space-y-4 overflow-y-auto bg-[#0b0101] p-4">
//                 {messages.map((msg, i) => (
//                   <div
//                     key={i}
//                     className={`flex ${
//                       msg.from === "user" ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     <div
//                       className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-lg ${
//                         msg.from === "user"
//                           ? "rounded-br-md bg-red-600 text-white shadow-red-950/40"
//                           : "rounded-bl-md border border-white/10 bg-white/[0.07] text-slate-200"
//                       }`}
//                     >
//                       {msg.text}
//                     </div>
//                   </div>
//                 ))}
//                 <div ref={bottomRef} />
//               </div>

//               <div className="border-t border-white/10 bg-black p-3">
//                 <div className="flex gap-2">
//                   <input
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     onKeyDown={(e) => e.key === "Enter" && send()}
//                     placeholder="Type your message..."
//                     className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-red-500/70"
//                   />

//                   <button
//                     onClick={send}
//                     className="grid h-12 w-12 place-items-center rounded-full bg-red-600 text-white transition hover:scale-105 hover:bg-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]"
//                     aria-label="Send message"
//                   >
//                     <FaPaperPlane size={16} />
//                   </button>
//                 </div>

//                 <a
//                   href="https://wa.me/8801234567890"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="mt-3 flex items-center justify-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 py-2 text-xs font-bold text-green-300 transition hover:bg-green-500 hover:text-white"
//                 >
//                   <FaWhatsapp /> Continue on WhatsApp
//                 </a>
//               </div>
//             </animated.div>
//           ),
//       )}

//       <animated.button
//         style={{
//           opacity: bubbleSpring.opacity,
//           transform: bubbleSpring.scale.to((s) => `scale(${s})`),
//           y: bubbleSpring.y,
//         }}
//         onClick={() => setOpen((value) => !value)}
//         className="fixed bottom-6 right-4 z-50 grid h-16 w-16 place-items-center rounded-full bg-red-600 text-3xl text-white shadow-[0_0_45px_rgba(239,68,68,0.5)] transition hover:scale-110 hover:bg-red-500 sm:right-6"
//         aria-label="Open chat"
//       >
//         {open ? <IoClose /> : <IoChatbubbleEllipses />}
//       </animated.button>
//     </>
//   );
// }

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#ececec]">
      <Navbar></Navbar>
      <HeroSection />
      <FeaturedProjects />
      <ExperienceTimeline />
      <SkillCard />
      <SocialConnectSection />

      {/* <ChatWidget /> */}
    </main>
  );
}
