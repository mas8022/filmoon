-- CreateTable
CREATE TABLE "SiteComment" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SiteComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SiteComment_publish_idx" ON "SiteComment"("publish");

-- AddForeignKey
ALTER TABLE "SiteComment" ADD CONSTRAINT "SiteComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
