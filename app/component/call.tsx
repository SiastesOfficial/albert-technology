import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Call() {
  return (
    <div className="flex flex-col items-center">
      <div className="my-24 w-[min(80vw,60rem)]  h-130 md:h-140 border border-[#4D4C4C] rounded-4xl md:rounded-[4rem] overflow-hidden relative">
        <div className="w-full h-[30%] relative md:hidden">
          <Image src="/line.svg" fill className="object-fit " alt="line" />
        </div>
        <Image
          src="/line.svg"
          width={800}
          height={200}
          className="object-fit absolute mt-[-9rem] hidden md:block"
          alt="line"
        />
        <div className="h-full text-white  flex flex-col md:justify-end px-6 py-10 md:p-10">
          <p className="text-[32px] md:text-[48px] text-balance">
            Let’s grow your business{" "}
            <span className="text-5xl font-bold">together</span>
          </p>
          <p className="my-3 text-sm md:text-lg">
            A 30-minute call to find where your technology is holding your
            growth back.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/session" className="bg-accent-pink py-3 px-6 md:px-10 rounded-full my-4">
              <p className="font-bold text-sm md:text-white md:text-xl">Book a call</p>
            </Link>
            <Link href="/session" className="bg-white md:border  p-3 rounded-full">
              <Image
                src="/arrow-top.svg"
                width={24}
                height={24}
                className=""
                alt="arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
