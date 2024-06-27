import Message from '../models/Message.js';
import roomService from './room-service.js';

const create = async (text, authorId, roomId) => {
	const message = await Message.create({
		text: text,
		user: authorId,
		room: roomId,
	});

	await roomService.addMessage(roomId, message._id);

	return message;
};

const getManyByRoomId = async (roomId) => {
	return await Message.find({ room: roomId })
		.sort({ createdAt: -1 })
		.populate('user', 'username');
};

export default { create, getManyByRoomId };
