import express from 'express';
import authRouter from './routes/auth-router.js';
import chatRouter from './routes/chat-router.js';
import messageRouter from './routes/message-router.js';
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
app.use('/api/chats', chatRouter);
app.use('/api/chat', messageRouter);

export default app;
