import { createEvents } from "../src/db/createEvents";
import { prisma } from "../src/lib/Prisma";

const seedData = async () => {
  //   await prisma.event.deleteMany();
  //   await prisma.organizer.deleteMany();
  await createEvents();
};
await seedData();
