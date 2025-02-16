import { NextResponse } from "next/server";
import {
  generateRefreshToken,
  generateToken,
} from "../../../../utils/authTools.js";
import { cookies } from "next/headers.js";
import prisma from "../../../../libs/prisma";

export async function POST(req) { 
  
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const token = generateToken({ email }, process.env.TOKEN_KEY);

    const refreshToken = generateRefreshToken(
      { email },
      process.env.REFRESH_TOKEN_KEY
    );

    await prisma.user.update({
      where: { email },
      data: { fullName, email, phone, refreshToken },
    });

    (await cookies()).set("token", token, {
      httpOnly: true,
      path: "/",
    });

    (await cookies()).set("refresh-token", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
    });

    return NextResponse.json({
      message: "حساب کاربری با موفقیت تغییر کرد",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
