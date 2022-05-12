/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `missionCommander` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Mission_enrollments_key";

-- DropIndex
DROP INDEX "Mission_missionCommander_key";

-- CreateIndex
CREATE UNIQUE INDEX "missionCommander_username_key" ON "missionCommander"("username");
