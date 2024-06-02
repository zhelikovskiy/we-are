import chatService from '../services/chat-service.js';
import errorHandler from '../utils/errorHandler.js';

const createChat = async (req, res) => {
	try {
		const { name, isPrivate, password } = req.body;
		const { user } = req;

		return res.status(200).json(
			await chatService.create({
				creator: user.id,
				name,
				isPrivate,
				password,
			})
		);
	} catch (error) {
		errorHandler(error, res);
	}
};

const getChats = async (req, res) => {
	try {
		const { user } = req;

		return res.status(200).json(await chatService.getManyByUserId(user.id));
	} catch (error) {
		errorHandler(error, res);
	}
};

export default { createChat, getChats };
