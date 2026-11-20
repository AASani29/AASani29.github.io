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
    image: "/images/ticketdaata.png",
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
    image: "/images/nutriai.png",
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

const TechChips = ({ tech }: { tech: string[] }) => (
  <div className="flex flex-wrap gap-1.5">
    {tech.map((t) => (
      <span
        key={t}
        className="rounded-md border border-slate-700 bg-slate-800/60 px-2 py-0.5 text-xs font-medium text-slate-300"
      >
        {t}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({
  github,
  live,
  variant = "dark",
}: {
  github: string | null;
  live: string | null;
  variant?: "dark" | "solid";
}) => (
  <div className="flex flex-wrap gap-3">
    {github && (
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
          variant === "solid"
            ? "bg-slate-700 text-white hover:bg-slate-600"
            : "border border-slate-700 text-slate-200 hover:bg-slate-800"
        }`}
      >
        <Github size={16} />
        Code
      </a>
    )}
    {live && (
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        <ExternalLink size={16} />
        Live Demo
      </a>
    )}
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            A selection of what I&apos;ve built — full-stack products, microservices,
            mobile apps, and applied ML.
          </p>
        </div>

        {/* Featured */}
        <div className="space-y-12 lg:space-y-16">
          {featured.map((project, index) => (
            <article
              key={project.title}
              className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10"
            >
              <div
                className={`overflow-hidden rounded-2xl border border-slate-700 shadow-xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-video">
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    title={project.title}
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-xs font-semibold text-white">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-mono text-sm text-emerald-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/60 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5">
                  <TechChips tech={project.tech} />
                </div>
                <div className="mt-6">
                  <ProjectLinks
                    github={project.github}
                    live={project.live}
                    variant="solid"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More projects */}
        <h3 className="mb-8 mt-20 text-center text-xl font-bold text-white">
          More Projects
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/40"
            >
              <div className="relative aspect-video border-b border-slate-700">
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  title={project.title}
                />
                <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-2 py-0.5 text-xs font-semibold text-slate-200">
                  {project.year}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-lg font-bold text-white">{project.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4">
                  <TechChips tech={project.tech.slice(0, 4)} />
                </div>
                <div className="mt-4">
                  <ProjectLinks github={project.github} live={project.live} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-400">
          More on{" "}
          <a
            href="https://github.com/AASani29"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Projects;
