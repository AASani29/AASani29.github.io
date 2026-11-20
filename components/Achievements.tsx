import { Trophy, Award, Users, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "2nd Runner-Up — Dhaka Divisional Hackathon",
    event: "Technocrats V.2, organised by IIEC (2024)",
    description:
      "Placed 2nd runner-up in the divisional round of the national hackathon.",
    accent: "text-amber-600 bg-amber-50",
  },
  {
    icon: Award,
    title: "Top 24 Finalist — KUET BitFest Hackathon 2025",
    event: "Selected from 200+ teams nationwide",
    description:
      "Reached the top 24 out of 200+ teams at KUET's annual CSE festival.",
    accent: "text-violet-600 bg-violet-50",
  },
  {
    icon: Users,
    title: "FGD Round — Battle of Minds 2024",
    event: "BAT business competition, Team Silicon Suits",
    description:
      "Advanced to the top 35 out of 1,250 teams in the competition.",
    accent: "text-indigo-600 bg-indigo-50",
  },
  {
    icon: Code,
    title: "Multiple Competition Finalist",
    event: "Programming & business competitions",
    description:
      "Finalist in Code Catalyst, Admania OVC, and MindSparks.",
    accent: "text-emerald-600 bg-emerald-50",
  },
];

const stats = [
  { value: "10+", label: "Competitions entered" },
  { value: "3", label: "Top placements" },
  { value: "200+", label: "Teams outperformed" },
  { value: "4", label: "Certificates earned" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-20 bg-zinc-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
            Honours
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Achievements
          </h2>
          <p className="mt-3 max-w-xl text-zinc-500">
            Recognition from hackathons, programming contests, and business competitions.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${a.accent}`}>
                <a.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-zinc-900">{a.title}</h3>
                <p className="mt-0.5 text-xs font-medium text-zinc-400">{a.event}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{a.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-6 text-center">
              <div className="text-3xl font-bold text-zinc-900">{s.value}</div>
              <div className="mt-1 text-xs text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
