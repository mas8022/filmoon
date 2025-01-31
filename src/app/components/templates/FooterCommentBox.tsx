"use client";
import React, { useState } from "react";
import swal from "sweetalert";
import toast from "react-hot-toast";
import { sanitizedInput } from "@/utils/sanitizeInput";
import { useRouter } from "next/navigation";

const FooterCommentBox: React.FC = () => {
  const router = useRouter();
  const [comment, setComment] = useState<string>("");

  const SendComment = (): void => {
    if (comment) {
      fetch("/api/siteComments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status === 201) {
            swal({
              icon: "success",
              title: "با موفقیت ارسال شد",
              text: result.message,
              className: "modern-swal",
            });
            setComment("");
          } else if (result.status === 401) {
            swal({
              icon: "error",
              title: "ارسال نشد",
              text: result.message,
              className: "modern-swal",
              buttons: ["لغو", "تایید"],
            }).then((res) => {
              if (res) {
                router.push("/login");
              }
            });
          } else if (result.status === 500) {
            toast.error(result.message);
          }
        });
    }
  };

  return (
    <div className="flex flex-col gap-4 item-end" id="commentBox">
      <span className="w-full sm:self-end text-[1.4rem] dark:text-[#1e293b]">
        در صورتی که در سایت ما ثبت‌نام کردید با نظر دادن در مورد سایت مارا
        همراهی می‌کنید. ممنون می‌شویم نظر خود را بگویید.
      </span>
      <textarea
        value={comment}
        onChange={(e) => {
          const sanitized = sanitizedInput(e.target.value);
          setComment(sanitized || "");
        }}
        placeholder="نظر خود بنویسید..."
        className="w-full h-20 max-h-64 p-4 rounded-xl bg-first/50 text-2xl placeholder:text-third/50 outline-none focus:outline-none"
      />
      <button
        onClick={SendComment}
        className="w-full h-14 rounded-xl bg-second shadow-lg active:scale-[99%] text-[1.2rem] sm:text-[1.4rem] font-light sm:self-end"
      >
        ارسال نظر
      </button>
    </div>
  );
};

export default FooterCommentBox;
