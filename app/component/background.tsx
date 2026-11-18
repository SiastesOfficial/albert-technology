import Image from "next/image";
import React from "react";

export default function Background() {
  return (
    <div className="w-full h-screen absolute inset-0 -z-10 max-sm:bg-black bg-white overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        src="/bac.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      {/* Optional Dark/Tinted Background Overlay for readability */}
      <div className="w-full h-full absolute overflow-hidden">
         <Image
          src="/mobile-background.png"
          fill
          loading="eager"
          alt="blur"
          className="object-cover z"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 md:hidden flex" />
      <div className="w-full h-full absolute top-0 z-30 md:flex hidden">
        <Image
          src="/ab-background.jpg"
          fill
          loading="eager"
          alt="blur"
          className="object-cover z"
        />
      </div>
    </div>
  );
}
