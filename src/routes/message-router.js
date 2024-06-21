import { Router } from 'express';
import messageController from '../controllers/message-controller.js';
import authenticate from '../middlewares/auth-middleware.js';

const chatRouter = Router();

chatRouter.use(authenticate);

chatRouter.get('/', messageController.getMessages);

export default chatRouter;
