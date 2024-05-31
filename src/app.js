import express from 'express';
import authRouter from './routes/auth-router.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:3000', 'http://localhost:3001'],
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
	})
);

app.use('/api/auth', authRouter);

export default app;
