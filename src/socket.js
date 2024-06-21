import { Server } from 'socket.io';

class Socket {
	static instance = null;

	#io = null;

	constructor() {
		if (Socket.instance) {
			return Socket.instance;
		}

		Socket.instance = this;
	}

	init(httpServer) {
		if (this.#io) {
			return;
		}

		this.#io = new Server(httpServer, {
			cors: {
				origin: '*',
			},
		});
		this.#initHandler();

		console.log(`Socket server is running.`);
	}

	#initHandler() {
		this.#io.on('connection', (socket) => {
			this.#handleSocketConnection(socket);
		});
	}

	#handleSocketConnection(socket) {
		console.log(`New connection: ${socket.id}	`);

		socket.on('message', ({ userId, message, room }) => {
			this.#handleMessage(socket, userId, room, message);
		});

		socket.on('disconnect', () => {
			console.log(`User disconnected ${socket.id}`);
		});
	}

	#handleMessage(socket, userId, room, message) {
		console.log(`socket user: ${socket.user}`);
		console.log(`Message from ${userId} to ${room}: ${message}`);
	}

	emit(message, room, data) {
		this.#io.to(room).emit(message, data);
	}
}

export default Socket;
