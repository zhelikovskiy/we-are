import userService from './user-service.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (userData) => {
	if (await userService.getOneByUsername(userData.username))
		throw new Error('Username already exists');

	if (await userService.getOneByEmail(userData.email))
		throw new Error('Email already exists');

	const hashedPassword = await bcrypt.hash(userData.password, 10);
	userData.password = hashedPassword;

	return await userService.create(userData);
};

const login = async (loginData) => {
	const { email, password } = loginData;

	const user = await userService.getOneByEmail(email);

	if (!user) throw new Error('User not found');

	if (!(await bcrypt.compare(password, user.password)))
		throw new Error('Wrong password');

	const token = await jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

	return { token };
};

export default { register, login };
