import authService from '../services/auth-service.js';
import errorHandler from '../utils/errorHandler.js';

const register = async (req, res) => {
	try {
		const { userName, email, password } = req.body;

		return res
			.status(200)
			.json(await authService.register({ userName, email, password }));
	} catch (error) {
		errorHandler(error, res);
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		return res.status(200).json(await authService.login({ email, password }));
	} catch (error) {
		errorHandler(error, res);
	}
};

export default { register, login };
