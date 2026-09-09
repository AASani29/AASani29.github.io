import {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
  type LucideIcon,
} from "lucide-react";

type Accent = "blue" | "emerald" | "violet" | "rose" | "amber" | "sky";

type SkillGroup = {
  title: string;
  Icon: LucideIcon;
  accent: Accent;
  skills: string[];
};

const ACCENTS: Record<Accent, { tile: string; pill: string }> = {
  blue: {
    tile: "bg-blue-50 text-blue-600",
    pill: "hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700",
  },
  emerald: {
    tile: "bg-emerald-50 text-emerald-600",
    pill: "hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700",
  },
  violet: {
    tile: "bg-violet-50 text-violet-600",
    pill: "hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700",
  },
  rose: {
    tile: "bg-rose-50 text-rose-600",
    pill: "hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700",
  },
  amber: {
    tile: "bg-amber-50 text-amber-600",
    pill: "hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700",
  },
  sky: {
    tile: "bg-sky-50 text-sky-600",
    pill: "hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700",
  },
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    Icon: Code2,
    accent: "blue",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "C", "Solidity"],
  },
  {
    title: "Frontend",
    Icon: Layout,
    accent: "emerald",
    skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    Icon: Server,
    accent: "violet",
    skills: ["Node.js", "Express.js", "Spring Boot", "FastAPI", ".NET"],
  },
  {
    title: "AI / ML",
    Icon: Brain,
    accent: "rose",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "RAG", "LLM Fine-tuning", "NLP"],
  },
  {
    title: "Databases",
    Icon: Database,
    accent: "amber",
    skills: ["PostgreSQL", "MongoDB", "Oracle", "Neo4j", "Supabase", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    Icon: Cloud,
    accent: "sky",
    skills: ["AWS", "Microsoft Azure", "Docker", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Tools and technologies I use to design, build, and ship software.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const accent = ACCENTS[group.accent];
            return (
              <div
                key={group.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${accent.tile}`}
                  >
                    <group.Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                      {group.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {group.skills.length} technologies
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-sm font-medium text-slate-700 shadow-sm transition-colors ${accent.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
