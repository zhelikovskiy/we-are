import userService from './user-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
	UserNameExistError,
	EmailExistError,
	UserNotFoundError,
	InvalidPasswordError,
} from '../utils/errors.js';

const register = async (userData) => {
	if (await userService.getOneByUsername(userData.username))
		throw new UserNameExistError();

	if (await userService.getOneByEmail(userData.email))
		throw new EmailExistError();

	const hashedPassword = await bcrypt.hash(userData.password, 10);
	userData.password = hashedPassword;

	return await userService.create(userData);
};

const login = async (loginData) => {
	const { email, password } = loginData;

	const user = await userService.getOneByEmail(email);

	if (!user) throw new UserNotFoundError();

	if (!(await bcrypt.compare(password, user.password)))
		throw new InvalidPasswordError();

	const token = await jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

	return { token, user };
};

export default { register, login };
