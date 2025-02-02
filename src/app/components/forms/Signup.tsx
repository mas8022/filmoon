"use client";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { sanitizedInput } from "@/utils/sanitizeInput";
import CheckBox from "../modules/CheckBox";
import { emailRegex } from "@/staticData";
import { SignUpFormValuesType } from "@/types";

const Signup: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const signUp = useFormik<SignUpFormValuesType>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phone: "",
      check: false,
    },
    validate: (values) => {
      const errors: { [key: string]: string } = {};
      if (!values.fullName.trim() || !isNaN(Number(values.fullName))) {
        errors.fullName = "نام تان را به درستی وارد کنید";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "ایمیل تان را به درستی وارد کنید";
      } else if (values.password.length > 15 || values.password.length < 8) {
        errors.password = "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد";
      } else if (isNaN(Number(values.phone)) || !values.phone.trim()) {
        errors.phone = "شماره موبایل تان را به درستی وارد کنید";
      } else if (!values.check) {
        errors.check =
          "پس از خواندن قوانین سایت در صورت قبول قوانین تیک را بزنید";
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);

      await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if (result.status === 201) {
            toast.success(result.message);
            router.replace("/?query=authentication");
          } else {
            toast.error(result.message);
          }
        });
      setLoading(false);
    },
  });

  return (
    <form
      className="w-[40rem] rounded-3xl flex flex-col gap-10 p-[2rem] sm:p-[3rem] md:sm:p-[5rem] py-[4rem]"
      onSubmit={signUp.handleSubmit}
    >
      <div className="w-full flex flex-col gap-4">
        <input
          className="w-full h-14 border-0 px-[0.5rem] bg-first/0 border-b focus:border-b-2 focus:outline-none outline-none"
          id="fullName"
          name="fullName"
          type="text"
          onChange={(e) => {
            const sanitizedValue = sanitizedInput(e.target.value);
            signUp.setFieldValue("fullName", sanitizedValue);
          }}
          value={signUp.values.fullName}
          placeholder="نام و نام خانوادگی"
        />
        {signUp.touched.fullName && signUp.errors.fullName && (
          <span className="text-xl text-red-600">{signUp.errors.fullName}</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-4">
        <input
          className="w-full h-14 border-0 px-[0.5rem] bg-first/0 border-b focus:border-b-2 focus:outline-none outline-none"
          id="email"
          name="email"
          type="text"
          onChange={(e) => {
            const sanitizedValue = sanitizedInput(e.target.value);
            signUp.setFieldValue("email", sanitizedValue);
          }}
          value={signUp.values.email}
          placeholder="ایمیل"
        />
        {signUp.touched.email && signUp.errors.email && (
          <span className="text-xl text-red-600">{signUp.errors.email}</span>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <input
          className="w-full h-14 border-0 px-[0.5rem] bg-first/0 border-b focus:border-b-2 focus:outline-none outline-none"
          id="phone"
          name="phone"
          type="text"
          onChange={(e) => {
            const sanitizedValue = sanitizedInput(e.target.value);
            signUp.setFieldValue("phone", sanitizedValue);
          }}
          value={signUp.values.phone}
          placeholder="شماره موبایل"
        />
        {signUp.touched.phone && signUp.errors.phone && (
          <span className="text-xl text-red-600">{signUp.errors.phone}</span>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <input
          className="w-full h-14 border-0 px-[0.5rem] bg-first/0 border-b focus:border-b-2 focus:outline-none outline-none"
          id="password"
          name="password"
          type="text"
          onChange={(e) => {
            const sanitizedValue = sanitizedInput(e.target.value);
            signUp.setFieldValue("password", sanitizedValue);
          }}
          value={signUp.values.password}
          placeholder="رمز عبور"
        />
        {signUp.touched.password && signUp.errors.password && (
          <span className="text-xl text-red-600">{signUp.errors.password}</span>
        )}
      </div>

      <div className="w-full h-[2rem] px-[0.5rem] flex items-center gap-4">
        <p className="text-[1.4rem] text-third">
          آیا موافق با{" "}
          <Link href={"/rule"} className="text-blue-500 text-[1.4rem]">
            قوانین
          </Link>{" "}
          این سایت هستید
        </p>
        <CheckBox name="check" formHandler={signUp} />
      </div>
      {signUp.touched.check && signUp.errors.check && (
        <span className="text-xl text-red-600">{signUp.errors.check}</span>
      )}
      <button
        type="submit"
        className="w-full rounded-lg border-0 h-20 bg-second text-[1.8rem] active:bg-second/50 text-first flex items-center justify-center"
      >
        {loading ? <MoonLoader size={20} color="#fff" /> : <span>ثبت نام</span>}
      </button>
      <p className="text-[1.2rem] text-third">
        در صورت داشتن حساب کاربری{" "}
        <Link href={"/login"} className="text-blue-500">
          وارد
        </Link>{" "}
        شوید
      </p>
    </form>
  );
};

export default Signup;
