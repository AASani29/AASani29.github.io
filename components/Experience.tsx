import { Calendar, MapPin, ExternalLink } from "lucide-react";

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  type: string;
  website: string;
  logo: string;
  projects?: {
    name: string;
    blurb: string;
    tech: string[];
    link?: string;
  }[];
};

const experiences: Role[] = [
  {
    title: "AI Engineer (Part-time)",
    company: "Intelligent Machines Limited",
    period: "Feb 2026 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Building AI and full-stack products for multinational clients — an image-based share-of-shelf solution for bKash and Olympic, RetailOS (an in-house retail platform with field-force management and analytics), and the projects below.",
    type: "Part-time",
    website: "https://intelmachines.ai/",
    logo: "/images/im.png",
    projects: [
      {
        name: "URewards — Unilever Bangladesh",
        blurb:
          "Enterprise shopper-digitization and field-force performance platform powering large-scale brand activations. Built web modules for workforce, activation, outlet, product and shopper management; role-based access and hierarchical visibility across agencies, NCs and brand promoters; bulk-upload data pipelines; and real-time KPI dashboards with SKU-level reporting. Backend services in TypeScript / TypeORM with Redis + BullMQ queues for async processing.",
        tech: [
          "React",
          "TypeScript",
          "Node.js",
          "TypeORM",
          "Redis",
          "BullMQ",
          "Docker",
        ],
      },
      {
        name: "CholoJai",
        blurb:
          "RAG-based travel-assistance platform for CholoJai, an online travel startup focused on seamless trip planning through technology, data and quality customer service. Contributed across the stack — from product ideation and system architecture to frontend development.",
        tech: ["RAG", "LLM", "Next.js", "TypeScript"],
        link: "https://www.cholojai.ai/",
      },
    ],
  },
  {
    title: "Head of Creative Strategy",
    company: "IUT Computer Society",
    period: "Jan 2026 – Present",
    location: "Dhaka, Bangladesh",
    description:
      "Leading creative direction and design strategy for the organisation — overseeing all creative content, publications, and social media to grow brand visibility and engagement.",
    type: "Leadership",
    website: "https://iutcs.iutoic-dhaka.edu/",
    logo: "/images/iutcs.jpg",
  },
  {
    title: "Junior Software Engineer (Intern)",
    company: "Intelligent Machines Limited",
    period: "Oct 2025 – Feb 2026",
    location: "Dhaka, Bangladesh",
    description:
      "Full-stack development across multiple products serviced to multinationals including Unilever and bKash.",
    type: "Internship",
    website: "https://intelmachines.ai/",
    logo: "/images/im.png",
  },
  {
    title: "Intern",
    company: "Development Initiative for Social Advancement (DISA)",
    period: "Jul 2024 – Sep 2024",
    location: "Dhaka, Bangladesh",
    description:
      "Worked with the IT section on microfinance systems and technology integration across the NGO's operations.",
    type: "Internship",
    website: "https://www.disabd.org/",
    logo: "/images/disa.jpg",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Professional roles and internships that shaped how I build software.
          </p>
        </div>

        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-slate-200" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-9 sm:pl-12">
                {/* Node */}
                <span className="absolute left-[11px] top-7 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-[3px] border-white bg-blue-600 shadow" />

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-shadow hover:shadow-md sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm sm:h-16 sm:w-16 sm:p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-lg font-bold text-slate-900">
                          {exp.title}
                        </h3>
                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                          {exp.type}
                        </span>
                      </div>

                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-0.5 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        {exp.company}
                        <ExternalLink size={13} className="shrink-0" />
                      </a>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {exp.description}
                      </p>

                      {exp.projects && exp.projects.length > 0 && (
                        <div className="mt-4 border-t border-slate-200 pt-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            Selected projects
                          </p>
                          <div className="mt-3 space-y-3">
                            {exp.projects.map((project) => (
                              <div
                                key={project.name}
                                className="rounded-xl border border-slate-200 bg-white p-4"
                              >
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <h4 className="text-sm font-bold text-slate-900">
                                    {project.name}
                                  </h4>
                                  {project.link && (
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    >
                                      Live site
                                      <ExternalLink size={11} className="shrink-0" />
                                    </a>
                                  )}
                                </div>
                                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                                  {project.blurb}
                                </p>
                                <div className="mt-2.5 flex flex-wrap gap-1.5">
                                  {project.tech.map((tech) => (
                                    <span
                                      key={tech}
                                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
