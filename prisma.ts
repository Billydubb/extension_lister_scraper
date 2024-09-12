import { PrismaClient } from '../chrome-webstore-next/node_modules/.prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // This pattern is often used to reduce the number of connections made to the database during development.
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
