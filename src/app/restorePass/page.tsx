"use client";
import React, { useState } from "react";
import VerifyOtpForm from "../../components/templates/VerifyOtpForm";
import RequestOtpForm from "@/src/components/templates/RequestOtpForm";

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
