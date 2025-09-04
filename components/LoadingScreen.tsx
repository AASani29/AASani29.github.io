"use client";

import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [startTime] = useState(() => Date.now()); // Initialize once

  const fullText = "Ahmed Alfey Sani";
  const typingSpeed = 100; // milliseconds per character (much faster typing)
  const pauseAfterTyping = 50; // pause after typing is complete (shorter pause)
  const fadeOutDuration = 200; // fade out duration (faster fade)
  const minimumLoadTime = 2500; // minimum total loading time (2.5 seconds instead of 6)

  useEffect(() => {
    console.log("LoadingScreen mounted");
    console.log("fullText:", fullText);
    console.log("typingSpeed:", typingSpeed);
  }, []);

  useEffect(() => {
    // Typing animation
    console.log(
      "Typing effect - currentIndex:",
      currentIndex,
      "fullText.length:",
      fullText.length
    );
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        console.log("Adding character:", fullText[currentIndex]);
        setCurrentText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText, typingSpeed]);

  useEffect(() => {
    // Handle completion after typing is done
    if (currentIndex >= fullText.length && !isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText.length, isTypingComplete]);

  useEffect(() => {
    // Handle the complete loading sequence
    if (isTypingComplete) {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(
        minimumLoadTime - elapsedTime,
        pauseAfterTyping
      );

      const completeTimer = setTimeout(() => {
        setFadeOut(true);

        // Call completion after fade starts
        const fadeTimer = setTimeout(() => {
          onLoadingComplete();
        }, fadeOutDuration);

        return () => clearTimeout(fadeTimer);
      }, remainingTime);

      return () => clearTimeout(completeTimer);
    }
  }, [
    isTypingComplete,
    startTime,
    minimumLoadTime,
    pauseAfterTyping,
    fadeOutDuration,
    onLoadingComplete,
  ]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-white transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-500/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-slate-500/5 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative text-center px-4 max-w-4xl mx-auto">
        {/* Typing text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-slate-800 mb-4 sm:mb-6 md:mb-8 font-mono leading-tight">
          {currentText}
          {!isTypingComplete && (
            <span className="animate-pulse text-blue-600">|</span>
          )}
        </h1>

        {/* Subtitle that appears after typing */}
        <div
          className={`transition-all duration-500 ${
            isTypingComplete
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 mb-4 sm:mb-6 md:mb-8 px-2">
            FullStack Developer & AI/ML Enthusiast
          </p>

          {/* Loading dots */}
          <div className="flex justify-center space-x-1 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-slate-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Decorative elements - hidden on small screens */}
        <div
          className={`hidden sm:block absolute -top-8 -left-8 transition-all duration-500 ${
            isTypingComplete ? "opacity-100 rotate-0" : "opacity-0 rotate-45"
          }`}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-blue-600/20 rounded-lg transform rotate-45"></div>
        </div>
        <div
          className={`hidden sm:block absolute -bottom-8 -right-8 transition-all duration-500 delay-150 ${
            isTypingComplete ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
          }`}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 border-4 border-emerald-600/20 rounded-lg transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
