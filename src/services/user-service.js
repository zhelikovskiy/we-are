import User from '../models/User.js';

const create = async (username, email, password) => {
	const newUser = await User.create({
		username: username,
		email: email,
		password: password,
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
