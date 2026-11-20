"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

export type CursorFollowSide = "top" | "bottom" | "left" | "right";
export type CursorFollowAlign = "start" | "center" | "end";

interface CursorContextType {
  x: number;
  y: number;
  visible: boolean;
  global: boolean;
  hoverText: string | null;
  setHoverText: (text: string | null) => void;
}

const CursorContext = createContext<CursorContextType>({
  x: -100,
  y: -100,
  visible: false,
  global: false,
  hoverText: null,
  setHoverText: () => {},
});

export function CursorProvider({
  children,
  global = false,
}: {
  children: React.ReactNode;
  global?: boolean;
}) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);

  useEffect(() => {
    // Only enable on devices that have a fine mouse pointer
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    if (global) {
      const handleMouseMove = (e: MouseEvent) => {
        setPos({ x: e.clientX, y: e.clientY });
        if (!visible) setVisible(true);
      };

      const handleMouseLeave = () => setVisible(false);
      const handleMouseEnter = () => setVisible(true);

      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      document.body.addEventListener("mouseleave", handleMouseLeave);
      document.body.addEventListener("mouseenter", handleMouseEnter);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
      };
    }
  }, [global, visible]);

  return (
    <CursorContext.Provider
      value={{
        ...pos,
        visible,
        global,
        hoverText,
        setHoverText,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function CursorContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function Cursor({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { x, y, visible } = useContext(CursorContext);

  if (!visible) return null;

  return (
    <div
      className={`pointer-events-none fixed z-[999999] transition-transform duration-75 ease-out ${className}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-2px, -2px)",
      }}
    >
      {children || (
        <svg
          className="h-6 w-6 text-violet-400 drop-shadow-[0_2px_8px_rgba(139,92,246,0.6)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
          />
        </svg>
      )}
    </div>
  );
}

export function CursorFollow({
  children,
  side = "bottom",
  sideOffset = 18,
  align = "end",
  alignOffset = 10,
  className = "",
}: {
  children?: React.ReactNode;
  side?: CursorFollowSide;
  sideOffset?: number;
  align?: CursorFollowAlign;
  alignOffset?: number;
  className?: string;
}) {
  const { x, y, visible, hoverText } = useContext(CursorContext);

  // Smooth lag interpolation
  const [lagPos, setLagPos] = useState({ x: -100, y: -100 });
  const requestRef = useRef<number>();

  useEffect(() => {
    let currentX = x;
    let currentY = y;

    const animate = () => {
      currentX += (x - currentX) * 0.18;
      currentY += (y - currentY) * 0.18;
      setLagPos({ x: currentX, y: currentY });
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [x, y]);

  if (!visible) return null;

  // Calculate position offsets based on side and align
  let topOffset = sideOffset;
  let leftOffset = alignOffset;

  if (side === "top") topOffset = -sideOffset - 28;
  if (side === "bottom") topOffset = sideOffset;
  if (align === "start") leftOffset = -alignOffset - 40;
  if (align === "end") leftOffset = alignOffset;

  return (
    <div
      className={`pointer-events-none fixed z-[999998] transition-opacity duration-200 ${className}`}
      style={{
        left: `${lagPos.x + leftOffset}px`,
        top: `${lagPos.y + topOffset}px`,
      }}
    >
      {hoverText ? (
        <div className="rounded-full bg-violet-600/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-xl shadow-violet-600/30 border border-violet-400/30 animate-in fade-in zoom-in-95 duration-150">
          {hoverText}
        </div>
      ) : (
        children || (
          <div className="rounded-full bg-zinc-900/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-zinc-200 shadow-xl border border-white/15">
            Software &amp; AI
          </div>
        )
      )}
    </div>
  );
}
