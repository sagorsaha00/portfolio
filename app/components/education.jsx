"use client";

import { FaUserGraduate } from "react-icons/fa";

const education = [
  {
    title: "Bachelor of Arts (Degree)",
    institution: "Gouripur M.F.R Degree Collage, Bangladesh",
    date: "2024 - Present",
    points: [
      "Currently studying Bachelor of Arts (Degree), 2nd Year.",
      "Learning web development alongside academic studies.",
      "Continuously improving problem-solving and software development skills through real-world projects.",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Gouripur M.F.R Degree Collage",
    date: "2021",
    points: [
      "Completed Higher Secondary education.",
      "Built a strong academic foundation and communication skills.",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#120303] px-5 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-400">
            🎓 Education
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Academic{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            My academic journey reflects continuous learning, dedication, and a
            passion for technology while building real-world software projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-red-500 via-orange-500 to-transparent"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="relative flex items-start gap-8">
                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 shadow-[0_0_30px_rgba(239,68,68,.45)]">
                  <FaUserGraduate className="text-xl text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,.25)]">
                  <span className="inline-block rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
                    {item.date}
                  </span>

                  <h3 className="mt-5 text-3xl font-bold">{item.title}</h3>

                  <p className="mt-2 text-lg text-gray-400">
                    {item.institution}
                  </p>

                  <ul className="mt-6 space-y-4">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-red-500"></span>

                        <span className="leading-7 text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
