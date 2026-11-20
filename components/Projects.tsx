"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Layers,
  Sparkles,
  Server,
  Brain,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

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
  badge?: string;
};

const allProjects: Project[] = [
  {
    title: "TicketDaata",
    year: "2026",
    tagline: "Microservices Resale Marketplace with HPA Autoscaling",
    description:
      "End-to-end Spring Boot microservices platform deployed to Kubernetes with CPU-based HPA autoscaling, RabbitMQ event-driven synchronization, automated GitHub Actions CI/CD to GHCR, and a Prometheus/Grafana observability stack with 15-minute TTL order reservation.",
    category: ["featured", "microservices"],
    tech: ["Java 17", "Spring Boot 3.5", "Kubernetes", "Docker", "RabbitMQ", "Prometheus", "Grafana"],
    github: "https://github.com/AASani29/TicketDaata",
    live: null,
    image: "/images/ticketdaata.jpg",
    badge: "K8s Microservices",
  },
  {
    title: "NutriAI",
    year: "2026",
    tagline: "HealthTech & Weather-Adaptive Nutrition Engine",
    description:
      "Hyper-localized nutrition intelligence platform for Bangladesh. Features real-time weather-adjusted food spoilage models with OpenWeather, USDA FoodData API integration, async OCR receipt processing via BullMQ + Redis, and Gemini AI assistant.",
    category: ["featured", "ai"],
    tech: ["React 19", "Node.js", "PostgreSQL", "Prisma", "Google Gemini AI", "BullMQ", "Redis"],
    github: "https://github.com/AASani29/NutriAI",
    live: null,
    image: "/images/nutriai.jpg",
    badge: "MillionX Finalist",
  },
  {
    title: "KalKorbo",
    year: "2025",
    tagline: "Collaborative Issue Tracker with AI Voice Commands",
    description:
      "Real-time team project and issue management platform with sub-100ms multi-user presence, collaborative Kanban boards, enterprise auth, custom speech-recognition mapping voice commands to tasks, and GitHub repository sync.",
    category: ["featured", "mobile"],
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "WebSockets", "Tailwind CSS"],
    github: "https://github.com/AASani29/KalKorbo",
    live: "https://kalkorbo.netlify.app",
    image: "/images/IMG-20260106-WA0011(1).jpg",
    badge: "Real-time & Voice",
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
    badge: "AI Assessment",
  },
  {
    title: "Financial RAG Pipeline",
    year: "2024",
    tagline: "Hybrid Retrieval with Dense & Sparse Vector Search",
    description:
      "Three-stage question-answering system over dense financial filings (10-K, 10-Q). Employs hybrid retrieval combining BM25 sparse keyword matching and SentenceTransformer dense vector search with FAISS index re-ranking.",
    category: ["ai"],
    tech: ["Python", "Sentence Transformers", "FAISS", "BM25", "Streamlit", "LangChain"],
    github: "https://github.com/AASani29/RAG-PipeLine-for-Financial-Data-",
    live: "https://ragpipelineforfinancialdatabysani.streamlit.app/",
    image: "/images/rag.png",
    badge: "RAG / FAISS",
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
  const [pageIndex, setPageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const filtered = allProjects.filter((p) =>
    activeTab === "all" ? true : p.category.includes(activeTab as any)
  );

  const pageSize = 3;
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;

  // When expanding to view all/more, show all or load by increments of 3
  const displayedProjects = isExpanded
    ? filtered
    : filtered.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);

  const handlePrev = () => {
    setPageIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleTabChange = (tabId: Category) => {
    setActiveTab(tabId);
    setPageIndex(0);
    setIsExpanded(false);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-zinc-950 py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-600/10 via-indigo-600/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-3">
              <Sparkles size={13} />
              Portfolio &amp; Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg">
              Explore key software systems, microservices architectures, and AI applications.
            </p>
          </div>

          {/* Slider navigation controls (Header) */}
          <div className="flex items-center gap-3">
            {!isExpanded && totalPages > 1 && (
              <div className="flex items-center gap-2 bg-zinc-900/90 border border-white/10 rounded-full p-1.5 shadow-md">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="size-8 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous projects"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-xs font-mono font-medium text-zinc-400 px-2 min-w-[50px] text-center">
                  {pageIndex + 1} / {totalPages}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="size-8 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Next projects"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 hover:bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white transition-colors shadow-md"
            >
              {isExpanded ? (
                <>
                  <SlidersHorizontal size={14} className="text-violet-400" />
                  <span>Show Slider (3)</span>
                </>
              ) : (
                <>
                  <Grid3X3 size={14} className="text-violet-400" />
                  <span>View All ({filtered.length})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
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

        {/* Projects Grid: Exactly 3 items initially, each with identical square images */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {displayedProjects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/90 hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div>
                {/* Square image container: exactly 1:1 aspect ratio on all cards */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-950 border border-white/10 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-black/70 backdrop-blur-md border border-white/15 px-2.5 py-1 text-[11px] font-mono font-medium text-zinc-200 shadow-sm">
                      {project.year}
                    </span>
                    {project.badge ? (
                      <span className="rounded-full bg-violet-600/90 backdrop-blur-md border border-violet-400/30 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
                        {project.badge}
                      </span>
                    ) : project.category.includes("featured") ? (
                      <span className="rounded-full bg-emerald-600/80 backdrop-blur-md border border-emerald-400/30 px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm">
                        Featured
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Subtitle / Tagline */}
                <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-1 line-clamp-1">
                  {project.tagline}
                </p>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom Metadata & Links */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-800/70 border border-zinc-700/60 px-2 py-0.5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded-md bg-zinc-800/40 px-1.5 py-0.5 text-[10px] font-mono text-zinc-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 px-3 py-1.5 font-medium text-zinc-200 hover:text-white transition-colors"
                    >
                      <Github size={13} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 px-3 py-1.5 font-semibold text-white transition-colors shadow-sm"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer controls: Slider Indicators + Load More Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          {/* Slider Pagination Dots (when in slider view) */}
          {!isExpanded && totalPages > 1 ? (
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPageIndex(i)}
                  className={`h-2 transition-all rounded-full ${
                    pageIndex === i
                      ? "w-8 bg-violet-500"
                      : "w-2 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
              <span className="ml-2 text-xs font-mono text-zinc-500">
                Slide {pageIndex + 1} of {totalPages}
              </span>
            </div>
          ) : (
            <span className="text-xs font-mono text-zinc-400">
              Showing all {filtered.length} projects
            </span>
          )}

          {/* Load More / Slider Toggle Button */}
          <div className="flex items-center gap-3">
            {!isExpanded && totalPages > 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <span>Next 3 Projects</span>
                <ChevronRight size={14} />
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-500 px-5 py-2 text-xs font-semibold text-white transition-all shadow-md shadow-violet-600/20"
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={14} />
                  <span>Show Less (Collapse to 3)</span>
                </>
              ) : (
                <>
                  <ChevronDown size={14} />
                  <span>Load More / View All ({filtered.length})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
