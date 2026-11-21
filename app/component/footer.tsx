import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-24 px-8 bg-black md:text-black md:bg-white text-white border-t pt-32">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <p className="text-white/50 text-lg md:text-black/50">Navigation</p>
          <div className="mt-2 flex flex-col gap-4">
            <Link
              href=""
              className="px-4 py-2 border border-white/30 md:border-black/30 text-sm font-medium rounded-full w-fit"
            >
              Home
            </Link>
            <Link
              href=""
              className="px-4 py-2 border border-white/30 md:border-black/30 text-sm font-medium rounded-full w-fit"
            >
              Session
            </Link>
            <Link
              href=""
              className="px-4 py-2 border border-white/30 md:border-black/30 text-sm font-medium rounded-full w-fit"
            >
              Courses
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white/50 text-lg md:text-black/50">Legal</p>
          <div className="mt-2 flex flex-col gap-4">
            <Link
              href=""
              className="px-4 py-2 border border-white/30 md:border-black/30 text-sm font-medium rounded-full w-fit"
            >
              Public Policy
            </Link>
            <Link
              href=""
              className="px-4 py-2 border border-white/30 md:border-black/30 text-sm font-medium rounded-full w-fit"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="flex  items-end justify-between mt-24">
          <Image
            src="/logo-w.svg"
            width={70}
            height={32}
            alt="logo"
            className="md:hidden"
          />
          <div className="py-4">
            <p className="text-white/50 text-sm">Social media</p>
            <div className="flex items-center gap-2 mt-3">
                <Link href="">
                <Image src="/x-logo.svg" width={24} height={24} alt="facebook-logo"/>
                </Link>
                 <Link href="">
                <Image src="/instagram-logo.svg" width={24} height={24} alt="instagram-logo"/>
                </Link>
                 <Link href="">
                <Image src="/facebook-logo.svg" width={24} height={24} alt="facebook-logo"/>
                </Link>
                 <Link href="">
                <Image src="/tiktok-logo.svg" width={24} height={24} alt="tiktok-logo"/>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
