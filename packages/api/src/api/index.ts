import { Router } from 'express';
import authRoutes from './auth.routes';

const router = Router();

router.use('/auth', authRoutes);
// Nanti kalo ada routes lain (misal: products), daftarin di sini

export default router;
