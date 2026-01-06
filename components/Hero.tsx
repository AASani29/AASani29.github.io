"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="animate-pulse">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Available for Opportunities
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                  Sani
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg">
                FullStack Developer, Research Enthusiast & Software Engineering Major passionate
                about building innovative solutions with AI/ML technologies.
              </p>
            </div>

            <div className="space-y-3 text-slate-600">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <span>ahmedalfey@iut-dhaka.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <span>(+880) 1764604075</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/AASani29"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium cursor-target"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-alfey-sani/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200 font-medium cursor-target"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>

            <div className="pt-8">
              <p className="text-slate-500 text-sm">
                Graduating in{" "}
                <span className="font-semibold text-slate-700">2026</span> from
                Islamic University of Technology
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                  {!imageError ? (
                    <Image
                      src="/images/sani.jpg"
                      alt="Ahmed Alfey Sani"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold text-slate-600">
                        AS
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
