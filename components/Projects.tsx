"use client";

import React, { useState, useEffect, useRef } from "react";
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
  ArrowLeft,
  X,
  Calendar,
  CheckCircle2,
  Maximize2,
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
  architectureHighlights?: string[];
  badge?: string;
};

const allProjects: Project[] = [
  {
    title: "TicketDaata",
    year: "2026",
    tagline: "Microservices Resale Marketplace with HPA Autoscaling",
    description:
      "A ticket resale marketplace built as an end-to-end Spring Boot microservices platform — deployed to Kubernetes with CPU-based horizontal pod autoscaling (HPA), automated GitHub Actions CI/CD publishing to GHCR, and a Prometheus/Grafana golden-signals observability stack. Features 15-minute TTL order reservations and zero-downtime verified pod replacement.",
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
    badge: "K8s Microservices",
    architectureHighlights: [
      "Dynamic service DNS resolution & declarative routing via Spring Cloud Gateway",
      "RabbitMQ event-driven asynchronous payment and inventory synchronization",
      "Prometheus & Grafana golden signals dashboard monitoring CPU, memory, and latencies",
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
      "Redis",
      "Cloudinary",
      "Leaflet Maps",
    ],
    github: "https://github.com/AASani29/NutriAI",
    live: null,
    image: "/images/nutriai.jpg",
    badge: "MillionX Finalist",
    architectureHighlights: [
      "Top 20 Finalist & 4th Place at MillionX AI Build-A-Thon '26",
      "Weather-adaptive spoilage calculation calibrated with OpenWeather API",
      "Asynchronous OCR receipt processing via BullMQ worker queues backed by Redis",
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
    badge: "Voice & Real-Time",
    architectureHighlights: [
      "Sub-100ms real-time multi-user presence & card synchronization via Supabase Realtime",
      "Custom speech recognition pipeline mapping natural voice commands to kanban state changes",
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
    badge: "AI Assessment",
    architectureHighlights: [
      "Automated questionnaire scoring and emotional sentiment evaluation",
      "Personalized wellness coping plans generated dynamically via LLM prompts",
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
    badge: "RAG & Vector Search",
    architectureHighlights: [
      "Hybrid BM25 keyword matching blended with SentenceTransformer dense embeddings",
      "FAISS index re-ranking benchmarked across multiple financial reports",
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
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Touch gesture support for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const filtered = allProjects.filter((p) =>
    activeCategory === "all" ? true : p.category.includes(activeCategory as any)
  );

  const total = filtered.length;
  const currentProject = filtered[currentIndex] || filtered[0];

  // Wrap around index calculations for gallery
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // Reset index when changing category
  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") setIsModalOpen(false);
        return;
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total, isModalOpen]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-zinc-950 py-20 sm:py-28 relative overflow-hidden text-white"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-violet-600/15 via-indigo-600/10 to-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-3">
              <Sparkles size={13} />
              Interactive Gallery Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured Work
            </h2>
            <p className="mt-2 text-sm text-zinc-400 max-w-lg">
              Hover over or click the previous / next preview cards to bring them to the center. Click the active card for full architecture details.
            </p>
          </div>

          {/* Navigation Controls in Header */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-900/90 p-1.5 shadow-xl backdrop-blur-md">
              <button
                type="button"
                onClick={handlePrev}
                className="size-9 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-mono font-bold text-zinc-400 px-3 min-w-[60px] text-center">
                <span className="text-violet-400">{currentIndex + 1}</span> / {total}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="size-9 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-4">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleCategoryChange(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${active
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

        {/* Main Showcase Layout: Synchronized Info on Left, 3D Gallery Carousel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Synchronized Project Information (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {/* Year & Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-mono font-semibold text-zinc-300">
                  <Calendar size={12} />
                  {currentProject.year}
                </span>
                {currentProject.badge && (
                  <span className="rounded-full bg-violet-600/90 border border-violet-400/30 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {currentProject.badge}
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-400 font-mono">
                {currentProject.tagline}
              </p>

              {/* Title */}
              <h3 className="mt-2 text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {currentProject.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
                {currentProject.description}
              </p>

              {/* Architecture Highlights bullet preview */}
              {currentProject.architectureHighlights && (
                <div className="mt-5 space-y-2 border-l-2 border-violet-500/50 pl-3.5">
                  {currentProject.architectureHighlights.slice(0, 2).map((highlight, idx) => (
                    <p key={idx} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-violet-400 font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* Tech Stack Chips */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.tech.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-zinc-900 border border-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {currentProject.tech.length > 6 && (
                  <span className="rounded-lg bg-zinc-900/60 border border-zinc-800 px-2 py-1 text-xs font-mono text-zinc-500">
                    +{currentProject.tech.length - 6}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all hover:scale-[1.02]"
              >
                <Maximize2 size={15} />
                <span>Explore Full Details</span>
              </button>

              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-zinc-900 hover:bg-zinc-800 px-4 py-2.5 text-xs sm:text-sm font-medium text-zinc-200 hover:text-white transition-colors"
                >
                  <Github size={15} />
                  <span>Code</span>
                </a>
              )}

              {currentProject.live && (
                <a
                  href={currentProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-zinc-900 hover:bg-zinc-800 px-4 py-2.5 text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* 3D Gallery: Center Active Image with Previous (Left) and Next (Right) peeking below/behind */}
          <div
            className="lg:col-span-7 flex justify-center py-6 select-none overflow-visible px-4 sm:px-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Gallery stage container: square aspect ratio */}
            <div className="relative w-full max-w-[340px] sm:max-w-[390px] md:max-w-[420px] aspect-square overflow-visible">
              {filtered.map((project, idx) => {
                const isCurrent = idx === currentIndex;
                const isPrev = total > 1 && idx === prevIndex;
                const isNext = total > 2 ? idx === nextIndex : false;

                // Position calculation for 3D Gallery
                let transform = "scale(0.7) translateY(0px)";
                let opacity = 0;
                let zIndex = 0;
                let pointerEvents: "auto" | "none" = "none";

                if (isCurrent) {
                  // In the middle and on top
                  transform = "translateX(0%) scale(1) translateY(0px)";
                  opacity = 1;
                  zIndex = 30;
                  pointerEvents = "auto";
                } else if (isPrev) {
                  // Peeking below/behind on the left
                  transform = "translateX(-38%) scale(0.85) translateY(0px)";
                  opacity = 0.65;
                  zIndex = 10;
                  pointerEvents = "auto";
                } else if (isNext) {
                  // Peeking below/behind on the right
                  transform = "translateX(38%) scale(0.85) translateY(0px)";
                  opacity = 0.65;
                  zIndex = 10;
                  pointerEvents = "auto";
                }

                return (
                  <div
                    key={project.title}
                    onMouseEnter={() => {
                      // On hover over the previous or next card, bring it to the middle and on top
                      if (!isCurrent && (isPrev || isNext)) {
                        setCurrentIndex(idx);
                      }
                    }}
                    onClick={() => {
                      if (isCurrent) {
                        setIsModalOpen(true);
                      } else {
                        setCurrentIndex(idx);
                      }
                    }}
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      pointerEvents,
                    }}
                    className={`absolute inset-0 w-full h-full rounded-[28px] overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                      isCurrent
                        ? "shadow-[0_25px_60px_rgba(0,0,0,0.85)] ring-1 ring-white/25 hover:ring-violet-400/60"
                        : "shadow-[0_12px_30px_rgba(0,0,0,0.6)] ring-1 ring-white/10 brightness-75 hover:brightness-100"
                      }`}
                  >
                    {/* Card Inner with Square Image */}
                    <div className="relative w-full h-full bg-zinc-900 group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Vignette gradients */}
                      <div
                        className={`absolute inset-0 transition-opacity ${
                          isCurrent
                            ? "bg-gradient-to-t from-black/85 via-black/20 to-black/40"
                            : "bg-black/40 group-hover:bg-black/20"
                        }`}
                      />

                      {/* Top floating bar on card */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 text-xs font-mono font-semibold text-white shadow-sm">
                          {project.year}
                        </span>
                        {project.badge && isCurrent && (
                          <span className="rounded-full bg-violet-600/90 backdrop-blur-md border border-violet-400/30 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      {/* Left indicator pill when hovering on previous card */}
                      {isPrev && (
                        <div className="absolute inset-y-0 left-3 flex items-center">
                          <span className="size-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                            <ChevronLeft size={18} />
                          </span>
                        </div>
                      )}

                      {/* Right indicator pill when hovering on next card */}
                      {isNext && (
                        <div className="absolute inset-y-0 right-3 flex items-center">
                          <span className="size-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                            <ChevronRight size={18} />
                          </span>
                        </div>
                      )}

                      {/* Bottom title & prompt on center card */}
                      {isCurrent && (
                        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                          <div>
                            <p className="text-[11px] font-mono uppercase tracking-wider text-violet-300 font-semibold mb-0.5">
                              {project.tagline}
                            </p>
                            <h4 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                              {project.title}
                            </h4>
                          </div>

                          <div className="shrink-0 size-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:bg-violet-600 transition-colors">
                            <Maximize2 size={16} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ScreenModal: Detailed Expandable Card View with Custom Thin Scrollbar */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto custom-scrollbar rounded-3xl border border-white/15 bg-zinc-900 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar with Back/Close button */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Showcase</span>
              </button>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="size-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-6">
              {/* Modal Banner */}
              <div className="relative aspect-video sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                    {currentProject.year}
                  </span>
                  {currentProject.badge && (
                    <span className="rounded-full bg-black/70 border border-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                      {currentProject.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <p className="text-xs font-mono font-semibold uppercase tracking-wider text-violet-400">
                  {currentProject.tagline}
                </p>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
                  {currentProject.title}
                </h3>
              </div>

              {/* In-depth Description */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Project Overview &amp; Architecture
                </h4>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              {currentProject.architectureHighlights && (
                <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 sm:p-5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-violet-300 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={15} />
                    Key Engineering Achievements
                  </h4>
                  <ul className="space-y-2">
                    {currentProject.architectureHighlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2">
                        <span className="text-violet-400 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
                  Technologies &amp; Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-zinc-800 border border-zinc-700/80 px-3 py-1 text-xs font-mono text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons inside modal */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
                {currentProject.live && (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 hover:bg-violet-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
