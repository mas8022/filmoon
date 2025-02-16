-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Upload" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "frontImg" TEXT NOT NULL,
    "backImg" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Upload_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "uploadId" INTEGER NOT NULL,
    "styleName" TEXT NOT NULL,
    "model3D" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clothing" (
    "id" SERIAL NOT NULL,
    "resultId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Clothing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteComment" (
    "id" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SiteComment_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "Otp" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expTime" BIGINT NOT NULL,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "SiteComment_publish_idx" ON "SiteComment"("publish");

-- CreateIndex
CREATE INDEX "Like_userId_idx" ON "Like"("userId");

-- CreateIndex
CREATE INDEX "Like_siteCommentId_idx" ON "Like"("siteCommentId");

-- CreateIndex
CREATE UNIQUE INDEX "Like_userId_siteCommentId_key" ON "Like"("userId", "siteCommentId");

-- CreateIndex
CREATE INDEX "DisLike_userId_idx" ON "DisLike"("userId");

-- CreateIndex
CREATE INDEX "DisLike_siteCommentId_idx" ON "DisLike"("siteCommentId");

-- CreateIndex
CREATE UNIQUE INDEX "DisLike_userId_siteCommentId_key" ON "DisLike"("userId", "siteCommentId");

-- CreateIndex
CREATE UNIQUE INDEX "Otp_phone_key" ON "Otp"("phone");

-- AddForeignKey
ALTER TABLE "Upload" ADD CONSTRAINT "Upload_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_uploadId_fkey" FOREIGN KEY ("uploadId") REFERENCES "Upload"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clothing" ADD CONSTRAINT "Clothing_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "Result"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteComment" ADD CONSTRAINT "SiteComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_siteCommentId_fkey" FOREIGN KEY ("siteCommentId") REFERENCES "SiteComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisLike" ADD CONSTRAINT "DisLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisLike" ADD CONSTRAINT "DisLike_siteCommentId_fkey" FOREIGN KEY ("siteCommentId") REFERENCES "SiteComment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
