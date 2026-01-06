"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // TEMPORARY: Clear session storage for testing
    sessionStorage.removeItem("hasSeenLoading");

    // Check if the user has already seen the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");
    console.log("hasSeenLoading:", hasSeenLoading);

    if (hasSeenLoading) {
      // Skip loading screen if already seen
      setIsLoading(false);
      setShowContent(true);
      setHasLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    // Mark as seen in session storage
    sessionStorage.setItem("hasSeenLoading", "true");
    setIsLoading(false);
    setHasLoaded(true);

    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <main
        className={`min-h-screen bg-slate-50 transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        <Hero />
        <Education />
        <Research />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
