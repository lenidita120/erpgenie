import { Router } from 'express';

const router = Router();

// Nanti controllernya kita taruh di sini
router.post('/register', (req, res) => {
  res.status(200).json({ message: 'Register route works!' });
});

router.post('/login', (req, res) => {
  res.status(200).json({ message: 'Login route works!' });
});

export default router;
