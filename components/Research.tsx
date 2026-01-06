import {
  FileText,
  Calendar,
  Users,
  ExternalLink,
  Award,
  BookOpen,
  AlertCircle,
} from "lucide-react";

const Research = () => {
  const papers = [
    {
      id: 1,
      title: "Combating Data Scarcity in Bangla Fake News Detection Using LLMs",
      conference: "ICSCA 2026",
      conferenceFullName: "International Conference on Software and Computer Applications",
      year: "2026",
      status: "Accepted",
      description: "Addressing the challenge of data scarcity in low-resource languages through LLM-based dataset augmentation. Our research validates that Zero-Shot prompting and random subsampling with the Gemma-3 model significantly improves detection performance on the minority fake news class in Bangla language.",
      keyFindings: [
        "LLM-based dataset augmentation effectively bridges the data scarcity gap",
        "Zero-Shot prompting with Gemma-3 improves minority class detection",
        "Significant performance enhancement in Bangla fake news classification"
      ],
      authors: [
        "Alfey Sani",
        "Shefayat E Shams Adib",
        "Kazi Akib Zaoad",
        "Md Abdul Muqtadir"
      ],
      mentor: "Ajwad Abrar",
      paperLink: "", // To be added when published
      color: "blue",
    },
    {
      id: 2,
      title: "Assessing Large Language Models for Medical QA: Zero-Shot and LLM-as-a-Judge Evaluation",
      conference: "ICCIT 2025",
      conferenceFullName: "28th International Conference on Computer and Information Technology",
      year: "2025",
      status: "Accepted",
      description: "Evaluating modern Large Language Models on real-world medical queries by analyzing accuracy, safety, clarity, and overall clinical usefulness. This research explores how reliably AI can answer actual medical questions, a critical consideration as AI reshapes healthcare.",
      keyFindings: [
        "Comprehensive evaluation of LLMs on real medical queries",
        "Analysis of accuracy, safety, clarity, and clinical usefulness",
        "Zero-Shot and LLM-as-a-Judge evaluation methodologies"
      ],
      authors: [
        "Alfey Sani",
        "Shefayat E Shams Adib",
        "Ekramul Esham"
      ],
      mentor: "Ajwad Abrar",
      paperLink: "", // To be added when published
      color: "emerald",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-200",
        badge: "bg-blue-100 text-blue-800",
        icon: "bg-blue-100 text-blue-600",
        accent: "text-blue-600",
        hover: "hover:border-blue-300"
      },
      emerald: {
        bg: "from-emerald-50 to-emerald-100",
        border: "border-emerald-200",
        badge: "bg-emerald-100 text-emerald-800",
        icon: "bg-emerald-100 text-emerald-600",
        accent: "text-emerald-600",
        hover: "hover:border-emerald-300"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Research</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Exploring cutting-edge solutions in AI and machine learning
          </p>
        </div>

        {/* Research Papers */}
        <div className="space-y-8">
          {papers.map((paper, index) => {
            const colors = getColorClasses(paper.color);
            return (
              <div
                key={paper.id}
                className={`bg-white border-2 ${colors.border} ${colors.hover} rounded-3xl overflow-hidden transition-all hover:shadow-xl`}
              >
                <div className={`bg-gradient-to-r ${colors.bg} p-8`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      {/* Status Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`${colors.badge} px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2`}>
                          <Award className="w-4 h-4" />
                          {paper.status}
                        </span>
                        <span className="bg-white/80 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                          {paper.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3 leading-tight">
                        {paper.title}
                      </h3>

                      {/* Conference */}
                      <div className="flex items-start gap-2 mb-4">
                        <BookOpen className={`w-5 h-5 ${colors.accent} flex-shrink-0 mt-0.5`} />
                        <div>
                          <p className={`font-bold ${colors.accent}`}>
                            {paper.conference}
                          </p>
                          <p className="text-slate-600 text-sm">
                            {paper.conferenceFullName}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 ${colors.icon} rounded-2xl flex items-center justify-center`}>
                        <FileText className="w-10 h-10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paper Details */}
                <div className="p-8">
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-slate-700 leading-relaxed">
                      {paper.description}
                    </p>
                  </div>

                  {/* Key Findings */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-800 mb-3">
                      Key Findings
                    </h4>
                    <ul className="space-y-2">
                      {paper.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 ${colors.accent.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-slate-600">{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Authors */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-slate-600" />
                      <h4 className="text-lg font-bold text-slate-800">
                        Authors
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {paper.authors.map((author, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {author}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm mt-3">
                      <span className="font-semibold">Mentor:</span> {paper.mentor}
                    </p>
                  </div>

                  {/* Paper Link */}
                  <div className="pt-6 border-t border-slate-200">
                    {paper.paperLink ? (
                      <a
                        href={paper.paperLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 ${colors.accent} hover:underline font-semibold cursor-target`}
                      >
                        View Publication
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-500">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm italic">
                          Publication link will be available once published
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 text-center hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
            <div className="text-slate-600 text-sm font-medium">
              Research Papers
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 text-center hover:border-emerald-200 transition-colors">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
            <div className="text-slate-600 text-sm font-medium">
              Conference Acceptances
            </div>
          </div>

          <div className="bg-white border-2 border-purple-100 rounded-2xl p-6 text-center hover:border-purple-200 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-2">AI/ML</div>
            <div className="text-slate-600 text-sm font-medium">
              Research Focus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
