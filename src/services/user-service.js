import User from '../models/User.js';

const create = async (user) => {
	const newUser = await User.create({
		username: user.username,
		email: user.email,
		password: user.password,
	});

	return newUser;
};

const getOneById = async (id) => {
	return await User.findById(id);
};

const getOneByUsername = async (username) => {
	return await User.findOne({ username: username });
};

const getOneByEmail = async (email) => {
	return await User.findOne({ email: email });
};

export default { create, getOneById, getOneByUsername, getOneByEmail };
