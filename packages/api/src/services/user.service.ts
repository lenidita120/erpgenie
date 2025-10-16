import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const createUser = async (userData: any) => {
  const { email, name, password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // Jangan kirim balik passwordnya
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};
