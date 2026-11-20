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
        name: "URewards – Unilever Bangladesh",
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

const typeBadgeColor: Record<string, string> = {
  "Part-time": "bg-violet-50 text-violet-700 ring-1 ring-violet-200",
  Leadership: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  Internship: "bg-zinc-100 text-zinc-600 ring-1 ring-zinc-200",
};

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
            Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-xl text-zinc-500">
            Professional roles and internships that shaped how I build software.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 sm:left-[11px]" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 sm:pl-12">
                <span className="absolute left-0 top-6 h-3.5 w-3.5 rounded-full border-2 border-white bg-violet-500 shadow-sm sm:left-1" />

                <div className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5 transition-shadow hover:shadow-md sm:p-6">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div className="hidden h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm sm:flex sm:h-14 sm:w-14">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="h-full w-full object-contain p-1.5"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-bold text-zinc-900 sm:text-lg">
                            {exp.title}
                          </h3>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:underline"
                          >
                            {exp.company}
                            <ExternalLink size={12} />
                          </a>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className={`rounded-full px-2.5 py-0.5 font-medium ${typeBadgeColor[exp.type] ?? "bg-zinc-100 text-zinc-600"}`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="mt-1 flex flex-wrap gap-3 text-xs text-zinc-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {exp.description}
                      </p>

                      {exp.projects && exp.projects.length > 0 && (
                        <div className="mt-4 space-y-3">
                          {exp.projects.map((p) => (
                            <div
                              key={p.name}
                              className="rounded-xl border border-zinc-200 bg-white p-4"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-semibold text-zinc-800">
                                  {p.name}
                                </span>
                                {p.link && (
                                  <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 text-xs font-medium text-violet-600 hover:underline"
                                  >
                                    View →
                                  </a>
                                )}
                              </div>
                              <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                                {p.blurb}
                              </p>
                              <div className="mt-2.5 flex flex-wrap gap-1.5">
                                {p.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
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
