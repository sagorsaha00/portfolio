"use client";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineSparkles } from "react-icons/hi2";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import projects from "../../lib/project.json";
import Navbar from '../../components/navbar'

export default function ProjectInfo() {
  const params = useParams();

  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#0f0303] px-5 py-20 text-white">
        <Navbar></Navbar>
        {/* ambient glows, matches hero/navbar palette */}
        <div className="pointer-events-none absolute left-[-10%] top-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[600px] h-[400px] w-[400px] rounded-full bg-red-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          {/* BACK BUTTON */}
          {/* <Link
            href="/"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/40 hover:text-white"
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link> */}

          {/* HERO IMAGE WITH OVERLAID TITLE */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <img
              src={project.image}
              alt={project.title}
              className="h-[320px] w-full object-cover md:h-[440px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0303] via-[#0f0303]/50 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300 backdrop-blur-xl">
                Featured Project
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                {project.title}
              </h1>

              {project.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CONTENT GRID */}
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* MAIN COLUMN */}
            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-8">
                <h2 className="mb-4 text-xl font-black text-white">Overview</h2>
                <p className="leading-8 text-zinc-400">{project.description}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-orange-400/20 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-red-500/20">
                    <HiOutlineLightBulb />
                  </span>
                  <h2 className="text-xl font-black text-white">Challenges</h2>
                </div>
                <p className="leading-8 text-zinc-400">{project.challenges}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-orange-400/20 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-lg shadow-red-500/20">
                    <HiOutlineSparkles />
                  </span>
                  <h2 className="text-xl font-black text-white">
                    Future Plans
                  </h2>
                </div>
                <p className="leading-8 text-zinc-400">{project.futurePlans}</p>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* ACTIONS */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <div className="flex flex-col gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_30px_-6px_rgba(239,68,68,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-6px_rgba(239,68,68,0.75)]"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
                      <FaExternalLinkAlt className="relative z-10 text-xs" />
                      <span className="relative z-10">Live Demo</span>
                    </a>

                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-bold text-zinc-200 transition-all duration-300 hover:border-orange-400/40 hover:text-white"
                    >
                      <FaGithub />
                      View Source
                    </a>
                  </div>
                </div>

                {/* TECH STACK */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
                  <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-orange-400">
                    Tech Stack
                  </h2>

                  <ul className="space-y-2.5">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center gap-2.5 text-sm text-zinc-300"
                      >
                        <FaCheckCircle
                          className="shrink-0 text-orange-400/80"
                          size={13}
                        />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
