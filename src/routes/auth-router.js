import { Router } from 'express';
import authController from '../controllers/auth-controller.js';
import authenticate from '../middlewares/auth-middleware.js';

const authRouter = Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/verify-token', authenticate, (req, res) => {
	return res.status(200).json({ user: req.user });
});

export default authRouter;
