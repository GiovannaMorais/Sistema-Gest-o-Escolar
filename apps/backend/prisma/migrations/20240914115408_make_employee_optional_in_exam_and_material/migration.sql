-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Notice" DROP CONSTRAINT "Notice_employeeId_fkey";

-- AlterTable
ALTER TABLE "Exam" ALTER COLUMN "employeeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Material" ALTER COLUMN "employeeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Notice" ALTER COLUMN "employeeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Material" ADD CONSTRAINT "Material_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notice" ADD CONSTRAINT "Notice_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
