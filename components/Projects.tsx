import { ExternalLink, Github } from 'lucide-react'
import ProjectImage from './ProjectImage'

const Projects = () => {
  const projects = [
    {
      title: 'TaskLumina',
      year: '2024',
      description: 'Smart task management system with AI-powered task prioritization and scheduling features, built using Java Spring Boot with NLP-based automation.',
      tech: ['Java', 'Spring Boot', 'AI/ML', 'NLP', 'Task Management'],
      github: '#',
      live: null,
      image: '/images/tasklumina.jpg'
    },
    {
      title: 'SoulAce',
      year: '2024',
      description: 'AI-powered mental health and wellbeing platform with real-time mental health assessment and personalized recommendations using MERN stack.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML', 'APIs'],
      github: '#',
      live: '#',
      image: '/images/soulace.jpg'
    },
    {
      title: 'Blingo',
      year: '2024',
      description: 'Innovative Bengali language learning platform that combines AI-powered features with real-time collaboration capabilities using RAG and Machine Learning.',
      tech: ['AI', 'RAG', 'Machine Learning', 'APIs', 'Bengali NLP'],
      github: '#',
      live: '#',
      image: '/images/blingo.jpg'
    },
    {
      title: 'MediEase',
      year: '2024',
      description: 'Complete hospital management solution with patient records, appointment scheduling, and staff management built with modern web technologies.',
      tech: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL'],
      github: '#',
      live: null,
      image: '/images/mediease.jpg'
    },
    {
      title: 'SignAll',
      year: '2024',
      description: 'ML-based web application that helps people with hearing disabilities communicate by translating sign language to text using webcam with FastAPI.',
      tech: ['Machine Learning', 'FastAPI', 'Python', 'Computer Vision', 'WebCam'],
      github: '#',
      live: null,
      image: '/images/signall.jpg'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development and AI/ML applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <ProjectImage
                src={project.image}
                alt={project.title}
                title={project.title}
              />
              <div className="relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                    {project.year}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-2 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects