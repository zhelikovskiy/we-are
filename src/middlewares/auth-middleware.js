import jwt from 'jsonwebtoken';
import userService from '../services/user-service.js';

const authMiddleware = async (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	const [type, token] = req.headers.authorization.split(' ');

	if (type !== 'Bearer') {
		return res
			.status(401)
			.json({ message: `Authorization scheme 'Bearer' required` });
	}

	if (!token) {
		return res.status(401).json({ message: 'No token provided' });
	}

	const verified = await jwt.verify(token, process.env.JWT_SECRET);

	const foundUser = await userService.getOneById(verified.sub);

	if (!foundUser) {
		return res.status(401).json({ message: 'Unauthorized' });
	}

	req.user = {
		id: foundUser.id,
		username: foundUser.username,
		email: foundUser.email,
	};

	next();
};

export default authMiddleware;
