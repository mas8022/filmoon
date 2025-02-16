import { cookies } from "next/headers";
import { verifyRefreshToken, generateToken, verifyToken } from "./authTools";
import { NextResponse } from "next/server";
import prisma from "../libs/prisma";

export default async function ResetToken() {
  try {
    const refreshToken = (await cookies()).get("refresh-token")?.value;

    if (!refreshToken) {
      return NextResponse.redirect(`${process.env.HOST_NAME}/login`);
    }

    const refreshTokenPayLoad = verifyRefreshToken(
      refreshToken,
      process.env.REFRESH_TOKEN_KEY
    );

    if (!refreshTokenPayLoad) {
      return NextResponse.redirect(`${process.env.HOST_NAME}/login`);
    }

    const user = await prisma.user.findUnique({ where: { refreshToken } });

    if (!user) {
      return NextResponse.redirect(`${process.env.HOST_NAME}/login`);
    }

    const email = user.email;
    const userRole = user.role;

    const token = (await cookies()).get("token")?.value;

    if (token) {
      const validationToken = verifyToken(token, process.env.TOKEN_KEY);
      if (validationToken) {
        return userRole ? userRole : false;
      }
    }

    const newToken = generateToken({ email }, process.env.TOKEN_KEY);

    (await cookies()).set("token", newToken, {
      httpOnly: true,
      path: "/",
    });

    return userRole ? userRole : false;
  } catch (error) {
    throw new Error(error);
  }
}
