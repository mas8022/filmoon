"use client";
import React, { useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { localStore } from "../../../../utils/localStore";

interface SideProps {
  children: React.ReactNode;
  sideBarName: string;
  cls?: string;
}

const Side: React.FC<SideProps> = ({ children, sideBarName, cls = "" }) => {
  const [sideFlag, setSideFlag] = localStore(sideBarName, false);

  useEffect(() => {
    const closeSideBarHandler = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        e.target.contains(document.querySelector(".bgActive")!)
      ) {
        setSideFlag(false);
      }
    };

    window.addEventListener("click", closeSideBarHandler);

    return () => {
      window.removeEventListener("click", closeSideBarHandler);
    };
  }, [setSideFlag]);

  return (
    <div className={`${cls}`}>
      <div className="size-14 center bg-second rounded-xl">
        <svg
          onClick={() => setSideFlag(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div
        className={`w-[21rem] h-screen bg-forth shadow-2xl !fixed top-0 transition-all ease-in-out duration-[0.4s] z-[1002] ${
          sideFlag ? "right-0" : "-right-[30rem]"
        }`}
      >
        {children}
      </div>
      <div
        className={
          sideFlag
            ? "bgActive !w-full !h-screen z-[1001] bg-black/20 !fixed !top-0 !left-0"
            : "hidden"
        }
      ></div>
    </div>
  );
};

export default Side;
