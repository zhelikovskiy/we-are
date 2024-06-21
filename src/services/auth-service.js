import userService from './user-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
	UserNameExistError,
	EmailExistError,
	UserNotFoundError,
	InvalidPasswordError,
} from '../utils/errors.js';

const register = async (username, email, password) => {
	if (await userService.getOneByUsername(username))
		throw new UserNameExistError();

	if (await userService.getOneByEmail(email)) throw new EmailExistError();

	const hashedPassword = await bcrypt.hash(password, 10);
	password = hashedPassword;

	return await userService.create({ username, email, password });
};

const login = async (email, password) => {
	const user = await userService.getOneByEmail(email);

	if (!user) throw new UserNotFoundError();

	if (!(await bcrypt.compare(password, user.password)))
		throw new InvalidPasswordError();

	const token = await jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

	const userDto = {
		id: user.id,
		username: user.username,
		email: user.email,
	};

	return { token, user: userDto };
};

export default { register, login };
