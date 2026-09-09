"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      <main className="min-h-screen bg-slate-50">
        <Navigation />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Research />
        <Education />
        <Contact />
      </main>
    </>
  );
}
