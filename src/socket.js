import { Server } from 'socket.io';

const initSocket = (httpServer) => {
	const io = new Server(httpServer, {
		cors: {
			origin: '*',
		},
	});

	io.on('connection', (socket) => {
		console.log(`User ${socket.id} connected`);
	});

	return io;
};

export default { initSocket };
