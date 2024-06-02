import User from '../models/User.js';

const create = async (user) => {
	console.log(user);
	const newUser = User.create({
		username: user.username,
		email: user.email,
		password: user.password,
	});

	return newUser;
};

const getOneById = async (id) => {
	return User.findById(id);
};

const getOneByUsername = async (username) => {
	return User.findOne({ username: username });
};

const getOneByEmail = async (email) => {
	return await User.findOne({ email: email });
};

export default { create, getOneById, getOneByUsername, getOneByEmail };
