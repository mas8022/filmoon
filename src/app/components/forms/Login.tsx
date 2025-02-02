"use client";
import { sanitizedInput } from "@/utils/sanitizeInput";
import { FormikErrors, useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { emailRegex } from "@/staticData";

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const sanitizeInput = sanitizedInput;

  const login = useFormik<LoginValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: FormikErrors<LoginValues> = {};
      if (!emailRegex.test(values.email)) {
        errors.email = "ایمیل تان را به درستی وارد کنید";
      } else if (values.password.length > 15 || values.password.length < 8) {
        errors.password = "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد";
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      setLoading(false);

      if (result.status === 200) {
        toast.success(result.message);
        router.replace("/?query=authentication");
      } else {
        toast.error(result.message);
      }
    },
  });

  return (
    <form
      className="w-[40rem] rounded-3xl flex flex-col gap-10 p-[2rem] sm:p-[3rem] md:sm:p-[5rem] py-[4rem]"
      onSubmit={login.handleSubmit}
    >
      <div className="w-full flex flex-col gap-4">
        <input
          className="w-full h-14 border-0 px-[0.5rem] bg-first/0 border-b focus:border-b-2 focus:outline-none outline-none"
          id="email"
          name="email"
          type="text"
          onChange={(e) => {
            const sanitizedValue = sanitizeInput(e.target.value);
            login.setFieldValue("email", sanitizedValue);
          }}
          value={login.values.email}
          placeholder="ایمیل"
        />
        {login.touched.email && login.errors.email && (
          <span className="text-xl text-red-600">{login.errors.email}</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-4">
        {" "}
        <input
          className="w-full h-14 border-0 px-[0.5rem] bg-first/0 border-b focus:border-b-2 focus:outline-none outline-none"
          id="password"
          name="password"
          type="password"
          onChange={(e) => {
            const sanitizedValue = sanitizeInput(e.target.value);
            login.setFieldValue("password", sanitizedValue);
          }}
          value={login.values.password}
          placeholder="رمز عبور"
        />
        {login.touched.password && login.errors.password && (
          <span className="text-xl text-red-600">{login.errors.password}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg border-0 h-[4rem] bg-second active:bg-second/70 text-white flex items-center justify-center"
      >
        {loading ? <MoonLoader size={20} color="#fff" /> : <span>ورود</span>}
      </button>
      <Link href={"/restorePass"} className="text-blue-500 text-[1.4rem]">
        بازیابی رمز عبور
      </Link>
      <p className="text-[1.2rem] text-third">
        در صورت نداشتن حساب کاربری{" "}
        <Link href={"/signup"} className="text-blue-500">
          ثبت نام
        </Link>{" "}
        کنید
      </p>
    </form>
  );
};

export default Login;
