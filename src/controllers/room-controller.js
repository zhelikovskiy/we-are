import roomService from '../services/room-service.js';
import errorHandler from '../utils/error/errorHandler.js';

const createRoom = async (req, res) => {
	try {
		const { name } = req.body;
		const { user } = req;

		const response = await roomService.create(user.id, name);

		return res.status(200).json(response);
	} catch (error) {
		errorHandler(error, res);
	}
};

const joinRoom = (req, res) => {
	try {
		const { roomId } = req.params;
		const { user } = req;

		const response = roomService.join(roomId, user.id);

		return res.status(200).json(response);
	} catch (error) {
		errorHandler(error, res);
	}
};

const getRooms = async (req, res) => {
	try {
		const { user } = req;

		const response = await roomService.getManyByUserId(user.id);

		return res.status(200).json(response);
	} catch (error) {
		errorHandler(error, res);
	}
};

export default { createRoom, joinRoom, getRooms };
