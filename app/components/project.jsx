"use client";

import { useRouter } from "next/navigation";
import project from "../lib/project.json";

export default function FeaturedProjects() {
  const router = useRouter();

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
            stack development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {project.map((project) => (
            <article
              key={project.id}
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

                <p className="mt-3 text-sm leading-6 text-gray-400 line-clamp-4">
                  {project.description}
                </p>

                <div className="mt-7 space-y-3">
                  <button
                    onClick={() => router.push(`/projectInfo/${project.id}`)}
                    className="w-full cursor-pointer rounded-xl border border-red-500 py-3 text-sm font-bold text-red-400 transition-all duration-300 hover:bg-red-600 hover:text-white"
                  >
                    View More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
