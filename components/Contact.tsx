"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Instagram,
  Facebook,
  Check,
  Copy,
  Loader2,
} from "lucide-react";

// This address also receives the contact-form submissions (via FormSubmit.co).
// Note: it is a university address and will stop working after graduation —
// swap it for a permanent personal email before then.
const CONTACT_EMAIL = "ahmedalfey@iut-dhaka.edu";
const PHONE = "(+880) 1764604075";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/AASani29",
    Icon: Github,
    hover: "hover:bg-slate-950",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-alfey-sani/",
    Icon: Linkedin,
    hover: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmedalfeysani/",
    Icon: Instagram,
    hover: "hover:bg-pink-600",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/alfey.sani.5/",
    Icon: Facebook,
    hover: "hover:bg-blue-500",
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
    } catch {
      /* clipboard unavailable — the mailto link is still there */
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot — bots fill hidden fields, humans don't.
    if (data._honey) return;

    setStatus("sending");
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim(),
            email: data.email,
            message: data.message,
            _subject: `Portfolio contact: ${data.subject || "New message"}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Get in touch</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Open to full-time software and AI engineering roles. Happy to talk
            about opportunities or collaborations.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-400">Email</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="break-all text-slate-100 hover:text-white"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center gap-1 rounded-md bg-slate-700 px-2 py-0.5 text-xs text-slate-200 transition-colors hover:bg-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      {copied ? (
                        <>
                          <Check size={12} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Phone</p>
                  <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`} className="text-slate-100 hover:text-white">
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-400">Location</p>
                  <p className="text-slate-100">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-slate-400">
                Find me online
              </h3>
              <div className="flex gap-3">
                {socials.map(({ name, href, Icon, hover }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${hover}`}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-slate-800 p-6 sm:p-8">
            {status === "sent" ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600">
                  <Check size={22} />
                </div>
                <p className="mt-4 text-lg font-semibold">Message sent</p>
                <p className="mt-1 text-sm text-slate-400">
                  Thanks — I&apos;ll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm font-medium text-blue-400 hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      required
                      autoComplete="given-name"
                      className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      autoComplete="family-name"
                      className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-slate-600 bg-slate-700 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder="Your message…"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Email me directly at{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Ahmed Alfey Sani
        </div>
      </div>
    </section>
  );
};

export default Contact;
