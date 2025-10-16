import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import apiRoutes from './api'; // <-- TAMBAHKAN INI

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // <-- TAMBAHKAN INI

// API Routes
app.use('/api', apiRoutes); // <-- GANTI BARIS INI (sebelumnya app.get)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
