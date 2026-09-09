import { Trophy, Award, Users, Code } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "2nd Runner-Up — Dhaka Divisional Hackathon",
    event: "Technocrats V.2, organised by IIEC (2024)",
    description:
      "Placed 2nd runner-up in the divisional round of the national hackathon.",
    color: "text-yellow-600",
  },
  {
    icon: Award,
    title: "Top 24 Finalist — KUET BitFest Hackathon 2025",
    event: "Selected from 200+ teams nationwide",
    description:
      "Reached the top 24 out of 200+ teams at KUET's annual CSE festival.",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "FGD Round — Battle of Minds 2024",
    event: "BAT business competition, Team Silicon Suits",
    description:
      "Advanced to the top 35 out of 1,250 teams in the competition.",
    color: "text-purple-600",
  },
  {
    icon: Code,
    title: "Multiple Competition Finalist",
    event: "Programming & business competitions",
    description:
      "Finalist in Code Catalyst, Admania OVC, and MindSparks.",
    color: "text-emerald-600",
  },
];

const stats = [
  { value: "10+", label: "Competitions entered" },
  { value: "3", label: "Podium / top placements" },
  { value: "200+", label: "Teams outperformed" },
  { value: "4", label: "Professional certificates" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Achievements
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Recognition from hackathons, programming contests, and business
            competitions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    {achievement.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {achievement.event}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-white sm:grid-cols-4 sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-1 text-sm text-blue-50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
