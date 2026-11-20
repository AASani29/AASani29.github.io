import { GraduationCap, Award } from "lucide-react";

const priorEducation = [
  {
    school: "Dhaka College",
    level: "HSC",
    year: "2021",
    result: "GPA 5.00 / 5.00",
    accent: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    school: "Ideal School and College",
    level: "SSC",
    year: "2019",
    result: "GPA 5.00 / 5.00",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const Education = () => {
  return (
    <section id="education" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
            Background
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Education
          </h2>
          <p className="mt-3 max-w-xl text-zinc-500">
            Academic background and qualifications.
          </p>
        </div>

        {/* Current */}
        <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-950">
          <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 ring-1 ring-violet-500/20">
                <GraduationCap size={13} />
                Currently enrolled
              </span>
              <h3 className="mt-4 text-2xl font-bold text-white">
                B.Sc. in Software Engineering
              </h3>
              <p className="mt-1 text-zinc-400">
                Islamic University of Technology (IUT)
              </p>
              <p className="mt-2 text-sm text-zinc-500">2022 – 2026 (expected)</p>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-zinc-800">
              <GraduationCap className="h-10 w-10 text-violet-400" />
            </div>
          </div>
        </div>

        {/* Prior */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {priorEducation.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600">
                  {edu.level}
                </span>
                <span className="text-sm text-zinc-400">{edu.year}</span>
              </div>
              <h3 className="mt-3 text-base font-bold text-zinc-900">
                {edu.school}
              </h3>
              <p className={`mt-2 inline-flex items-center gap-1.5 text-sm font-semibold ${edu.accent}`}>
                <Award size={14} />
                {edu.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
