import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarUl from "./NavbarUl";

const Navbar = () => {
  return (
    <div className="w-full h-32 fixed top-0 left-0 flex items-center justify-between px-40 z-30">
      <div className="h-full flex items-center gap-8">
        <Image
          src="/images/logo.png"
          width={50}
          height={50}
          alt="logo"
          className="size-20"
        />
        <NavbarUl />
      </div>
      <div className="h-full flex items-center gap-8">
        <button className="bg-second btn">اشتراک</button>
        <Link href="/login" className="bg-first btn border">
          ورود
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
