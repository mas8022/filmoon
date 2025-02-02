import { Me } from "../../../../utils/me";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import prisma from "../../../../utils/prisma";

export async function POST(req) {
  try {
    const { email } = await Me();

    if (!email) {
      return NextResponse.json({
        message: "برای ارسال نظر باید در سایت ثبت نام کرده باشید",
        status: 401,
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    const { comment } = await req.json();
    await prisma.siteComment.create({
      data: {
        comment,
        publish: false,
        userId: user.id,
      },
    });

    revalidatePath("/", "layout");

    return NextResponse.json({
      message:
        "ممنون از نظر شما! هدف ما همیشه بهبود خدمات و رضایت شماست. اگر نکته‌ای برای بهبود دارید، لطفاً با ما در میان بگذارید",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
