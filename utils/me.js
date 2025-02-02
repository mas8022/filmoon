import { cookies } from "next/headers";
import prisma from "../utils/prisma";
import { verifyToken } from "../utils/authTools";
import  ResetToken  from "../utils/resetToken";

async function Me() {
  await ResetToken()
  const token = (await cookies()).get("token")?.value;

  const payload = verifyToken(token, process.env.privateKey);

  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (user) {
    return user;
  } else {
    return null;
  }
}

export { Me };
