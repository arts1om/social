"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-700">
          SOCIAL APP
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%]">
        {/* LINKS */}
        <div className="flex gap-6">
          <Link href="/">Homepage</Link>
          <Link href="/friends">Friends</Link>
          <Link href="/">Stories</Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <FiUser className="text-gray-500 w-5 h-5 cursor-pointer" />
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
