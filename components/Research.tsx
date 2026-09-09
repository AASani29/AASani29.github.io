import { Calendar, Users, ExternalLink, Award, BookOpen, Quote } from "lucide-react";

type Paper = {
  title: string;
  conference: string;
  year: string;
  status: string;
  description: string;
  authors: string[];
  mentor?: string;
  paperLink: string;
  citedBy?: number;
};

const papers: Paper[] = [
  {
    title:
      "LinguIUTics at PsyDefDetect: Imbalance-Aware Fine-tuning of Qwen3-8B",
    conference: "BioNLP @ ACL 2026",
    year: "2026",
    status: "3rd Place (All-Class Leaderboard)",
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
    description:
      "Evaluation of modern LLMs on real-world medical queries across accuracy, safety, clarity, and clinical usefulness, using zero-shot and LLM-as-a-Judge methodologies.",
    authors: ["Alfey Sani", "Shefayat E Shams Adib", "Ekramul Esham"],
    mentor: "Ajwad Abrar",
    paperLink: "",
  },
];

const Research = () => {
  return (
    <section id="research" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Research
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Published and accepted work in NLP and applied machine learning.
          </p>
        </div>

        <div className="space-y-5">
          {papers.map((paper) => (
            <article
              key={paper.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                  <Award size={12} />
                  {paper.status}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                  <Calendar size={12} />
                  {paper.year}
                </span>
                {paper.citedBy ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    <Quote size={12} />
                    Cited by {paper.citedBy}
                  </span>
                ) : null}
              </div>

              <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">
                {paper.title}
              </h3>

              <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                <BookOpen size={14} />
                {paper.conference}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {paper.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Users size={13} />
                  {paper.authors.join(", ")}
                </span>
                {paper.mentor && <span>Mentor: {paper.mentor}</span>}
                {paper.paperLink && (
                  <a
                    href={paper.paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    View publication
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600">
            <strong className="text-slate-900">4</strong> papers accepted
          </span>
          <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-slate-600">
            <strong className="text-slate-900">ACL · AACL · ICCIT</strong> venues
          </span>
          <a
            href="https://scholar.google.com/citations?user=Qtlp6LYAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-200 bg-white px-4 py-1.5 font-medium text-blue-600 hover:border-blue-200"
          >
            Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
