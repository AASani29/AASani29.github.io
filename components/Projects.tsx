"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Server,
  Brain,
  Smartphone,
  Eye,
} from "lucide-react";
import ProjectImage from "./ProjectImage";

type Category = "all" | "featured" | "microservices" | "ai" | "mobile";

type Project = {
  title: string;
  year: string;
  tagline: string;
  description: string;
  category: ("featured" | "microservices" | "ai" | "mobile")[];
  tech: string[];
  github: string | null;
  live: string | null;
  image: string;
  architectureHighlights?: string[];
};

const allProjects: Project[] = [
  {
    title: "TicketDaata",
    year: "2026",
    tagline: "Microservices Resale Marketplace with HPA Autoscaling",
    description:
      "A ticket resale marketplace built as an end-to-end Spring Boot microservices system — deployed to Kubernetes with CPU-based horizontal pod autoscaling (HPA), automated GitHub Actions CI/CD publishing to GHCR, and a Prometheus/Grafana golden-signals observability stack. Features 15-minute TTL order reservations and zero-downtime verified pod replacement.",
    category: ["featured", "microservices"],
    tech: [
      "Java 17",
      "Spring Boot 3.5",
      "Spring Cloud Gateway",
      "Kubernetes",
      "Docker",
      "RabbitMQ",
      "MongoDB",
      "React 19",
      "Prometheus",
      "Grafana",
      "GHCR CI/CD",
    ],
    github: "https://github.com/AASani29/TicketDaata",
    live: null,
    image: "/images/ticketdaata.jpg",
    architectureHighlights: [
      "Service-to-service DNS resolution in K8s (no Eureka bottleneck)",
      "RabbitMQ event-driven status sync with in-memory fallback",
      "Grafana pre-provisioned dashboard: p95 latency, JVM heap, CPU",
    ],
  },
  {
    title: "NutriAI",
    year: "2026",
    tagline: "HealthTech & Weather-Adaptive Nutrition Engine",
    description:
      "A hyper-localized nutrition platform designed for Bangladesh, integrating daily bazaar price fluctuations, real-time weather-adjusted food spoilage models, USDA FoodData API, and household inventory. Includes OCR receipt scanning, neighborhood surplus food sharing, and an interactive Gemini AI assistant.",
    category: ["featured", "ai"],
    tech: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Google Gemini AI",
      "BullMQ",
      "Cloudinary",
      "Leaflet Maps",
    ],
    github: "https://github.com/AASani29/NutriAI",
    live: null,
    image: "/images/nutriai.jpg",
    architectureHighlights: [
      "Top 20 Finalist & 4th Place (Health) at MillionX AI Build-A-Thon 2026",
      "Dynamic humidity/temperature spoilage calculation with OpenWeather API",
      "Async OCR receipt processing with BullMQ + Redis queues",
    ],
  },
  {
    title: "KalKorbo",
    year: "2025",
    tagline: "Collaborative Issue Tracker with AI Voice Commands",
    description:
      "Real-time team project and issue management platform with AI-powered voice commands, collaborative Kanban boards, and live presence tracking. Features enterprise-grade authentication, interactive calendar timelines, and GitHub repository integration.",
    category: ["featured", "mobile"],
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "WebSockets",
      "Tailwind CSS",
    ],
    github: "https://github.com/AASani29/KalKorbo",
    live: "https://kalkorbo.netlify.app",
    image: "/images/IMG-20260106-WA0011(1).jpg",
    architectureHighlights: [
      "Sub-100ms real-time multi-user presence via Supabase Realtime",
      "Custom voice recognition pipeline mapping speech to task actions",
    ],
  },
  {
    title: "SoulAce",
    year: "2024",
    tagline: "AI-Powered Mental Health Assessment & Support",
    description:
      "Full-stack mental health platform providing real-time psychological assessments, emotional sentiment analysis, and personalized coping recommendations built on the MERN stack with automated AI API integrations.",
    category: ["featured", "ai"],
    tech: ["React", "Node.js", "Express", "MongoDB", "AI/ML", "Redux"],
    github: "https://github.com/AASani29/Soulace",
    live: "https://soulace.onrender.com/",
    image: "/images/Soulace.png",
  },
  {
    title: "Financial RAG Pipeline",
    year: "2024",
    tagline: "Hybrid Retrieval with Dense & Sparse Vector Search",
    description:
      "Three-stage question-answering system over dense financial filings (10-K, 10-Q). Employs hybrid retrieval combining BM25 sparse keyword matching and SentenceTransformer dense vector search with FAISS index re-ranking, evaluated via ablation studies.",
    category: ["ai"],
    tech: [
      "Python",
      "Sentence Transformers",
      "FAISS",
      "BM25",
      "Streamlit",
      "LangChain",
    ],
    github: "https://github.com/AASani29/RAG-PipeLine-for-Financial-Data-",
    live: "https://ragpipelineforfinancialdatabysani.streamlit.app/",
    image: "/images/rag.png",
  },
  {
    title: "Blingo",
    year: "2024",
    tagline: "Bengali Language Learning with Generative AI Tutoring",
    description:
      "Bengali language-learning platform combining RAG-based AI interactive tutoring, automated phonetics evaluation, and real-time collaboration features designed for second-language learners.",
    category: ["ai"],
    tech: ["React", "Node.js", "RAG", "Bengali NLP", "Vector DB"],
    github: "https://github.com/AASani29/Blingo",
    live: "https://blingo.onrender.com/",
    image: "/images/blingo.png",
  },
  {
    title: "EXPENSIO",
    year: "2025",
    tagline: "Private Offline-First Expense Tracker with Biometrics",
    description:
      "Cross-platform mobile expense tracker with smart budget allocations, biometric device authentication, multi-currency conversions, and local SQLite encrypted storage ensuring 100% data privacy.",
    category: ["mobile"],
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "Local Auth"],
    github: "https://github.com/AASani29/expensio",
    live: null,
    image: "/images/expensio.png",
  },
  {
    title: "Daekho",
    year: "2025",
    tagline: "Smart Movie Discovery & Dynamic Genre Filter Engine",
    description:
      "React Native cinema discovery application featuring personalized watchlists, intelligent exclusion rules, TMDB API synchronization, and real-time user ratings with Firebase cloud sync.",
    category: ["mobile"],
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "TMDB API"],
    github: "https://github.com/AASani29/Daekho",
    live: null,
    image: "/images/Daekho.png",
  },
  {
    title: "TaskLumina",
    year: "2024",
    tagline: "Automated Task Scheduler with Java Spring Boot",
    description:
      "Smart task prioritizer and automated scheduler powered by Spring Boot backend services, scheduling cron algorithms, and NLP-assisted task parsing.",
    category: ["microservices"],
    tech: ["Java", "Spring Boot", "REST APIs", "NLP", "PostgreSQL"],
    github: "https://github.com/AASani29/JavaFest-TaskLumina",
    live: null,
    image: "/images/tasklumina.png",
  },
  {
    title: "SignAll",
    year: "2024",
    tagline: "Real-Time Sign Language Translation via WebCam",
    description:
      "Computer vision application that detects and translates sign language hand gestures into synthesized text in real-time to facilitate accessible communication for individuals with hearing speech impairments.",
    category: ["ai"],
    tech: ["Python", "FastAPI", "OpenCV", "MediaPipe", "PyTorch"],
    github: "https://github.com/hasin023/sign-all_DP1",
    live: null,
    image: "/images/signall.png",
  },
  {
    title: "MediEase",
    year: "2024",
    tagline: "Healthcare Management & Clinic Workflow System",
    description:
      "Comprehensive hospital management solution covering patient digital medical records, doctor appointment scheduling, and role-based staff administration.",
    category: ["microservices"],
    tech: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/hasin023/MediEase",
    live: null,
    image: "/images/mediease.png",
  },
];

const categoryTabs: { id: Category; label: string; icon: any }[] = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "featured", label: "Featured", icon: Sparkles },
  { id: "microservices", label: "Cloud & Backend", icon: Server },
  { id: "ai", label: "AI & RAG", icon: Brain },
  { id: "mobile", label: "Apps & Web", icon: Smartphone },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter projects
  const filtered = allProjects.filter((p) =>
    activeTab === "all" ? true : p.category.includes(activeTab as any)
  );

  // Reset index on tab change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const total = filtered.length;
  const current = filtered[currentIndex] || filtered[0];
  const nextIndex = (currentIndex + 1) % total;
  const nextProject = filtered[nextIndex];

  const goToNext = useCallback(() => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, total]);

  const goToPrev = useCallback(() => {
    if (isAnimating || total <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 300);
  }, [isAnimating, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch Swipe Handling
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-zinc-950 py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-3">
              <Sparkles size={13} />
              Interactive Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Work &amp; Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg">
              Explore production architectures, distributed systems, and applied NLP.
              Swipe or use controls to browse through projects.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono font-semibold text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="text-violet-400 font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(total).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all active:scale-95 shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next project"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-violet-600 hover:border-violet-500 transition-all active:scale-95 shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  active
                    ? "bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-[1.02]"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-white/10"
                }`}
              >
                <Icon size={13} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Carousel Viewport: Main Card + Next Project Preview Peek */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="grid gap-6 lg:grid-cols-[1fr_300px] items-stretch select-none"
        >
          {/* Main Active Project Card */}
          <div
            className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-zinc-900/90 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
              isAnimating ? "opacity-85 scale-[0.995]" : "opacity-100 scale-100"
            }`}
          >
            <div className="grid lg:grid-cols-2 h-full">
              {/* Media Viewport */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[320px] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 bg-zinc-950">
                <ProjectImage
                  src={current.image}
                  alt={`${current.title} screenshot`}
                  title={current.title}
                />
                {/* Year tag */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="rounded-full bg-zinc-950/80 border border-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    {current.year}
                  </span>
                  {current.category.includes("featured") && (
                    <span className="rounded-full bg-violet-600/90 text-white px-2.5 py-1 text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                      <Sparkles size={11} /> Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Information Viewport */}
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-violet-400 mb-1">
                    <span>PROJECT {String(currentIndex + 1).padStart(2, "0")}</span>
                    <span className="text-zinc-500 font-sans">Swipe to navigate</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1">
                    {current.tagline}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Architecture Highlights bullet points if available */}
                  {current.architectureHighlights && (
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs space-y-1.5 text-zinc-300">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-violet-300 font-bold block mb-1">
                        System Highlights
                      </span>
                      {current.architectureHighlights.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <span className="text-violet-400 mt-0.5">•</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="mt-5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 block mb-2 font-mono">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {current.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                  {current.github && (
                    <a
                      href={current.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/10 hover:border-violet-500/50"
                    >
                      <Github size={15} />
                      View Codebase
                    </a>
                  )}
                  {current.live && (
                    <a
                      href={current.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-violet-600/30 transition-all hover:bg-violet-500"
                    >
                      <ExternalLink size={15} />
                      Live Application
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Next Project Peek / Preview Card (Desktop) */}
          <div
            onClick={goToNext}
            className="hidden lg:flex flex-col justify-between rounded-3xl border border-white/10 bg-zinc-900/60 p-5 cursor-pointer group hover:border-violet-500/50 hover:bg-zinc-900/90 transition-all shadow-xl backdrop-blur-md relative overflow-hidden"
          >
            {/* Header of preview card */}
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                <span className="font-mono text-violet-400 font-semibold">UP NEXT</span>
                <span className="flex items-center gap-1 text-[11px] group-hover:text-violet-300 transition-colors">
                  View <ChevronRight size={14} />
                </span>
              </div>

              {/* Next preview image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mb-4 bg-zinc-950">
                <ProjectImage
                  src={nextProject.image}
                  alt={nextProject.title}
                  title={nextProject.title}
                />
                <span className="absolute bottom-2 right-2 rounded-md bg-zinc-950/80 px-2 py-0.5 text-[10px] font-bold text-white">
                  {nextProject.year}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-xs text-emerald-400 font-medium mt-0.5">
                {nextProject.tagline}
              </p>
              <p className="text-xs text-zinc-400 line-clamp-3 mt-2 leading-relaxed">
                {nextProject.description}
              </p>
            </div>

            {/* Bottom prompt */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-zinc-400 group-hover:text-white">
              <span>Click to advance</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600/20 text-violet-300 group-hover:bg-violet-600 group-hover:text-white transition-all">
                <ChevronRight size={15} />
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators / Progress track */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filtered.map((p, idx) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Jump to ${p.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-violet-500 shadow-sm shadow-violet-500/50"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
