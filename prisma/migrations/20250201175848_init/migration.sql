/*
  Warnings:

  - A unique constraint covering the columns `[userId,siteCommentId]` on the table `DisLike` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,siteCommentId]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "DisLike_userId_siteCommentId_idx";

-- DropIndex
DROP INDEX "Like_userId_siteCommentId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "DisLike_userId_siteCommentId_key" ON "DisLike"("userId", "siteCommentId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_siteCommentId_key" ON "Like"("userId", "siteCommentId");
