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
                width={800}
                height={300}
                alt="hero text"
                className="xl:block hidden"
              />
            </div>
            <div className=" w-full   flex flex-col items-center mt-8">
              <p className="md:w-[80%] xl:w-[70%]  text-2xl text-black  text-center ">
                I help founders and leaders start businesses on solid ground, grow them with wisdom, and stay anchored in faith while they do it. With over a decade in finance across the UK, US, and Canada, I bring practical strategy to the work of building, and the conviction that the person behind the business matters as much as the business itself.
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center mt-6">
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
            <h1 className="text-white mt-64 text-[68px] text-center font-light leading-0">
              <span className="text-[56px] font-extralight leading-16 ">Start and</span> <br />
              <span className="font-semibold leading-16">Grow in</span> <br /> <span className="font-black text-[110px] pt-2 leading-28">Faith</span>
            </h1>
            <div className="w-[80%] text-center   mt-6">
              <p className="text-white/70">
               I help founders start strong, grow wisely, and build the spirit man behind the business.
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
