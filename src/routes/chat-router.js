import { Router } from 'express';
import chatController from '../controllers/chat-controller.js';
import authenticate from '../middlewares/auth-middleware.js';

const chatRouter = Router();

chatRouter.use(authenticate);

chatRouter.post('/', chatController.createChat);
chatRouter.get('/', chatController.getChats);

export default chatRouter;
