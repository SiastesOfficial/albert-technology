import Image from "next/image";

const supportingVerses = [
  {
    title: "Build with wisdom",
    verse:
      "Through wisdom is an house builded; and by understanding it is established.",
    reference: "Proverbs 24:3",
    meaning:
      "This is why education runs through everything Albert does. Lasting companies, like lasting homes, rest on understanding. Whether he is advising an asset manager or opening fintech and blockchain education to underserved communities, the goal is the same: leave people wiser, not just better served.",
  },
  {
    title: "Then rise and build",
    verse:
      "The God of heaven, he will prosper us; therefore we his servants will arise and build.",
    reference: "Nehemiah 2:20",
    meaning:
      "Nehemiah did not wait for perfect conditions. He prayed, then picked up the work. Albert treats faith the same way: not a reason to wait, but the reason to begin, and to keep going when the work is hard.",
  },
];

const voices = [
  {
    quote:
      "If you want to go fast, go alone. If you want to go far, go together.",
    author: "African proverb",
  },
  {
    quote:
      "Success is to be measured … by the obstacles which he has overcome.",
    author: "Booker T. Washington, Up From Slavery",
  },
  {
    quote: "It’s not about you.",
    author: "Rick Warren, The Purpose Driven Life",
  },
];

const CARD =
  "rounded-4xl border border-white/20 bg-black/40 p-8 backdrop-blur-sm md:border-black/15 md:bg-transparent md:backdrop-blur-none";
const MUTED = "text-white/70 md:text-black/60";

export default function Prophet() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center max-sm:pt-32 max-sm:text-white md:pt-38 2xl:max-w-7xl">
      <div className="absolute inset-0 -z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-white max-sm:bg-black md:hidden">
        <div className="absolute top-0 h-[70%] w-full">
          <Image
            src="/bible.jpg"
            fill
            loading="eager"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="absolute mt-[-40rem] h-screen w-full overflow-hidden">
          <Image
            src="/mobile-background.png"
            fill
            loading="eager"
            alt=""
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex bg-black/30" />
      </div>

      <section className="flex w-full flex-col items-center gap-8 px-6 max-sm:min-h-[calc(60svh-8rem)] max-sm:justify-center md:w-[80%] md:pb-16 xl:w-[70%]">
        <p className="rounded-full border border-dashed border-white/40 px-6 py-3 text-lg text-white/80 md:border-black/30 md:text-black/70">
          The foundation
        </p>
        <figure className="text-center">
          <blockquote>
            <p className="text-balance text-2xl font-semibold leading-tight md:text-5xl">
              “Except the LORD build the house, they labour in vain that build
              it.”
            </p>
          </blockquote>
          <figcaption className={`mt-6 text-sm tracking-wide ${MUTED}`}>
            Psalm 127:1 · KJV
          </figcaption>
        </figure>
      </section>

      <div className="flex w-full flex-col items-center pb-24 pt-16 max-sm:bg-black">
        <div className="w-full space-y-20 px-6 md:w-[80%] xl:w-[70%] md:space-y-24">
          <div>
            <h2 className="text-balance text-[26px] font-semibold md:text-4xl">
              Faith, translated into work.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-white/80 md:text-xl md:text-black/80">
              <p>
                Albert builds on this verse. Before the platforms, the
                partnerships and the strategy, there is a foundation, and if it
                is not right, nothing built on it will last. Faith is the reason
                the work exists: to serve people well, to build with integrity,
                and to leave things stronger than he found them.
              </p>
              <p>
                Two more passages shape how that looks in practice.
              </p>
            </div>
          </div>

          <ul className="grid gap-6 md:grid-cols-2">
            {supportingVerses.map(({ title, verse, reference, meaning }) => (
              <li key={reference}>
                <article className={`${CARD} h-full`}>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <blockquote className="mt-5 border-l-2 border-accent-pink pl-4">
                    <p className="text-lg italic">“{verse}”</p>
                    <footer className={`mt-2 text-sm ${MUTED}`}>
                      {reference} · KJV
                    </footer>
                  </blockquote>
                  <p className="mt-6 leading-relaxed text-white/80 md:text-black/80">
                    {meaning}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <div>
            <p className="font-semibold text-accent-pink">Words worth building by</p>
            <ul className="mt-6 grid gap-6 md:grid-cols-3">
              {voices.map(({ quote, author }) => (
                <li key={author}>
                  <figure className={`${CARD} flex h-full flex-col justify-between gap-6 p-6`}>
                    <blockquote>
                      <p className="text-xl font-medium leading-snug">
                        “{quote}”
                      </p>
                    </blockquote>
                    <figcaption className={`text-sm ${MUTED}`}>
                      {author}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Faith lays the foundation.{" "}
            <span className="text-accent-pink">Work builds the house.</span>
          </p>
        </div>
      </div>
    </div>
  );
}