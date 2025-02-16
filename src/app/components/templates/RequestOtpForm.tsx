import React, { useState } from "react";
import toast from "react-hot-toast";
import MoonLoader from "react-spinners/MoonLoader";
import Link from "next/link";
import { sanitizedInput } from "../../../../utils/sanitizeInput";
import { iranianPhoneRegex } from "../../../../staticData";

interface RequestOtpFormProps {
  setIsSendCode: React.Dispatch<React.SetStateAction<boolean>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
}

const RequestOtpForm: React.FC<RequestOtpFormProps> = ({
  setIsSendCode,
  phone,
  setPhone,
}) => {
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const requestOtp = async () => {
    if (!iranianPhoneRegex.test(phone)) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
    setLoading(true);

    try {
      const response = await fetch("/api/sms/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        setIsSendCode(true);
      } else {
        toast.error(result.message || "مشکلی رخ داده است");
      }
    } catch (error) {
      toast.error("خطایی رخ داده است. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-[40rem] rounded-3xl flex flex-col gap-10 p-[2rem] sm:p-[3rem] md:sm:p-[5rem] py-[4rem] bg-second/10"
      onSubmit={(e) => {
        e.preventDefault();
        requestOtp();
      }}
    >
      <div className="w-full flex flex-col gap-4">
        <input
          className="w-full h-14 border-0 px-[0.5rem] bg-first/0 text-black/80 border-b border-b-first focus:border-b-2 focus:outline-none outline-none"
          name="phone"
          type="text"
          onChange={(e) => setPhone(sanitizedInput(e.target.value) ?? "")}
          value={phone}
          placeholder="شماره موبایل"
        />
        {phoneError && (
          <span className="text-xl text-red-600">
            شماره موبایل را به درستی وارد کنید
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg border-0 h-[4.5rem] text-3xl bg-second active:bg-second/70 text-white flex items-center justify-center cursor-pointer"
        disabled={loading}
      >
        {loading ? (
          <MoonLoader size={20} color="#fff" />
        ) : (
          <span>ارسال کد</span>
        )}
      </button>

      <p className="text-[1.2rem] text-black">
        در صورت نداشتن حساب کاربری{" "}
        <Link href="/signup" className="text-blue-500">
          ثبت نام
        </Link>{" "}
        کنید
      </p>
    </form>
  );
};

export default RequestOtpForm;
