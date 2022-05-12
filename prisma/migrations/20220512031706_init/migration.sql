/*
  Warnings:

  - You are about to drop the `MissionCommander` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MissionCommander";

-- CreateTable
CREATE TABLE "Mission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "missionCommander" TEXT NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mission_name_key" ON "Mission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mission_missionCommander_key" ON "Mission"("missionCommander");

-- CreateIndex
CREATE UNIQUE INDEX "Mission_enrollments_key" ON "Mission"("enrollments");
