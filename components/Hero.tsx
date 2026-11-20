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
  Download,
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

const stats = [
  { value: "4", label: "Published Papers" },
  { value: "2+", label: "Years Building" },
  { value: "15+", label: "Projects Shipped" },
  { value: "ACL", label: "Top Venue" },
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-zinc-950"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 pb-20 pt-28 sm:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
          {/* Text side */}
          <div className="space-y-7">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              Open to full-time roles · 2026
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Ahmed Alfey
                <br />
                <span className="text-violet-400">Sani</span>
              </h1>
              <p className="text-lg font-medium text-zinc-400 sm:text-xl">
                Full-Stack Engineer · AI Researcher · IUT &apos;26
              </p>
            </div>

            <p className="max-w-lg text-base leading-relaxed text-zinc-400">
              Building production AI and full-stack systems for{" "}
              <span className="font-medium text-zinc-200">Unilever</span>,{" "}
              <span className="font-medium text-zinc-200">bKash</span> and{" "}
              <span className="font-medium text-zinc-200">Olympic</span> at
              Intelligent Machines. Published researcher in NLP at{" "}
              <span className="font-medium text-zinc-200">ACL, AACL, ICCIT</span>.
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-violet-400" />
                Dhaka, Bangladesh
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-zinc-300"
              >
                <Mail size={14} className="text-violet-400" />
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all hover:border-zinc-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-all hover:border-zinc-600 hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Photo + stats */}
          <div className="flex flex-col items-center gap-8 lg:items-end">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/40 to-indigo-500/40 blur-sm" />
              <div className="relative h-56 w-56 overflow-hidden rounded-2xl ring-1 ring-zinc-700 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                {!imageError ? (
                  <Image
                    src="/images/sani.png"
                    alt="Ahmed Alfey Sani"
                    fill
                    priority
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-800">
                    <span className="text-5xl font-bold text-zinc-500">AS</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-center"
                >
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-1.5 text-zinc-600">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
