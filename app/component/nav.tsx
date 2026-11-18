"use client";

import { DotsThreeCircleIcon } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import Menu from "./menu";
import { useBoundStore } from "@/store/store";
import Link from "next/link";

export default function Nav() {
  const { setMenu } = useBoundStore();

  return (
    <div className="fixed w-full pointer-events-none flex items-center justify-center ">
      <div
        className="max-w-3xl w-full md:bg-white md:border border-violet-700  h-14 md:h-22 rounded-b-3xl 
       md:rounded-b-[6rem] flex items-center justify-between px-3 md:p-6 md:px-16 relative z-9999">
        <Link  onClick={() => setMenu(false)}  href="/" className="pointer-events-auto">
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt="logo"
            className="max-sm:hidden"
          />
          <Image
            src="/logo-w.svg"
            width={32}
            height={32}
            alt="logo"
            className="md:hidden"
          />
        </Link>
        <div className="hidden md:flex items-center gap-3 pointer-events-auto font-light">
          <p className="">One-on-One</p>
          <p className="">Academy</p>
        </div>
        <DotsThreeCircleIcon
          size={24}
          className="max-sm:inline hidden text-white cursor-pointer pointer-events-auto"
          onClick={() => setMenu()}
        />
        <DotsThreeCircleIcon
          size={32}
          className="max-sm:hidden cursor-pointer pointer-events-auto"
          onClick={() => setMenu()}
        />
      </div>
      <Menu />
    </div>
  );
}
