"use client";

import Image from "next/image";
import Background from "../component/background";
import { Lottie } from "lottie-react";
import animationData from "../../public/albert.json";
import FadeUp from "../component/fade-up";
import Service from "../component/service";
import Call from "../component/call";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans -z-10 ">
      <main className="flex flex-1 w-full 2xl:max-w-7xl max-w-4xl flex-col items-center justify-between pt-16 md:px-16   sm:items-start">
        <Background />
        <div className="w-full h-[80vh] flex flex-col items-center ">
          <div className="w-full h-full overflow-hidden  hidden md:block relative">
            <Lottie
              src={animationData}
              autoplay={true}
              rendererSettings={{
                preserveAspectRatio: "xMidYMid slice",
              }}
              className="w-fit relative mt-24"
            />
            <div className="absolute w-full h-full top-0 flex flex-col items-center justify-end">
              <p className="w-[70%] pb-24 text-2xl text-black  ">
                I help asset management firms break free from legacy bottlenecks
                and scale with confidence. Through Albert Technology, I partner
                directly with leadership to modernize infrastructure, streamline
                data workflows, and build bespoke tech strategies that drive
                real AUM growth.
              </p>
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
              <div className=" py-2 text-accent-pink border border-accent-pink px-4 font-bold text-sm rounded-full ">
                Book a session
              </div>
              <div className="py-2 bg-accent-pink text-white px-4 font-bold text-sm rounded-full ">
                Learn more
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  bg-black md:bg-white  ">
          <FadeUp />
          <Service/>
          <Call/>
        </div>
        {/* main profile */}
      </main>
    </div>
  );
}
