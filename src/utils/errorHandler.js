import logger from './logger.js';

const errorHandler = (error, res) => {
	if (!error.status) {
		logger.error(error);

		res.status(500).json({ message: error.message, code: error.code });
	} else {
		res.status(error.status).json({ message: error.message, code: error.code });
	}
};

export default errorHandler;
