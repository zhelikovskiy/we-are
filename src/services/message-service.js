import Message from '../models/Message.js';

const create = async (message) => {
	const newMessage = await Message.create({
		text: message.text,
		author: message.author,
		chat: message.chat,
	});

	return newMessage;
};

const getManyByChatId = async (chatId) => {
	return await Message.find({ chat: chatId }).sort({ createdAt: -1 });
};

export default { create, getManyByChatId };
