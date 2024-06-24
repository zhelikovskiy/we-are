import messageService from '../services/message-service.js';
import errorHandler from '../utils/errorHandler.js';

const sendMessage = async (req, res) => {
	try {
		const { roomId } = req.params;
		const { text } = req.body;
		const { user } = req;

		const response = await messageService.create(text, user.id, roomId);

		return res.status(200).json(response);
	} catch (error) {
		errorHandler(error, res);
	}
};

const getMessages = async (req, res) => {
	try {
		const { roomId } = req.params;

		const response = await messageService.getManyByRoomId(roomId);

		return res.status(200).json(response);
	} catch (error) {
		errorHandler(error, res);
	}
};

export default { sendMessage, getMessages };
