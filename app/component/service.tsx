"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

type ServiceItem = { title: string; body: ReactNode };

const services: ServiceItem[] = [
  {
    title: "Start Your Business",
    body: (
      <>
        Every lasting business begins on{" "}
        <span className="text-accent-pink">solid ground</span>. I help you turn
        an idea into a plan, sharpen your offer, and take the first steps with
        clarity, not guesswork.
      </>
    ),
  },
  {
    title: "Grow Your Business",
    body: (
      <>
        Growth takes <span className="text-accent-pink">wisdom</span>, not just
        effort. I find what is holding you back, build the strategy and systems
        to scale, and stay with you until it works.
      </>
    ),
  },
  {
    title: "Invest and Trade Wisely",
    body: (
      <>
        Know where your money goes to work. I teach you how professionals think
        about <span className="text-accent-pink">risk and return</span>,
        whether you trade as an institution or as a retail trader.
      </>
    ),
  },
  {
    title: "Grow Your Spirit Man",
    body: (
      <>
        A business is carried by the person behind it. I help you anchor your
        decisions, your rhythm, and your life in{" "}
        <span className="text-accent-pink">faith</span>, so your growth never
        costs you your peace.
      </>
    ),
  },
];

const DESKTOP_QUERY = "(min-width: 1024px)";

export default function Service() {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ startX: 0, startLeft: 0 });
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(1);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const sync = () => setPerView(query.matches ? 3 : 1);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const pages = services.length - perView + 1;
  const current = Math.min(active, pages - 1);

  const step = () => {
    const items = track.current?.children;
    if (!items || items.length < 2) return 1;
    return (
      (items[1] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft
    );
  };

  const goTo = (index: number) => {
    const next = Math.min(Math.max(index, 0), pages - 1);
    track.current?.scrollTo({ left: next * step(), behavior: "smooth" });
  };

  const onScroll = () => {
    if (!track.current) return;
    setActive(Math.round(track.current.scrollLeft / step()));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { startX: e.clientX, startLeft: track.current.scrollLeft };
    setDragging(true);
    track.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !track.current) return;
    track.current.scrollLeft =
      drag.current.startLeft - (e.clientX - drag.current.startX);
  };

  const onPointerUp = () => setDragging(false);

  return (
    <section className="relative z-20 my-24 flex w-full min-w-0 max-w-full flex-col items-center text-white">
      <p className="rounded-full border border-dashed border-white/30 p-4 px-6 text-lg text-white/70 md:border-black/30 md:text-black/70">
        ways I help you grow.
      </p>

      <ul
        ref={track}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`my-12 flex w-full min-w-0 gap-4 overflow-x-auto px-[calc((100%-min(80vw,28rem))/2)] scrollbar-none md:px-[calc((100%-min(80vw,24rem))/2)] lg:w-[min(calc(100%-4rem),72rem)] lg:gap-6 lg:px-0 [&::-webkit-scrollbar]:hidden ${
          dragging
            ? "cursor-grabbing select-none snap-none"
            : "cursor-grab snap-x snap-mandatory"
        }`}
      >
        {services.map((service, i) => (
          <li
            key={service.title}
            className="w-[min(80vw,28rem)] shrink-0 snap-center md:w-[min(80vw,24rem)] lg:w-[calc((100%-3rem)/3)] lg:snap-start"
          >
            <Card index={i + 1} {...service} />
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous service"
          className="pointer-events-auto size-10 rounded-full border border-white/30 transition disabled:opacity-30 md:border-black/30 md:text-black"
        >
          ←
        </button>

        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Services"
        >
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={services[i].title}
              role="tab"
              aria-selected={i === current}
              aria-label={`Show ${services[i].title}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-white md:bg-black"
                  : "w-2 bg-white/30 md:bg-black/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === pages - 1}
          aria-label="Next service"
          className="pointer-events-auto size-10 cursor-pointer rounded-full border border-white/30 transition disabled:opacity-30 md:border-black/30 md:text-black"
        >
          →
        </button>
      </div>
    </section>
  );
}

const Card = ({ index, title, body }: ServiceItem & { index: number }) => (
  <div className="relative h-110 w-full overflow-hidden rounded-4xl border border-[#4D4C4C] p-8 py-12 md:h-130 md:rounded-[3rem] lg:h-140">
    <div className="absolute bottom-2 right-1">
      <Image
        src="/clover-leaf.svg"
        width={150}
        height={60}
        alt=""
        className="md:hidden"
      />
      <Image
        src="/clover-leaf-black.svg"
        width={200}
        height={60}
        alt=""
        className="hidden md:block"
      />
    </div>
    <span className="text-lg text-white/40 md:text-black/40">0{index}</span>
    <h3 className="mt-2 text-balance text-3xl font-semibold hover:text-accent-pink md:mt-6 md:text-4xl md:text-black lg:text-3xl xl:text-4xl">
      {title}
    </h3>
    <p className="mt-6 md:mt-8 md:text-lg md:text-black">{body}</p>
  </div>
);