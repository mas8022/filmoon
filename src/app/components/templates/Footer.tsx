import Image from "next/image";
import React from "react";
import FooterCommentBox from "./FooterCommentBox";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full bg-forth overflow-hidden">
      <div className="xm:block hidden">
        <div className="absolute -top-[20rem] -left-[10rem] w-24 h-[100rem] -rotate-45 bg-second"></div>
        <div className="absolute -top-[20rem] left-[10rem] w-24 h-[100rem] -rotate-45 bg-second"></div>
        <div className="absolute -top-[20rem] left-[30rem] w-24 h-[100rem] -rotate-45 bg-second"></div>
        <div className="absolute -top-[20rem] left-[50rem] w-24 h-[100rem] -rotate-45 bg-second"></div>
        <div className="absolute -top-[20rem] left-[70rem] w-24 h-[100rem] -rotate-45 bg-second"></div>
      </div>
      <div className="relative w-full overflow-hidden py-12 px-6 md:px-16">
        <div className="absolute inset-0 -z-10 flex justify-center gap-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-16 md:w-24 h-[100rem] -rotate-45 bg-second"
              style={{ left: `${i * 15}rem` }}
            />
          ))}
        </div>

        {/* محتوای فوتر */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* بخش چپ */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Image
                src="/images/logo.png"
                width={80}
                height={80}
                alt="logo"
                className="size-20 md:size-32 object-cover"
              />
              <p className="text-lg md:text-2xl text-center sm:text-right p-4 rounded-2xl bg-first/50">
                فیلمون بهترین پلتفرم تماشای آنلاین فیلم و سریال است. با آرشیوی
                گسترده و کیفیت پخش عالی، لحظات سرگرم‌کننده‌ای را برای شما فراهم
                می‌کنیم. تیم پشتیبانی ما همیشه در کنار شماست تا تجربه‌ای لذت‌بخش
                از تماشای آنلاین داشته باشید.
              </p>
            </div>

            <FooterCommentBox />

            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link href={"/"}>
                <Image
                  src={"/images/enamad.png"}
                  placeholder="blur"
                  blurDataURL={"/images/enamad.png"}
                  width={80}
                  height={80}
                  alt="نماد اعتماد الکترونیک"
                  className="size-20 md:size-32 object-cover rounded-xl"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src={"/images/neshan.jpg"}
                  placeholder="blur"
                  blurDataURL={"/images/neshan.jpg"}
                  width={80}
                  height={80}
                  alt="ساماندهی"
                  className="size-20 md:size-32 object-cover rounded-xl"
                />
              </Link>
              <div className="flex flex-col items-center gap-4 border-r-4 border-second px-4 text-lg md:text-2xl">
                <span>0911-318-5137</span>
                <span>011-3202-2418</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
