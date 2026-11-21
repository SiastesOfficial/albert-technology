import Image from "next/image";
import Link from "next/link";
import { sessions } from "../session/sessionsData";

const LINK =
  "text-white/60 transition hover:text-white hover:underline md:text-black/60 md:hover:text-black";
const HAIRLINE = "border-white/15 md:border-black/15";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/#fade-up" },
      { label: "Session", href: "/#session" },
    ],
  },
  {
    title: "Sessions",
    links: sessions.map(({ title, slug }) => ({
      label: title,
      href: `/session/${slug}`,
    })),
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];


const socials = [
  { label: "X", src: "/x-logo.svg", desktopSrc: "/x-logo-b.svg", href: "#" },
  {
    label: "Instagram",
    src: "/instagram-logo.svg",
    desktopSrc: "/instagram-logo-b.svg",
    href: "#",
  },
  {
    label: "Facebook",
    src: "/facebook-logo.svg",
    desktopSrc: "/facebook-logo-b.svg",
    href: "#",
  },
  {
    label: "TikTok",
    src: "/tiktok-logo.svg",
    desktopSrc: "/tiktok-logo-b.svg",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      className={`border-t bg-black text-[#f5f5f7] md:bg-white md:text-[#1d1d1f]  md:mt-24 ${HAIRLINE}`}
    >
      <div className="mx-auto max-w-5xl px-6 pb-8 pt-16 md:pt-20">
        <div className={`flex flex-col gap-3 border-b pb-10 ${HAIRLINE} items-start`}>
          <Image
            src="/logo-w.svg"
            width={400}
            height={28}
            alt="Albert Sarpong"
            className=" w-auto md:hidden"
          />
          <Image
            src="/logo.svg"
            width={700}
            height={300}
            alt="Albert Sarpong"
            className="hidden  w-auto md:block"
          />
        </div>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 md:grid-cols-4"
        >
          {columns.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-xl font-semibold">{title}</h2>
              <ul className="mt-3 space-y-2.5 text-sm md:text-md">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={LINK}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xl font-semibold">Connect</h2>
            <ul className="mt-3 flex items-center gap-4">
              {socials.map(({ label, src, href, desktopSrc }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    className="block opacity-60 transition hover:opacity-100">
                    <Image
                      src={src}
                      width={20}
                      height={20}
                      alt=""
                      className="md:hidden"
                    />
                    <Image
                      src={desktopSrc}
                      width={26}
                      height={26}
                      alt=""
                      className="hidden md:block"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div
          className={`flex flex-col gap-3 border-t pt-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:text-black/60 ${HAIRLINE}`}
        >
          <p>
            Copyright © {new Date().getFullYear()} Albert Sarpong. All rights
            reserved.
          </p>
          <ul className={`flex divide-x ${HAIRLINE}`}>
            <li className="pr-3">
              <Link href="/privacy" className={LINK}>
                Privacy Policy
              </Link>
            </li>
            <li className="pl-3">
              <Link href="/terms" className={LINK}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}