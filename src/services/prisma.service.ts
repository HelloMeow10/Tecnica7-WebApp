import { PrismaClient } from '@prisma/client';

// Create a single PrismaClient instance and reuse it across the app
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV !== 'production' ? ['error', 'warn'] : ['error'],
});

// Optional: handle process exit to gracefully disconnect Prisma
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

export default prisma;
