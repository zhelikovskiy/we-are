import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		isPrivate: {
			type: Boolean,
			default: false,
		},
		password: {
			type: String,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		users: {
			type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
			validate: {
				validator: (v) => {
					return v.length > 0;
				},
				message: 'Chat must have at least one user.',
			},
		},
		messages: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Message',
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		virtuals: {
			usersCount: {
				get() {
					return this.users.length;
				},
			},
		},
		versionKey: false,
	}
);

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
