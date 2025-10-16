import { Request, Response } from 'express';
import { createUser, validateUser } from '../services/user.service'; // <-- UPDATE IMPORT INI

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: 'User registered successfully', data: user });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE FUNGSI DI BAWAH INI
export const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await validateUser(req.body);
    res.status(200).json({ message: 'User logged in successfully', data: result });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
