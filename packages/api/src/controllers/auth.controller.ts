import { Request, Response } from 'express';

export const registerUser = async (req: Request, res: Response) => {
  // Nanti logika registrasi ditaruh di sini
  res.status(201).json({ message: 'User registered successfully', data: req.body });
};

export const loginUser = async (req: Request, res: Response) => {
  // Nanti logika login ditaruh di sini
  res.status(200).json({ message: 'User logged in successfully', data: req.body });
};
