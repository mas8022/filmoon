import { cookies } from "next/headers";
import {
  generateRefreshToken,
  generateToken,
  hashPassword,
} from "../../../../utils/authTools.js";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";
import { emailRegex } from "../../../../staticData";

export async function POST(req) {
  try {
    const { fullName, email, password, phone, check } = await req.json();

    const userEmail = await prisma.user.findUnique({ where: { email } });

    if (userEmail) {
      return NextResponse.json(
        { message: "این ادرس ایمیل قبلا ثبت نام شده است" },
        { status: 403 }
      );
    }

    if (!fullName.trim() || !isNaN(fullName)) {
      return NextResponse.json(
        { message: "نام تان را به درستی وارد کنید" },
        { status: 403 }
      );
    } else if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "ایمیل تان را به درستی وارد کنید" },
        { status: 403 }
      );
    } else if (password.length > 15 || password.length < 8) {
      return NextResponse.json({
        message: "رمز عبور شما باید بین 8 تا 15 کاراکتر داشته باشد",
        status: 403,
      });
    } else if (isNaN(phone)) {
      return NextResponse.json({
        message: "شماره موبایل تان را به درستی وارد کنید",
        status: 403,
      });
    } else if (!check) {
      return NextResponse.json({
        message: "تیک تایید قوانین سایت را بزنید",
        status: 403,
      });
    }

    const hashedPassword = await hashPassword(password);
    const token = generateToken({ email }, process.env.TOKEN_KEY);
    const refreshToken = generateRefreshToken(
      { email },
      process.env.REFRESH_TOKEN_KEY
    );

    const userCount = await prisma.user.count();

    await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        phone,
        check,
        refreshToken,
        role: !!userCount ? "USER" : "ADMIN",
      },
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

    revalidatePath("/", "layout");

    return NextResponse.json({
      message: "ثبت نام شما با موفقیت انجام شد",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
