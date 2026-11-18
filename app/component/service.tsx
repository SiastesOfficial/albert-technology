"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";

type ServiceItem = { title: string; body: ReactNode };

const services: ServiceItem[] = [
  {
    title: "Modernize Infrastructure",
    body: (
      <>
        Legacy systems slow every decision. I assess what you have, retire what
        holds you back, and build a foundation that scales as your{" "}
        <span className="text-accent-pink">assets</span> do.
      </>
    ),
  },
  {
    title: "Streamline Your Data",
    body: "Scattered data means slower reporting and weaker insight. I connect your sources into clean workflows, so your team spends its time on decisions, not reconciliation.",
  },
  {
    title: "Build Your Tech Strategy",
    body: "No templates. I work directly with leadership to shape a roadmap around your firm, your clients, and your growth targets, then stay to see it delivered.",
  },
  {
    title: "Prepare for Fintech & Blockchain",
    body: "Digital assets and new financial technology are reshaping the industry. I help your leadership understand what matters, what doesn't, and how to move first.",
  },
];

export default function Service() {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ startX: 0, startLeft: 0 });
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);

  const step = () => {
    const items = track.current?.children;
    if (!items || items.length < 2) return 1;
    return (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft;
  };

  const goTo = (index: number) => {
    const next = Math.min(Math.max(index, 0), services.length - 1);
    track.current?.scrollTo({ left: next * step(), behavior: "smooth" });
  };

  const onScroll = () => {
    if (track.current) setActive(Math.round(track.current.scrollLeft / step()));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { startX: e.clientX, startLeft: track.current.scrollLeft };
    setDragging(true);
    track.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !track.current) return;
    track.current.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX);
  };

  const onPointerUp = () => setDragging(false);

  return (
    <section className="my-24 flex w-full min-w-0 max-w-full flex-col items-center text-white relative z-20">
      <p className="rounded-full border border-dashed border-white/30 p-4 px-6 text-lg text-white/70">
        ways I help you grow.
      </p>

      <ul
        ref={track}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`my-12 flex w-full min-w-0 gap-4 overflow-x-auto px-[calc((100vw-min(80vw,28rem))/2)] scrollbar-none [&::-webkit-scrollbar]:hidden ${
          dragging ? "cursor-grabbing select-none" : "cursor-grab snap-x snap-mandatory"
        }`}>
        {services.map((service, i) => (
          <li key={service.title} className="w-[min(80vw,28rem)] shrink-0 snap-center">
            <Card index={i + 1} {...service} />
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous service"
          className="size-10 rounded-full border border-white/30 transition disabled:opacity-30 pointer-events-auto"
        >
          ←
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Services">
          {services.map((service, i) => (
            <button
              key={service.title}
              role="tab"
              aria-selected={i === active}
              aria-label={service.title}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-white" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(active + 1)}
          disabled={active === services.length - 1}
          aria-label="Next service"
          className="size-10 rounded-full border border-white/30 transition disabled:opacity-30 pointer-events-auto"
        >
          →
        </button>
      </div>
    </section>
  );
}

const Card = ({ index, title, body }: ServiceItem & { index: number }) => (
  <div className="relative h-110 w-full overflow-hidden rounded-4xl border border-[#4D4C4C] p-8 py-12">
    <div className="absolute bottom-2 right-1">
      <Image src="/clover-leaf.svg" width={150} height={60} alt="" />
    </div>
    <span className="text-white/40 text-lg">0{index}</span>
    <h3 className="mt-2 text-3xl font-semibold text-balance">{title}</h3>
    <p className="mt-6">{body}</p>
  </div>
);