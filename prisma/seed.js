const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        username: "ajolonauta",
        mission: "Node",
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mission: "Node",
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mission: "Java",
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mission: "Node",
      },
    });

    const mission = await prisma.Mission.upsert({
      where: { name: "Carlo" },
      update: {},
      create: {
        name: "Carlo",
        lang: "Español",
        missionCommander: "Misión BackEnd - Javascript",
        enrollments: 1,
        hasCertification: true,
      },
    });

    const mission1 = await prisma.Mission.upsert({
      where: { name: "Rodrigo" },
      update: {},
      create: {
        name: "Rodrigo",
        lang: "Español",
        missionCommander: "Misión FrontEnd",
        enrollments: 2,
        hasCertification: true,
      },
    });

    const mission2 = await prisma.Mission.upsert({
      where: { name: "José Jesús" },
      update: {},
      create: {
        name: "José Jesús",
        lang: "Español",
        missionCommander: "Misión BackEnd - PHP",
        enrollments: 3,
        hasCertification: true,
      },
    });

    const mission3 = await prisma.Mission.upsert({
      where: { name: "Fernanda" },
      update: {},
      create: {
        name: "Fernanda",
        lang: "Español",
        missionCommander: "Misión BackEnd - Java",
        enrollments: 4,
        hasCertification: true,
      },
    });

    const missionCommander = await prisma.missionCommander.upsert({
      where: { username: "carlogilmar" },
      update: {},
      create: {
        name: "Carlo",
        username: "carlogilmar",
        mainStack: "Node.js",
        currentEnrollment: true,
        hasAzureCertification: true,
      },
    });

    const missionCommander1 = await prisma.missionCommander.upsert({
      where: { username: "rodrigo" },
      update: {},
      create: {
        name: "Rodrigo",
        username: "rodrigo",
        mainStack: "Angular - Vue",
        currentEnrollment: true,
        hasAzureCertification: true,
      },
    });

    const missionCommander2 = await prisma.missionCommander.upsert({
      where: { username: "jose" },
      update: {},
      create: {
        name: "José Jesús",
        username: "jose",
        mainStack: "Laravel",
        currentEnrollment: true,
        hasAzureCertification: true,
      },
    });

    const missionCommander3 = await prisma.missionCommander.upsert({
      where: { username: "fernanda" },
      update: {},
      create: {
        name: "Fernanda",
        username: "fernanda",
        mainStack: "Java",
        currentEnrollment: true,
        hasAzureCertification: true,
      },
    });

    console.log("Create 3 explorers");
    console.log("Create 3 mission");
    console.log("Create 3 missionCommander");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
