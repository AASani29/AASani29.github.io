"use client";

import { useState } from "react";
import {
  FileText,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Zap,
  BarChart3,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

type TransformMode = {
  id: string;
  name: string;
  inputDoc: {
    type: string;
    title: string;
    lines: string[];
    tag: string;
  };
  outputCards: {
    title: string;
    badge: string;
    color: string;
    metrics: string;
    details: string;
  }[];
};

const modes: TransformMode[] = [
  {
    id: "rag",
    name: "Financial & Travel RAG",
    inputDoc: {
      type: "PDF / Unstructured Filings",
      title: "10-K Document & Travel Corpus",
      lines: [
        "Unstructured earnings report & operational logistics...",
        "Query: 'Assess risk mitigation and quarterly cash flows'",
        "Vector embedding dimension: 1024 (Dense + BM25)",
      ],
      tag: "Raw Input Stream",
    },
    outputCards: [
      {
        title: "Hybrid Retrieval Engine",
        badge: "Vector + Sparse BM25",
        color: "from-blue-500/20 to-indigo-500/10 border-blue-500/40 text-blue-300",
        metrics: "FAISS Rank #1",
        details: "Sub-50ms hybrid dense-sparse query answering with ablation verification.",
      },
      {
        title: "Verified Synthesis",
        badge: "Ablation-Tested",
        color: "from-violet-500/20 to-purple-500/10 border-violet-500/40 text-violet-300",
        metrics: "99.4% Precision",
        details: "Source-cited extractive synthesis deployed in client production.",
      },
    ],
  },
  {
    id: "hallucination",
    name: "Bengali Hallucination (AACL '26)",
    inputDoc: {
      type: "12,000 Generated Responses",
      title: "BenHalluEval Corpus",
      lines: [
        "Multi-task Bengali LLM generated texts across 4 tasks...",
        "Evaluating factual correctness vs hallucinated tokens...",
        "Annotators: Fleiss' κ = 0.911–0.926 agreement",
      ],
      tag: "Corpus Pipeline",
    },
    outputCards: [
      {
        title: "BenHalluScore™ Metric",
        badge: "AACL-IJCNLP 2026",
        color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-300",
        metrics: "Dual-Track",
        details: "Penalizes false positives and undetected hallucinations across 7 LLMs.",
      },
      {
        title: "12 Hallucination Modes",
        badge: "Fine-grained taxonomy",
        color: "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-300",
        metrics: "4 Specialized Tasks",
        details: "Generative QA, code-mixed QA, Bengali summarization & reasoning.",
      },
    ],
  },
  {
    id: "mental-health",
    name: "PsyDefDetect (BioNLP @ ACL '26)",
    inputDoc: {
      type: "Clinical Dialogues",
      title: "Psychological Transcripts",
      lines: [
        "Transcribed counseling text with severe class imbalance...",
        "Target: Defense mechanism classification (Projection, Denial...)",
        "Strategy: QLoRA + Grouped Stratified Cross-Validation",
      ],
      tag: "Clinical Data",
    },
    outputCards: [
      {
        title: "3rd Place Podium",
        badge: "ACL BioNLP 2026",
        color: "from-rose-500/20 to-pink-500/10 border-rose-500/40 text-rose-300",
        metrics: "Macro-F1 0.3917",
        details: "+7.7 points improvement over baseline using iterative imbalance tuning.",
      },
      {
        title: "Qwen3-8B Fine-Tuned",
        badge: "Logit-Bias Tuning",
        color: "from-violet-500/20 to-indigo-500/10 border-violet-500/40 text-violet-300",
        metrics: "4th / 21 Teams",
        details: "Minority-class synthetic augmentation preserving semantic coherence.",
      },
    ],
  },
];

const MagicTransform = () => {
  const [activeMode, setActiveMode] = useState<string>("rag");
  const [isTransforming, setIsTransforming] = useState<boolean>(false);

  const current = modes.find((m) => m.id === activeMode) || modes[0];

  const triggerTransform = (modeId: string) => {
    setActiveMode(modeId);
    setIsTransforming(true);
    setTimeout(() => setIsTransforming(false), 500);
  };

  return (
    <section className="scroll-mt-20 bg-zinc-950 py-16 sm:py-24 border-t border-b border-white/10 relative overflow-hidden">
      {/* Background radial rays */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-600/15 via-indigo-600/20 to-emerald-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-3">
            <Sparkles size={13} className="text-violet-400 animate-spin" />
            AI &amp; Microservices Pipeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Magic Transform Pipeline
          </h2>
          <p className="mt-3 text-sm text-zinc-400">
            Raw unstructured documents and clinical data fly in — through customized QLoRA, RAG indexing, and evaluation cores — and come out as colorful, verified results.
          </p>

          {/* Mode Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {modes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                onClick={() => triggerTransform(mode.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeMode === mode.id
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 scale-105"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {mode.name}
              </button>
            ))}
          </div>
        </div>

        {/* The Magic Transform Showcase Board */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1.2fr] items-center">
          {/* 1. INPUT DOCUMENTS FLYING IN */}
          <div
            className={`rounded-3xl border border-white/15 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
              isTransforming ? "opacity-60 -translate-x-2" : "opacity-100 translate-x-0"
            }`}
          >
            <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/10 pb-3 mb-4">
              <span className="flex items-center gap-1.5 font-mono text-zinc-300">
                <FileText size={14} className="text-violet-400" />
                INPUT DOCUMENT
              </span>
              <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-zinc-400">
                {current.inputDoc.tag}
              </span>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-violet-500 to-indigo-500" />
                <span className="text-[10px] uppercase font-mono text-violet-400 block mb-1">
                  {current.inputDoc.type}
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  {current.inputDoc.title}
                </h4>
                <div className="space-y-1.5 text-xs text-zinc-400 font-mono">
                  {current.inputDoc.lines.map((line, idx) => (
                    <p key={idx} className="line-clamp-1">
                      <span className="text-zinc-600 mr-2">{idx + 1}.</span>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
              <span>Status: Stream Loaded</span>
              <span className="text-emerald-400">Ready for Inference</span>
            </div>
          </div>

          {/* 2. THE TRANSFORM ENGINE CORE */}
          <div className="flex flex-col items-center justify-center gap-2 py-2">
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-emerald-400 p-[2px] shadow-xl shadow-violet-600/20">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-950 text-white">
                <Cpu size={24} className={isTransforming ? "animate-spin text-emerald-400" : "text-violet-400"} />
              </div>
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-zinc-950" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-violet-400 uppercase tracking-widest">
              <span>Transform</span>
              <ArrowRight size={12} className="animate-pulse" />
            </div>
          </div>

          {/* 3. COLORFUL RESULTS COMING OUT */}
          <div
            className={`grid gap-3 transition-all duration-300 ${
              isTransforming ? "opacity-60 translate-x-2" : "opacity-100 translate-x-0"
            }`}
          >
            {current.outputCards.map((card, idx) => (
              <div
                key={card.title}
                className={`rounded-2xl border bg-gradient-to-br p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] ${card.color}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {card.badge}
                    </span>
                    <h5 className="text-base font-bold text-white mt-1.5">
                      {card.title}
                    </h5>
                  </div>
                  <span className="rounded-full bg-white/10 border border-white/20 px-2.5 py-1 text-xs font-mono font-bold text-white shrink-0">
                    {card.metrics}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-zinc-300">
                  {card.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicTransform;
