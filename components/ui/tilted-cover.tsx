"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface TiltedCoverProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right";
  cover?: ReactNode;
  tiltCover?: boolean;
  children?: ReactNode;
  image?: {
    src: string;
    alt?: string;
    className?: string;
  };
  containerClassName?: string;
}

export default function TiltedCover({
  children,
  direction = "left",
  tiltCover = true,
  cover,
  image,
  className,
  containerClassName,
  ...props
}: TiltedCoverProps) {
  const tiltLeft = direction === "left";
  const factor = tiltLeft ? 1 : -1;

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center overflow-hidden py-4",
        containerClassName
      )}
      {...props}
    >
      <div className={cn("group/tilt relative h-64 w-60 sm:h-72 sm:w-64", className)}>
        {/* Background content */}
        <div
          className="box-border pointer-events-none relative h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 p-4 shadow-xl transition-all duration-500 ease-out group-hover/tilt:transform-none group-hover/tilt:pointer-events-auto group-hover/tilt:shadow-2xl"
          style={{
            transform: `perspective(500px) rotateY(${factor * 18}deg) scale(0.88) translateX(${-factor * 16}%)`,
          }}
        >
          {children}
          <div className="absolute inset-0 h-full w-full bg-black/20 transition-all group-hover/tilt:bg-transparent pointer-events-none" />
        </div>

        {/* Cover Content */}
        <div
          className={cn(
            "box-border pointer-events-none absolute inset-0 h-full w-full rounded-2xl border-[3px] border-white/20 bg-zinc-900 shadow-2xl transition-all delay-75 duration-500 ease-out group-hover/tilt:transform-none group-hover/tilt:opacity-0 overflow-hidden",
            {
              "group-hover/tilt:left-[160%]": tiltLeft,
              "group-hover/tilt:-left-[160%]": !tiltLeft,
            }
          )}
          style={{
            transform: tiltCover
              ? `perspective(500px) rotateY(${factor * 18}deg)`
              : undefined,
          }}
        >
          <div className="relative h-full w-full rounded-xl overflow-hidden bg-zinc-950">
            {image ? (
              <Image
                src={image.src}
                alt={image.alt || "Cover"}
                fill
                className={cn("h-full w-full object-cover object-center", image?.className)}
              />
            ) : (
              cover
            )}
            {/* Subtle gloss overlay on cover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
