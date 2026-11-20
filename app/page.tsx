"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MagicTransform from "@/components/MagicTransform";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Research from "@/components/Research";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor global={true} enableCursor={true} enableCursorFollow={true} />

      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}

      <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-violet-500 selection:text-white">
        <Navigation />
        <Hero />
        <Experience />
        <Projects />
        <MagicTransform />
        <Skills />
        <Research />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </>
  );
}
