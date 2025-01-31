import { cookies } from "next/headers";
import prisma from "../utils/prisma";
import { verifyToken } from "../utils/authTools";
async function Me() {
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

async function MeEmail() {
  try {
    const token = (await cookies()).get("token")?.value;

    const payload = verifyToken(token, process.env.privateKey);

    if (payload) {
      return payload.email;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export { Me, MeEmail };
