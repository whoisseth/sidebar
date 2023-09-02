/** @format */
"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GoHomeFill } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { cn } from "./cn";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

type Props = {};

export function SidebarOld({}: Props) {
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <div
      className={cn(
        "bg-gray-700 text-white  min-h-screen p-4 ",
        isSidebarOpen ? "w-[250px]" : "w-[65px]"
      )}
    >
      <AiOutlineMenu
        onClick={() => setSidebar(!isSidebarOpen)}
        className="text-2xl mb-10 cursor-pointer"
      />
      <section className="flex flex-col gap-3">
        <SidebarItem
          href="/"
          isSidebarOpen={isSidebarOpen}
          icon={<GoHomeFill />}
          label="Home"
        />
        <SidebarItem
          href="/"
          isSidebarOpen={isSidebarOpen}
          icon={<FaYoutube />}
          label="Subscriptions"
        />
        <SidebarItem
          href="/"
          isSidebarOpen={isSidebarOpen}
          icon={<GoHistory />}
          label="History"
        />
      </section>
    </div>
  );
}

function SidebarItem({
  isSidebarOpen,
  icon,
  label,
  href
}: {
  isSidebarOpen: boolean;
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  const [animationParent] = useAutoAnimate();

  return (
    <Link
      href={href}
      ref={animationParent}
      className="flex items-center  cursor-pointer  "
    >
      <div className="w-[50px] h-auto text-2xl  ">{icon}</div>

      {isSidebarOpen && <p>{label}</p>}
    </Link>
  );
}
