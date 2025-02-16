import { Me } from "../../../../utils/me";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import prisma from "../../../../libs/prisma";

export async function POST(req) {
  try {
    const me = await Me();

    if (!me) {
      return NextResponse.json({
        message: "برای ارسال نظر باید در سایت ثبت نام کرده باشید",
        status: 401,
      });
    }

    const { comment } = await req.json();

    await prisma.siteComment.create({
      data: {
        comment,
        publish: false,
        userId: me.id,
      },
    });

    revalidatePath("/", "layout");

    return NextResponse.json({
      message:
        "نظرتان با موفقیت اصلاح شد",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
