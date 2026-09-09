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

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Text */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for full-time roles &middot; 2026
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Ahmed
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-base text-slate-600 sm:text-lg lg:mx-0">
              Full-Stack Developer &amp; AI Engineer building production software
              for Unilever, bKash and Olympic at Intelligent Machines. Software
              Engineering @ IUT, graduating 2026.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600 lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} className="text-blue-600" />
                Dhaka, Bangladesh
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 break-all transition-colors hover:text-blue-600"
              >
                <Mail size={16} className="shrink-0 text-blue-600" />
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Get in touch
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1 lg:justify-start">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-600 transition-colors hover:border-slate-300 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="h-52 w-52 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 p-1.5 sm:h-64 sm:w-64 lg:h-80 lg:w-80">
                <div className="h-full w-full overflow-hidden rounded-full bg-slate-100">
                  {!imageError ? (
                    <Image
                      src="/images/sani.png"
                      alt="Ahmed Alfey Sani"
                      width={320}
                      height={320}
                      priority
                      className="h-full w-full rounded-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
                      <span className="text-5xl font-bold text-slate-500">
                        AS
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <span className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-emerald-500" />
              <span className="absolute -bottom-2 -left-2 h-5 w-5 rounded-full bg-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
