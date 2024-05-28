const users = [];

const create = async (user) => {
	users.push(user);
	return user;
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
