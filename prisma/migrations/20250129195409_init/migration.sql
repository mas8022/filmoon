-- CreateTable
CREATE TABLE "Otp" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expTime" BIGINT NOT NULL,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);
