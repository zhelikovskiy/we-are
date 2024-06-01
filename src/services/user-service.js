import * as uuid from 'uuid';
const users = [];

const create = async (user) => {
	const newUser = {
		id: uuid.v4(),
		username: user.username,
		email: user.email,
		password: user.password,
		chats: [],
	};

	users.push(newUser);

	return newUser;
};

const getOneById = async (id) => {
	return users.find((user) => user.id === id);
};

const getOneByUsername = async (username) => {
	return users.find((user) => user.username === username);
};

const getOneByEmail = async (email) => {
	return users.find((user) => user.email === email);
};

export default { create, getOneById, getOneByUsername, getOneByEmail };
