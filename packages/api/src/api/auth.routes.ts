import { Router } from 'express';
import { loginUser, registerUser } from '../../controllers/auth.controller'; // <-- IMPORT INI

const router = Router();

router.post('/register', registerUser); // <-- GANTI INI

router.post('/login', loginUser); // <-- GANTI INI

export default router;
