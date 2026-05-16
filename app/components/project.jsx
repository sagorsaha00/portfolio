"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TiLES BD",
    image: "/project-1.png",
    description:
      "A modern responsive portfolio website with animation, skill showcase, projects, and contact section.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    live: "https://tiels.vercel.app",
    source: "https://github.com/sagorsaha00/Tiels",
  },
  {
    title: "Wallet TRack",
    image: "/project-2.png",
    description:
      "A React.js-based AI dashboard that uses LangGraph, LangChain, and Tavily to fetch real-time data. The system includes a supervisor agent that understands user input, groups tasks, and routes them to specialized AI agents for accurate and intelligent responses.",

    tags: [
      "React.js",
      "LangGraph",
      "LangChain",
      "Tavily",
      "Supervisor Agent",
      "AI Agents",
    ],
    live: "https://expense-tracker-client-server.vercel.app",
    source: "https://github.com/sagorsaha00/expense_tracker_client_server",
  },
  {
    title: "AI Image EDIT",
    image: "/project-3.png",
    description:
      "A React-based image editing application that leverages AI to enhance and modify images with ease. Users can upload their photos and utilize various AI-powered tools to apply filters, adjust colors, remove backgrounds, and perform other edits seamlessly. The application provides an intuitive interface for users to enhance their images effortlessly.",
    tags: ["NEXT JS", "GOOGLE API", "AI Image Editing"],
    live: "https://image-ai-meoy.vercel.app",
    source: "https://github.com/sagorsaha00/Image-ai",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#120303] px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-500">
            Portfolio
          </p>

          <h2 className="text-4xl font-black sm:text-5xl">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400">
            Some practice projects I built while learning frontend and MERN
            stack development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] transition duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(239,68,68,0.22)]"
            >
              <div className="h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-black">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-xs font-black transition hover:bg-red-500"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-xs font-black transition hover:border-red-500 hover:text-red-400"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
