class HttpError extends Error {
	constructor(status, code, message) {
		super(message);
		this.code = code;
		this.status = status;
	}
}

export class UserNotFoundError extends HttpError {
	constructor() {
		super(400, 'USER_NOT_FOUND', 'User not found. Please check your email.');
	}
}

export class InvalidPasswordError extends HttpError {
	constructor() {
		super(400, 'INVALID_PASSWORD', 'Invalid password.');
	}
}

export class UserNameExistError extends HttpError {
	constructor() {
		super(400, 'USERNAME_EXIST', 'Username already exists.');
	}
}

export class EmailExistError extends HttpError {
	constructor() {
		super(400, 'EMAIL_EXIST', 'Email already exists.');
	}
}

export class ChatNameExistError extends HttpError {
	constructor() {
		super(400, 'CHAT_NAME_EXIST', 'Chat name already exists.');
	}
}
