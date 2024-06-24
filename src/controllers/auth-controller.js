import authService from '../services/auth-service.js';
import errorHandler from '../utils/error/errorHandler.js';

const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const response = await authService.register(username, email, password);

		return res.status(200).json(response);
	} catch (error) {
		errorHandler(error, res);
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const response = await authService.login(email, password);

		return res.status(200).json(response);
	} catch (error) {
		errorHandler(error, res);
	}
};

export default { register, login };
