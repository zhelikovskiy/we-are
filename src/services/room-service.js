import Room from '../models/Room.js';
import { ChatNameExistError } from '../utils/errors.js';

const create = async (creator, name) => {
	const foundRoom = await getOneByName(name);

	if (foundRoom) throw new ChatNameExistError();

	const room = await Room.create({
		creator: creator,
		name: name,
		members: [creator],
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

export default { create, getManyByUserId, getOneById };
