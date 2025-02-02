import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import prisma from "../../../../../../utils/prisma";

export async function GET(req, { params }) {
  try {
    let { id } = await params;
    id = Number(id);

    const like = await prisma.like.count({
      where: {
        siteCommentId: id,
      },
    });

    const disLike = await prisma.disLike.count({
      where: {
        siteCommentId: id,
      },
    });

    revalidatePath("/", "page");

    return NextResponse.json({ like, disLike });
  } catch (error) {
    return NextResponse.json(
      { message: "اینترنت خود را چک کنید" },
      { status: 500 }
    );
  }
}
