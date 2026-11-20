import { ExternalLink, Github } from "lucide-react";
import ProjectImage from "./ProjectImage";

type Project = {
  title: string;
  year: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  image: string;
};

const featured: Project[] = [
  {
    title: "TicketDaata",
    year: "2026",
    description:
      "A ticket resale marketplace built as a Spring Boot microservices system — deployed to Kubernetes with autoscaling, a full GitHub Actions CI/CD pipeline publishing to GHCR, and a Prometheus/Grafana observability stack. Users list, browse and buy tickets; a 15-minute TTL reservation holds the ticket during simulated payment, with automatic expiry. Zero-downtime verified.",
    tech: [
      "Java 17",
      "Spring Boot 3.5",
      "Spring Cloud Gateway",
      "React 19",
      "TypeScript",
      "MongoDB",
      "RabbitMQ",
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Grafana",
      "GitHub Actions",
    ],
    github: "https://github.com/AASani29/TicketDaata",
    live: null,
    image: "/images/ticketdaata.jpg",
  },
  {
    title: "NutriAI",
    year: "2026",
    description:
      "HealthTech platform democratising personalised nutrition for the Bangladeshi context — integrating real-time local market prices, live weather-adjusted shelf-life, USDA nutritional data, and household inventory to generate affordable, clinically-safe meal plans. Features a Smart Pantry engine, AI-powered dashboard with ChatBot, neighbourhood food sharing, OCR receipt scanning, and health & fitness tracking.",
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Gemini AI",
      "BullMQ",
      "Cloudinary",
      "React Leaflet",
    ],
    github: "https://github.com/AASani29/NutriAI",
    live: null,
    image: "/images/nutriai.jpg",
  },
  {
    title: "KalKorbo",
    year: "2025",
    description:
      "Real-time issue and task management platform with AI-powered voice commands, collaborative Kanban boards, and live presence tracking. Enterprise-grade auth, calendar views, and GitHub integration for modern teams.",
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
  },
  {
    title: "SoulAce",
    year: "2024",
    description:
      "AI-powered mental-health platform with real-time assessment and personalised recommendations, built on the MERN stack with third-party AI APIs.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AI/ML"],
    github: "https://github.com/AASani29/Soulace",
    live: "https://soulace.onrender.com/",
    image: "/images/Soulace.png",
  },
];

const more: Project[] = [
  {
    title: "Blingo",
    year: "2024",
    description:
      "Bengali language-learning platform combining RAG-based AI tutoring with real-time collaboration features.",
    tech: ["AI", "RAG", "Machine Learning", "Bengali NLP"],
    github: "https://github.com/AASani29/Blingo",
    live: "https://blingo.onrender.com/",
    image: "/images/blingo.png",
  },
  {
    title: "EXPENSIO",
    year: "2025",
    description:
      "Mobile expense tracker with budget management, biometric auth, multi-currency support, and local SQLite storage for full privacy.",
    tech: ["React Native", "Expo", "TypeScript", "SQLite"],
    github: "https://github.com/AASani29/expensio",
    live: null,
    image: "/images/expensio.png",
  },
  {
    title: "Daekho",
    year: "2025",
    description:
      "React Native movie-discovery app with personalised recommendations via genre-based filtering and intelligent exclusion.",
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "TMDB API"],
    github: "https://github.com/AASani29/Daekho",
    live: null,
    image: "/images/Daekho.png",
  },
  {
    title: "TaskLumina",
    year: "2024",
    description:
      "Smart task manager with AI-powered prioritisation and scheduling, built on Java Spring Boot with NLP-based automation.",
    tech: ["Java", "Spring Boot", "AI/ML", "NLP"],
    github: "https://github.com/AASani29/JavaFest-TaskLumina",
    live: null,
    image: "/images/tasklumina.png",
  },
  {
    title: "SignAll",
    year: "2024",
    description:
      "ML web app that translates sign language to text from a webcam feed, helping people with hearing disabilities communicate.",
    tech: ["Machine Learning", "FastAPI", "Python", "Computer Vision"],
    github: "https://github.com/hasin023/sign-all_DP1",
    live: null,
    image: "/images/signall.png",
  },
  {
    title: "RAG Pipeline for Financial Data",
    year: "2024",
    description:
      "Retrieval-Augmented Generation system that turns PDF documents into interactive chatbots using modern NLP techniques.",
    tech: ["Python", "RAG", "NLP", "Streamlit", "AI/ML"],
    github: "https://github.com/AASani29/RAG-PipeLine-for-Financial-Data-",
    live: "https://ragpipelineforfinancialdatabysani.streamlit.app/",
    image: "/images/rag.png",
  },
  {
    title: "MediEase",
    year: "2024",
    description:
      "Hospital management solution covering patient records, appointment scheduling, and staff management.",
    tech: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"],
    github: "https://github.com/hasin023/MediEase",
    live: null,
    image: "/images/mediease.png",
  },
];

const TechChip = ({ label }: { label: string }) => (
  <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-medium text-zinc-300">
    {label}
  </span>
);

const CardTechChip = ({ label }: { label: string }) => (
  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600">
    {label}
  </span>
);

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-20 bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Full-stack products, microservices, mobile apps, and applied ML.
          </p>
        </div>

        {/* Featured — alternating layout */}
        <div className="space-y-6">
          {featured.map((project, index) => (
            <article
              key={project.title}
              className="group grid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all hover:border-zinc-600 lg:grid-cols-2"
            >
              {/* Image */}
              <div
                className={`relative aspect-video overflow-hidden border-zinc-800 ${
                  index % 2 === 1 ? "lg:order-2 lg:border-l" : "lg:border-r"
                }`}
              >
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  title={project.title}
                />
                <span className="absolute left-3 top-3 rounded-full bg-zinc-950/80 px-2.5 py-1 text-xs font-semibold text-zinc-300 backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Info */}
              <div
                className={`flex flex-col justify-center p-7 sm:p-9 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <span className="font-mono text-xs text-violet-500">
                  {String(index + 1).padStart(2, "0")} / Featured
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <TechChip key={t} label={t} />
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                    >
                      <Github size={15} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More projects grid */}
        <div className="mt-14">
          <h3 className="mb-6 text-lg font-semibold text-zinc-400">
            More Projects
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-video overflow-hidden border-b border-zinc-100">
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    title={project.title}
                  />
                  <span className="absolute right-2 top-2 rounded-md bg-white/90 px-2 py-0.5 text-xs font-semibold text-zinc-600 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h4 className="font-bold text-zinc-900">{project.title}</h4>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-500">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <CardTechChip key={t} label={t} />
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900"
                      >
                        <Github size={13} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-violet-500"
                      >
                        <ExternalLink size={13} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          More on{" "}
          <a
            href="https://github.com/AASani29"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-violet-400 hover:underline"
          >
            GitHub →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
