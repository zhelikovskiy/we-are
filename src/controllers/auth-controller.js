import authService from '../services/auth-service.js';

const register = async (req, res) => {
	try {
		const userData = req.body;

		return res.status(200).json(await authService.register(userData));
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const login = async (req, res) => {
	try {
		const loginData = req.body;

		return res.status(200).json(await authService.login(loginData));
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export default { register, login };
