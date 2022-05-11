const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const missioncommander = await prisma.MissionCommander.upsert({
        where: { name: 'Carlo'},
        update: {},
        create: {
            name: 'Carlo',
            lang: 'Español',
            missionCommander: 'Misión BackEnd - Javascript',
            enrollments: 1,
            hasCertification: true
        }
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const missioncommander1 = await prisma.MissionCommander.upsert({
        where: { name: 'Rodrigo'},
        update: {},
        create: {
            name: 'Rodrigo',
            lang: 'Español',
            missionCommander: 'Misión FrontEnd',
            enrollments: 2,
            hasCertification: true
        }
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const missioncommander2 = await prisma.MissionCommander.upsert({
        where: { name: 'José Jesús'},
        update: {},
        create: {
            name: 'José Jesús',
            lang: 'Español',
            missionCommander: 'Misión BackEnd - PHP',
            enrollments: 3,
            hasCertification: true
        }
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const missioncommander3 = await prisma.MissionCommander.upsert({
        where: { name: 'Fernanda'},
        update: {},
        create: {
            name: 'Fernanda',
            lang: 'Español',
            missionCommander: 'Misión BackEnd - Java',
            enrollments: 4,
            hasCertification: true
        }
    });

    console.log('Create 3 explorers');
    console.log('Create 3 mission commander');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();