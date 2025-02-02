import { revalidatePath } from "next/cache";
import prisma from "../../../../../../libs/prisma";
import { Me } from "../../../../../../utils/me";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    let { id } = await params;
    id = Number(id);

    const me = await Me();

    if (!me) {
      return NextResponse.json({
        message: "ابتدا در سایت ثبت نام کنید",
        status: 400,
      });
    }

    const likeBefore = await prisma.like.findUnique({
      where: { userId_siteCommentId: { userId: me.id, siteCommentId: id } },
    });

    if (!!likeBefore) {
      return NextResponse.json({ message: "لایک کرده بودید", status: 400 });
    }

    await prisma.like.create({
      data: {
        userId: me.id,
        siteCommentId: id,
      },
    });

    revalidatePath("/", "page");

    return NextResponse.json({ message: "با موفقیت لایک شد", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
