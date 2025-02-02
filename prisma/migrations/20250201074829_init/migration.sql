-- CreateTable
CREATE TABLE "Like" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "siteCommentId" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisLike" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "siteCommentId" INTEGER NOT NULL,

    CONSTRAINT "DisLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Like_userId_idx" ON "Like"("userId");

-- CreateIndex
CREATE INDEX "Like_siteCommentId_idx" ON "Like"("siteCommentId");

-- CreateIndex
CREATE INDEX "Like_userId_siteCommentId_idx" ON "Like"("userId", "siteCommentId");

-- CreateIndex
CREATE INDEX "DisLike_userId_idx" ON "DisLike"("userId");

-- CreateIndex
CREATE INDEX "DisLike_siteCommentId_idx" ON "DisLike"("siteCommentId");

-- CreateIndex
CREATE INDEX "DisLike_userId_siteCommentId_idx" ON "DisLike"("userId", "siteCommentId");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_siteCommentId_fkey" FOREIGN KEY ("siteCommentId") REFERENCES "SiteComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisLike" ADD CONSTRAINT "DisLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisLike" ADD CONSTRAINT "DisLike_siteCommentId_fkey" FOREIGN KEY ("siteCommentId") REFERENCES "SiteComment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
