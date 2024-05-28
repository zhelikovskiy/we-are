import * as http from 'http';
import app from './src/app.js';
import socket from './src/socket.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

try {
	server.listen(PORT, () => {
		console.log(`Server is running on 'http://localhost:${PORT}'`);
	});

	socket.initSocket(server);
} catch (error) {
	console.error(error);
}
