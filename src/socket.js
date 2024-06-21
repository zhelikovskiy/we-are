import { Server } from 'socket.io';
import chatService from '../src/services/chat-service.js';

class Socket {
	static instance = null;

	#io = null;

	constructor() {
		if (Socket.instance) {
			return Socket.instance;
		}

		Socket.instance = this;
	}

	async init(httpServer) {
		if (this.#io) {
			return;
		}

		this.#io = new Server(httpServer, {
			cors: {
				origin: '*',
			},
		});
		await this.#initHandler();

		console.log(`Socket server is running.`);
	}

	#initHandler() {
		this.#io.on('connection', async (socket) => {
			const userRooms = await chatService.getManyByUserId(
				socket.handshake.auth.userId
			);

			userRooms.map((room) => {
				socket.join(room._id);
			});

			this.#handleSocketConnection(socket);
		});
	}

	#handleSocketConnection(socket) {
		console.log(`New connection: ${socket.id}`);

		socket.on('message', (data) => {
			this.#handleMessage(socket, data);
		});

		socket.on('disconnect', () => {
			console.log(`User disconnected ${socket.id}`);
		});
	}

	#handleMessage(socket, data) {
		const { room, message } = data;
		socket.emit('message', { message });
	}

	emit(message, room, data) {
		this.#io.to(room).emit(message, data);
	}
}

export default Socket;
