/*
  Warnings:

  - You are about to drop the column `email` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Link` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Link` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "public"."Link_email_key";

-- AlterTable
ALTER TABLE "public"."Link" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "username";
