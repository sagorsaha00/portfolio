"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaAws,
  FaSass,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiCanva,
  SiDaisyui,
  SiAntdesign,
  SiLangchain,
  SiShadcnui,
  SiMysql,
  SiDocker,
} from "react-icons/si";

const rowOne = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Core CSS", icon: FaCss3Alt, color: "text-blue-400" },
  { name: "SASS", icon: FaSass, color: "text-pink-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "React Native", icon: FaReact, color: "text-cyan-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "DaisyUI", icon: SiDaisyui, color: "text-purple-400" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "text-gray-200" },
  { name: "Ant Design", icon: SiAntdesign, color: "text-blue-500" },
];

const rowTwo = [
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: SiDocker, color: "text-sky-500" },
  { name: "LangChain", icon: SiLangchain, color: "text-green-300" },
  { name: "LangGraph", icon: SiLangchain, color: "text-blue-300" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
  { name: "Canva", icon: SiCanva, color: "text-cyan-400" },
];

function SkillItem({ skill }) {
  const Icon = skill.icon;

  const [style, api] = useSpring(() => ({
    scale: 1,
    y: 0,
    config: { tension: 260, friction: 18 },
  }));

  return (
    <animated.div
      onMouseEnter={() => api.start({ scale: 1.08, y: -8 })}
      onMouseLeave={() => api.start({ scale: 1, y: 0 })}
      style={style}
      className="mx-3 my-4 flex h-20 w-44 cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 backdrop-blur-xl transition hover:border-red-500/60 hover:bg-red-500/10"
    >
      <div
        className={`grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-2xl ${skill.color}`}
      >
        <Icon />
      </div>

      <div>
        <h3 className="text-sm font-black text-white">{skill.name}</h3>
        <p className="mt-1 text-xs text-gray-500">Technology</p>
      </div>
    </animated.div>
  );
}

export default function SkillCard() {
  return (
    <section
      id="skills"
      className="overflow-hidden bg-[#0f0303] px-5 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
          My Skills
        </p>

        <h2 className="text-4xl font-black sm:text-5xl">
          Technologies I’m Learning
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
          These are the technologies I practice while learning frontend and MERN
          stack development.
        </p>

        <div className="relative mt-14 space-y-6">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0f0303] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0f0303] to-transparent" />

          <Marquee speed={40} gradient={false} pauseOnHover>
            {rowOne.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </Marquee>

          <Marquee speed={35} gradient={false} pauseOnHover direction="right">
            {rowTwo.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
