import Link from "next/link";
import React from "react";

const MainSideBarBody = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="relative w-full flex flex-col gap-8 p-8">
        <Link href="/" className="text-third text-2xl">
          فیلمون
        </Link>
        <Link
          href="/"
          className="relative text-third text-2xl flex items-center gap-2 group"
        >
          خارجی
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 group-hover:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <ul className="z-10 w-80 absolute delay-200 bg-first rounded-3xl top-8 -right-10 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>کمدی</li>
              <li>ریالیتی شو</li>
              <li>عاشقانه</li>
              <li>ترسناک</li>
              <li>اکشن</li>
            </div>
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>مستند</li>
              <li>تاریخی</li>
              <li>جنایی</li>
              <li>جنگی</li>
              <li>تاک شو</li>
            </div>
          </ul>
        </Link>
        <Link
          href="/"
          className="relative text-third text-2xl flex items-center gap-2 group"
        >
          ایرانی
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 group-hover:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <ul className="z-10 w-80 absolute delay-200 bg-first rounded-3xl top-8 -right-10 left-2 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>کمدی</li>
              <li>ریالیتی شو</li>
              <li>عاشقانه</li>
              <li>ترسناک</li>
              <li>اکشن</li>
            </div>
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>مستند</li>
              <li>تاریخی</li>
              <li>جنایی</li>
              <li>جنگی</li>
              <li>تاک شو</li>
            </div>
          </ul>
        </Link>
        <Link
          href="/"
          className="relative text-third text-2xl flex items-center gap-2 group"
        >
          سینمایی
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 group-hover:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <ul className="z-10 w-80 absolute delay-200 bg-first rounded-3xl top-8 -right-10 left-2 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>کمدی</li>
              <li>ریالیتی شو</li>
              <li>عاشقانه</li>
              <li>ترسناک</li>
              <li>اکشن</li>
            </div>
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>مستند</li>
              <li>تاریخی</li>
              <li>جنایی</li>
              <li>جنگی</li>
              <li>تاک شو</li>
            </div>
          </ul>
        </Link>
        <Link
          href="/"
          className="relative text-third text-2xl flex items-center gap-2 group"
        >
          سریال ها
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 group-hover:rotate-180"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <ul className="z-10 w-80 absolute delay-200 bg-first rounded-3xl top-8 -right-10 left-2 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>کمدی</li>
              <li>ریالیتی شو</li>
              <li>عاشقانه</li>
              <li>ترسناک</li>
              <li>اکشن</li>
            </div>
            <div className="flex flex-col gap-6 child-hover:text-second">
              <li>مستند</li>
              <li>تاریخی</li>
              <li>جنایی</li>
              <li>جنگی</li>
              <li>تاک شو</li>
            </div>
          </ul>
        </Link>

        <Link href="/" className="text-third text-2xl">
          درباره ما
        </Link>
        <Link href="/" className="text-third text-2xl">
          تماس با ما
        </Link>
      </div>
      <p className="w-full p-4 border-t border-third/10 text-third/60 text-xl">
        فیلم و سریال را با ما تجربه کنید
      </p>
    </div>
  );
};

export default MainSideBarBody;
