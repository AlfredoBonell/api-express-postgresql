-- CreateTable
CREATE TABLE "MissionCommander" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "missionCommander" TEXT NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MissionCommander_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_name_key" ON "MissionCommander"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_lang_key" ON "MissionCommander"("lang");

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_missionCommander_key" ON "MissionCommander"("missionCommander");

-- CreateIndex
CREATE UNIQUE INDEX "MissionCommander_enrollments_key" ON "MissionCommander"("enrollments");
