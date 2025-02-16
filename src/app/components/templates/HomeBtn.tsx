import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBtn = () => {
  return (
    <Link href='/' className="p-6 rounded-full shadow-md bg-gradient-to-br from-third to-forth">
      <Image
        src="/images/home.svg"
        width={1}
        height={1}
        alt="home-button"
        className="size-14"
      />
    </Link>
  );
};

export default HomeBtn;
