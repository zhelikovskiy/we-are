import Chat from '../models/Chat.js';

const create = async (chat) => {
	console.log(chat);
	const newChat = await Chat.create({
		creator: chat.creator,
		name: chat.name,
		isPrivate: chat.isPrivate,
		password: chat.password,
		users: [chat.creator],
	});

	return newChat;
};

const getManyByUserId = async (userId) => {
	return await Chat.find({ users: userId });
};

const getOneById = async (chatId) => {
	return await Chat.findById(chatId);
};

export default { create, getManyByUserId, getOneById };
