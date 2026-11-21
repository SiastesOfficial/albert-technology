import Image from "next/image";
import Link from "next/link";

type Company = {
  name: string;
  tag: string;
  brief: string;
  featured?: boolean;
  logo: string;
};

const companies: Company[] = [
  {
    name: "KRAM2",
    tag: "Healthcare",
    brief:
      "Alerts people to medicine availability and open hospital beds, so they find care faster when it matters most.",
    logo: "/kram2.jpeg",
  },
  {
    name: "Amortigage",
    tag: "Fintech · Mortgages",
    brief:
      "An online mortgage brokerage that helps people qualify and move toward owning a home with confidence.",
    logo: "/amortigage.jpeg",
  },
  {
    name: "Siastes",
    tag: "Parent company",
    brief:
      "A digital assets company that brings ventures across fintech, healthcare, and beyond under one roof.",
    featured: true,
    logo: "/siastes.jpeg",
  },
];

export default function Companies() {
  return (
    <section
      id="companies"
      className="my-12 mt-24 flex flex-col items-center px-6 md:my-24 md:mt-32"
    >
      <h2 className="rounded-full border border-dashed border-white/30 p-4 px-6 md:text-lg font-normal text-white/70 md:border-black/30 md:text-black/70">
        Companies growing under me
      </h2>

      <ul className="my-10 grid w-full max-w-4xl gap-4 sm:grid-cols-2 md:gap-6">
        {companies.map((company) => (
          <li
            key={company.name}
            className={company.featured ? "sm:col-span-2" : undefined}
          >
            <CompanyCard {...company} />
          </li>
        ))}
      </ul>
      <div className="my-4">
        <Link
          href="/session"
          className=" py-3 text-accent-pink border border-accent-pink px-8 font-bold text-xl rounded-full  cursor-pointer"
        >
          Read more
        </Link>
      </div>
    </section>
  );
}

const CompanyCard = ({ name, tag, brief, featured, logo }: Company) => (
  <article
    className={`relative h-full overflow-hidden rounded-4xl border border-[#4D4C4C] p-6 pb-24 text-white md:p-8 md:pb-24 md:text-black md:border-black/20 ${
      featured ? "min-h-64 md:min-h-72" : "min-h-72"
    }`}
  >
    <p className="text-sm text-white/60 md:text-black/60">{tag}</p>
    <h3
      className={`mt-2 font-semibold ${
        featured ? "text-4xl md:text-5xl" : "text-2xl"
      }`}
    >
      {name}
    </h3>
    <p
      className={`mt-4 text-white/80 md:text-black/80 ${
        featured ? "max-w-xl text-xl md:text-2xl" : "text-lg"
      }`}
    >
      {brief}
    </p>

    <div className="absolute bottom-6 right-6 flex size-14 items-center justify-center rounded-full overflow-hidden  border border-white/30 md:border-black/30  md:bottom-8 md:right-8">
      <Image src={logo} fill alt="" />
    </div>
  </article>
);
