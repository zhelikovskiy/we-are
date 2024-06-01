import * as uuid from 'uuid';

const chats = [];

const create = async (chat) => {
	const newChat = {
		id: uuid.v4(),
		creatorId: chat.creatorId,
		name: chat.name,
		isPrivate: chat.isPrivate,
		password: chat.password,
		users: [chat.creatorId],
	};

	chats.push(newChat);

	return newChat;
};

const getManyByUserId = async (userId) => {
	return chats.filter((chat) => chat.users.includes(userId));
};

const getOneById = async (chatId) => {
	return chats.find((chat) => chat.id === chatId);
};

export default { create, getManyByUserId, getOneById };
