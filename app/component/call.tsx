import Image from "next/image";
import React from "react";

export default function Call() {
  return (
    <div className="flex flex-col items-center">
      <div className="my-24 w-[min(80vw,28rem)]  h-130 border border-[#4D4C4C] rounded-4xl overflow-hidden">
        <div className="w-full h-[30%] relative">
          <Image src="/line.svg" fill className="object-fit" alt="line" />
        </div>
        <div className="text-white px-6 py-10">
          <p className="text-[32px] text-balance">
            Let’s grow your business{" "}
            <span className="text-5xl font-bold">together</span>
          </p>
          <p className="my-3 text-sm">
            A 30-minute call to find where your technology is holding your
            growth back.
          </p>
          <div className="flex items-center gap-3">
            <div className="bg-accent-pink py-3 px-6 rounded-full my-4">
                <p className="font-bold text-sm">Book a call</p>
            </div>
            <div className="bg-white p-3 rounded-full">
                  <Image src="/arrow-top.svg" width={24} height={24} className="" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
