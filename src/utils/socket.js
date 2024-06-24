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

	initSocket = (httpServer) => {
		if (this.#io) {
			return;
		}

		this.#io = new Server(httpServer, {
			cors: {
				origin: '*',
			},
		});

		this.#handlers();

		console.log(`Socket server is running.`);
	};

	getIO = () => {
		if (!this.#io) throw new Error('Socket.io not initialized');
		return this.#io;
	};

	#handlers = () => {
		this.#io.on('connection', (socket) => {
			console.log(`New socket connected: ${socket.id}`);

			socket.on('join_room', ({ roomId }) => {
				socket.join(roomId);
				console.log(`Client ${socket.id} joined room ${roomId}`);
			});

			socket.on('leave_room', ({ roomId }) => {
				socket.leave(roomId);
				console.log(`Client ${socket.id} left room ${roomId}`);
			});

			socket.on('send_message', ({ roomId, message }) => {
				this.#io.to(roomId).emit('new_message', message);
			});

			socket.on('disconnect', () => {
				console.log('Socket disconnected', socket.id);
			});
		});
	};
}

export default Socket;
