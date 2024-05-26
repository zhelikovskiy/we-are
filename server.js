import * as http from 'http';
import app from './src/app.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

try {
	server.listen(PORT, () => {
		console.log(`Server is running on 'http://localhost:${PORT}'`);
	});
} catch (error) {
	console.error(error);
}
