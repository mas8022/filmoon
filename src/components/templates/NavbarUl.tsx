import Link from "next/link";
import React from "react";

const NavbarUl = () => {
  return (
    <div className="h-full flex items-center gap-8">
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
        <ul className="w-96 absolute delay-200 bg-first/50 top-8 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
        <ul className="w-96 absolute delay-200 bg-first/50 top-8 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
        <ul className="w-96 absolute delay-200 bg-first/50 top-8 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
        <ul className="w-96 absolute delay-200 bg-first/50 top-8 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
      <button className="flex items-center gap-2 text-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        جستجو
      </button>
    </div>
  );
};

export default NavbarUl;
