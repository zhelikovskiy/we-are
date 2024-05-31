import authService from '../services/auth-service.js';

const register = async (req, res) => {
	try {
		const userData = req.body;

		return res.status(200).json(await authService.register(userData));
	} catch (error) {
		res
			.status(error.status || 500)
			.json({ message: error.message, code: error.code });
	}
};

const login = async (req, res) => {
	try {
		const loginData = req.body;

		return res.status(200).json(await authService.login(loginData));
	} catch (error) {
		res
			.status(error.status || 500)
			.json({ message: error.message, code: error.code });
	}
};

export default { register, login };
