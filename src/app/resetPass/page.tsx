"use client";
import React, { useState } from "react";
import RequestOtpForm from "@/components/templates/RequestOtpForm";
import VerifyOtpForm from "../../components/templates/VerifyOtpForm";

export default function page() {
  const [isSendCode, setIsSendCode] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>("");

  return (
    <div className="w-full h-screen center">
      {isSendCode ? (
        <VerifyOtpForm phone={phone} />
      ) : (
        <RequestOtpForm
          setIsSendCode={setIsSendCode}
          phone={phone}
          setPhone={setPhone}
        />
      )}
    </div>
  );
}
