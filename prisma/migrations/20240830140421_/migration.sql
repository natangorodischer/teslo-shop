/*
  Warnings:

  - The values [xs] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'user');

-- AlterEnum
BEGIN;
CREATE TYPE "Size_new" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');
ALTER TABLE "Product" ALTER COLUMN "sizes" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "sizes" TYPE "Size_new"[] USING ("sizes"::text::"Size_new"[]);
ALTER TYPE "Size" RENAME TO "Size_old";
ALTER TYPE "Size_new" RENAME TO "Size";
DROP TYPE "Size_old";
ALTER TABLE "Product" ALTER COLUMN "sizes" SET DEFAULT ARRAY[]::"Size"[];
COMMIT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'user',
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
