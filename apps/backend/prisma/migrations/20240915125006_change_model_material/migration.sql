/*
  Warnings:

  - You are about to drop the column `acquisitionDate` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `condition` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `storageLocation` on the `Material` table. All the data in the column will be lost.
  - You are about to drop the column `supplier` on the `Material` table. All the data in the column will be lost.
  - Added the required column `type` to the `Material` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MaterialType" AS ENUM ('QUESTIONARIO', 'PDF', 'LISTA_EXERCICIOS', 'VIDEOAULA', 'OUTRO');

-- AlterTable
ALTER TABLE "Material" DROP COLUMN "acquisitionDate",
DROP COLUMN "category",
DROP COLUMN "condition",
DROP COLUMN "quantity",
DROP COLUMN "storageLocation",
DROP COLUMN "supplier",
ADD COLUMN     "type" "MaterialType" NOT NULL;
