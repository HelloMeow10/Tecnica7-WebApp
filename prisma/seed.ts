import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Seed Roles if empty
  const count = await prisma.roles.count();
  if (count === 0) {
    await prisma.roles.createMany({
      data: [
        { role_name: 'DIRECTOR' },
        { role_name: 'PROFESOR' },
        { role_name: 'ALUMNO' },
      ],
      skipDuplicates: true,
    });
  }

  // Ensure admin user exists (credentials from env)
  const directorRole = await prisma.roles.findFirst({ where: { role_name: 'DIRECTOR' } });
  if (directorRole) {
    const email = process.env.ADMIN_EMAIL || 'admin@example.com';
    const plainPassword = process.env.ADMIN_PASSWORD || 'admin123';
    const firstName = process.env.ADMIN_FIRST_NAME || 'Admin';
    const lastName = process.env.ADMIN_LAST_NAME || 'User';

    const password_hash = await bcrypt.hash(plainPassword, 10);

    await prisma.users.upsert({
      where: { email },
      update: {
        password_hash,
        first_name: firstName,
        last_name: lastName,
        role_id: directorRole.role_id,
      },
      create: {
        email,
        password_hash,
        first_name: firstName,
        last_name: lastName,
        role_id: directorRole.role_id,
      },
    });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
});
