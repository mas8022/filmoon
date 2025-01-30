import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarUl from "./NavbarUl";
import ProfileBtn from "./ProfileBtn";

const Navbar = () => {
  return (
    <div className="w-full h-32 fixed top-0 left-0 flex items-center justify-between mmd:px-40 px-10 z-30">
      <div className="h-full flex items-center xm:gap-8 gap-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={50}
            height={50}
            alt="logo"
            className="size-20"
          />
        </Link>
        <NavbarUl />
      </div>
      <div className="h-full flex items-center xm:gap-8 gap-4 xm:flex-row-reverse">
        <ProfileBtn/>
        <button className="bg-second btn">اشتراک</button>
      
      </div>
    </div>
  );
};

export default Navbar;
