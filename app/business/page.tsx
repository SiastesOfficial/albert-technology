import Image from "next/image";
import Link from "next/link";

type Chapter = {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  principles?: { title: string; body: string }[];
};

const intro =
  "is a digital assets company built on a simple conviction: the best technology should not be reserved for the places that already have it. Under one roof, it brings together ventures across fintech, healthcare and beyond, each one aimed at a problem real people face every day.";

const chapters: Chapter[] = [
  {
    eyebrow: "The question",
    heading: "Why should access depend on where you live?",
    paragraphs: [
      "Every lasting company begins with a question it refuses to put down. For Siastes, the question is easy to say and hard to answer: why should access to sound financial infrastructure, to timely health information, or to a fair path toward owning a home depend on where you happen to live?",
      "Across Africa and the Middle East, the tools to answer that question increasingly exist. Mobile money, blockchain rails, artificial intelligence and cloud infrastructure have all matured. What is still scarce is the patient work in between: building products people can actually use, in markets the global giants rarely design for, and teaching people to use them with confidence.",
      "That in-between work is where Siastes lives.",
    ],
  },
  {
    eyebrow: "The operator",
    heading: "A decade inside the old system.",
    paragraphs: [
      "Albert Sarpong did not come to this question from the outside. He spent more than a decade in finance across the UK, the US and Canada, with four years as an institutional trader and five as an analyst, at institutions including TD Bank and Barclays. He trained at the University of Westminster, UCL and the University of Toronto, earning a BSc and MSc in Finance and a master’s in fintech.",
      "Those years were an education in how capital really moves: how decisions are made under pressure, how risk is priced, and where otherwise good systems quietly break down. They also made one thing clear. The distance between what technology can do and what most people can reach is rarely a gap in invention. It is a gap in building, and in teaching.",
      "Siastes is what he built to close it.",
    ],
  },
  {
    eyebrow: "The group",
    heading: "One roof. Many ventures. One standard.",
    paragraphs: [
      "Siastes is structured as a group, not a single product. It is a digital assets company that contains other companies, spanning fintech, healthcare and more. The thinking behind the structure is straightforward: each venture stays focused on a single problem, while the group around it brings the strategy, technology and financial discipline that a lone startup would take years to assemble.",
      "It is a deliberately patient model. Instead of chasing one big idea, Siastes builds a portfolio of useful ones, and holds each to the same test: does this make life measurably easier for the person on the other side of the screen?",
    ],
  },
  {
    eyebrow: "The ventures",
    heading: "Built around real problems.",
    paragraphs: [
      "KRAM2 is a healthcare company that alerts people to the availability of medicine and hospital bed spaces. When someone is unwell, every hour spent searching is an hour that matters. KRAM2 exists to shorten that search.",
      "Amortigage is an online mortgage brokerage that helps people qualify for mortgages. Buying a home is among the largest financial decisions a family will ever make, and too often the process feels closed to anyone without an insider’s guidance. Amortigage turns it into clear steps a person can follow.",
      "Different industries, same instinct: find the point where people are stuck, and build a way through.",
    ],
  },
  {
    eyebrow: "The mission",
    heading: "Technology only includes the people who understand it.",
    paragraphs: [
      "That is why education sits at the heart of Siastes, and why Albert leads its efforts to make fintech and blockchain education accessible to underserved communities across Africa and the Middle East.",
      "The aim is not to turn everyone into a developer or a trader. It is to give people the confidence to take part in the digital economy on their own terms: to understand what a digital asset is, what it can do, what it cannot, and how to tell opportunity from hype.",
      "Inclusion, in other words, is not a feature added at the end. It is the whole point.",
    ],
  },
  {
    eyebrow: "The principles",
    heading: "Three rules every venture lives by.",
    paragraphs: [],
    principles: [
      {
        title: "Start with a real problem.",
        body: "If a person is not stuck somewhere, there is nothing to build. Every Siastes venture begins with a specific frustration, not a trend.",
      },
      {
        title: "Teach as you build.",
        body: "A product people do not understand is a product few will trust. Education travels with the technology, every time.",
      },
      {
        title: "Measure what matters.",
        body: "Growth is the result, never the goal. The goal is a customer, a patient or a family who is better off than they were before.",
      },
    ],
  },
  {
    eyebrow: "In the room",
    heading: "Showing up where the conversation is happening.",
    paragraphs: [
      "Building for a continent means taking part in the conversation about its future. In May 2026, the Digital Assets Summit Africa announced a strategic partnership with Siastes AI. The summit took place in Accra in September, under a theme about turning digital asset policy into investment, jobs and economic growth, and brings together policymakers, regulators, financial institutions, technology companies and investors.",
      "The partnership was framed around shared goals: innovation, entrepreneurship, digital inclusion and responsible technology development across Ghana and the wider continent. For Siastes, it is a seat at the table where the rules and the opportunities of Africa’s digital economy are being discussed.",
    ],
  },
  {
    eyebrow: "The invitation",
    heading: "Ready to build something that lasts?",
    paragraphs: [
      "Siastes is still being built, with partners, with communities, and with leaders willing to rethink how their organizations work.",
      "If you lead an asset management firm held back by legacy systems, or you are starting a business and want to grow it with clear eyes, Albert works with you directly: one to one, in a live session built around your situation.",
    ],
  },
];

const COLUMN = "w-full px-4 md:w-[80%] xl:w-[70%]";
const BODY =
  "text-lg leading-relaxed text-white/80 md:text-xl ";

export default function Business() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center bg-black max-sm:py-32 text-white  md:py-38 2xl:max-w-7xl">
      <h2 className={`${COLUMN} text-pretty text-xl leading-snug md:text-2xl`}>
        <span className="font-semibold text-accent-pink">Siastes Group</span>{" "}
        {intro}
      </h2>

      <div className="my-16 w-[min(90vw,55rem)] md:w-[min(70vw,55rem)]">
        <div className="relative h-70 w-full overflow-hidden rounded border md:h-120">
          <Image
            src="/siastes-1.webp"
            fill
            className="object-cover"
            alt="Siastes at an industry event"
          />
        </div>
        <div className="my-2 flex w-full items-center justify-center gap-2 md:my-4 md:gap-4">
          <div className="relative h-40 w-1/2 overflow-hidden rounded border md:h-70">
            <Image
              src="/siastes-2.webp"
              fill
              className="object-cover"
              alt="Siastes team members at an event"
            />
          </div>
          <div className="relative h-40 w-1/2 overflow-hidden rounded border md:h-70">
            <Image
              src="/siastes-3.jpeg"
              fill
              className="object-cover"
              alt="Siastes at an industry event"
            />
          </div>
        </div>
      </div>

      <div className={`${COLUMN} space-y-16 md:space-y-20`}>
        {chapters.map(({ eyebrow, heading, paragraphs, principles }) => (
          <section key={eyebrow}>
            <p className="font-semibold text-accent-pink">{eyebrow}</p>
            <h3 className="mt-2 text-balance text-3xl font-semibold md:text-4xl">
              {heading}
            </h3>

            {paragraphs.length > 0 && (
              <div className={`mt-6 space-y-5 ${BODY}`}>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {principles && (
              <ol className="mt-8 space-y-8">
                {principles.map(({ title, body }, index) => (
                  <li key={title} className="flex gap-5">
                    <span className="text-lg text-white/40 ">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="text-xl font-semibold md:text-2xl">
                        {title}
                      </p>
                      <p className={`mt-2 ${BODY}`}>{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}

        <Link
          href="/#session"
          className="inline-block rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-white/85  ">
          Book a session
        </Link>
      </div>
    </div>
  );
}