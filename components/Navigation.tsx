"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const allItems = [{ name: "Home", href: "#home" }, ...navItems];
    const sections = allItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full px-4 py-2.5 sm:px-6 sm:py-3 flex items-center justify-between shadow-2xl backdrop-blur-2xl ${
          scrolled
            ? "bg-zinc-950/85 border border-zinc-800/80 shadow-violet-500/5 ring-1 ring-white/10"
            : "bg-zinc-900/70 border border-white/10 shadow-black/40"
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3 focus-visible:outline-none"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-emerald-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-white">
              AS
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-violet-300 transition-colors">
              Ahmed Sani
            </span>
            <span className="text-[10px] text-zinc-400 font-medium hidden sm:block">
              Software & AI Eng.
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1 bg-zinc-950/60 p-1 rounded-full border border-white/5">
          {navItems.map((item) => {
            const active = activeSection === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  active
                    ? "text-white bg-violet-600/90 shadow-sm shadow-violet-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-1.5 text-xs font-medium text-white shadow-md shadow-violet-600/20 transition-all hover:scale-[1.02] hover:shadow-violet-600/40"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
          className="flex lg:hidden h-8 w-8 items-center justify-center rounded-full bg-white/10 text-zinc-200 hover:text-white transition-colors"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile drop-down */}
      {isOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 z-50 rounded-3xl border border-white/10 bg-zinc-950/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all ${
                    active
                      ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                      : "text-zinc-300 hover:bg-white/5"
                  }`}
                >
                  <span>{item.name}</span>
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-3 text-sm font-medium text-white"
              >
                <span>Hire me / Get in touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
