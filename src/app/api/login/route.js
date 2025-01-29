import { cookies } from "next/headers";
import {
  generateRefreshToken,
  generateToken,
  verifyPassword,
} from "../../../../utils/authTools.js";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    const isValidPassword = await verifyPassword(password, user.password);
    if (!isValidPassword || !user) {
      return NextResponse.json({
        message: "رمز عبور یا ایمیل شما نا معتبر است",
        status: 401,
      });
    }

    const refreshToken = generateRefreshToken(
      { email },
      process.env.refreshPrivateKey
    );

    await prisma.user.update({ where: { email }, data: { refreshToken } });

    const newAccessToken = generateToken({ email }, process.env.privateKey);

    (await cookies()).set("token", newAccessToken, {
      httpOnly: true,
      path: "/",
    });

    (await cookies()).set("refresh-token", refreshToken, {
      httpOnly: true,
      path: "/",
      expires: new Date().getTime() + 15 * 24 * 60 * 60 * 1000,
    });

    revalidateTag("reset-token")

    return NextResponse.json({
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
