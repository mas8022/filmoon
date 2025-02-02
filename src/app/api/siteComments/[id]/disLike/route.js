import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { Me } from "../../../../../../utils/me";
import prisma from "../../../../../../utils/prisma";
export async function POST(req, { params }) {
  try {
    let { id } = await params;
    id = Number(id);

    const { email } = await Me();

    if (!email) {
      return NextResponse.json({
        message: "ابتدا در سایت ثبت نام کنید",
        status: 400,
      });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    const disLikeBefore = await prisma.disLike.findFirst({
      where: { userId: user.id, siteCommentId: id },
    });

    if (!!disLikeBefore) {
      return NextResponse.json({ message: "دیس لایک کرده بودید" });
    }

    await prisma.disLike.create({
      data: { userId: user.id, siteCommentId: id },
    });

    revalidatePath("/", "page");

    return NextResponse.json({ message: "با موفقیت دیس لایک شد", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "اینترنت خود را چک کنید",
      status: 500,
    });
  }
}
