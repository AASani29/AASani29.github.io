"use client";

import {
  Cursor,
  CursorContainer,
  CursorFollow,
  CursorProvider,
  type CursorFollowAlign,
  type CursorFollowSide,
} from "@/components/ui/cursor";

export default function CustomCursor({
  global = true,
  enableCursor = true,
  enableCursorFollow = true,
  side = "bottom",
  sideOffset = 15,
  align = "end",
  alignOffset = 5,
}: {
  global?: boolean;
  enableCursor?: boolean;
  enableCursorFollow?: boolean;
  side?: CursorFollowSide;
  sideOffset?: number;
  align?: CursorFollowAlign;
  alignOffset?: number;
}) {
  return (
    <CursorProvider global={global}>
      <CursorContainer>
        {enableCursor && (
          <Cursor>
            <svg
              className="h-6 w-6 text-violet-400 drop-shadow-[0_2px_10px_rgba(139,92,246,0.6)]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
              />
            </svg>
          </Cursor>
        )}
        {enableCursorFollow && (
          <CursorFollow
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            <div className="rounded-full bg-zinc-900/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-zinc-200 shadow-xl border border-white/15 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Alfey Sani</span>
            </div>
          </CursorFollow>
        )}
      </CursorContainer>
    </CursorProvider>
  );
}
