import Chat from '../models/Chat.js';
import { ChatNameExistError } from '../utils/errors.js';

//TODO remake mongodb error handler
const create = async (chat) => {
	try {
		const newChat = await Chat.create({
			creator: chat.creator,
			name: chat.name,
			isPrivate: chat.isPrivate,
			password: chat.password,
			users: [chat.creator],
		});

		return newChat;
	} catch (err) {
		if (err.code === 11000) throw new ChatNameExistError();
	}
};

const getManyByUserId = async (userId) => {
	return await Chat.find({ users: userId });
};

const getOneById = async (chatId) => {
	return await Chat.findById(chatId);
};

export default { create, getManyByUserId, getOneById };
