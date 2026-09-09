"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Skip the intro entirely for reduced-motion users.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      onLoadingComplete();
      return;
    }

    const duration = 750;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setFadeOut(true);
        window.setTimeout(onLoadingComplete, 320);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onLoadingComplete]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-slate-50 transition-opacity duration-300 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6 px-6">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/25 to-emerald-500/25 blur-xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-emerald-600 text-2xl font-bold tracking-tight text-white shadow-lg">
            AS
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold text-slate-900">Ahmed Alfey Sani</p>
          <p className="text-sm text-slate-500">
            Full-Stack Developer &amp; AI Engineer
          </p>
        </div>

        <div className="h-1 w-48 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-600"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
