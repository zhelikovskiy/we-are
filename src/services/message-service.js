import Message from '../models/Message.js';

const create = async (text, authorId, roomId) => {
	const message = await Message.create({
		text: text,
		author: authorId,
		room: roomId,
	});

	return message;
};

const getManyByRoomId = async (roomId) => {
	return await Message.find({ room: roomId }).sort({ createdAt: -1 });
};

export default { create, getManyByRoomId };
