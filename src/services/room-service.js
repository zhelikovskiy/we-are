import Room from '../models/Room.js';
import { ChatNameExistError } from '../utils/errors.js';

const create = async (creatorId, name) => {
	const foundRoom = await getOneByName(name);

	if (foundRoom) throw new ChatNameExistError();

	const room = await Room.create({
		creator: creatorId,
		name: name,
		members: [creatorId],
	});

	return room;
};

const getManyByUserId = async (userId) => {
	return await Room.find({ members: userId });
};

const getOneById = async (roomId) => {
	return await Room.findById(roomId);
};

const getOneByName = async (name) => {
	return await Room.findOne({ name: name });
};

const join = async (roomId, userId) => {
	const room = await getOneById(roomId);

	//TODO update error
	if (!room) throw new Error('room not found!');

	//TODO update error
	if (room.members.includes(userId)) throw new Error('user already in room');

	room.members.push(userId);

	return room.save();
};

const leave = async (roomId, userId) => {
	const room = await getOneById(roomId);

	//TODO update error
	if (!room) throw new Error('room not found!');

	//TODO update error
	if (!room.members.includes(userId)) throw new Error('user not in the room');

	room.members = room.members.filter((member) => member !== userId);

	return room.save();
};

export default { create, join, leave, getManyByUserId, getOneById };
