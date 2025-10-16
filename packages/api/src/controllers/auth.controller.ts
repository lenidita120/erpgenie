import { Request, Response } from 'express';
import { createUser } from '../services/user.service'; // <-- IMPORT INI

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: 'User registered successfully', data: user });
  } catch (error: any) {
    // Nanti kita buat error handling yg lebih bagus
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  // Nanti logika login ditaruh di sini
  res.status(200).json({ message: 'User logged in successfully', data: req.body });
};
