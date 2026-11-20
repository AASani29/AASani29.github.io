"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  Instagram,
  Facebook,
  Check,
  Copy,
  Loader2,
  ArrowRight,
} from "lucide-react";

const CONTACT_EMAIL = "ahmedalfey@iut-dhaka.edu";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/AASani29",
    Icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-alfey-sani/",
    Icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmedalfeysani/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/alfey.sani.5/",
    Icon: Facebook,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        }
      );
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-zinc-950 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-violet-400">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Open to full-time roles, research collaborations, and interesting
            engineering problems. Drop me a message.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Left — info */}
          <div className="space-y-8">
            {/* Email card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Email
              </p>
              <div className="mt-3 flex items-center justify-between gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="break-all text-sm font-medium text-zinc-200 hover:text-violet-400 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
                <button
                  onClick={copyEmail}
                  title="Copy email"
                  className="shrink-0 rounded-lg border border-zinc-700 p-2 text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Location
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm font-medium text-zinc-200">
                <MapPin size={15} className="text-violet-400" />
                Dhaka, Bangladesh
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Open to remote & relocation opportunities
              </p>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Socials
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-xs font-medium text-zinc-400 transition-all hover:border-violet-500/50 hover:text-violet-300"
                  >
                    <Icon size={14} />
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
            {status === "sent" ? (
              <div className="flex h-full min-h-[300px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
                  <Check className="h-7 w-7 text-emerald-400" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">Message sent!</p>
                  <p className="mt-1 text-sm text-zinc-400">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-medium text-violet-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Portfolio enquiry" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-zinc-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, role, or idea..."
                    className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-3.5 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-colors focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-lg border border-red-800 bg-red-900/20 p-3 text-xs text-red-400">
                    Something went wrong. Please email me directly at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} Ahmed Alfey Sani</span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
