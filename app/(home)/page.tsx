"use client";

import Image from "next/image";
import Background from "../component/background";
import { Lottie } from "lottie-react";
import animationData from "../../public/albert.json";
import FadeUp from "../component/fade-up";
import Service from "../component/service";
import Call from "../component/call";
import Link from "next/link";
import Companies from "../component/companies";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans  ">
      <main className="flex flex-1 w-full 2xl:max-w-7xl max-w-4xl flex-col items-center justify-between pt-16 md:px-16   sm:items-start">
        <Background />
        <div className="w-full h-[80vh] flex flex-col items-center ">
          <div className="w-full h-full overflow-hidden  hidden md:flex flex-col justify-end  relative">
            <div className="w-full flex items-center justify-center">
              <Image
                src="/grow.svg"
                width={500}
                height={300}
                alt="hero text"
                className="xl:hidden"
              />
              <Image
                src="/grow.svg"
                width={700}
                height={300}
                alt="hero text"
                className="xl:block hidden"
              />
            </div>
            <div className=" w-full   flex flex-col items-center mt-8">
              <p className="md:w-[80%] xl:w-[70%] pb-4 text-2xl text-black  text-center ">
                I help asset management firms break free from legacy bottlenecks
                and scale with confidence. Through Albert Technology, I partner
                directly with leadership to modernize infrastructure, streamline
                data workflows, and build bespoke tech strategies that drive
                real AUM growth.
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center mb-4 mt-4">
              <Link
                href="/session"
                className=" py-3 text-accent-pink border border-accent-pink px-8 font-bold text-xl rounded-full  cursor-pointer"
              >
                Book a session
              </Link>
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("fade-up")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-3 bg-accent-pink text-white px-8 font-bold text-xl rounded-full cursor-pointer"
              >
                Learn more
              </button>
            </div>
          </div>
          {/* small device */}
          <div className=" md:hidden flex flex-col items-center ">
            <h1 className="text-white mt-64 text-[68px] text-center font-light leading-16">
              <span className="text-[56px] font-bold ">Grow your </span> <br />
              business
            </h1>
            <div className="w-[80%] text-center   mt-6">
              <p className="text-white/70">
                I help asset managers replace legacy bottlenecks with technology
                that drives AUM growth.
              </p>
            </div>
            <div className="flex justify-center gap-4 items-center w-full mt-10 ">
              <Link
                href="/session"
                className=" py-2 text-accent-pink border border-accent-pink px-4 font-bold text-sm rounded-full "
              >
                Book a session
              </Link>
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("fade-up")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="py-2 bg-accent-pink text-white px-4 font-bold text-sm rounded-full "
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  bg-black md:bg-white  ">
          <FadeUp />
          <Service />
          <Companies />
          <Call />
        </div>
        {/* main profile */}
      </main>
    </div>
  );
}
