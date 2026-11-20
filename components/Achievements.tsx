"use client";

import { Trophy, Award, Medal, Sparkles, ExternalLink, Flag } from "lucide-react";

type Achievement = {
  title: string;
  rank: string;
  event: string;
  year: string;
  category: string;
  description: string;
  badgeColor: string;
  icon: any;
};

const achievements: Achievement[] = [
  {
    title: "3rd Place (All-Class) & 4th of 21 Teams",
    rank: "3rd Place Podium",
    event: "PsyDefDetect Shared Task, BioNLP @ ACL 2026",
    year: "2026",
    category: "International AI Benchmark",
    description:
      "Podium finish among international NLP teams for psychological defense-mechanism classification using Qwen3-8B iterative imbalance-aware QLoRA with +7.7 Macro-F1 over baseline.",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    icon: Trophy,
  },
  {
    title: "Top 20 Finalist & 4th Place (Health Category)",
    rank: "4th Place (Health)",
    event: "MillionX National AI Build-A-Thon 2026",
    year: "2026",
    category: "National Hackathon",
    description:
      "Built NutriAI — a localized diet generator bridging wet-market price volatility, live humidity/weather spoilage models, and OCR grocery scanning. Top 20 out of hundreds nationwide.",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    icon: Award,
  },
  {
    title: "Top 24 Finalist from 200+ Teams Nationwide",
    rank: "Top 24 of 200+",
    event: "KUET BitFest Hackathon 2025",
    year: "2025",
    category: "National Hackathon",
    description:
      "Advanced to the final round of 24 teams out of 200+ universities and software teams nationwide at KUET's premier CSE festival.",
    badgeColor: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    icon: Medal,
  },
  {
    title: "2nd Runner-Up — Dhaka Divisional Round",
    rank: "2nd Runner-Up",
    event: "Technocrats V.2 Hackathon, organized by IIEC",
    year: "2024",
    category: "Divisional Podium",
    description:
      "Placed 2nd runner-up in the divisional round of the national hackathon for rapid full-stack product prototyping under tight time constraints.",
    badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    icon: Trophy,
  },
  {
    title: "Finalist — Code Catalyst Refactoring Contest",
    rank: "Finalist",
    event: "IUT 11th ICT Fest (2024)",
    year: "2024",
    category: "Software Engineering",
    description:
      "Finalist in code refactoring, clean architecture implementation, design patterns, and algorithmic performance optimization.",
    badgeColor: "border-rose-500/30 bg-rose-500/10 text-rose-300",
    icon: Sparkles,
  },
];

const stats = [
  { value: "5", label: "Podiums & Finalist Honors" },
  { value: "ACL '26", label: "Top Global AI Benchmark" },
  { value: "220+", label: "Teams Competed Against" },
  { value: "Top 4", label: "National AI Build-A-Thon" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-20 bg-zinc-950 py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-3">
            <Trophy size={13} />
            Honors &amp; Awards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Achievements &amp; Recognitions
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            Podium finishes and finalist recognitions from competitive AI benchmarks, national hackathons, and software engineering festivals.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="space-y-4">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-5 sm:p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/90"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-200 group-hover:scale-105 group-hover:bg-violet-600/20 group-hover:text-violet-300 transition-all">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold ${item.badgeColor}`}>
                          {item.rank}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">
                          {item.year} · {item.category}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-violet-400 mt-0.5">
                        {item.event}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-zinc-900/80 p-5 text-center backdrop-blur-md"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-zinc-400 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
