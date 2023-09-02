/** @format */

import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import YoutubeSvg from "./svg-icons/YoutubeSvg";
import { GoHome, GoHomeFill, GoVideo } from "react-icons/go";
import { LuHistory } from "react-icons/lu";
import { BiLike, BiSolidVideos, BiTimeFive } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import YtSortsSvg from "./svg-icons/YtSortsSvg";
import SubscriptionSvg from "./svg-icons/SubscriptionSvg";

// icons
// AiOutlineMenu  - menu
// AiOutlineMenu  - menu

export default function Sidebar() {
  return (
    <div>
      <Icons />
    </div>
  );
}

function Icons() {
  return (
    <div className="flex flex-col p-3 gap-2">
      <YoutubeSvg className=" max-w-[90px] h-[20px] fill-white " />
      <p className="flex gap-2">
        <AiOutlineMenu className="text-xl" /> -menu
      </p>
      start
      <p className="flex gap-2">
        <GoHome className="text-xl" /> -home
      </p>
      <p className="flex gap-2">
        <YtSortsSvg className=" fill-white" /> -Shorts
      </p>
      <p className="flex gap-2">
        <SubscriptionSvg className=" fill-white" /> -Subscription
      </p>
      <p className="flex gap-2">
        <LuHistory className="text-xl" /> -history
      </p>
      <p className="flex gap-2">
        <BiTimeFive className="text-xl" /> - Watch later
      </p>
      <p className="flex gap-2">
        <RiVideoLine className="text-xl" /> -Your video
      </p>
      <p className="flex gap-2">
        <BiLike className="text-xl" /> -Liked video
      </p>
      <p className="flex gap-2">
        <BiSolidVideos className="text-xl " /> -Liked video
      </p>
    </div>
  );
}
