import Image from "next/image";
import Link from "next/link";

import {
  INCLUDED,
  RATE_PER_HOUR,
  formatPrice,
  sessions,
  type Session as SessionData,
} from "./sessionsData";


export default function Session() {
  return (
    <section
      id="session"
      className="flex min-h-screen w-full flex-col items-center px-6 pb-24 pt-32 max-sm:bg-black max-sm:text-white md:pt-40"
    >
      <h2 className="text-center text-[32px] font-bold leading-12 md:text-6xl md:leading-tight">
        <span className="text-[52px] font-bold italic text-accent-pink md:text-6xl">
          Session is,
        </span>
        <br />
        all that you need
      </h2>

      <p className="mt-8 max-w-xl text-balance text-center text-xl text-black/70 max-sm:text-white/70 md:text-2xl">
        One hour with Albert. Clear thinking on your business, your money, and
        your time.
      </p>

      <p className="mt-10 flex items-center gap-2 rounded-full border border-dashed border-black/30 px-6 py-3 max-sm:border-white/30">
        <span className="text-3xl font-extrabold">
          {formatPrice(RATE_PER_HOUR)}
        </span>
        <span className="text-balance text-black/60 max-sm:text-white/60">
          per session, 60 minutes
        </span>
      </p>

      <ul className="mt-12 grid w-full max-w-7xl gap-6 px-4 sm:grid-cols-2 xl:grid-cols-4">
        {sessions.map((session) => (
          <li key={session.slug}>
            <SessionCard session={session} />
          </li>
        ))}
      </ul>

      <ul className="mt-16 flex w-full max-w-4xl flex-col gap-4 max-sm:px-4 md:flex-row md:justify-between">
        {INCLUDED.map((item) => (
          <li key={item} className="flex items-start gap-3 md:max-w-70">
            <Image
              src="/check.svg"
              width={24}
              height={24}
              alt=""
              className="hidden md:block"
            />
            <Image
              src="/check-w.svg"
              width={24}
              height={24}
              alt=""
              className="md:hidden"
            />
            <span className="text-black/80 max-sm:text-white/80 md:text-lg">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const SessionCard = ({ session }: { session: SessionData }) => (
  <article className="flex h-full min-h-90 flex-col rounded-4xl border border-[#4D4C4C] p-8">
    <h3 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">
      {session.title}
    </h3>
    <p className="mt-4 flex-1 text-white/70 md:text-lg md:text-black/70">
      {session.summary}
    </p>
    <Link
      href={`/session/${session.slug}`}
      className="mt-8 rounded-full bg-white py-4 text-center font-bold text-black transition hover:bg-white/85 md:bg-black md:text-white md:hover:bg-black/85"
    >
      Book this session
    </Link>
  </article>
);