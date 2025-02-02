import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "../../../../../libs/prisma";
import {
  generateRefreshToken,
  generateToken,
} from "../../../../../utils/authTools.js";
import { revalidatePath } from "next/cache";

export async function POST(req) {
  try {
    const { phone, code } = await req.json();

    const isOtp = await prisma.otp.findFirst({ where: { phone, code } });
    await prisma.otp.deleteMany({ where: { phone, code } });

    if (!isOtp) {
      return NextResponse.json({
        message: "کد اشتباه است",
        status: 403,
      });
    }

    const date = new Date();
    const now = date.getTime();

    if (now > isOtp.expTime) {
      return NextResponse.json({
        message: "کد منقضی شده",
        status: 403,
      });
    }

    const { email } = await prisma.user.findUnique({ where: { phone } });

    const refreshToken = generateRefreshToken(
      { email },
      process.env.REFRESH_TOKEN_KEY
    );

    await prisma.user.update({ where: { email }, data: { refreshToken } });

    const newAccessToken = generateToken({ email }, process.env.TOKEN_KEY);

    (await cookies()).set("token", newAccessToken, {
      httpOnly: true,
      path: "/",
    });

    (await cookies()).set("refresh-token", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
    });

    revalidatePath("/", "layout");

    return Response.json({
      message: "با موفقیت وارد حساب قبل خود شدید",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
