import {
  Code2,
  Layout,
  Server,
  Brain,
  Database,
  Cloud,
  type LucideIcon,
} from "lucide-react";

type Accent = "violet" | "emerald" | "sky" | "rose" | "amber" | "indigo";

type SkillGroup = {
  title: string;
  Icon: LucideIcon;
  accent: Accent;
  skills: string[];
};

const ACCENTS: Record<Accent, { icon: string; badge: string }> = {
  violet: { icon: "text-violet-600 bg-violet-50", badge: "bg-violet-50 text-violet-700 ring-violet-200" },
  emerald: { icon: "text-emerald-600 bg-emerald-50", badge: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  sky: { icon: "text-sky-600 bg-sky-50", badge: "bg-sky-50 text-sky-700 ring-sky-200" },
  rose: { icon: "text-rose-600 bg-rose-50", badge: "bg-rose-50 text-rose-700 ring-rose-200" },
  amber: { icon: "text-amber-600 bg-amber-50", badge: "bg-amber-50 text-amber-700 ring-amber-200" },
  indigo: { icon: "text-indigo-600 bg-indigo-50", badge: "bg-indigo-50 text-indigo-700 ring-indigo-200" },
};

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    Icon: Code2,
    accent: "violet",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C#", "C", "Solidity"],
  },
  {
    title: "Frontend",
    Icon: Layout,
    accent: "sky",
    skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    Icon: Server,
    accent: "emerald",
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
    skills: ["PostgreSQL", "MongoDB", "Oracle", "Neo4j", "Supabase", "Firebase", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    Icon: Cloud,
    accent: "indigo",
    skills: ["AWS", "Microsoft Azure", "Docker", "Kubernetes", "GitHub Actions", "RabbitMQ", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 bg-zinc-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
            Stack
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-3 max-w-xl text-zinc-500">
            Tools and technologies I use to design, build, and ship software.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const a = ACCENTS[group.accent];
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.icon}`}>
                    <group.Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">{group.title}</h3>
                    <p className="text-xs text-zinc-400">{group.skills.length} technologies</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg px-2.5 py-1 text-xs font-medium ring-1 ${a.badge}`}
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
