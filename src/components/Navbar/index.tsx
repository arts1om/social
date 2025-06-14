import Link from "next/link";
import MobileMenu from "../MobileMenu";

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
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
