import { Router } from 'express';
import roomController from '../controllers/room-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';

const roomRouter = Router();

roomRouter.use(authMiddleware);

roomRouter.get('/', roomController.getRooms);
roomRouter.post('/create', roomController.createRoom);
roomRouter.post('/join/:roomId', roomController.getRooms);

export default roomRouter;
