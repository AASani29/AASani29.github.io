import { GraduationCap, Award } from "lucide-react";

const priorEducation = [
  {
    school: "Dhaka College",
    level: "HSC",
    year: "2021",
    result: "GPA 5.00 / 5.00",
    accent: "text-purple-600",
  },
  {
    school: "Ideal School and College",
    level: "SSC",
    year: "2019",
    result: "GPA 5.00 / 5.00",
    accent: "text-emerald-600",
  },
];

const Education = () => {
  return (
    <section id="education" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Education
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Academic background and qualifications.
          </p>
        </div>

        {/* Current */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-50 via-blue-50 to-emerald-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                <GraduationCap size={14} />
                Current
              </span>
              <h3 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
                B.Sc. in Software Engineering
              </h3>
              <p className="mt-1 text-slate-600">
                Islamic University of Technology (IUT)
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">
                2022 – 2026 (expected)
              </p>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
              <GraduationCap className="h-10 w-10 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Prior */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {priorEducation.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                  {edu.level}
                </span>
                <span className="text-sm text-slate-400">{edu.year}</span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                {edu.school}
              </h3>
              <p
                className={`mt-2 inline-flex items-center gap-2 text-sm font-semibold ${edu.accent}`}
              >
                <Award size={15} />
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
