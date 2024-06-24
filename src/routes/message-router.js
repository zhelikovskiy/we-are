import { Router } from 'express';
import messageController from '../controllers/message-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';

const messageRouter = Router();

messageRouter.use(authMiddleware);

messageRouter.post('/:roomId', messageController.sendMessage);
messageRouter.get('/:roomId', messageController.getMessages);

export default messageRouter;
