import { ExternalLink, Github } from "lucide-react";
import ProjectImage from "./ProjectImage";

const Projects = () => {
  const projects = [
      
    {
      title: "TaskLumina",
      year: "2024",
      description:
        "Smart task management system with AI-powered task prioritization and scheduling features, built using Java Spring Boot with NLP-based automation.",
      tech: ["Java", "Spring Boot", "AI/ML", "NLP", "Task Management"],
      github: "https://github.com/AASani29/JavaFest-TaskLumina",
      live: null,
      image: "/images/tasklumina.png",
    },
    {
      title: "SoulAce",
      year: "2024",
      description:
        "AI-powered mental health and wellbeing platform with real-time mental health assessment and personalized recommendations using MERN stack.",
      tech: ["React", "Node.js", "MongoDB", "Express", "AI/ML", "APIs"],
      github: "https://github.com/AASani29/Soulace",
      live: "https://soulace.onrender.com/",
      image: "/images/Soulace.png",
    },
    {
      title: "Blingo",
      year: "2024",
      description:
        "Innovative Bengali language learning platform that combines AI-powered features with real-time collaboration capabilities using RAG and Machine Learning.",
      tech: ["AI", "RAG", "Machine Learning", "APIs", "Bengali NLP"],
      github: "https://github.com/AASani29/Blingo",
      live: "https://blingo.onrender.com/",
      image: "/images/blingo.png",
    },
    {
      title: "MediEase",
      year: "2024",
      description:
        "Complete hospital management solution with patient records, appointment scheduling, and staff management built with modern web technologies.",
      tech: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL"],
      github: "https://github.com/hasin023/MediEase",
      live: null,
      image: "/images/mediease.png",
    },
    {
      title: "SignAll",
      year: "2024",
      description:
        "ML-based web application that helps people with hearing disabilities communicate by translating sign language to text using webcam with FastAPI.",
      tech: [
        "Machine Learning",
        "FastAPI",
        "Python",
        "Computer Vision",
        "WebCam",
      ],
      github: "https://github.com/hasin023/sign-all_DP1",
      live: null,
      image: "/images/signall.png",
    },
    {
      title: "RAG-PipeLine for Financial Data",
      year: "2024",
      description:
        "An intelligent Retrieval-Augmented Generation (RAG) system that transforms PDF documents into interactive chatbots using state-of-the-art NLP techniques",
      tech: ["Python", "RAG", "NLP", "Streamlit", "AI/ML", "PDF Processing"],
      github: "https://github.com/AASani29/RAG-PipeLine-for-Financial-Data-",
      live: "https://ragpipelineforfinancialdatabysani.streamlit.app/",
      image: "/images/rag.png",
    },
    {
      title: "SeePlussy",
      year: "2024",
      description:
        "C++ skill evaluation platform where developers can test and assess their programming knowledge. Built entirely using AI with advanced prompt engineering techniques to create intelligent assessments.",
      tech: [
        "AI",
        "Prompt Engineering",
        "C++",
        "Evaluation System",
        "NLP",
        "Assessment",
      ],
      github: null,
      live: "https://seeplussy.netlify.app/",
      image: "/images/seeplussy.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] repeat"></div>
      </div>

      {/* Animated background gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Explore my latest work and technical achievements
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex md:items-center md:gap-12`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                  <div className="aspect-video relative">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      title={project.title}
                    />
                    

                    {/* Floating year badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </div>
                    </div>

                    {/* Hover overlay with links */}
                    <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-200 cursor-target"
                        >
                          <Github size={18} />
                          <span className="text-sm font-medium">Code</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-500/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-500 transition-all duration-200 cursor-target"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div
                  className={`absolute -z-10 top-8 ${
                    index % 2 === 0 ? "-right-8" : "-left-8"
                  } w-full h-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl blur-xl`}
                ></div>
              </div>

              {/* Project Content */}
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className={`${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  {/* Project number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-emerald-400 text-sm font-mono">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px bg-gradient-to-r from-emerald-400 to-transparent flex-1"></div>
                  </div>

                  {/* Project title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-md text-sm font-medium border border-slate-600/50 hover:bg-slate-600/50 hover:text-emerald-400 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons - Desktop only */}
                  <div className="hidden md:flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-all duration-300 font-medium group/btn cursor-target"
                      >
                        <Github
                          size={20}
                          className="group-hover/btn:scale-110 transition-transform duration-200"
                        />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl hover:from-blue-500 hover:to-emerald-500 transition-all duration-300 font-medium group/btn shadow-lg cursor-target"
                      >
                        <ExternalLink
                          size={20}
                          className="group-hover/btn:scale-110 transition-transform duration-200"
                        />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section with stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl px-8 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">
                {projects.length}
              </div>
              <div className="text-slate-400 text-sm">Projects</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">2024</div>
              <div className="text-slate-400 text-sm">Latest</div>
            </div>
            <div className="w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">∞</div>
              <div className="text-slate-400 text-sm">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
