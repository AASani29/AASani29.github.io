"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Award,
} from "lucide-react";

const CONTACT_EMAIL = "ahmedalfey@iut-dhaka.edu";

const socials = [
  { name: "GitHub", href: "https://github.com/AASani29", Icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-alfey-sani/",
    Icon: Linkedin,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=Qtlp6LYAAAAJ&hl=en",
    Icon: GraduationCap,
  },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Ahmed-Sani-7?ev=hdr_xprf",
    Icon: BookOpen,
  },
];

const highlights = [
  { value: "4 Papers", label: "ACL · AACL · ICCIT" },
  { value: "Microservices", label: "Spring Boot + K8s" },
  { value: "Production AI", label: "Unilever · bKash" },
  { value: "IUT '26", label: "Software Engineering" },
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-950 pt-28 pb-20 sm:pt-36 sm:pb-24 flex items-center"
    >
      {/* Background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-tr from-violet-600/20 via-indigo-600/15 to-emerald-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Text */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>Available for Full-Time Roles · 2026</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6.5xl leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                  Ahmed Alfey Sani
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-zinc-300 max-w-xl mx-auto lg:mx-0">
                Software Engineer &amp; AI Researcher building scalable microservices,
                production computer vision, and evaluated LLM systems.
              </p>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-lg mx-auto lg:mx-0">
              Shipped production platforms for <strong className="text-zinc-200">Unilever</strong>,{" "}
              <strong className="text-zinc-200">bKash</strong>, and <strong className="text-zinc-200">Olympic</strong> at
              Intelligent Machines. Authored 4 accepted papers in Bengali LLM hallucination and clinical NLP.
            </p>

            {/* Location & Email */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-zinc-400">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1">
                <MapPin size={13} className="text-violet-400" />
                Dhaka, Bangladesh
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300 hover:text-white hover:border-violet-500/50 transition-colors"
              >
                <Mail size={13} className="text-violet-400" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:bg-violet-500 hover:scale-[1.02]"
              >
                Explore Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all hover:border-zinc-500 hover:text-white"
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Image / Showcase Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glow & rings */}
              <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-violet-600/40 via-indigo-600/20 to-emerald-500/30 blur-xl opacity-75 animate-pulse" />

              {/* Main Card Frame */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-zinc-900/90 p-3 shadow-2xl backdrop-blur-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-3 text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-zinc-500">engineer.profile.active</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE
                  </span>
                </div>

                {/* Portrait Container with inner effects */}
                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-zinc-950 border border-white/10">
                  {!imageError ? (
                    <Image
                      src="/images/sani.png"
                      alt="Ahmed Alfey Sani"
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-5xl font-bold text-zinc-600">
                      AS
                    </div>
                  )}

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

                  {/* Card bottom banner */}
                  <div className="absolute bottom-3 inset-x-3 rounded-xl bg-zinc-900/85 border border-white/15 p-2.5 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Ahmed Alfey Sani</p>
                      <p className="text-[10px] text-zinc-400">Software &amp; AI Engineer</p>
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                      IUT &apos;26
                    </span>
                  </div>
                </div>

                {/* Highlights row */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-left">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-2 px-3"
                    >
                      <div className="text-xs font-bold text-zinc-100">{h.value}</div>
                      <div className="text-[10px] text-zinc-400">{h.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-3 -left-3 hidden sm:flex items-center gap-2 rounded-2xl border border-violet-500/40 bg-zinc-900/95 px-3 py-2 shadow-xl backdrop-blur-xl">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <Cpu size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">Spring Boot &amp; K8s</div>
                  <div className="text-[9px] text-violet-300">Autoscaling Architecture</div>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-zinc-900/95 px-3 py-2 shadow-xl backdrop-blur-xl">
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Award size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-tight">3rd Place @ ACL BioNLP</div>
                  <div className="text-[9px] text-emerald-300">Mental Health LLM Benchmark</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
