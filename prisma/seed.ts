import { prisma } from "../src/lib/Prisma";
import { createEvents } from "../src/db/createEvents";

// const prisma = new PrismaClient();
// createEvents()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

prisma.event.deleteMany().then(() => {
  createEvents()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
});
