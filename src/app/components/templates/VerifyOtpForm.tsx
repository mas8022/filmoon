"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const VerifyOtpForm: React.FC<{ phone: string }> = ({ phone }) => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [time, setTime] = useState<number>(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((p) => p - 1);
    }, 1000);

    inputsRef.current[0]?.focus();

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      window.location.reload();
    }
  }, [time]);

  const handleChange = async (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newOtp.every((digit) => digit !== "")) {
        try {
          const response = await fetch("/api/sms/verify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone, code: newOtp.join("") }),
          });

          const result = await response.json();

          if (result.status === 200) {
            toast.success(result.message);
            router.replace("/?query=authentication");

          } else {
            toast.error(result.message);
          }
        } catch (error) {
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="w-full h-screen center px-4">
      <div className="shadow-md sm:p-20 p-7 flex flex-col gap-4 rounded-3xl bg-second/10">
        <h2 className="sm:text-5xl text-3xl font-semibold text-first/70 text-center mb-4">
          تأیید کد
        </h2>
        <p className="text-gray-400 sm:text-3xl text-xl text-center mb-6">
          لطفاً کد ۵ رقمی ارسال‌شده به شماره موبایل خود را وارد کنید
        </p>

        <div className="flex justify-center flex-row-reverse gap-2 mb-6">
          {otp.map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              dir="rtl"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="sm:size-32 size-20 text-center sm:text-7xl text-4xl text-first bg-first/20 font-light border-y rounded-2xl focus:outline-none outline-none focus:border-y-2 focus:border-first"
            />
          ))}
        </div>
        <span className="text-forth text-center">{time}ثانیه</span>
      </div>
    </div>
  );
};

export default VerifyOtpForm;
