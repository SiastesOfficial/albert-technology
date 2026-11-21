"use client";

import React, { useRef } from "react";
import { useBoundStore } from "@/store/store";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const links = [
  { label: "Home", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Prophetechnology", href: "/prophetechnology" },
  { label: "Appointment", href: "/session" },
];

export default function Menu() {
  const menu = useBoundStore((state) => state.menu);
  const setMenu = useBoundStore((state) => state.setMenu);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (menu) {
        gsap.fromTo(
          ".nav-link",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      } else {
        // Quickly fade out when closing
        gsap.to(".nav-link", {
          y: 20,
          opacity: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [menu], scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`w-full h-screen fixed flex flex-col items-center bg-black text-white menu z-50 left-0 top-0  ${
        menu ? "clipped pointer-events-auto" : "pointer-events-none"
      }`}>
      <div className="max-w-3xl px-4 text-white mt-24 md:mt-32 w-full flex flex-col gap-3">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            onClick={() => setMenu(false)}
            className="nav-link opacity-0 capitalize text-xl md:text-2xl hover:underline
            font-semibold cursor-pointer decoration-white underline-offset-8 decoration-1 w-fit" >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}