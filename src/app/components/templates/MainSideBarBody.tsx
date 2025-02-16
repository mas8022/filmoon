"use client";
import ThemeToggle from "@/utils/ThemToggle";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MainSideBarBody = () => {
  const [countUse, setCountUse] = useState<number>(0);
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="w-full flex-col gap-8">
        <div className="w-full flex items-center justify-center gap-4 p-4">
          <div className="rounded-full bg-white/20 size-60 flex flex-col items-center justify-center p-4 gap-4">
            {countUse ? (
              <>
                <span className="text-8xl text-white">{countUse}</span>
                <span className="text-lg font-bold text-white/80 text-center">
                  تعداد دفعات قابل استفاده
                </span>
              </>
            ) : (
              <>
                <Link href="/buy-unity" className="btn bg-white text-forth">
                  خرید
                </Link>
                <span className="text-xl font-bold text-white/80 text-center">
                  اشتراک ندارید
                </span>
              </>
            )}
          </div>
        </div>
        <div className="relative w-full flex flex-col gap-6 p-8">
          <Link href="/" className="text-2xl text-white">
            خانه
          </Link>
          <Link href="/" className="text-2xl text-white">
            علاقه مندی ها
          </Link>
          <Link href="/" className="text-2xl text-white">
            تماس با ما
          </Link>
          <Link href="/" className="text-2xl text-white">
            درباره ما
          </Link>
          <Link href="/" className="text-2xl text-white mb-10">
            صفحه قوانین
          </Link>
          <ThemeToggle/>
        </div>
      </div>
      <div className="w-full flex gap-2 items-center border-t border-white/40">
        <Image src="/images/logo.png" width={50} height={50} alt="logo" />
        <span className="text-white/60"> با ما شیک پوش باشید.</span>
      </div>
    </div>
  );
};

export default MainSideBarBody;
