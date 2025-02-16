"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MoonLoader } from "react-spinners";
import { useRouter, useSearchParams } from "next/navigation";

const ProfileBtn = () => {
  const router = useRouter();
  const searchParams = useSearchParams()?.get("query");
  const [isPending, setIsPendingMe] = useState(false);
  const [role, setRole] = useState("");
  const [fetched, setFetched] = useState(true);

  const restoreTokenFetch = () => {
    fetch("/api/resetToken")
      .then((res) => {
        setIsPendingMe(true);
        return res.json();
      })
      .then((result) => {
        setRole(result.role);
        setFetched(true);
      });
    router.push("?");
  };

  useEffect(() => {
    restoreTokenFetch();
  }, []);

  useEffect(() => {
    if (searchParams === "authentication") {
      restoreTokenFetch();
    }
  }, [searchParams]);

  return !fetched ? (
    <MoonLoader size={30} color="#ffffff" />
  ) : (
    <>
      {role === "USER" || role === "ADMIN" ? (
        <Link href="profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>
      ) : (
        <>
          <Link
            href={"/login"}
            className={isPending ? "" : "pointer-events-none"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={"1.4"}
              stroke="black"
              className="size-12 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          </Link>
        </>
      )}
    </>
  );
};

export default ProfileBtn;
