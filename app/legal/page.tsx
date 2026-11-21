import Link from "next/link";
import type { ReactNode } from "react";

export const LEGAL = {
  owner: "Albert Sarpong",
  contactEmail: "contact@yourdomain.com",
  governingLaw: "[jurisdiction to be confirmed]",
  effectiveDate: "21 November 2026",
} as const;

export type LegalSection = { id: string; title: string; body: ReactNode };

export function Mail() {
  return (
    <a href={`mailto:${LEGAL.contactEmail}`} className="underline">
      {LEGAL.contactEmail}
    </a>
  );
}

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-dvh bg-black px-6 pb-24 pt-32 text-white md:bg-white md:text-black">
      <article className="mx-auto max-w-3xl">

        <h1 className="mt-8 text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-4 text-white/60 md:text-black/60">
          Effective {LEGAL.effectiveDate}
        </p>
        <p className="mt-8 text-pretty text-xl text-white/80 md:text-black/80">
          {intro}
        </p>

        <nav
          aria-label="On this page"
          className="mt-12 rounded-3xl border border-white/15 p-6 md:border-black/15"
        >
          <ol className="space-y-2 text-sm">
            {sections.map(({ id, title: sectionTitle }, index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-white/70 hover:underline md:text-black/70"
                >
                  {index + 1}. {sectionTitle}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {sections.map(({ id, title: sectionTitle, body }, index) => (
            <section key={id} id={id} className="scroll-mt-28">
              <h2 className="text-2xl font-semibold">
                {index + 1}. {sectionTitle}
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-white/80 md:text-black/80 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                {body}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}