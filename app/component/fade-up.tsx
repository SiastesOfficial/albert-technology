"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const credentials = [
  { value: "10+ years", label: "in finance" },
  { value: "UK · US · Canada", label: "where he has worked" },
  { value: "TD Bank · Barclays", label: "institutions" },
    { value: "9years", label: "prophetic" },
];

export default function FadeUp() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.utils.toArray<HTMLElement>("[data-highlight]").forEach((el) => {
        SplitText.create(el, {
          type: "words",
          autoSplit: true,
          onSplit(self) {
            return gsap.from(self.words, {
              opacity: 0.15,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "bottom center",
                scrub: true,
              },
            });
          },
        });
      });

      gsap.from("[data-credential]", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: "[data-credentials]", start: "top 85%" },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="fade-up"
      ref={root}
      className="flex flex-col items-center px-6 py-24 max-sm:bg-black md:py-32"
    >
      <p className="rounded-full border border-dashed border-white/30 px-6 py-3 text-lg text-white/70 ">
        About
      </p>

      <div className="mt-12 w-full max-w-5xl md:w-[75%]">
        <p
          data-highlight
          className="text-pretty text-start text-[26px] font-medium leading-snug text-white md:text-[38px] "
        >
          <span className="font-bold">Albert Sarpong</span> has spent more than
          a decade in finance across the UK, US, and Canada, four years as an
          institutional trader and five as an analyst, at institutions including
          TD Bank and Barclays. He studied at the University of Westminster,
          UCL, and the University of Toronto, earning a BSc and MSc in Finance
          and a master&apos;s in fintech, and trained at two prophetic ministry
          schools in Atlanta, Georgia, USA. Today, he is the founder of{" "}
          <span className="font-bold text-accent-pink">Siastes Group</span> and{" "}
          <span className="font-bold text-accent-pink">
            Home of Rapha Church
          </span>
          . He helps people start and grow their businesses and grow in spirit,
          and guides them on where to invest.
        </p>

        <p
          data-highlight
          className="mt-12 text-start text-[26px] font-bold leading-snug text-accent-pink md:mt-16 md:text-[44px] "
        >
          Innovation{" "}
          <span className="text-white md:text-accent-pink">matters</span> most
          when it includes{" "}
          <span className="text-white md:text-accent-pink">everyone</span>.
        </p>

        <dl
          data-credentials
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/15 pt-10 md:mt-20 lg:grid-cols-4 "
        >
          {credentials.map(({ value, label }) => (
            <div
              key={label}
              data-credential
              className="flex flex-col-reverse justify-end gap-1"
            >
              <dt className="text-sm text-white/60 ">
                {label}
              </dt>
              <dd className="text-lg font-semibold text-white md:text-xl  text-balance">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
