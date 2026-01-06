"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import TargetCursor from "./TargetCursor";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseY = e.clientY;
      updateVisibility();
    };

    const handleScroll = () => {
      updateVisibility();
    };

    const updateVisibility = () => {
      const isAtTop = window.scrollY < 50;
      const isMouseAtTop = mouseY <= 100;
      // Always show if at top of page, regardless of mouse position
      setIsVisible(isAtTop || (!isAtTop && isMouseAtTop));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Set initial state - should be visible when at top
    const isAtTop = window.scrollY < 50;
    setIsVisible(isAtTop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* New GSAP-powered cursor */}
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isVisible
            ? "transform translate-y-0 opacity-100"
            : "transform -translate-y-full opacity-0"
        }`}
      >
        {/* Glassmorphism Background with Geometric Design */}
        <div >
          {/* Animated Gradient Background */}
          <div ></div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-transparent transform -translate-x-16 -translate-y-16 rotate-45"></div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-600 to-transparent transform translate-x-12 -translate-y-12 rotate-12"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              {/* Logo with Enhanced Design */}
              <div className="cursor-target group">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-300"></div>
                  <div className="relative text-2xl font-bold text-slate-800 px-3 py-2  rounded-lg backdrop-blur-sm border border-white/30 ">
                    Alfey{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                      Sani
                    </span>
                    <span className="text-blue-600 animate-pulse">.</span>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation with Pill Design */}
              <div className="hidden md:flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm border border-white/30 shadow-lg">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative cursor-target group px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/30"
                  >
                    <span className="relative z-10 text-slate-800 font-medium group-hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                    </span>
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Active Indicator */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 group-hover:w-8 transition-all duration-300"></div>
                  </a>
                ))}
              </div>

              {/* Mobile Navigation Toggle with Enhanced Design */}
              <button
                className="md:hidden cursor-target group relative p-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="relative z-10 text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Navigation Menu with Enhanced Design */}
            {isOpen && (
              <div className="md:hidden mb-4 overflow-hidden">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl mx-4">
                  <div className="px-4 py-6 space-y-2">
                    {navItems.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="cursor-target group relative block px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/30"
                        onClick={() => setIsOpen(false)}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animation: "slideInFromRight 0.3s ease-out forwards",
                        }}
                      >
                        <span className="relative z-10 text-slate-800 font-medium group-hover:text-blue-600 transition-colors duration-200 text-lg">
                          {item.name}
                        </span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-8 bg-gradient-to-r from-blue-600 to-emerald-600 group-hover:w-1 transition-all duration-300 rounded-r"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Add custom CSS for mobile menu animation */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;
