import userService from './user-service.js';
import bcrypt from 'bcrypt';

const register = async (userData) => {
	if (await userService.getOneByUsername(userData.username))
		throw new Error('User already exists');

	const hashedPassword = await bcrypt.hash(userData.password, 10);
	userData.password = hashedPassword;

	await userService.create(userData);

	return userData;
};

const login = async (loginData) => {
	const user = await userService.getOneByUsername(loginData.username);

	if (!user) throw new Error('User not found');

	if (!(await bcrypt.compare(loginData.password, user.password)))
		throw new Error('Wrong password');

	return loginData;
};

export default { register, login };
