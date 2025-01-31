"use client";
import Link from "next/link";
import React from "react";
import Side from "../modules/Side";
import MainSideBarBody from "./MainSideBarBody";
import { useModal } from "@/hooks/useModal";

const NavbarUl = () => {
  const { openModal, closeModal, Modal } = useModal();
  return (
    <div className="h-full flex items-center gap-4">
      <div className="llg:flex hidden items-center gap-8">
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
          <ul className="w-72 absolute delay-200 bg-first top-8 rounded-2xl border-y-2 border-second/80 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
          <ul className="w-72 absolute delay-200 bg-first top-8 rounded-2xl border-y-2 border-second/80 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
          <ul className="w-72 absolute delay-200 bg-first top-8 rounded-2xl border-y-2 border-second/80 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
          <ul className="w-72 absolute delay-200 bg-first top-8 rounded-2xl border-y-2 border-second/80 invisible group-hover:visible group-hover:mt-5 group-hover:opacity-100 opacity-0 flex gap-10 p-7">
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
      <Side sideBarName="main-sidebar" cls="llg:hidden block">
        <MainSideBarBody />
      </Side>

      <button
        onClick={openModal}
        className="xm:flex hidden items-center gap-2 text-2xl mr-4"
      >
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

      <div
        onClick={openModal}
        className="xm:hidden flex center border-2 rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <Modal>
        <div className="md:w-[70rem] xm:w-[40rem] w-[30rem] rounded-3xl bg-forth p-8 md:pb-28 xm:pb-20 pb-16 flex flex-col items-center md:gap-10 gap-6">
          <div className="w-full flex justify-end">
            <div
              onClick={closeModal}
              className="xm:size-16 size-12 rounded-xl bg-third/10 center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="xm:size-12 size-8 stroke-third/50"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="w-full md:h-28 xm:h-20 h-16 md:rounded-3xl rounded-xl border border-third/20 md:px-8 xm:px-4 px-2 py-4 flex items-center gap-8 mb-10">
            <input
              type="text"
              placeholder="فیلم و سریال مورد نظرتون رو جستجو کنید..."
              className="w-full md:text-4xl xm:text-2xl text-xl text-third/80 bg-first/0 outline-none focus:outline-none placeholder:text-third/40"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="md:size-14 size-10 stroke-third/60 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <span className="xm:text-3xl text-2xl text-second">موردی جستجو نشده...</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavbarUl;
