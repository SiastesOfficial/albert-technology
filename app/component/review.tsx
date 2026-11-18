"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type RevealTextProps = {
  children: string;
  className?: string;
};

/**
 * Text rises out from behind a clip line, tilted, and settles flat.
 * The wrapper is the mask; the inner span is what moves.
 */
export default function RevealText({ children, className }: RevealTextProps) {
  const scope = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) {
        gsap.set(".reveal-inner", { yPercent: 0, rotate: 0 });
        return;
      }

      gsap.fromTo(
        ".reveal-inner",
        { yPercent: 130, rotate: -4 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.7,
          delay: 0.33,
          ease: "expo.out",
        },
      );
    },
    { scope },
  );

  return (
    // Bottom padding keeps descenders (g, y) inside the mask once settled.
    <span
      ref={scope}
      className={`block overflow-hidden pb-[0.2em] -mb-[0.2em] ${className ?? ""}`}
    >
      <span
        className="reveal-inner block origin-bottom-left will-change-transform"
        style={{ transform: "translateY(130%) rotate(-4deg)" }}
      >
        {children}
      </span>
    </span>
  );
}