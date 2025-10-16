import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Fungsi createUser dari sebelumnya...
export const createUser = async (userData: any) => {
  const { email, name, password } = userData;

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

// TAMBAHKAN FUNGSI DI BAWAH INI
export const validateUser = async (loginData: any) => {
  const { email, password } = loginData;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' } // Token berlaku 1 hari
  );

  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, token };
};
