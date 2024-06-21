import messageService from '../services/message-service.js';
import errorHandler from '../utils/errorHandler.js';

const getMessages = async (req, res) => {
	try {
		const { chatId } = req.query;

		return res.status(200).json(await messageService.getManyByChatId(chatId));
	} catch (error) {
		errorHandler(error, res);
	}
};

export default { getMessages };
