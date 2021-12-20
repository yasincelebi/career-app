/*
  Warnings:

  - You are about to drop the column `company` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Job` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[contactId]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyId` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_userId_fkey";

-- DropIndex
DROP INDEX "Certificate_userId_key";

-- DropIndex
DROP INDEX "Education_userId_key";

-- DropIndex
DROP INDEX "Experience_userId_key";

-- DropIndex
DROP INDEX "Job_userId_key";

-- DropIndex
DROP INDEX "Project_userId_key";

-- DropIndex
DROP INDEX "Skill_userId_key";

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "contactId" TEXT;

-- AlterTable
ALTER TABLE "Education" ALTER COLUMN "school" DROP NOT NULL,
ALTER COLUMN "degree" DROP NOT NULL,
ALTER COLUMN "field" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "company",
ADD COLUMN     "companyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "level" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Company_contactId_key" ON "Company"("contactId");

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
