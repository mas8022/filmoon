"use client";
import { logoutHandler } from "@/utils/authTools";
import { sanitizedInput } from "@/utils/sanitizeInput";
import { FormikErrors, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MoonLoader } from "react-spinners";
import { emailRegex } from "@/staticData";
import { EditProfileFormValuesType } from "@/types";

interface ProfileResponse {
  fullName: string;
  email: string;
  phone: string;
}

const EditProfile = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const editProfile = useFormik<EditProfileFormValuesType>({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
    },
    validate: (values) => {
      const errors: FormikErrors<EditProfileFormValuesType> = {};
      if (!values.fullName.trim() || !isNaN(Number(values.fullName))) {
        errors.fullName = "نام تان را به درستی وارد کنید";
      }
      if (!emailRegex.test(values.email)) {
        errors.email = "ایمیل تان را به درستی وارد کنید";
      }
      if (isNaN(Number(values.phone))) {
        errors.phone = "شماره موبایل تان را به درستی وارد کنید";
      }
      return errors;
    },
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);

      try {
        const formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("email", values.email);
        formData.append("phone", values.phone);

        const response = await fetch(`/api/editProfile`, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        if (result.status === 200) {
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطایی رخ داد، لطفاً دوباره تلاش کنید");
      } finally {
        setLoading(false);
        setSubmitting(false);
        fetchProfileData();
      }
    },
  });

  const fetchProfileData = async () => {
    try {
      const response = await fetch(`/api/me`);
      const result: ProfileResponse = await response.json();
      if (result) {
        editProfile.setFieldValue("fullName", result.fullName);
        editProfile.setFieldValue("email", result.email);
        editProfile.setFieldValue("phone", result.phone);
      }
    } catch (error) {
      toast.error("خطا در دریافت اطلاعات");
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <div className="w-[40rem] rounded-3xl flex flex-col gap-10 p-[2rem] sm:p-[3rem] md:sm:p-[5rem] py-[4rem] bg-second/10">
      <form
        onSubmit={editProfile.handleSubmit}
        className="w-full flex flex-col items-center gap-7 bg-black/0 child:text-[1.4rem] child:outline-none child:focus:outline-none"
      >
        <div className="w-full flex flex-col gap-4">
          <input
            className="w-full h-14 border-0 px-[0.5rem] bg-first/0 text-black/80 border-b border-b-first focus:border-b-2 focus:outline-none outline-none"
            id="fullName"
            name="fullName"
            type="text"
            onChange={(e) => {
              const sanitizedValue = sanitizedInput(e.target.value);
              editProfile.setFieldValue("fullName", sanitizedValue);
            }}
            value={editProfile.values.fullName}
            placeholder="نام و نام خانوادگی"
          />
          {editProfile.touched.fullName && editProfile.errors.fullName && (
            <span className="!text-red-500">{editProfile.errors.fullName}</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-4">
          <input
            className="w-full h-14 border-0 px-[0.5rem] bg-first/0 text-black/80 border-b border-b-first focus:border-b-2 focus:outline-none outline-none"
            id="email"
            name="email"
            type="text"
            onChange={(e) => {
              const sanitizedValue = sanitizedInput(e.target.value);
              editProfile.setFieldValue("email", sanitizedValue);
            }}
            value={editProfile.values.email}
            placeholder="ایمیل"
          />
          {editProfile.touched.email && editProfile.errors.email && (
            <span className="!text-red-500">{editProfile.errors.email}</span>
          )}
        </div>
        <div className="w-full flex flex-col gap-4">
          <input
            className="w-full h-14 border-0 px-[0.5rem] bg-first/0 text-black/80 border-b border-b-first focus:border-b-2 focus:outline-none outline-none"
            id="phone"
            name="phone"
            type="text"
            onChange={(e) => {
              const sanitizedValue = sanitizedInput(e.target.value);
              editProfile.setFieldValue("phone", sanitizedValue);
            }}
            value={editProfile.values.phone}
            placeholder="شماره موبایل"
          />
          {editProfile.touched.phone && editProfile.errors.phone && (
            <span className="!text-red-500">{editProfile.errors.phone}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg border-0 h-[4.5rem] bg-second active:bg-second/50 center"
        >
          {loading ? (
            <MoonLoader size={20} color="#fff" />
          ) : (
            <span>ویرایش اطلاعات</span>
          )}
        </button>
      </form>
      <button
        onClick={logoutHandler}
        className="w-full rounded-lg border-0 h-[4.5rem] bg-red-500 active:bg-second/50 center"
      >
        خروج از حساب
      </button>
    </div>
  );
};

export default EditProfile;
