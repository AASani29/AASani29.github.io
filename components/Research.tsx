import { Calendar, Users, ExternalLink, Award, BookOpen, Quote } from "lucide-react";

type Paper = {
  title: string;
  conference: string;
  year: string;
  status: string;
  statusColor: string;
  description: string;
  authors: string[];
  mentor?: string;
  paperLink: string;
  citedBy?: number;
};

const papers: Paper[] = [
  {
    title:
      "One Framework to Diagnose Them All: A Stratified Benchmark for Bengali LLM Hallucination",
    conference: "Findings of EACL 2027",
    year: "2027",
    status: "Accepted",
    statusColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    description:
      "Alikbachan, a Bengali hallucination benchmark stratified by cultural distance, task type, and a 32-mode taxonomy. Evaluated across two phases: 2,516 test items and 5,000 gold-labeled items. Developed in conjunction with an open international competition that drew 222 teams and 3,566 submissions.",
    authors: [
      "A. S. Sushmit",
      "S. E. S. Adib",
      "...",
      "A. A. Sani",
      "...",
      "A. Abrar",
      "...",
      "M. M. O. Rashid (19 authors)",
    ],
    paperLink: "",
  },
  {
    title:
      "LinguIUTics at PsyDefDetect: Imbalance-Aware Fine-tuning of Qwen3-8B",
    conference: "BioNLP @ ACL 2026",
    year: "2026",
    status: "3rd Place (All-Class Leaderboard)",
    statusColor: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    description:
      "Imbalance-aware QLoRA fine-tuning of Qwen3-8B for the PsyDefDetect shared task on psychological defense-mechanism classification, improving detection of underrepresented categories.",
    authors: ["Alfey Sani"],
    paperLink: "https://aclanthology.org/2026.bionlp-2.18/",
  },
  {
    title:
      "BenHalluEval: A Multi-Task Hallucination Evaluation Framework for Large Language Models on Bengali",
    conference: "AACL-IJCNLP 2026",
    year: "2026",
    status: "Accepted",
    statusColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    description:
      "The first dedicated hallucination benchmark for Bengali — 12,000 hallucinated candidates across twelve task-specific hallucination types, spanning generative QA, code-mixed QA, summarisation and reasoning. Introduces BenHalluScore, a dual-track calibration metric that jointly penalises false positives and missed hallucinations across seven evaluated LLMs.",
    authors: [
      "Shefayat E Shams Adib",
      "Ahmed Alfey Sani",
      "Ekramul Alam Esham",
      "Ajwad Abrar",
      "Ishmam Tashdeed",
      "Md Taukir Azam Chowdhury",
    ],
    paperLink: "https://arxiv.org/abs/2605.31483",
    citedBy: 1,
  },
  {
    title: "Combating Data Scarcity in Bangla Fake News Detection Using LLMs",
    conference: "ICSCA 2026",
    year: "2026",
    status: "Accepted",
    statusColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    description:
      "LLM-based dataset augmentation for low-resource languages: zero-shot prompting and random subsampling with Gemma-3 significantly improve minority-class detection in Bangla fake-news classification.",
    authors: [
      "Alfey Sani",
      "Shefayat E Shams Adib",
      "Kazi Akib Zaoad",
      "Md Abdul Muqtadir",
    ],
    mentor: "Ajwad Abrar",
    paperLink: "",
  },
  {
    title:
      "Assessing Large Language Models for Medical QA: Zero-Shot and LLM-as-a-Judge Evaluation",
    conference: "ICCIT 2025",
    year: "2025",
    status: "Accepted",
    statusColor: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    description:
      "Evaluation of modern LLMs on real-world medical queries across accuracy, safety, clarity, and clinical usefulness, using zero-shot and LLM-as-a-Judge methodologies.",
    authors: ["Alfey Sani", "Shefayat E Shams Adib", "Ekramul Esham"],
    mentor: "Ajwad Abrar",
    paperLink: "",
  },
];

const Research = () => {
  return (
    <section id="research" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-600">
            Publications
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Research
          </h2>
          <p className="mt-3 max-w-xl text-zinc-500">
            Published and accepted work in NLP and applied machine learning.
          </p>
        </div>

        <div className="space-y-4">
          {papers.map((paper, i) => (
            <article
              key={paper.title}
              className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${paper.statusColor}`}>
                  <Award size={11} />
                  {paper.status}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
                  <Calendar size={11} />
                  {paper.year}
                </span>
                {paper.citedBy && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
                    <Quote size={11} />
                    Cited by {paper.citedBy}
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-base font-bold leading-snug text-zinc-900">
                {paper.title}
              </h3>

              <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600">
                <BookOpen size={13} />
                {paper.conference}
              </p>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-500">
                {paper.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-200 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                  <Users size={12} />
                  {paper.authors.join(", ")}
                  {paper.mentor && ` · Mentor: ${paper.mentor}`}
                </span>
                {paper.paperLink && (
                  <a
                    href={paper.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-violet-600 hover:underline"
                  >
                    View publication
                    <ExternalLink size={11} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Footer stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600">
            <strong className="text-zinc-900">5</strong> papers accepted
          </span>
          <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600">
            <strong className="text-zinc-900">EACL · ACL · AACL · ICCIT</strong> venues
          </span>
          <a
            href="https://scholar.google.com/citations?user=Qtlp6LYAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-100"
          >
            Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
