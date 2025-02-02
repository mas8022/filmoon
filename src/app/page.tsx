import CommentsSlider from "./components/templates/CommentsSlider";
import prisma from "../../libs/prisma";
import Hr from "./components/modules/Hr";

export default async function Home() {
  const siteComments = await prisma.siteComment.findMany({
    where: { publish: true },
    select: {
      id: true,
      comment: true,
      createdAt: true,
      user: {
        select: {
          fullName: true,
        },
      },
    },
    orderBy: {
      id: "desc",
    },
    take: 6,
  });

  return (
    <div className="w-full md:px-32 px-8">
      <div className="w-full h-screen"></div>
      <CommentsSlider comments={JSON.parse(JSON.stringify(siteComments))} />
      <Hr />
    </div>
  );
}
