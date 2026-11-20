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
  Eye,
  ArrowUpRight,
} from "lucide-react";
import TiltedCover from "@/components/ui/tilted-cover";

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
      "GitHub Actions",
    ],
    github: "https://github.com/AASani29/TicketDaata",
    live: null,
    image: "/images/ticketdaata.jpg",
    architectureHighlights: [
      "Service DNS resolution in K8s",
      "RabbitMQ event-driven sync",
      "Prometheus & Grafana dashboards",
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
      "Top 20 Finalist & 4th Place at MillionX AI Build-A-Thon '26",
      "Weather-adaptive spoilage calculation with OpenWeather",
      "Async OCR receipt processing with BullMQ + Redis",
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
      "Sub-100ms real-time multi-user presence via Supabase",
      "Custom speech recognition mapping voice to task actions",
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
    architectureHighlights: [
      "Real-time psychological assessment engine",
      "AI coping recommendations with third-party APIs",
    ],
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
    architectureHighlights: [
      "Hybrid BM25 keyword + dense vector search",
      "FAISS index re-ranking with ablation benchmarking",
    ],
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

  const filtered = allProjects.filter((p) =>
    activeTab === "all" ? true : p.category.includes(activeTab as any)
  );

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
              Interactive 3D Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Work &amp; Systems
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg">
              Hover over any project cover to tilt, reveal inner architectural highlights, and access direct code &amp; demo links.
            </p>
          </div>

          <div className="shrink-0 text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full self-start md:self-auto">
            Showing <span className="text-violet-400 font-bold">{filtered.length}</span> projects
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

        {/* Projects Grid with TiltedCover */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {filtered.map((project, idx) => {
            const tiltDir = idx % 2 === 0 ? "left" : "right";

            return (
              <div
                key={project.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-zinc-900/60 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900/90"
              >
                {/* 3D Tilted Cover Area */}
                <div className="relative mb-4">
                  <TiltedCover
                    direction={tiltDir}
                    image={{
                      src: project.image,
                      alt: project.title,
                    }}
                  >
                    {/* Inner Content (Revealed on Hover) */}
                    <div className="flex h-full flex-col justify-between text-left">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-violet-400 mb-2">
                          <span>SYSTEM OVERVIEW</span>
                          <span className="text-zinc-500">{project.year}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2 line-clamp-1">
                          {project.title}
                        </h4>
                        <div className="space-y-1.5 text-[11px] text-zinc-300">
                          {project.architectureHighlights ? (
                            project.architectureHighlights.map((pt, i) => (
                              <p key={i} className="line-clamp-2">
                                <span className="text-violet-400 mr-1.5">•</span>
                                {pt}
                              </p>
                            ))
                          ) : (
                            <p className="line-clamp-4 leading-relaxed text-zinc-400">
                              {project.description}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Inside Links */}
                      <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-white/10 hover:bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white transition-colors"
                          >
                            <Github size={12} />
                            Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-violet-600 hover:bg-violet-500 px-2.5 py-1 text-[11px] font-semibold text-white transition-colors shadow-sm"
                          >
                            <ExternalLink size={12} />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </TiltedCover>
                </div>

                {/* Project Card Bottom Metadata */}
                <div className="flex flex-1 flex-col justify-between pt-2">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-mono font-semibold text-zinc-400">
                        {project.year}
                      </span>
                      {project.category.includes("featured") && (
                        <span className="rounded-full bg-violet-500/10 border border-violet-500/30 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-400 mt-0.5 line-clamp-1">
                      {project.tagline}
                    </p>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack chips */}
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-zinc-500">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Bottom Action Links */}
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-zinc-400 hover:text-white transition-colors"
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
                            className="inline-flex items-center gap-1 font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                          >
                            <ExternalLink size={13} />
                            Live Demo
                          </a>
                        )}
                      </div>

                      <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-0.5 group-hover:text-zinc-300 transition-colors">
                        Hover to open
                        <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
