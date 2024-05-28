import express from 'express';
import authRouter from './routes/auth-router.js';

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);

export default app;
