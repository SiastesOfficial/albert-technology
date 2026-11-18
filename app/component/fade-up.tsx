"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function FadeUp() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray("[data-highlight]").forEach((el) => {
        SplitText.create(el, {
          type: "words",
          autoSplit: true, // re-splits on resize and font load
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
    },
    { scope: root },
  );

  return (
    <div ref={root} className="flex flex-col items-center bg-black">
      <div className="w-[75%] rounded-4xl text-center text-black my-24">
        <p
          data-highlight
          className="text-[26px] md:text-[38px] font-medium text-white md:text-black text-start leading-snug"
        >
          Ten years across the UK, US, and Canada, including TD Bank and
          Barclays, taught me how finance really works. Now, as founder of{" "}
          <span className="text-accent-pink font-bold">Siastes AI</span>, I’m
          opening fintech and blockchain education to underserved communities
          across Africa and the Middle East.
        </p>

        <p
          data-highlight
          className="text-[26px] md:text-[38px] font-bold text-accent-pink md:text-black text-start mt-12"
        >
          Innovation <span className="text-white">matters</span> most when it
          includes <span className="text-white">everyone</span>.
        </p>
      </div>
    </div>
  );
}
