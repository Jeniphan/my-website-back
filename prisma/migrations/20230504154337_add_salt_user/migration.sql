/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `salt` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `salt` VARCHAR(255) NOT NULL,
    MODIFY `username` VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `username_UNIQUE` ON `Users`(`username`);
